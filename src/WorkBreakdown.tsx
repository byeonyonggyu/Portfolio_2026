import { useRef, useState } from 'react';
import { assetUrl } from './lib/assetUrl';
import { useLanguage } from './i18n';
import type { Project } from './types';

export default function WorkBreakdown({ steps, title }: { steps: Project['breakdown']; title?: string }) {
  const { language, t } = useLanguage();
  const dialog = useRef<HTMLDialogElement>(null);
  const [expanded, setExpanded] = useState<Project['breakdown'][number] | null>(null);
  function open(step: Project['breakdown'][number]) {
    setExpanded(step);
    dialog.current?.showModal();
  }
  return <section className="detail-section work-breakdown">
    <h2>{title || t('제작 과정 & 브레이크다운')}</h2>
    <div className="work-breakdown-grid">{steps.map((step, index) => <article className={`breakdown-step ${step.kind || 'default'}`} key={step.title}>
      <div className="breakdown-step-heading"><span>{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3></div>
      {step.image && <button className="breakdown-image" onClick={() => open(step)} aria-label={`${step.title} — ${language === 'en' ? 'View full size' : '이미지 크게 보기'}`}>
        <img src={assetUrl(step.image)} alt={step.title} width={step.width || (step.kind === 'texture' ? 512 : 1912)} height={step.height || (step.kind === 'texture' ? 512 : 1005)} loading="lazy" />
        <span>{language === 'en' ? 'View full size ↗' : '크게 보기 ↗'}</span>
      </button>}
      <p>{step.description}</p>
      {step.notes?.length ? <ul>{step.notes.map(note => <li key={note}>{note}</li>)}</ul> : null}
    </article>)}</div>
    <dialog ref={dialog} className="gallery-dialog shader-dialog" aria-label={language === 'en' ? 'Breakdown image viewer' : '브레이크다운 이미지 확대'} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="gallery-dialog-bar"><span>{expanded?.title}</span><button autoFocus onClick={() => dialog.current?.close()}>{language === 'en' ? 'Close ×' : '닫기 ×'}</button></div>
      <div className="shader-image-scroll" tabIndex={0} aria-label={language === 'en' ? 'Full-resolution image, scroll to inspect' : '원본 크기 이미지, 스크롤해서 살펴보기'}>{expanded?.image && <img src={assetUrl(expanded.image)} alt={expanded.title} width={expanded.width || (expanded.kind === 'texture' ? 512 : 1912)} height={expanded.height || (expanded.kind === 'texture' ? 512 : 1005)} />}</div>
    </dialog>
  </section>;
}
