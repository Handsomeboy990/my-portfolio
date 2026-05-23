import React from 'react';
import { motion } from 'framer-motion';
import ProfilPic from '@/src/assets/lauret_chacha.png';
import Cv from '@/src/assets/documents/Lauret_Chacha_Développeur_Web_Fullstack.pdf';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';
import {
  Download, ArrowRight, Code2, Server, Database,
  Terminal, Brain, Briefcase, Award,
} from 'lucide-react';
import { EXPERIENCES, EDUCATIONS } from '../constants';
import { Link } from 'react-router-dom';
import { loadPublicContent, PublicContentState } from '../lib/publicContent';
import { SkillCategory, SKILL_CATEGORIES, getSkillIcon } from '../lib/skillIcons';

export const Home: React.FC = () => {
  const { language, t } = useLanguage();
  const [publicContent, setPublicContent] = React.useState<PublicContentState | null>(null);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }
  };

  const fadeInHero = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const fadeInAbout = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 0.68, 0.41, 0.98] } }
  };

  const fadeInTimeline = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.12 } }
  };

  const staggerTimeline = {
    visible: { transition: { staggerChildren: 0.08 } }
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

  const heroTitle = publicContent?.hero.title || t.hero.title;
  const heroSubtitle = publicContent?.hero.subtitle || t.hero.subtitle;
  const cvUrl = publicContent?.hero.cvUrl || Cv;
  const experiences = publicContent?.experiences || EXPERIENCES;
  const educations = publicContent?.educations || EDUCATIONS;
  const avatarUrl = publicContent?.profile.avatarUrl || ProfilPic;
  const bioParagraphs = (publicContent?.profile.bio || '')
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  const fallbackBio = [t.about.bio_p1, t.about.bio_p2, t.about.bio_p3];
  const aboutBio = bioParagraphs.length ? bioParagraphs : fallbackBio;
  const seoTitle = publicContent?.seo.title || t.seo.home.title;
  const seoDescription = publicContent?.seo.description || t.seo.home.description;

  return (
    <motion.div 
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col gap-20 pb-20"
    >
      <SEO title={seoTitle} description={seoDescription} />
      
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-28 md:pt-28 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center text-center gap-5 z-10 relative">
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.65, ease: [0.34, 1.25, 0.64, 1] }}
            className="w-32 h-32 md:w-36 md:h-36 rounded-2xl border-2 border-primary/15 overflow-hidden shadow-lg mb-3"
          >
             <img src={avatarUrl} alt="Lauret CHACHA" className="w-full h-full object-cover" />
          </motion.div>

          <motion.h1
            initial="hidden" animate="visible" variants={fadeInHero}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            {heroTitle}
          </motion.h1>

          <motion.p
            initial="hidden" animate="visible" variants={fadeInHero}
            className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            {heroSubtitle}
          </motion.p>

          <motion.div
            initial="hidden" animate="visible" variants={fadeInHero}
            className="flex flex-wrap justify-center gap-3 mt-6"
          >
            <a href={cvUrl} download>
                <Button size="lg" className="gap-2">
                <Download className="h-4 w-4" /> {t.hero.cta_cv}
                </Button>
            </a>
            <Link to="/projects">
                <Button variant="outline" size="lg" className="gap-2">
                {t.hero.cta_projects} <ArrowRight className="h-4 w-4" />
                </Button>
            </Link>
          </motion.div>
        </div>

        {/* Background decorative blur */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px] -z-10" />
      </section>

      {/* ABOUT SECTION */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}
            className="space-y-7"
          >
            <motion.h2 variants={fadeInAbout} className="text-3xl font-bold flex items-center gap-2.5">
              <Brain className="text-primary h-7 w-7" />
              {t.about.title}
            </motion.h2>
            <motion.div variants={fadeInAbout} className="prose dark:prose-invert text-muted-foreground space-y-4 leading-relaxed">
              {aboutBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.div variants={fadeInAbout} className="pt-5">
               <h3 className="text-base font-semibold mb-3.5">{t.about.values_title}</h3>
               <div className="flex flex-wrap gap-2.5">
                 {t.about.values.map((val, i) => (
                   <span key={i} className="px-3.5 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border">
                     {val}
                   </span>
                 ))}
               </div>
            </motion.div>
          </motion.div>

          <div className="space-y-11">
            {/* TIMELINE EXPERIENCE */}
             <motion.div
               initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerTimeline}
             >
                <h3 className="text-2xl font-bold mb-5 flex items-center gap-2.5">
                    <Briefcase className="h-5 w-5 text-primary"/> {t.experience.title}
                </h3>
                <div className="border-l-2 border-border ml-2 space-y-7 pl-6 relative">
                    {experiences.map((exp, i) => (
                        <motion.div key={i} variants={fadeInTimeline} className="relative">
                            <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                            <span className="text-sm text-muted-foreground font-mono">{exp.year}</span>
                            <h4 className="text-lg font-semibold mt-0.5">{exp.role}</h4>
                            <p className="text-primary/80 font-medium">{exp.company}</p>
                            <p className="text-muted-foreground text-sm mt-1.5 leading-relaxed">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
             </motion.div>

             {/* EDUCATION */}
             <motion.div
               initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerTimeline}
             >
                <h3 className="text-2xl font-bold mb-5 flex items-center gap-2.5">
                    <Award className="h-5 w-5 text-primary"/> {t.education.title}
                </h3>
                <div className="space-y-3.5">
                    {educations.map((edu, i) => (
                        <motion.div key={i} variants={fadeInTimeline} className="p-4 rounded-lg bg-muted/40 border border-border">
                             <div className="flex justify-between items-start mb-1">
                                <h4 className="font-semibold text-[15px]">{edu.degree}</h4>
                                <span className="text-xs font-mono bg-background px-2 py-1 rounded border shrink-0 ml-3">{edu.year}</span>
                             </div>
                             <p className="text-sm text-muted-foreground">{edu.school}</p>
                        </motion.div>
                    ))}
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="container mx-auto px-4 bg-secondary/30 py-14 rounded-3xl">
        <h2 className="text-3xl font-bold text-center mb-10">{t.skills.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {SKILL_CATEGORIES.map((category) => {
            const dbForCategory = (publicContent?.skills || []).filter((s) => s.category === category).map((s) => s.name);
            const names = dbForCategory.length > 0 ? dbForCategory : FALLBACK_SKILLS[category];
            return (
              <SkillCard
                key={category}
                title={CATEGORY_TITLES(t)[category]}
                icon={CATEGORY_ICONS[category]}
                skills={names}
              />
            );
          })}
        </div>
      </section>

    </motion.div>
  );
};

const FALLBACK_SKILLS: Record<SkillCategory, string[]> = {
  frontend: ['HTML5', 'CSS3', 'React.js', 'Next.js', 'Vue.js', 'Tailwind CSS', 'TypeScript'],
  backend: ['Node.js', 'NestJS', 'PHP', 'Laravel', 'Python', 'Express', 'API REST'],
  database: ['MySQL', 'MongoDB', 'Prisma'],
  tools: ['Git', 'Docker', 'Linux', 'Postman', 'Vercel', 'WordPress', 'API'],
};

const CATEGORY_ICONS: Record<SkillCategory, React.ReactNode> = {
  frontend: <Code2 />,
  backend: <Server />,
  database: <Database />,
  tools: <Terminal />,
};

const CATEGORY_TITLES = (t: { skills: { frontend: string; backend: string; db: string; tools: string } }): Record<SkillCategory, string> => ({
  frontend: t.skills.frontend,
  backend: t.skills.backend,
  database: t.skills.db,
  tools: t.skills.tools,
});

const SkillCard: React.FC<{title: string, icon: React.ReactNode, skills: string[]}> = ({title, icon, skills}) => (
    <div className="bg-background p-6 rounded-xl shadow-sm border border-border transition-shadow hover:shadow-md">
        <div className="flex items-center gap-3 mb-5 text-primary">
            <div className="p-2 bg-primary/10 rounded-lg">
              {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6" })}
            </div>
            <h3 className="font-semibold text-lg text-foreground">{title}</h3>
        </div>
        <ul className="grid grid-cols-1 gap-2.5">
            {skills.map(name => (
                <li key={name} className="text-sm text-muted-foreground flex items-center gap-3 p-2 rounded-md hover:bg-secondary/50 transition-colors duration-150">
                    <div className="text-primary/80">
                      {getSkillIcon(name)}
                    </div>
                    <span className="font-medium">{name}</span>
                </li>
            ))}
        </ul>
    </div>
);