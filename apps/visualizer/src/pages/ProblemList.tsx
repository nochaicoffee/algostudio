import { useEffect, useState } from "react";
import type { ProblemMeta } from "../lib/types.ts";
import { fetchAllProblems } from "../lib/data.ts";

interface ProblemListProps {
  onSelect: (problem: ProblemMeta) => void;
}

const difficultyColor: Record<string, string> = {
  easy: "var(--color-easy)",
  medium: "var(--color-medium)",
  hard: "var(--color-hard)",
};

export function ProblemList({ onSelect }: ProblemListProps) {
  const [problems, setProblems] = useState<ProblemMeta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllProblems().then((data) => {
      setProblems(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="loading">Loading problems...</div>;
  }

  const grouped = problems.reduce<Record<string, ProblemMeta[]>>(
    (acc, problem) => {
      const topic = problem.topic;
      if (!acc[topic]) acc[topic] = [];
      acc[topic].push(problem);
      return acc;
    },
    {}
  );

  return (
    <div className="problem-list">
      <header className="hero">
        <h1>DSA Visualizer</h1>
        <p>Step through algorithms visually. Pick a problem to start.</p>
      </header>

      {Object.entries(grouped).map(([topic, items]) => (
        <section key={topic} className="topic-section">
          <h2 className="topic-heading">{topic}</h2>
          <div className="problem-cards">
            {items.map((problem) => (
              <button
                key={problem.id}
                className="problem-card"
                onClick={() => onSelect(problem)}
              >
                <div className="card-header">
                  <span className="card-title">{problem.title}</span>
                  <span
                    className="card-difficulty"
                    style={{ color: difficultyColor[problem.difficulty] }}
                  >
                    {problem.difficulty}
                  </span>
                </div>
                <p className="card-summary">{problem.summary}</p>
                <div className="card-tags">
                  {problem.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                {!problem.visualizable && (
                  <span className="card-no-viz">No animation</span>
                )}
              </button>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
