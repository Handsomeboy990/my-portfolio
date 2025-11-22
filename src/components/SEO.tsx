import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, image }) => {
  const location = useLocation();
  const url = window.location.origin + location.pathname;
  
  // Defaults based on metadata.json
  const defaultName = "Portfolio Lauret CHACHA";
  const defaultDesc = "Portfolio professionnel de Lauret CHACHA, Développeur Full Stack. Multilingue, Dark Mode, Design Premium.";
  const defaultImage = 'https://picsum.photos/1200/630'; // Placeholder image for social cards

  useEffect(() => {
    const finalTitle = title ? `${title} | Lauret CHACHA` : defaultName;
    const finalDesc = description || defaultDesc;
    const finalImage = image || defaultImage;

    // Update Title
    document.title = finalTitle;

    // Helper to set meta tag
    const setMetaTag = (name: string, content: string, isProperty: boolean = false) => {
      const selector = isProperty ? `meta[property='${name}']` : `meta[name='${name}']`;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard SEO
    setMetaTag('description', finalDesc);

    // Open Graph (Facebook, LinkedIn)
    setMetaTag('og:title', finalTitle, true);
    setMetaTag('og:description', finalDesc, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:site_name', defaultName, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:image', finalImage, true);

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', finalTitle);
    setMetaTag('twitter:description', finalDesc);
    setMetaTag('twitter:image', finalImage);

  }, [title, description, image, url]);

  return null;
};