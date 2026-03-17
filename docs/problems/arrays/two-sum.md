# Two Sum

## Problem Statement
Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`. Each input has exactly one solution, and you may not use the same element twice.

## Pattern / Topic
Arrays, Hashing

## Brute Force
Check every pair `(i, j)` where `i < j`. If `nums[i] + nums[j] == target`, return `{i, j}`.
- Time: O(n^2)
- Space: O(1)

## Optimal Approach
Use a hash map to store each number's index as you iterate. For each element, check if `target - nums[i]` is already in the map. If yes, you've found the pair.

**Why it works**: The hash map gives O(1) lookup, so you only need one pass through the array.

## Complexity
- Time: O(n)
- Space: O(n)

## Key Pitfalls
- Don't use the same element twice — check the map *before* inserting the current element.
- The problem guarantees exactly one solution, so no need to handle zero or multiple matches.
- Return indices, not the values themselves.

## Interview Talking Points
- Start by mentioning the brute force O(n^2) approach, then optimize with a hash map.
- Mention that this is a classic "complement lookup" pattern — useful in many array problems.
- If asked about sorted input, mention the two-pointer O(n) / O(1) variant.

## Solutions
- C++: `cpp/src/arrays/two-sum.cpp`
- Go: `go/problems/arrays/two-sum.go`
- Visualizer metadata: `content/problems/arrays/two-sum.json`
