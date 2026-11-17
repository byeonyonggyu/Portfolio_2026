export type Media = { src: string; kind: 'youtube' | 'vimeo' | 'file'; poster?: string; label: string };
export type Project = {
  id: string; slug: string; title: string; summary: string;
  dates?: { start: string; end?: string }; tools: string[]; engine: string;
  tags: string[]; effectType: string; thumbnail?: string; video?: Media;
  role: string; intent?: string; featured?: boolean; sample?: boolean;
  production?: { title: string; description: string }[];
  breakdown: { title: string; description: string; image?: string; width?: number; height?: number; kind?: 'texture' | 'shader'; notes?: string[] }[];
  comparison?: { draft?: string; final?: string; description: string };
  challenges?: string[]; performance?: string[]; credits: { label: string; url?: string }[];
};
export type Activity = {
  id: string; startDate?: string; endDate?: string; category: '프로젝트' | '교육' | '스터디' | '학력' | '교내활동' | '수상' | '행사' | '장학';
  title: string; role: string; description: string; outcomes: string[];
  cardSummary?: string;
  awardImage?: string;
  projectSlug?: string; externalUrl?: string; featured?: boolean; sample?: boolean;
};
export type Profile = {
  name: string; job: string; introduction: string; about?: string; tools: string[];
  email?: string; phone?: string; artstation?: string; github?: string; resume?: string;
  skills: { title: string; description: string }[];
};
export type GameProjectCopy = {
  title: string; summary: string; tagline: string; tags: string[];
  facts: { label: string; value: string }[];
  about: { title: string; description: string }[];
  responsibilities: string[];
  solutions: { title: string; description: string }[];
  tools: { title: string; description: string }[];
  takeaway: string;
};
export type GameProject = {
  slug: string; activityId: string; event: string;
  kind?: 'game' | 'presentation';
  layout?: 'case-study';
  initialImage?: number;
  breakdown?: { ko: Project['breakdown']; en: Project['breakdown'] };
  context?: { ko: string; en: string };
  screenshots: { src: string; thumbnail: string; caption: { ko: string; en: string }; crop?: { x: number; y: number; width: number; height: number; originalWidth: number; originalHeight: number } }[];
  copy: { ko: GameProjectCopy; en: GameProjectCopy };
};
