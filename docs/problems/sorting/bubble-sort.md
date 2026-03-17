# Bubble Sort

## Problem Statement
Sort an array of integers in ascending order using the bubble sort algorithm. Repeatedly step through the list, compare adjacent elements, and swap them if they are in the wrong order.

## Pattern / Topic
Sorting

## Brute Force
Bubble sort *is* the brute force sorting approach. Two nested loops comparing every adjacent pair.

## Optimal Approach
Add an early termination: if no swaps occur during a full pass, the array is already sorted. This makes the best case O(n) for nearly sorted input.

**Why it works**: Each pass "bubbles" the largest unsorted element to its final position. After `i` passes, the last `i` elements are sorted.

## Complexity
- Time: O(n^2) worst/average, O(n) best (already sorted with early termination)
- Space: O(1) — in-place

## Key Pitfalls
- Inner loop should run to `n - 1 - i`, not `n - 1`, since the last `i` elements are already sorted.
- Forgetting the early termination flag means always running O(n^2).
- Bubble sort is stable (equal elements keep their relative order).

## Interview Talking Points
- Mention it's the simplest sorting algorithm, good for teaching but not for production.
- Compare with insertion sort (also O(n^2) but faster in practice on small/nearly-sorted data).
- Know that interviewers usually ask this as a warm-up before discussing O(n log n) sorts.
- Understand stability — bubble sort is stable, quicksort is not (by default).

## Solutions
- C++: `cpp/src/sorting/bubble-sort.cpp`
- Go: `go/problems/sorting/bubble-sort.go`
- Visualizer metadata: `content/problems/sorting/bubble-sort.json`
