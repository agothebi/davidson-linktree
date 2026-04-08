import Image from "next/image";

import { LinkButton } from "@/components/LinkButton";
import { hubLinks } from "@/lib/links";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-4 pt-safe pb-40 sm:px-6">
        <header className="pb-6 pt-10 text-center">
          <Image
            src="/logo.png"
            alt="Wildcat Central"
            width={520}
            height={200}
            className="mx-auto max-w-[260px] h-auto"
            priority
          />
        </header>

        <ul className="flex flex-col gap-4">
          {hubLinks.map((link, i) => (
            <li
              key={link.id}
              className="animate-card-enter"
              style={{ animationDelay: `${i * 100}ms` }}
            >
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
