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

Each `docs/problems/<topic>/<slug>.md` follows this structure:

```markdown
# <Problem Title>

## Problem Statement
Brief description of the problem.

## Pattern / Topic
Which category and interview pattern this maps to.

## Brute Force
Naive approach and its complexity.

## Optimal Approach
Best known solution with explanation.

## Complexity
- Time: O(...)
- Space: O(...)

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
