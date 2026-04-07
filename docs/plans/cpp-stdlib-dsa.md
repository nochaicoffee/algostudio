# Plan: C++ Standard Library Reference for DSA

## Goal
Write a comprehensive, interview-focused reference covering the C++ standard library containers and related utilities most relevant to DSA and coding interviews. The deliverable for this iteration is a standalone note at `docs/notes/cpp/std-library-reference.md` that complements, rather than replaces, section 4 of `docs/notes/cpp/fundamentals.md`.

## Context
- Companion to `docs/notes/cpp/fundamentals.md` (language basics)
- Target audience: engineers preparing for coding interviews using C++
- The existing "C++ Standard Library for DSA" section in `docs/notes/cpp/fundamentals.md` is useful but incomplete for exhaustive API lookup
- Style: tables-heavy, complexity-focused, practical and interview-oriented
- Web references should be used to cross-check guarantees and complexity wording against authoritative sources such as cppreference

## Design
Single markdown note covering:
1. Sequence containers: `array`, `vector`, `deque`, `list`, `forward_list`
2. Ordered associative containers: `set`, `multiset`, `map`, `multimap`
3. Unordered associative containers: `unordered_set`, `unordered_multiset`, `unordered_map`, `unordered_multimap`
4. Container adaptors: `stack`, `queue`, `priority_queue`
5. String and bit utilities: `std::string` / `basic_string`, `std::bitset`
6. Cross-cutting reference material:
   - quick comparison tables
   - iterator categories
   - iterator/reference invalidation
   - function-difference callouts (`push_back` vs `emplace_back`, `find` vs `count`, etc.)
   - interview-focused Q&A
   - optional high-value `<algorithm>` / `<numeric>` cheat sheet

For each major container/type section:
- explain the usual implementation and what the standard guarantees vs what is implementation detail
- list non-deprecated operations that matter in DSA/interviews
- include time/space complexity and invalidation notes
- add key points to remember
- include targeted interview questions/answers at the family or container level

## Tasks
- [x] Create plan
- [x] Review existing section 4 in `docs/notes/cpp/fundamentals.md` and identify gaps
- [x] Write `docs/notes/cpp/std-library-reference.md`
- [x] Include standards note (target C++20, mention C++23 additions where relevant)
- [x] Add comparison tables, invalidation notes, and interview Q&A
- [x] Cross-check wording/guarantees against authoritative references
- [x] Review markdown structure and readability

## Edge Cases / Risks
- The file can become too encyclopedic; keep it skimmable by grouping functions into families and using tables.
- Some implementation details are not mandated by the standard (for example growth factors, SSO, exact hash-table layout, exact deque block sizing); these must be labeled as "typical" or "QoI", not guarantees.
- Complexity for unordered containers must clearly distinguish average case from worst case.
- C++23 added range-based insertion APIs for several containers; mention them without making the main note depend on C++23.

## Testing
- Review markdown rendering, heading consistency, and table readability
- Verify required coverage: underlying structure, function summaries, complexity, key points, interview Q&A
- Spot-check a sample of complexities and guarantees against cppreference

## Learnings
- The existing fundamentals note is strong as a learning narrative, but a dedicated standalone reference is better for API lookup and interview revision.
- The biggest value-add is not more prose; it is precise distinctions between similar APIs, invalidation rules, and average-vs-worst-case complexity.
- A separate note under `docs/notes/cpp/` keeps the fundamentals file skimmable while still giving the repo an exhaustive STL revision guide.
