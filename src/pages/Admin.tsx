import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { hasSupabaseConfig, supabase } from '../lib/supabase';
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Plus,
  Database,
  FileDown,
  FolderOpen,
  Globe,
  LayoutDashboard,
  Link2,
  GripVertical,
  LucideIcon,
  Image,
  Shield,
  Sparkles,
  Upload,
  UserRound,
  BriefcaseBusiness,
  GraduationCap,
  Trash2,
  Sigma,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { I18nText, emptyI18nText, parseI18nText, serializeI18nText } from '../lib/i18n';
import { SkillCategory, SKILL_CATEGORIES, SKILL_CATEGORY_LABELS, getSkillIcon } from '../lib/skillIcons';

type AdminSectionKey = 'overview' | 'profile' | 'experience' | 'education' | 'projects' | 'skills' | 'media' | 'seo';

type ConfirmationTone = 'primary' | 'danger';

type ConfirmationRequest = {
  title: string;
  description: string;
  confirmLabel: string;
  tone: ConfirmationTone;
  action: 'save' | 'reset' | 'sign-out' | 'delete-experience' | 'delete-education' | 'delete-project' | 'delete-skill';
  index?: number;
  category?: SkillCategory;
};

type DraggedItemType = 'experience' | 'education' | 'project' | 'skill';

type DragState = {
  type: DraggedItemType;
  index: number;
  category?: SkillCategory;
} | null;

type ExperienceDraft = {
  id?: string;
  company: string;
  role: I18nText;
  period: string;
  description: I18nText;
  isPublished?: boolean;
};

type EducationDraft = {
  id?: string;
  school: string;
  diploma: I18nText;
  period: string;
  isPublished?: boolean;
};

type ProjectDraft = {
  id?: string;
  title: string;
  status: string;
  stack: string;
  summary: I18nText;
  coverPath: string;
  projectUrl: string;
  repositoryUrl: string;
};

type SkillDraft = {
  id?: string;
  name: string;
  isPublished?: boolean;
};

type SkillsDraft = Record<SkillCategory, SkillDraft[]>;

type AdminDraft = {
  profile: {
    title: string;
    subtitle: I18nText;
    bio: I18nText;
    email: string;
    linkedin: string;
    github: string;
    location: string;
  };
  experience: ExperienceDraft[];
  education: EducationDraft[];
  projects: ProjectDraft[];
  skills: SkillsDraft;
  media: {
    cvPathFr: string;
    cvPathEn: string;
    avatarPath: string;
    projectMediaPath: string;
  };
  seo: {
    siteName: string;
    metaTitle: I18nText;
    metaDescription: I18nText;
  };
};

type SupabaseProfileRow = {
  title: string | null;
  subtitle: string | null;
  bio: string | null;
  avatar_path: string | null;
  cv_path: string | null;
  email: string | null;
  linkedin_url: string | null;
  github_url: string | null;
  location: string | null;
  updated_at: string | null;
};

type SupabaseExperienceRow = {
  id: string;
  company: string;
  role: string;
  start_date: string | null;
  end_date: string | null;
  description: string | null;
  sort_order: number | null;
  is_published: boolean | null;
};

type SupabaseEducationRow = {
  id: string;
  school: string;
  diploma: string;
  start_date: string | null;
  end_date: string | null;
  description: string | null;
  kind: string | null;
  sort_order: number | null;
  is_published: boolean | null;
};

type SupabaseProjectRow = {
  id: string;
  title: string;
  slug: string | null;
  summary: string | null;
  content: string | null;
  cover_path: string | null;
  project_url: string | null;
  repository_url: string | null;
  stack: string | null;
  sort_order: number | null;
  is_published: boolean | null;
};

type SupabaseSettingsRow = {
  id: string;
  site_name: string | null;
  seo_title: string | null;
  seo_description: string | null;
  hero_title: string | null;
  hero_subtitle: string | null;
  footer_text: string | null;
  updated_at: string | null;
};

type SupabaseSkillRow = {
  id: string;
  category: string;
  name: string;
  sort_order: number | null;
  is_published: boolean | null;
};

const STORAGE_KEY = 'portfolio-admin-draft';

const defaultDraft: AdminDraft = {
  profile: {
    title: 'Lauret Kryst-Sasler CHACHA',
    subtitle: { fr: 'Développeur Web Full Stack', en: 'Full Stack Web Developer' },
    bio: { fr: 'Rédige ici le texte principal du profil public.', en: 'Write the public profile text here.' },
    email: 'lauret.chacha@epitech.eu',
    linkedin: 'https://linkedin.com/in/lauret-kryst-sasler-chacha-a877161aa',
    github: 'https://github.com/Handsomeboy990',
    location: 'France',
  },
  experience: [
    {
      company: 'Epitech',
      role: { fr: 'Full Stack Developer', en: 'Full Stack Developer' },
      period: '2025 - Present',
      description: { fr: 'Développement web et intégration front/back.', en: 'Web development and front/back integration.' },
      isPublished: true,
    },
  ],
  education: [
    {
      school: 'Epitech',
      diploma: { fr: 'Certification Full Stack Developer', en: 'Full Stack Developer Certification' },
      period: '2026',
      isPublished: true,
    },
  ],
  projects: [
    {
      title: 'Zémi',
      status: 'En cours',
      stack: 'Next.js, MongoDB, TypeScript',
      summary: { fr: 'Projet prioritaire à mettre en avant.', en: 'Priority project to highlight.' },
      coverPath: '',
      projectUrl: '',
      repositoryUrl: '',
    },
  ],
  skills: {
    frontend: [],
    backend: [],
    database: [],
    tools: [],
  },
  media: {
    cvPathFr: '/storage/cv/lauret-chacha.pdf',
    cvPathEn: '/storage/cv/lauret-chacha.pdf',
    avatarPath: '/storage/avatar.jpg',
    projectMediaPath: '/storage/projects/',
  },
  seo: {
    siteName: 'Lauret CHACHA',
    metaTitle: { fr: 'Portfolio Lauret CHACHA', en: 'Lauret CHACHA Portfolio' },
    metaDescription: { fr: 'Portfolio administrable avec backoffice privé.', en: 'Administrable portfolio with a private backoffice.' },
  },
};

const sections: Array<{ key: AdminSectionKey; label: string; icon: LucideIcon }> = [
  { key: 'overview', label: 'Aperçu', icon: LayoutDashboard },
  { key: 'profile', label: 'Profil', icon: UserRound },
  { key: 'experience', label: 'Expériences', icon: BriefcaseBusiness },
  { key: 'education', label: 'Formations et certificats', icon: GraduationCap },
  { key: 'projects', label: 'Projets', icon: FolderOpen },
  { key: 'skills', label: 'Compétences techniques', icon: Sigma },
  { key: 'media', label: 'Médias', icon: Image },
  { key: 'seo', label: 'SEO', icon: Globe },
];

const emptySkillsDraft = (): SkillsDraft => ({
  frontend: [],
  backend: [],
  database: [],
  tools: [],
});

const isSkillCategory = (value: unknown): value is SkillCategory =>
  value === 'frontend' || value === 'backend' || value === 'database' || value === 'tools';

const toI18nValue = (value: unknown, fallback: I18nText): I18nText => {
  if (typeof value === 'string') {
    return parseI18nText(value);
  }
  if (value && typeof value === 'object') {
    const candidate = value as { fr?: unknown; en?: unknown };
    if (typeof candidate.fr === 'string' || typeof candidate.en === 'string') {
      return {
        fr: typeof candidate.fr === 'string' ? candidate.fr : '',
        en: typeof candidate.en === 'string' ? candidate.en : '',
      };
    }
  }
  return fallback;
};

