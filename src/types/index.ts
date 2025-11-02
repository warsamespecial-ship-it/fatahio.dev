export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  image?: string;
  url?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

