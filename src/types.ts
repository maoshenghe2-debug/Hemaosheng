export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  photo: string; // Deprecated, kept for backward compatibility if needed temporarily
  photos: string[]; // New field for carousel
  email: string;
  location: string;
  social: {
    github?: string;
    linkedin?: string;
    googleScholar?: string;
  };
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  citationCount?: number;
  doi?: string;
  url?: string;
  type: 'journal' | 'conference' | 'patent';
  status?: 'published' | 'accepted' | 'submitted';
}

export interface Skill {
  name: string;
  level: number; // 1-100
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  level?: string; // National, Regional, etc.
}

export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}