const migrateDraft = (raw: unknown): AdminDraft => {
  const source = (raw && typeof raw === 'object' ? raw : {}) as Record<string, any>;
  const profileSrc = (source.profile && typeof source.profile === 'object' ? source.profile : {}) as Record<string, any>;
  const mediaSrc = (source.media && typeof source.media === 'object' ? source.media : {}) as Record<string, any>;
  const seoSrc = (source.seo && typeof source.seo === 'object' ? source.seo : {}) as Record<string, any>;

  return {
    profile: {
      title: typeof profileSrc.title === 'string' ? profileSrc.title : defaultDraft.profile.title,
      subtitle: toI18nValue(profileSrc.subtitle, defaultDraft.profile.subtitle),
      bio: toI18nValue(profileSrc.bio, defaultDraft.profile.bio),
      email: typeof profileSrc.email === 'string' ? profileSrc.email : defaultDraft.profile.email,
      linkedin: typeof profileSrc.linkedin === 'string' ? profileSrc.linkedin : defaultDraft.profile.linkedin,
      github: typeof profileSrc.github === 'string' ? profileSrc.github : defaultDraft.profile.github,
      location: typeof profileSrc.location === 'string' ? profileSrc.location : defaultDraft.profile.location,
    },
    experience: Array.isArray(source.experience)
      ? source.experience.map((item: any) => ({
          id: typeof item?.id === 'string' ? item.id : undefined,
          company: typeof item?.company === 'string' ? item.company : '',
          role: toI18nValue(item?.role, emptyI18nText()),
          period: typeof item?.period === 'string' ? item.period : '',
          description: toI18nValue(item?.description, emptyI18nText()),
          isPublished: item?.isPublished !== false,
        }))
      : defaultDraft.experience,
    education: Array.isArray(source.education)
      ? source.education.map((item: any) => ({
          id: typeof item?.id === 'string' ? item.id : undefined,
          school: typeof item?.school === 'string' ? item.school : '',
          diploma: toI18nValue(item?.diploma, emptyI18nText()),
          period: typeof item?.period === 'string' ? item.period : '',
          isPublished: item?.isPublished !== false,
        }))
      : defaultDraft.education,
    projects: Array.isArray(source.projects)
      ? source.projects.map((item: any) => ({
          id: typeof item?.id === 'string' ? item.id : undefined,
          title: typeof item?.title === 'string' ? item.title : '',
          status: typeof item?.status === 'string' ? item.status : 'Brouillon',
          stack: typeof item?.stack === 'string' ? item.stack : '',
          summary: toI18nValue(item?.summary, emptyI18nText()),
          coverPath: typeof item?.coverPath === 'string' ? item.coverPath : '',
          projectUrl: typeof item?.projectUrl === 'string' ? item.projectUrl : '',
          repositoryUrl: typeof item?.repositoryUrl === 'string' ? item.repositoryUrl : '',
        }))
      : defaultDraft.projects,
    skills: (() => {
      const next = emptySkillsDraft();
      const src = source.skills && typeof source.skills === 'object' ? (source.skills as Record<string, unknown>) : null;
      if (src) {
        SKILL_CATEGORIES.forEach((category) => {
          const arr = src[category];
          if (Array.isArray(arr)) {
            next[category] = arr.map((item: any) => ({
              id: typeof item?.id === 'string' ? item.id : undefined,
              name: typeof item?.name === 'string' ? item.name : '',
              isPublished: item?.isPublished !== false,
            }));
          }
        });
      }
      return next;
    })(),
    media: {
      cvPathFr: typeof mediaSrc.cvPathFr === 'string' ? mediaSrc.cvPathFr : defaultDraft.media.cvPathFr,
      cvPathEn: typeof mediaSrc.cvPathEn === 'string' ? mediaSrc.cvPathEn : defaultDraft.media.cvPathEn,
      avatarPath: typeof mediaSrc.avatarPath === 'string' ? mediaSrc.avatarPath : defaultDraft.media.avatarPath,
      projectMediaPath: typeof mediaSrc.projectMediaPath === 'string' ? mediaSrc.projectMediaPath : defaultDraft.media.projectMediaPath,
    },
    seo: {
      siteName: typeof seoSrc.siteName === 'string' ? seoSrc.siteName : defaultDraft.seo.siteName,
      metaTitle: toI18nValue(seoSrc.metaTitle, defaultDraft.seo.metaTitle),
      metaDescription: toI18nValue(seoSrc.metaDescription, defaultDraft.seo.metaDescription),
    },
  };
};

const safeParseDraft = (rawValue: string | null): AdminDraft | null => {
  if (!rawValue) return null;

  try {
    return migrateDraft(JSON.parse(rawValue));
  } catch {
    return null;
  }
};

const normalizeDateValue = (value: string | null): string | null => {
  if (!value) return null;

  const trimmed = value.trim();
  if (!trimmed) return null;

  if (/^\d{4}$/.test(trimmed)) {
    return `${trimmed}-01-01`;
  }

  if (/^\d{4}-\d{2}$/.test(trimmed)) {
    return `${trimmed}-01`;
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return trimmed;
  }

  return null;
};

const formatDateValue = (value: string | null, isEnd: boolean): string => {
  if (!value) return '';

  const yearMatch = value.match(/^(\d{4})-01-01$/);
  if (yearMatch) {
    return yearMatch[1];
  }

  const endYearMatch = value.match(/^(\d{4})-12-31$/);
  if (isEnd && endYearMatch) {
    return endYearMatch[1];
  }

  return value;
};

const formatPeriodValue = (startDate: string | null, endDate: string | null): string => {
  const start = formatDateValue(startDate, false);
  const end = formatDateValue(endDate, true);

  if (!start && !end) {
    return '';
  }

  if (start && !end) {
    return `${start} - Present`;
  }

  if (!start && end) {
    return end;
  }

  return `${start} - ${end}`;
};

const formatTimestampForUI = (value: string | null | undefined): string => {
  if (!value) return '';
  try {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return String(value);
    return date.toLocaleString('fr-FR', { dateStyle: 'medium', timeStyle: 'short' });
  } catch {
    return String(value);
  }
};

const isMissingTableError = (message: string): boolean => {
  const lower = message.toLowerCase();
  return lower.includes('schema cache') || lower.includes('could not find the table') || (lower.includes('relation') && lower.includes('does not exist'));
};

const formatSaveError = (message: string): string => {
  const lowerMessage = message.toLowerCase();

  if (isMissingTableError(message)) {
    return `Table introuvable côté Supabase: ${message}. Soit la table n'existe pas (applique supabase/rls-policies.sql), soit PostgREST n'a pas rechargé son cache de schéma. Dashboard Supabase > API Docs > bouton "Reload schema" (ou attends ~30s), puis réessaie.`;
  }

  if (lowerMessage.includes('row-level security') || lowerMessage.includes('violates row-level security') || lowerMessage.includes('rls')) {
    return `Enregistrement refusé par Supabase (RLS): ${message}. Vérifie que le compte admin a bien les policies INSERT/UPDATE/DELETE sur profile, experiences, educations, projects, site_settings ET skills. Si tu viens d'ajouter la table skills, rejoue supabase/rls-policies.sql en entier.`;
  }

  return message;
};


const parseCvPaths = (value: string | null): { fr: string; en: string } => {
  if (!value) {
    return { fr: '', en: '' };
  }

  try {
    const parsed = JSON.parse(value) as { fr?: string; en?: string };
    if (parsed && (parsed.fr || parsed.en)) {
      return {
        fr: parsed.fr || '',
        en: parsed.en || '',
      };
    }
  } catch {
    return { fr: value, en: value };
  }

  return { fr: value, en: value };
};

const serializeCvPaths = (paths: { fr: string; en: string }): string => JSON.stringify(paths);

const parsePeriodValue = (period: string): { start_date: string | null; end_date: string | null } => {
  const trimmed = period.trim();

  if (!trimmed) {
    return { start_date: null, end_date: null };
  }

  const parts = trimmed.split('-').map((part) => part.trim()).filter(Boolean);
  if (parts.length >= 2) {
    return {
      start_date: normalizeDateValue(parts[0]),
      end_date: parts[1].toLowerCase() === 'present' ? null : normalizeDateValue(parts.slice(1).join('-')),
    };
  }

  return {
    start_date: normalizeDateValue(trimmed),
    end_date: null,
  };
};

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const mapPublishedStatus = (value: boolean | null): string => (value === false ? 'Brouillon' : 'Publié');

const isDraftPublished = (status: string): boolean => !status.toLowerCase().includes('brouillon');

const buildProfilePayload = (draft: AdminDraft) => ({
  title: draft.profile.title,
  subtitle: serializeI18nText(draft.profile.subtitle),
  bio: serializeI18nText(draft.profile.bio),
  avatar_path: draft.media.avatarPath,
  cv_path: serializeCvPaths({ fr: draft.media.cvPathFr, en: draft.media.cvPathEn }),
  email: draft.profile.email,
  linkedin_url: draft.profile.linkedin,
  github_url: draft.profile.github,
  location: draft.profile.location,
});

const buildSettingsPayload = (draft: AdminDraft) => ({
  site_name: draft.seo.siteName,
  seo_title: serializeI18nText(draft.seo.metaTitle),
  seo_description: serializeI18nText(draft.seo.metaDescription),
  hero_title: draft.profile.title,
  hero_subtitle: serializeI18nText(draft.profile.subtitle),
  footer_text: `${draft.profile.title} - ${draft.profile.location}`,
});

const mapProfileRowToDraft = (row: SupabaseProfileRow | null, fallback: AdminDraft): AdminDraft => {
  if (!row) {
    return fallback;
  }

  return {
    ...fallback,
    profile: {
      title: row.title || fallback.profile.title,
      subtitle: row.subtitle ? parseI18nText(row.subtitle) : fallback.profile.subtitle,
      bio: row.bio ? parseI18nText(row.bio) : fallback.profile.bio,
      email: row.email || fallback.profile.email,
      linkedin: row.linkedin_url || fallback.profile.linkedin,
      github: row.github_url || fallback.profile.github,
      location: row.location || fallback.profile.location,
    },
    media: {
      ...(() => {
        const cvPaths = parseCvPaths(row.cv_path);
        return {
          cvPathFr: cvPaths.fr || fallback.media.cvPathFr,
          cvPathEn: cvPaths.en || fallback.media.cvPathEn,
        };
      })(),
      avatarPath: row.avatar_path || fallback.media.avatarPath,
      projectMediaPath: fallback.media.projectMediaPath,
    },
  };
};

const mapExperiencesToDraft = (rows: SupabaseExperienceRow[], fallback: AdminDraft): AdminDraft['experience'] => {
  if (!rows.length) {
    return fallback.experience;
  }

  return rows.map((row) => ({
    id: row.id,
    company: row.company,
    role: parseI18nText(row.role),
    period: formatPeriodValue(row.start_date, row.end_date),
    description: parseI18nText(row.description),
    isPublished: row.is_published !== false,
  }));
};

const mapEducationsToDraft = (rows: SupabaseEducationRow[], fallback: AdminDraft): AdminDraft['education'] => {
  if (!rows.length) {
    return fallback.education;
  }

  return rows.map((row) => ({
    id: row.id,
    school: row.school,
    diploma: parseI18nText(row.diploma),
    period: formatPeriodValue(row.start_date, row.end_date),
    isPublished: row.is_published !== false,
  }));
};

const mapProjectsToDraft = (rows: SupabaseProjectRow[], fallback: AdminDraft): AdminDraft['projects'] => {
  if (!rows.length) {
    return fallback.projects;
  }

  return rows.map((row) => ({
    id: row.id,
    title: row.title,
    status: mapPublishedStatus(row.is_published),
    stack: row.stack || '',
    summary: parseI18nText(row.summary || row.content),
    coverPath: row.cover_path || '',
    projectUrl: row.project_url || '',
    repositoryUrl: row.repository_url || '',
  }));
};

