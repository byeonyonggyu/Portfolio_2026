import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { activities as sourceActivities } from './data/activities';
import { projects as sourceProjects } from './data/projects';
import { profile as sourceProfile } from './data/profile';
import { activityEnglish, projectEnglish, profileEnglish } from './data/english';

type Language = 'ko' | 'en';
const english: Record<string, string> = {
  '홈': 'Home', '활동 기록': 'Activity', '작품': 'Works', '소개': 'About',
  '작품 보기 ↗': 'View work ↗', 'Language / 언어': 'Language',
  '프로젝트': 'Projects', '수상': 'Awards', '교육': 'Training', '학력': 'Education', '교내활동': 'Campus activities', '장학': 'Scholarships', '스터디': 'Study',
  '개인 포트폴리오': 'Personal portfolio', '활동 기록 보기': 'View activity', '작품 보기': 'View work',
  '전체 활동 보기 →': 'View all activity →', '대표 작품': 'Selected work', '모든 작품 보기': 'View all work',
  '프로젝트 보기': 'View projects', '수상 보기': 'View awards',
  '프로젝트, 협업 및 페스티벌 참가 기록입니다.': 'Game projects, collaborations, and festival participation.',
  '공모전 수상 이력을 모았습니다.': 'Awards received in competitions.',
  '상세 이력 보기': 'View activity details', '주요 활동': 'Featured', '진행 중': 'Present',
  'Unity 엔진 · Particle System으로 제작': 'Created in Unity with the Particle System',
  '주요 역량': 'Skills', '소개 및 연락처': 'About & contact', '이력서 보기 ↗': 'View résumé ↗', '연락처 준비 중': 'Contact information coming soon',
  '샘플 작품': 'Sample work', '샘플': 'Sample', '사용 도구': 'Tools', '담당 범위': 'Role', '제작 기간': 'Production dates',
  '영상 준비 중 · 콘텐츠 파일에서 추가해 주세요': 'Video coming soon · Add a video in the content data',
  '영상 주소를 확인해 주세요.': 'Please check the video URL.', '재생': 'Play', '영상 썸네일': 'Video thumbnail', '영상 장면': 'Video still', '영상 교체 위치': 'Video placeholder',
  '관련 링크': 'Related link', '작품 아카이브': 'Work archive', '완성된 장면과 그 안에 담긴 제작 과정을 살펴보세요.': 'Explore the final visuals and the process behind them.',
  '엔진': 'Engine', '이펙트 유형': 'Effect type', '전체': 'All', '스킬': 'Skill', '전투': 'Combat', '환경': 'Environment',
  '조건에 맞는 항목이 없습니다.': 'No matching items.', '다른 필터를 선택하거나 전체 항목을 확인해 주세요.': 'Try another filter or view all items.', '필터 초기화': 'Reset filters',
  '학력, 교육, 프로젝트, 교내활동, 수상, 장학과 행사 참가 이력을 최신순으로 기록합니다.': 'Education, training, projects, campus activities, awards, and scholarships, newest first.',
  '연도': 'Year', '활동 분류': 'Category', '최신순': 'Newest first',
  '← 작품 목록': '← All work', '기획 의도': 'Concept', '제작 과정 & 브레이크다운': 'Process & breakdown',
  '초안과 최종본': 'Draft & final', '초안 이미지 교체 위치': 'Draft image placeholder', '최종 이미지 교체 위치': 'Final image placeholder',
  'DRAFT / 초안': 'DRAFT', 'FINAL / 최종본': 'FINAL', '문제 해결': 'Problem solving', '성능 고려': 'Performance considerations',
  '에셋 출처 & 크레딧': 'Assets & credits', '다른 작품': 'More work', '← 이전 작품': '← Previous work', '다음 작품 →': 'Next work →',
  '이 장면은': 'This page', '아직 없습니다.': 'could not be found.', '주소를 확인하거나 작품 목록으로 돌아가 주세요.': 'Check the URL or return to the work archive.',
  '본문 바로가기': 'Skip to content', '포트폴리오 홈': 'Portfolio home', '주 메뉴': 'Main navigation', '맨 위로 ↑': 'Back to top ↑',
  '샘플로 표시된 활동은 구성 예시입니다.': 'Items marked Sample are illustrative examples.',
  '샘플로 표시된 작품은 구성 예시입니다.': 'Works marked Sample are illustrative examples.',
  '샘플로 표시된 활동은 입력 형식을 보여주는 예시입니다.': 'Activities marked Sample demonstrate the content format.',
};
type LanguageState = { language: Language; setLanguage: (language: Language) => void; t: (text: string) => string };
const LanguageContext = createContext<LanguageState | null>(null);
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try { return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'ko'; } catch { return 'ko'; }
  });
  useEffect(() => {
    document.documentElement.lang = language;
    document.querySelector('meta[name="description"]')?.setAttribute('content', language === 'en'
      ? 'Real-time VFX artist portfolio: selected work, projects, awards, and activity.'
      : '실시간 VFX 아티스트 포트폴리오. 대표 작품, 프로젝트, 수상과 활동 이력을 확인하세요.');
    try { localStorage.setItem('portfolio-language', language); } catch { /* Storage can be disabled. */ }
  }, [language]);
  const t = (text: string) => language === 'en' ? english[text] || text : text;
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('LanguageProvider is missing');
  return context;
}
export function useContent() {
  const { language } = useLanguage();
  const activities = sourceActivities.map(a => language === 'en' ? { ...a, ...activityEnglish[a.id] } : a);
  const projects = sourceProjects.map(p => language === 'en' ? { ...p, ...projectEnglish[p.id] } : p);
  const profile = language === 'en' ? { ...sourceProfile, ...profileEnglish } : sourceProfile;
  const sortedActivities = [...activities].sort((a, b) => (b.startDate || b.endDate || '').localeCompare(a.startDate || a.endDate || ''));
  return { activities, projects, profile, sortedActivities };
}
