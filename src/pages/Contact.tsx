import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SEO } from '../components/SEO';
import { Mail, Github, Linkedin} from 'lucide-react';
import { motion } from 'framer-motion';


export const Contact: React.FC = () => {
  const { t, language } = useLanguage();

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

      <div className="w-full flex justify-center">
        <div className="max-w-md w-full bg-card border border-border rounded-2xl p-8 shadow-sm text-center space-y-8">

          {/* Social Info */}
          <div className="space-y-6">
            <h3 className="font-semibold text-xl">
              {language === 'fr' ? 'Me Joindre' : 'Connect'}
            </h3>

            <div className="flex flex-col items-center gap-4 text-muted-foreground">

              <a
                href="mailto:lauret.chacha@epitech.eu"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <div className="p-2 bg-secondary rounded-full">
                  <Mail className="h-5 w-5" />
                </div>
                lauret.chacha@epitech.eu
              </a>

              <a
                href="https://github.com/Handsomeboy990"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <div className="p-2 bg-secondary rounded-full">
                  <Github className="h-5 w-5" />
                </div>
                @Handsomeboy990
              </a>

              <a
                href="https://linkedin.com/in/lauret-kryst-sasler-chacha-a877161aa"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <div className="p-2 bg-secondary rounded-full">
                  <Linkedin className="h-5 w-5" />
                </div>
                Lauret CHACHA
              </a>
            </div>
          </div>

          {/* Message */}
          <div className="p-4 bg-primary/5 rounded-lg text-sm text-muted-foreground border border-primary/10 leading-relaxed">
            {language === 'fr'
              ? "Je suis actuellement ouvert aux nouvelles opportunités et collaborations. N'hésitez pas à me contacter !"
              : 'I am currently open to new opportunities and collaborations. Feel free to reach out!'}
          </div>
        </div>
      </div>
    </motion.div>
  );
};