const mapSkillsToDraft = (rows: SupabaseSkillRow[]): SkillsDraft => {
  const next = emptySkillsDraft();
  rows.forEach((row) => {
    if (!isSkillCategory(row.category)) return;
    next[row.category].push({
      id: row.id,
      name: row.name,
      isPublished: row.is_published !== false,
    });
  });
  return next;
};

const Field: React.FC<{ label: string; children: React.ReactNode; hint?: string }> = ({ label, children, hint }) => (
  <label className="space-y-2 block">
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {hint ? <span className="text-xs text-muted-foreground">{hint}</span> : null}
    </div>
    {children}
  </label>
);

const TextInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input
    {...props}
    className={`w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary ${props.className || ''}`}
  />
);

const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
  <textarea
    {...props}
    className={`min-h-[120px] w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary ${props.className || ''}`}
  />
);

const I18nField: React.FC<{
  label: string;
  value: I18nText;
  onChange: (next: I18nText) => void;
  multiline?: boolean;
  placeholder?: string;
  hint?: string;
}> = ({ label, value, onChange, multiline, placeholder, hint }) => (
  <Field label={label} hint={hint || 'FR / EN'}>
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="space-y-1.5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">FR</span>
        {multiline ? (
          <TextArea
            value={value.fr}
            placeholder={placeholder}
            onChange={(event) => onChange({ ...value, fr: event.target.value })}
          />
        ) : (
          <TextInput
            value={value.fr}
            placeholder={placeholder}
            onChange={(event) => onChange({ ...value, fr: event.target.value })}
          />
        )}
      </div>
      <div className="space-y-1.5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">EN</span>
        {multiline ? (
          <TextArea
            value={value.en}
            placeholder={placeholder}
            onChange={(event) => onChange({ ...value, en: event.target.value })}
          />
        ) : (
          <TextInput
            value={value.en}
            placeholder={placeholder}
            onChange={(event) => onChange({ ...value, en: event.target.value })}
          />
        )}
      </div>
    </div>
  </Field>
);

const StatCard: React.FC<{ label: string; value: string; detail: string; icon: LucideIcon }> = ({ label, value, detail, icon: Icon }) => (
  <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
        <p className="mt-2 text-2xl font-bold">{value}</p>
        <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
      </div>
      <div className="rounded-xl bg-primary/10 p-3 text-primary">
        <Icon className="h-5 w-5" />
      </div>
    </div>
  </div>
);

const SectionPanel: React.FC<{ title: string; description: string; icon: LucideIcon; children: React.ReactNode }> = ({ title, description, icon: Icon, children }) => (
  <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">
    <div className="mb-6 flex items-start gap-3">
      <div className="rounded-2xl bg-primary/10 p-3 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
    {children}
  </section>
);

const LoginPanel: React.FC<{
  email: string;
  password: string;
  loading: boolean;
  error: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}> = ({ email, password, loading, error, onEmailChange, onPasswordChange, onSubmit }) => (
  <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">
    <div className="mb-5 flex items-start gap-3">
      <div className="rounded-2xl bg-primary/10 p-3 text-primary">
        <Shield className="h-5 w-5" />
      </div>
      <div>
        <h2 className="text-xl font-semibold">Connexion admin</h2>
        <p className="mt-1 text-sm text-muted-foreground">Entre les identifiants administrateur pour accéder au backoffice.</p>
      </div>
    </div>

    <form className="grid gap-4 md:grid-cols-[1fr_1fr_auto]" onSubmit={onSubmit}>
      <Field label="Email">
        <TextInput type="email" value={email} onChange={(event) => onEmailChange(event.target.value)} placeholder="admin@domaine.com" />
      </Field>
      <Field label="Mot de passe">
        <TextInput type="password" value={password} onChange={(event) => onPasswordChange(event.target.value)} placeholder="••••••••" />
      </Field>
      <div className="flex items-end">
        <Button type="submit" className="w-full md:w-auto gap-2" disabled={loading}>
          <Shield className="h-4 w-4" /> {loading ? 'Connexion...' : 'Se connecter'}
        </Button>
      </div>
    </form>

    {error ? <p className="mt-4 text-sm text-red-500">{error}</p> : null}
  </section>
);

