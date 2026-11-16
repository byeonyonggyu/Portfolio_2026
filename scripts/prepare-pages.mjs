import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { projects } from '../src/data/projects.ts';

const output = new URL('../.pages-build/', import.meta.url);
const html = await readFile(new URL('index.html', output), 'utf8');
// Pages has no SPA rewrite. Generate an entry at each known route so direct
// visits and refreshes return HTTP 200 while keeping BrowserRouter URLs.
for (const route of ['works', 'timeline', ...projects.map(p => `works/${p.slug}`)]) {
  if (!/^[a-z0-9/-]+$/.test(route)) throw new Error(`Invalid route: ${route}`);
  const directory = new URL(`${route}/`, output);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL('index.html', directory), html);
}
// Unknown routes still load the app's 404 screen, with HTTP 404 on Pages.
await writeFile(new URL('404.html', output), html);
await writeFile(new URL('.nojekyll', output), '');
console.log('GitHub Pages route entries and 404 page generated.');
