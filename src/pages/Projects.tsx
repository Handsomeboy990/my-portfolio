import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';
import { PROJECTS_DATA, ZEMI_PROJECT } from '../constants';
import { Github, ExternalLink, Layers, Rocket } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.4 }
  };

  return (
    <motion.div 
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="container mx-auto px-4 py-12 md:py-20 space-y-24"
    >
      <SEO title={t.seo.projects.title} description={t.seo.projects.description} />
      
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{t.projects.title}</h1>
        <p className="text-xl text-muted-foreground">{t.projects.subtitle}</p>
      </div>

      {/* Completed Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-8 border-b border-border pb-4">{t.projects.completed}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <a href={project.repoUrl} target="_blank" rel="noreferrer">
                        <Button size="sm" variant="secondary" className="gap-2">
                            <ExternalLink className="h-4 w-4" /> Go to
                        </Button>
                    </a>
                    {project.demoUrl && (
                        <Button size="sm" variant="secondary" className="gap-2">
                            <ExternalLink className="h-4 w-4" /> Demo
                        </Button>
                    )}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-md font-medium text-secondary-foreground">
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
      <section className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-primary/10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-6">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wide text-sm">
                    <Rocket className="h-4 w-4" /> {t.projects.in_progress}
                </div>
                <h2 className="text-4xl font-bold">{ZEMI_PROJECT.title}</h2>
                <p className="text-lg text-muted-foreground">{t.projects.zemi_desc}</p>
                
                <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                        <Layers className="h-5 w-5 mt-1 text-primary" />
                        <div>
                            <h4 className="font-semibold">Features</h4>
                            <p className="text-sm text-muted-foreground">{t.projects.zemi_features}</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-start">
                        <Rocket className="h-5 w-5 mt-1 text-primary" />
                        <div>
                            <h4 className="font-semibold">Roadmap</h4>
                            <p className="text-sm text-muted-foreground">{t.projects.zemi_roadmap}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                    {ZEMI_PROJECT.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 border border-primary/30 text-primary rounded-md font-medium">
                        {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex-1 w-full">
                 <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center border border-border shadow-2xl">
                    {/* <span className="text-2xl font-mono text-white/50">No preview right now</span> */}
                        <img 
                        src={ZEMI_PROJECT.imageUrl} 
                        alt={ZEMI_PROJECT.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                 </div>
            </div>
        </div>
      </section>

      {/* Perspectives */}
      <section className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold">{t.perspectives.title}</h2>
          <p className="text-muted-foreground italic text-lg">"{t.perspectives.content}"</p>
      </section>

    </motion.div>
  );
};