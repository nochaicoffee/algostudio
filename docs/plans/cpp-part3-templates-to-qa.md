# Plan: Sections 5–10 — Templates, Error Handling, Concurrency, Performance, Playbook, Q&A

## Goal
Write sections 5 through 10 of the C++ DSA + interview reference to `docs/notes/cpp/_part3.md`.

## Context
- Follows `fundamentals.md` (sections 1–3) and `_part2.md` (section 4 — STL)
- Target: engineers preparing for C++ coding interviews
- Style: tables, practical C++17/20 code, technically precise

## Design
Single large markdown file covering:
- **5. Templates and Generic Programming** — function/class templates, specialization, variadic, type traits, concepts
- **6. Error Handling, Debugging, and Tooling** — exceptions, safety guarantees, sanitizers, compile flags
- **7. Concurrency Basics** — threads, mutex, deadlock, atomics, async/future
- **8. Performance and Optimization for DSA** — cache locality, move semantics, fast I/O, compiler flags
- **9. Practical DSA-in-C++ Playbook** — container selection, common patterns, pitfalls checklist
- **10. C++ Interview Questions and Answers** — 85+ grouped Q&A with interviewer tips

Sections 5–9 each end with: Key Interview Points, Common Mistakes, Quick Recap.
Section 10 has no endcaps.

## Tasks
- [x] Create plan
- [x] Write full sections 5–10 to `docs/notes/cpp/_part3.md`
- [x] Verify endcap subsections on sections 5–9
- [x] Verify section 10 has 85 Q&A (Q1–Q85)

## Edge Cases / Risks
- File will be extremely large (3000+ lines). Single write.
- Code examples must be compilable with C++17/20 flags.
- Q&A section needs careful grouping and numbering.

## Testing
- Visual review of markdown rendering
- Code examples should be copy-pasteable
