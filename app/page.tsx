import { User } from "lucide-react";

import { LinkButton } from "@/components/LinkButton";
import { hubLinks } from "@/lib/links";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-stone-50">
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-4 pt-safe pb-40 sm:px-6">
        <header className="pb-8 pt-10 text-center">
          <div
            className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-white shadow-clay"
            aria-hidden
          >
            <User className="size-9 text-stone-500" strokeWidth={1.75} />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-stone-900">
            {site.title}
          </h1>
          <p className="mx-auto mt-2 max-w-xs text-sm font-medium leading-relaxed text-muted">
            {site.subtitle}
          </p>
        </header>

        <ul className="flex flex-col gap-3">
          {hubLinks.map((link, i) => (
            <li key={link.id}>
              <LinkButton
                label={link.label}
                href={link.href}
                subtitle={link.subtitle}
                icon={link.icon}
                openInNewTab={link.openInNewTab}
                accentIndex={i}
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
