/**
 * Canonical site URL for Open Graph / metadata resolution.
 * Set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://your-app.vercel.app).
 */
export function getMetadataBase(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    try {
      return new URL(explicit);
    } catch {
      /* fall through */
    }
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}
