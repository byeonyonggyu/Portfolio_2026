import { useRef, useState, type KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './i18n';
import type { GameProject } from './types';
import ProjectImage from './ProjectImage';
import WorkBreakdown from './WorkBreakdown';

export default function GameProjectPage({ project }: { project: GameProject }) {
  const { language } = useLanguage();
  const english = language === 'en';
  const presentation = project.kind === 'presentation';
  const copy = project.copy[language];
  const [selected, setSelected] = useState(project.initialImage ?? Math.min(1, project.screenshots.length - 1));
  const viewer = useRef<HTMLDialogElement>(null);
  const thumbnails = useRef<(HTMLButtonElement | null)[]>([]);
  const shot = project.screenshots[selected];
  function move(index: number, focus = false) {
    const next = (index + project.screenshots.length) % project.screenshots.length;
    setSelected(next);
    if (focus) {
      thumbnails.current[next]?.focus({ preventScroll: true });
      thumbnails.current[next]?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  }
  function galleryKey(event: KeyboardEvent<HTMLDivElement>) {
    const next = event.key === 'ArrowRight' ? selected + 1 : event.key === 'ArrowLeft' ? selected - 1 : event.key === 'Home' ? 0 : event.key === 'End' ? project.screenshots.length - 1 : null;
    if (next === null) return;
    event.preventDefault();
    move(next, true);
  }
  return <article className={`page-width page-section game-project${project.layout === 'case-study' ? ' case-study-project' : ''}${presentation ? ' presentation-project' : ''}`}>
    <Link className="text-link" to="/#projects">← {english ? 'All projects' : '프로젝트 목록'}</Link>
    <header className="game-title">
      <p className="eyebrow">{project.event} · {project.context?.[language] || (english ? 'GAME CATEGORY' : 'GAME 부문 참가')}</p>
      <h1>{copy.title}</h1>
      <p>{copy.tagline}</p>
    </header>
    <div className="game-store-layout">
      <section className="game-gallery" aria-label={english ? 'Project gallery' : '프로젝트 이미지 갤러리'}>
        <figure className="gallery-frame">
          <button className="gallery-zoom" onClick={() => viewer.current?.showModal()} aria-label={english ? 'Enlarge selected image' : '선택한 이미지 크게 보기'}>
            <ProjectImage image={shot} alt={shot.caption[language]} eager />
            <span>{english ? 'View full size ↗' : '크게 보기 ↗'}</span>
          </button>
          <figcaption aria-live="polite"><span>{String(selected + 1).padStart(2, '0')} / {String(project.screenshots.length).padStart(2, '0')}</span>{shot.caption[language]}</figcaption>
        </figure>
        <div className={`gallery-thumbnails${project.screenshots.length > 5 ? ' many' : ''}`} onKeyDown={galleryKey} role="group" aria-label={english ? 'Select an image (arrow keys supported)' : '이미지 선택 (방향키 지원)'}>
          {project.screenshots.map((image, index) => <button key={image.src} ref={button => { thumbnails.current[index] = button; }} aria-pressed={selected === index} aria-label={`${index + 1}. ${image.caption[language]}`} onClick={() => setSelected(index)}>
            <ProjectImage image={image} alt={image.caption[language]} thumbnail />
          </button>)}
        </div>
        <div className="gallery-controls"><button onClick={() => move(selected - 1)} aria-label={english ? 'Previous image' : '이전 이미지'}>←</button><span>{english ? 'Select a thumbnail to explore the project' : '썸네일을 선택해 프로젝트를 살펴보세요'}</span><button onClick={() => move(selected + 1)} aria-label={english ? 'Next image' : '다음 이미지'}>→</button></div>
      </section>
      <aside className="game-summary" aria-label={english ? 'Project information' : '프로젝트 정보'}>
        <ProjectImage className="game-capsule" image={project.screenshots[0]} alt={copy.title} />
        <p className="game-summary-copy">{copy.summary}</p>
        <dl className="game-metadata">{copy.facts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
        <ul className="game-tags" aria-label={english ? 'Project themes' : '프로젝트 키워드'}>{copy.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      </aside>
    </div>
    <div className="game-writeup">
      <section><h2>{presentation || project.layout === 'case-study' ? (english ? 'About the project' : '프로젝트 소개') : (english ? 'About the game' : '게임 소개')}</h2>{copy.about.map(block => <div className="game-text-block" key={block.title}><h3>{block.title}</h3><p>{block.description}</p></div>)}</section>
      <section><h2>{english ? 'My contribution' : '담당 작업'}</h2><ul className="contribution-list">{copy.responsibilities.map(item => <li key={item}>{item}</li>)}</ul></section>
      {copy.solutions.length > 0 && <section><h2>{english ? 'Problems & solutions' : '문제 해결'}</h2><div className="game-solutions">{copy.solutions.map((solution, index) => <div key={solution.title}><span className="solution-number">0{index + 1}</span><div><h3>{solution.title}</h3><p>{solution.description}</p></div></div>)}</div></section>}
      {copy.tools.length > 0 && <section><h2>{english ? 'Tools & workflow' : '사용 기술과 제작 방식'}</h2><dl className="game-tool-table">{copy.tools.map(tool => <div key={tool.title}><dt>{tool.title}</dt><dd>{tool.description}</dd></div>)}</dl></section>}
      {copy.takeaway && <section className="game-takeaway"><h2>{english ? 'What I learned' : '배운 점'}</h2><p>{copy.takeaway}</p></section>}
    </div>
    {project.breakdown && <WorkBreakdown steps={project.breakdown[language]} title={presentation ? (english ? 'Production & presentation' : '제작 과정 & 발표 기록') : undefined} />}
    <dialog ref={viewer} className="gallery-dialog" aria-label={english ? 'Full-size project image' : '프로젝트 이미지 크게 보기'} onClick={event => { if (event.target === event.currentTarget) viewer.current?.close(); }}>
      <div className="gallery-dialog-bar"><span>{shot.caption[language]}</span><button autoFocus onClick={() => viewer.current?.close()}>{english ? 'Close ×' : '닫기 ×'}</button></div>
      <ProjectImage image={shot} alt={shot.caption[language]} />
    </dialog>
  </article>;
}
