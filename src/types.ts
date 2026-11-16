export type Media = { src: string; kind: 'youtube' | 'vimeo' | 'file'; poster?: string; label: string };
export type Project = {
  id: string; slug: string; title: string; summary: string;
  dates?: { start: string; end?: string }; tools: string[]; engine: string;
  tags: string[]; effectType: string; thumbnail?: string; video?: Media;
  role: string; intent?: string; featured?: boolean; sample?: boolean;
  breakdown: { title: string; description: string; image?: string }[];
  comparison?: { draft?: string; final?: string; description: string };
  challenges?: string[]; performance?: string[]; credits: { label: string; url?: string }[];
};
export type Activity = {
  id: string; startDate?: string; endDate?: string; category: '프로젝트' | '교육' | '스터디' | '학력' | '교내활동' | '수상' | '행사' | '장학';
  title: string; role: string; description: string; outcomes: string[];
  projectSlug?: string; externalUrl?: string; featured?: boolean; sample?: boolean;
};
export type Profile = {
  name: string; job: string; introduction: string; about?: string; tools: string[];
  email?: string; artstation?: string; github?: string; resume?: string;
  skills: { title: string; description: string }[];
};
