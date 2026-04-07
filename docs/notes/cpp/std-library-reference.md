# C++ Standard Library Reference for DSA

This note is the detailed companion to the lighter "C++ Standard Library for DSA" section in `docs/notes/cpp/fundamentals.md`. Use `fundamentals.md` to learn the ideas; use this file when you need API details, complexity guarantees, invalidation rules, and interview-oriented comparisons.

## Standards And Sources

- Target standard: **C++20**
- C++23 additions are called out inline when they matter (`insert_range`, `append_range`, `push_range`, `contains` on `std::string`, etc.)
- Implementation notes such as growth factor, deque block size, hash collision strategy, and small-string optimization are marked as **typical** or **QoI** ("quality of implementation"), because the standard usually specifies behavior and complexity, not the exact layout.
- Authoritative references used while preparing this note:
  - [cppreference: Containers library](https://en.cppreference.com/w/cpp/container)
  - [cppreference: `std::set`](https://en.cppreference.com/w/cpp/container/set)
  - [cppreference: `std::priority_queue`](https://en.cppreference.com/w/cpp/container/priority_queue)
  - [cppreference: `std::basic_string`](https://en.cppreference.com/w/cpp/string/basic_string)

## Table Of Contents

- [1. Reading Guide](#1-reading-guide)
- [2. Shared API Families](#2-shared-api-families)
- [3. Quick Selection Cheat Sheet](#3-quick-selection-cheat-sheet)
- [4. Sequence Containers](#4-sequence-containers)
- [5. Ordered Associative Containers](#5-ordered-associative-containers)
- [6. Unordered Associative Containers](#6-unordered-associative-containers)
- [7. Container Adaptors](#7-container-adaptors)
- [8. `std::string` / `std::basic_string`](#8-stdstring--stdbasic_string)
- [9. Bitset](#9-bitset)
- [10. Iterator Categories](#10-iterator-categories)
- [11. Common Function Differences](#11-common-function-differences)
- [12. Algorithm And Numeric Cheat Sheet](#12-algorithm-and-numeric-cheat-sheet)
- [13. Interview-Focused Q&A](#13-interview-focused-qa)
- [14. References](#14-references)

## 1. Reading Guide

### Complexity notation used here

- `n`: current container size
- `k`: number of affected elements / duplicates / inserted elements
- "amortized" means averaged over a sequence of operations
- unordered containers show **average** and **worst-case** when it matters
- "extra space" means additional temporary memory used by the operation itself, not the container's already-owned storage

### What the standard guarantees vs what implementations usually do

- `std::vector` and `std::basic_string` guarantee **contiguous** storage.
- `std::array` is a fixed-size wrapper around an actual array.
- `std::deque` guarantees random access and efficient growth at both ends, but the exact segmented layout is implementation-defined.
- Ordered associative containers guarantee sorted order and logarithmic search/insertion/erasure; they are **usually** red-black trees.
- Unordered associative containers guarantee bucket-based behavior and average O(1) lookup/insert/erase; the exact collision strategy is implementation-defined.
- `std::priority_queue` guarantees heap semantics through its interface; the usual implementation is a binary heap on top of `std::vector`.
- Small-string optimization (SSO) is common, but **not required** by the standard.

### Iterator and reference invalidation

Per [cppreference's container invalidation summary](https://en.cppreference.com/w/cpp/container), read-only operations do not invalidate iterators or references. Mutating operations often do, and interview bugs frequently come from assuming:

- `vector` references survive reallocation
- `deque::end()` behaves like `list::end()`
- `unordered_map` iterators survive rehash
- `clear()` keeps references alive

Treat invalidation as part of the API, not an implementation detail.

## 2. Shared API Families

These are the common, non-deprecated APIs you will see across many containers. Container-specific sections below list the functions that matter most and note exceptions.

| API family | Present on | What it does | Usual complexity | Notes |
| --- | --- | --- | --- | --- |
| Constructors / range constructors / initializer-list constructors | almost all containers | Build from size, range, list, or another container | usually O(n) | Adaptors and `bitset` have their own constructor shapes |
| Copy / move constructor and assignment | all standard containers | Copy or move the container | copy O(n), move usually O(1) | Move can degrade if allocators differ |
| `begin`, `end`, `cbegin`, `cend`, `rbegin`, `rend` | all real containers except adaptors | Iterator access | O(1) | `forward_list` also has `before_begin` |
| `empty`, `size`, `max_size` | most containers | Capacity queries | O(1) | `forward_list` has no `size()` |
| `front`, `back`, `data` | where supported | Direct element access | O(1) | availability differs by container |
| `clear` | most dynamic containers | Erase all elements | O(n) | invalidates all iterators/references to elements |
| `swap` | almost all | Exchange contents | usually O(1) | `array::swap` is O(n) because elements are swapped |
| `get_allocator` | allocator-aware containers | Access allocator | O(1) | mostly irrelevant in interviews |
| non-member `swap` | almost all | ADL-friendly swap | same as member `swap` | prefer `using std::swap; swap(a, b);` in generic code |
| non-member `erase` / `erase_if` (C++20) | many containers and `string` | Convenience removal helpers | container-dependent | nice interview cleanup API |

## 3. Quick Selection Cheat Sheet

| Type | Typical underlying model | Iterators | Order kept? | Lookup | Insert/erase best use | Biggest caveat |
| --- | --- | --- | --- | --- | --- | --- |
| `array` | fixed in-object array | random access, contiguous | yes | O(1) by index | no structural insert/erase | size fixed at compile time |
| `vector` | dynamic contiguous buffer | random access, contiguous | yes | O(1) by index | append-heavy workloads | reallocation invalidates all iterators/references |
| `deque` | segmented array | random access | yes | O(1) by index | push/pop both ends | not contiguous |
| `list` | doubly linked nodes | bidirectional | yes | O(n) | splice, erase/insert by iterator | poor cache locality |
| `forward_list` | singly linked nodes | forward | yes | O(n) | minimal-overhead node sequence | no `size()`, no back operations |
| `set` / `multiset` | usually red-black tree | bidirectional | sorted | O(log n) | sorted unique / duplicate keys | no random access |
| `map` / `multimap` | usually red-black tree | bidirectional | sorted by key | O(log n) | sorted key-value storage | `operator[]` only on `map` |
| `unordered_set` / `unordered_map` | bucketed hash table | forward at least | no | avg O(1) | fast membership / frequency tables | rehash invalidates iterators |
| `stack` | adaptor over `deque` by default | none exposed | LIFO only | top O(1) | DFS, matching, monotonic stack | no iteration |
| `queue` | adaptor over `deque` by default | none exposed | FIFO only | front/back O(1) | BFS | no random access |
| `priority_queue` | usually binary heap | none exposed | heap order only | top O(1) | repeated max/min extraction | no decrease-key |
| `string` | contiguous char buffer | random access, contiguous | yes | O(1) by index | parsing, text assembly | many mutating ops can invalidate pointers |
| `bitset<N>` | fixed-size bit sequence | no normal iterators | index order | O(1) bit access | dense boolean flags | size must be compile-time constant |

## 4. Sequence Containers

### `std::array<T, N>`

**Typical implementation:** exactly an aggregate wrapper around `T[N]`.  
**Standard guarantee:** fixed size, contiguous storage, no heap allocation caused by the container itself.

| Function(s) | What it does | Time | Extra space | Notes |
| --- | --- | --- | --- | --- |
| `operator[]` | unchecked indexed access | O(1) | O(1) | UB if out of range |
| `at()` | bounds-checked indexed access | O(1) | O(1) | throws on bad index |
| `front()`, `back()` | first / last element | O(1) | O(1) | requires non-empty array |
| `data()` | pointer to first element | O(1) | O(1) | useful for C APIs |
| `begin()`, `end()`, `rbegin()`, `rend()` | iterator access | O(1) | O(1) | iterators are contiguous/random access |
| `empty()`, `size()`, `max_size()` | capacity queries | O(1) | O(1) | all `constexpr`-friendly |
| `fill(value)` | assign every element | O(n) | O(1) | overwrites all values |
| `swap(other)` | swap element-wise | O(n) | O(1) | unlike most container swaps |

Key differences:

- `at()` vs `operator[]`: `at()` checks bounds; `operator[]` does not.
- `std::array` vs raw array: `std::array` knows its size, works with STL algorithms, and can be copied/assigned as a value.

Key points to remember:

- Iterators and references remain valid for the lifetime of the array object.
- Structural insert/erase does not exist; replace values instead.
- Great for fixed direction vectors, lookup tables, and DP transitions with compile-time size.

### `std::vector<T>`

**Typical implementation:** one contiguous heap buffer with `size` and `capacity`.  
**Standard guarantee:** contiguous storage; growth factor is **not specified**.

| Function(s) | What it does | Time | Extra space | Notes |
| --- | --- | --- | --- | --- |
| `operator[]`, `at()` | indexed access | O(1) | O(1) | `at()` checks bounds |
| `front()`, `back()`, `data()` | endpoint / raw-buffer access | O(1) | O(1) | `data()` is the bridge to arrays/C APIs |
| `begin()`, `end()` etc. | iterator access | O(1) | O(1) | iterators are contiguous/random access |
| `empty()`, `size()`, `capacity()` | size/capacity queries | O(1) | O(1) | `capacity() >= size()` |
| `reserve(n)` | request capacity for at least `n` elements | O(n) if reallocation happens, else O(1) | O(n) temporary if reallocated | does **not** change size |
| `resize(n)` | change logical size | O(abs(new-old)) plus possible reallocation | O(n) temporary if reallocated | may value-initialize appended elements |
| `shrink_to_fit()` | non-binding request to reduce capacity | O(n) if honored | O(n) temporary if reallocated | implementation may ignore |
| `push_back(x)` | append ready-made element | amortized O(1), worst O(n) on reallocation | O(1), or O(n) temporary on reallocation | copy/move into container |
| `emplace_back(args...)` | construct element in place at end | amortized O(1), worst O(n) on reallocation | same as `push_back` | avoids a separate temporary in some cases |
| `pop_back()` | remove last element | O(1) | O(1) | does not reduce capacity |
| `insert(pos, x)` / `insert(pos, count, x)` / `insert(pos, first, last)` | insert before `pos` | O(n + k) | O(k), plus possible reallocation | shifts trailing elements |
| `emplace(pos, args...)` | in-place construction before `pos` | O(n) | O(1), plus possible reallocation | still shifts elements |
| `erase(pos)` / `erase(first, last)` | remove elements and close gap | O(n) | O(1) | moves all trailing elements left |
| `assign(...)` | replace contents wholesale | O(n) | O(n) if reallocation needed | often simpler than clear + inserts |
| `clear()` | erase all elements | O(n) | O(1) | capacity usually stays |
| `swap(other)` | exchange buffers | O(1) | O(1) | iterators remain associated with original buffers, not logical variables |

Iterator / reference invalidation:

- Any reallocation invalidates **all** iterators, pointers, and references.
- Without reallocation:
  - `push_back`/`emplace_back` invalidate `end()`
  - `insert`/`emplace` invalidate iterators/references at or after the insertion point
  - `erase` invalidates iterators/references at or after the erased range
- `clear()` invalidates everything referring to elements.

Key differences:

- `reserve()` vs `resize()`: `reserve()` changes capacity only; `resize()` changes size.
- `push_back()` vs `emplace_back()`: `push_back()` takes an existing object; `emplace_back()` constructs in place from constructor arguments.
- `clear()` vs `shrink_to_fit()`: `clear()` removes elements but usually keeps capacity; `shrink_to_fit()` asks to release unused memory.

Key points to remember:

- Default choice for most interview problems.
- Best cache locality among dynamic sequence containers.
- Pre-`reserve()` when you know approximate final size.
- Never keep raw pointers/iterators across possible reallocation unless you control capacity growth.

### `std::deque<T>`

**Typical implementation:** segmented storage made of blocks plus an index/map of blocks.  
**Standard guarantee:** constant-time random access and efficient insertion/removal at both ends; exact layout is not specified.

| Function(s) | What it does | Time | Extra space | Notes |
| --- | --- | --- | --- | --- |
| `operator[]`, `at()` | indexed access | O(1) | O(1) | one more indirection than vector |
| `front()`, `back()` | endpoint access | O(1) | O(1) | best use case for deque |
| `begin()`, `end()` | iterator access | O(1) | O(1) | random-access iterators, but not contiguous |
| `empty()`, `size()` | capacity queries | O(1) | O(1) | no `capacity()` API |
| `push_front`, `push_back` | add at ends | amortized O(1) | O(1) | may re-map internal blocks |
| `emplace_front`, `emplace_back` | in-place add at ends | amortized O(1) | O(1) | same asymptotics |
| `pop_front`, `pop_back` | remove at ends | O(1) | O(1) | ideal for queues |
| `insert(pos, x)` / `emplace(pos, ...)` | insert in middle | O(n) | O(1) or O(k) | shifts toward nearer end |
| `erase(pos)` / `erase(first, last)` | erase from middle/range | O(n) | O(1) | cheap only at ends |
| `clear()` | erase all elements | O(n) | O(1) | all element references gone |

Iterator / reference invalidation:

- End insertions/removals can invalidate iterators; references to existing elements are usually stable for end growth, but do not rely on iterator stability unless documented.
- Middle insertions/erasures can invalidate all iterators and references.
- `deque::end()` has special behavior: erasing the last element invalidates the past-the-end iterator.

Key differences:

- `deque` vs `vector`: `deque` is better for front operations; `vector` is better for cache locality and contiguous storage.
- `push_front()` exists on `deque`, not on `vector`.

Key points to remember:

- Great for BFS queues and monotonic deque problems.
- Not suitable when you need `data()` or contiguous memory.
- Use it when you truly need both ends; otherwise `vector` is usually simpler and faster.

### `std::list<T>`

**Typical implementation:** doubly linked nodes, each separately allocated.  
**Standard guarantee:** bidirectional iteration, stable iterators/references except for erased elements, efficient splice.

| Function(s) | What it does | Time | Extra space | Notes |
| --- | --- | --- | --- | --- |
| `front()`, `back()` | endpoint access | O(1) | O(1) | no random access |
| `begin()`, `end()` | iterator access | O(1) | O(1) | bidirectional iterators |
| `empty()`, `size()` | capacity queries | O(1) | O(1) | `size()` is required to be O(1) since C++11 |
| `push_front`, `push_back` | add at ends | O(1) | O(1) | node allocation per insert |
| `emplace_front`, `emplace_back` | in-place add at ends | O(1) | O(1) | same asymptotics |
| `insert(pos, x)` / `emplace(pos, ...)` | insert before iterator | O(1) once position is known | O(1) | finding position is still O(n) |
| `erase(pos)` / `erase(first, last)` | erase at iterator / range | O(1) for single known node, O(k) for range | O(1) | other iterators stay valid |
| `splice(...)` | relink nodes from one list to another | O(1) for whole-list or single-node forms, O(k) for range size accounting cases | O(1) | interview-favorite for LRU |
| `remove(value)`, `remove_if(pred)` | erase matching nodes | O(n) | O(1) | unlike algorithm `remove_if`, actually erases |
| `unique()` | erase consecutive duplicates | O(n) | O(1) | only adjacent equal runs |
| `merge(other)` | merge two sorted lists | O(n + m) | O(1) | both lists must already be sorted |
| `sort()` | member sort on linked structure | O(n log n) | O(1) extra pointers | use this, not `std::sort` |
| `reverse()` | reverse links | O(n) | O(1) | no data movement |

Key differences:

- `list::remove_if()` vs `std::remove_if()`: member `remove_if()` actually erases nodes; the algorithm only partitions and needs `erase`.
- `sort()` on `list` is a member because `std::sort` requires random-access iterators.
- `splice()` moves nodes, not values.

Key points to remember:

- Stable iterators/references are the main reason to choose `list`.
- Terrible locality means it often loses to `vector` despite better asymptotic inserts.
- Classic interview use: LRU cache with `list` + `unordered_map<Key, list::iterator>`.

### `std::forward_list<T>`

**Typical implementation:** singly linked nodes.  
**Standard guarantee:** forward iteration only; no `size()`, no back operations.

| Function(s) | What it does | Time | Extra space | Notes |
| --- | --- | --- | --- | --- |
| `before_begin()` | iterator before first element | O(1) | O(1) | required because inserts happen "after" |
| `begin()`, `end()` | iterator access | O(1) | O(1) | forward iterators only |
| `empty()` | emptiness check | O(1) | O(1) | no `size()` |
| `front()` | first element | O(1) | O(1) | no `back()` |
| `push_front`, `emplace_front` | insert at front | O(1) | O(1) | primary fast operation |
| `pop_front()` | remove front | O(1) | O(1) | queue-like only at the front |
| `insert_after(pos, x)` / `emplace_after(pos, ...)` | insert after iterator | O(1) once position known | O(1) | there is no plain `insert` |
| `erase_after(pos)` / `erase_after(first, last)` | erase after iterator / range | O(1) or O(k) | O(1) | only erased elements invalidate |
| `remove(value)`, `remove_if(pred)` | erase matching nodes | O(n) | O(1) | like `list`, these really erase |
| `unique()`, `merge()`, `sort()`, `reverse()`, `splice_after()` | linked-list special ops | O(n) or O(n log n) for sort | O(1) | `splice_after()` is the singly-linked analog of `splice()` |

Key differences:

- `insert_after()` / `erase_after()` exist because in a singly linked list you can only relink after a known node.
- `forward_list` vs `list`: smaller node overhead, but fewer features and harder ergonomics.

Key points to remember:

- Rare in interviews unless the problem specifically models singly linked lists.
- The absence of `size()` is intentional; computing it requires traversal.
- Great as a teaching tool for pointer/link reasoning, not usually as your first STL choice.

## 5. Ordered Associative Containers

**Typical implementation:** usually red-black trees.  
**Standard guarantee:** keys stay ordered under a strict weak ordering; search/insert/erase are logarithmic.

### `std::set<Key>`

Stores **unique** keys in sorted order.

| Function(s) | What it does | Time | Extra space | Notes |
| --- | --- | --- | --- | --- |
| `begin()`, `end()`, `rbegin()`, `rend()` | iterate in sorted order | O(1) | O(1) | bidirectional iterators |
| `empty()`, `size()` | capacity queries | O(1) | O(1) | `size()` is exact |
| `insert(value)` | insert if key absent | O(log n) | O(1) | returns `{iterator, bool}` |
| `insert(first, last)` | range insertion | O(k log(n + k)) | O(1) | sorted input may optimize in practice |
| `emplace(args...)`, `emplace_hint(hint, args...)` | in-place insertion | O(log n), or amortized constant near correct hint | O(1) | hint helps only if accurate |
| `erase(iterator)` | erase known node | amortized O(1) | O(1) | tree rebalancing is hidden by standard complexity wording |
| `erase(key)` | erase matching key | O(log n) | O(1) | returns `0` or `1` |
| `erase(first, last)` | erase range | O(log n + k) | O(1) | good for interval cleanup |
| `find(key)`, `contains(key)` | lookup key | O(log n) | O(1) | `contains` is C++20 |
| `count(key)` | count matches | O(log n) | O(1) | only `0` or `1` for `set` |
| `lower_bound(key)` | first element `>= key` | O(log n) | O(1) | key tool for ordered queries |
| `upper_bound(key)` | first element `> key` | O(log n) | O(1) | pair with `lower_bound` |
| `equal_range(key)` | `{lower_bound, upper_bound}` | O(log n) | O(1) | size of range is `0` or `1` here |
| `extract(key/it)` | detach node without destroying value | O(log n) or amortized O(1) by iterator | O(1) | advanced API, useful for key mutation |
| `merge(other)` | transfer non-conflicting nodes from another set | O(k log(n + 1)) | O(1) | source keeps duplicates that cannot insert |

Key points to remember:

- Iterators/references stay valid across inserts; only erased elements are invalidated.
- `set` uniqueness is based on comparator equivalence, not `==`.
- Use when you need sorted order, predecessor/successor queries, or range boundaries.

### `std::multiset<Key>`

Stores sorted keys and **allows duplicates**.

| Function(s) | What it does | Time | Extra space | Notes |
| --- | --- | --- | --- | --- |
| `insert`, `emplace`, `emplace_hint` | insert allowing duplicates | O(log n) | O(1) | no "already present" failure |
| `erase(iterator)` | erase one occurrence by iterator | amortized O(1) | O(1) | safest way to erase exactly one |
| `erase(key)` | erase all equivalent keys | O(log n + count(key)) | O(1) | common interview trap |
| `count(key)` | number of equal keys | O(log n + count(key)) | O(1) | may be larger than `1` |
| `find(key)` | one matching occurrence | O(log n) | O(1) | not necessarily first among duplicates |
| `lower_bound`, `upper_bound`, `equal_range` | locate duplicate range | O(log n) | O(1) | `equal_range` is often the most direct API |

Key differences from `set`:

- Duplicates are allowed.
- `insert` always inserts.
- `erase(key)` removes **all** equal keys.

Key points to remember:

- Best STL choice when you need a sorted multiset abstraction.
- Sliding-window median and "keep two balanced halves" solutions often use `multiset`.

### `std::map<Key, T>`

Stores **unique** keys mapped to values in sorted order.

| Function(s) | What it does | Time | Extra space | Notes |
| --- | --- | --- | --- | --- |
| `operator[](key)` | access mapped value, inserting default if missing | O(log n) | O(1) | only on non-const `map` |
| `at(key)` | access mapped value without insertion | O(log n) | O(1) | throws if key missing |
| `insert({k, v})`, `emplace(...)` | insert if absent | O(log n) | O(1) | `insert` does not overwrite existing key |
| `insert_or_assign(key, value)` | insert or overwrite mapped value | O(log n) | O(1) | C++17; good replacement for `m[k] = v` when construction matters |
| `try_emplace(key, args...)` | insert only if key absent; construct value lazily | O(log n) | O(1) | avoids constructing mapped value on collision |
| `erase(iterator)` / `erase(key)` / `erase(range)` | erase entries | amortized O(1), O(log n), O(log n + k) | O(1) | same invalidation rules as `set` |
| `find`, `contains`, `count` | key lookup | O(log n) | O(1) | `count` is `0` or `1` |
| `lower_bound`, `upper_bound`, `equal_range` | ordered key queries | O(log n) | O(1) | essential for interval-style problems |
| `extract`, `merge` | node-handle transfers | logarithmic / amortized O(1) by iterator | O(1) | advanced but standard |

Key differences:

- `operator[]` vs `at()`: `operator[]` inserts missing keys; `at()` does not.
- `insert` vs `insert_or_assign` vs `try_emplace`:
  - `insert`: keep old value if key exists
  - `insert_or_assign`: overwrite old value if key exists
  - `try_emplace`: do nothing if key exists, and avoid constructing mapped value unnecessarily

Key points to remember:

- Use `find`/`contains` in read-only lookups; avoid accidental insertion through `operator[]`.
- Tree order makes `map` more predictable than `unordered_map` for worst-case complexity and range queries.

### `std::multimap<Key, T>`

Stores sorted key-value pairs and **allows duplicate keys**.

| Function(s) | What it does | Time | Extra space | Notes |
| --- | --- | --- | --- | --- |
| `insert`, `emplace`, `emplace_hint` | insert pair even if key already exists | O(log n) | O(1) | every insert succeeds |
| `erase(iterator)` | erase one entry | amortized O(1) | O(1) | erase-one pattern |
| `erase(key)` | erase all entries for key | O(log n + count(key)) | O(1) | removes whole equivalence class |
| `find(key)` | one matching entry | O(log n) | O(1) | not enough if you need all duplicates |
| `count(key)` | number of entries for key | O(log n + count(key)) | O(1) | can be many |
| `lower_bound`, `upper_bound`, `equal_range` | locate duplicate-key interval | O(log n) | O(1) | `equal_range` is the normal API |

Key differences from `map`:

- No `operator[]`.
- Duplicate keys are allowed.
- `equal_range` is often the most practical retrieval API.

Key points to remember:

- Usually less common than `map<Key, vector<T>>` in interviews, but still useful when you want duplicate keys kept in sorted global order.

## 6. Unordered Associative Containers

**Typical implementation:** bucket array plus per-element nodes or equivalent hashed storage.  
**Standard guarantee:** bucket interface exists; average O(1) lookup/insert/erase, worst O(n). Exact collision resolution is not mandated.

### Shared bucket-management APIs

These matter across all unordered containers:

| Function | What it does | Time | Notes |
| --- | --- | --- | --- |
| `bucket_count()` | number of buckets | O(1) | not number of elements |
| `bucket(key)` | bucket index for key | O(1) average | useful for debugging, rarely for interviews |
| `bucket_size(i)` | number of elements in bucket `i` | O(bucket size) | collision-inspection tool |
| `load_factor()` | `size() / bucket_count()` | O(1) | average bucket occupancy |
| `max_load_factor()` | read/set threshold for rehashing | O(1) | tuning knob |
| `rehash(n)` | force bucket count to at least `n` | average O(n), worst O(n^2) | invalidates all iterators |
| `reserve(n)` | ensure buckets for at least `n` elements | average O(n), worst O(n^2) | best practice before heavy insertion |

### `std::unordered_set<Key>`

Stores unique keys with hash-based lookup.

| Function(s) | What it does | Average | Worst | Extra space | Notes |
| --- | --- | --- | --- | --- | --- |
| `insert(value)`, `emplace(args...)` | insert key if absent | O(1) | O(n) | O(1) | may trigger rehash |
| `erase(iterator)` / `erase(key)` | erase one known element / matching key | O(1) | O(n) | O(1) | by key returns `0` or `1` |
| `find(key)`, `contains(key)` | membership lookup | O(1) | O(n) | O(1) | `contains` is C++20 |
| `count(key)` | count matches | O(1) | O(n) | O(1) | only `0` or `1` here |
| `equal_range(key)` | matching range | O(1) | O(n) | O(1) | range size is `0` or `1` for `unordered_set` |
| `extract(key/it)`, `merge(other)` | advanced node operations | O(1) average or O(n) worst | O(n) | O(1) | same node-handle idea as tree containers |

Iterator / reference invalidation:

- Rehash invalidates **all iterators**.
- Rehash invalidates iterators, but references and pointers to existing elements remain valid unless the element itself is erased.
- Erasing an element invalidates only iterators/references to that erased element.

Key points to remember:

- Best choice for "seen?", deduplication, and membership tests when order does not matter.
- Pre-`reserve()` before inserting many elements.
- Worst-case O(n) matters in adversarial or weak-hash settings.

### `std::unordered_multiset<Key>`

Hash-based multiset allowing duplicate keys.

| Function(s) | What it does | Average | Worst | Extra space | Notes |
| --- | --- | --- | --- | --- | --- |
| `insert`, `emplace` | insert even if duplicate exists | O(1) | O(n) | O(1) | every insertion succeeds |
| `erase(iterator)` | erase one occurrence | O(1) | O(n) | O(1) | iterator form erases exactly one |
| `erase(key)` | erase all equivalent keys | O(count(key)) to O(n) | O(n) | O(1) | behavior difference is interview-relevant |
| `count(key)` | number of matching keys | O(count(key)) average | O(n) | O(1) | not constant if many duplicates |
| `find(key)` / `equal_range(key)` | locate one or all matches | O(1) average | O(n) | O(1) | use `equal_range` for full bucket-range walk |

Key points to remember:

- Less common in interviews than `unordered_map<Key, int>` for frequency counting.
- Use only when you truly want duplicate keys stored as separate elements.

### `std::unordered_map<Key, T>`

Hash table from key to mapped value.

| Function(s) | What it does | Average | Worst | Extra space | Notes |
| --- | --- | --- | --- | --- | --- |
| `operator[](key)` | access value, inserting default if absent | O(1) | O(n) | O(1) | common counting/memoization API |
| `at(key)` | access without insertion | O(1) | O(n) | O(1) | throws if missing |
| `insert`, `emplace` | insert only if key absent | O(1) | O(n) | O(1) | may still construct pair before failure |
| `insert_or_assign(key, value)` | insert or overwrite | O(1) | O(n) | O(1) | C++17 |
| `try_emplace(key, args...)` | insert only if absent; build value lazily | O(1) | O(n) | O(1) | often best for expensive mapped types |
| `erase(iterator)` / `erase(key)` | erase one or by key | O(1) | O(n) | O(1) | key erase returns `0` or `1` |
| `find`, `contains`, `count` | key lookup | O(1) | O(n) | O(1) | `count` is `0` or `1` |
| `equal_range(key)` | matching range | O(1) | O(n) | O(1) | range size at most `1` here |

Key differences:

- `unordered_map` vs `map`: average O(1) vs O(log n), but no order and weaker worst-case guarantees.
- `operator[]` vs `at()`: same semantic difference as `map`.
- `try_emplace` is the API to remember when mapped-value construction is expensive.

Key points to remember:

- This plus `vector` is the most common interview container pair.
- `reserve()` early when you know the approximate number of keys.
- Rehash can silently invalidate iterators in loops that insert.

### `std::unordered_multimap<Key, T>`

Hash-based map allowing duplicate keys.

| Function(s) | What it does | Average | Worst | Extra space | Notes |
| --- | --- | --- | --- | --- | --- |
| `insert`, `emplace` | insert key-value pair even if key exists | O(1) | O(n) | O(1) | every insertion succeeds |
| `erase(iterator)` | erase one entry | O(1) | O(n) | O(1) | single-erase form |
| `erase(key)` | erase all entries with key | O(count(key)) average | O(n) | O(1) | removes full equivalence class |
| `count(key)` | count entries for key | O(count(key)) average | O(n) | O(1) | can be large |
| `find(key)` / `equal_range(key)` | locate one / all matching entries | O(1) average | O(n) | O(1) | `equal_range` is the all-values API |

Key points to remember:

- Rare in interviews; `unordered_map<Key, vector<T>>` is often easier to reason about.

## 7. Container Adaptors

Adaptors expose a restricted interface on top of another container. They do **not** expose iterators.

### `std::stack<T, Container = std::deque<T>>`

**Typical implementation:** container adaptor over `deque` by default.  
**Standard requirement:** underlying container must support `back()`, `push_back()`, and `pop_back()`.

| Function(s) | What it does | Time | Extra space | Notes |
| --- | --- | --- | --- | --- |
| `top()` | access top element | O(1) | O(1) | top is the most recently pushed |
| `empty()`, `size()` | capacity queries | O(1) | O(1) | inherited semantics from underlying container |
| `push(x)`, `emplace(args...)` | add element to top | O(1) amortized for default `deque` | O(1) | exact cost follows underlying container |
| `pop()` | remove top | O(1) | O(1) | returns `void`; call `top()` first if needed |
| `swap(other)` | exchange contents | O(1) | O(1) | same as underlying swap |

Key points to remember:

- Default backing container is `deque`, not `vector`.
- No iteration, no searching, no random access.
- Use for DFS, parentheses matching, monotonic stack patterns, and explicit call-stack simulation.

### `std::queue<T, Container = std::deque<T>>`

**Typical implementation:** adaptor over `deque` by default.  
**Standard requirement:** underlying container must support `front()`, `back()`, `push_back()`, and `pop_front()`.

| Function(s) | What it does | Time | Extra space | Notes |
| --- | --- | --- | --- | --- |
| `front()`, `back()` | access next / newest element | O(1) | O(1) | both ends visible |
| `empty()`, `size()` | capacity queries | O(1) | O(1) | standard queue APIs |
| `push(x)`, `emplace(args...)` | enqueue at back | O(1) amortized for default `deque` | O(1) | underlying-dependent |
| `pop()` | dequeue from front | O(1) | O(1) | returns `void` |
| `swap(other)` | exchange contents | O(1) | O(1) | same as underlying swap |

Key points to remember:

- Canonical STL choice for BFS and level-order traversal.
- If you need to inspect or reorder interior elements, `queue` is the wrong abstraction.

### `std::priority_queue<T, Container = std::vector<T>, Compare = std::less<T>>`

**Typical implementation:** binary heap stored in a random-access container, usually `vector`.  
**Standard guarantee:** `top()` gives the highest-priority element according to the comparator contract.

| Function(s) | What it does | Time | Extra space | Notes |
| --- | --- | --- | --- | --- |
| `top()` | inspect highest-priority element | O(1) | O(1) | max element by default |
| `empty()`, `size()` | capacity queries | O(1) | O(1) | standard adaptor API |
| `push(x)` | insert and reheapify | O(log n) | O(1) amortized | may reallocate underlying container |
| `emplace(args...)` | in-place insert then reheapify | O(log n) | O(1) amortized | same asymptotics |
| `pop()` | remove top and reheapify | O(log n) | O(1) | no return value |
| `swap(other)` | exchange heaps | O(1) | O(1) | comparator and container swap |

Key differences:

- Default is a **max-heap**.
- `Compare` is easy to misread: using `std::greater<T>` makes a min-heap.
- There is no decrease-key or iterator access; Dijkstra commonly pushes duplicate states and skips stale ones later.
- C++23 adds `push_range(range)` for batch insertion.

Key points to remember:

- Underlying container must provide random-access iterators plus `front`, `push_back`, `pop_back`.
- Best for repeated "take current best" operations: Dijkstra, `k`-largest, merge-k-sorted-lists.

## 8. `std::string` / `std::basic_string`

`std::string` is `std::basic_string<char>`.

**Typical implementation:** contiguous dynamic char buffer, often with SSO.  
**Standard guarantee:** contiguous storage and a null terminator at `data() + size()`.

| Function(s) | What it does | Time | Extra space | Notes |
| --- | --- | --- | --- | --- |
| `operator[]`, `at()` | indexed character access | O(1) | O(1) | same checked vs unchecked split as `vector` |
| `front()`, `back()` | first / last char | O(1) | O(1) | requires non-empty string |
| `data()`, `c_str()` | pointer to underlying chars | O(1) | O(1) | `c_str()` emphasizes C-string use |
| `begin()`, `end()` | iterator access | O(1) | O(1) | contiguous/random-access iterators |
| `empty()`, `size()`, `length()`, `capacity()` | size/capacity queries | O(1) | O(1) | `size()` and `length()` are synonyms |
| `reserve(n)` | reserve capacity | O(n) if reallocated | O(n) temporary if reallocated | avoids repeated growth |
| `resize(n)` | change length | O(abs(new-old)) plus possible reallocation | O(n) temporary if reallocated | appended chars value-initialized unless overload used |
| `shrink_to_fit()` | non-binding request to reduce capacity | O(n) if honored | O(n) temporary | same caveat as vector |
| `clear()` | erase all chars | O(n) | O(1) | capacity often remains |
| `push_back(ch)`, `pop_back()` | append/remove one char | amortized O(1) / O(1) | O(1) | simple parser helper |
| `append(...)`, `operator+=` | append chars/string/view | amortized O(k) | O(1) or O(k) on reallocation | `+=` is usually the most readable |
| `insert(pos, ...)` | insert chars before position | O(n + k) | O(k), plus reallocation if needed | shifts suffix |
| `erase(pos, count)` / `erase(it)` / `erase(first, last)` | erase chars | O(n) | O(1) | compacts the suffix |
| `replace(pos, count, ...)` | overwrite a substring with new text | O(n + k) | O(k) | think erase + insert |
| `substr(pos, count)` | make substring copy | O(k) | O(k) | returns a new string |
| `copy(dest, count, pos)` | copy chars out to raw buffer | O(k) | O(1) | does not append null terminator |
| `find`, `rfind` | find substring from left/right | O(n * m) worst-case | O(1) | implementations may optimize |
| `find_first_of`, `find_last_of` | find first/last char from a set | O(n * m) worst-case | O(1) | useful in tokenization |
| `find_first_not_of`, `find_last_not_of` | find first/last char not in a set | O(n * m) worst-case | O(1) | common trim helper |
| `compare(...)` | lexicographic compare | O(min(n, m)) | O(1) | returns negative/zero/positive |
| `starts_with`, `ends_with` | prefix/suffix tests | O(k) | O(1) | C++20 |
| `contains` | substring / char containment test | O(n) typical | O(1) | C++23 |

Iterator / pointer invalidation:

- Per cppreference, many non-const operations may invalidate pointers, references, and iterators.
- Never hold `char* p = s.data()` across mutation unless you know the operation cannot reallocate or shift.

Key differences:

- `data()` vs `c_str()`: both expose contiguous storage; `c_str()` is the traditional "const C string" name.
- `reserve()` vs `resize()`: same semantic split as `vector`.
- `append()` / `operator+=` vs `push_back()`: the first adds a sequence, the second a single char.
- `substr()` copies; `std::string_view` would be the non-owning alternative, but it is not covered here as a container.

Key points to remember:

- `std::string` is not formally classified as a standard container, but behaves like one for most interview work.
- SSO is common but never rely on it for correctness or complexity guarantees.
- Prefer `string_view` for non-owning read-only views when lifetime is safe.

## 9. Bitset

Fixed-size compile-time-known sequence of bits.

**Typical implementation:** packed machine words or equivalent internal bit blocks.  
**Standard guarantee:** fixed size known at compile time; efficient bitwise operations. Exact word layout is unspecified.

| Function(s) | What it does | Time | Extra space | Notes |
| --- | --- | --- | --- | --- |
| `operator[](pos)` | read/write bit proxy | O(1) | O(1) | non-const returns proxy, const returns bool-like value |
| `test(pos)` | checked bit test | O(1) | O(1) | throws on bad index |
| `set()`, `set(pos, value)` | set all bits or one bit | O(N / word_bits) or O(1) | O(1) | bulk form touches all storage |
| `reset()`, `reset(pos)` | clear all bits or one bit | O(N / word_bits) or O(1) | O(1) | bulk clear is common |
| `flip()`, `flip(pos)` | toggle all bits or one bit | O(N / word_bits) or O(1) | O(1) | handy for mask complements |
| `all()`, `any()`, `none()` | aggregate bit predicates | O(N / word_bits) | O(1) | often vectorized efficiently |
| `count()` | number of set bits | O(N / word_bits) | O(1) | usually uses popcount-like optimization |
| `size()` | number of bits | O(1) | O(1) | compile-time constant reflected at runtime |
| bitwise AND / OR / XOR / NOT operators | combine masks | O(N / word_bits) | O(N / word_bits) for returned copy | dense mask operations |
| shifts `<<`, `>>` and compound forms | shift bits | O(N / word_bits) | copy for non-compound forms | useful for DP and state masks |
| `to_ulong()`, `to_ullong()` | convert to integer | O(N / word_bits) | O(1) | throws on overflow |
| `to_string()` | convert to string of `0/1` chars | O(N) | O(N) | nice for debugging |

Key points to remember:

- Excellent when bit count is known at compile time and compactness matters.
- More compact and often faster than `vector<bool>` for many mask-style tasks.
- Not a drop-in dynamic bitset.

## 10. Iterator Categories

| Type | Iterator category |
| --- | --- |
| `array` | contiguous, random access |
| `vector` | contiguous, random access |
| `deque` | random access |
| `list` | bidirectional |
| `forward_list` | forward |
| `set`, `multiset`, `map`, `multimap` | bidirectional |
| `unordered_set`, `unordered_multiset`, `unordered_map`, `unordered_multimap` | forward at least |
| `string` | contiguous, random access |
| `bitset` | no standard container iterators |
| `stack`, `queue`, `priority_queue` | iterators not exposed |

### Why this matters

- `std::sort` requires random-access iterators, so it works on `vector`, `deque`, `array`, and `string`, but not `list`, `forward_list`, or associative containers.
- `std::reverse` needs bidirectional iterators, so it does not work on `forward_list`.
- Ordered tree containers provide bidirectional traversal in sorted order.

## 11. Common Function Differences

### `push_back` vs `emplace_back`

- `push_back(obj)` inserts an existing object.
- `emplace_back(args...)` constructs the element in place.
- Complexity is the same.
- `emplace_back` may avoid a temporary, but only helps when constructor arguments are natural and the type is expensive to move/copy.

### `insert` vs `emplace`

- `insert` takes a ready-made value object.
- `emplace` forwards constructor arguments.
- For associative containers, `emplace` can still perform work even when insertion fails; it is not "always faster."

### `insert` vs `try_emplace` vs `insert_or_assign`

- `insert`: do not overwrite existing mapped value.
- `try_emplace`: insert only if absent and construct mapped value lazily.
- `insert_or_assign`: insert if absent, otherwise overwrite.

### `find` vs `count` vs `contains`

- `find` gives an iterator, so you can access or erase the element efficiently.
- `count` is most useful in multi-containers; on unique-key containers it is just `0` or `1`.
- `contains` is the clean boolean membership test in C++20.

### `lower_bound` vs `upper_bound` vs `equal_range`

- `lower_bound(x)`: first element not less than `x` (`>= x`)
- `upper_bound(x)`: first element greater than `x` (`> x`)
- `equal_range(x)`: both together; ideal for duplicate-key containers

### `operator[]` vs `at()`

- `operator[]` does unchecked access on sequence containers.
- On `map`/`unordered_map`, `operator[]` also inserts default values for missing keys.
- `at()` checks presence/bounds and never inserts.

### `reserve` vs `resize`

- `reserve(n)` changes capacity only.
- `resize(n)` changes the number of elements.
- Interview bug: calling `reserve(n)` and then writing `v[i]` for `i < n` is still invalid if `size() == 0`.

### `clear` vs erase-remove idiom vs container-member removal

- `clear()` erases everything.
- On `vector`/`deque`/`string`, use `erase(remove_if(...), end())`.
- On `list`/`forward_list`, prefer member `remove` / `remove_if`, because they really unlink nodes.

### `rehash` vs `reserve` on unordered containers

- `rehash(buckets)` talks in bucket counts.
- `reserve(elements)` talks in expected element count and derives bucket count from `max_load_factor()`.
- Prefer `reserve()` for normal usage.

## 12. Algorithm And Numeric Cheat Sheet

These are not containers, but they are the standard-library utilities most often used with the containers above.

| Utility | Best with | What it does | Time | Notes |
| --- | --- | --- | --- | --- |
| `sort(first, last)` | random-access ranges | sort ascending by `<` | O(n log n) | use comparator overload for custom ordering |
| `stable_sort(...)` | random-access ranges | stable sort | O(n log n) | usually more memory than `sort` |
| `binary_search(...)` | sorted ranges | boolean membership test | O(log n) | no iterator returned |
| `lower_bound`, `upper_bound` | sorted ranges | insertion-point search | O(log n) | works on iterators, not just tree containers |
| `nth_element(...)` | random-access ranges | place nth element as if sorted | O(n) average | useful for selection problems |
| `partial_sort(...)` | random-access ranges | smallest/largest prefix sorted | O(n log k) | good for top-k |
| `make_heap`, `push_heap`, `pop_heap` | random-access ranges | heap primitives | O(n), O(log n), O(log n) | lower-level than `priority_queue` |
| `reverse(...)`, `rotate(...)` | bidirectional / forward depending on algo | reorder sequences | O(n) | interview array/string utility |
| `remove`, `remove_if` | sequence containers + strings | partition unwanted elements to end | O(n) | pair with `erase` |
| `unique(...)` | sorted or grouped ranges | remove adjacent duplicates logically | O(n) | pair with `erase` |
| `accumulate(...)` | numeric folds | left fold / sum | O(n) | header `<numeric>` |
| `iota(...)` | writable ranges / arrays | fill increasing values | O(n) | header `<numeric>` |
| `partial_sum(...)`, `inclusive_scan(...)`, `exclusive_scan(...)` | numeric ranges | prefix computations | O(n) | scans are interview gold |
| `gcd(a, b)`, `lcm(a, b)` | integers | number-theory helpers | O(log min(a, b)) | `<numeric>` |

### Useful pattern

- Min-heap with `priority_queue`: `std::priority_queue<T, std::vector<T>, std::greater<T>>`

## 13. Interview-Focused Q&A

### Why is `vector` usually preferred over `list` even though `list` has O(1) insertion/erasure?

Because interview code usually cares more about cache locality, lower memory overhead, and fast iteration than about arbitrary-position insertion. `list` wins only when you already have iterators to nodes and need stable references or splice-style relinking.

### When should I choose `deque` over `vector`?

Choose `deque` when you need efficient `push_front`/`pop_front` in addition to back operations. If you only append and index, `vector` is usually the better default.

### `map` or `unordered_map`?

- `map`: sorted keys, range queries, deterministic O(log n), predecessor/successor logic.
- `unordered_map`: average O(1) lookup/update, better for plain frequency tables and memoization.

### Why can `unordered_map` degrade badly?

Hash collisions can force many keys into the same bucket, turning average O(1) operations into O(n) worst-case behavior. Bad or adversarial inputs make this relevant.

### Why does `list::size()` have a historical footnote?

Before C++11, constant-time `size()` was not required for `list`. Since C++11, `list::size()` is required to be O(1).

### Why does `priority_queue` not support decrease-key?

The adaptor intentionally exposes a minimal heap interface. In Dijkstra, the standard workaround is to push a new pair `(better_distance, node)` and ignore stale entries when popped.

### Why can `operator[]` on `map` or `unordered_map` be dangerous?

Because it inserts missing keys with default-constructed mapped values. That is convenient for counting, but buggy for read-only membership checks.

### What is the standard LRU-cache STL design?

`std::list<std::pair<Key, Value>>` for recency order plus `std::unordered_map<Key, list::iterator>` for O(1) lookup and node moves via `splice`.

### When do I use `multiset` instead of `priority_queue`?

Use `multiset` when you need ordered iteration, deletion of arbitrary elements, predecessor/successor queries, or duplicate-aware window maintenance. Use `priority_queue` when you only need repeated access to the best element.

### `push_back` or `emplace_back` in interviews?

Use whichever is clearer. Prefer `emplace_back` when you naturally have constructor arguments; prefer `push_back` when you already have the object.

### Is `std::string` guaranteed to use SSO?

No. Many implementations do, but the standard does not require it.

### Why does `reserve()` matter on vectors and unordered containers?

It reduces repeated reallocations/rehashes, which improves constant factors and prevents invalidation surprises during bulk insertion.

## 14. References

- [cppreference: Containers library](https://en.cppreference.com/w/cpp/container)
- [cppreference: `std::vector`](https://en.cppreference.com/w/cpp/container/vector)
- [cppreference: `std::deque`](https://en.cppreference.com/w/cpp/container/deque)
- [cppreference: `std::list`](https://en.cppreference.com/w/cpp/container/list)
- [cppreference: `std::forward_list`](https://en.cppreference.com/w/cpp/container/forward_list)
- [cppreference: `std::set`](https://en.cppreference.com/w/cpp/container/set)
- [cppreference: `std::map`](https://en.cppreference.com/w/cpp/container/map)
- [cppreference: `std::unordered_map`](https://en.cppreference.com/w/cpp/container/unordered_map)
- [cppreference: `std::priority_queue`](https://en.cppreference.com/w/cpp/container/priority_queue)
- [cppreference: `std::basic_string`](https://en.cppreference.com/w/cpp/string/basic_string)
- [cppreference: `std::bitset`](https://en.cppreference.com/w/cpp/utility/bitset)
