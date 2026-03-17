# Binary Search

## Problem Statement
Given a sorted array of integers and a target value, return the index of the target if found, or -1 if not present.

## Pattern / Topic
Searching, Divide and Conquer

## Brute Force
Linear scan through the array checking each element.
- Time: O(n)
- Space: O(1)

## Optimal Approach
Since the array is sorted, compare the target with the middle element. If it matches, return the index. If the target is smaller, search the left half; if larger, search the right half. Repeat until found or the search space is empty.

**Why it works**: Each comparison eliminates half the remaining elements.

## Complexity
- Time: O(log n)
- Space: O(1) iterative, O(log n) recursive

## Key Pitfalls
- Use `mid = left + (right - left) / 2` instead of `(left + right) / 2` to avoid integer overflow.
- Off-by-one errors in the loop condition: use `left <= right` (inclusive bounds).
- Make sure the array is actually sorted before applying binary search.

## Interview Talking Points
- Binary search is the foundation for many interview problems (search in rotated array, find peak, etc.).
- Always clarify: is the input sorted? Are there duplicates?
- For finding leftmost/rightmost occurrence, adjust the boundary update logic.
- Mention the O(log n) time complexity as the key improvement over linear search.

## Solutions
- C++: `cpp/src/searching/binary-search.cpp`
- Go: `go/problems/searching/binary-search.go`
- Visualizer metadata: `content/problems/searching/binary-search.json`
