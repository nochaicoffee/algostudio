# Plan: Section 4 — C++ Standard Library for DSA

## Goal
Write a comprehensive, interview-focused reference covering the entire C++ standard library surface area relevant to DSA and competitive programming. This is section 4 of the larger document, written to `docs/notes/cpp/_part2.md`.

## Context
- Companion to `docs/notes/cpp/fundamentals.md` (language basics)
- Target audience: engineers preparing for coding interviews using C++
- Style: tables-heavy, complexity-focused, practical code examples

## Design
Single large markdown file covering:
1. Sequence Containers (array, vector, deque, list, forward_list) + comparison table
2. Associative Containers (set, multiset, map, multimap) + complexity/invalidation
3. Unordered Containers (unordered_set, unordered_map, multi variants) + hash discussion
4. Container Adaptors (stack, queue, priority_queue with custom comparators)
5. Utility Types (pair, tuple, optional, bitset)
6. Algorithms (sorting, searching, modifying, min/max, numeric, predicates, set ops, heap)
7. Iterator Categories table
8. Lambda and Comparator Patterns
9. Strings (std::string, stringstream, conversions)
10. Numerics and Utilities (limits, gcd/lcm, pow, swap, chrono, random, function/bind)
11. Endcap: Key Interview Points, Common Mistakes, Quick Recap

## Tasks
- [x] Create plan
- [x] Write full section 4 to `docs/notes/cpp/_part2.md` (~900 lines)
- [x] Verify endcap subsections present (Key Interview Points, Common Mistakes, Quick Recap)

## Edge Cases / Risks
- File size: this will be very large (2000+ lines). Single write is fine.
- Code examples must compile with C++17 flags.

## Testing
- Visual review of markdown rendering
- Code examples should be copy-pasteable
