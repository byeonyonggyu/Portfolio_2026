import { assetUrl } from './lib/assetUrl';
import { useId } from 'react';
import type { GameProject } from './types';

export default function ProjectImage({ image, alt, className = '', thumbnail = false, eager = false }: {
  image: GameProject['screenshots'][number]; alt: string; className?: string; thumbnail?: boolean; eager?: boolean;
}) {
  const crop = image.crop;
  const clipId = useId();
  // Keep the original photograph intact; the SVG viewport controls its visible framing.
  if (crop) return <svg className={`project-photo ${className}`} viewBox={`${crop.x} ${crop.y} ${crop.width} ${crop.height}`} role="img" aria-label={alt} overflow="hidden">
    <defs><clipPath id={clipId}><rect x={crop.x} y={crop.y} width={crop.width} height={crop.height} /></clipPath></defs>
    <image clipPath={`url(#${clipId})`} href={assetUrl(image.src)} x="0" y="0" width={crop.originalWidth} height={crop.originalHeight} />
  </svg>;
  return <img className={className} src={assetUrl(thumbnail ? image.thumbnail : image.src)} alt={alt} width="1920" height="1080" loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} />;
}
