export interface AnimationStep {
  description: string;
  array: number[];
  highlight: number[];
  hashMap?: Record<string, number>;
  sorted?: number[];
  result?: number[];
}

export interface ProblemMeta {
  id: string;
  title: string;
  topic: string;
  difficulty: "easy" | "medium" | "hard";
  tags: string[];
  summary: string;
  visualizable: boolean;
  animationType: "array" | "sorting" | "linkedList" | "tree" | "graph";
  steps: AnimationStep[];
  relatedNotes: string;
  solutionPaths: {
    cpp: string;
    go: string;
  };
}
