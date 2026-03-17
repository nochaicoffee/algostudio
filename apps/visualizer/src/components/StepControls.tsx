import { useEffect, useRef } from "react";

interface StepControlsProps {
  currentStep: number;
  totalSteps: number;
  isPlaying: boolean;
  onStepChange: (step: number) => void;
  onTogglePlay: () => void;
}

export function StepControls({
  currentStep,
  totalSteps,
  isPlaying,
  onStepChange,
  onTogglePlay,
}: StepControlsProps) {
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        onStepChange(currentStep + 1);
      }, 1200);
    }
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, currentStep, onStepChange]);

  const atStart = currentStep === 0;
  const atEnd = currentStep === totalSteps - 1;

  return (
    <div className="step-controls">
      <button onClick={() => onStepChange(0)} disabled={atStart}>
        ⏮ Start
      </button>
      <button onClick={() => onStepChange(currentStep - 1)} disabled={atStart}>
        ◀ Prev
      </button>
      <button onClick={onTogglePlay}>
        {isPlaying ? "⏸ Pause" : "▶ Play"}
      </button>
      <button onClick={() => onStepChange(currentStep + 1)} disabled={atEnd}>
        Next ▶
      </button>
      <button onClick={() => onStepChange(totalSteps - 1)} disabled={atEnd}>
        End ⏭
      </button>
      <span className="step-counter">
        Step {currentStep + 1} / {totalSteps}
      </span>
    </div>
  );
}