export const Admin: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState<AdminSectionKey>('overview');
  const [draft, setDraft] = React.useState<AdminDraft>(defaultDraft);
  const [lastSavedAt, setLastSavedAt] = React.useState<string>('');
  const [authEmail, setAuthEmail] = React.useState('');
  const [authPassword, setAuthPassword] = React.useState('');
  const [authLoading, setAuthLoading] = React.useState(false);
  const [authError, setAuthError] = React.useState('');
  const [session, setSession] = React.useState(null as null | { user: { email?: string | null } });
  const [saveLoading, setSaveLoading] = React.useState(false);
  const [saveMessage, setSaveMessage] = React.useState('');
  const [saveError, setSaveError] = React.useState('');
  const [remoteLoading, setRemoteLoading] = React.useState(false);
  const [projectUploads, setProjectUploads] = React.useState<Record<number, File | null>>({});
  const [avatarUpload, setAvatarUpload] = React.useState<File | null>(null);
  const [cvUploadFr, setCvUploadFr] = React.useState<File | null>(null);
  const [cvUploadEn, setCvUploadEn] = React.useState<File | null>(null);
  const [avatarPreviewUrl, setAvatarPreviewUrl] = React.useState<string | null>(null);
  const [cvPreviewFrUrl, setCvPreviewFrUrl] = React.useState<string | null>(null);
  const [cvPreviewEnUrl, setCvPreviewEnUrl] = React.useState<string | null>(null);
  const [projectPreviewUrls, setProjectPreviewUrls] = React.useState<Record<number, string>>({});
  const [confirmationRequest, setConfirmationRequest] = React.useState<ConfirmationRequest | null>(null);
  const [dragState, setDragState] = React.useState<DragState>(null);

  const createEmptyExperience = (): ExperienceDraft => ({
    company: '',
    role: emptyI18nText(),
    period: '',
    description: emptyI18nText(),
    isPublished: false,
  });

  const createEmptyEducation = (): EducationDraft => ({
    school: '',
    diploma: emptyI18nText(),
    period: '',
    isPublished: false,
  });

  const createEmptyProject = (): ProjectDraft => ({
    title: '',
    status: 'Brouillon',
    stack: '',
    summary: emptyI18nText(),
    coverPath: '',
    projectUrl: '',
    repositoryUrl: '',
  });

  const updateArrayItem = <T,>(items: T[], index: number, nextItem: T): T[] => items.map((item, itemIndex) => (itemIndex === index ? nextItem : item));

  const loadRemoteDraft = async () => {
    if (!supabase) {
      return;
    }

    setRemoteLoading(true);
    setSaveError('');

    const [profileResult, experiencesResult, educationsResult, projectsResult, settingsResult, skillsResult] = await Promise.all([
      supabase.from('profile').select('*').order('updated_at', { ascending: false }).limit(1).maybeSingle(),
      supabase.from('experiences').select('*').order('sort_order', { ascending: true }),
      supabase.from('educations').select('*').order('sort_order', { ascending: true }),
      supabase.from('projects').select('*').order('sort_order', { ascending: true }),
      supabase.from('site_settings').select('*').order('updated_at', { ascending: false }).limit(1).maybeSingle(),
      supabase.from('skills').select('*').order('category', { ascending: true }).order('sort_order', { ascending: true }),
    ]);

    const skillsTableMissing = !!skillsResult.error && isMissingTableError(skillsResult.error.message);
    const blockingError = profileResult.error || experiencesResult.error || educationsResult.error || projectsResult.error || settingsResult.error || (skillsResult.error && !skillsTableMissing);

    if (blockingError) {
      setSaveError(
        profileResult.error?.message ||
          experiencesResult.error?.message ||
          educationsResult.error?.message ||
          projectsResult.error?.message ||
          settingsResult.error?.message ||
          skillsResult.error?.message ||
          'Erreur lors du chargement des contenus'
      );
      setRemoteLoading(false);
      return;
    }

    if (skillsTableMissing) {
      setSaveError('Table public.skills introuvable: applique supabase/rls-policies.sql puis "Reload schema" dans Supabase Dashboard > API.');
    }

    const profileRow = profileResult.data as SupabaseProfileRow | null;
    const settingsRow = settingsResult.data as SupabaseSettingsRow | null;
    const experiencesRows = (experiencesResult.data || []) as SupabaseExperienceRow[];
    const educationsRows = (educationsResult.data || []) as SupabaseEducationRow[];
    const projectsRows = (projectsResult.data || []) as SupabaseProjectRow[];
    const skillsRows = (skillsResult.error ? [] : skillsResult.data || []) as SupabaseSkillRow[];

    setDraft((currentDraft) => ({
      ...currentDraft,
      ...mapProfileRowToDraft(profileRow, currentDraft),
      experience: mapExperiencesToDraft(experiencesRows, currentDraft),
      education: mapEducationsToDraft(educationsRows, currentDraft),
      projects: mapProjectsToDraft(projectsRows, currentDraft),
      skills: skillsTableMissing ? currentDraft.skills : mapSkillsToDraft(skillsRows),
      seo: {
        siteName: settingsRow?.site_name || currentDraft.seo.siteName,
        metaTitle: settingsRow?.seo_title ? parseI18nText(settingsRow.seo_title) : currentDraft.seo.metaTitle,
        metaDescription: settingsRow?.seo_description ? parseI18nText(settingsRow.seo_description) : currentDraft.seo.metaDescription,
      },
    }));

    setLastSavedAt(formatTimestampForUI(settingsRow?.updated_at || profileRow?.updated_at || ''));
    setRemoteLoading(false);
  };

  const saveToSupabase = async (currentDraft: AdminDraft) => {
    if (!supabase) {
      return;
    }

    const profilePayload = buildProfilePayload(currentDraft);
    const uploadedAvatar = avatarUpload;

    if (uploadedAvatar) {
      const avatarExtension = uploadedAvatar.name.includes('.') ? uploadedAvatar.name.split('.').pop() || 'png' : 'png';
      const avatarPath = `profile/avatar-${Date.now()}.${avatarExtension}`;
      const avatarResult = await supabase.storage.from('projects-images').upload(avatarPath, uploadedAvatar, {
        upsert: true,
        contentType: uploadedAvatar.type,
      });

      if (avatarResult.error) throw new Error(`[storage:avatar] ${avatarResult.error.message}`);
      profilePayload.avatar_path = supabase.storage.from('projects-images').getPublicUrl(avatarPath).data.publicUrl;
    }

    if (cvUploadFr) {
      const cvExtension = cvUploadFr.name.includes('.') ? cvUploadFr.name.split('.').pop() || 'pdf' : 'pdf';
      const cvPath = `resume/fr-${Date.now()}.${cvExtension}`;
      const cvResult = await supabase.storage.from('cv').upload(cvPath, cvUploadFr, {
        upsert: true,
        contentType: cvUploadFr.type,
      });

      if (cvResult.error) throw new Error(`[storage:cv-fr] ${cvResult.error.message}`);
      const nextCvPaths = parseCvPaths(profilePayload.cv_path);
      profilePayload.cv_path = serializeCvPaths({
        fr: supabase.storage.from('cv').getPublicUrl(cvPath).data.publicUrl,
        en: nextCvPaths.en,
      });
    }

    if (cvUploadEn) {
      const cvExtension = cvUploadEn.name.includes('.') ? cvUploadEn.name.split('.').pop() || 'pdf' : 'pdf';
      const cvPath = `resume/en-${Date.now()}.${cvExtension}`;
      const cvResult = await supabase.storage.from('cv').upload(cvPath, cvUploadEn, {
        upsert: true,
        contentType: cvUploadEn.type,
      });

      if (cvResult.error) throw new Error(`[storage:cv-en] ${cvResult.error.message}`);
      const nextCvPaths = parseCvPaths(profilePayload.cv_path);
      profilePayload.cv_path = serializeCvPaths({
        fr: nextCvPaths.fr,
        en: supabase.storage.from('cv').getPublicUrl(cvPath).data.publicUrl,
      });
    }
    const settingsPayload = buildSettingsPayload(currentDraft);

    const profileRow = await supabase.from('profile').select('id').limit(1).maybeSingle();
    if (profileRow.error) throw new Error(`[profile:select] ${profileRow.error.message}`);

    if (profileRow.data && profileRow.data.id) {
      const profileUpdate = await supabase.from('profile').update(profilePayload).eq('id', profileRow.data.id);
      if (profileUpdate.error) throw new Error(`[profile:update] ${profileUpdate.error.message}`);
    } else {
      const profileInsert = await supabase.from('profile').insert(profilePayload);
      if (profileInsert.error) throw new Error(`[profile:insert] ${profileInsert.error.message}`);
    }

    const settingsRow = await supabase.from('site_settings').select('id').limit(1).maybeSingle();
    if (settingsRow.error) throw new Error(`[site_settings:select] ${settingsRow.error.message}`);
    if (settingsRow.data && settingsRow.data.id) {
      const settingsUpdate = await supabase.from('site_settings').update(settingsPayload).eq('id', settingsRow.data.id);
      if (settingsUpdate.error) throw new Error(`[site_settings:update] ${settingsUpdate.error.message}`);
    } else {
      const settingsInsert = await supabase.from('site_settings').insert(settingsPayload);
      if (settingsInsert.error) throw new Error(`[site_settings:insert] ${settingsInsert.error.message}`);
    }

    const experiencesExisting = await supabase.from('experiences').select('id');
    if (experiencesExisting.error) throw new Error(`[experiences:select] ${experiencesExisting.error.message}`);
    const existingExperienceIds = new Set(((experiencesExisting.data || []) as Array<{ id: string }>).map((row) => row.id));
    const draftExperienceIds = new Set(currentDraft.experience.map((item) => item.id).filter((id): id is string => Boolean(id)));
    const experienceIdsToDelete = [...existingExperienceIds].filter((id) => !draftExperienceIds.has(id));

    for (let index = 0; index < currentDraft.experience.length; index += 1) {
      const item = currentDraft.experience[index];
      const period = parsePeriodValue(item.period);
      const payload = {
        company: item.company,
        role: serializeI18nText(item.role),
        start_date: period.start_date,
        end_date: period.end_date,
        description: serializeI18nText(item.description),
        sort_order: index,
        is_published: item.isPublished !== false,
      };

      if (item.id && existingExperienceIds.has(item.id)) {
        const experienceUpdate = await supabase.from('experiences').update(payload).eq('id', item.id);
        if (experienceUpdate.error) throw new Error(`[experiences:update] ${experienceUpdate.error.message}`);
      } else {
        const experienceInsert = await supabase.from('experiences').insert(payload);
        if (experienceInsert.error) throw new Error(`[experiences:insert] ${experienceInsert.error.message}`);
      }
    }

    if (experienceIdsToDelete.length) {
      const deleteResult = await supabase.from('experiences').delete().in('id', experienceIdsToDelete);
      if (deleteResult.error) throw new Error(`[experiences:delete] ${deleteResult.error.message}`);
    }

    const educationsExisting = await supabase.from('educations').select('id');
    if (educationsExisting.error) throw new Error(`[educations:select] ${educationsExisting.error.message}`);
    const existingEducationIds = new Set(((educationsExisting.data || []) as Array<{ id: string }>).map((row) => row.id));
    const draftEducationIds = new Set(currentDraft.education.map((item) => item.id).filter((id): id is string => Boolean(id)));
    const educationIdsToDelete = [...existingEducationIds].filter((id) => !draftEducationIds.has(id));

    for (let index = 0; index < currentDraft.education.length; index += 1) {
      const item = currentDraft.education[index];
      const period = parsePeriodValue(item.period);
      const payload = {
        school: item.school,
        diploma: serializeI18nText(item.diploma),
        start_date: period.start_date,
        end_date: period.end_date,
        description: '',
        kind: null,
        sort_order: index,
        is_published: item.isPublished !== false,
      };

      if (item.id && existingEducationIds.has(item.id)) {
        const educationUpdate = await supabase.from('educations').update(payload).eq('id', item.id);
        if (educationUpdate.error) throw new Error(`[educations:update] ${educationUpdate.error.message}`);
      } else {
        const educationInsert = await supabase.from('educations').insert(payload);
        if (educationInsert.error) throw new Error(`[educations:insert] ${educationInsert.error.message}`);
      }
    }

    if (educationIdsToDelete.length) {
      const deleteResult = await supabase.from('educations').delete().in('id', educationIdsToDelete);
      if (deleteResult.error) throw new Error(`[educations:delete] ${deleteResult.error.message}`);
    }

    const projectsPayload = currentDraft.projects.map((item, index) => {
      const summarySerialized = serializeI18nText(item.summary);
      return {
        title: item.title,
        slug: slugify(item.title),
        summary: summarySerialized,
        content: summarySerialized,
        cover_path: item.coverPath || null,
        project_url: item.projectUrl || null,
        repository_url: item.repositoryUrl || null,
        stack: item.stack,
        sort_order: index,
        is_published: isDraftPublished(item.status),
      };
    });

    const uploadedCoverPaths = await Promise.all(
      currentDraft.projects.map(async (item, index) => {
        const selectedFile = projectUploads[index];
        if (!selectedFile) {
          return item.coverPath;
        }

        const extension = selectedFile.name.includes('.') ? selectedFile.name.split('.').pop() || 'png' : 'png';
        const filePath = `projects/${slugify(item.title)}-${Date.now()}.${extension}`;
        const uploadResult = await supabase.storage
          .from('projects-images')
          .upload(filePath, selectedFile, { upsert: true, contentType: selectedFile.type });

        if (uploadResult.error) throw new Error(`[storage:projects-images] ${uploadResult.error.message}`);

        return supabase.storage.from('projects-images').getPublicUrl(filePath).data.publicUrl;
      })
    );

    const projectsPayloadWithUploads = projectsPayload.map((item, index) => ({
      ...item,
      cover_path: uploadedCoverPaths[index] || item.cover_path,
    }));

    if (projectsPayloadWithUploads.length) {
      const projectsUpsert = await supabase.from('projects').upsert(projectsPayloadWithUploads, { onConflict: 'slug' });
      if (projectsUpsert.error) throw new Error(`[projects:upsert] ${projectsUpsert.error.message}`);
    }

    const existingProjects = await supabase.from('projects').select('slug');
    if (existingProjects.error) throw new Error(`[projects:select] ${existingProjects.error.message}`);
    const currentProjectSlugs = projectsPayloadWithUploads.map((item) => item.slug);
    const projectSlugsToDelete = (existingProjects.data || [])
      .map((row) => row.slug)
      .filter((slug) => slug && currentProjectSlugs.indexOf(slug) === -1);

    if (projectSlugsToDelete.length) {
      const deleteResult = await supabase.from('projects').delete().in('slug', projectSlugsToDelete);
      if (deleteResult.error) throw new Error(`[projects:delete] ${deleteResult.error.message}`);
    }

    const skillsExisting = await supabase.from('skills').select('id');
    if (skillsExisting.error) {
      if (isMissingTableError(skillsExisting.error.message)) {
        setSaveMessage('Sauvegarde OK (la table public.skills est introuvable — applique le SQL ou recharge le schéma Supabase pour activer la section Compétences).');
        return;
      }
      throw new Error(`[skills:select] ${skillsExisting.error.message}`);
    }
    const existingSkillIds = new Set(((skillsExisting.data || []) as Array<{ id: string }>).map((row) => row.id));

    const draftSkillIds = new Set<string>();
    SKILL_CATEGORIES.forEach((category) => {
      currentDraft.skills[category].forEach((item) => {
        if (item.id) draftSkillIds.add(item.id);
      });
    });
    const skillIdsToDelete = [...existingSkillIds].filter((id) => !draftSkillIds.has(id));

    for (const category of SKILL_CATEGORIES) {
      const items = currentDraft.skills[category];
      for (let index = 0; index < items.length; index += 1) {
        const item = items[index];
        const trimmed = item.name.trim();
        if (!trimmed) continue;

        const payload = {
          category,
          name: trimmed,
          sort_order: index,
          is_published: item.isPublished !== false,
        };

        if (item.id && existingSkillIds.has(item.id)) {
          const skillUpdate = await supabase.from('skills').update(payload).eq('id', item.id);
          if (skillUpdate.error) throw new Error(`[skills:update] ${skillUpdate.error.message}`);
        } else {
          const skillInsert = await supabase.from('skills').insert(payload);
          if (skillInsert.error) throw new Error(`[skills:insert] ${skillInsert.error.message}`);
        }
      }
    }

    if (skillIdsToDelete.length) {
      const deleteResult = await supabase.from('skills').delete().in('id', skillIdsToDelete);
      if (deleteResult.error) throw new Error(`[skills:delete] ${deleteResult.error.message}`);
    }
  };

  React.useEffect(() => {
    if (!supabase) {
      return;
    }

    let isMounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (isMounted) {
        setSession(data.session);
      }
    });

    const { data } = supabase.auth.onAuthStateChange((_, nextSession) => {
      setSession(nextSession);
    });

    return () => {
      isMounted = false;
      data.subscription.unsubscribe();
    };
  }, []);

  React.useEffect(() => {
    if (!session || !supabase) {
      return;
    }

    void loadRemoteDraft();
  }, [session]);

  React.useEffect(() => {
    const storedDraft = safeParseDraft(localStorage.getItem(STORAGE_KEY));
    if (storedDraft) {
      setDraft(storedDraft);
      setLastSavedAt(localStorage.getItem(`${STORAGE_KEY}:savedAt`) || '');
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
  }, [draft]);

  const saveDraft = async () => {
    const timestamp = new Date().toLocaleString('fr-FR');
    localStorage.setItem(`${STORAGE_KEY}:savedAt`, timestamp);

    if (!supabase || !session) {
      setLastSavedAt(timestamp);
      setSaveMessage('Brouillon enregistré localement.');
      setSaveError('');
      return;
    }

    setSaveLoading(true);
    setSaveMessage('');
    setSaveError('');

    try {
      await saveToSupabase(draft);
      setLastSavedAt(timestamp);
      setSaveMessage('Données synchronisées.');
    } catch (error) {
      setSaveError(error instanceof Error ? formatSaveError(error.message) : 'Erreur lors de la synchronisation');
    } finally {
      setSaveLoading(false);
    }
  };

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!supabase) {
      return;
    }

    setAuthLoading(true);
    setAuthError('');

    const { error } = await supabase.auth.signInWithPassword({
      email: authEmail,
      password: authPassword,
    });

    if (error) {
      setAuthError(error.message);
    }

    setAuthLoading(false);
  };

  const handleSignOut = async () => {
    if (!supabase) {
      return;
    }

    await supabase.auth.signOut();
  };

  const resetDraft = () => {
    setDraft(defaultDraft);
    setProjectUploads({});
    setAvatarUpload(null);
    setCvUploadFr(null);
    setCvUploadEn(null);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(`${STORAGE_KEY}:savedAt`);
    setLastSavedAt('');
  };

  const handleProjectFileChange = (index: number, file: File | null) => {
    setProjectUploads((currentUploads) => ({
      ...currentUploads,
      [index]: file,
    }));
  };

  React.useEffect(() => {
    let prev: string | null = null;
    if (avatarUpload) {
      const url = URL.createObjectURL(avatarUpload);
      setAvatarPreviewUrl(url);
      prev = url;
    } else {
      setAvatarPreviewUrl(null);
    }

    return () => {
      if (prev) URL.revokeObjectURL(prev);
    };
  }, [avatarUpload]);

  React.useEffect(() => {
    let prevFr: string | null = null;
    let prevEn: string | null = null;

    if (cvUploadFr) {
      const url = URL.createObjectURL(cvUploadFr);
      setCvPreviewFrUrl(url);
      prevFr = url;
    } else {
      setCvPreviewFrUrl(null);
    }

    if (cvUploadEn) {
      const url = URL.createObjectURL(cvUploadEn);
      setCvPreviewEnUrl(url);
      prevEn = url;
    } else {
      setCvPreviewEnUrl(null);
    }

    return () => {
      if (prevFr) URL.revokeObjectURL(prevFr);
      if (prevEn) URL.revokeObjectURL(prevEn);
    };
  }, [cvUploadFr, cvUploadEn]);

  React.useEffect(() => {
    const created: Record<number, string> = {};
    Object.keys(projectUploads).forEach((key) => {
      const idx = Number(key);
      const file = projectUploads[idx];
      if (file) {
        created[idx] = URL.createObjectURL(file);
      }
    });
    const prev = projectPreviewUrls;
    setProjectPreviewUrls(created);

    return () => {
      Object.values(created).forEach((url) => URL.revokeObjectURL(url));
      (Object.values(prev) as string[]).forEach((url) => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, [projectUploads]);

  const removeProjectUpload = (index: number) => {
    setProjectUploads((currentUploads) => {
      const nextUploads: Record<number, File | null> = {};
      Object.keys(currentUploads).forEach((key) => {
        const uploadIndex = Number(key);
        const uploadFile = currentUploads[uploadIndex];

        if (uploadIndex < index) {
          nextUploads[uploadIndex] = uploadFile;
          return;
        }

        if (uploadIndex > index) {
          nextUploads[uploadIndex - 1] = uploadFile;
        }
      });

      return nextUploads;
    });
  };

  const reorderItems = <T,>(items: T[], fromIndex: number, toIndex: number): T[] => {
    if (fromIndex === toIndex) {
      return items;
    }

    const nextItems = [...items];
    const [movedItem] = nextItems.splice(fromIndex, 1);
    nextItems.splice(toIndex, 0, movedItem);
    return nextItems;
  };

  const reorderProjectUploads = (fromIndex: number, toIndex: number) => {
    setProjectUploads((currentUploads) => {
      const orderedKeys = Object.keys(currentUploads)
        .map((key) => Number(key))
        .sort((left, right) => left - right);
      const orderedUploads = orderedKeys.map((key) => currentUploads[key]);
      const nextUploadsArray = reorderItems(orderedUploads, fromIndex, toIndex);

      return nextUploadsArray.reduce<Record<number, File | null>>((accumulator, file, index) => {
        accumulator[index] = file;
        return accumulator;
      }, {});
    });
  };

  const handleDragStart = (type: DraggedItemType, index: number) => {
    setDragState({ type, index });
  };

  const handleDragEnd = () => {
    setDragState(null);
  };

  const handleDrop = (type: DraggedItemType, index: number) => {
    if (!dragState || dragState.type !== type || dragState.index === index) {
      setDragState(null);
      return;
    }

    if (type === 'experience') {
      setDraft((currentDraft) => ({
        ...currentDraft,
        experience: reorderItems(currentDraft.experience, dragState.index, index),
      }));
    }

    if (type === 'education') {
      setDraft((currentDraft) => ({
        ...currentDraft,
        education: reorderItems(currentDraft.education, dragState.index, index),
      }));
    }

    if (type === 'project') {
      setDraft((currentDraft) => ({
        ...currentDraft,
        projects: reorderItems(currentDraft.projects, dragState.index, index),
      }));
      reorderProjectUploads(dragState.index, index);
    }

    if (type === 'skill' && dragState.category) {
      const category = dragState.category;
      setDraft((currentDraft) => ({
        ...currentDraft,
        skills: {
          ...currentDraft.skills,
          [category]: reorderItems(currentDraft.skills[category], dragState.index, index),
        },
      }));
    }

    setDragState(null);
  };

  const handleDragOver = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
  };

  const addExperience = () => {
    setDraft((currentDraft) => ({
      ...currentDraft,
      experience: [...currentDraft.experience, createEmptyExperience()],
    }));
  };

  const removeExperience = (index: number) => {
    setDraft((currentDraft) => ({
      ...currentDraft,
      experience: currentDraft.experience.filter((_, itemIndex) => itemIndex !== index),
    }));
  };

  const addEducation = () => {
    setDraft((currentDraft) => ({
      ...currentDraft,
      education: [...currentDraft.education, createEmptyEducation()],
    }));
  };

  const removeEducation = (index: number) => {
    setDraft((currentDraft) => ({
      ...currentDraft,
      education: currentDraft.education.filter((_, itemIndex) => itemIndex !== index),
    }));
  };

  const addProject = () => {
    setDraft((currentDraft) => ({
      ...currentDraft,
      projects: [...currentDraft.projects, createEmptyProject()],
    }));
  };

  const removeProject = (index: number) => {
    setDraft((currentDraft) => ({
      ...currentDraft,
      projects: currentDraft.projects.filter((_, itemIndex) => itemIndex !== index),
    }));
    removeProjectUpload(index);
  };

  const toggleExperiencePublished = (index: number) => {
    setDraft((currentDraft) => {
      const next = [...currentDraft.experience];
      next[index] = { ...next[index], isPublished: !next[index].isPublished };
      return { ...currentDraft, experience: next };
    });
  };

  const toggleEducationPublished = (index: number) => {
    setDraft((currentDraft) => {
      const next = [...currentDraft.education];
      next[index] = { ...next[index], isPublished: !next[index].isPublished };
      return { ...currentDraft, education: next };
    });
  };

  const toggleProjectPublished = (index: number) => {
    setDraft((currentDraft) => {
      const next = [...currentDraft.projects];
      const current = next[index];
      next[index] = { ...current, status: current.status && current.status.toLowerCase().includes('brouillon') ? 'Publié' : 'Brouillon' };
      return { ...currentDraft, projects: next };
    });
  };

  const addSkill = (category: SkillCategory) => {
    setDraft((currentDraft) => ({
      ...currentDraft,
      skills: {
        ...currentDraft.skills,
        [category]: [...currentDraft.skills[category], { name: '', isPublished: true }],
      },
    }));
  };

  const removeSkill = (category: SkillCategory, index: number) => {
    setDraft((currentDraft) => ({
      ...currentDraft,
      skills: {
        ...currentDraft.skills,
        [category]: currentDraft.skills[category].filter((_, itemIndex) => itemIndex !== index),
      },
    }));
  };

  const updateSkillName = (category: SkillCategory, index: number, name: string) => {
    setDraft((currentDraft) => {
      const next = [...currentDraft.skills[category]];
      next[index] = { ...next[index], name };
      return {
        ...currentDraft,
        skills: { ...currentDraft.skills, [category]: next },
      };
    });
  };

  const toggleSkillPublished = (category: SkillCategory, index: number) => {
    setDraft((currentDraft) => {
      const next = [...currentDraft.skills[category]];
      next[index] = { ...next[index], isPublished: !next[index].isPublished };
      return {
        ...currentDraft,
        skills: { ...currentDraft.skills, [category]: next },
      };
    });
  };

  const requestConfirmation = (request: ConfirmationRequest) => {
    setConfirmationRequest(request);
  };

  const closeConfirmation = () => {
    setConfirmationRequest(null);
  };

  const executeConfirmation = async () => {
    if (!confirmationRequest) {
      return;
    }

    const request = confirmationRequest;
    closeConfirmation();

    if (request.action === 'save') {
      await saveDraft();
      return;
    }

    if (request.action === 'reset') {
      resetDraft();
      return;
    }

    if (request.action === 'sign-out') {
      await handleSignOut();
      return;
    }

    if (request.action === 'delete-experience' && request.index !== undefined) {
      removeExperience(request.index);
      return;
    }

    if (request.action === 'delete-education' && request.index !== undefined) {
      removeEducation(request.index);
      return;
    }

    if (request.action === 'delete-project' && request.index !== undefined) {
      removeProject(request.index);
      return;
    }

    if (request.action === 'delete-skill' && request.index !== undefined && request.category) {
      removeSkill(request.category, request.index);
    }
  };

  const currentSection = sections.find((section) => section.key === activeSection);
  const sectionIcon = activeSection === 'overview' || !currentSection ? LayoutDashboard : currentSection.icon;

  if (hasSupabaseConfig && !session) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-background to-primary/5"
      >
        <SEO title="Backoffice" description="Administration privée du portfolio." />

        <div className="container mx-auto px-4 py-8 md:py-10">
          <div className="mb-8 rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" /> Backoffice protégé
                <span className="rounded-full border border-border px-2 py-1">Accès sécurisé</span>
            </div>
            <h1 className="mt-3 text-3xl font-bold md:text-4xl">Connexion requise</h1>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">Le mode protégé est activé. Connecte-toi avec le compte administrateur pour éditer les contenus.</p>
          </div>

          <LoginPanel
            email={authEmail}
            password={authPassword}
            loading={authLoading}
            error={authError}
            onEmailChange={setAuthEmail}
            onPasswordChange={setAuthPassword}
            onSubmit={handleSignIn}
          />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-background to-primary/5"
    >
      <SEO title="Backoffice" description="Administration privée du portfolio." />

      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" /> Backoffice privé
              <span className="rounded-full border border-border px-2 py-1">Mode local</span>
              <span className="rounded-full border border-border px-2 py-1">Synchronisation prête</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold md:text-4xl">Administration du portfolio</h1>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">Prépare les contenus, les médias et le SEO dans une interface simple. La persistance passe actuellement par le navigateur en attendant la synchronisation distante.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Voir le site
              </Button>
            </Link>
            <Button variant="outline" className="gap-2" onClick={() => requestConfirmation({
              title: 'Réinitialiser le brouillon',
              description: 'Cette action supprime les modifications locales non enregistrées et remet le backoffice à l’état initial.',
              confirmLabel: 'Réinitialiser',
              tone: 'danger',
              action: 'reset',
            })}>
              Réinitialiser
            </Button>
            {supabase ? (
              <Button variant="outline" className="gap-2" onClick={() => requestConfirmation({
                title: 'Déconnexion',
                description: 'Tu vas quitter la session administrateur.',
                confirmLabel: 'Déconnexion',
                tone: 'danger',
                action: 'sign-out',
              })}>
                Déconnexion
              </Button>
            ) : null}
            <Button className="gap-2" onClick={() => requestConfirmation({
              title: 'Enregistrer les modifications',
              description: 'Les contenus, médias et réglages seront synchronisés avec la source de données.',
              confirmLabel: 'Enregistrer',
              tone: 'primary',
              action: 'save',
            })} disabled={saveLoading || remoteLoading}>
              <CheckCircle2 className="h-4 w-4" /> {saveLoading ? 'Enregistrement...' : 'Enregistrer'}
            </Button>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-border bg-card p-4 shadow-sm">
            <div className="mb-4 flex items-center gap-3 rounded-2xl bg-muted/40 p-4">
              <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">Espace admin</p>
                <p className="text-xs text-muted-foreground">Structure prête pour la mise en production</p>
              </div>
            </div>

            <nav className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.key;

                return (
                  <button
                    key={section.key}
                    type="button"
                    onClick={() => setActiveSection(section.key)}
                    className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition-colors ${isActive ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:bg-muted/50'}`}
                  >
                    <span className="flex items-center gap-3 text-sm font-medium">
                      <Icon className="h-4 w-4" />
                      {section.label}
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                );
              })}
            </nav>

            <div className="mt-4 rounded-2xl border border-dashed border-border p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Fichiers</p>
              <div className="mt-3 space-y-2 text-sm">
                <p><span className="font-medium">CV</span> : fichier source</p>
                <p><span className="font-medium">Avatar</span> : image source</p>
                <p><span className="font-medium">Projets</span> : images source</p>
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <StatCard label="Statut" value={remoteLoading ? 'Chargement' : 'Prêt'} detail={remoteLoading ? 'Lecture distante en cours' : 'Interface prête'} icon={CheckCircle2} />
              <StatCard label="Connexion" value={supabase ? 'Protégée' : 'Locale'} detail={supabase ? 'Accès privé actif' : 'Synchronisation locale'} icon={Database} />
              <StatCard label="Mise à jour" value={lastSavedAt || 'Jamais'} detail="Dernier brouillon sauvegardé" icon={FileDown} />
            </div>

            {saveMessage ? (
              <div className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-primary">
                {saveMessage}
              </div>
            ) : null}

            {saveError ? (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {saveError}
              </div>
            ) : null}

            {activeSection === 'overview' && (
              <SectionPanel title="Aperçu" description="Résumé rapide des contenus administrables." icon={sectionIcon}>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  <SummaryTile title="Profil" value={draft.profile.title} />
                  <SummaryTile title="Expériences" value={`${draft.experience.length} entrées`} />
                  <SummaryTile title="Formations" value={`${draft.education.length} entrées`} />
                  <SummaryTile title="Projets" value={`${draft.projects.length} entrées`} />
                </div>
                <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-5 text-sm text-muted-foreground">
                  Le backoffice est posé. Les listes ci-dessous fonctionnent comme de vrais blocs CRUD avec ajout, édition, suppression et upload de médias.
                </div>
              </SectionPanel>
            )}

            {activeSection === 'profile' && (
              <SectionPanel title="Profil" description="Contenu public principal du site." icon={UserRound}>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Titre">
                    <TextInput value={draft.profile.title} onChange={(event) => setDraft({ ...draft, profile: { ...draft.profile, title: event.target.value } })} />
                  </Field>
                  <I18nField
                    label="Sous-titre"
                    value={draft.profile.subtitle}
                    onChange={(next) => setDraft({ ...draft, profile: { ...draft.profile, subtitle: next } })}
                  />
                  <Field label="Email">
                    <TextInput value={draft.profile.email} onChange={(event) => setDraft({ ...draft, profile: { ...draft.profile, email: event.target.value } })} />
                  </Field>
                  <Field label="Localisation">
                    <TextInput value={draft.profile.location} onChange={(event) => setDraft({ ...draft, profile: { ...draft.profile, location: event.target.value } })} />
                  </Field>
                </div>
                <div className="mt-4 grid gap-4">
                  <I18nField
                    label="Bio"
                    multiline
                    value={draft.profile.bio}
                    onChange={(next) => setDraft({ ...draft, profile: { ...draft.profile, bio: next } })}
                  />
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="LinkedIn">
                      <TextInput value={draft.profile.linkedin} onChange={(event) => setDraft({ ...draft, profile: { ...draft.profile, linkedin: event.target.value } })} />
                    </Field>
                    <Field label="GitHub">
                      <TextInput value={draft.profile.github} onChange={(event) => setDraft({ ...draft, profile: { ...draft.profile, github: event.target.value } })} />
                    </Field>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="md:col-span-2 rounded-2xl border border-dashed border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
                    Les champs d’upload sont ici pour la photo de profil et le CV. Les images des projets se trouvent plus bas, dans la section Projets.
                  </div>
                  <Field label="Photo de profil">
                    <div className="space-y-3">
                      <TextInput value={draft.media.avatarPath} onChange={(event) => setDraft({ ...draft, media: { ...draft.media, avatarPath: event.target.value } })} placeholder="Chemin ou URL de l'avatar" />
                      <input
                        type="file"
                        accept="image/*"
                        className="block w-full text-sm text-muted-foreground file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary-foreground hover:file:opacity-90"
                        onChange={(event) => setAvatarUpload(event.target.files && event.target.files[0] ? event.target.files[0] : null)}
                      />
                    </div>
                  </Field>
                  <Field label="CV français">
                    <div className="space-y-3">
                      <TextInput value={draft.media.cvPathFr} onChange={(event) => setDraft({ ...draft, media: { ...draft.media, cvPathFr: event.target.value } })} placeholder="Chemin ou URL du CV français" />
                      <input
                        type="file"
                        accept="application/pdf"
                        className="block w-full text-sm text-muted-foreground file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary-foreground hover:file:opacity-90"
                        onChange={(event) => setCvUploadFr(event.target.files && event.target.files[0] ? event.target.files[0] : null)}
                      />
                      {cvPreviewFrUrl || draft.media.cvPathFr ? (
                        <a href={cvPreviewFrUrl || draft.media.cvPathFr} target="_blank" rel="noreferrer" className="inline-flex rounded-lg bg-primary/10 px-3 py-2 text-sm text-primary">
                          Voir le CV français
                        </a>
                      ) : null}
                    </div>
                  </Field>
                  <Field label="CV anglais">
                    <div className="space-y-3">
                      <TextInput value={draft.media.cvPathEn} onChange={(event) => setDraft({ ...draft, media: { ...draft.media, cvPathEn: event.target.value } })} placeholder="Chemin ou URL du CV anglais" />
                      <input
                        type="file"
                        accept="application/pdf"
                        className="block w-full text-sm text-muted-foreground file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary-foreground hover:file:opacity-90"
                        onChange={(event) => setCvUploadEn(event.target.files && event.target.files[0] ? event.target.files[0] : null)}
                      />
                      {cvPreviewEnUrl || draft.media.cvPathEn ? (
                        <a href={cvPreviewEnUrl || draft.media.cvPathEn} target="_blank" rel="noreferrer" className="inline-flex rounded-lg bg-primary/10 px-3 py-2 text-sm text-primary">
                          Voir le CV anglais
                        </a>
                      ) : null}
                    </div>
                  </Field>
                  { /* Previews */ }
                  <div className="mt-4 flex items-center gap-4">
                    {avatarPreviewUrl || draft.media.avatarPath ? (
                      <img src={avatarPreviewUrl || draft.media.avatarPath} alt="Avatar preview" className="h-20 w-20 rounded-full object-cover" />
                    ) : null}
                    <div>
                      {draft.media.cvPathFr || draft.media.cvPathEn ? (
                        <p className="text-sm text-muted-foreground">Deux CV peuvent être gérés ici, un pour chaque langue.</p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </SectionPanel>
            )}

            {activeSection === 'experience' && (
              <SectionPanel title="Expériences" description="Liste des expériences professionnelles affichées sur le site public." icon={BriefcaseBusiness}>
                <div className="mb-4 flex justify-end">
                  <Button variant="outline" className="gap-2" onClick={addExperience}>
                    <Plus className="h-4 w-4" /> Ajouter une expérience
                  </Button>
                </div>
                <div className="space-y-4">
                  {draft.experience.map((item, index) => (
                    <div
                      key={index}
                      draggable
                      onDragStart={() => handleDragStart('experience', index)}
                      onDragEnd={handleDragEnd}
                      onDragOver={handleDragOver}
                      onDrop={() => handleDrop('experience', index)}
                      className={`rounded-2xl border p-4 transition-all ${dragState && dragState.type === 'experience' && dragState.index === index ? 'border-primary bg-primary/5 shadow-md' : 'border-border'}`}
                    >
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="mr-2 p-2 rounded-lg bg-muted/20 cursor-grab">
                            <GripVertical className="h-4 w-4" />
                          </span>
                          <p className="text-sm font-medium text-foreground">Expérience {index + 1}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button type="button" onClick={() => toggleExperiencePublished(index)} className={`rounded-full px-3 py-1 text-sm ${item.isPublished ? 'bg-green-100 text-green-700' : 'bg-muted/10 text-muted-foreground'}`}>
                            {item.isPublished ? 'Publié' : 'Brouillon'}
                          </button>
                          <Button type="button" variant="outline" className="gap-2" onClick={() => requestConfirmation({
                            title: 'Supprimer cette expérience',
                            description: 'L’entrée sera retirée du portfolio et de la source de données lors de l’enregistrement.',
                            confirmLabel: 'Supprimer',
                            tone: 'danger',
                            action: 'delete-experience',
                            index,
                          })}>
                            <Trash2 className="h-4 w-4" /> Supprimer
                          </Button>
                        </div>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <Field label="Entreprise">
                          <TextInput value={item.company} onChange={(event) => {
                            const experience = [...draft.experience];
                            experience[index] = { ...experience[index], company: event.target.value };
                            setDraft({ ...draft, experience });
                          }} />
                        </Field>
                        <Field label="Période">
                          <TextInput value={item.period} onChange={(event) => {
                            const experience = [...draft.experience];
                            experience[index] = { ...experience[index], period: event.target.value };
                            setDraft({ ...draft, experience });
                          }} />
                        </Field>
                      </div>
                      <div className="mt-4">
                        <I18nField
                          label="Rôle"
                          value={item.role}
                          onChange={(next) => {
                            const experience = [...draft.experience];
                            experience[index] = { ...experience[index], role: next };
                            setDraft({ ...draft, experience });
                          }}
                        />
                      </div>
                      <div className="mt-4">
                        <I18nField
                          label="Description"
                          multiline
                          value={item.description}
                          onChange={(next) => {
                            const experience = [...draft.experience];
                            experience[index] = { ...experience[index], description: next };
                            setDraft({ ...draft, experience });
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </SectionPanel>
            )}

            {activeSection === 'education' && (
              <SectionPanel title="Formations et certificats" description="Diplômes, parcours et certificats." icon={GraduationCap}>
                <div className="mb-4 flex justify-end">
                  <Button variant="outline" className="gap-2" onClick={addEducation}>
                    <Plus className="h-4 w-4" /> Ajouter une formation
                  </Button>
                </div>
                <div className="space-y-4">
                  {draft.education.map((item, index) => (
                    <div
                      key={index}
                      draggable
                      onDragStart={() => handleDragStart('education', index)}
                      onDragEnd={handleDragEnd}
                      onDragOver={handleDragOver}
                      onDrop={() => handleDrop('education', index)}
                      className={`rounded-2xl border p-4 transition-all ${dragState && dragState.type === 'education' && dragState.index === index ? 'border-primary bg-primary/5 shadow-md' : 'border-border'}`}
                    >
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="mr-2 p-2 rounded-lg bg-muted/20 cursor-grab">
                            <GripVertical className="h-4 w-4" />
                          </span>
                          <p className="text-sm font-medium text-foreground">Formation {index + 1}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button type="button" onClick={() => toggleEducationPublished(index)} className={`rounded-full px-3 py-1 text-sm ${item.isPublished ? 'bg-green-100 text-green-700' : 'bg-muted/10 text-muted-foreground'}`}>
                            {item.isPublished ? 'Publié' : 'Brouillon'}
                          </button>
                          <Button type="button" variant="outline" className="gap-2" onClick={() => requestConfirmation({
                            title: 'Supprimer cette formation',
                            description: 'L’entrée sera retirée du portfolio et de la source de données lors de l’enregistrement.',
                            confirmLabel: 'Supprimer',
                            tone: 'danger',
                            action: 'delete-education',
                            index,
                          })}>
                            <Trash2 className="h-4 w-4" /> Supprimer
                          </Button>
                        </div>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <Field label="Établissement">
                          <TextInput value={item.school} onChange={(event) => {
                            const education = [...draft.education];
                            education[index] = { ...education[index], school: event.target.value };
                            setDraft({ ...draft, education });
                          }} />
                        </Field>
                        <Field label="Période">
                          <TextInput value={item.period} onChange={(event) => {
                            const education = [...draft.education];
                            education[index] = { ...education[index], period: event.target.value };
                            setDraft({ ...draft, education });
                          }} />
                        </Field>
                      </div>
                      <div className="mt-4">
                        <I18nField
                          label="Diplôme"
                          value={item.diploma}
                          onChange={(next) => {
                            const education = [...draft.education];
                            education[index] = { ...education[index], diploma: next };
                            setDraft({ ...draft, education });
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </SectionPanel>
            )}

            {activeSection === 'projects' && (
              <SectionPanel title="Projets" description="Réalisations publiques et projet en cours." icon={FolderOpen}>
                <div className="mb-4 flex justify-end">
                  <Button variant="outline" className="gap-2" onClick={addProject}>
                    <Plus className="h-4 w-4" /> Ajouter un projet
                  </Button>
                </div>
                <div className="space-y-4">
                  {draft.projects.map((item, index) => (
                    <div
                      key={index}
                      draggable
                      onDragStart={() => handleDragStart('project', index)}
                      onDragEnd={handleDragEnd}
                      onDragOver={handleDragOver}
                      onDrop={() => handleDrop('project', index)}
                      className={`rounded-2xl border p-4 transition-all ${dragState && dragState.type === 'project' && dragState.index === index ? 'border-primary bg-primary/5 shadow-md' : 'border-border'}`}
                    >
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="mr-2 p-2 rounded-lg bg-muted/20 cursor-grab">
                            <GripVertical className="h-4 w-4" />
                          </span>
                          <p className="text-sm font-medium text-foreground">Projet {index + 1}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button type="button" onClick={() => toggleProjectPublished(index)} className={`rounded-full px-3 py-1 text-sm ${item.status && item.status.toLowerCase().includes('brouillon') ? 'bg-muted/10 text-muted-foreground' : 'bg-green-100 text-green-700'}`}>
                            {item.status && item.status.toLowerCase().includes('brouillon') ? 'Brouillon' : 'Publié'}
                          </button>
                          <Button type="button" variant="outline" className="gap-2" onClick={() => requestConfirmation({
                            title: 'Supprimer ce projet',
                            description: 'Le projet, son image et ses champs associés seront retirés lors de l’enregistrement.',
                            confirmLabel: 'Supprimer',
                            tone: 'danger',
                            action: 'delete-project',
                            index,
                          })}>
                            <Trash2 className="h-4 w-4" /> Supprimer
                          </Button>
                        </div>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        <Field label="Titre">
                          <TextInput value={item.title} onChange={(event) => {
                            const projects = [...draft.projects];
                            projects[index] = { ...projects[index], title: event.target.value };
                            setDraft({ ...draft, projects });
                          }} />
                        </Field>
                        <Field label="Statut">
                          <TextInput value={item.status} onChange={(event) => {
                            const projects = [...draft.projects];
                            projects[index] = { ...projects[index], status: event.target.value };
                            setDraft({ ...draft, projects });
                          }} />
                        </Field>
                        <Field label="Stack">
                          <TextInput value={item.stack} onChange={(event) => {
                            const projects = [...draft.projects];
                            projects[index] = { ...projects[index], stack: event.target.value };
                            setDraft({ ...draft, projects });
                          }} />
                        </Field>
                      </div>
                      <div className="mt-4">
                        <I18nField
                          label="Résumé"
                          multiline
                          value={item.summary}
                          onChange={(next) => {
                            const projects = [...draft.projects];
                            projects[index] = { ...projects[index], summary: next };
                            setDraft({ ...draft, projects });
                          }}
                        />
                      </div>
                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        <Field label="Image du projet" hint="Upload vers projects-images">
                          <div className="space-y-3">
                            <TextInput
                              value={item.coverPath}
                              onChange={(event) => {
                                const projects = [...draft.projects];
                                projects[index] = { ...projects[index], coverPath: event.target.value };
                                setDraft({ ...draft, projects });
                              }}
                              placeholder="URL publique ou chemin image"
                            />
                            <input
                              type="file"
                              accept="image/*"
                              className="block w-full text-sm text-muted-foreground file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary-foreground hover:file:opacity-90"
                              onChange={(event) => handleProjectFileChange(index, event.target.files && event.target.files[0] ? event.target.files[0] : null)}
                            />
                              {projectPreviewUrls[index] || item.coverPath ? (
                                <div className="mt-2">
                                  <img src={projectPreviewUrls[index] || item.coverPath} alt="Projet" className="h-28 w-40 rounded-md object-cover border" />
                                </div>
                              ) : null}
                          </div>
                        </Field>
                        <Field label="Lien du projet">
                          <TextInput
                            value={item.projectUrl}
                            onChange={(event) => {
                              const projects = [...draft.projects];
                              projects[index] = { ...projects[index], projectUrl: event.target.value };
                              setDraft({ ...draft, projects });
                            }}
                            placeholder="https://..."
                          />
                        </Field>
                        <Field label="Lien du code source">
                          <TextInput
                            value={item.repositoryUrl}
                            onChange={(event) => {
                              const projects = [...draft.projects];
                              projects[index] = { ...projects[index], repositoryUrl: event.target.value };
                              setDraft({ ...draft, projects });
                            }}
                            placeholder="https://github.com/..."
                          />
                        </Field>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionPanel>
            )}

            {activeSection === 'skills' && (
              <SectionPanel title="Compétences techniques" description="Listes affichées sur la page d'accueil. L'icône est choisie automatiquement à partir du nom." icon={Sigma}>
                <div className="grid gap-4 md:grid-cols-2">
                  {SKILL_CATEGORIES.map((category) => (
                    <div key={category} className="rounded-2xl border border-border p-4">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">{SKILL_CATEGORY_LABELS[category]}</h3>
                        <Button type="button" variant="outline" size="sm" className="gap-2" onClick={() => addSkill(category)}>
                          <Plus className="h-3.5 w-3.5" /> Ajouter
                        </Button>
                      </div>
                      <div className="space-y-2">
                        {draft.skills[category].length === 0 ? (
                          <p className="rounded-xl border border-dashed border-border bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
                            Aucune compétence dans cette catégorie.
                          </p>
                        ) : null}
                        {draft.skills[category].map((item, index) => (
                          <div
                            key={item.id || `${category}-${index}`}
                            draggable
                            onDragStart={() => setDragState({ type: 'skill', index, category })}
                            onDragEnd={handleDragEnd}
                            onDragOver={handleDragOver}
                            onDrop={() => handleDrop('skill', index)}
                            className={`flex items-center gap-2 rounded-xl border p-2 transition-all ${dragState && dragState.type === 'skill' && dragState.category === category && dragState.index === index ? 'border-primary bg-primary/5 shadow-md' : 'border-border bg-background'}`}
                          >
                            <span className="cursor-grab p-1 text-muted-foreground">
                              <GripVertical className="h-4 w-4" />
                            </span>
                            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                              {getSkillIcon(item.name)}
                            </span>
                            <TextInput
                              value={item.name}
                              placeholder="Nom (ex: React, Node.js, Docker)"
                              onChange={(event) => updateSkillName(category, index, event.target.value)}
                              className="!py-2 !px-3 text-sm"
                            />
                            <button
                              type="button"
                              onClick={() => toggleSkillPublished(category, index)}
                              className={`shrink-0 rounded-full px-2.5 py-1 text-xs ${item.isPublished !== false ? 'bg-green-100 text-green-700' : 'bg-muted/30 text-muted-foreground'}`}
                            >
                              {item.isPublished !== false ? 'Publié' : 'Brouillon'}
                            </button>
                            <button
                              type="button"
                              onClick={() => requestConfirmation({
                                title: 'Supprimer cette compétence',
                                description: `"${item.name || 'Sans nom'}" sera retirée lors de l'enregistrement.`,
                                confirmLabel: 'Supprimer',
                                tone: 'danger',
                                action: 'delete-skill',
                                index,
                                category,
                              })}
                              className="shrink-0 rounded-md p-1.5 text-muted-foreground hover:bg-red-50 hover:text-red-600"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 rounded-xl border border-dashed border-border bg-muted/20 px-4 py-3 text-xs text-muted-foreground">
                  Astuce : l'icône est devinée à partir du nom (React, Docker, Tailwind, etc.). Les noms inconnus reçoivent une icône générique.
                </p>
              </SectionPanel>
            )}

            {activeSection === 'media' && (
              <SectionPanel title="Médias" description="Chemins de fichiers et uploads principaux." icon={Image}>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Chemin du CV français">
                    <TextInput value={draft.media.cvPathFr} onChange={(event) => setDraft({ ...draft, media: { ...draft.media, cvPathFr: event.target.value } })} />
                  </Field>
                  <Field label="Chemin du CV anglais">
                    <TextInput value={draft.media.cvPathEn} onChange={(event) => setDraft({ ...draft, media: { ...draft.media, cvPathEn: event.target.value } })} />
                  </Field>
                  <Field label="Chemin avatar">
                    <TextInput value={draft.media.avatarPath} onChange={(event) => setDraft({ ...draft, media: { ...draft.media, avatarPath: event.target.value } })} />
                  </Field>
                  <Field label="Dossier médias projets">
                    <TextInput value={draft.media.projectMediaPath} onChange={(event) => setDraft({ ...draft, media: { ...draft.media, projectMediaPath: event.target.value } })} />
                  </Field>
                  <Field label="Note">
                    <TextInput value="Les fichiers sélectionnés seront téléversés au prochain enregistrement. Le CV est géré séparément en français et en anglais." readOnly />
                  </Field>
                </div>
              </SectionPanel>
            )}

            {activeSection === 'seo' && (
              <SectionPanel title="SEO" description="Réglages de base du site public." icon={Link2}>
                <div className="grid gap-4">
                  <Field label="Nom du site">
                    <TextInput value={draft.seo.siteName} onChange={(event) => setDraft({ ...draft, seo: { ...draft.seo, siteName: event.target.value } })} />
                  </Field>
                  <I18nField
                    label="Titre meta"
                    value={draft.seo.metaTitle}
                    onChange={(next) => setDraft({ ...draft, seo: { ...draft.seo, metaTitle: next } })}
                  />
                  <I18nField
                    label="Description meta"
                    multiline
                    value={draft.seo.metaDescription}
                    onChange={(next) => setDraft({ ...draft, seo: { ...draft.seo, metaDescription: next } })}
                  />
                </div>
              </SectionPanel>
            )}
          </div>
        </div>

        {confirmationRequest ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-3xl border border-border bg-card p-6 shadow-2xl">
              <div className="flex items-start gap-3">
                <div className={`rounded-2xl p-3 ${confirmationRequest.tone === 'danger' ? 'bg-red-100 text-red-600' : 'bg-primary/10 text-primary'}`}>
                  <Shield className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{confirmationRequest.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{confirmationRequest.description}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Button type="button" variant="outline" className="gap-2" onClick={closeConfirmation}>
                  Annuler
                </Button>
                <Button
                  type="button"
                  className="gap-2"
                  onClick={() => void executeConfirmation()}
                >
                  {confirmationRequest.tone === 'danger' ? <Trash2 className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
                  {confirmationRequest.confirmLabel}
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

const SummaryTile: React.FC<{ title: string; value: string }> = ({ title, value }) => (
  <div className="rounded-2xl border border-border bg-muted/30 p-4">
    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{title}</p>
    <p className="mt-2 text-sm font-medium text-foreground">{value}</p>
  </div>
);