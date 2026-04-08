import {
  AlarmClock,
  Clock,
  BookOpen,
  Bus,
  Calendar,
  GraduationCap,
  MapPin,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

import { parseSafeHttpUrl } from "@/lib/safe-url";

const iconMap = {
  Clock,
  AlarmClock,
  Calendar,
  UtensilsCrossed,
  MapPin,
  BookOpen,
  Bus,
  GraduationCap,
} as const satisfies Record<string, LucideIcon>;

export type HubIconName = keyof typeof iconMap;

const surfaceAccents = [
  "bg-[#FFE4E1]",
  "bg-[#E0F2FE]",
  "bg-[#D1FAE5]",
  "bg-[#FEF3C7]",
] as const;

type LinkButtonProps = {
  label: string;
  href: string;
  subtitle?: string;
  icon?: HubIconName;
  openInNewTab?: boolean;
  /** Picks a pastel surface color (cycles if out of range). */
  accentIndex?: number;
};

export function LinkButton({
  label,
  href,
  subtitle,
  icon,
  openInNewTab = true,
  accentIndex = 0,
}: LinkButtonProps) {
  const Icon = icon ? iconMap[icon] : null;
  const safeUrl = parseSafeHttpUrl(href);

  if (process.env.NODE_ENV === "development" && !safeUrl) {
    console.warn(
      "[Davidson Hub] Invalid or unsafe href — use http(s) in lib/links.ts:",
      href,
    );
  }

  const rel = openInNewTab ? "noopener noreferrer" : undefined;
  const target = openInNewTab ? "_blank" : undefined;

  const surface =
    surfaceAccents[
      ((accentIndex % surfaceAccents.length) + surfaceAccents.length) %
        surfaceAccents.length
    ];

  const shellClass = `flex min-h-14 w-full items-center gap-3 rounded-[36px] border-2 border-white/80 px-5 py-4 text-left text-foreground shadow-clay ${surface}`;

  if (!safeUrl) {
    return (
      <span
        className={`${shellClass} cursor-not-allowed opacity-90`}
        role="group"
        aria-label={`${label}, link unavailable — use a valid http or https URL in lib/links.ts`}
        title="Invalid link: use an http(s) URL in lib/links.ts"
      >
        {Icon ? (
          <span
            className="flex size-11 shrink-0 items-center justify-center rounded-[20px] border-2 border-white/80 bg-white/60 text-accent shadow-clay-sm"
            aria-hidden
          >
            <Icon className="size-5" strokeWidth={2.25} />
          </span>
        ) : null}
        <span className="min-w-0 flex-1">
          <span className="block font-heading font-bold leading-tight">
            {label}
          </span>
          {subtitle ? (
            <span className="mt-0.5 block text-sm font-medium opacity-80">
              {subtitle}
            </span>
          ) : null}
          <span className="mt-1 block text-xs font-semibold opacity-90">
            This link is unavailable.
          </span>
        </span>
      </span>
    );
  }

  return (
    <a
      href={safeUrl.href}
      target={target}
      rel={rel}
      className={`${shellClass} transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-clay-hover active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
    >
      {Icon ? (
        <span
          className="flex size-11 shrink-0 items-center justify-center rounded-[20px] border-2 border-white/80 bg-white/60 text-accent shadow-clay-sm"
          aria-hidden
        >
          <Icon className="size-5" strokeWidth={2.25} />
        </span>
      ) : null}
      <span className="min-w-0 flex-1">
        <span className="block font-heading font-bold leading-tight">
          {label}
        </span>
        {subtitle ? (
          <span className="mt-0.5 block text-sm font-medium opacity-80">
            {subtitle}
          </span>
        ) : null}
      </span>
    </a>
  );
}
