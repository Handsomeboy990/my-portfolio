import React from 'react';
import {
  Atom,
  Braces,
  Cloud,
  Code,
  Code2,
  Coffee,
  Cog,
  Command,
  Container,
  CreditCard,
  Database,
  FileCode2,
  FileJson,
  Flame,
  Gem,
  GitBranch,
  Globe,
  Hexagon,
  Image as ImageIcon,
  Layers,
  Mail,
  Package,
  Palette,
  Send,
  Server,
  Smartphone,
  Table,
  Terminal,
  TestTube,
  Triangle,
  Wind,
  Workflow,
  Zap,
} from 'lucide-react';

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools';

const ICON_CLASS = 'w-4 h-4';

const make = (Component: React.ComponentType<{ className?: string }>, extraClass = ''): React.ReactNode => (
  <Component className={`${ICON_CLASS}${extraClass ? ` ${extraClass}` : ''}`} />
);

const ICON_MAP: Record<string, React.ReactNode> = {
  // Frontend
  'react': make(Atom),
  'react.js': make(Atom),
  'reactjs': make(Atom),
  'react native': make(Smartphone),
  'next': make(Triangle),
  'next.js': make(Triangle),
  'nextjs': make(Triangle),
  'vue': make(Layers),
  'vue.js': make(Layers),
  'vuejs': make(Layers),
  'nuxt': make(Triangle),
  'nuxt.js': make(Triangle),
  'angular': make(Code),
  'svelte': make(Flame),
  'sveltekit': make(Flame),
  'astro': make(Zap),
  'html': make(FileCode2),
  'html5': make(FileCode2),
  'css': make(Palette),
  'css3': make(Palette),
  'sass': make(Palette),
  'scss': make(Palette),
  'tailwind': make(Wind),
  'tailwind css': make(Wind),
  'tailwindcss': make(Wind),
  'bootstrap': make(Palette),
  'typescript': make(Braces),
  'ts': make(Braces),
  'javascript': make(Braces),
  'js': make(Braces),

  // Backend
  'node': make(Hexagon),
  'node.js': make(Hexagon),
  'nodejs': make(Hexagon),
  'express': make(Workflow),
  'express.js': make(Workflow),
  'nest': make(Layers),
  'nest.js': make(Layers),
  'nestjs': make(Layers),
  'fastify': make(Zap),
  'php': make(FileJson),
  'laravel': make(Layers),
  'symfony': make(Layers),
  'python': make(Code2),
  'django': make(Server),
  'flask': make(Server),
  'fastapi': make(Zap),
  'java': make(Coffee),
  'spring': make(Server),
  'spring boot': make(Server),
  'kotlin': make(Code2),
  'go': make(Code),
  'golang': make(Code),
  'rust': make(Cog),
  'ruby': make(Gem),
  'rails': make(Gem),
  'ruby on rails': make(Gem),
  '.net': make(Code),
  'c#': make(Code),
  'c++': make(Code),
  'api': make(Globe),
  'api rest': make(Globe),
  'rest': make(Globe),
  'rest api': make(Globe),
  'graphql': make(Hexagon),
  'grpc': make(Workflow),
  'websocket': make(Workflow),

  // Database
  'mysql': make(Table),
  'postgres': make(Database),
  'postgresql': make(Database),
  'sqlite': make(Database),
  'mongodb': make(FileJson),
  'mongo': make(FileJson),
  'redis': make(Database),
  'prisma': make(Triangle),
  'sequelize': make(Database),
  'typeorm': make(Database),
  'firebase': make(Flame),
  'firestore': make(Flame),
  'supabase': make(Database),
  'dynamodb': make(Database),
  'mariadb': make(Table),
  'elasticsearch': make(Database),

  // Tools / DevOps / CMS
  'git': make(GitBranch),
  'github': make(GitBranch),
  'gitlab': make(GitBranch),
  'bitbucket': make(GitBranch),
  'docker': make(Container),
  'kubernetes': make(Container),
  'k8s': make(Container),
  'linux': make(Command),
  'bash': make(Terminal),
  'zsh': make(Terminal),
  'shell': make(Terminal),
  'postman': make(Send),
  'insomnia': make(Send),
  'vercel': make(Triangle, 'rotate-180'),
  'netlify': make(Globe),
  'aws': make(Cloud),
  'gcp': make(Cloud),
  'azure': make(Cloud),
  'cloudflare': make(Cloud),
  'heroku': make(Cloud),
  'digitalocean': make(Cloud),
  'wordpress': make(Globe),
  'figma': make(Palette),
  'photoshop': make(ImageIcon),
  'illustrator': make(ImageIcon),
  'vite': make(Zap),
  'webpack': make(Layers),
  'rollup': make(Layers),
  'esbuild': make(Zap),
  'npm': make(Package),
  'yarn': make(Package),
  'pnpm': make(Package),
  'jest': make(TestTube),
  'vitest': make(TestTube),
  'cypress': make(TestTube),
  'playwright': make(TestTube),
  'storybook': make(Layers),
  'stripe': make(CreditCard),
  'sendgrid': make(Mail),
  'resend': make(Mail),
  'mailgun': make(Mail),
  'ci/cd': make(Workflow),
  'github actions': make(GitBranch),
  'jenkins': make(Workflow),
};

const normalize = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/^@/, '');

export const getSkillIcon = (name: string): React.ReactNode => {
  if (!name) return make(Code);

  const key = normalize(name);
  if (ICON_MAP[key]) return ICON_MAP[key];

  const compact = key.replace(/[\s.-]+/g, '');
  for (const [mapKey, icon] of Object.entries(ICON_MAP)) {
    if (mapKey.replace(/[\s.-]+/g, '') === compact) return icon;
  }

  return make(Code);
};

export const SKILL_CATEGORIES: SkillCategory[] = ['frontend', 'backend', 'database', 'tools'];

export const SKILL_CATEGORY_LABELS: Record<SkillCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Base de données',
  tools: 'Outils',
};
