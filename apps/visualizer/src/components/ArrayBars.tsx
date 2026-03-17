import type { AnimationStep } from "../lib/types.ts";

interface ArrayBarsProps {
  step: AnimationStep;
  mode: "array" | "sorting";
}

export function ArrayBars({ step, mode }: ArrayBarsProps) {
  const maxVal = Math.max(...step.array, 1);

  return (
    <div className="bars-container">
      {step.array.map((value, idx) => {
        const isHighlighted = step.highlight.includes(idx);
        const isSorted = mode === "sorting" && step.sorted?.includes(idx);
        const isResult = step.result?.includes(idx);

        let className = "bar";
        if (isResult) className += " bar-result";
        else if (isHighlighted) className += " bar-highlight";
        else if (isSorted) className += " bar-sorted";

        const heightPercent = (value / maxVal) * 100;

        return (
          <div key={idx} className="bar-wrapper">
            <div
              className={className}
              style={{ height: `${Math.max(heightPercent, 8)}%` }}
            >
              <span className="bar-label">{value}</span>
            </div>
            <span className="bar-index">{idx}</span>
          </div>
        );
      })}
    </div>
  );
}
