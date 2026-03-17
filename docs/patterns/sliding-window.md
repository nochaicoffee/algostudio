# Sliding Window

## When to Use

- Subarray/substring problems with a contiguous constraint
- Finding min/max/sum/count within a window of size k
- Variable-length windows with a condition to maintain

## Core Idea

Maintain a window `[left, right]` over the input. Expand `right` to explore, shrink `left` to maintain the constraint. This avoids recomputing from scratch for every starting position.

## Variants

| Variant | Window Size | Example |
|---|---|---|
| Fixed-size | k is given | Max Sum Subarray of Size K |
| Variable-size | shrink when invalid | Minimum Window Substring |
| With frequency map | track char/element counts | Longest Substring Without Repeating |

## Template (C++)

```cpp
int left = 0;
for (int right = 0; right < n; right++) {
    // expand: add arr[right] to window state
    while (/* window is invalid */) {
        // shrink: remove arr[left] from window state
        left++;
    }
    // update answer
}
```

## Template (Go)

```go
left := 0
for right := 0; right < len(arr); right++ {
    // expand: add arr[right] to window state
    for /* window is invalid */ {
        // shrink: remove arr[left] from window state
        left++
    }
    // update answer
}
```
