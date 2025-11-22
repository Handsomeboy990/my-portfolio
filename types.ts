import React from 'react';

export type Language = 'fr' | 'en';

export interface NavigationLink {
  key: string;
  path: string;
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface Education {
  year: string;
  degree: string;
  school: string;
}

export interface Skill {
  name: string;
  icon?: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  repoUrl: string;
  demoUrl?: string;
  status?: 'completed' | 'in-progress';
}

export interface Content {
  nav: {
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta_cv: string;
    cta_projects: string;
  };
  about: {
    title: string;
    subtitle: string;
    bio_p1: string;
    bio_p2: string;
    bio_p3: string;
    values_title: string;
    values: string[];
  };
  experience: {
    title: string;
  };
  education: {
    title: string;
  };
  skills: {
    title: string;
    frontend: string;
    backend: string;
    db: string;
    tools: string;
    soft: string;
  };
  projects: {
    title: string;
    subtitle: string;
    completed: string;
    in_progress: string;
    zemi_desc: string;
    zemi_features: string;
    zemi_roadmap: string;
    view_project: string;
    source_code: string;
  };
  perspectives: {
    title: string;
    content: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form_name: string;
    form_email: string;
    form_message: string;
    form_send: string;
    success_msg: string;
    sending: string;
  };
  seo: {
    home: { title: string; description: string };
    projects: { title: string; description: string };
    contact: { title: string; description: string };
  };
}