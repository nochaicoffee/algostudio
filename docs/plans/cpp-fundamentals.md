# C++ fundamentals — planning

## Goal

Provide a single, beginner-friendly reference for **C++ fundamentals** in this repo: core syntax, data types, control flow, functions, OOP, memory basics, best practices, and interview preparation.

## Context

- This is educational content, not a single DSA problem writeup, so it belongs under `docs/notes/`.
- Existing concept-note style reference: [`docs/notes/arrays/dynamic-array.md`](../notes/arrays/dynamic-array.md).
- The note should help readers understand the language features used throughout the C++ solutions in this repo.

## Design

| Deliverable | Path |
| ----------- | ---- |
| This plan | `docs/plans/cpp-fundamentals.md` |
| Main notes | `docs/notes/cpp/fundamentals.md` |
| Optional roadmap link | `docs/roadmap.md` |

The notes will cover:

- Fundamental syntax and mental model
- Data types, variables, operators, and expressions
- Conditions and loops
- Functions, references, `const`, and parameter passing
- Standard library essentials such as `std::string`, `std::vector`, `std::pair`, and `std::unordered_map`
- Pointers, stack vs heap, and why modern C++ prefers RAII and STL containers
- OOP concepts in C++: classes, constructors, access control, inheritance, polymorphism, abstraction, encapsulation
- Best practices and common mistakes
- Interview questions worth knowing for fundamentals-level C++ discussions

## Tasks

1. [x] Add this planning document.
2. [x] Write `docs/notes/cpp/fundamentals.md`.
3. [x] Review and trim the note so it stays skimmable and beginner-friendly.
4. [x] Link the new note from `docs/roadmap.md`.

## Edge cases / risks

- **Scope creep:** C++ is large; this note must stay focused on fundamentals instead of advanced template metaprogramming or niche STL details.
- **Outdated advice:** Raw pointers and manual memory management should be explained for understanding, but clearly contrasted with preferred modern practices.
- **Too much theory:** OOP and memory topics should stay concrete and tied to small examples.
- **Interview overload:** Questions should target common fundamentals, not compiler-trivia edge cases.

## Testing

- Review for readability, heading structure, and consistent Markdown formatting.
- Verify sample snippets are plausible C++17-style examples.
- Check that requested topics are covered: data types, conditions, loops, OOP, best practices, interview questions, plus missing essentials like references, `const`, STL basics, and memory model intuition.

## Learnings

- A dedicated `docs/notes/cpp/` bucket fits the existing convention of grouping conceptual notes by topic.
- A fundamentals note complements the problem-first content by giving readers language context before algorithm practice.
