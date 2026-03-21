# Dynamic array notes — planning

## Goal

Provide a single, accurate reference for **dynamic arrays** in this repo: concept, complexity, growth strategy, link to an external explainer video, and alignment with the C++ reference implementation in `cpp/src/arrays/dynamic-array.cpp`.

## Context

- Educational content is **not** a LeetCode-style problem; it lives under `docs/notes/` to avoid the strict `docs/problems/` template.
- Reference code: [`cpp/src/arrays/dynamic-array.cpp`](../../cpp/src/arrays/dynamic-array.cpp).

## Design

| Deliverable | Path |
|-------------|------|
| This plan | `docs/plans/dynamic-array-notes.md` |
| Main notes | `docs/notes/arrays/dynamic-array.md` |
| Implementation | `cpp/src/arrays/dynamic-array.cpp` |

Notes include: definition (size vs capacity), operations table, amortized `pushback`, resize steps, Mermaid diagram, `std::vector` comparison, pitfalls, link to [YouTube Short](https://www.youtube.com/shorts/Kj1oJhbRmbM).

## Tasks

1. [x] Add this planning document.
2. [x] Write `docs/notes/arrays/dynamic-array.md`.
3. [x] Fix `dynamic-array.cpp` (`resize` pointer update, empty `popback`, zero-capacity growth, typo).
4. [x] Link from `docs/roadmap.md` Phase 1.

## Edge cases / risks

- **`resize`:** Must assign `arr = newArr` after `delete[] arr` or the object holds a dangling pointer.
- **`popback` on empty:** Must not read past logical size; document contract or enforce (e.g. `assert`).
- **Bounds:** Unchecked `get`/`set` indices → undefined behavior if invalid.
- **Zero initial capacity:** Doubling `0` stays `0`; growth logic must treat `capacity == 0` as a special case.

## Testing

- Manually: construct with small positive capacity; `pushback` until `getCapacity()` doubles; verify `get`/`getSize`; `popback` until empty; ensure assert fires or behavior is documented on double pop (if using assert, build without `NDEBUG` to test).
- Compile: `g++ -std=c++17 -Wall -Wextra -c cpp/src/arrays/dynamic-array.cpp` (class-only file may need a tiny driver or skip link — `-c` is enough for syntax).

## Learnings

- Notes live under `docs/notes/` so concept docs stay separate from the problem-doc standard in `docs/problems/`.
