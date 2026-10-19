import type { GitHubRepository } from "./portfolio-data";

export type RepositoryWithActivity = GitHubRepository & { pushedAt?: string };

export function sortRepositories(repositories: GitHubRepository[], activity: Record<string, string>): RepositoryWithActivity[] {
  return repositories.map(repo => ({ ...repo, pushedAt: activity[repo.repository] }))
    .sort((a, b) => (b.pushedAt ?? "").localeCompare(a.pushedAt ?? "") || a.repository.localeCompare(b.repository));
}

export function splitRepositories<T>(repositories: T[], columns: number): T[][] {
  const groups: T[][] = [];
  for (let index = 0; index < repositories.length; index += columns) groups.push(repositories.slice(index, index + columns));
  return groups;
}

export function repositoryProgress(sectionTop: number, stickyTop: number, distance: number, count: number): number {
  return Math.max(0, Math.min(Math.max(0, count - 1), (stickyTop - sectionTop) / distance));
}

export function repositoryFrame(progress: number, index: number) {
  const offset = index - progress;
  const depth = Math.abs(offset);
  return {
    visible: offset > -.65 && offset < 1.8,
    opacity: Math.max(0, Math.min(1, offset >= 0 ? 1 - offset * .8 : 1 + offset * 2)),
    zIndex: 100 - index,
    transform: `translate3d(0, ${offset * (offset >= 0 ? 48 : 110)}px, ${-depth * 200}px) scale(${offset >= 0 ? 1 - Math.min(offset, 2) * .09 : 1 + Math.min(depth, 2) * .04}) rotateX(${offset >= 0 ? -offset * 7 : offset * 4}deg)`,
  };
}
