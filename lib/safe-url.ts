/**
 * Returns a parsed URL only for http(s) schemes — blocks javascript:, data:, etc.
 */
export function parseSafeHttpUrl(href: string): URL | null {
  try {
    const u = new URL(href);
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    return u;
  } catch {
    return null;
  }
}
