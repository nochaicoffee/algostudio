import { useCallback, useState } from "react";
import type { ProblemMeta } from "../lib/types.ts";
import { ArrayBars } from "../components/ArrayBars.tsx";
import { HashMapView } from "../components/HashMapView.tsx";
import { StepControls } from "../components/StepControls.tsx";

interface ProblemDetailProps {
  problem: ProblemMeta;
  onBack: () => void;
}

export function ProblemDetail({ problem, onBack }: ProblemDetailProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = problem.steps;
  const step = steps[currentStep];

  const handleStepChange = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(next, steps.length - 1));
      setCurrentStep(clamped);
      if (clamped === steps.length - 1) {
        setIsPlaying(false);
      }
    },
    [steps.length]
  );

  const togglePlay = useCallback(() => {
    if (currentStep === steps.length - 1) {
      setCurrentStep(0);
      setIsPlaying(true);
    } else {
      setIsPlaying((prev) => !prev);
    }
  }, [currentStep, steps.length]);

  return (
    <div className="problem-detail">
      <button className="back-button" onClick={onBack}>
        &larr; All Problems
      </button>

      <header className="detail-header">
        <h1>{problem.title}</h1>
        <div className="detail-meta">
          <span className="detail-topic">{problem.topic}</span>
          <span className={`detail-difficulty diff-${problem.difficulty}`}>
            {problem.difficulty}
          </span>
        </div>
        <p className="detail-summary">{problem.summary}</p>
      </header>

      {steps.length > 0 ? (
        <div className="visualization">
          <div className="viz-main">
            <ArrayBars
              step={step}
              mode={problem.animationType === "sorting" ? "sorting" : "array"}
            />
          </div>

          {step.hashMap && (
            <div className="viz-side">
              <HashMapView hashMap={step.hashMap} />
            </div>
          )}

          <div className="step-description">
            <p>{step.description}</p>
          </div>

          <StepControls
            currentStep={currentStep}
            totalSteps={steps.length}
            isPlaying={isPlaying}
            onStepChange={handleStepChange}
            onTogglePlay={togglePlay}
          />
        </div>
      ) : (
        <p className="no-animation">
          No animation steps defined for this problem yet.
        </p>
      )}

      <div className="solution-paths">
        <h3>Solution Files</h3>
        <ul>
          <li>
            <strong>C++:</strong>{" "}
            <code>{problem.solutionPaths.cpp}</code>
          </li>
          <li>
            <strong>Go:</strong>{" "}
            <code>{problem.solutionPaths.go}</code>
          </li>
          <li>
            <strong>Notes:</strong>{" "}
            <code>{problem.relatedNotes}</code>
          </li>
        </ul>
      </div>
    </div>
  );
}
