# DSA Study Platform — Planning Document

## Goal

A single repository for interview preparation providing:

- Practice in both C++ and Go for the same problems
- Structured Markdown notes for quick recap
- A local React + Vite webapp that visually explains algorithms with animations

## Repo Structure

```text
.
├── docs/
│   ├── plans/
│   │   └── dsa-platform.md        # this file
│   ├── roadmap.md                  # topic-by-topic learning sequence
│   ├── patterns/                   # reusable interview patterns
│   └── problems/
│       └── <topic>/<slug>.md       # per-problem recap notes
├── cpp/
│   ├── CMakeLists.txt
│   ├── include/                    # shared helpers
│   ├── src/
│   │   └── <topic>/<slug>.cpp      # solutions
│   └── tests/
├── go/
│   ├── go.mod
│   ├── problems/
│   │   └── <topic>/<slug>.go       # solutions
│   └── internal/                   # shared helpers
├── content/
│   └── problems/
│       └── <topic>/<slug>.json     # structured metadata for the webapp
├── apps/
│   └── visualizer/                 # React + Vite app
└── scripts/
    └── new-problem.sh              # scaffold a new problem everywhere
```

## Naming Convention

Every problem uses a **canonical slug** in the form `<topic>/<problem-slug>`.

| Location | Path |
|---|---|
| Recap note | `docs/problems/<topic>/<slug>.md` |
| C++ solution | `cpp/src/<topic>/<slug>.cpp` |
| Go solution | `go/problems/<topic>/<slug>.go` |
| Webapp metadata | `content/problems/<topic>/<slug>.json` |

Topics include: `arrays`, `strings`, `linked-lists`, `trees`, `graphs`, `sorting`, `searching`, `dynamic-programming`, `stacks-queues`, `hashing`, `two-pointers`, `sliding-window`, `backtracking`, `greedy`, `bit-manipulation`.

## Note Template

Each `docs/problems/<topic>/<slug>.md` follows this structure.

Every approach subsection must contain the same anatomy: Idea, Step-by-step
logic, Why it works, Time Complexity Breakdown (derive the cost, don't just
state it), Space Complexity Breakdown, Pros, Cons, and its own Mermaid Diagram.

```markdown
# <Problem Title>

## Problem Statement
Brief description of the problem.

## Pattern / Topic
Which category and interview pattern this maps to.

## Approaches

### 1. Brute Force

**Idea:** One-sentence summary of the approach.

**Step-by-step:**
1. ...
2. ...

**Why it works:** Explain the correctness argument.

**Time Complexity Breakdown:**
- <operation A>: O(...)
- <operation B>: O(...)
- Combined: O(...) — state which term dominates and why.

**Space Complexity Breakdown:**
- <auxiliary structure>: O(...)
- Total extra space: O(...)

**Pros:** ...
**Cons:** ...

```mermaid
flowchart TD
    ...
```

---

### 2. <Alternative Approach> (if applicable)
If there is no meaningful alternative beyond brute force and optimal, state:
"No notable intermediate approach for this problem."
Otherwise, use the same anatomy as above (Idea → Diagram).

---

### 3. Optimal Approach
Same anatomy (Idea → Diagram).

---

## Approach Comparison

| Approach | Time | Space | Pros | Cons |
|----------|------|-------|------|------|
| Brute Force | O(...) | O(...) | ... | ... |
| Alternative | O(...) | O(...) | ... | ... |
| Optimal | O(...) | O(...) | ... | ... |

## Key Pitfalls
Common mistakes and edge cases.

## Interview Talking Points
What to mention when walking through this in an interview.

## Solutions
- C++: `cpp/src/<topic>/<slug>.cpp`
- Go: `go/problems/<topic>/<slug>.go`
- Visualizer metadata: `content/problems/<topic>/<slug>.json`
```

## Metadata Schema

Each `content/problems/<topic>/<slug>.json`:

```json
{
  "id": "<topic>/<slug>",
  "title": "Problem Title",
  "topic": "<topic>",
  "difficulty": "easy | medium | hard",
  "tags": [],
  "summary": "One-line description",
  "visualizable": true,
  "animationType": "array | linkedList | tree | graph | sorting",
  "steps": [],
  "relatedNotes": "docs/problems/<topic>/<slug>.md",
  "solutionPaths": {
    "cpp": "cpp/src/<topic>/<slug>.cpp",
    "go": "go/problems/<topic>/<slug>.go"
  }
}
```

## Workflow for Each New Problem

1. Run `./scripts/new-problem.sh <topic> <slug> "<Title>"` to scaffold all files
2. Solve in C++
3. Solve in Go
4. Write the recap note in `docs/problems/`
5. If animation-worthy, fill in `steps` in the JSON metadata

## Rollout Phases

- **Phase 1**: Repo structure, planning doc, note template
- **Phase 2**: C++ and Go workspaces with first sample problems
- **Phase 3**: Visualizer MVP (sorting, binary search animations)
- **Phase 4**: Automation, formatting, and steady practice cadence

## Decisions Log

| Date | Decision |
|---|---|
| 2026-03-17 | Initial structure agreed. React + Vite for visualizer, same problems in both C++ and Go. |
| 2026-03-19 | Enriched note template: added per-approach pros/cons, alternative approaches, approach comparison table, and mandatory Mermaid visual section. |
| 2026-03-19 | Updated `scripts/new-problem.sh` scaffold to match enriched template. Added `.cursor/rules/problem-docs.mdc` scoped to `docs/problems/**/*.md`. Retrofitted all 3 existing problem notes (two-sum, binary-search, bubble-sort). |
| 2026-03-19 | Detailed update: each approach now requires its own Mermaid diagram, step-by-step logic, and explicit time/space complexity derivations (not just final Big-O). Template, scaffold, rule, and all existing notes updated. |
