import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { profile } from './data/profile';
import { projects } from './data/projects';
import { activities } from './data/activities';
import { toolLogos } from './data/tools';
import type { Activity, Media, Project } from './types';

const date = (value: string) => value.replaceAll('-', '.');
const period = (start?: string, end?: string) => start ? `${date(start)} — ${end ? date(end) : '진행 중'}` : end ? `~ ${date(end)}` : '';
const sortedActivities = [...activities].sort((a, b) => (b.startDate || b.endDate || '').localeCompare(a.startDate || a.endDate || ''));
function External({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer">{children} ↗</a>;
}
function Placeholder({ label, index = '01', className = '' }: { label: string; index?: string; className?: string }) {
  return <div className={`placeholder ${className}`} role="img" aria-label={label}><span className="placeholder-top">VFX / MEDIA PLACEHOLDER</span><span className="placeholder-number" aria-hidden="true">{index}</span><span className="placeholder-bottom"><span className="cross" aria-hidden="true">＋</span>{label}<span aria-hidden="true">↗</span></span></div>;
}
function Picture({ src, label, index }: { src?: string; label: string; index?: string }) {
  return src ? <img className="media-image" src={src} alt={label} width="1600" height="900" loading="lazy" /> : <Placeholder label={label} index={index} />;
}
function embedUrl(media: Media): string | undefined {
  try {
    const url = new URL(media.src);
    if (media.kind === 'youtube') {
      const id = url.hostname === 'youtu.be' ? url.pathname.slice(1) : url.searchParams.get('v') || url.pathname.split('/').pop();
      if (id && /^[\w-]{11}$/.test(id)) return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
    }
    if (media.kind === 'vimeo') {
      const id = url.pathname.split('/').filter(Boolean).pop();
      if (id && /^\d+$/.test(id)) return `https://player.vimeo.com/video/${id}?autoplay=1`;
    }
  } catch { /* Invalid URLs fall back to an informative message. */ }
}
function Player({ media, title, poster }: { media?: Media; title: string; poster?: string }) {
  const [playing, setPlaying] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => { if (playing) (frameRef.current || videoRef.current)?.focus(); }, [playing]);
  const embed = media ? embedUrl(media) : undefined;
  if (!media) return <div className="player"><Picture src={poster} label={`${title} 영상 교체 위치`} /><span className="media-note">영상 준비 중 · 콘텐츠 파일에서 추가해 주세요</span></div>;
  return <div className="player">{playing ? media.kind === 'file' ? <video ref={videoRef} tabIndex={0} src={media.src} poster={media.poster || poster} controls autoPlay playsInline preload="metadata" aria-label={title} /> : embed ? <iframe ref={frameRef} src={embed} title={media.label || title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <p className="video-error">영상 주소를 확인해 주세요.</p> : <><Picture src={media.poster || poster} label={`${title} 영상 썸네일`} /><button className="play-overlay" onClick={() => setPlaying(true)}><span aria-hidden="true">▶</span><span>{title} 재생</span></button></>}</div>;
}
function SectionHeading({ number, title, subtitle, href, link }: { number: string; title: string; subtitle: string; href?: string; link?: string }) {
  return <div className="section-heading"><div>{(number || subtitle) && <p className="eyebrow">{number}{number && subtitle && " / "}{subtitle}</p>}<h2>{title}</h2></div>{href && <Link className="text-link" to={href}>{link} <span>↗</span></Link>}</div>;
}
function ProjectCard({ project }: { project: Project }) {
  return <Link className="project-card group" to={`/works/${project.slug}`}><div className="card-media"><Picture src={project.thumbnail} label={`${project.title} 영상 장면`} index={project.id} /><span className="card-arrow" aria-hidden="true">↗</span>{project.sample && <span className="sample-badge">샘플 작품</span>}</div><div className="card-heading"><h3>{project.title}</h3><span className="small muted">{project.engine}</span></div><p>{project.summary}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></Link>;
}
function ActivityList({ items }: { items: Activity[] }) {
  return <ol className="timeline-list">{items.map(item => <li className={item.featured ? 'featured' : ''} key={item.id}><div className="timeline-date"><span>{period(item.startDate, item.endDate)}</span>{item.featured && <span className="highlight-label">주요 활동</span>}</div><div className="timeline-body"><p className="eyebrow">{item.category}{item.sample && ' / 샘플'}</p><h3>{item.title}</h3>{item.role && <p className="role">{item.role}</p>}{item.description && <p>{item.description}</p>}{item.outcomes.length > 0 && <ul className="outcomes">{item.outcomes.map(outcome => <li key={outcome}>{outcome}</li>)}</ul>}<div className="activity-links">{item.projectSlug && projects.some(p => p.slug === item.projectSlug) && <Link className="text-link" to={`/works/${item.projectSlug}`}>작품 보기 ↗</Link>}{item.externalUrl && <External href={item.externalUrl}>관련 링크</External>}</div></div></li>)}</ol>;
}
function ToolList({ tools }: { tools: string[] }) {
  return <ul className="tool-list" aria-label="사용 도구">{tools.map(tool => <li key={tool}>{toolLogos[tool] && <img src={toolLogos[tool].src} className={toolLogos[tool].wide ? 'wide-logo' : ''} width={toolLogos[tool].wide ? 100 : 24} height="24" alt="" />}<span>{tool}</span></li>)}</ul>;
}
function CompactActivities() {
  return <ol className="compact-activities">{sortedActivities.map(item => <li key={item.id}><time>{period(item.startDate, item.endDate)}</time><span className="compact-category">{item.category}</span><span className="compact-title">{item.title}{item.outcomes.length > 0 && <span className="compact-outcome"> · {item.outcomes.join(' · ')}</span>}{item.role && <span className="compact-role"> · {item.role}</span>}</span></li>)}</ol>;
}
function Home() {
  return <>
    <header className="hero page-width">
      <p className="eyebrow">개인 포트폴리오</p>
      <h1>{profile.name}</h1>
      <p className="job-title">{profile.job}</p>
      <p className="hero-intro">{profile.introduction}</p>
      <div className="hero-actions"><Link className="button primary" to="/timeline">활동 기록 보기</Link><Link className="button secondary" to="/works">작품 보기</Link></div>
    </header>
    <section className="section page-width" aria-labelledby="activities-heading">
      <div className="section-heading"><h2 id="activities-heading">활동 기록</h2><Link className="text-link" to="/timeline">전체 활동 보기 →</Link></div>
      {activities.some(a => a.sample) && <p className="sample-notice">샘플로 표시된 활동은 구성 예시입니다.</p>}
      <CompactActivities />
    </section>
    <section className="section page-width featured-works">
      <SectionHeading number="" title="대표 작품" subtitle="" href="/works" link="모든 작품 보기" />
      {projects.some(p => p.sample) && <p className="sample-notice">샘플로 표시된 작품은 구성 예시입니다.</p>}
      <p className="production-note">Unity 엔진 · Particle System으로 제작</p><ToolList tools={profile.tools} />
      <div className="project-grid">{projects.filter(p => p.featured).slice(0, 5).map(project => <ProjectCard key={project.id} project={project} />)}</div>
    </section>
    {profile.skills.length > 0 && <section className="section page-width"><h2>주요 역량</h2><div className="skills-grid">{profile.skills.map(skill => <article key={skill.title}><h3>{skill.title}</h3><p>{skill.description}</p></article>)}</div>{profile.tools.length > 0 && <ToolList tools={profile.tools} />}</section>}
    <section id="about" className="section page-width"><h2>소개 및 연락처</h2>{profile.about && <p>{profile.about}</p>}<div className="contact-links">{profile.email && <a href={`mailto:${profile.email}`}>{profile.email}</a>}{profile.resume && <a href={profile.resume} target="_blank" rel="noopener noreferrer">이력서 보기 ↗</a>}{profile.artstation && <External href={profile.artstation}>ArtStation</External>}{profile.github && <External href={profile.github}>GitHub</External>}</div>{!profile.email && <p className="muted">연락처 준비 중</p>}</section>
  </>;
}
function Works() {
  const [engine, setEngine] = useState('전체'); const [type, setType] = useState('전체');
  const filtered = projects.filter(p => (engine === '전체' || p.engine === engine) && (type === '전체' || p.effectType === type));
  return <div className="page-width page-section"><PageTitle eyebrow="THE WORK / SELECTED PROJECTS" title="작품 아카이브" description="완성된 장면과 그 안에 담긴 제작 과정을 살펴보세요." /><div className="filters"><Filter label="엔진" value={engine} onChange={setEngine} options={[...new Set(projects.map(p => p.engine))]} /><Filter label="이펙트 유형" value={type} onChange={setType} options={[...new Set(projects.map(p => p.effectType))]} /><p className="result-count" role="status">{filtered.length}개 작품</p></div>{projects.some(p => p.sample) && <p className="sample-notice">샘플로 표시된 작품은 구성 예시입니다.</p>}{filtered.length ? <div className="project-grid">{filtered.map(project => <ProjectCard key={project.id} project={project} />)}</div> : <Empty onReset={() => { setEngine('전체'); setType('전체'); }} />}</div>;
}
function PageTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <header className="page-title"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p></header>;
}
function Filter({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return <label className="filter-label">{label}<select value={value} onChange={event => onChange(event.target.value)}><option value="전체">전체</option>{options.map(option => <option key={option}>{option}</option>)}</select></label>;
}
function Empty({ onReset }: { onReset: () => void }) { return <div className="empty"><h2>조건에 맞는 항목이 없습니다.</h2><p>다른 필터를 선택하거나 전체 항목을 확인해 주세요.</p><button className="button secondary" onClick={onReset}>필터 초기화</button></div>; }
function Timeline() {
  const [year, setYear] = useState('전체'); const [category, setCategory] = useState('전체');
  const years = [...new Set(activities.flatMap(a => { const start = Number((a.startDate || a.endDate || '').slice(0, 4)); const end = a.endDate ? Number(a.endDate.slice(0, 4)) : new Date().getFullYear(); return Array.from({ length: Math.max(1, end - start + 1) }, (_, i) => String(start + i)); }))].sort().reverse();
  const filtered = sortedActivities.filter(a => (category === '전체' || a.category === category) && (year === '전체' || ((a.startDate || a.endDate || '').slice(0, 4) <= year && (!a.endDate || a.endDate.slice(0, 4) >= year))));
  return <div className="page-width page-section timeline-page"><PageTitle eyebrow="THE PROCESS / ACTIVITY LOG" title="활동 기록" description="학력, 교육, 프로젝트, 교내활동, 수상, 장학과 행사 참가 이력을 최신순으로 기록합니다." /><div className="filters"><Filter label="연도" value={year} onChange={setYear} options={years} /><Filter label="활동 분류" value={category} onChange={setCategory} options={[...new Set(activities.map(a => a.category))]} /><p className="result-count" role="status">{filtered.length}개 활동 · 최신순</p></div>{activities.some(a => a.sample) && <p className="sample-notice">샘플로 표시된 활동은 입력 형식을 보여주는 예시입니다.</p>}{filtered.length ? <ActivityList items={filtered} /> : <Empty onReset={() => { setYear('전체'); setCategory('전체'); }} />}</div>;
}
function WorkDetail() {
  const { slug } = useParams(); const index = projects.findIndex(p => p.slug === slug); const project = projects[index];
  if (!project) return <NotFound />;
  return <article className="page-width page-section detail"><Link className="text-link" to="/works">← 작품 목록</Link><div className="detail-title"><p className="eyebrow">PROJECT {project.id} / {project.engine}{project.sample && ' / 샘플 작품'}</p><h1>{project.title}</h1><p>{project.summary}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><Player key={project.slug} media={project.video} title={project.title} poster={project.thumbnail} /><dl className="project-facts">{project.dates && <div><dt>제작 기간</dt><dd>{period(project.dates.start, project.dates.end)}</dd></div>}{project.tools.length > 0 && <div><dt>사용 도구</dt><dd><ToolList tools={project.tools} /></dd></div>}{project.role && <div><dt>담당 범위</dt><dd>{project.role}</dd></div>}</dl>{project.intent && <section className="detail-section"><h2>기획 의도</h2><p>{project.intent}</p></section>}{project.breakdown.length > 0 && <section className="detail-section"><h2>제작 과정 & 브레이크다운</h2><div className="breakdown-grid">{project.breakdown.map((step, i) => <div key={step.title}><Picture src={step.image} label={`${step.title} 이미지 교체 위치`} index={`0${i + 1}`} /><h3>{step.title}</h3><p>{step.description}</p></div>)}</div></section>}{project.comparison && <section className="detail-section"><h2>초안과 최종본</h2><div className="comparison"><div><Picture src={project.comparison.draft} label="초안 이미지 교체 위치" /><span>DRAFT / 초안</span></div><div><Picture src={project.comparison.final} label="최종 이미지 교체 위치" /><span>FINAL / 최종본</span></div></div><p>{project.comparison.description}</p></section>}{project.challenges?.length ? <section className="detail-section"><h2>문제 해결</h2><ul className="prose-list">{project.challenges.map(text => <li key={text}>{text}</li>)}</ul></section> : null}{project.performance?.length ? <section className="detail-section"><h2>성능 고려</h2><ul className="prose-list">{project.performance.map(text => <li key={text}>{text}</li>)}</ul></section> : null}{project.credits.length > 0 && <section className="detail-section"><h2>에셋 출처 & 크레딧</h2><ul className="prose-list">{project.credits.map(credit => <li key={credit.label}>{credit.url ? <External href={credit.url}>{credit.label}</External> : credit.label}</li>)}</ul></section>}<nav className="project-pagination" aria-label="다른 작품"><div>{projects[index - 1] && <Link to={`/works/${projects[index - 1].slug}`}><small>← 이전 작품</small><span>{projects[index - 1].title}</span></Link>}</div><div>{projects[index + 1] && <Link to={`/works/${projects[index + 1].slug}`}><small>다음 작품 →</small><span>{projects[index + 1].title}</span></Link>}</div></nav></article>;
}
function NotFound() { return <section className="page-width not-found"><p className="eyebrow">404 / OUT OF FRAME</p><h1>이 장면은<br />아직 없습니다.</h1><p>주소를 확인하거나 작품 목록으로 돌아가 주세요.</p><Link className="button primary" to="/works">작품 보기 ↗</Link></section>; }
function RouteEffects() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => { if (hash === '#about') { document.getElementById('about')?.scrollIntoView(); return; } window.scrollTo(0, 0); const p = projects.find(p => pathname === `/works/${p.slug}`); document.title = `${p?.title || (pathname === '/works' ? '작품 아카이브' : pathname === '/timeline' ? '활동 기록' : 'Portfolio')} — ${profile.name} | VFX Artist`; document.getElementById('main')?.focus({ preventScroll: true }); }, [pathname, hash, key]);
  return null;
}
export default function App() {
  return <><a className="skip-link" href="#main">본문 바로가기</a><RouteEffects /><header className="site-header"><div className="page-width header-inner"><Link className="brand" to="/" aria-label="포트폴리오 홈"><span>{profile.name}<small>VFX ARTIST</small></span></Link><nav aria-label="주 메뉴"><NavLink to="/" end>홈</NavLink><NavLink to="/timeline">활동 기록</NavLink><NavLink to="/works">작품</NavLink><Link className="nav-contact" to="/#about">소개 <span>↗</span></Link></nav></div></header><main id="main" tabIndex={-1}><Routes><Route path="/" element={<Home />} /><Route path="/works" element={<Works />} /><Route path="/works/:slug" element={<WorkDetail />} /><Route path="/timeline" element={<Timeline />} /><Route path="*" element={<NotFound />} /></Routes></main><footer className="site-footer page-width"><span>© {new Date().getFullYear()} {profile.name}. Real-time VFX Portfolio.</span><a href="#top" onClick={event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); document.querySelector<HTMLAnchorElement>('.brand')?.focus({ preventScroll: true }); }}>맨 위로 ↑</a></footer></>;
}
