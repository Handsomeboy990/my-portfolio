import { supabase, hasSupabaseConfig } from './supabase';
import { EDUCATIONS, EXPERIENCES, PROJECTS_DATA, ZEMI_PROJECT, TRANSLATIONS } from '../constants';
import { Education, Experience, Project, Language, Content } from '../../types';

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

export type PublicContentState = {
    loaded: boolean;
    siteName: string;
    hero: {
        title: string;
        subtitle: string;
        cvUrl: string;
    };
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

const mapProfile = (row: ProfileRow | null, fallbackTitle: string, fallbackSubtitle: string, language: Language) => {
    const cvPaths = parseCvPaths(row?.cv_path || null);

    return {
        title: row?.title || fallbackTitle,
        subtitle: row?.subtitle || fallbackSubtitle,
        cvUrl: language === 'fr' ? cvPaths.fr : cvPaths.en || cvPaths.fr,
    };
};

const mapExperiences = (rows: ExperienceRow[]): Experience[] => {
    if (!rows.length) return EXPERIENCES;

    return rows.map((row) => ({
        year: formatPeriod(row.start_date, row.end_date),
        role: row.role,
        company: row.company,
        description: row.description || '',
    }));
};

const mapEducations = (rows: EducationRow[]): Education[] => {
    if (!rows.length) return EDUCATIONS;

    return rows.map((row) => ({
        year: formatDate(row.end_date || row.start_date),
        degree: row.diploma,
        school: row.school,
        url: row.kind || '',
    }));
};

const mapProjects = (rows: ProjectRow[]): Project[] => {
    const localProjects = [...PROJECTS_DATA, ZEMI_PROJECT];

    if (!rows.length) return localProjects;

    const mergedProjects = localProjects.map((project) => {
        const matchingRow = rows.find((row) => row.title.toLowerCase() === project.title.toLowerCase() || (row.slug || '').toLowerCase() === project.title.toLowerCase());

        if (!matchingRow) {
            return project;
        }

        return {
            title: matchingRow.title,
            description: matchingRow.summary || matchingRow.content || project.description,
            tags: matchingRow.stack ? matchingRow.stack.split(',').map((tag) => tag.trim()).filter(Boolean) : project.tags,
            imageUrl: matchingRow.cover_path && matchingRow.cover_path.startsWith('http') ? matchingRow.cover_path : project.imageUrl,
            repoUrl: matchingRow.repository_url || matchingRow.project_url || project.repoUrl,
            demoUrl: matchingRow.project_url || project.demoUrl,
            status: matchingRow.is_published === false ? 'in-progress' : 'completed',
        };
    });

    const extras = rows
        .filter((row) => !localProjects.some((project) => project.title.toLowerCase() === row.title.toLowerCase() || (row.slug || '').toLowerCase() === project.title.toLowerCase()))
        .map((row) => ({
            title: row.title,
            description: row.summary || row.content || '',
            tags: row.stack ? row.stack.split(',').map((tag) => tag.trim()).filter(Boolean) : [],
            imageUrl: row.cover_path && row.cover_path.startsWith('http') ? row.cover_path : '',
            repoUrl: row.repository_url || row.project_url || '#',
            demoUrl: row.project_url || undefined,
            status: row.is_published === false ? 'in-progress' : 'completed',
        }));

    return [...mergedProjects, ...extras];
};

export const loadPublicContent = async (language: Language) => {
    const fallback = TRANSLATIONS[language];

    if (!hasSupabaseConfig || !supabase) {
        return {
            loaded: true,
            siteName: fallback.hero.title,
            hero: {
                title: fallback.hero.title,
                subtitle: fallback.hero.subtitle,
                cvUrl: '',
            },
            experiences: EXPERIENCES,
            educations: EDUCATIONS,
            projects: PROJECTS_DATA,
            zemiProject: ZEMI_PROJECT,
            translations: TRANSLATIONS,
        } satisfies PublicContentState;
    }

    const [profileResult, experiencesResult, educationsResult, projectsResult, settingsResult] = await Promise.all([
        supabase.from('profile').select('*').limit(1).maybeSingle(),
        supabase.from('experiences').select('*').eq('is_published', true).order('sort_order', { ascending: true }),
        supabase.from('educations').select('*').eq('is_published', true).order('sort_order', { ascending: true }),
        supabase.from('projects').select('*').eq('is_published', true).order('sort_order', { ascending: true }),
        supabase.from('site_settings').select('*').limit(1).maybeSingle(),
    ]);

    const fallbackHero = mapProfile(null, fallback.hero.title, fallback.hero.subtitle, language);
    const profileRow = profileResult.data as ProfileRow | null;
    const settingsRow = settingsResult.data as SiteSettingsRow | null;
    const profileHero = mapProfile(profileRow, fallback.hero.title, fallback.hero.subtitle, language);

    return {
        loaded: true,
        siteName: settingsRow?.site_name || profileRow?.title || fallbackHero.title,
        hero: {
            title: settingsRow?.hero_title || profileRow?.title || fallbackHero.title,
            subtitle: settingsRow?.hero_subtitle || profileRow?.subtitle || fallbackHero.subtitle,
            cvUrl: profileHero.cvUrl,
        },
        experiences: experiencesResult.error ? EXPERIENCES : mapExperiences((experiencesResult.data || []) as ExperienceRow[]),
        educations: educationsResult.error ? EDUCATIONS : mapEducations((educationsResult.data || []) as EducationRow[]),
        projects: projectsResult.error ? PROJECTS_DATA : mapProjects((projectsResult.data || []) as ProjectRow[]),
        zemiProject: ZEMI_PROJECT,
        translations: TRANSLATIONS,
    } satisfies PublicContentState;
};