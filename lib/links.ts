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
    href: "https://officehours.site",
    subtitle: "Faculty office hours",
    icon: "Calendar",
  },
  {
    id: "vail-commons",
    label: "Vail Commons Menu",
    href: "https://usa.jamix.cloud/menu/?anro=98579&k=2&mt=8",
    subtitle: "Dining",
    icon: "UtensilsCrossed",
  },
  {
    id: "webtree-notifier",
    label: "WebTree Alert",
    href: "https://coursenotifier.koyeb.app/",
    icon: "AlarmClock",
  },
  {
    id: "library",
    label: "Library",
    href: "https://example.com",
    icon: "BookOpen",
  },
  {
    id: "catalog",
    label: "Course Catalog",
    href: "https://example.com",
    icon: "GraduationCap",
  },
  {
    id: "web-clock",
    label: "Web Clock",
    href: "https://fa-exci-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/faces/FndOverview?fndGlobalItemNodeId=HWM_HCMWFMWORKAREA_FUSE_WEBCLOCK",
    icon: "Clock",
  }
];
