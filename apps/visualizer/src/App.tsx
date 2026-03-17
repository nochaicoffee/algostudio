import { useState } from "react";
import type { ProblemMeta } from "./lib/types.ts";
import { ProblemList } from "./pages/ProblemList.tsx";
import { ProblemDetail } from "./pages/ProblemDetail.tsx";
import "./App.css";

function App() {
  const [selected, setSelected] = useState<ProblemMeta | null>(null);

  if (selected) {
    return (
      <ProblemDetail
        problem={selected}
        onBack={() => setSelected(null)}
      />
    );
  }

  return <ProblemList onSelect={setSelected} />;
}

export default App;
