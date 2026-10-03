"use client";

import { useEffect, useState } from "react";

type GitHubRepoCountProps = {
  fallback?: number;
};

export function GitHubRepoCount({ fallback = 33 }: GitHubRepoCountProps) {
  const [count, setCount] = useState(fallback);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.github.com/users/mabdula2004", {
      cache: "no-store",
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub profile request failed");
        return response.json() as Promise<{ public_repos?: number }>;
      })
      .then((profile) => {
        if (typeof profile.public_repos === "number") setCount(profile.public_repos);
      })
      .catch(() => {
        // Keep the last verified count when GitHub is temporarily unavailable.
      });

    return () => controller.abort();
  }, []);

  return <>{count}</>;
}
