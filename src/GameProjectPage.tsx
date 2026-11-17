import { useRef, useState, type KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './i18n';
import { assetUrl } from './lib/assetUrl';
import type { GameProject } from './types';

export default function GameProjectPage({ project }: { project: GameProject }) {
  const { language } = useLanguage();
  const english = language === 'en';
  const copy = project.copy[language];
  const [selected, setSelected] = useState(1);
  const viewer = useRef<HTMLDialogElement>(null);
  const thumbnails = useRef<(HTMLButtonElement | null)[]>([]);
  const shot = project.screenshots[selected];
  function move(index: number, focus = false) {
    const next = (index + project.screenshots.length) % project.screenshots.length;
    setSelected(next);
    if (focus) thumbnails.current[next]?.focus({ preventScroll: true });
  }
  function galleryKey(event: KeyboardEvent<HTMLDivElement>) {
    const next = event.key === 'ArrowRight' ? selected + 1 : event.key === 'ArrowLeft' ? selected - 1 : event.key === 'Home' ? 0 : event.key === 'End' ? project.screenshots.length - 1 : null;
    if (next === null) return;
    event.preventDefault();
    move(next, true);
  }
  return <article className="page-width page-section game-project">
    <Link className="text-link" to="/#projects">← {english ? 'All projects' : '프로젝트 목록'}</Link>
    <header className="game-title">
      <p className="eyebrow">{project.event} · {english ? 'GAME CATEGORY' : 'GAME 부문 참가'}</p>
      <h1>{copy.title}</h1>
      <p>{copy.tagline}</p>
    </header>
    <div className="game-store-layout">
      <section className="game-gallery" aria-label={english ? 'Game gallery' : '게임 이미지 갤러리'}>
        <figure className="gallery-frame">
          <button className="gallery-zoom" onClick={() => viewer.current?.showModal()} aria-label={english ? 'Enlarge selected image' : '선택한 이미지 크게 보기'}>
            <img src={assetUrl(shot.src)} alt={shot.caption[language]} width="1920" height="1080" fetchPriority="high" />
            <span>{english ? 'View full size ↗' : '크게 보기 ↗'}</span>
          </button>
          <figcaption aria-live="polite"><span>{String(selected + 1).padStart(2, '0')} / {String(project.screenshots.length).padStart(2, '0')}</span>{shot.caption[language]}</figcaption>
        </figure>
        <div className="gallery-thumbnails" onKeyDown={galleryKey} role="group" aria-label={english ? 'Select an image (arrow keys supported)' : '이미지 선택 (방향키 지원)'}>
          {project.screenshots.map((image, index) => <button key={image.src} ref={button => { thumbnails.current[index] = button; }} aria-pressed={selected === index} aria-label={`${index + 1}. ${image.caption[language]}`} onClick={() => setSelected(index)}>
            <img src={assetUrl(image.thumbnail)} alt="" width="400" height="225" loading="lazy" />
          </button>)}
        </div>
        <div className="gallery-controls"><button onClick={() => move(selected - 1)} aria-label={english ? 'Previous image' : '이전 이미지'}>←</button><span>{english ? 'Select a thumbnail to explore the game' : '썸네일을 선택해 게임 화면을 살펴보세요'}</span><button onClick={() => move(selected + 1)} aria-label={english ? 'Next image' : '다음 이미지'}>→</button></div>
      </section>
      <aside className="game-summary" aria-label={english ? 'Game information' : '게임 정보'}>
        <img className="game-capsule" src={assetUrl(project.screenshots[0].src)} alt={copy.title} width="1920" height="1080" loading="lazy" />
        <p className="game-summary-copy">{copy.summary}</p>
        <dl className="game-metadata">{copy.facts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
        <ul className="game-tags" aria-label={english ? 'Game themes' : '게임 키워드'}>{copy.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      </aside>
    </div>
    <div className="game-writeup">
      <section><h2>{english ? 'About the game' : '게임 소개'}</h2>{copy.about.map(block => <div className="game-text-block" key={block.title}><h3>{block.title}</h3><p>{block.description}</p></div>)}</section>
      <section><h2>{english ? 'My contribution' : '담당 작업'}</h2><ul className="contribution-list">{copy.responsibilities.map(item => <li key={item}>{item}</li>)}</ul></section>
      <section><h2>{english ? 'Problems & solutions' : '문제 해결'}</h2><div className="game-solutions">{copy.solutions.map((solution, index) => <div key={solution.title}><span className="solution-number">0{index + 1}</span><div><h3>{solution.title}</h3><p>{solution.description}</p></div></div>)}</div></section>
      <section><h2>{english ? 'Tools & workflow' : '사용 기술과 제작 방식'}</h2><dl className="game-tool-table">{copy.tools.map(tool => <div key={tool.title}><dt>{tool.title}</dt><dd>{tool.description}</dd></div>)}</dl></section>
      <section className="game-takeaway"><h2>{english ? 'What I learned' : '배운 점'}</h2><p>{copy.takeaway}</p></section>
    </div>
    <dialog ref={viewer} className="gallery-dialog" aria-label={english ? 'Full-size game image' : '게임 이미지 크게 보기'} onClick={event => { if (event.target === event.currentTarget) viewer.current?.close(); }}>
      <div className="gallery-dialog-bar"><span>{shot.caption[language]}</span><button autoFocus onClick={() => viewer.current?.close()}>{english ? 'Close ×' : '닫기 ×'}</button></div>
      <img src={assetUrl(shot.src)} alt={shot.caption[language]} width="1920" height="1080" />
    </dialog>
  </article>;
}
