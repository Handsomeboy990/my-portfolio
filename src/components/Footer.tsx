import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { loadPublicContent, PublicContentState } from '../lib/publicContent';

const DEFAULT_EMAIL = 'lauret.chacha@epitech.eu';
const DEFAULT_GITHUB = 'https://github.com/Handsomeboy990';
const DEFAULT_LINKEDIN = 'https://linkedin.com/in/lauret-kryst-sasler-chacha-a877161aa';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const [publicContent, setPublicContent] = React.useState<PublicContentState | null>(null);

  React.useEffect(() => {
    let isMounted = true;

    loadPublicContent(language).then((content) => {
      if (isMounted) {
        setPublicContent(content);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [language]);

  const email = publicContent?.profile.email || DEFAULT_EMAIL;
  const githubUrl = publicContent?.profile.githubUrl || DEFAULT_GITHUB;
  const linkedinUrl = publicContent?.profile.linkedinUrl || DEFAULT_LINKEDIN;
  const siteName = publicContent?.siteName || 'Lauret CHACHA';
  const footerText = publicContent?.footerText || `© ${new Date().getFullYear()} ${siteName}. All rights reserved.`;

  return (
    <footer className="border-t border-border bg-muted/30 py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          {footerText}
        </p>

        <div className="flex items-center gap-4">
          <a href={githubUrl} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={`mailto:${email}`} className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
