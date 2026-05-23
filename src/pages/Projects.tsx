import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';
import { PROJECTS_DATA, ZEMI_PROJECT } from '../constants';
import { Github, ExternalLink, Layers, Rocket } from 'lucide-react';
import { loadPublicContent, PublicContentState } from '../lib/publicContent';
import { supabase } from '../lib/supabase';

export const Projects: React.FC = () => {
  const { language, t } = useLanguage();
  const [publicContent, setPublicContent] = React.useState<PublicContentState | null>(null);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }
  };

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

  React.useEffect(() => {
    const client = supabase;
    if (!client) {
      return;
    }

    const refresh = () => {
      loadPublicContent(language).then((content) => {
        setPublicContent(content);
      });
    };

    const channel = client.channel('public:projects')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'projects' }, refresh)
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'projects' }, refresh)
      .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'projects' }, refresh)
      .subscribe();

    return () => {
      try {
        channel.unsubscribe();
      } catch {
        try {
          client.removeChannel?.(channel);
        } catch {
          /* ignore */
        }
      }
    };
  }, [language]);

  const projects = publicContent?.projects || PROJECTS_DATA;
  const zemiProject = publicContent?.zemiProject || ZEMI_PROJECT;
  const seoTitle = publicContent?.seo.title || t.seo.projects.title;
  const seoDescription = publicContent?.seo.description || t.seo.projects.description;

  const sortedProjects = [...projects].sort((a, b) => {
    const orderA = typeof a.sort_order === 'number' ? a.sort_order : 0;
    const orderB = typeof b.sort_order === 'number' ? b.sort_order : 0;

    return orderA - orderB;
  });

  return (
    <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="container mx-auto px-4 py-12 md:py-20 space-y-20"
    >
      <SEO title={seoTitle} description={seoDescription} />
      
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{t.projects.title}</h1>
        <p className="text-xl text-muted-foreground">{t.projects.subtitle}</p>
      </div>

      {/* Completed Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-7 border-b border-border pb-3.5">{t.projects.completed}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {sortedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: index * 0.08 + 0.05,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-border/70 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5 gap-2">
                    <a href={project.repoUrl} target="_blank" rel="noreferrer">
                        <Button size="sm" variant="secondary" className="gap-2 shadow-lg">
                            <ExternalLink className="h-4 w-4" /> Go to
                        </Button>
                    </a>
                    {project.demoUrl && (
                        <Button size="sm" variant="secondary" className="gap-2 shadow-lg">
                            <ExternalLink className="h-4 w-4" /> Demo
                        </Button>
                    )}
                </div>
              </div>
              <div className="p-5 space-y-3.5">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 bg-secondary rounded-md font-medium text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* In Progress - ZEMI */}
      <section className="bg-muted/30 rounded-3xl p-8 md:p-11 border border-primary/10">
        <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1 space-y-5">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wide text-xs">
                    <Rocket className="h-4 w-4" /> {t.projects.in_progress}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{zemiProject.title}</h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{t.projects.zemi_desc}</p>

                <div className="space-y-3.5 pt-2">
                    <div className="flex gap-3 items-start">
                        <Layers className="h-5 w-5 mt-0.5 text-primary shrink-0" />
                        <div>
                            <h4 className="font-semibold text-[15px] mb-1">{language === 'fr' ? 'Fonctionnalités' : 'Features'}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{t.projects.zemi_features}</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-start">
                        <Rocket className="h-5 w-5 mt-0.5 text-primary shrink-0" />
                        <div>
                            <h4 className="font-semibold text-[15px] mb-1">{language === 'fr' ? 'Feuille de route' : 'Roadmap'}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{t.projects.zemi_roadmap}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-3">
                    {zemiProject.tags.map(tag => (
                        <span key={tag} className="text-xs px-2.5 py-1 border border-primary/30 text-primary rounded-md font-medium">
                        {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex-1 w-full">
                 <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center border border-border shadow-xl overflow-hidden">
                        <img
                      src={zemiProject.imageUrl}
                      alt={zemiProject.title}
                        className="w-full h-full object-cover"
                      />
                 </div>
            </div>
        </div>
      </section>

      {/* Perspectives */}
      <section className="max-w-2xl mx-auto text-center space-y-5">
          <h2 className="text-2xl font-bold">{t.perspectives.title}</h2>
          <p className="text-muted-foreground italic text-base md:text-lg leading-relaxed">"{t.perspectives.content}"</p>
      </section>

    </motion.div>
  );
};