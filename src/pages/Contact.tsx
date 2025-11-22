import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';
import { Mail, Send, Github, Linkedin, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (formData.name.trim().length < 2) {
      newErrors.name = language === 'fr' 
        ? "Le nom doit contenir au moins 2 caractères" 
        : "Name must be at least 2 characters";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = language === 'fr' 
        ? "Veuillez entrer une adresse email valide" 
        : "Please enter a valid email address";
      isValid = false;
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = language === 'fr' 
        ? "Le message doit contenir au moins 10 caractères" 
        : "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Clear error immediately when user types
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
    // Reset status if user modifies form after error
    if (status === 'error') {
        setStatus('idle');
        setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setStatus('submitting');
    setErrorMessage(null);

    try {
      // Simulate API Call (Replace with actual Resend/Nodemailer fetch call)
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          // Simulate a random network error for demonstration (10% chance)
          // In production, remove this random failure logic.
          const randomFail = Math.random() < 0.05; 
          if (randomFail) {
             reject(new Error("Network Error"));
          } else {
             resolve();
          }
        }, 1500);
      });

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        language === 'fr' 
          ? "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer." 
          : "An error occurred while sending the message. Please try again."
      );
    }
  };

  const getInputClass = (hasError: boolean) => 
    `w-full rounded-md border ${hasError ? 'border-red-500 focus-visible:ring-red-500' : 'border-input focus-visible:ring-ring'} bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 transition-colors`;

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  return (
    <motion.div 
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="container mx-auto px-4 py-12 md:py-24 max-w-4xl"
    >
      <SEO title={t.seo.contact.title} description={t.seo.contact.description} />
      
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">{t.contact.title}</h1>
        <p className="text-lg text-muted-foreground">{t.contact.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-5 gap-12 bg-card border border-border rounded-2xl p-8 shadow-sm">
        {/* Social Info */}
        <div className="md:col-span-2 space-y-8 border-b md:border-b-0 md:border-r border-border pb-8 md:pb-0 md:pr-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <a href="mailto:lauret.chacha@epitech.eu" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
              <div className="p-2 bg-secondary rounded-full"><Mail className="h-5 w-5" /></div>
              lauret.chacha@epitech.eu
            </a>
            <a href="https://github.com/Handsomeboy990" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
              <div className="p-2 bg-secondary rounded-full"><Github className="h-5 w-5" /></div>
              @Handsomeboy990
            </a>
            <a href="https://linkedin.com/in/lauret-kryst-sasler-chacha-a877161aa" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
              <div className="p-2 bg-secondary rounded-full"><Linkedin className="h-5 w-5" /></div>
              Lauret CHACHA
            </a>
          </div>
          <div className="p-4 bg-primary/5 rounded-lg text-sm text-muted-foreground border border-primary/10">
             "{language === 'fr' ? 'Je suis actuellement ouvert aux nouvelles opportunités et collaborations. N\'hésitez pas à me contacter !' : 'I am currently open to new opportunities and collaborations. Feel free to reach out!'}"
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-3">
          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
            >
              <CheckCircle className="h-16 w-16 text-green-500" />
              <h3 className="text-2xl font-bold">{t.contact.success_msg}</h3>
              <Button variant="outline" onClick={() => setStatus('idle')}>
                {language === 'fr' ? 'Envoyer un autre message' : 'Send another message'}
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              <AnimatePresence>
                {status === 'error' && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-start gap-3 text-red-600"
                    >
                        <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                        <div className="text-sm font-medium">{errorMessage}</div>
                    </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <div className="flex justify-between">
                    <label htmlFor="name" className="text-sm font-medium">{t.contact.form_name}</label>
                    <AnimatePresence>
                        {errors.name && (
                            <motion.span 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-xs text-red-500 flex items-center gap-1"
                            >
                                <XCircle className="h-3 w-3" /> {errors.name}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
                <input 
                  id="name"
                  type="text" 
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className={getInputClass(!!errors.name)}
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                    <label htmlFor="email" className="text-sm font-medium">{t.contact.form_email}</label>
                    <AnimatePresence>
                        {errors.email && (
                            <motion.span 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-xs text-red-500 flex items-center gap-1"
                            >
                                <XCircle className="h-3 w-3" /> {errors.email}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
                <input 
                  id="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className={getInputClass(!!errors.email)}
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                    <label htmlFor="message" className="text-sm font-medium">{t.contact.form_message}</label>
                    <AnimatePresence>
                        {errors.message && (
                            <motion.span 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-xs text-red-500 flex items-center gap-1"
                            >
                                <XCircle className="h-3 w-3" /> {errors.message}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
                <textarea 
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className={`${getInputClass(!!errors.message)} resize-none`}
                  placeholder={language === 'fr' ? "Bonjour, j'aimerais discuter de..." : "Hello, I would like to discuss..."}
                />
              </div>

              <Button type="submit" disabled={status === 'submitting'} className="w-full gap-2">
                {status === 'submitting' ? (
                    <>
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="h-4 w-4 border-2 border-current border-t-transparent rounded-full"
                      />
                      {t.contact.sending}
                    </>
                ) : (
                    <> {t.contact.form_send} <Send className="h-4 w-4" /> </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
};