import { Content, Education, Experience, Project, Skill } from '../types';
import { 
  Code2, Database, Server, Settings, 
  Terminal, BookOpen, Users, Lightbulb, 
  Search, Brain, HeartPulse 
} from 'lucide-react';
import React from 'react';

export const TRANSLATIONS: Record<'fr' | 'en', Content> = {
  fr: {
    nav: {
      about: "Qui suis-je",
      projects: "Réalisations",
      contact: "Contact",
    },
    hero: {
      title: "Lauret Kryst-Sasler CHACHA",
      subtitle: "Développeur Web Full Stack | Entre biomédical et développement logiciel",
      cta_cv: "Télécharger mon CV",
      cta_projects: "Voir mes réalisations",
    },
    about: {
      title: "À Propos",
      subtitle: "Mon Parcours",
      bio_p1: "Issu d'un parcours scientifique rigoureux en analyses biomédicales, j'ai développé une méthodologie de travail précise et une forte capacité d'analyse.",
      bio_p2: "Ma curiosité pour la technologie et la logique m'a conduit à opérer une transition passionnée vers le développement web. Diplômé de la Coding Academy, j'allie aujourd'hui ma rigueur scientifique à la créativité du code.",
      bio_p3: "J'apprécie les environnements où je peux progresser tout en apportant une vraie valeur à l'équipe et au produit.",
      // bio_p3: "Je suis un développeur calme, posé et observateur. Je crois fermement que la discipline et l'honnêteté intellectuelle sont les clés d'un code de qualité.",
      values_title: "Mes Valeurs",
      values: ["Rigueur", "Honnêteté", "Discipline", "Curiosité"],
    },
    experience: {
      title: "Expériences Professionnelles",
    },
    education: {
      title: "Formations & Certifications",
    },
    skills: {
      title: "Compétences Techniques",
      frontend: "Frontend",
      backend: "Backend",
      db: "Base de données",
      tools: "Outils",
      soft: "Soft Skills",
    },
    projects: {
      title: "Mes Réalisations",
      subtitle: "Une sélection de mes projets récents",
      completed: "Projets Terminés",
      in_progress: "Projet en Cours",
      zemi_desc: "Une plateforme innovante de transport partagé visant à simplifier la mobilité urbaine.",
      zemi_features: "Authentification sécurisée, Géolocalisation temps réel, Matching chauffeur/passager, Paiement intégré.",
      zemi_roadmap: "Développement MVP mobile, Intégration IA pour l'optimisation des trajets.",
      view_project: "Voir le projet",
      source_code: "Code source",
    },
    perspectives: {
      title: "Perspectives",
      content: "Mon ambition est de devenir un architecte logiciel capable de concevoir des solutions complexes et scalables. Je souhaite approfondir mes connaissances en Cloud Computing et en DevOps dans les années à venir.",
    },
    contact: {
      title: "Me Contacter",
      subtitle: "Discutons de votre prochain projet",
      form_name: "Nom",
      form_email: "Email",
      form_message: "Message",
      form_send: "Envoyer le message",
      success_msg: "Message envoyé avec succès !",
      sending: "Envoi...",
    },
    seo: {
      home: {
        title: "Accueil",
        description: "Portfolio de Lauret CHACHA, Développeur Full Stack spécialisé en React, Node.js et Next.js. Découvrez mon parcours du biomédical à la tech."
      },
      projects: {
        title: "Mes Réalisations",
        description: "Découvrez les projets web de Lauret CHACHA : Yowl, My Shop, Dashboard, et Zémi, la plateforme de transport partagé."
      },
      contact: {
        title: "Contact",
        description: "Contactez Lauret CHACHA pour vos projets de développement web. Disponible pour freelance et opportunités CDI."
      }
    }
  },
  en: {
    nav: {
      about: "About Me",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Lauret CHACHA",
      subtitle: "Full Stack Web Developer | Bridging Biomedical Science & Software Engineering",
      cta_cv: "Download Resume",
      cta_projects: "View Projects",
    },
    about: {
      title: "About Me",
      subtitle: "My Journey",
      bio_p1: "With a rigorous background in biomedical analysis, I have developed precise working methodologies and strong analytical skills.",
      bio_p2: "My curiosity for technology and logic led me to a passionate transition into web development. A graduate of the Coding Academy, I now combine scientific rigor with creative coding.",
      bio_p3: "I appreciate environments where I can grow while adding real value to the team and the product.",
      // bio_p3: "I am a calm, composed, and observant developer. I firmly believe that discipline and intellectual honesty are the keys to quality software.",
      values_title: "My Values",
      values: ["Rigor", "Honesty", "Discipline", "Curiosity"],
    },
    experience: {
      title: "Professional Experience",
    },
    education: {
      title: "Education & Certifications",
    },
    skills: {
      title: "Technical Skills",
      frontend: "Frontend",
      backend: "Backend",
      db: "Database",
      tools: "Tools",
      soft: "Soft Skills",
    },
    projects: {
      title: "My Portfolio",
      subtitle: "A selection of my recent work",
      completed: "Completed Projects",
      in_progress: "Work in Progress",
      zemi_desc: "An innovative shared transport platform aiming to simplify urban mobility.",
      zemi_features: "Secure Auth, Real-time Geolocation, Driver/Passenger Matching, Integrated Payments.",
      zemi_roadmap: "Mobile MVP Development, AI Integration for route optimization.",
      view_project: "View Project",
      source_code: "Source Code",
    },
    perspectives: {
      title: "Perspectives",
      content: "My ambition is to become a software architect capable of designing complex and scalable solutions. I aim to deepen my knowledge in Cloud Computing and DevOps in the coming years.",
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Let's talk about your next project",
      form_name: "Name",
      form_email: "Email",
      form_message: "Message",
      form_send: "Send Message",
      success_msg: "Message sent successfully!",
      sending: "Sending...",
    },
    seo: {
      home: {
        title: "Home",
        description: "Portfolio of Lauret CHACHA, Full Stack Developer specializing in React, Node.js, and Next.js. Discover my journey from biomedical science to tech."
      },
      projects: {
        title: "My Projects",
        description: "Explore Lauret CHACHA's web projects: Yowl, My Shop, Dashboard, and Zémi, the shared transport platform."
      },
      contact: {
        title: "Contact",
        description: "Get in touch with Lauret CHACHA for your web development projects. Available for freelance and full-time opportunities."
      }
    }
  },
};

