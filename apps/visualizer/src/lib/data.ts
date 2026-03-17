import type { ProblemMeta } from "./types.ts";

export async function fetchManifest(): Promise<string[]> {
  const res = await fetch("/manifest.json");
  return res.json();
}

export async function fetchProblem(path: string): Promise<ProblemMeta> {
  const res = await fetch(`/${path}`);
  return res.json();
}

export async function fetchAllProblems(): Promise<ProblemMeta[]> {
  const paths = await fetchManifest();
  return Promise.all(paths.map(fetchProblem));
}
