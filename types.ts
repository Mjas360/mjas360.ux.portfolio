
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  problem: string;
  role: string;
  outcome: string;
  imageUrl: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  tags: string[];
}

export interface Skill {
  name: string;
  category: 'Design' | 'Tools' | 'Development';
}

export interface PortfolioData {
  name: string;
  title: string;
  shortIntro: string;
  longBio: string;
  profileImage: string;
  email: string;
  linkedin: string;
  github: string;
  projects: Project[];
  skills: Skill[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
