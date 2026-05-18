import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SEO } from '../components/SEO';
import { Mail, Github, Linkedin} from 'lucide-react';
import { motion } from 'framer-motion';


export const Contact: React.FC = () => {
  const { t, language } = useLanguage();

  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  return (
    <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="container mx-auto px-4 py-12 md:py-20 max-w-3xl"
    >
      <SEO title={t.seo.contact.title} description={t.seo.contact.description} />

      <div className="text-center space-y-3 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">{t.contact.title}</h1>
        <p className="text-base md:text-lg text-muted-foreground">{t.contact.subtitle}</p>
      </div>

      <div className="w-full flex justify-center">
        <div className="max-w-lg w-full bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm text-center space-y-7">

          {/* Message */}
          <div className="p-4 bg-primary/5 rounded-xl text-sm md:text-base text-muted-foreground border border-primary/10 leading-relaxed">
            {language === 'fr'
              ? "Je suis actuellement ouvert aux nouvelles opportunités et collaborations. N'hésitez pas à me contacter !"
              : 'I am currently open to new opportunities and collaborations. Feel free to reach out!'}
          </div>

          {/* Social Info */}
          <div className="space-y-5">
            <h3 className="font-semibold text-lg text-foreground">
              {language === 'fr' ? 'Me Joindre' : 'Connect'}
            </h3>

            <div className="flex flex-col items-stretch gap-3 text-muted-foreground">

              <a
                href="mailto:lauret.chacha@epitech.eu"
                className="flex items-center gap-3.5 p-3 rounded-lg hover:bg-secondary/70 transition-colors duration-200 text-left"
              >
                <div className="p-2.5 bg-secondary rounded-lg shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-sm md:text-base">lauret.chacha@epitech.eu</span>
              </a>

              <a
                href="https://github.com/Handsomeboy990"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-lg hover:bg-secondary/70 transition-colors duration-200 text-left"
              >
                <div className="p-2.5 bg-secondary rounded-lg shrink-0">
                  <Github className="h-5 w-5" />
                </div>
                <span className="text-sm md:text-base">@Handsomeboy990</span>
              </a>

              <a
                href="https://linkedin.com/in/lauret-kryst-sasler-chacha-a877161aa"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-lg hover:bg-secondary/70 transition-colors duration-200 text-left"
              >
                <div className="p-2.5 bg-secondary rounded-lg shrink-0">
                  <Linkedin className="h-5 w-5" />
                </div>
                <span className="text-sm md:text-base">Lauret CHACHA</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};