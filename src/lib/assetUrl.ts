// Public assets must follow the deployment base, including GitHub project Pages.
export function assetUrl(path?: string): string | undefined {
  if (!path || !path.startsWith('/') || path.startsWith('//')) return path;
  return `${import.meta.env.BASE_URL}${path.slice(1)}`;
}
