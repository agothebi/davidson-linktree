"use client";

import { X } from "lucide-react";
import { startTransition, useEffect, useState } from "react";

const STORAGE_KEY = "hasSeenIOSPrompt";

function isIOS(): boolean {
  const g = globalThis as { navigator?: { userAgent?: string } };
  const ua = g.navigator?.userAgent ?? "";
  return /iPad|iPhone|iPod/.test(ua);
}

function isStandalone(): boolean {
  const g = globalThis as {
    matchMedia?: (query: string) => { matches: boolean };
    navigator?: { standalone?: boolean };
  };
  if (g.matchMedia?.("(display-mode: standalone)")?.matches) return true;
  return g.navigator?.standalone === true;
}

export function IOSInstallPrompt() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const g = globalThis as {
      localStorage?: { getItem: (key: string) => string | null };
    };
    if (!g.localStorage?.getItem) return;
    if (!isIOS()) return;
    if (isStandalone()) return;
    try {
      if (g.localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }
    startTransition(() => {
      setVisible(true);
    });
  }, []);

  function dismiss() {
    const g = globalThis as {
      localStorage?: { setItem: (key: string, value: string) => void };
    };
    try {
      g.localStorage?.setItem(STORAGE_KEY, "true");
    } catch {
      /* private mode or disabled storage */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Install this app on your home screen"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/60 bg-[#FFF0EE]/95 px-4 pt-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm supports-[backdrop-filter]:bg-[#FFF0EE]/85 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))]"
    >
      <div className="animate-banner-pop mx-auto flex max-w-md items-start gap-3 rounded-[28px] border-2 border-white/80 bg-white/90 px-4 py-3 shadow-clay-sm">
        <p className="min-w-0 flex-1 text-sm font-semibold leading-snug text-foreground">
          Get the app: tap{" "}
          <span className="whitespace-nowrap font-heading font-extrabold">Share Icon</span>, then{" "}
          <span className="whitespace-nowrap font-heading font-extrabold">
            Add to Home Screen
          </span>
          .
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="flex size-9 shrink-0 items-center justify-center rounded-[16px] border-2 border-white/80 bg-[#FFF0EE] text-muted shadow-clay-sm transition-colors duration-150 hover:bg-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label="Dismiss install instructions"
        >
          <X className="size-4" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
