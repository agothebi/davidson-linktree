import { spawnSync } from "node:child_process";
import { createSerwistRoute } from "@serwist/turbopack";

function getRevision(): string {
  const vercelSha = process.env.VERCEL_GIT_COMMIT_SHA?.trim();
  if (vercelSha) return vercelSha;
  const git =
    spawnSync("git", ["rev-parse", "HEAD"], { encoding: "utf-8" }).stdout?.trim() ??
    "";
  if (git) return git;
  return crypto.randomUUID();
}

const revision = getRevision();

export const { dynamic, dynamicParams, revalidate, generateStaticParams, GET } =
  createSerwistRoute({
    additionalPrecacheEntries: [{ url: "/~offline", revision }],
    swSrc: "app/sw.ts",
    useNativeEsbuild: true,
  });
