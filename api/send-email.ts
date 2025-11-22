export const config = {
    api: {
      bodyParser: true,
    },
  };
  
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.VITE_RESEND_API_KEY);
console.log("env: ", process.env.VITE_RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    console.log("REQ BODY:", req.body);

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Données manquantes' });
    }

    const data = await resend.emails.send({
      from: `${name} <${email}>`, // DYNAMIQUE
      to: ["contact@lauret.dev"], 
      subject: "Nouveau message depuis le portfolio",
      html: `
        <h2>Nouveau message depuis ton portfolio</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Erreur serveur' });
  }
}