export const EXPERIENCES: Experience[] = [
  {
    year: "2025 - Present",
    role: "Full Stack Developer",
    company: "Epitech",
    description: "Development of web applications using React, Node.js and Next.js.",
  },
  {
    year: "2024 - Present",
    role: "Junior web Developer",
    company: "Cicasys",
    description: "Responsible for the deployment and maintenance of Medica, which is a medical management software program.",
  }
];

export const EDUCATIONS: Education[] = [
  {
    year: "2026",
    degree: "Full Stack Developer Certification",
    school: "Epitech (Coding Academy)",
  },
  // {
  //   year: "2025",
  //   degree: "Full Stack Developer Certification",
  //   school: "Epitech (Coding Academy)",
  // },
  {
    year: "2023",
    degree: "Bachelor's Degree in Biochemical and Biomedical Technologies",
    school: "FOPASE Higher Institute",
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "YOWL",
    description: "A content aggregation platform allowing users to comment and rate content, similar to Reddit.",
    tags: ["VueJs", "Laravel", "MySQL"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    repoUrl: "https://yowl-community.netlify.app/",
    status: 'completed'
  },
  {
    title: "FlowTIckets",
    description: "Complete e-commerce solution with cart management, stripe payment, and admin dashboard.",
    tags: ["TypeScript", "EJS", "Node.js", "MongoDB"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    repoUrl: "https://github.com/Handsomeboy990/my-shop",
    status: 'completed'
  },
  {
    title: "Dashboard",
    description: "Administrative panel for data visualization and user management.",
    tags: ["Nest.js", "Tailwind", "JavaScript",],
    imageUrl: "https://media.canva.com/v2/image-resize/format:PNG/height:275/quality:100/uri:ifs%3A%2F%2FM%2F106a5006-2bbb-4833-84d3-44130a2b728d/watermark:F/width:550?csig=AAAAAAAAAAAAAAAAAAAAAHpra9y3LPvt3GGtWfA5m_T897X9IPL4z8TNB-k3bIKG&exp=1763847351&osig=AAAAAAAAAAAAAAAAAAAAAA3geFy-8eg19pljzW3bVBLKnSMd7Uv7XFgdp-NDXHSE&signer=media-rpc&x-canva-quality=thumbnail_large",
    repoUrl: "https://github.com/Handsomeboy990/dashboard",
    status: 'completed'
  },
  {
    title: "My Rotten Tomatoes",
    description: "Movie rating application utilizing external movie database APIs.",
    tags: ["NextJs", "API"],
    imageUrl: "https://media.canva.com/v2/image-resize/format:PNG/height:286/quality:100/uri:ifs%3A%2F%2FM%2F80bb5a64-6964-45fe-b21d-579ed43a2c0f/watermark:F/width:550?csig=AAAAAAAAAAAAAAAAAAAAAAqqvIH2RTmIH7RS3BUAtritnPW4WX7jzYl3IOQEwegk&exp=1763839160&osig=AAAAAAAAAAAAAAAAAAAAAGLoCWTWHCh2qGIXZjc1YXU2ame3zsB0Vtt7hNMpprtR&signer=media-rpc&x-canva-quality=thumbnail_large",
    repoUrl: "https://rotten2.vercel.app/",
    status: 'completed'
  },
  {
    title: "TaskIT",
    description: "Interactive task management tool inspired by sticky notes.",
    tags: ["JavaScript", "VueJs", "TypeScript"],
    imageUrl: "https://media.canva.com/v2/image-resize/format:PNG/height:276/quality:100/uri:ifs%3A%2F%2FM%2F19d15885-8184-41aa-a162-e59679cc2640/watermark:F/width:550?csig=AAAAAAAAAAAAAAAAAAAAACgOMclQ2cxmkJOD3aLkkc1ErEr0S140vg1opGaH1G7x&exp=1763847953&osig=AAAAAAAAAAAAAAAAAAAAAGwdRUVxgZhMQHSp7M-vqyL3nRe9F3-tLyXa4bUXMFQl&signer=media-rpc&x-canva-quality=thumbnail_large",
    repoUrl: "https://github.com/Handsomeboy990/post-it",
    status: 'completed'
  },
  {
    title: "TrellTech",
    description: "Project management clone (Trello-like) with drag-and-drop capabilities.",
    tags: ["TypeScript", "NestJS", "PostgreSQL"],
    imageUrl: "https://picsum.photos/600/400?random=6",
    repoUrl: "https://github.com/Handsomeboy990/trelltech",
    status: 'completed'
  }
];

export const ZEMI_PROJECT: Project = {
  title: "Zémi",
  description: "Platform aimed at revolutionizing shared transport in urban environments.",
  tags: ["NextJs", "Supabase", "TypeScript"],
  imageUrl: "https://picsum.photos/600/400?random=7",
  repoUrl: "https://github.com/Handsomeboy990/zemi",
  status: 'in-progress'
};