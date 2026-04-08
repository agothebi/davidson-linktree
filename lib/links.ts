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
  /**
   * Best-effort hint to open in the system browser app (vs staying in the PWA
   * webview/task). Not guaranteed across all browsers/OS versions.
   */
  openInExternalBrowser?: boolean;
};

export const hubLinks: HubLink[] = [
  {
    id: "office-hours",
    label: "Office Hours Site",
    href: "https://officehours.site",
    // subtitle: "Faculty office hours",
    icon: "Calendar",
  },
  {
    id: "vail-commons",
    label: "Vail Commons Menu",
    href: "https://usa.jamix.cloud/menu/?anro=98579&k=2&mt=8",
    // subtitle: "Dining",
    icon: "UtensilsCrossed",
  },
  {
    id: "web-clock",
    label: "Web Clock",
    href: "https://fa-exci-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/faces/FndMobileOverview?fnd=%252FWEB-INF%252Foracle%252Fapps%252Fhcm%252Fwfm%252Fworkarea%252FpublicUiFuse%252FwebClock%252Fflow%252FFuseWebClockBaseFlow.xml%2523FuseWebClockBaseFlow%3BfndWarnChanges%253D%2523%257BProfile.values.HCM_SAVE_CHANGES_WARNING_ENABLED%2Beq%2B%2527Y%2527%257D%253BinvokedFrom%253DQA%253B%3B%3BWeb%2BClock%3Bfalse%3B256%3B%3B%3B&pageParams=fndDetailsMode%3Dtrue%3BreturnFndUrl%3Dhttps%3A%2F%2Ffa-exci-saasfaprod1.fa.ocs.oraclecloud.com%3A443%2FfscmUI%2Ffaces%2FFuseWelcome&returnFndUrl=https%3A%2F%2Ffa-exci-saasfaprod1.fa.ocs.oraclecloud.com%3A443%2FfscmUI%2Ffaces%2FFuseWelcome&fndDetailsMode=true",
    icon: "Clock",
  },
  {
    id: "webtree-notifier",
    label: "WebTree Alert",
    href: "https://coursenotifier.koyeb.app/",
    icon: "AlarmClock",
  },
  {
    id: "wildcat-market",
    label: "Wildcat Market (Beta)",
    href: "https://wildcat-market.vercel.app/",
    icon: "ShoppingBag",
    openInExternalBrowser: true,
  }
];
