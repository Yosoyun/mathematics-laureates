export function withBase(path: string): string {
  if (path.startsWith("http") || path.startsWith("#")) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}` || "/";
}
