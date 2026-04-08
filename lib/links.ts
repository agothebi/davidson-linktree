/**
 * =============================================================================
 * EDIT THIS FILE to change hub links (labels, URLs, icons, optional subtitles).
 * Icons must match keys in `iconMap` inside `components/LinkButton.tsx`.
 * =============================================================================
 */

import type { HubIconName } from "@/components/LinkButton";

export type HubLink = {
  id: string;
  label: string;
  href: string;
  subtitle?: string;
  icon?: HubIconName;
  /** Defaults to true — use false for flows that break in a new tab (e.g. some SSO). */
  openInNewTab?: boolean;
};

export const hubLinks: HubLink[] = [
  {
    id: "office-hours",
    label: "Office Hours",
    href: "https://example.com",
    subtitle: "Faculty office hours",
    icon: "Calendar",
  },
  {
    id: "vail-commons",
    label: "Vail Commons Menu",
    href: "https://example.com",
    subtitle: "Dining",
    icon: "UtensilsCrossed",
  },
  {
    id: "campus-map",
    label: "Campus Map",
    href: "https://example.com",
    icon: "MapPin",
  },
  {
    id: "library",
    label: "Library",
    href: "https://example.com",
    icon: "BookOpen",
  },
  {
    id: "shuttle",
    label: "Wildcat Shuttle",
    href: "https://example.com",
    icon: "Bus",
  },
  {
    id: "catalog",
    label: "Course Catalog",
    href: "https://example.com",
    icon: "GraduationCap",
  },
];
