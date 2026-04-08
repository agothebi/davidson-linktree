/** Site copy for the hub header. Edit here or inline in `app/page.tsx` if you prefer. */
export const site = {
  title: "Davidson Central",
  subtitle: "Quick links for campus — add this app to your home screen.",
} as const;

/** Used in PWA manifest and layout metadata — keep in sync with `site.title`. */
export const appBranding = {
  name: "Wildcat Central",
  shortName: "Wildcat Central",
  description:
    "A mobile-friendly link hub for Davidson College students — dining, maps, and more.",
} as const;
