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
  Atom, FileCode2, Palette, Zap, Wind, Braces,
  Hexagon, Globe, Workflow, Layers, 
  Table, FileJson, Triangle, Container, GitBranch,
  Send, Command
} from 'lucide-react';
import { EXPERIENCES, EDUCATIONS } from '../constants';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const { t } = useLanguage();

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.4 }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <motion.div 
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col gap-20 pb-20"
    >
      <SEO title={t.seo.home.title} description={t.seo.home.description} />
      
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 md:pt-32 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center text-center gap-6 z-10 relative">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/20 overflow-hidden shadow-xl mb-4"
          >
             <img src={ProfilPic} alt="Lauret CHACHA" className="w-full h-full object-cover" />
          </motion.div>

          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-gray-500"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div 
            initial="hidden" animate="visible" variants={fadeIn}
            className="flex flex-wrap justify-center gap-4 mt-4"
          >
            <a href={Cv} download>
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      </section>

      {/* ABOUT SECTION */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="space-y-6"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold flex items-center gap-2">
              <Brain className="text-primary h-8 w-8" />
              {t.about.title}
            </motion.h2>
            <motion.div variants={fadeIn} className="prose dark:prose-invert text-muted-foreground space-y-4">
              <p>{t.about.bio_p1}</p>
              <p>{t.about.bio_p2}</p>
              <p>{t.about.bio_p3}</p>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-6">
               <h3 className="text-lg font-semibold mb-4">{t.about.values_title}</h3>
               <div className="flex flex-wrap gap-3">
                 {t.about.values.map((val, i) => (
                   <span key={i} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border">
                     {val}
                   </span>
                 ))}
               </div>
            </motion.div>
          </motion.div>

          <div className="space-y-12">
            {/* TIMELINE EXPERIENCE */}
             <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
             >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary"/> {t.experience.title}
                </h3>
                <div className="border-l-2 border-border ml-2 space-y-8 pl-6 relative">
                    {EXPERIENCES.map((exp, i) => (
                        <motion.div key={i} variants={fadeIn} className="relative">
                            <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                            <span className="text-sm text-muted-foreground font-mono">{exp.year}</span>
                            <h4 className="text-lg font-semibold">{exp.role}</h4>
                            <p className="text-primary/80 font-medium">{exp.company}</p>
                            <p className="text-muted-foreground text-sm mt-1">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
             </motion.div>

             {/* EDUCATION */}
             <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
             >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary"/> {t.education.title}
                </h3>
                <div className="space-y-4">
                    {EDUCATIONS.map((edu, i) => (
                        <motion.div key={i} variants={fadeIn} className="p-4 rounded-lg bg-muted/40 border border-border">
                             <div className="flex justify-between items-start mb-1">
                                <h4 className="font-semibold">{edu.degree}</h4>
                                <span className="text-xs font-mono bg-background px-2 py-1 rounded border">{edu.year}</span>
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
      <section className="container mx-auto px-4 bg-secondary/30 py-16 rounded-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">{t.skills.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
          {/* FRONTEND */}
          <SkillCard 
            title={t.skills.frontend} 
            icon={<Code2 />} 
            skills={[
              { name: "HTML5", icon: <FileCode2 className="w-4 h-4" /> },
              { name: "CSS3", icon: <Palette className="w-4 h-4" /> },
              { name: "React.js", icon: <Atom className="w-4 h-4" /> },
              { name: "Next.js", icon: <Zap className="w-4 h-4" /> },
              { name: "Vue.js", icon: <Layers className="w-4 h-4" /> },   // nouveau
              { name: "Tailwind CSS", icon: <Wind className="w-4 h-4" /> },
              { name: "TypeScript", icon: <Braces className="w-4 h-4" /> }
            ]} 
          />

          {/* BACKEND */}
          <SkillCard 
            title={t.skills.backend} 
            icon={<Server />} 
            skills={[
              { name: "Node.js", icon: <Hexagon className="w-4 h-4" /> },
              { name: "NestJS", icon: <Layers className="w-4 h-4" /> },
              { name: "PHP", icon: <FileJson className="w-4 h-4" /> },
              { name: "Laravel", icon: <Layers className="w-4 h-4" /> }, // nouveau
              { name: "Python", icon: <Code2 className="w-4 h-4" /> },    // nouveau
              { name: "Express", icon: <Workflow className="w-4 h-4" /> },
              { name: "API REST", icon: <Globe className="w-4 h-4" /> }
            ]} 
          />

          {/* DATABASE */}
          <SkillCard 
            title={t.skills.db} 
            icon={<Database />} 
            skills={[
              // { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
              { name: "MySQL", icon: <Table className="w-4 h-4" /> },
              { name: "MongoDB", icon: <FileJson className="w-4 h-4" /> },
              { name: "Prisma", icon: <Triangle className="w-4 h-4" /> }
            ]} 
          />

          {/* TOOLS & CMS */}
          <SkillCard 
            title={t.skills.tools} 
            icon={<Terminal />} 
            skills={[
              { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
              { name: "Docker", icon: <Container className="w-4 h-4" /> },
              { name: "Linux", icon: <Command className="w-4 h-4" /> },
              { name: "Postman", icon: <Send className="w-4 h-4" /> },
              { name: "Vercel", icon: <Triangle className="w-4 h-4 rotate-180" /> },
              { name: "WordPress", icon: <Globe className="w-4 h-4" /> },  // nouveau
              { name: "API", icon: <Globe className="w-4 h-4" /> }          // nouveau
            ]} 
          />
          
        </div>
      </section>

    </motion.div>
  );
};

const SkillCard: React.FC<{title: string, icon: React.ReactNode, skills: {name: string, icon: React.ReactNode}[]}> = ({title, icon, skills}) => (
    <motion.div 
        whileHover={{ y: -5 }}
        className="bg-background p-6 rounded-xl shadow-sm border border-border"
    >
        <div className="flex items-center gap-3 mb-6 text-primary">
            <div className="p-2 bg-primary/10 rounded-lg">
              {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6" })}
            </div>
            <h3 className="font-semibold text-lg text-foreground">{title}</h3>
        </div>
        <ul className="grid grid-cols-1 gap-3">
            {skills.map(s => (
                <li key={s.name} className="text-sm text-muted-foreground flex items-center gap-3 p-2 rounded-md hover:bg-secondary/50 transition-colors">
                    <div className="text-primary/80">
                      {s.icon}
                    </div>
                    <span className="font-medium">{s.name}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);