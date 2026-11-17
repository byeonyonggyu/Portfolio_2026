import { useRef } from 'react';
import { useLanguage } from './i18n';
import { assetUrl } from './lib/assetUrl';

export default function AwardPhoto({ src, title }: { src: string; title: string }) {
  const viewer = useRef<HTMLDialogElement>(null);
  const { language } = useLanguage();
  const english = language === 'en';
  return <>
    <button className="award-photo-button" onClick={() => viewer.current?.showModal()} aria-label={`${title} — ${english ? 'View full size' : '사진 크게 보기'}`}>
      <img src={assetUrl(src)} alt={title} width="1920" height="1280" loading="lazy" />
      <span>{english ? 'View full size ↗' : '크게 보기 ↗'}</span>
    </button>
    <dialog ref={viewer} className="gallery-dialog" aria-label={title} onClick={event => { if (event.target === event.currentTarget) viewer.current?.close(); }}>
      <div className="gallery-dialog-bar"><span>{title}</span><button autoFocus onClick={() => viewer.current?.close()}>{english ? 'Close ×' : '닫기 ×'}</button></div>
      <img src={assetUrl(src)} alt={title} width="1920" height="1280" />
    </dialog>
  </>;
}
