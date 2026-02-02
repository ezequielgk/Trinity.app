import type { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";

import { Octokit } from "@octokit/rest";
import fs from "node:fs";
import { join } from "node:path";
import { defineLoader } from "vitepress";

import { CACHE_DIR } from ".";

const isDev = process.env.NODE_ENV === "development";

const CACHE_PATH = join(CACHE_DIR, "release.data.json");

const octokit = new Octokit();

type GitHubRelease = GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.getLatestRelease>;

export interface AppRelease {
  stable: GitHubRelease;
  nightly: GitHubRelease;
}

declare const data: AppRelease;
export { data };

export default defineLoader({
  async load(): Promise<AppRelease> {
    if (fs.existsSync(CACHE_PATH)) {
      return JSON.parse(fs.readFileSync(CACHE_PATH, "utf-8"));
    }

    try {
      const [stable, nightly] = await Promise.all([
        octokit.repos.getLatestRelease({ owner: "TrinityLauncherApp", repo: "TrinityLauncher" }),
        octokit.repos.getLatestRelease({ owner: "TrinityLauncherApp", repo: "TrinityLauncher-nightly" }),
      ]);

      const releaseData = { stable: stable.data, nightly: nightly.data };
      if (isDev) {
        fs.mkdirSync(CACHE_DIR, { recursive: true });
        fs.writeFileSync(CACHE_PATH, JSON.stringify(releaseData, null, 2), "utf-8");
      }
      return releaseData;
    } catch (e) {
      console.error("Error cargando releases:", e);
      return { stable: {} as any, nightly: {} as any }; // Retorna objeto vacío si falla
    }
  },
});
