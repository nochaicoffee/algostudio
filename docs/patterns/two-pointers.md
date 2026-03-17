# Two Pointers

## When to Use

- Sorted arrays where you need to find pairs
- In-place array manipulation
- Partitioning problems

## Core Idea

Maintain two indices (usually `left` and `right`) that move toward each other or in the same direction based on a condition. This eliminates the need for a nested loop, reducing O(n^2) to O(n).

## Variants

| Variant | Movement | Example |
|---|---|---|
| Opposite ends | left++, right-- | Two Sum (sorted), Container With Most Water |
| Same direction (fast/slow) | slow++, fast++ | Remove Duplicates, Linked List Cycle |
| Sliding window hybrid | left conditional, right++ | Longest Substring Without Repeating |

## Template (C++)

```cpp
int left = 0, right = n - 1;
while (left < right) {
    int sum = arr[left] + arr[right];
    if (sum == target) return {left, right};
    else if (sum < target) left++;
    else right--;
}
```

## Template (Go)

```go
left, right := 0, len(arr)-1
for left < right {
    sum := arr[left] + arr[right]
    switch {
    case sum == target:
        return []int{left, right}
    case sum < target:
        left++
    default:
        right--
    }
}
```
