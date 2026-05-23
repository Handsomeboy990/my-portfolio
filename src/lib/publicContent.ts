import { supabase, hasSupabaseConfig } from './supabase';
import { EDUCATIONS, EXPERIENCES, PROJECTS_DATA, ZEMI_PROJECT, TRANSLATIONS } from '../constants';
import { Education, Experience, Project, Language, Content } from '../../types';
import { pickI18n } from './i18n';

type ProfileRow = {
    title: string | null;
    subtitle: string | null;
    bio: string | null;
    email: string | null;
    linkedin_url: string | null;
    github_url: string | null;
    location: string | null;
    cv_path: string | null;
    avatar_path: string | null;
};

type ExperienceRow = {
    company: string;
    role: string;
    start_date: string | null;
    end_date: string | null;
    description: string | null;
    sort_order: number | null;
    is_published: boolean | null;
};

type EducationRow = {
    school: string;
    diploma: string;
    start_date: string | null;
    end_date: string | null;
    description: string | null;
    kind: string | null;
    sort_order: number | null;
    is_published: boolean | null;
};

type ProjectRow = {
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

type SiteSettingsRow = {
    site_name: string | null;
    seo_title: string | null;
    seo_description: string | null;
    hero_title: string | null;
    hero_subtitle: string | null;
    footer_text: string | null;
};

export type PublicProfile = {
    bio: string;
    avatarUrl: string;
    email: string;
    linkedinUrl: string;
    githubUrl: string;
    location: string;
};

export type PublicSeo = {
    title: string;
    description: string;
};

export type PublicContentState = {
    loaded: boolean;
    siteName: string;
    footerText: string;
    hero: {
        title: string;
        subtitle: string;
        cvUrl: string;
    };
    profile: PublicProfile;
    seo: PublicSeo;
    experiences: Experience[];
    educations: Education[];
    projects: Project[];
    zemiProject: Project;
    translations: Record<Language, Content>;
};

const formatDate = (value: string | null): string => {
    if (!value) return '';

    const yearMatch = value.match(/^(\d{4})-01-01$/);
    if (yearMatch) return yearMatch[1];

    const endYearMatch = value.match(/^(\d{4})-12-31$/);
    if (endYearMatch) return endYearMatch[1];

    return value.slice(0, 10);
};

const formatPeriod = (startDate: string | null, endDate: string | null): string => {
    const start = formatDate(startDate);
    const end = endDate ? formatDate(endDate) : 'Present';

    if (!start) return end;

    return `${start} - ${end}`;
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

const mapExperiences = (rows: ExperienceRow[], language: Language): Experience[] => {
    if (!rows.length) return EXPERIENCES;

    return rows.map((row) => ({
        year: formatPeriod(row.start_date, row.end_date),
        role: pickI18n(row.role, language),
        company: row.company,
        description: pickI18n(row.description, language),
    }));
};

const mapEducations = (rows: EducationRow[], language: Language): Education[] => {
    if (!rows.length) return EDUCATIONS;

    return rows.map((row) => ({
        year: formatDate(row.end_date || row.start_date),
        degree: pickI18n(row.diploma, language),
        school: row.school,
        url: row.kind || '',
    }));
};

const mapProjects = (rows: ProjectRow[], language: Language): Project[] =>
    rows.map((row) => ({
        title: row.title,
        description: pickI18n(row.summary || row.content, language),
        tags: row.stack ? row.stack.split(',').map((tag) => tag.trim()).filter(Boolean) : [],
        imageUrl: row.cover_path || '',
        repoUrl: row.repository_url || row.project_url || '#',
        demoUrl: row.project_url || undefined,
        status: row.is_published === false ? 'in-progress' : 'completed',
        sort_order: row.sort_order ?? undefined,
    }));

const emptyProfile = (): PublicProfile => ({
    bio: '',
    avatarUrl: '',
    email: '',
    linkedinUrl: '',
    githubUrl: '',
    location: '',
});

export const loadPublicContent = async (language: Language): Promise<PublicContentState> => {
    const fallback = TRANSLATIONS[language];

    if (!hasSupabaseConfig || !supabase) {
        return {
            loaded: true,
            siteName: fallback.hero.title,
            footerText: '',
            hero: {
                title: fallback.hero.title,
                subtitle: fallback.hero.subtitle,
                cvUrl: '',
            },
            profile: emptyProfile(),
            seo: { title: '', description: '' },
            experiences: EXPERIENCES,
            educations: EDUCATIONS,
            projects: PROJECTS_DATA,
            zemiProject: ZEMI_PROJECT,
            translations: TRANSLATIONS,
        };
    }

    const [profileResult, experiencesResult, educationsResult, projectsResult, settingsResult] = await Promise.all([
        supabase.from('profile').select('*').limit(1).maybeSingle(),
        supabase.from('experiences').select('*').eq('is_published', true).order('sort_order', { ascending: true }),
        supabase.from('educations').select('*').eq('is_published', true).order('sort_order', { ascending: true }),
        supabase.from('projects').select('*').eq('is_published', true).order('sort_order', { ascending: true }),
        supabase.from('site_settings').select('*').limit(1).maybeSingle(),
    ]);

    const profileRow = profileResult.data as ProfileRow | null;
    const settingsRow = settingsResult.data as SiteSettingsRow | null;
    const cvPaths = parseCvPaths(profileRow?.cv_path || null);

    const profile: PublicProfile = {
        bio: pickI18n(profileRow?.bio, language),
        avatarUrl: profileRow?.avatar_path || '',
        email: profileRow?.email || '',
        linkedinUrl: profileRow?.linkedin_url || '',
        githubUrl: profileRow?.github_url || '',
        location: profileRow?.location || '',
    };

    const rawHeroSubtitle = settingsRow?.hero_subtitle || profileRow?.subtitle;
    const heroSubtitle = rawHeroSubtitle ? pickI18n(rawHeroSubtitle, language) : fallback.hero.subtitle;

    return {
        loaded: true,
        siteName: settingsRow?.site_name || profileRow?.title || fallback.hero.title,
        footerText: pickI18n(settingsRow?.footer_text, language),
        hero: {
            title: settingsRow?.hero_title || profileRow?.title || fallback.hero.title,
            subtitle: heroSubtitle,
            cvUrl: language === 'fr' ? cvPaths.fr : cvPaths.en || cvPaths.fr,
        },
        profile,
        seo: {
            title: pickI18n(settingsRow?.seo_title, language),
            description: pickI18n(settingsRow?.seo_description, language),
        },
        experiences: experiencesResult.error ? EXPERIENCES : mapExperiences((experiencesResult.data || []) as ExperienceRow[], language),
        educations: educationsResult.error ? EDUCATIONS : mapEducations((educationsResult.data || []) as EducationRow[], language),
        projects: projectsResult.error ? PROJECTS_DATA : mapProjects((projectsResult.data || []) as ProjectRow[], language),
        zemiProject: ZEMI_PROJECT,
        translations: TRANSLATIONS,
    };
};
