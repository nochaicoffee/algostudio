# BFS / DFS

## When to Use

- Graph and tree traversals
- Shortest path in unweighted graphs (BFS)
- Exhaustive exploration, cycle detection (DFS)
- Level-order processing (BFS)

## Core Idea

**BFS**: Explore all neighbors at the current depth before moving deeper. Uses a queue.
**DFS**: Explore as deep as possible along a branch before backtracking. Uses a stack or recursion.

## BFS Template (C++)

```cpp
queue<int> q;
vector<bool> visited(n, false);
q.push(start);
visited[start] = true;

while (!q.empty()) {
    int node = q.front(); q.pop();
    for (int neighbor : adj[node]) {
        if (!visited[neighbor]) {
            visited[neighbor] = true;
            q.push(neighbor);
        }
    }
}
```

## DFS Template (C++)

```cpp
void dfs(int node, vector<vector<int>>& adj, vector<bool>& visited) {
    visited[node] = true;
    for (int neighbor : adj[node]) {
        if (!visited[neighbor]) {
            dfs(neighbor, adj, visited);
        }
    }
}
```

## BFS Template (Go)

```go
queue := []int{start}
visited := make([]bool, n)
visited[start] = true

for len(queue) > 0 {
    node := queue[0]
    queue = queue[1:]
    for _, neighbor := range adj[node] {
        if !visited[neighbor] {
            visited[neighbor] = true
            queue = append(queue, neighbor)
        }
    }
}
```
