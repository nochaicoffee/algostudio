# C++ Complete DSA and Interview Reference

A comprehensive, single-document reference for C++ data structures, algorithms, and interview preparation — from beginner to advanced.

> All code targets **C++20** unless noted. Compile with `g++ -std=c++20 -O2 -Wall`.

---

## Table of Contents

- [1. C++ Foundations](#1-c-foundations)
  - [1.1 Compilation Model](#11-compilation-model)
  - [1.2 Headers, Include Guards, and #pragma once](#12-headers-include-guards-and-pragma-once)
  - [1.3 Namespaces](#13-namespaces)
  - [1.4 Basic Syntax and Program Structure](#14-basic-syntax-and-program-structure)
  - [1.5 Types](#15-types)
  - [1.6 References vs Pointers — Basics](#16-references-vs-pointers--basics)
  - [1.7 const and constexpr](#17-const-and-constexpr)
  - [1.8 Control Flow](#18-control-flow)
  - [1.9 Functions](#19-functions)
- [2. Memory Management](#2-memory-management)
  - [2.1 Stack vs Heap](#21-stack-vs-heap)
  - [2.2 Pointers Deep Dive](#22-pointers-deep-dive)
  - [2.3 References Deep Dive](#23-references-deep-dive)
  - [2.4 Ownership Concept](#24-ownership-concept)
  - [2.5 new / delete](#25-new--delete)
  - [2.6 RAII](#26-raii-resource-acquisition-is-initialization)
  - [2.7 Smart Pointers](#27-smart-pointers)
  - [2.8 Lifetime Issues](#28-lifetime-issues)
  - [2.9 Copy Semantics](#29-copy-semantics)
  - [2.10 Move Semantics](#210-move-semantics)
  - [2.11 Rule of 3/5/0](#211-rule-of-3-rule-of-5-rule-of-0)
- [3. OOP Concepts](#3-oop-concepts)
  - [3.1 Classes and Objects](#31-classes-and-objects-struct-vs-class)
  - [3.2 Access Specifiers](#32-access-specifiers)
  - [3.3 Constructors](#33-constructors)
  - [3.4 Destructors](#34-destructors)
  - [3.5 Encapsulation](#35-encapsulation)
  - [3.6 Abstraction](#36-abstraction)
  - [3.7 Inheritance](#37-inheritance)
  - [3.8 Polymorphism](#38-polymorphism)
  - [3.9 virtual, override, final](#39-virtual-override-final)
  - [3.10 Abstract Classes and Interfaces](#310-abstract-classes-and-interfaces)
  - [3.11 Composition vs Inheritance](#311-composition-vs-inheritance)
  - [3.12 Operator Overloading](#312-operator-overloading)
  - [3.13 this Pointer, Static Members, Friend](#313-this-pointer-static-members-friend-functions)
  - [3.14 Diamond Problem and Virtual Inheritance](#314-diamond-problem-and-virtual-inheritance)
  - [3.15 Object Slicing](#315-object-slicing)
  - [3.16 vtable / vptr](#316-vtable--vptr)
  - [3.17 Practical OOP Design Advice](#317-practical-oop-design-advice-for-interviews)
- [4. C++ Standard Library for DSA](#4-c-standard-library-for-dsa)
  - [Reading Guide](#reading-guide)
  - [Shared API Families](#shared-api-families)
  - [Quick Selection Cheat Sheet](#quick-selection-cheat-sheet)
  - [Containers](#containers)
    - [Sequence Containers](#sequence-containers)
    - [Associative Containers (Ordered)](#associative-containers-ordered)
    - [Unordered Containers](#unordered-containers)
    - [Container Adaptors](#container-adaptors)
    - [Utility Types](#utility-types)
  - [Common Function Differences](#common-function-differences)
  - [Algorithms](#algorithms)
    - [Sorting](#sorting)
    - [Searching](#searching)
    - [Modifying Algorithms](#modifying-algorithms)
    - [Min/Max](#minmax)
    - [Numeric Algorithms](#numeric-algorithms)
    - [Predicate Algorithms](#predicate-algorithms)
    - [Set Operations](#set-operations-on-sorted-ranges)
    - [Heap Algorithms](#heap-algorithms)
  - [Iterator Categories and Requirements](#iterator-categories-and-requirements)
  - [Lambda and Comparator Patterns](#lambda-and-comparator-patterns)
  - [Strings](#strings)
  - [Numerics and Utilities](#numerics-and-utilities)
  - [Interview-Focused Q&A](#interview-focused-qa)
- [5. Templates and Generic Programming](#5-templates-and-generic-programming)
  - [5.1 Function Templates](#51-function-templates)
  - [5.2 Class Templates](#52-class-templates)
  - [5.3 Template Specialization](#53-template-specialization)
  - [5.4 Variadic Templates](#54-variadic-templates)
  - [5.5 Type Traits](#55-type-traits-intro)
  - [5.6 Concepts (C++20)](#56-concepts-c20)
- [6. Error Handling, Debugging, and Tooling](#6-error-handling-debugging-and-tooling)
  - [6.1 Exceptions](#61-exceptions)
  - [6.2 Exception Safety Guarantees](#62-exception-safety-guarantees)
  - [6.3 Return-Based Error Handling](#63-return-based-error-handling)
  - [6.4 Assertions](#64-assertions)
  - [6.5 Sanitizers](#65-sanitizers)
  - [6.6 Debugging Strategy](#66-debugging-strategy)
  - [6.7 Common Compile Flags](#67-common-compile-flags)
- [7. Concurrency Basics](#7-concurrency-basics)
  - [7.1 std::thread](#71-stdthread)
  - [7.2 Mutex and Locks](#72-mutex-and-locks)
  - [7.3 Deadlock](#73-deadlock)
  - [7.4 Atomics](#74-atomics)
  - [7.5 std::async and std::future](#75-stdasync-and-stdfuture)
  - [7.6 Thread Safety of STL Containers](#76-thread-safety-of-stl-containers)
  - [7.7 When to Avoid Concurrency](#77-when-to-avoid-concurrency)
- [8. Performance and Optimization for DSA](#8-performance-and-optimization-for-dsa)
  - [8.1 Big-O and Constant Factors](#81-big-o-and-constant-factors)
  - [8.2 Cache Locality](#82-cache-locality)
  - [8.3 Passing Conventions](#83-passing-conventions--performance-implications)
  - [8.4 Move Semantics and RVO](#84-move-semantics-and-rvo)
  - [8.5 Fast I/O Patterns](#85-fast-io-patterns)
  - [8.6 Reserve and Resize](#86-reserve-and-resize)
  - [8.7 Avoiding Allocations in Hot Loops](#87-avoiding-allocations-in-hot-loops)
  - [8.8 Compiler Optimization Levels](#88-compiler-optimization-levels)
- [9. Practical DSA-in-C++ Playbook](#9-practical-dsa-in-c-playbook)
  - [9.1 Competitive Programming Template](#91-competitive-programming-template)
  - [9.2 Container Selection Guide](#92-container-selection-guide)
  - [9.3 Common DSA Patterns in C++](#93-common-dsa-patterns-in-c)
  - [9.4 Pitfalls Checklist](#94-pitfalls-checklist-before-submitting)
- [10. C++ Interview Questions and Answers](#10-c-interview-questions-and-answers)
  - [Fundamentals](#fundamentals-q1q12)
  - [Memory Management](#memory-management-q13q24)
  - [OOP](#oop-q25q42)
  - [STL and Containers](#stl-and-containers-q43q58)
  - [Algorithms and Problem Solving](#algorithms-and-problem-solving-q59q68)
  - [Templates](#templates-q69q74)
  - [Concurrency](#concurrency-q75q78)
  - [Debugging and Best Practices](#debugging-and-best-practices-q79q85)

---


# 1. C++ Foundations

## 1.1 Compilation Model

C++ is a **compiled language**. Source code goes through three distinct phases before becoming an executable.

| Phase | Input | Output | Tool |
|---|---|---|---|
| **Preprocessing** | `.cpp` / `.h` files | Translation unit (expanded source) | Preprocessor (`cpp`) |
| **Compilation** | Translation unit | Object file (`.o` / `.obj`) | Compiler (`g++`, `clang++`) |
| **Linking** | Object files + libraries | Executable / shared library | Linker (`ld`) |

**Preprocessing** handles `#include`, `#define`, `#ifdef`, and macro expansion — it is purely textual substitution.

**Compilation** parses C++ code, performs type checking, optimisations, and emits machine code into an object file. Each `.cpp` file is compiled independently.

**Linking** resolves symbols across object files and libraries to produce the final binary. Unresolved symbols at this stage cause *linker errors* (not compiler errors).

```cpp
// Compile & link in one step
// g++ -std=c++20 -O2 -Wall main.cpp utils.cpp -o app

// Or separately
// g++ -std=c++20 -c main.cpp        → main.o
// g++ -std=c++20 -c utils.cpp       → utils.o
// g++ main.o utils.o -o app         → app (linking)
```

## 1.2 Headers, Include Guards, and `#pragma once`

Header files (`.h` / `.hpp`) declare interfaces. Source files (`.cpp`) define implementations.

**Include guards** prevent multiple inclusion of the same header within a single translation unit:

```cpp
// math_utils.h — traditional include guard
#ifndef MATH_UTILS_H
#define MATH_UTILS_H

int add(int a, int b);

#endif // MATH_UTILS_H
```

```cpp
// math_utils.h — modern alternative (non-standard but universally supported)
#pragma once

int add(int a, int b);
```

| Feature | Include Guards | `#pragma once` |
|---|---|---|
| Standard? | Yes (any C/C++) | Non-standard, but supported by all major compilers |
| Granularity | Manual, name-based | Automatic, file-based |
| Risk of collision | Possible if guard names clash | None |
| Preferred in production | ✔ (portable) | ✔ (convenient, widely accepted) |

## 1.3 Namespaces

Namespaces prevent name collisions and logically group code.

```cpp
#include <iostream>

namespace algo {
    int solve(int n) { return n * 2; }
}

int main() {
    std::cout << algo::solve(5) << '\n'; // 10
}
```

**Why `using namespace std;` is discouraged in production:**

- It pulls *every* name from `std` into the current scope — thousands of identifiers.
- Causes silent ambiguity when your names collide with standard library names (e.g., `count`, `distance`, `swap`).
- Especially dangerous in header files — it pollutes the namespace for every file that includes it.

```cpp
// BAD — in a header file
#pragma once
using namespace std; // every includer gets polluted

// GOOD — qualify explicitly, or use targeted declarations
#pragma once
using std::string;
using std::vector;
```

In competitive programming or small single-file programs, `using namespace std;` is acceptable.

## 1.4 Basic Syntax and Program Structure

```cpp
#include <iostream>

int main() {           // entry point; return type is int
    int x = 42;
    std::cout << "x = " << x << '\n';
    return 0;          // 0 signals success; non-zero signals failure
}
```

- `main()` returns `int`. The `return 0;` at the end is implicit in C++.
- `std::cout` is the standard output stream; `'\n'` is preferred over `std::endl` (no flush overhead).

## 1.5 Types

### Primitive Types

| Type | Typical Size | Range (typical) | Notes |
|---|---|---|---|
| `bool` | 1 byte | `true` / `false` | Stored as integer internally |
| `char` | 1 byte | -128 to 127 (signed) | ASCII character |
| `int` | 4 bytes | −2³¹ to 2³¹−1 (≈ ±2.1×10⁹) | Most common integer |
| `long long` | 8 bytes | −2⁶³ to 2⁶³−1 (≈ ±9.2×10¹⁸) | Use for large values / CP |
| `unsigned int` | 4 bytes | 0 to 2³²−1 (≈ 4.3×10⁹) | No negative values |
| `float` | 4 bytes | ≈ 7 decimal digits | Rarely preferred |
| `double` | 8 bytes | ≈ 15 decimal digits | Default floating point |
| `void` | — | — | "No type"; used for return types, `void*` |
| `size_t` | 4 or 8 bytes | Platform-dependent unsigned | Used for sizes and indices; defined in `<cstddef>` |

### `auto` and `decltype`

```cpp
#include <vector>

auto x = 42;                      // int
auto pi = 3.14;                   // double
auto name = std::string("Alice"); // std::string (NOT const char*)

std::vector<int> v = {1, 2, 3};
auto it = v.begin();              // std::vector<int>::iterator

// decltype: yields the type of an expression without evaluating it
decltype(x) y = 10;              // y is int
decltype(v)  w;                  // w is std::vector<int>
```

Use `auto` to reduce verbosity, especially with iterators and complex template types. Don't overuse it — if the type isn't obvious from the initializer, spell it out.

## 1.6 References vs Pointers — Basics

| Feature | Reference (`int&`) | Pointer (`int*`) |
|---|---|---|
| Must be initialised? | Yes | No (can be `nullptr`) |
| Can be reassigned? | No (always aliases the same object) | Yes |
| Can be null? | No | Yes |
| Syntax to access value | Direct (`ref`) | Dereference (`*ptr`) |
| Syntax to get address | Implicit | `&var` |
| Arithmetic? | No | Yes (`ptr + 1`) |
| Preferred for | Function parameters, aliases | Dynamic memory, optional values, data structures |

```cpp
#include <iostream>

int main() {
    int a = 10;

    int& ref = a;   // reference: another name for a
    int* ptr = &a;   // pointer: stores address of a

    ref = 20;        // a is now 20
    *ptr = 30;       // a is now 30

    std::cout << a << '\n'; // 30
}
```

## 1.7 `const` and `constexpr`

### `const`

```cpp
const int MAX = 100;           // runtime constant — value cannot change
// MAX = 200;                  // ✗ compile error

const int& cref = MAX;        // const reference — cannot modify through cref

void print(const std::string& s) {  // const ref: no copy, no modification
    // s += "!";               // ✗ compile error
    std::cout << s << '\n';
}
```

**Read `const` right to left:**

| Declaration | Meaning |
|---|---|
| `const int* p` | Pointer to const int (can't change `*p`, can change `p`) |
| `int* const p` | Const pointer to int (can change `*p`, can't change `p`) |
| `const int* const p` | Const pointer to const int (nothing changes) |

### `constexpr`

`constexpr` means "evaluate at compile time (if possible)."

```cpp
#include <array>

constexpr int square(int n) { return n * n; }

constexpr int val = square(5);     // computed at compile time → 25
std::array<int, square(3)> arr;    // size = 9, known at compile time

// constexpr functions CAN also be called at runtime
int x;
std::cin >> x;
int result = square(x);            // evaluated at runtime
```

| Feature | `const` | `constexpr` |
|---|---|---|
| Evaluated at | Runtime or compile time | Compile time (when possible) |
| Can be used as template argument / array size? | Sometimes | Yes |
| Can apply to functions? | No (use on return type is different) | Yes |
| Available since | C++98 | C++11 (expanded in C++14/17/20) |

## 1.8 Control Flow

### `if` / `else`

```cpp
if (x > 0) {
    // positive
} else if (x == 0) {
    // zero
} else {
    // negative
}
```

### `if` with initializer (C++17)

```cpp
#include <map>
#include <string>

std::map<std::string, int> scores = {{"Alice", 95}};

if (auto it = scores.find("Alice"); it != scores.end()) {
    std::cout << it->second << '\n';  // 95
}
// 'it' does not leak into the outer scope
```

### `switch`

```cpp
switch (grade) {
    case 'A': std::cout << "Excellent\n"; break;
    case 'B': std::cout << "Good\n";      break;
    default:  std::cout << "Other\n";     break;
}
```

C++17 adds `[[fallthrough]]` attribute for intentional fall-through.

### Loops

```cpp
#include <vector>

// classic for
for (int i = 0; i < 10; ++i) { /* ... */ }

// while
while (condition) { /* ... */ }

// do-while — body always executes at least once
do { /* ... */ } while (condition);

// range-based for
std::vector<int> v = {1, 2, 3};
for (int x : v)           { /* by value (copy)     */ }
for (const int& x : v)    { /* by const ref (read)  */ }
for (int& x : v)          { /* by ref (modify)      */ }
for (const auto& x : v)   { /* auto version (read)  */ }
```

Prefer `++i` over `i++` in loops — for iterators, the prefix form avoids creating an unnecessary temporary.

## 1.9 Functions

### Declaration vs Definition

```cpp
// Declaration (prototype) — usually in a header
int add(int a, int b);

// Definition — usually in a .cpp file
int add(int a, int b) {
    return a + b;
}
```

### Function Overloading

Multiple functions with the same name but different parameter types/counts. Return type alone does NOT differentiate overloads.

```cpp
#include <iostream>
#include <string>

int    add(int a, int b)               { return a + b; }
double add(double a, double b)         { return a + b; }
std::string add(const std::string& a,
                const std::string& b)  { return a + b; }
```

### Default Arguments

```cpp
void greet(const std::string& name, const std::string& greeting = "Hello") {
    std::cout << greeting << ", " << name << "!\n";
}
// greet("Alice");              → "Hello, Alice!"
// greet("Alice", "Hey");       → "Hey, Alice!"
```

Default arguments are specified from right to left. You cannot skip middle parameters.

### `inline`

Suggests the compiler replace the function call with its body. Modern compilers inline automatically based on heuristics; the keyword is more useful for linker purposes (allowing definitions in headers).

```cpp
inline int square(int n) { return n * n; }
```

### Parameter Passing

| Style | Syntax | Copies? | Can modify original? | When to use |
|---|---|---|---|---|
| By value | `f(int x)` | Yes | No | Small types, when you need a local copy |
| By reference | `f(int& x)` | No | Yes | When the function must modify the argument |
| By const reference | `f(const int& x)` | No | No | Large types (strings, vectors) — read-only, zero-copy |
| By pointer | `f(int* x)` | No (copies ptr) | Yes (`*x`) | When nullability is needed |

**Rule of thumb:** pass primitive types by value, everything else by `const&` unless you need to modify.

```cpp
#include <vector>
#include <iostream>

void process(const std::vector<int>& data) {  // no copy
    for (const auto& x : data) {
        std::cout << x << ' ';
    }
    std::cout << '\n';
}

void modify(std::vector<int>& data) {  // modifies caller's vector
    data.push_back(42);
}
```

### Key Interview Points to Remember

- C++ compilation is **separate compilation**: each `.cpp` is compiled independently, then linked.
- `const` and `constexpr` are different — `constexpr` guarantees compile-time evaluation when given constant arguments.
- **Always pass large objects by `const&`** unless you need to modify or consume them.
- `auto` deduces types but drops top-level `const` and references; use `const auto&` when needed.
- `size_t` is unsigned — subtracting from it can wrap around to a huge positive number.
- Know the difference between declaration (tells compiler it exists) and definition (provides the implementation).
- `using namespace std;` is fine in competitive programming, never in production headers.

### Common Mistakes

1. **Forgetting include guards** → multiple definition errors at link time.
2. **Using `endl` in performance-sensitive code** — it flushes the buffer every time. Use `'\n'`.
3. **Mixing signed and unsigned types** — comparing `int` with `size_t` can cause subtle bugs.
4. **Default argument redefinition** — default arguments go in the declaration, not repeated in the definition.
5. **Assuming `auto` preserves references** — `auto x = ref;` copies; use `auto& x = ref;` to keep the reference.
6. **Fall-through in switch without `break`** — common source of bugs; use `[[fallthrough]]` if intentional.

### Quick Recap

| Topic | Key Takeaway |
|---|---|
| Compilation | Preprocess → compile → link; each `.cpp` is independent |
| Headers | Use `#pragma once` or include guards to prevent double inclusion |
| Namespaces | Avoid `using namespace std;` in headers; qualify names explicitly |
| Types | `int` (4B), `long long` (8B), `double` (8B), `size_t` (unsigned, platform-dependent) |
| `auto` / `decltype` | `auto` deduces from initializer; `decltype` queries expression type |
| References vs pointers | References cannot be null or reassigned; pointers can |
| `const` / `constexpr` | `const` = immutable at runtime; `constexpr` = immutable at compile time |
| Parameter passing | By value (small types), by `const&` (large types), by `&` (to modify) |

---

# 2. Memory Management

## 2.1 Stack vs Heap

| Feature | Stack | Heap |
|---|---|---|
| Allocation | Automatic (compiler manages) | Manual (`new` / `malloc`) or via smart pointers |
| Deallocation | Automatic when scope ends | Manual (`delete` / `free`) or via smart pointers |
| Speed | Very fast (pointer bump) | Slower (allocator must find free block) |
| Size | Limited (typically 1–8 MB) | Limited by system memory |
| Fragmentation | None | Possible |
| Lifetime | Tied to scope | Until explicitly freed |
| Thread safety | Each thread has its own stack | Shared; requires synchronization |

```cpp
#include <iostream>

void example() {
    int a = 10;              // stack — freed when function returns
    int* p = new int(20);    // heap — survives until 'delete'
    std::cout << a << ' ' << *p << '\n';
    delete p;                // manual cleanup required
}
```

**What goes where:**

- **Stack:** local variables, function parameters, return addresses.
- **Heap:** dynamically allocated objects, large data structures whose size is unknown at compile time, objects that must outlive the creating scope.

## 2.2 Pointers Deep Dive

### Declaration and Dereferencing

```cpp
int x = 42;
int* ptr = &x;     // ptr holds the address of x
int val = *ptr;     // dereferencing: val = 42
*ptr = 99;          // x is now 99
```

### Pointer Arithmetic

```cpp
#include <iostream>

int arr[] = {10, 20, 30, 40, 50};
int* p = arr;       // points to arr[0]

std::cout << *(p + 2) << '\n';  // 30 — advances by 2 * sizeof(int) bytes
p++;                             // now points to arr[1]
std::cout << *p << '\n';        // 20

ptrdiff_t diff = (arr + 4) - arr; // 4 (element count, not byte count)
```

### `nullptr`, `void*`, Function Pointers

```cpp
#include <iostream>

// nullptr — type-safe null pointer (C++11); prefer over NULL or 0
int* p = nullptr;
if (p == nullptr) { /* safe */ }

// void* — generic pointer, must cast before dereferencing
void* vp = &x;
int* ip = static_cast<int*>(vp);

// Function pointer
int add(int a, int b) { return a + b; }
int (*fp)(int, int) = &add;    // or just = add;
std::cout << fp(3, 4) << '\n'; // 7

// Modern alternative: std::function
#include <functional>
std::function<int(int, int)> fn = add;
```

## 2.3 References Deep Dive

### Lvalue References

An **lvalue reference** (`T&`) binds to a named, addressable object (an lvalue).

```cpp
int a = 5;
int& ref = a;     // ref is an alias for a
ref = 10;          // a is now 10

// const lvalue reference can bind to rvalues (temporaries)
const int& cref = 42;   // OK — extends temporary's lifetime
```

### Rvalue References (Introduction)

An **rvalue reference** (`T&&`) binds to temporaries (rvalues) — objects about to be destroyed. This enables **move semantics** (covered in §2.9).

```cpp
int&& rref = 42;        // OK — binds to temporary
// int&& bad = a;        // ✗ error: cannot bind rvalue ref to lvalue

// Use std::move to cast an lvalue to an rvalue reference
int&& moved = std::move(a);  // a is now in a "moved-from" state
```

## 2.4 Ownership Concept

**Ownership** answers: *who is responsible for destroying this resource?*

| Ownership model | Mechanism | Use case |
|---|---|---|
| Automatic (stack) | Scope-based lifetime | Local variables |
| Unique | `std::unique_ptr` | Single owner, exclusive access |
| Shared | `std::shared_ptr` | Multiple owners, reference-counted |
| Borrowed | Raw reference / pointer | Non-owning view of someone else's resource |

Getting ownership wrong causes **leaks** (no one destroys it), **dangling** (someone destroys it too early), or **double-free** (two owners both destroy it).

## 2.5 `new` / `delete`

```cpp
// Single object
int* p = new int(42);     // allocate on heap, initialise to 42
delete p;                  // free single object

// Array
int* arr = new int[100];   // allocate array of 100 ints
delete[] arr;               // free array — MUST use delete[], not delete

// Mismatch is undefined behaviour
// delete arr;   // ✗ UB: used delete instead of delete[]
```

**When to use:** Almost never in modern C++. Prefer smart pointers or containers. Direct `new`/`delete` is only warranted in low-level library code or custom allocators.

## 2.6 RAII (Resource Acquisition Is Initialization)

RAII ties a resource's lifetime to an object's lifetime: acquire in the constructor, release in the destructor. When the object goes out of scope, the resource is automatically freed.

```cpp
#include <fstream>
#include <iostream>
#include <stdexcept>

class FileHandle {
    std::ofstream file_;
public:
    explicit FileHandle(const std::string& path) : file_(path) {
        if (!file_.is_open()) {
            throw std::runtime_error("Cannot open file: " + path);
        }
    }
    // destructor runs automatically — file is closed
    ~FileHandle() = default; // std::ofstream closes in its own destructor

    void write(const std::string& data) { file_ << data; }
};

void process() {
    FileHandle fh("output.txt"); // resource acquired
    fh.write("hello");
    // if an exception is thrown here, ~FileHandle still runs
} // fh goes out of scope → file closed automatically
```

RAII is the foundation of smart pointers, lock guards (`std::lock_guard`), and most well-designed C++ resource management.

## 2.7 Smart Pointers

### `std::unique_ptr` — Exclusive Ownership

```cpp
#include <memory>
#include <iostream>

auto p = std::make_unique<int>(42);    // preferred creation
std::cout << *p << '\n';               // 42

// Transfer ownership
auto q = std::move(p);                 // p is now nullptr
// std::cout << *p;                    // ✗ UB: p is null

// Custom deleter (rare but asked in interviews)
auto custom = std::unique_ptr<FILE, decltype(&fclose)>(
    fopen("data.txt", "r"), &fclose
);
```

### `std::shared_ptr` — Shared Ownership (Reference Counted)

```cpp
#include <memory>
#include <iostream>

auto a = std::make_shared<int>(100);
auto b = a;  // reference count: 2
std::cout << a.use_count() << '\n'; // 2

b.reset();   // reference count: 1
a.reset();   // reference count: 0 → object destroyed
```

### `std::weak_ptr` — Non-Owning Observer

Breaks circular references. Does not increment the reference count.

```cpp
#include <memory>
#include <iostream>

struct Node {
    std::shared_ptr<Node> next;
    std::weak_ptr<Node> prev;  // weak to break cycle
    int value;
};

auto a = std::make_shared<Node>();
auto b = std::make_shared<Node>();
a->next = b;
b->prev = a; // weak_ptr: does not prevent 'a' from being destroyed

// To use a weak_ptr, lock() it to get a shared_ptr (may be null)
if (auto locked = b->prev.lock()) {
    std::cout << "prev is alive\n";
}
```

### Comparison Table

| Feature | `unique_ptr` | `shared_ptr` | `weak_ptr` |
|---|---|---|---|
| Ownership | Exclusive | Shared (ref-counted) | Non-owning observer |
| Copyable? | No (move-only) | Yes | Yes |
| Overhead | Zero (no control block) | Control block + ref counts | Same control block |
| Use case | Default choice | Multiple owners needed | Breaking cycles, caching |
| Creation | `make_unique<T>(args)` | `make_shared<T>(args)` | From a `shared_ptr` |
| Thread-safe ref count? | N/A | Yes (atomic) | Yes |

## 2.8 Lifetime Issues

### Dangling Pointer

```cpp
int* dangle() {
    int local = 42;
    return &local;  // ✗ returns address of a stack variable
} // local is destroyed here — pointer is dangling
```

### Memory Leak

```cpp
void leak() {
    int* p = new int(42);
    // forgot delete p;
} // p goes out of scope, heap memory is never freed
```

### Double Free

```cpp
int* p = new int(10);
int* q = p;        // both point to the same memory
delete p;
delete q;          // ✗ UB: double free
```

### Use-After-Free

```cpp
int* p = new int(10);
delete p;
*p = 20;           // ✗ UB: writing to freed memory
```

**Prevention:** Use smart pointers. Use address sanitizers (`-fsanitize=address`) during development.

## 2.9 Copy Semantics

### Copy Constructor

Creates a new object as a copy of an existing one.

```cpp
#include <cstring>
#include <iostream>

class Buffer {
    char* data_;
    size_t size_;
public:
    explicit Buffer(size_t size) : data_(new char[size]), size_(size) {
        std::memset(data_, 0, size_);
    }

    // Copy constructor — deep copy
    Buffer(const Buffer& other) : data_(new char[other.size_]), size_(other.size_) {
        std::memcpy(data_, other.data_, size_);
    }

    // Copy assignment operator — deep copy
    Buffer& operator=(const Buffer& other) {
        if (this != &other) {  // self-assignment check
            delete[] data_;
            size_ = other.size_;
            data_ = new char[size_];
            std::memcpy(data_, other.data_, size_);
        }
        return *this;
    }

    ~Buffer() { delete[] data_; }

    size_t size() const { return size_; }
};
```

Without a custom copy constructor, the compiler generates a **shallow copy** — two objects share the same pointer, leading to double free.

## 2.10 Move Semantics

Move semantics **transfer** resources from a source object instead of copying, avoiding expensive allocations.

```cpp
#include <cstring>
#include <utility>
#include <iostream>

class Buffer {
    char* data_;
    size_t size_;
public:
    explicit Buffer(size_t size) : data_(new char[size]), size_(size) {
        std::memset(data_, 0, size_);
    }

    // Move constructor — steal resources
    Buffer(Buffer&& other) noexcept
        : data_(other.data_), size_(other.size_) {
        other.data_ = nullptr;
        other.size_ = 0;
    }

    // Move assignment operator
    Buffer& operator=(Buffer&& other) noexcept {
        if (this != &other) {
            delete[] data_;
            data_ = other.data_;
            size_ = other.size_;
            other.data_ = nullptr;
            other.size_ = 0;
        }
        return *this;
    }

    ~Buffer() { delete[] data_; }
};

Buffer createBuffer() {
    Buffer b(1024);
    return b;        // move (or copy elision / NRVO)
}

int main() {
    Buffer a(512);
    Buffer b = std::move(a);  // a is now in a valid but empty state
}
```

**`std::move`** does not move anything — it is a cast to an rvalue reference, enabling the move constructor or move assignment to be selected.

## 2.11 Rule of 3, Rule of 5, Rule of 0

### Rule of 3 (C++98)

If you define any one of these, you probably need all three:

1. Destructor
2. Copy constructor
3. Copy assignment operator

### Rule of 5 (C++11)

Extends the Rule of 3 by adding:

4. Move constructor
5. Move assignment operator

### Rule of 0

**Preferred in modern C++.** If your class only holds standard library types and smart pointers, you don't need to define *any* of the five. The compiler-generated defaults are correct.

```cpp
#include <string>
#include <vector>
#include <memory>

// Rule of 0: no custom destructor/copy/move needed
struct User {
    std::string name;
    int age;
    std::vector<std::string> tags;
    std::unique_ptr<int> optional_data;
};
// Compiler handles everything correctly.
```

| Rule | When to Apply | What You Define |
|---|---|---|
| Rule of 0 | Class manages no raw resources | Nothing — use compiler defaults |
| Rule of 3 | Class manages a raw resource (legacy C++) | Destructor + copy ctor + copy assignment |
| Rule of 5 | Class manages a raw resource (modern C++) | Rule of 3 + move ctor + move assignment |

### Key Interview Points to Remember

- **Stack allocation is faster** than heap — prefer stack when lifetime is scoped.
- **RAII** is the core C++ idiom: tie resource lifetime to object lifetime.
- **`std::unique_ptr`** should be your **default smart pointer**. Use `shared_ptr` only when you genuinely need shared ownership.
- `std::move` is just a cast — it enables move semantics but does not itself move anything.
- A moved-from object must be in a **valid but unspecified state** (safe to destroy or reassign).
- Know the difference between shallow copy (default) and deep copy (custom).
- `make_unique` and `make_shared` are preferred over raw `new` — they are exception-safe and `make_shared` allocates the object and control block together.
- `weak_ptr` is the answer to "how do you break a `shared_ptr` cycle?"
- Always mark move constructors and move assignment operators `noexcept` — containers like `std::vector` will only use moves during reallocation if the move is `noexcept`.

### Common Mistakes

1. **Mismatching `new` / `delete[]`** — using `delete` on an array or `delete[]` on a single object is undefined behaviour.
2. **Returning a reference or pointer to a local variable** — instant dangling reference.
3. **Forgetting the self-assignment check** in `operator=`.
4. **Not nullifying moved-from pointers** — the destructor will then `delete` a valid-looking pointer.
5. **Using `shared_ptr` everywhere** — reference counting has overhead; default to `unique_ptr`.
6. **Circular `shared_ptr` references** — causes memory leaks; break cycles with `weak_ptr`.
7. **Calling `std::move` on a `const` object** — it silently falls back to a copy because `const T&&` doesn't match the move constructor's `T&&` parameter.

### Quick Recap

| Topic | Key Takeaway |
|---|---|
| Stack vs Heap | Stack is fast and scoped; heap is flexible but requires manual management |
| Pointers | Hold addresses; support arithmetic; can be null |
| References | Aliases that cannot be null or rebound |
| RAII | Acquire in constructor, release in destructor |
| `unique_ptr` | Default smart pointer — exclusive ownership, zero overhead |
| `shared_ptr` | Reference-counted shared ownership |
| `weak_ptr` | Non-owning observer; breaks reference cycles |
| Copy semantics | Deep copy via copy constructor / copy assignment |
| Move semantics | Transfer resources cheaply; use `std::move` to opt in |
| Rule of 0/3/5 | Prefer Rule of 0; define the 5 only when managing raw resources |

---

# 3. OOP Concepts

## 3.1 Classes and Objects, `struct` vs `class`

```cpp
class Point {
    int x_, y_;                     // private by default in class
public:
    Point(int x, int y) : x_(x), y_(y) {}
    int x() const { return x_; }
    int y() const { return y_; }
};

struct Pair {
    int first, second;              // public by default in struct
};
```

| Feature | `class` | `struct` |
|---|---|---|
| Default access | `private` | `public` |
| Default inheritance | `private` | `public` |
| Conventional use | Objects with invariants/behaviour | Plain data (POD-like), simple aggregates |
| Language difference | Just the two defaults above | Just the two defaults above |

The **only** language difference between `struct` and `class` is the default access specifier and default inheritance access. Everything else is convention.

## 3.2 Access Specifiers

| Specifier | Within class | Derived class | Outside |
|---|---|---|---|
| `public` | ✔ | ✔ | ✔ |
| `protected` | ✔ | ✔ | ✗ |
| `private` | ✔ | ✗ | ✗ |

```cpp
class Base {
public:
    int pub = 1;
protected:
    int prot = 2;
private:
    int priv = 3;
};

class Derived : public Base {
    void foo() {
        pub  = 10;   // ✔
        prot = 20;   // ✔
        // priv = 30; // ✗ not accessible
    }
};
```

## 3.3 Constructors

### Default, Parameterized, Initializer List

```cpp
#include <string>

class Person {
    std::string name_;
    int age_;
public:
    Person() : name_("Unknown"), age_(0) {}                   // default
    Person(std::string name, int age) : name_(std::move(name)), age_(age) {}  // parameterized

    // Always prefer member initializer lists over assignment in the body —
    // initializer lists directly construct members; body assignment default-constructs then reassigns.
};
```

### Copy and Move Constructors

```cpp
class Widget {
public:
    Widget(const Widget& other);            // copy constructor
    Widget(Widget&& other) noexcept;        // move constructor
};
```

### Delegating Constructors (C++11)

```cpp
class Config {
    int width_, height_;
public:
    Config(int w, int h) : width_(w), height_(h) {}
    Config() : Config(800, 600) {}           // delegates to parameterized ctor
};
```

### `explicit` Keyword

Prevents implicit conversions via a constructor.

```cpp
class Foo {
public:
    explicit Foo(int x) {}
};

// Foo f = 42;     // ✗ compile error (implicit conversion blocked)
Foo f(42);          // ✔ direct initialisation
Foo g{42};          // ✔ direct list initialisation
```

**Rule:** Mark single-argument constructors `explicit` unless you intentionally want implicit conversions.

## 3.4 Destructors

```cpp
class Resource {
    int* data_;
public:
    Resource() : data_(new int(0)) {}
    ~Resource() { delete data_; }   // called when object goes out of scope
};
```

**When destructors are called:**

- Local objects: when the scope exits.
- Heap objects: when `delete` is called.
- Containers: when the container is destroyed (elements' destructors run).
- Exceptions: during stack unwinding.

### Virtual Destructors

If a class is intended to be a base class, its destructor **must** be virtual. Without it, `delete`-ing through a base pointer is **undefined behaviour**.

```cpp
class Base {
public:
    virtual ~Base() = default;     // ✔ virtual destructor
};

class Derived : public Base {
    int* data_ = new int(42);
public:
    ~Derived() override { delete data_; }
};

Base* ptr = new Derived();
delete ptr;  // safe — calls ~Derived() then ~Base()
// Without virtual ~Base(), only ~Base() runs → memory leak
```

## 3.5 Encapsulation

Keep data private; expose controlled access through methods.

```cpp
class BankAccount {
    double balance_ = 0.0;
public:
    double balance() const { return balance_; }

    void deposit(double amount) {
        if (amount > 0) balance_ += amount;  // enforces invariant
    }

    bool withdraw(double amount) {
        if (amount > 0 && amount <= balance_) {
            balance_ -= amount;
            return true;
        }
        return false;
    }
};
```

**Why encapsulate:** You can change internal representation (e.g., store balance as `int` cents) without breaking client code.

## 3.6 Abstraction

Abstraction exposes *what* an object does, not *how* it does it. In C++, this is achieved through abstract classes and interfaces (pure virtual functions).

## 3.7 Inheritance

### Single Inheritance

```cpp
class Animal {
public:
    virtual void speak() const { std::cout << "...\n"; }
    virtual ~Animal() = default;
};

class Dog : public Animal {
public:
    void speak() const override { std::cout << "Woof!\n"; }
};
```

### Multiple Inheritance

A class can inherit from more than one base class.

```cpp
class Printable {
public:
    virtual void print() const = 0;
    virtual ~Printable() = default;
};

class Serializable {
public:
    virtual std::string serialize() const = 0;
    virtual ~Serializable() = default;
};

class Document : public Printable, public Serializable {
    std::string content_;
public:
    explicit Document(std::string c) : content_(std::move(c)) {}
    void print() const override { std::cout << content_ << '\n'; }
    std::string serialize() const override { return content_; }
};
```

### Multilevel Inheritance

```
Animal → Dog → GuideDog
```

```cpp
class GuideDog : public Dog {
public:
    void guide() const { std::cout << "Guiding...\n"; }
};
```

### Hierarchical Inheritance

```
Animal → Dog
Animal → Cat
```

Multiple classes derive from the same base.

### Inheritance Access

| Base member | `public` inheritance | `protected` inheritance | `private` inheritance |
|---|---|---|---|
| `public` | `public` | `protected` | `private` |
| `protected` | `protected` | `protected` | `private` |
| `private` | Not accessible | Not accessible | Not accessible |

## 3.8 Polymorphism

### Compile-Time (Static) Polymorphism

Resolved by the compiler at compile time.

| Mechanism | Example |
|---|---|
| Function overloading | `print(int)` vs `print(double)` |
| Operator overloading | `a + b` on custom types |
| Templates | `template<typename T> T max(T a, T b)` |

### Runtime (Dynamic) Polymorphism

Resolved at runtime via the **vtable** mechanism.

```cpp
#include <iostream>
#include <vector>
#include <memory>

class Shape {
public:
    virtual double area() const = 0;
    virtual ~Shape() = default;
};

class Circle : public Shape {
    double radius_;
public:
    explicit Circle(double r) : radius_(r) {}
    double area() const override { return 3.14159265 * radius_ * radius_; }
};

class Rectangle : public Shape {
    double w_, h_;
public:
    Rectangle(double w, double h) : w_(w), h_(h) {}
    double area() const override { return w_ * h_; }
};

int main() {
    std::vector<std::unique_ptr<Shape>> shapes;
    shapes.push_back(std::make_unique<Circle>(5.0));
    shapes.push_back(std::make_unique<Rectangle>(3.0, 4.0));

    for (const auto& s : shapes) {
        std::cout << s->area() << '\n';  // dynamic dispatch
    }
}
```

## 3.9 `virtual`, `override`, `final`

| Keyword | Purpose |
|---|---|
| `virtual` | Enables dynamic dispatch for a member function |
| `override` | (C++11) Explicitly marks a function as overriding a virtual base function; compiler error if it doesn't |
| `final` | (C++11) Prevents further overriding or inheritance |

```cpp
class Base {
public:
    virtual void foo() {}
    virtual void bar() {}
    virtual ~Base() = default;
};

class Mid : public Base {
public:
    void foo() override final {}  // no further override allowed
    void bar() override {}
};

class Leaf final : public Mid {  // no class can derive from Leaf
public:
    // void foo() override {}    // ✗ error: foo is final in Mid
    void bar() override {}
};
```

**Always use `override`** — it catches typos and signature mismatches at compile time.

## 3.10 Pure Virtual Functions, Abstract Classes, Interfaces

```cpp
// Abstract class — cannot be instantiated
class Shape {
public:
    virtual double area() const = 0;   // pure virtual
    virtual void draw() const = 0;
    virtual ~Shape() = default;
};

// Interface — pure abstract class with no data members or implementations
class ISerializable {
public:
    virtual std::string serialize() const = 0;
    virtual void deserialize(const std::string& data) = 0;
    virtual ~ISerializable() = default;
};
```

| Concept | Definition |
|---|---|
| Pure virtual function | Declared with `= 0`; derived class must implement |
| Abstract class | Has at least one pure virtual function; cannot be instantiated |
| Interface (C++ convention) | Abstract class with *only* pure virtual functions and a virtual destructor |

## 3.11 Composition vs Inheritance

| | Inheritance ("is-a") | Composition ("has-a") |
|---|---|---|
| Relationship | Dog **is a** Animal | Car **has a** Engine |
| Coupling | Tight (base changes affect derived) | Loose (only through interface) |
| When to use | Genuine subtype relationships, need polymorphism | Reuse behaviour without subtype relationship |
| Flexibility | Fixed at compile time | Swappable at runtime |

```cpp
// Prefer composition over inheritance
class Engine {
public:
    void start() { std::cout << "Engine started\n"; }
};

class Car {
    Engine engine_;  // composition
public:
    void start() { engine_.start(); }
};
```

**Guideline:** "Prefer composition over inheritance." Use inheritance only for genuine "is-a" relationships where you need polymorphic behaviour.

## 3.12 Operator Overloading

### Arithmetic Operators

```cpp
#include <iostream>

struct Vec2 {
    double x, y;

    Vec2 operator+(const Vec2& rhs) const { return {x + rhs.x, y + rhs.y}; }
    Vec2 operator-(const Vec2& rhs) const { return {x - rhs.x, y - rhs.y}; }
    Vec2 operator*(double scalar) const   { return {x * scalar, y * scalar}; }
    bool operator==(const Vec2& rhs) const { return x == rhs.x && y == rhs.y; }
};

// Non-member for commutativity: scalar * vec
Vec2 operator*(double scalar, const Vec2& v) { return v * scalar; }
```

### Stream Operators (`<<`, `>>`)

```cpp
#include <iostream>

struct Vec2 { double x, y; };

std::ostream& operator<<(std::ostream& os, const Vec2& v) {
    return os << '(' << v.x << ", " << v.y << ')';
}

std::istream& operator>>(std::istream& is, Vec2& v) {
    return is >> v.x >> v.y;
}
```

Stream operators are always **non-member** (or `friend`) since the left operand is a stream, not your class.

### Subscript Operator (`[]`)

```cpp
#include <vector>
#include <stdexcept>

class SafeArray {
    std::vector<int> data_;
public:
    explicit SafeArray(size_t n) : data_(n) {}

    int& operator[](size_t i) {
        if (i >= data_.size()) throw std::out_of_range("index out of bounds");
        return data_[i];
    }
    const int& operator[](size_t i) const {
        if (i >= data_.size()) throw std::out_of_range("index out of bounds");
        return data_[i];
    }
};
```

### Function Call Operator (`()`) — Functors

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

struct GreaterThan {
    int threshold;
    bool operator()(int x) const { return x > threshold; }
};

int main() {
    std::vector<int> v = {1, 5, 3, 8, 2, 7};
    auto count = std::count_if(v.begin(), v.end(), GreaterThan{4});
    std::cout << count << '\n'; // 3 (5, 8, 7)
}
```

### Comparison Operators — C++20 Spaceship

```cpp
#include <compare>
#include <string>

struct Student {
    std::string name;
    int grade;
    auto operator<=>(const Student&) const = default;  // generates all 6 comparison operators
};
```

In pre-C++20 code, you manually define `<`, `==`, etc.

## 3.13 `this` Pointer

`this` is an implicit pointer to the current object inside non-static member functions.

```cpp
class Builder {
    int width_ = 0, height_ = 0;
public:
    Builder& setWidth(int w)  { width_ = w;  return *this; }  // method chaining
    Builder& setHeight(int h) { height_ = h; return *this; }
};

Builder b;
b.setWidth(100).setHeight(200);
```

**Type of `this`:** In a non-const method, `this` is `T*`. In a `const` method, `this` is `const T*`.

## 3.14 Static Members and Static Member Functions

```cpp
#include <iostream>

class Counter {
    static int count_;  // shared across all instances
public:
    Counter()  { ++count_; }
    ~Counter() { --count_; }
    static int getCount() { return count_; }  // no 'this' pointer
};

int Counter::count_ = 0;  // definition (required in exactly one .cpp file)

int main() {
    Counter a, b, c;
    std::cout << Counter::getCount() << '\n'; // 3
}
```

- Static members belong to the class, not to any instance.
- Static member functions have **no `this` pointer** — they cannot access non-static members.
- Inline static members (C++17): `inline static int count_ = 0;` — no separate definition needed.

## 3.15 Friend Functions and Friend Classes

`friend` grants a non-member function or another class access to private/protected members.

```cpp
#include <iostream>

class Matrix {
    int data_[4] = {};
    friend std::ostream& operator<<(std::ostream& os, const Matrix& m);
    friend class MatrixSerializer;
public:
    Matrix(int a, int b, int c, int d) : data_{a, b, c, d} {}
};

std::ostream& operator<<(std::ostream& os, const Matrix& m) {
    return os << m.data_[0] << ' ' << m.data_[1] << '\n'
              << m.data_[2] << ' ' << m.data_[3];
}
```

**Friendship is not transitive and not inherited.**

Use sparingly — it breaks encapsulation. Legitimate uses: stream operators, tightly coupled helper classes, unit test harnesses.

## 3.16 The Diamond Problem

When a class inherits from two classes that share a common base, the common base's members appear twice — the **diamond problem**.

```
    Animal
   /      \
 Dog      Cat
   \      /
    CatDog
```

**Without virtual inheritance:**

```cpp
#include <iostream>

class Animal {
public:
    int age = 0;
    virtual ~Animal() = default;
};

class Dog : public Animal {};
class Cat : public Animal {};

class CatDog : public Dog, public Cat {};

int main() {
    CatDog cd;
    // cd.age = 5;          // ✗ ambiguous: Dog::age or Cat::age?
    cd.Dog::age = 5;        // works, but there are two copies of Animal
}
```

**With virtual inheritance:**

```cpp
#include <iostream>

class Animal {
public:
    int age = 0;
    virtual ~Animal() = default;
};

class Dog : virtual public Animal {};
class Cat : virtual public Animal {};

class CatDog : public Dog, public Cat {};

int main() {
    CatDog cd;
    cd.age = 5;  // ✔ only one Animal sub-object
    std::cout << cd.age << '\n'; // 5
}
```

`virtual` inheritance ensures a single shared instance of the common base. It has a small runtime cost (extra indirection via a virtual base pointer).

## 3.17 Object Slicing

When a derived object is assigned to a base object **by value**, the derived part is "sliced off."

```cpp
#include <iostream>

class Base {
public:
    virtual void identify() const { std::cout << "Base\n"; }
    virtual ~Base() = default;
};

class Derived : public Base {
    int extra_ = 42;
public:
    void identify() const override { std::cout << "Derived (" << extra_ << ")\n"; }
};

int main() {
    Derived d;

    Base b = d;            // SLICED — only Base part is copied
    b.identify();          // prints "Base", not "Derived"

    Base& ref = d;         // NO slicing — polymorphic
    ref.identify();        // prints "Derived (42)"

    Base* ptr = &d;        // NO slicing — polymorphic
    ptr->identify();       // prints "Derived (42)"
}
```

**Prevention:** Always use **pointers or references** when working with polymorphic objects. Store in containers as `std::unique_ptr<Base>` or `std::vector<std::unique_ptr<Base>>`.

## 3.18 vtable and vptr — Virtual Dispatch Internals

This is a **conceptual model** — the standard doesn't mandate this implementation, but virtually all compilers use it.

**How it works:**

1. Each class with at least one `virtual` function gets a **vtable** (virtual table) — a static array of function pointers.
2. Each object of such a class contains a hidden **vptr** (virtual pointer) that points to its class's vtable.
3. When a virtual function is called through a pointer or reference, the compiler generates code that:
   - Follows the vptr to the vtable.
   - Looks up the function at the appropriate index.
   - Calls that function.

```
Object layout:
+--------+
| vptr ----->  vtable for Derived
| data   |     [0] → Derived::area()
+--------+     [1] → Derived::draw()
               [2] → Base::~Base() (or Derived::~Derived())
```

```cpp
class Shape {
public:
    virtual double area() const = 0;
    virtual ~Shape() = default;
    // vtable has 2 entries: area, ~Shape
};

class Circle : public Shape {
    double r_;
public:
    explicit Circle(double r) : r_(r) {}
    double area() const override { return 3.14159 * r_ * r_; }
    // Circle's vtable: [area → Circle::area, dtor → Circle::~Circle]
};
```

**Cost of virtual dispatch:** One pointer dereference + one indirect function call. Negligible in most code, but relevant in ultra-hot loops (millions of calls per frame).

**Interview note:** Be prepared to draw the vtable layout on a whiteboard. Explain how `override` adds compile-time safety but doesn't change the runtime mechanism.

## 3.19 Practical OOP Design Advice for Interviews

### SOLID Principles (Brief)

| Principle | Meaning | C++ Implication |
|---|---|---|
| **S** — Single Responsibility | A class should have one reason to change | Keep classes focused; split large classes |
| **O** — Open/Closed | Open for extension, closed for modification | Use virtual functions / templates for extension |
| **L** — Liskov Substitution | Derived types must be substitutable for base types | Don't violate base class contracts in overrides |
| **I** — Interface Segregation | Don't force clients to depend on unused interfaces | Prefer small, focused abstract classes |
| **D** — Dependency Inversion | Depend on abstractions, not concretions | Pass interfaces (`Shape&`), not concrete types (`Circle&`) |

### Design Guidelines Summary

1. **Prefer composition over inheritance** — inheritance creates tight coupling.
2. **Always declare virtual destructors** in base classes intended for polymorphic use.
3. **Avoid deep inheritance hierarchies** — 2–3 levels is usually the practical maximum.
4. **Use `override` on every overriding function** — catches errors at compile time.
5. **Mark classes `final`** if they should not be inherited from.
6. **Use pure virtual functions** to define interfaces; don't put implementation in interface classes.
7. **Avoid multiple inheritance** of concrete classes — prefer inheriting from interfaces.
8. **Don't expose internal data** — encapsulate state and provide meaningful operations.
9. **Make single-argument constructors `explicit`** — prevents accidental implicit conversions.
10. **If in doubt, prefer value semantics** (Rule of 0) over manual resource management.

### Key Interview Points to Remember

- The **only difference** between `struct` and `class` is the default access specifier.
- **Virtual destructors** are mandatory for base classes used polymorphically — without them, `delete base_ptr` is UB if the object is derived.
- A **pure virtual function** (`= 0`) makes a class abstract and uninstantiable.
- **`override`** is compile-time safety, not runtime overhead. Always use it.
- **Object slicing** occurs when you copy a derived object into a base variable by value — use pointers/references to preserve polymorphism.
- The **diamond problem** is solved with `virtual` inheritance — one shared base sub-object.
- **vtable/vptr** is the mechanism behind virtual dispatch: one indirection per virtual call.
- **Composition > inheritance** is one of the most frequently tested design principles.
- Functors (classes with `operator()`) were the primary way to pass callable objects before lambdas (C++11).
- The **spaceship operator (`<=>`)** in C++20 auto-generates all comparison operators.
- `friend` should be used sparingly — it is a controlled breach of encapsulation, not a design pattern.
- Know when to use `static` members: shared counters, factory methods, constants.

### Common Mistakes

1. **Forgetting `virtual` on the base destructor** — leads to resource leaks or UB when deleting through base pointers.
2. **Not using `override`** — a misspelled function signature silently creates a new function instead of overriding.
3. **Object slicing in containers** — storing `Derived` in `std::vector<Base>` slices them. Use `std::vector<std::unique_ptr<Base>>`.
4. **Overusing inheritance** — not every relationship is "is-a." Composition is almost always more flexible.
5. **Overusing `friend`** — if many classes/functions need friend access, your encapsulation is wrong.
6. **Implicit single-argument constructors** — forgetting `explicit` allows surprising conversions.
7. **Calling virtual functions in constructors/destructors** — dispatch uses the class currently being constructed/destroyed, not the most-derived class. This is a classic interview trap.
8. **Multiple inheritance of concrete classes** — leads to ambiguity and maintenance nightmares. Inherit interfaces instead.
9. **Defining static members without an out-of-class definition** (pre-C++17) — causes linker errors.
10. **Assuming `protected` means "safe"** — any derived class, including those in other code, can access protected members.

### Quick Recap

| Topic | Key Takeaway |
|---|---|
| `struct` vs `class` | Only default access differs (`public` vs `private`) |
| Access specifiers | `public` (everyone), `protected` (derived), `private` (class only) |
| Constructors | Default, parameterized, copy, move, delegating; use `explicit` for single-arg |
| Destructors | Virtual in base classes; called on scope exit, `delete`, or exception |
| Encapsulation | Private data + public interface; enables changing internals safely |
| Inheritance | Single, multiple, multilevel, hierarchical; prefer `public` inheritance |
| Polymorphism | Compile-time (overloading, templates) vs runtime (virtual functions) |
| `virtual`/`override`/`final` | `virtual` enables dispatch, `override` enforces correctness, `final` stops extension |
| Abstract classes | Have ≥ 1 pure virtual function; interfaces have *only* pure virtuals |
| Composition vs inheritance | Prefer composition; use inheritance only for true "is-a" + polymorphism |
| Operator overloading | Arithmetic, stream (`<<`/`>>`), subscript (`[]`), functor (`()`) |
| Diamond problem | Virtual inheritance → single shared base sub-object |
| Object slicing | Copying derived to base by value loses derived data; use pointers/references |
| vtable/vptr | Hidden pointer per object → table of function pointers → indirect call |
| SOLID | Single responsibility, open/closed, Liskov, interface segregation, dependency inversion |

---

# 4. C++ Standard Library for DSA

The standard library is **the** reason C++ dominates competitive programming and remains a top choice for coding interviews. This section is your complete operational reference: every container, algorithm, and utility you need, with complexity guarantees, iterator invalidation rules, internal data structure breakdowns, and interview patterns.

> **Compiler note:** all code examples target **C++20** or later. Compile with `g++ -std=c++20 -O2`.
>
> **Standards:** C++23 additions are called out inline where relevant. Implementation details (growth factors, SSO, exact tree type) are marked as **typical** — the standard specifies behavior and complexity, not exact layouts.

---

## Reading Guide

### Complexity notation

- `n`: current container size
- `k`: number of affected elements / duplicates / inserted elements
- "amortized" means averaged over a sequence of operations
- Unordered containers show **average** and **worst-case** separately
- "extra space" means temporary memory used by the operation itself, not the container's owned storage

### What the standard guarantees vs what implementations usually do

- `std::vector` and `std::basic_string` guarantee **contiguous** storage.
- `std::array` is a fixed-size wrapper around an actual array.
- `std::deque` guarantees random access and efficient growth at both ends, but the exact segmented layout is implementation-defined.
- Ordered associative containers guarantee sorted order and logarithmic search/insertion/erasure; they are **usually** red-black trees.
- Unordered associative containers guarantee bucket-based behavior and average O(1) lookup/insert/erase; the exact collision strategy is implementation-defined.
- `std::priority_queue` guarantees heap semantics through its interface; the usual implementation is a binary heap on top of `std::vector`.
- Small-string optimization (SSO) is common but **not required** by the standard.

### Iterator and reference invalidation

Per [cppreference's container invalidation summary](https://en.cppreference.com/w/cpp/container), read-only operations never invalidate iterators or references. Mutating operations often do. Interview bugs frequently come from assuming:

- `vector` references survive reallocation
- `deque::end()` behaves like `list::end()`
- `unordered_map` iterators survive rehash
- `clear()` keeps references alive

Treat invalidation as part of the API, not an implementation detail.

---

## Shared API Families

These are the common, non-deprecated APIs you will see across many containers. Container-specific sections below list the functions that matter most and note exceptions.

| API family | Present on | What it does | Usual complexity | Notes |
|---|---|---|---|---|
| Constructors / range constructors / initializer-list | almost all | Build from size, range, list, or another container | usually O(n) | Adaptors and `bitset` have their own shapes |
| Copy / move constructor and assignment | all standard containers | Copy or move the container | copy O(n), move usually O(1) | Move can degrade if allocators differ |
| `begin`, `end`, `cbegin`, `cend`, `rbegin`, `rend` | all real containers except adaptors | Iterator access | O(1) | `forward_list` also has `before_begin` |
| `empty`, `size`, `max_size` | most containers | Capacity queries | O(1) | `forward_list` has no `size()` |
| `front`, `back`, `data` | where supported | Direct element access | O(1) | availability differs by container |
| `clear` | most dynamic containers | Erase all elements | O(n) | invalidates all iterators/references |
| `swap` | almost all | Exchange contents | usually O(1) | `array::swap` is O(n) |
| non-member `erase` / `erase_if` (C++20) | many containers and `string` | Convenience removal helpers | container-dependent | clean interview API |

---

## Quick Selection Cheat Sheet

| Type | Typical underlying model | Iterators | Order kept? | Lookup | Insert/erase best use | Biggest caveat |
|---|---|---|---|---|---|---|
| `array` | fixed in-object array | random access, contiguous | yes | O(1) index | no structural insert/erase | size fixed at compile time |
| `vector` | dynamic contiguous buffer | random access, contiguous | yes | O(1) index | append-heavy | reallocation invalidates all |
| `deque` | segmented array | random access | yes | O(1) index | push/pop both ends | not contiguous |
| `list` | doubly linked nodes | bidirectional | yes | O(n) | splice, iterator erase | poor cache locality |
| `forward_list` | singly linked nodes | forward | yes | O(n) | minimal-overhead linked | no `size()`, no back ops |
| `set` / `multiset` | usually red-black tree | bidirectional | sorted | O(log n) | sorted unique / dup keys | no random access |
| `map` / `multimap` | usually red-black tree | bidirectional | sorted by key | O(log n) | sorted key-value | `operator[]` only on `map` |
| `unordered_set` / `unordered_map` | bucketed hash table | forward at least | no | avg O(1) | membership / frequency | rehash invalidates iters |
| `stack` | adaptor over `deque` | none exposed | LIFO only | top O(1) | DFS, matching, mono stack | no iteration |
| `queue` | adaptor over `deque` | none exposed | FIFO only | front/back O(1) | BFS | no random access |
| `priority_queue` | usually binary heap | none exposed | heap order | top O(1) | repeated max/min extract | no decrease-key |
| `string` | contiguous char buffer | random access, contiguous | yes | O(1) index | parsing, text assembly | mutating ops invalidate ptrs |
| `bitset<N>` | fixed-size bit sequence | no normal iterators | index order | O(1) bit access | dense boolean flags | compile-time size |

---

## Containers

### Sequence Containers

Sequence containers maintain elements in the order you insert them.

---

#### `std::array<T, N>`

**Header:** `<array>`

**When to use:** fixed-size collections known at compile time — board grids, direction vectors, small lookup tables.

**How it works internally (beginner-friendly):**
`std::array` is a thin wrapper around a plain C-style array `T[N]`. The elements live directly inside the object (on the stack if the array is a local variable). There is no heap allocation and no indirection — the compiler knows the exact size at compile time. Think of it as a safer, STL-compatible version of `int arr[10]`.

**Standard guarantee:** fixed size, contiguous storage, no heap allocation caused by the container itself.

| Function(s) | What it does | Time | Extra space | Notes |
|---|---|---|---|---|
| `operator[]` | unchecked indexed access | O(1) | O(1) | UB if out of range |
| `at()` | bounds-checked indexed access | O(1) | O(1) | throws on bad index |
| `front()`, `back()` | first / last element | O(1) | O(1) | |
| `data()` | pointer to first element | O(1) | O(1) | bridge to C APIs |
| `begin()`, `end()`, `rbegin()`, `rend()` | iterator access | O(1) | O(1) | contiguous/random-access |
| `empty()`, `size()`, `max_size()` | capacity queries | O(1) | O(1) | all `constexpr` |
| `fill(value)` | assign every element | O(n) | O(1) | |
| `swap(other)` | swap element-wise | O(n) | O(1) | unlike most container swaps |

**Iterator invalidation:** iterators never invalidate (size never changes).

**Interview patterns:**
- Direction arrays: `std::array<std::pair<int,int>, 4> dirs = {{{0,1},{0,-1},{1,0},{-1,0}}};`
- Small constant lookup tables to avoid magic numbers.

```cpp
#include <array>
#include <iostream>

int main() {
    constexpr std::array<std::pair<int,int>, 4> dirs = {{{0,1},{0,-1},{1,0},{-1,0}}};

    int r = 3, c = 4, rows = 10, cols = 10;
    for (auto [dr, dc] : dirs) {
        int nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
            std::cout << "neighbor: (" << nr << ", " << nc << ")\n";
        }
    }
}
```

---

#### `std::vector<T>`

**Header:** `<vector>`

**When to use:** the default container for almost everything — dynamic arrays, adjacency lists, stacks (with `push_back`/`pop_back`), result accumulation.

**How it works internally (beginner-friendly):**
A vector owns one contiguous block of heap memory. It tracks three things: a pointer to the buffer, the current `size` (how many elements are in use), and the `capacity` (how many elements the buffer can hold). When you `push_back` and `size == capacity`, the vector allocates a new larger buffer (typically 2x the old capacity), moves all existing elements over, and frees the old buffer. This is why `push_back` is *amortized* O(1) — most calls are O(1), but occasionally one triggers an O(n) reallocation.

```
Buffer:  [ elem0 | elem1 | elem2 | ---- | ---- ]
                                     ^         ^
                                   size=3   capacity=5
```

**Standard guarantee:** contiguous storage; growth factor is **not specified** (2x is typical but 1.5x is also common).

| Function(s) | What it does | Time | Extra space | Notes |
|---|---|---|---|---|
| `operator[]`, `at()` | indexed access | O(1) | O(1) | `at()` checks bounds |
| `front()`, `back()`, `data()` | endpoint / raw-buffer access | O(1) | O(1) | `data()` bridges to C APIs |
| `begin()`, `end()` etc. | iterator access | O(1) | O(1) | contiguous/random-access |
| `empty()`, `size()`, `capacity()` | size/capacity queries | O(1) | O(1) | `capacity() >= size()` |
| `reserve(n)` | request capacity for at least `n` elements | O(n) if realloc, else O(1) | O(n) temporary if realloc | does **not** change size |
| `resize(n)` | change logical size | O(\|new-old\|) + possible realloc | O(n) temporary if realloc | may value-init new elements |
| `shrink_to_fit()` | non-binding request to reduce capacity | O(n) if honored | O(n) temporary | implementation may ignore |
| `push_back(x)` | append existing element | amortized O(1), worst O(n) | O(1) or O(n) on realloc | copy/move into container |
| `emplace_back(args...)` | construct element in place at end | amortized O(1), worst O(n) | same as `push_back` | avoids a temporary in some cases |
| `pop_back()` | remove last element | O(1) | O(1) | does not reduce capacity |
| `insert(pos, ...)` | insert before `pos` | O(n + k) | O(k) + possible realloc | shifts trailing elements |
| `emplace(pos, args...)` | in-place construction before `pos` | O(n) | O(1) + possible realloc | still shifts elements |
| `erase(pos)` / `erase(first, last)` | remove and close gap | O(n) | O(1) | moves trailing elements left |
| `assign(...)` | replace contents wholesale | O(n) | O(n) if realloc needed | simpler than clear + inserts |
| `clear()` | erase all elements | O(n) | O(1) | capacity usually stays |
| `swap(other)` | exchange buffers | O(1) | O(1) | iterators follow their buffer |

**Iterator invalidation:**

| Operation | Invalidates |
|---|---|
| `push_back` (no realloc) | `end()` only |
| `push_back` (realloc) | **all** iterators |
| `insert` | at or after insertion point; **all** if realloc |
| `erase` | at or after erasure point |
| `clear` | **all** |
| `reserve` | **all** (if capacity changes) |

Key differences:

- `reserve()` vs `resize()`: `reserve()` changes capacity only; `resize()` changes size. Interview bug: `reserve(n)` then `v[i]` for `i < n` is still invalid if `size() == 0`.
- `push_back()` vs `emplace_back()`: `push_back()` takes an existing object; `emplace_back()` constructs in place from constructor arguments.
- `clear()` vs `shrink_to_fit()`: `clear()` removes elements but usually keeps capacity; `shrink_to_fit()` asks to release unused memory.

**Interview patterns:**
- Adjacency list: `vector<vector<int>> adj(n);`
- 2D grid: `vector<vector<int>> grid(m, vector<int>(n, 0));`
- Two pointers, sliding window, prefix sums — all use vector.
- Erase-remove idiom for filtering.

```cpp
#include <vector>
#include <algorithm>
#include <iostream>

int main() {
    int n = 5;
    std::vector<std::vector<int>> adj(n);
    adj[0].push_back(1);
    adj[0].push_back(2);
    adj[1].push_back(3);

    std::vector<int> nums = {1, 2, 3, 4, 5};
    std::vector<int> prefix(nums.size() + 1, 0);
    for (int i = 0; i < (int)nums.size(); ++i)
        prefix[i + 1] = prefix[i] + nums[i];
    std::cout << "sum [1,3): " << prefix[3] - prefix[1] << "\n";

    std::vector<int> v = {1, 2, 3, 4, 5, 6};
    v.erase(std::remove_if(v.begin(), v.end(), [](int x){ return x % 2 == 0; }), v.end());
}
```

---

#### `std::deque<T>`

**Header:** `<deque>`

**When to use:** need O(1) insertion/removal at both front and back — BFS queues, sliding window maximum.

**How it works internally (beginner-friendly):**
A deque ("double-ended queue") stores elements in multiple fixed-size blocks (chunks) rather than one contiguous buffer. A central "map" array holds pointers to each block. When you `push_front` or `push_back`, a new block is allocated only when the current end block is full. This means random access still works in O(1) — the deque computes `block_index = i / block_size` and `offset = i % block_size` — but there is one extra indirection compared to vector.

```
Map:   [ ptr0 | ptr1 | ptr2 | ptr3 ]
         |       |       |       |
         v       v       v       v
       [blk0] [blk1] [blk2] [blk3]
        (front elements)  (back elements)
```

**Standard guarantee:** constant-time random access and efficient insertion/removal at both ends; exact layout is not specified.

| Function(s) | What it does | Time | Extra space | Notes |
|---|---|---|---|---|
| `operator[]`, `at()` | indexed access | O(1) | O(1) | one more indirection than vector |
| `front()`, `back()` | endpoint access | O(1) | O(1) | |
| `begin()`, `end()` | iterator access | O(1) | O(1) | random-access, not contiguous |
| `empty()`, `size()` | capacity queries | O(1) | O(1) | no `capacity()` API |
| `push_front`, `push_back` | add at ends | amortized O(1) | O(1) | may re-map blocks |
| `emplace_front`, `emplace_back` | in-place add at ends | amortized O(1) | O(1) | |
| `pop_front`, `pop_back` | remove at ends | O(1) | O(1) | ideal for queues |
| `insert(pos, ...)` / `emplace(pos, ...)` | insert in middle | O(n) | O(1) or O(k) | shifts toward nearer end |
| `erase(pos)` / `erase(first, last)` | erase from middle/range | O(n) | O(1) | cheap only at ends |
| `clear()` | erase all elements | O(n) | O(1) | |

**Iterator invalidation:**

| Operation | Invalidates |
|---|---|
| `push_back` / `push_front` | **all** iterators (references stay valid) |
| `insert` in the middle | **all** |
| `erase` at front/back | only the erased element's iterator |
| `erase` in the middle | **all** |

Key differences from `vector`:

- `deque` supports `push_front()` / `pop_front()` efficiently; `vector` does not.
- `deque` is not contiguous — no `data()` pointer.
- `deque::end()` is invalidated by erasing the last element.

**Interview patterns:**
- Sliding window maximum (monotonic deque): store indices.
- BFS — `std::queue` uses `deque` as its default backend.

```cpp
#include <deque>
#include <vector>
#include <iostream>

std::vector<int> maxSlidingWindow(const std::vector<int>& nums, int k) {
    std::deque<int> dq;
    std::vector<int> result;
    for (int i = 0; i < (int)nums.size(); ++i) {
        while (!dq.empty() && dq.front() <= i - k) dq.pop_front();
        while (!dq.empty() && nums[dq.back()] <= nums[i]) dq.pop_back();
        dq.push_back(i);
        if (i >= k - 1) result.push_back(nums[dq.front()]);
    }
    return result;
}

int main() {
    auto res = maxSlidingWindow({1,3,-1,-3,5,3,6,7}, 3);
    for (int x : res) std::cout << x << " "; // 3 3 5 5 6 7
}
```

---

#### `std::list<T>`

**Header:** `<list>`

**When to use:** need O(1) insert/erase at any known position (given an iterator), or O(1) splicing of sublists. LRU cache is the classic interview use case.

**How it works internally (beginner-friendly):**
A list is a classic doubly linked list. Each element lives in its own heap-allocated node containing the value plus a `prev` and `next` pointer. Inserting or erasing at a known iterator is O(1) because you just relink two pointers without moving any other data. The downside is terrible cache locality — nodes are scattered across the heap, so iterating a list causes many cache misses compared to a contiguous vector.

```
[sentinel] <-> [node A] <-> [node B] <-> [node C] <-> [sentinel]
  head/tail      prev/next    prev/next    prev/next
```

**Standard guarantee:** bidirectional iteration, stable iterators/references except for erased elements, efficient splice.

| Function(s) | What it does | Time | Extra space | Notes |
|---|---|---|---|---|
| `front()`, `back()` | endpoint access | O(1) | O(1) | no random access |
| `begin()`, `end()` | iterator access | O(1) | O(1) | bidirectional iterators |
| `empty()`, `size()` | capacity queries | O(1) | O(1) | `size()` is O(1) since C++11 |
| `push_front`, `push_back` | add at ends | O(1) | O(1) | node alloc per insert |
| `emplace_front`, `emplace_back` | in-place add at ends | O(1) | O(1) | |
| `insert(pos, x)` / `emplace(pos, ...)` | insert before iterator | O(1) given position | O(1) | finding position is O(n) |
| `erase(pos)` / `erase(first, last)` | erase at iterator / range | O(1) single, O(k) range | O(1) | other iterators stay valid |
| `splice(...)` | relink nodes from another list | O(1) for whole/single, O(k) for range | O(1) | moves nodes, not values |
| `remove(val)`, `remove_if(pred)` | erase matching nodes | O(n) | O(1) | actually erases, unlike `std::remove_if` |
| `unique()` | erase consecutive duplicates | O(n) | O(1) | only adjacent runs |
| `merge(other)` | merge two sorted lists | O(n + m) | O(1) | both must be sorted |
| `sort()` | member sort | O(n log n) | O(1) extra pointers | use this, not `std::sort` |
| `reverse()` | reverse links | O(n) | O(1) | no data movement |

**Iterator invalidation:** only the erased element's iterator is invalidated. All other iterators and references remain valid.

Key differences:

- `list::remove_if()` vs `std::remove_if()`: the member actually erases nodes; the algorithm only partitions and needs `erase`.
- `sort()` on `list` is a member because `std::sort` requires random-access iterators.
- `splice()` moves nodes, not values — O(1) relinking.

**Interview patterns:**
- **LRU Cache:** `std::list` + `std::unordered_map<key, list::iterator>`.
- Any problem requiring stable iterators after insert/erase.

```cpp
#include <list>
#include <unordered_map>
#include <iostream>

class LRUCache {
    int capacity;
    std::list<std::pair<int,int>> order;
    std::unordered_map<int, std::list<std::pair<int,int>>::iterator> map;
public:
    LRUCache(int cap) : capacity(cap) {}

    int get(int key) {
        auto it = map.find(key);
        if (it == map.end()) return -1;
        order.splice(order.begin(), order, it->second);
        return it->second->second;
    }

    void put(int key, int value) {
        auto it = map.find(key);
        if (it != map.end()) {
            it->second->second = value;
            order.splice(order.begin(), order, it->second);
            return;
        }
        if ((int)order.size() == capacity) {
            map.erase(order.back().first);
            order.pop_back();
        }
        order.emplace_front(key, value);
        map[key] = order.begin();
    }
};

int main() {
    LRUCache cache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    std::cout << cache.get(1) << "\n"; // 1
    cache.put(3, 3);                   // evicts key 2
    std::cout << cache.get(2) << "\n"; // -1
}
```

---

#### `std::forward_list<T>`

**Header:** `<forward_list>`

**When to use:** memory-critical singly-linked list scenarios. Rarely used in interviews; prefer `std::list` unless memory is a concern.

**How it works internally (beginner-friendly):**
A forward_list is a singly linked list — each node has a value and a `next` pointer (no `prev`). This saves one pointer per node compared to `std::list`. Because there is no `prev`, you can only insert/erase *after* a known position, not before it. The special `before_begin()` iterator points to a sentinel before the first element so that you can insert at the front.

**Standard guarantee:** forward iteration only; no `size()`, no back operations.

| Function(s) | What it does | Time | Extra space | Notes |
|---|---|---|---|---|
| `before_begin()` | iterator before first | O(1) | O(1) | needed because inserts happen "after" |
| `begin()`, `end()` | iterator access | O(1) | O(1) | forward iterators only |
| `empty()` | emptiness check | O(1) | O(1) | no `size()` |
| `front()` | first element | O(1) | O(1) | no `back()` |
| `push_front`, `emplace_front` | insert at front | O(1) | O(1) | primary fast operation |
| `pop_front()` | remove front | O(1) | O(1) | |
| `insert_after(pos, x)` / `emplace_after(pos, ...)` | insert after iterator | O(1) given position | O(1) | no plain `insert` |
| `erase_after(pos)` / `erase_after(first, last)` | erase after iterator / range | O(1) or O(k) | O(1) | |
| `remove(val)`, `remove_if(pred)` | erase matching nodes | O(n) | O(1) | actually erases |
| `unique()`, `merge()`, `sort()`, `reverse()`, `splice_after()` | linked-list special ops | O(n) or O(n log n) | O(1) | `splice_after` is the singly-linked analog |

**Iterator invalidation:** only erased elements are invalidated.

**Interview patterns:** rare in interviews; linked-list reversal/cycle-detection problems are usually implemented with raw pointers or custom `ListNode`.

```cpp
#include <forward_list>
#include <iostream>

int main() {
    std::forward_list<int> fl = {1, 2, 3, 4};
    fl.push_front(0);
    fl.insert_after(fl.begin(), 99);       // {0, 99, 1, 2, 3, 4}
    fl.remove_if([](int x){ return x > 3; });

    for (int x : fl) std::cout << x << " ";
}
```

---

#### Sequence Container Comparison Table

| Container | Internal Structure | Random Access | Insert Front | Insert Back | Insert Middle | Erase | Memory Layout |
|---|---|---|---|---|---|---|---|
| `std::array` | fixed C-array | O(1) | N/A | N/A | N/A | N/A | contiguous, stack |
| `std::vector` | dynamic array | O(1) | O(n) | amort. O(1) | O(n) | O(n) | contiguous, heap |
| `std::deque` | array of blocks | O(1) | amort. O(1) | amort. O(1) | O(n) | O(n) | chunked, heap |
| `std::list` | doubly-linked list | N/A | O(1) | O(1) | O(1)\* | O(1)\* | scattered, heap |
| `std::forward_list` | singly-linked list | N/A | O(1) | N/A | O(1)\* | O(1)\* | scattered, heap |

*\* Given an iterator to the position. Finding the position is O(n).*

**Decision heuristic:**
1. Need random access? → `vector` or `deque`.
2. Need fast front insertion? → `deque`.
3. Need stable iterators and O(1) splice? → `list`.
4. Fixed size known at compile time? → `array`.
5. Default choice for everything else? → **`vector`**.

---

### Associative Containers (Ordered)

Ordered associative containers store elements in a **sorted** order (by key). All major operations are O(log n).

**How they work internally (beginner-friendly):**
All four ordered containers (`set`, `multiset`, `map`, `multimap`) are **usually** implemented as **red-black trees** — a type of self-balancing binary search tree. Each element is a node in the tree with a value, left/right child pointers, a parent pointer, and a color bit (red or black). The balancing rules guarantee that the tree height never exceeds 2 × log₂(n), which is why search/insert/erase are all O(log n). The tree stays sorted by traversing it in-order: left subtree → node → right subtree.

```
        [4, black]
       /          \
   [2, red]     [6, red]
   /    \       /    \
 [1,B] [3,B] [5,B] [7,B]
```

The standard does not require red-black trees specifically — it only requires logarithmic complexity and bidirectional iterators. But every major implementation (GCC, Clang, MSVC) uses red-black trees.

---

#### `std::set<T>`

**Header:** `<set>`

**When to use:** maintain a sorted collection of unique elements with O(log n) insert/find/erase — ordered statistics, range queries, maintaining sorted order online.

| Function(s) | What it does | Time | Extra space | Notes |
|---|---|---|---|---|
| `insert(val)` | insert if key absent | O(log n) | O(1) | returns `{iterator, bool}` |
| `insert(first, last)` | range insertion | O(k log(n + k)) | O(1) | sorted input may optimize |
| `emplace(args...)`, `emplace_hint(hint, args...)` | in-place insertion | O(log n) or amortized O(1) near correct hint | O(1) | hint helps only if accurate |
| `erase(it)` | erase known node | amortized O(1) | O(1) | |
| `erase(key)` | erase matching key | O(log n) | O(1) | returns `0` or `1` |
| `erase(first, last)` | erase range | O(log n + k) | O(1) | |
| `find(key)`, `contains(key)` | lookup key | O(log n) | O(1) | `contains` is C++20 |
| `count(key)` | count matches | O(log n) | O(1) | only `0` or `1` for `set` |
| `lower_bound(key)` | first element `>= key` | O(log n) | O(1) | key tool for ordered queries |
| `upper_bound(key)` | first element `> key` | O(log n) | O(1) | |
| `equal_range(key)` | `{lower_bound, upper_bound}` | O(log n) | O(1) | |
| `extract(key/it)` | detach node without destroying | O(log n) or amortized O(1) by it | O(1) | useful for key mutation (C++17) |
| `merge(other)` | transfer non-conflicting nodes | O(k log(n + 1)) | O(1) | source keeps duplicates (C++17) |
| `begin()` / `end()` | min/max access | O(1) | O(1) | |

**Iterator invalidation:** only erased element's iterator is invalidated. Insert never invalidates existing iterators.

**Interview patterns:**
- Maintaining a sorted window of elements.
- Finding the closest value: use `lower_bound`, then check the predecessor.
- Ordered set as a "sorted list" with fast insert/delete.

```cpp
#include <set>
#include <iostream>

int main() {
    std::set<int> s = {5, 1, 3, 7, 2};
    s.insert(4);

    int target = 6;
    auto it = s.lower_bound(target);
    int closest = *it;
    if (it != s.begin()) {
        --it;
        if (target - *it <= closest - target)
            closest = *it;
    }
    std::cout << "closest to " << target << ": " << closest << "\n";
}
```

---

#### `std::multiset<T>`

**Header:** `<set>`

**When to use:** sorted collection that allows duplicates — sliding window median, frequency-sorted data.

Same complexity as `std::set`. Key differences:
- `insert` always succeeds (duplicates allowed).
- `erase(val)` removes **all** copies; use `erase(find(val))` to remove one.
- `count(val)` can return > 1 and is O(log n + k) where k is the count.

```cpp
#include <set>
#include <iostream>

int main() {
    std::multiset<int> ms = {1, 3, 3, 5, 5, 5};
    std::cout << "count of 5: " << ms.count(5) << "\n"; // 3

    auto it = ms.find(5);
    if (it != ms.end()) ms.erase(it);
    std::cout << "count of 5 after erase: " << ms.count(5) << "\n"; // 2
}
```

---

#### `std::map<K, V>`

**Header:** `<map>`

**When to use:** need a sorted key-value store — ordered frequency map, coordinate compression, interval tracking.

| Function(s) | What it does | Time | Extra space | Notes |
|---|---|---|---|---|
| `operator[](key)` | access mapped value, inserting default if missing | O(log n) | O(1) | only on non-const `map` |
| `at(key)` | access without insertion | O(log n) | O(1) | throws if missing |
| `insert({k, v})`, `emplace(...)` | insert if absent | O(log n) | O(1) | does not overwrite existing |
| `insert_or_assign(key, value)` | insert or overwrite | O(log n) | O(1) | C++17 |
| `try_emplace(key, args...)` | insert only if absent, construct lazily | O(log n) | O(1) | avoids constructing on collision (C++17) |
| `erase(it)` / `erase(key)` / `erase(range)` | erase entries | amort O(1) / O(log n) / O(log n + k) | O(1) | |
| `find`, `contains`, `count` | key lookup | O(log n) | O(1) | `count` is `0` or `1` |
| `lower_bound` / `upper_bound` / `equal_range` | ordered key queries | O(log n) | O(1) | essential for interval problems |
| `extract`, `merge` | node-handle transfers | logarithmic | O(1) | C++17 |

Key differences:

- `operator[]` vs `at()`: `operator[]` inserts missing keys; `at()` does not.
- `insert` vs `insert_or_assign` vs `try_emplace`:
  - `insert`: keep old value if key exists
  - `insert_or_assign`: overwrite old value if key exists
  - `try_emplace`: do nothing if key exists, avoid constructing value unnecessarily

**Iterator invalidation:** same as `std::set` — only erased iterator is invalidated.

**Interview patterns:**
- Ordered map for interval/range problems.
- `operator[]` is convenient but inserts a default value on missing key — use `find` or `count` for read-only contexts.

```cpp
#include <map>
#include <iostream>
#include <string>

int main() {
    std::map<std::string, int> freq;
    std::string words[] = {"apple", "banana", "apple", "cherry", "banana", "apple"};
    for (const auto& w : words) freq[w]++;

    for (const auto& [word, count] : freq)
        std::cout << word << ": " << count << "\n";
}
```

---

#### `std::multimap<K, V>`

**Header:** `<map>`

**When to use:** sorted key-value store allowing duplicate keys — grouping by key without aggregation. Less common in interviews; usually `map<K, vector<V>>` is preferred.

Same complexity as `std::map`. No `operator[]` (ambiguous with duplicates). Use `equal_range` to get all values for a key.

```cpp
#include <map>
#include <iostream>

int main() {
    std::multimap<int, std::string> mm;
    mm.insert({1, "a"});
    mm.insert({1, "b"});
    mm.insert({2, "c"});

    auto [lo, hi] = mm.equal_range(1);
    for (auto it = lo; it != hi; ++it)
        std::cout << it->first << " -> " << it->second << "\n";
}
```

---

#### Ordered Associative Container Complexity Summary

| Operation | `set` | `multiset` | `map` | `multimap` |
|---|---|---|---|---|
| Insert | O(log n) | O(log n) | O(log n) | O(log n) |
| Erase (by key) | O(log n) | O(log n + k) | O(log n) | O(log n + k) |
| Find | O(log n) | O(log n) | O(log n) | O(log n) |
| `lower_bound` | O(log n) | O(log n) | O(log n) | O(log n) |
| Iteration (full) | O(n) | O(n) | O(n) | O(n) |

**Iterator invalidation (all ordered containers):** erasing invalidates only the erased iterator. Insertion never invalidates any iterator.

---

### Unordered Containers

Unordered containers use **hash tables** for average-case O(1) lookup. They do not maintain any order.

**How they work internally (beginner-friendly):**
An unordered container maintains an array of "buckets." When you insert a key, the container computes `hash(key) % bucket_count` to pick a bucket, then stores the element in that bucket. If two keys map to the same bucket (a *collision*), they are chained together — typically as a linked list within that bucket. When the average bucket occupancy (*load factor* = `size / bucket_count`) exceeds a threshold (default 1.0), the container *rehashes*: allocates a bigger bucket array and re-distributes all elements. Rehashing is O(n) and invalidates all iterators.

```
Bucket 0: → [key_A] → [key_D]
Bucket 1: → (empty)
Bucket 2: → [key_B]
Bucket 3: → [key_C] → [key_E] → [key_F]
```

Worst case: all keys hash to the same bucket → O(n) per operation. This can happen with bad hash functions or adversarial inputs.

---

#### Shared Bucket-Management APIs

These matter across all unordered containers:

| Function | What it does | Time | Notes |
|---|---|---|---|
| `bucket_count()` | number of buckets | O(1) | not number of elements |
| `bucket(key)` | bucket index for key | O(1) avg | debugging / analysis tool |
| `bucket_size(i)` | elements in bucket `i` | O(bucket size) | collision inspector |
| `load_factor()` | `size() / bucket_count()` | O(1) | average bucket occupancy |
| `max_load_factor()` | read/set rehash threshold | O(1) | tuning knob |
| `rehash(n)` | force bucket count ≥ `n` | average O(n) | invalidates all iterators |
| `reserve(n)` | ensure buckets for ≥ `n` elements | average O(n) | best practice before bulk insert |

`rehash` talks in bucket counts; `reserve` talks in expected element count. Prefer `reserve()` for normal usage.

---

#### `std::unordered_set<T>`

**Header:** `<unordered_set>`

**When to use:** fast membership testing — "have I seen this element?", duplicate detection, graph visited sets when order doesn't matter.

**Internal structure:** hash table with separate chaining (linked list per bucket). Rehashes when load factor exceeds threshold (default 1.0).

| Operation | Average | Worst Case |
|---|---|---|
| `insert(val)` / `emplace(...)` | O(1) | O(n) |
| `erase(val)` / `erase(it)` | O(1) | O(n) |
| `find(val)` / `contains(val)` | O(1) | O(n) |
| `count(val)` | O(1) | O(n) |
| `size()` | O(1) | O(1) |

**Iterator invalidation:**

| Operation | Invalidates |
|---|---|
| `insert` (no rehash) | nothing |
| `insert` (rehash) | **all** iterators |
| `erase` | only the erased element's iterator |

**Interview patterns:**
- Two-sum: store seen values.
- Checking for duplicates in O(n).
- Set intersection/difference when order is irrelevant.

```cpp
#include <unordered_set>
#include <vector>
#include <iostream>

bool containsDuplicate(const std::vector<int>& nums) {
    std::unordered_set<int> seen;
    for (int x : nums) {
        if (!seen.insert(x).second) return true;
    }
    return false;
}

int main() {
    std::cout << std::boolalpha << containsDuplicate({1,2,3,1}) << "\n"; // true
}
```

---

#### `std::unordered_map<K, V>`

**Header:** `<unordered_map>`

**When to use:** **the** most-used container in DSA after `vector`. Frequency counting, memoization, two-sum pattern, graph adjacency when order doesn't matter.

Same internal structure and complexity as `unordered_set` but stores key-value pairs.

| Operation | Average | Worst Case |
|---|---|---|
| `operator[](key)` | O(1) | O(n) |
| `at(key)` | O(1) | O(n) |
| `insert({k,v})` / `emplace(...)` | O(1) | O(n) |
| `insert_or_assign(key, value)` | O(1) | O(n) |
| `try_emplace(key, args...)` | O(1) | O(n) |
| `erase(key)` / `erase(it)` | O(1) | O(n) |
| `find(key)` / `contains(key)` / `count(key)` | O(1) | O(n) |
| `size()` | O(1) | O(1) |

**Iterator invalidation:** same as `unordered_set`.

Key differences:

- `unordered_map` vs `map`: average O(1) vs O(log n), but no order and weaker worst case.
- `operator[]` vs `at()`: same insertion-on-miss semantics as `map`.
- `try_emplace` is the API to remember when mapped-value construction is expensive.

**Interview patterns:**
- **Two-sum:** store value → index.
- **Frequency map:** `umap[x]++`.
- **Memoization:** `unordered_map<int, int> memo;` in recursive DP.
- **Group anagrams:** sort each string, use as key.

```cpp
#include <unordered_map>
#include <vector>
#include <iostream>

std::vector<int> twoSum(const std::vector<int>& nums, int target) {
    std::unordered_map<int, int> seen;
    for (int i = 0; i < (int)nums.size(); ++i) {
        int complement = target - nums[i];
        auto it = seen.find(complement);
        if (it != seen.end()) return {it->second, i};
        seen[nums[i]] = i;
    }
    return {};
}

int main() {
    auto res = twoSum({2, 7, 11, 15}, 9);
    std::cout << res[0] << ", " << res[1] << "\n"; // 0, 1
}
```

---

#### `std::unordered_multiset<T>` and `std::unordered_multimap<K, V>`

**Headers:** `<unordered_set>`, `<unordered_map>`

Allow duplicate keys. Same average/worst complexity. Rarely used in interviews — typically a regular `unordered_map<K, int>` for counting or `unordered_map<K, vector<V>>` for grouping is clearer.

`erase(val)` removes **all** matching elements. Use `erase(find(val))` to remove one.

---

#### Hash Collisions and Worst-Case Behavior

The O(n) worst case happens when many keys hash to the same bucket. This is rare with good hash functions but can be **exploited in adversarial inputs** (e.g., Codeforces anti-hash tests).

**Mitigations:**
- Use `reserve(n)` to preallocate buckets and reduce rehashing.
- For `int` keys, a custom hash with a random seed can help:

```cpp
#include <unordered_map>
#include <chrono>

struct SafeHash {
    size_t operator()(long long x) const {
        x ^= x >> 33;
        x *= 0xff51afd7ed558ccdLL;
        x ^= x >> 33;
        x *= 0xc4ceb9fe1a85ec53LL;
        x ^= x >> 33;
        return x ^ (size_t)std::chrono::steady_clock::now().time_since_epoch().count();
    }
};

// usage: std::unordered_map<long long, int, SafeHash> umap;
```

#### When to Choose Ordered vs Unordered

| Criterion | `map`/`set` | `unordered_map`/`unordered_set` |
|---|---|---|
| Average lookup | O(log n) | O(1) |
| Worst-case lookup | O(log n) | O(n) |
| Maintains sorted order | yes | no |
| `lower_bound`/`upper_bound` | yes | no |
| Memory overhead | ~3 pointers/node | hash table + buckets |
| Custom types | needs `operator<` | needs `hash` + `operator==` |
| Use when... | need order, range queries | need speed, no ordering |

---

### Container Adaptors

Adaptors wrap an underlying container and expose a restricted interface. They do **not** expose iterators.

---

#### `std::stack<T>`

**Header:** `<stack>`

**Default underlying:** `std::deque<T>` (can also use `vector` or `list`).

**How it works internally (beginner-friendly):**
A stack is not a separate data structure — it is a wrapper that restricts a sequence container (by default `deque`) to LIFO (Last In, First Out) access only. You can only push to the top, peek at the top, and pop from the top.

**Interface:** `push`, `pop`, `top`, `size`, `empty`.

**When to use:** LIFO semantics — expression parsing, DFS (explicit stack), matching brackets, monotonic stack.

```cpp
#include <stack>
#include <string>
#include <iostream>

bool isValidParentheses(const std::string& s) {
    std::stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') {
            st.push(c);
        } else {
            if (st.empty()) return false;
            char top = st.top(); st.pop();
            if ((c == ')' && top != '(') ||
                (c == '}' && top != '{') ||
                (c == ']' && top != '['))
                return false;
        }
    }
    return st.empty();
}

int main() {
    std::cout << std::boolalpha << isValidParentheses("({[]})") << "\n"; // true
    std::cout << std::boolalpha << isValidParentheses("({[})") << "\n";  // false
}
```

---

#### `std::queue<T>`

**Header:** `<queue>`

**Default underlying:** `std::deque<T>`.

**How it works internally (beginner-friendly):**
Like `stack`, a queue is a wrapper — it restricts a sequence container to FIFO (First In, First Out) access. You push to the back and pop from the front. The default `deque` backend is ideal because it supports both `push_back` and `pop_front` efficiently.

**Interface:** `push`, `pop`, `front`, `back`, `size`, `empty`.

**When to use:** FIFO semantics — BFS, level-order traversal, task scheduling.

```cpp
#include <queue>
#include <vector>
#include <iostream>

int shortestPath(std::vector<std::vector<int>>& grid, std::pair<int,int> src, std::pair<int,int> dst) {
    int m = grid.size(), n = grid[0].size();
    std::queue<std::pair<int,int>> q;
    q.push(src);
    grid[src.first][src.second] = -1;
    int steps = 0;
    int dirs[] = {0,1,0,-1,0};
    while (!q.empty()) {
        int sz = q.size();
        while (sz--) {
            auto [r, c] = q.front(); q.pop();
            if (r == dst.first && c == dst.second) return steps;
            for (int d = 0; d < 4; ++d) {
                int nr = r + dirs[d], nc = c + dirs[d+1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 0) {
                    grid[nr][nc] = -1;
                    q.push({nr, nc});
                }
            }
        }
        ++steps;
    }
    return -1;
}

int main() {
    std::vector<std::vector<int>> grid = {
        {0,0,0},
        {0,1,0},
        {0,0,0}
    };
    std::cout << shortestPath(grid, {0,0}, {2,2}) << "\n"; // 4
}
```

---

#### `std::priority_queue<T>`

**Header:** `<queue>`

**Default:** max-heap. Elements sorted so `top()` returns the largest.

**How it works internally (beginner-friendly):**
A priority queue stores elements as a **binary heap** inside a `std::vector`. A binary heap is a complete binary tree where every parent is greater than or equal to its children (for a max-heap). The tree is stored flat in the vector: for element at index `i`, its children are at `2i+1` and `2i+2`, and its parent is at `(i-1)/2`. `push` adds to the end and "bubbles up"; `pop` swaps the root with the last element, removes it, and "bubbles down." Both are O(log n).

```
Vector:  [ 9, 7, 5, 3, 1, 4, 2 ]

Heap view:
        9
       / \
      7   5
     / \ / \
    3  1 4  2
```

| Operation | Complexity |
|---|---|
| `push` | O(log n) |
| `pop` | O(log n) |
| `top` | O(1) |
| `size` / `empty` | O(1) |

**When to use:** Dijkstra's algorithm, k-th largest/smallest, merge k sorted lists, task scheduling with priorities.

**Min-heap:** use `std::greater<T>` as comparator:

```cpp
#include <queue>
#include <vector>
#include <iostream>

int main() {
    std::priority_queue<int> maxHeap;
    maxHeap.push(3); maxHeap.push(1); maxHeap.push(5);
    std::cout << "max: " << maxHeap.top() << "\n"; // 5

    std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;
    minHeap.push(3); minHeap.push(1); minHeap.push(5);
    std::cout << "min: " << minHeap.top() << "\n"; // 1
}
```

**Custom comparator (e.g., for Dijkstra):**

```cpp
#include <queue>
#include <vector>
#include <iostream>
#include <functional>

int main() {
    using Edge = std::pair<int, int>; // {distance, node}

    std::priority_queue<Edge, std::vector<Edge>, std::greater<Edge>> pq;
    pq.push({10, 1});
    pq.push({3, 2});
    pq.push({7, 3});

    while (!pq.empty()) {
        auto [dist, node] = pq.top(); pq.pop();
        std::cout << "node " << node << " dist " << dist << "\n";
    }
}
```

**Custom comparator with lambda (C++20 or workaround):**

```cpp
#include <queue>
#include <vector>
#include <iostream>

int main() {
    auto cmp = [](const std::vector<int>& a, const std::vector<int>& b) {
        return a[0] + a[1] > b[0] + b[1]; // min-heap by sum
    };
    std::priority_queue<std::vector<int>, std::vector<std::vector<int>>, decltype(cmp)> pq(cmp);

    pq.push({1, 2});
    pq.push({3, 4});
    pq.push({0, 1});

    while (!pq.empty()) {
        auto& top = pq.top();
        std::cout << "[" << top[0] << "," << top[1] << "] sum=" << top[0]+top[1] << "\n";
        pq.pop();
    }
}
```

Key differences:

- Default is a **max-heap**. `std::greater<T>` makes a min-heap.
- There is no decrease-key or iterator access; Dijkstra commonly pushes duplicate states and skips stale ones.
- C++23 adds `push_range(range)` for batch insertion.

---

### Utility Types

---

#### `std::pair<T1, T2>`

**Header:** `<utility>`

The workhorse of DSA: used for coordinate pairs, edge lists, frequency pairs, map entries.

```cpp
#include <utility>
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::pair<int, int> p = {3, 5};
    auto [x, y] = p; // C++17 structured binding

    std::vector<std::pair<int,int>> intervals = {{3,5},{1,4},{1,2}};
    std::sort(intervals.begin(), intervals.end());

    for (auto [a, b] : intervals)
        std::cout << "[" << a << "," << b << "] ";
}
```

---

#### `std::tuple<T...>`

**Header:** `<tuple>`

Generalization of `pair` for 3+ elements. Heavier syntax; prefer `pair` or a named struct when possible.

```cpp
#include <tuple>
#include <iostream>

int main() {
    std::tuple<int, double, std::string> t = {1, 3.14, "hello"};

    std::cout << std::get<0>(t) << " " << std::get<2>(t) << "\n";

    auto [i, d, s] = t;
    std::cout << i << " " << d << " " << s << "\n";
}
```

---

#### `std::optional<T>` (C++17)

**Header:** `<optional>`

Represents a value that may or may not be present. Cleaner than using sentinel values like `-1` or `INT_MAX`.

```cpp
#include <optional>
#include <vector>
#include <iostream>

std::optional<int> findFirst(const std::vector<int>& v, int target) {
    for (int i = 0; i < (int)v.size(); ++i)
        if (v[i] == target) return i;
    return std::nullopt;
}

int main() {
    auto idx = findFirst({10, 20, 30}, 20);
    if (idx.has_value())
        std::cout << "found at index " << *idx << "\n";
    else
        std::cout << "not found\n";

    std::cout << findFirst({1,2,3}, 99).value_or(-1) << "\n"; // -1
}
```

---

#### `std::bitset<N>`

**Header:** `<bitset>`

Fixed-size bit array. Size `N` must be a compile-time constant. Useful for subset DP, bitmask problems, sieve of Eratosthenes.

**How it works internally (beginner-friendly):**
A bitset is stored as one or more machine words (e.g., 64-bit integers). Each bit in the word represents one position in the bitset. Operations like `count()` use hardware-accelerated popcount, and bitwise operations like `&`, `|`, `^` process 64 bits at a time. This makes bitset dramatically faster and more compact than a `vector<bool>` for fixed-size bit manipulation.

| Operation | Complexity |
|---|---|
| `set(i)` / `reset(i)` / `flip(i)` | O(1) |
| `test(i)` / `operator[]` | O(1) |
| `count()` (popcount) | O(N/64) |
| `&`, `\|`, `^`, `~`, `<<`, `>>` | O(N/64) |
| `all()`, `any()`, `none()` | O(N/64) |
| `to_ulong()` / `to_string()` | O(N) |

```cpp
#include <bitset>
#include <iostream>

int main() {
    std::bitset<8> b("10110010");
    std::cout << "count: " << b.count() << "\n"; // 4
    std::cout << "test(1): " << b.test(1) << "\n"; // 1
    b.flip();
    std::cout << "flipped: " << b << "\n"; // 01001101

    constexpr int N = 100;
    std::bitset<N + 1> is_prime;
    is_prime.set();
    is_prime[0] = is_prime[1] = 0;
    for (int i = 2; i * i <= N; ++i)
        if (is_prime[i])
            for (int j = i * i; j <= N; j += i)
                is_prime[j] = 0;

    for (int i = 2; i <= N; ++i)
        if (is_prime[i]) std::cout << i << " ";
}
```

---

## Common Function Differences

### `push_back` vs `emplace_back`

- `push_back(obj)` inserts an existing object.
- `emplace_back(args...)` constructs the element in place from constructor arguments.
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
- `contains` is the clean boolean membership test (C++20).

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
- Interview bug: calling `reserve(n)` then writing `v[i]` for `i < n` is still invalid if `size() == 0`.

### `clear` vs erase-remove idiom vs container-member removal

- `clear()` erases everything.
- On `vector`/`deque`/`string`, use `erase(remove_if(...), end())`.
- On `list`/`forward_list`, prefer member `remove` / `remove_if`, because they really unlink nodes.

### `rehash` vs `reserve` on unordered containers

- `rehash(buckets)` talks in bucket counts.
- `reserve(elements)` talks in expected element count and derives bucket count from `max_load_factor()`.
- Prefer `reserve()` for normal usage.

---

## Algorithms

**Header:** `<algorithm>` (plus `<numeric>` for numeric algorithms).

All standard algorithms operate on **iterator ranges** `[first, last)`. They do not modify the container's size — they rearrange or read elements in-place.

---
### Sorting

#### `std::sort`

**Complexity:** O(n log n) average and worst case (introsort: quicksort + heapsort + insertion sort).

**Iterator requirement:** RandomAccessIterator (works with `vector`, `deque`, `array`; not `list`).

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v = {5, 2, 8, 1, 9};
    std::sort(v.begin(), v.end());          // ascending
    std::sort(v.begin(), v.end(), std::greater<int>()); // descending

    // custom comparator: sort by absolute value
    std::vector<int> w = {-3, 1, -5, 2};
    std::sort(w.begin(), w.end(), [](int a, int b) {
        return std::abs(a) < std::abs(b);
    });
    for (int x : w) std::cout << x << " "; // 1 2 -3 -5
}
```

#### `std::stable_sort`

**Complexity:** O(n log n) if extra memory available, else O(n log² n).

Preserves relative order of equal elements. Use when sort stability matters (e.g., multi-key sorting).

#### `std::partial_sort`

**Complexity:** O(n log k) where k = number of elements to sort.

Sorts only the first k elements in `[first, middle)`.

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v = {5, 2, 8, 1, 9, 3};
    std::partial_sort(v.begin(), v.begin() + 3, v.end());
    // first 3 are sorted: {1, 2, 3, ...rest unspecified}
    for (int x : v) std::cout << x << " ";
}
```

#### `std::nth_element`

**Complexity:** O(n) average.

Rearranges so the n-th element is in its sorted position; all elements before it are ≤ it, all after are ≥ it. The relative order of elements on either side is unspecified.

**DSA use-case:** finding the k-th smallest/largest element in O(n).

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v = {5, 2, 8, 1, 9, 3};
    int k = 2; // find 3rd smallest (0-indexed)
    std::nth_element(v.begin(), v.begin() + k, v.end());
    std::cout << "3rd smallest: " << v[k] << "\n"; // 3
}
```

---

### Searching

All binary search algorithms require a **sorted range**.

#### `std::binary_search`

Returns `bool` — whether the value exists. O(log n). Rarely useful in interviews (you usually need the position).

#### `std::lower_bound`

Returns iterator to **first element ≥ value**. O(log n).

#### `std::upper_bound`

Returns iterator to **first element > value**. O(log n).

#### `std::equal_range`

Returns `pair<it, it>` — the range `[lower_bound, upper_bound)`. O(log n).

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v = {1, 2, 2, 3, 4, 4, 4, 5};

    // first position where 4 can be inserted maintaining order
    auto lb = std::lower_bound(v.begin(), v.end(), 4);
    std::cout << "lower_bound(4) index: " << (lb - v.begin()) << "\n"; // 4

    // first position after all 4s
    auto ub = std::upper_bound(v.begin(), v.end(), 4);
    std::cout << "upper_bound(4) index: " << (ub - v.begin()) << "\n"; // 7

    // count of 4s = upper_bound - lower_bound
    std::cout << "count of 4: " << (ub - lb) << "\n"; // 3

    // binary search with custom comparator
    std::vector<std::pair<int,int>> intervals = {{1,3},{2,5},{4,7}};
    // find first interval with start >= 3
    auto it = std::lower_bound(intervals.begin(), intervals.end(), 3,
        [](const std::pair<int,int>& interval, int val) {
            return interval.first < val;
        });
    if (it != intervals.end())
        std::cout << "first with start>=3: [" << it->first << "," << it->second << "]\n";
}
```

---

### Modifying Algorithms

#### `std::reverse`

Reverses elements in-place. O(n). BidirectionalIterator.

```cpp
#include <algorithm>
#include <vector>

std::vector<int> v = {1,2,3,4,5};
std::reverse(v.begin(), v.end()); // {5,4,3,2,1}
```

#### `std::rotate`

Rotates elements so `middle` becomes the first element. O(n). ForwardIterator.

```cpp
#include <algorithm>
#include <vector>
// v = {1,2,3,4,5}, rotate left by 2
std::vector<int> v = {1,2,3,4,5};
std::rotate(v.begin(), v.begin() + 2, v.end()); // {3,4,5,1,2}
```

#### `std::unique`

Removes consecutive duplicates. Returns iterator to new logical end. O(n). Must `erase` the tail.

```cpp
#include <algorithm>
#include <vector>
std::vector<int> v = {1,1,2,2,3,3};
auto it = std::unique(v.begin(), v.end());
v.erase(it, v.end()); // {1,2,3}
```

#### `std::partition`

Rearranges elements so all satisfying a predicate come before those that don't. Returns iterator to the partition point. O(n).

```cpp
#include <algorithm>
#include <vector>
std::vector<int> v = {1,2,3,4,5,6};
auto it = std::partition(v.begin(), v.end(), [](int x){ return x % 2 == 0; });
// even numbers before it, odd numbers after
```

#### Erase-Remove Idiom

`std::remove` / `std::remove_if` shifts unwanted elements to the end and returns the new logical end. You must `erase` to actually shrink the container.

```cpp
#include <algorithm>
#include <vector>

std::vector<int> v = {1, 2, 3, 4, 5};
v.erase(std::remove(v.begin(), v.end(), 3), v.end()); // removes all 3s
// C++20: std::erase(v, 3);  — simpler
```

---

### Min/Max

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    int a = std::min(3, 5);            // 3
    int b = std::max(3, 5);            // 5
    auto [lo, hi] = std::minmax(5, 3); // lo=3, hi=5

    std::vector<int> v = {4, 1, 7, 3};
    auto minIt = std::min_element(v.begin(), v.end()); // points to 1
    auto maxIt = std::max_element(v.begin(), v.end()); // points to 7
    std::cout << "min: " << *minIt << " at index " << (minIt - v.begin()) << "\n";
    std::cout << "max: " << *maxIt << " at index " << (maxIt - v.begin()) << "\n";

    // with custom comparator
    auto it = std::min_element(v.begin(), v.end(), [](int a, int b) {
        return std::abs(a - 4) < std::abs(b - 4); // closest to 4
    });
    std::cout << "closest to 4: " << *it << "\n"; // 3 or 4
}
```

---

### Numeric Algorithms

**Header:** `<numeric>`

#### `std::accumulate`

```cpp
#include <numeric>
#include <vector>

std::vector<int> v = {1, 2, 3, 4, 5};
int sum = std::accumulate(v.begin(), v.end(), 0);        // 15
int product = std::accumulate(v.begin(), v.end(), 1, std::multiplies<int>()); // 120
```

#### `std::iota`

Fills a range with sequentially increasing values.

```cpp
#include <numeric>
#include <vector>

std::vector<int> v(5);
std::iota(v.begin(), v.end(), 0); // {0, 1, 2, 3, 4}
```

#### `std::partial_sum` (Prefix Sum Pattern)

```cpp
#include <numeric>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5};
    std::vector<int> prefix(v.size());
    std::partial_sum(v.begin(), v.end(), prefix.begin());
    // prefix = {1, 3, 6, 10, 15}

    // range sum [1, 3] = prefix[3] - prefix[0] = 10 - 1 = 9
    std::cout << "sum [1,3]: " << prefix[3] - prefix[0] << "\n";
}
```

#### `std::inner_product`

Computes dot product or generalized inner product.

```cpp
#include <numeric>
#include <vector>

std::vector<int> a = {1, 2, 3};
std::vector<int> b = {4, 5, 6};
int dot = std::inner_product(a.begin(), a.end(), b.begin(), 0); // 1*4+2*5+3*6 = 32
```

#### `std::reduce` (C++17)

Like `accumulate` but allows parallel execution (unspecified order). Safe only with associative+commutative operations.

```cpp
#include <numeric>
#include <vector>

std::vector<int> v = {1, 2, 3, 4, 5};
int sum = std::reduce(v.begin(), v.end()); // 15
```

#### `std::next_permutation` / `std::prev_permutation`

Generates the next/previous lexicographic permutation in-place. Returns `false` when wrapping around. O(n).

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v = {1, 2, 3};
    do {
        for (int x : v) std::cout << x << " ";
        std::cout << "\n";
    } while (std::next_permutation(v.begin(), v.end()));
    // prints all 6 permutations of {1,2,3}
}
```

---

### Predicate Algorithms

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v = {2, 4, 6, 8};

    bool allEven = std::all_of(v.begin(), v.end(), [](int x){ return x % 2 == 0; }); // true
    bool anyNeg  = std::any_of(v.begin(), v.end(), [](int x){ return x < 0; });       // false
    bool noneNeg = std::none_of(v.begin(), v.end(), [](int x){ return x < 0; });      // true

    int cnt = std::count(v.begin(), v.end(), 4);        // 1
    int cntIf = std::count_if(v.begin(), v.end(), [](int x){ return x > 5; }); // 2

    auto it = std::find(v.begin(), v.end(), 6);         // iterator to 6
    auto it2 = std::find_if(v.begin(), v.end(), [](int x){ return x > 5; }); // iterator to 6

    std::cout << std::boolalpha;
    std::cout << "all even: " << allEven << "\n";
    std::cout << "any neg: " << anyNeg << "\n";
    std::cout << "count > 5: " << cntIf << "\n";
}
```

---

### Set Operations (on Sorted Ranges)

All require **sorted** input ranges. Output goes to a destination iterator.

| Algorithm | Result |
|---|---|
| `std::merge` | merged sorted output |
| `std::set_union` | elements in A or B |
| `std::set_intersection` | elements in both A and B |
| `std::set_difference` | elements in A but not B |
| `std::set_symmetric_difference` | elements in A or B but not both |
| `std::includes` | true if A ⊇ B |

```cpp
#include <algorithm>
#include <vector>
#include <iostream>
#include <iterator>

int main() {
    std::vector<int> a = {1, 2, 3, 4, 5};
    std::vector<int> b = {3, 4, 5, 6, 7};

    std::vector<int> result;

    std::set_intersection(a.begin(), a.end(), b.begin(), b.end(), std::back_inserter(result));
    std::cout << "intersection: ";
    for (int x : result) std::cout << x << " "; // 3 4 5
    std::cout << "\n";

    result.clear();
    std::set_difference(a.begin(), a.end(), b.begin(), b.end(), std::back_inserter(result));
    std::cout << "a - b: ";
    for (int x : result) std::cout << x << " "; // 1 2
    std::cout << "\n";

    std::cout << "a includes b? " << std::boolalpha
              << std::includes(a.begin(), a.end(), b.begin(), b.end()) << "\n"; // false
}
```

---

### Heap Algorithms

These operate on a range as a **binary heap** (stored in a random-access container).

| Algorithm | What it does | Complexity |
|---|---|---|
| `std::make_heap` | builds a max-heap from a range | O(n) |
| `std::push_heap` | inserts last element into heap | O(log n) |
| `std::pop_heap` | moves max to end, re-heaps | O(log n) |
| `std::sort_heap` | sorts a heap range | O(n log n) |
| `std::is_heap` | checks if range is a valid heap | O(n) |

**Relationship to `priority_queue`:** `std::priority_queue` is a wrapper that uses these algorithms internally on a `vector`. Use raw heap algorithms when you need more control (e.g., accessing elements by index, or updating priorities).

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v = {3, 1, 4, 1, 5, 9};
    std::make_heap(v.begin(), v.end()); // max-heap: 9 is at front

    std::cout << "max: " << v.front() << "\n"; // 9

    std::pop_heap(v.begin(), v.end()); // moves 9 to back
    v.pop_back();                       // actually remove it

    v.push_back(7);
    std::push_heap(v.begin(), v.end()); // re-heapify with 7

    std::cout << "new max: " << v.front() << "\n"; // 7 or 5 depending on heap state

    std::sort_heap(v.begin(), v.end()); // sorts ascending
    for (int x : v) std::cout << x << " ";
}
```

---

## Iterator Categories and Requirements

| Category | Read | Write | Increment | Decrement | Random Access | Example Containers |
|---|---|---|---|---|---|---|
| **Input** | yes | no | `++` | no | no | `istream_iterator` |
| **Output** | no | yes | `++` | no | no | `ostream_iterator`, `back_inserter` |
| **Forward** | yes | yes | `++` | no | no | `forward_list`, `unordered_*` |
| **Bidirectional** | yes | yes | `++` | `--` | no | `list`, `set`, `map` |
| **Random Access** | yes | yes | `++` | `--` | `+n`, `-n`, `[]` | `vector`, `deque`, `array` |

**Which algorithms require which iterators:**

| Algorithm | Minimum Iterator Category |
|---|---|
| `find`, `count`, `for_each` | InputIterator |
| `copy`, `transform` | InputIterator + OutputIterator |
| `replace`, `fill` | ForwardIterator |
| `reverse`, `sort` (list's own) | BidirectionalIterator |
| `sort`, `nth_element`, `binary_search` | RandomAccessIterator |
| `lower_bound`, `upper_bound` | RandomAccessIterator (O(log n)); ForwardIterator (O(n)) |

**Practical note:** `std::sort` does **not** work on `std::list`. Use `list.sort()` (its member function that does merge sort).

---

## Lambda and Comparator Patterns

### Lambda Syntax

```cpp
[capture](parameters) -> return_type { body }
```

The return type is usually deduced and can be omitted.

### Capture Modes

| Syntax | Meaning |
|---|---|
| `[]` | capture nothing |
| `[x]` | capture `x` by value (copy) |
| `[&x]` | capture `x` by reference |
| `[=]` | capture all used variables by value |
| `[&]` | capture all used variables by reference |
| `[=, &x]` | all by value, except `x` by reference |
| `[&, x]` | all by reference, except `x` by value |

### Common Patterns

**Custom sort:**

```cpp
#include <algorithm>
#include <vector>
#include <string>

// sort strings by length, then alphabetically
std::vector<std::string> words = {"banana", "fig", "apple", "kiwi"};
std::sort(words.begin(), words.end(), [](const std::string& a, const std::string& b) {
    if (a.size() != b.size()) return a.size() < b.size();
    return a < b;
});
// {"fig", "kiwi", "apple", "banana"}
```

**Custom `priority_queue`:**

```cpp
#include <queue>
#include <vector>

auto cmp = [](const std::pair<int,int>& a, const std::pair<int,int>& b) {
    return a.second > b.second; // min-heap by second element
};
std::priority_queue<std::pair<int,int>, std::vector<std::pair<int,int>>, decltype(cmp)> pq(cmp);
```

**`find_if` with lambda:**

```cpp
#include <algorithm>
#include <vector>

std::vector<int> v = {1, 2, 3, 4, 5};
int threshold = 3;
auto it = std::find_if(v.begin(), v.end(), [threshold](int x) { return x > threshold; });
// *it == 4
```

### `std::function`

Type-erased callable wrapper. Useful for storing lambdas in data structures or passing them across function boundaries when templates are unwieldy.

```cpp
#include <functional>
#include <iostream>

// recursive lambda via std::function (useful for DFS/backtracking)
#include <vector>

int main() {
    std::vector<std::vector<int>> adj = {{1,2},{3},{3},{}};
    std::vector<bool> visited(4, false);

    std::function<void(int)> dfs = [&](int u) {
        visited[u] = true;
        std::cout << u << " ";
        for (int v : adj[u])
            if (!visited[v]) dfs(v);
    };

    dfs(0); // 0 1 3 2
}
```

> **C++23 note:** `std::function` has overhead (heap allocation, virtual dispatch). For local recursion, an alternative in C++23 is `this auto` deducing-this lambdas. For C++17, `std::function` remains the standard approach for self-referencing lambdas.

---

## Strings

### `std::string`

**Header:** `<string>`

`std::string` is essentially `std::vector<char>` with string-specific methods.

| Operation | Complexity |
|---|---|
| `size()` / `length()` / `empty()` | O(1) |
| `operator[]` / `at()` | O(1) |
| `push_back(c)` | amortized O(1) |
| `append(str)` / `operator+=` | amortized O(m) |
| `substr(pos, len)` | O(len) — creates a copy |
| `find(str/c)` / `rfind` | O(n·m) worst case |
| `compare` | O(min(n, m)) |
| `c_str()` | O(1) |
| `insert` / `erase` | O(n) |

```cpp
#include <string>
#include <iostream>

int main() {
    std::string s = "hello world";

    // basics
    std::cout << s.size() << "\n";        // 11
    std::cout << s.substr(6, 5) << "\n";  // "world"
    std::cout << s.find("world") << "\n"; // 6

    // rfind: last occurrence
    std::string path = "/usr/local/bin";
    size_t pos = path.rfind('/');
    std::cout << path.substr(pos + 1) << "\n"; // "bin"

    // comparison (lexicographic)
    std::cout << ("abc" < "abd") << "\n"; // 1 (true)

    // concatenation
    std::string a = "hello";
    a += " ";
    a += "world";
    // prefer += or append over + in loops to avoid temporaries
}
```

### Character Operations

**Header:** `<cctype>`

| Function | Purpose |
|---|---|
| `std::isdigit(c)` | is `c` a digit ('0'-'9')? |
| `std::isalpha(c)` | is `c` a letter? |
| `std::isalnum(c)` | is `c` alphanumeric? |
| `std::isspace(c)` | is `c` whitespace? |
| `std::tolower(c)` | lowercase version |
| `std::toupper(c)` | uppercase version |

```cpp
#include <string>
#include <cctype>
#include <algorithm>

// classic interview: check if string is a palindrome (ignoring non-alphanumeric)
bool isPalindrome(const std::string& s) {
    int l = 0, r = (int)s.size() - 1;
    while (l < r) {
        while (l < r && !std::isalnum(s[l])) ++l;
        while (l < r && !std::isalnum(s[r])) --r;
        if (std::tolower(s[l]) != std::tolower(s[r])) return false;
        ++l; --r;
    }
    return true;
}
```

### `std::stringstream`

**Header:** `<sstream>`

Parsing, splitting, and type conversion via stream operators.

```cpp
#include <sstream>
#include <string>
#include <vector>
#include <iostream>

int main() {
    // split by spaces
    std::string line = "the quick brown fox";
    std::istringstream iss(line);
    std::string word;
    std::vector<std::string> words;
    while (iss >> word) words.push_back(word);

    // split by delimiter
    std::string csv = "1,2,3,4,5";
    std::istringstream iss2(csv);
    std::string token;
    std::vector<int> nums;
    while (std::getline(iss2, token, ','))
        nums.push_back(std::stoi(token));

    // int to string via stream
    std::ostringstream oss;
    oss << 42 << " is the answer";
    std::cout << oss.str() << "\n";
}
```

### String ↔ Number Conversions

| Conversion | Function | Header |
|---|---|---|
| int → string | `std::to_string(42)` | `<string>` |
| string → int | `std::stoi("42")` | `<string>` |
| string → long | `std::stol("42")` | `<string>` |
| string → long long | `std::stoll("42")` | `<string>` |
| string → double | `std::stod("3.14")` | `<string>` |

```cpp
#include <string>
#include <iostream>

int main() {
    int n = 42;
    std::string s = std::to_string(n); // "42"
    int back = std::stoi(s);            // 42

    // stoi with base
    int hex = std::stoi("ff", nullptr, 16); // 255
    int bin = std::stoi("1010", nullptr, 2); // 10
    std::cout << hex << " " << bin << "\n";
}
```

### String Comparison and Lexicographic Ordering

Strings compare lexicographically by default using `<`, `>`, `==`, etc. This matches dictionary ordering and is the basis for `std::sort` on strings.

```cpp
#include <string>
#include <vector>
#include <algorithm>

std::vector<std::string> words = {"banana", "apple", "cherry"};
std::sort(words.begin(), words.end());
// {"apple", "banana", "cherry"}
```

---

## Numerics and Utilities

### `std::numeric_limits`

**Header:** `<limits>`

| Expression | Value | Type |
|---|---|---|
| `std::numeric_limits<int>::max()` | 2,147,483,647 | `int` |
| `std::numeric_limits<int>::min()` | −2,147,483,648 | `int` |
| `std::numeric_limits<long long>::max()` | 9.2 × 10¹⁸ | `long long` |
| `std::numeric_limits<double>::infinity()` | +∞ | `double` |
| `std::numeric_limits<double>::epsilon()` | ~2.2 × 10⁻¹⁶ | `double` |

Also available as macros: `INT_MAX`, `INT_MIN`, `LLONG_MAX`, `LLONG_MIN` from `<climits>`.

```cpp
#include <limits>
#include <climits>

int maxVal = std::numeric_limits<int>::max(); // preferred
int maxVal2 = INT_MAX;                         // also fine, widely used
```

### `std::gcd` and `std::lcm` (C++17)

**Header:** `<numeric>`

```cpp
#include <numeric>
#include <iostream>

int main() {
    std::cout << std::gcd(12, 8) << "\n";  // 4
    std::cout << std::lcm(12, 8) << "\n";  // 24

    // works with negative numbers; result is always non-negative
    std::cout << std::gcd(-12, 8) << "\n"; // 4
}
```

### `std::pow` Caveats

**Header:** `<cmath>`

`std::pow` returns `double`. In DSA, **avoid it for integer exponentiation** — floating-point imprecision can cause bugs (e.g., `pow(10, 2)` might return `99.9999...` which truncates to `99`).

**Use integer exponentiation instead:**

```cpp
#include <iostream>

long long intPow(long long base, long long exp, long long mod = 0) {
    long long result = 1;
    if (mod > 0) base %= mod;
    while (exp > 0) {
        if (exp & 1) {
            result *= base;
            if (mod > 0) result %= mod;
        }
        base *= base;
        if (mod > 0) base %= mod;
        exp >>= 1;
    }
    return result;
}

int main() {
    std::cout << intPow(2, 10) << "\n";          // 1024
    std::cout << intPow(2, 10, 1000) << "\n";    // 24 (modular)
}
```

### `std::swap`

**Header:** `<utility>`

```cpp
#include <utility>

int a = 1, b = 2;
std::swap(a, b); // a=2, b=1

// works on containers too — O(1) for most containers
#include <vector>
std::vector<int> v1 = {1,2,3}, v2 = {4,5,6};
std::swap(v1, v2); // O(1), swaps internal pointers
```

### Chrono Basics for Benchmarking

**Header:** `<chrono>`

```cpp
#include <chrono>
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> v(1'000'000);
    std::iota(v.begin(), v.end(), 0);

    auto start = std::chrono::high_resolution_clock::now();
    std::sort(v.begin(), v.end(), std::greater<int>());
    auto end = std::chrono::high_resolution_clock::now();

    auto ms = std::chrono::duration_cast<std::chrono::milliseconds>(end - start);
    std::cout << "sort took " << ms.count() << " ms\n";
}
```

### Random Number Generation

**Header:** `<random>`

Never use `rand()` / `srand()` in modern C++. Use `<random>` facilities.

```cpp
#include <random>
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::mt19937 rng(42); // deterministic seed for reproducibility
    // or: std::mt19937 rng(std::random_device{}()); // truly random seed

    std::uniform_int_distribution<int> dist(1, 100);
    std::cout << "random [1,100]: " << dist(rng) << "\n";

    // shuffle a vector
    std::vector<int> v = {1, 2, 3, 4, 5};
    std::shuffle(v.begin(), v.end(), rng);
    for (int x : v) std::cout << x << " ";
}
```

### `std::function` and `std::bind`

**Header:** `<functional>`

`std::function<R(Args...)>` is a general-purpose polymorphic function wrapper. Already shown above in the lambda section for recursive lambdas.

`std::bind` creates a new callable with some arguments pre-filled. Mostly superseded by lambdas but still seen in older codebases.

```cpp
#include <functional>
#include <iostream>

int add(int a, int b) { return a + b; }

int main() {
    // std::bind — prefer lambdas instead
    auto add5 = std::bind(add, std::placeholders::_1, 5);
    std::cout << add5(3) << "\n"; // 8

    // equivalent lambda (preferred)
    auto add5_lambda = [](int a) { return add(a, 5); };
    std::cout << add5_lambda(3) << "\n"; // 8
}
```

---

## Interview-Focused Q&A

**Why is `vector` usually preferred over `list` even though `list` has O(1) insertion/erasure?**

Because interview code usually cares more about cache locality, lower memory overhead, and fast iteration than about arbitrary-position insertion. `list` wins only when you already have iterators to nodes and need stable references or splice-style relinking (e.g., LRU cache).

**When should I choose `deque` over `vector`?**

Choose `deque` when you need efficient `push_front`/`pop_front` in addition to back operations (sliding window maximum, BFS with level tracking). If you only append and index, `vector` is simpler and faster.

**`map` or `unordered_map`?**

- `map`: sorted keys, range queries, deterministic O(log n), predecessor/successor logic.
- `unordered_map`: average O(1) lookup/update, better for plain frequency tables and memoization.

**Why can `unordered_map` degrade badly?**

Hash collisions can force many keys into the same bucket, turning average O(1) operations into O(n) worst-case. Bad or adversarial inputs make this relevant. Use `reserve()` and a quality hash function to mitigate.

**Why does `list::size()` have a historical footnote?**

Before C++11, constant-time `size()` was not required for `list`. Since C++11, `list::size()` is required to be O(1).

**Why does `priority_queue` not support decrease-key?**

The adaptor intentionally exposes a minimal heap interface. In Dijkstra, the standard workaround is to push a new pair `(better_distance, node)` and ignore stale entries when popped.

**Why can `operator[]` on `map` or `unordered_map` be dangerous?**

It inserts missing keys with default-constructed mapped values. Convenient for counting (`mp[key]++`), but buggy for read-only membership checks where you don't want silent insertion.

**What is the standard LRU-cache STL design?**

`std::list<std::pair<Key, Value>>` for recency order plus `std::unordered_map<Key, list::iterator>` for O(1) lookup and node moves via `splice`.

**When do I use `multiset` instead of `priority_queue`?**

Use `multiset` when you need ordered iteration, deletion of arbitrary elements, predecessor/successor queries, or duplicate-aware window maintenance. Use `priority_queue` when you only need repeated access to the best element.

**`push_back` or `emplace_back` in interviews?**

Use whichever is clearer. Prefer `emplace_back` when you naturally have constructor arguments; prefer `push_back` when you already have the object.

**Is `std::string` guaranteed to use SSO?**

No. Many implementations do, but the standard does not require it. Never rely on SSO for correctness or complexity guarantees.

**Why does `reserve()` matter on vectors and unordered containers?**

It reduces repeated reallocations/rehashes, improving constant factors and preventing invalidation surprises during bulk insertion.

---

### Key Interview Points to Remember

1. **`vector` is your default.** Use it unless you have a specific reason for another container.
2. **`unordered_map` for O(1) lookups.** Two-sum, frequency counting, memoization — it's everywhere.
3. **Know your complexities cold.** Especially: `vector::push_back` (amortized O(1)), `map::find` (O(log n)), `unordered_map::find` (O(1) average).
4. **`priority_queue` is a max-heap by default.** Use `std::greater<T>` for min-heap. Know how to write a custom comparator.
5. **`lower_bound` returns the first element ≥ value.** `upper_bound` returns the first element > value. Both require a sorted range.
6. **Erase-remove idiom** is the standard way to remove elements from a vector by value.
7. **Iterator invalidation will burn you** if you modify a container while iterating. Know the rules for each container.
8. **`std::sort` is O(n log n) worst case** (introsort). It requires RandomAccessIterators — use `list.sort()` for lists.
9. **`std::function` enables recursive lambdas** for DFS/backtracking without separate function declarations.
10. **Structured bindings (`auto [a, b] = ...`)** make code cleaner with pairs, tuples, and map iteration.
11. **`partial_sum` is your prefix-sum algorithm.** Combine it with `lower_bound` for range-sum binary search patterns.
12. **`nth_element` finds the k-th element in O(n)** — faster than full sort when you only need one order statistic.

### Common Mistakes

| Mistake | Why It's Wrong | Fix |
|---|---|---|
| Using `map[key]` to check existence | Inserts a default value if key is missing | Use `map.find(key)` or `map.count(key)` |
| `std::pow` for integer exponentiation | Floating-point imprecision | Write integer `intPow` function |
| Forgetting `erase` after `std::remove` | `remove` only shifts elements; size unchanged | Use erase-remove idiom |
| Erasing from `multiset` with `erase(val)` | Removes **all** copies | Use `erase(find(val))` for one |
| Sorting then using `unordered_map` | Unnecessary sort; hash map is already O(1) | Pick ordered vs unordered deliberately |
| Modifying container during range-for | Undefined behavior / iterator invalidation | Use index-based loop or collect removals |
| Passing `priority_queue` comparator wrong | `greater<>` gives min-heap (counter-intuitive) | Remember: comparator returns `true` for lower priority |
| Using `rand() % n` | Non-uniform distribution, bad randomness | Use `<random>` with proper distribution |
| `substr` in a loop | O(n) per call; creates copies | Use indices or `string_view` when possible |
| Integer overflow with `accumulate` | Init value `0` deduces `int` even for `long long` data | Pass `0LL` as init: `accumulate(v.begin(), v.end(), 0LL)` |

### Quick Recap

| Need | Container / Tool |
|---|---|
| Dynamic array | `std::vector` |
| O(1) front + back | `std::deque` |
| Sorted unique keys | `std::set` |
| Sorted key-value | `std::map` |
| O(1) avg lookup | `std::unordered_map` / `unordered_set` |
| LIFO | `std::stack` |
| FIFO (BFS) | `std::queue` |
| Top-k / Dijkstra | `std::priority_queue` |
| LRU Cache | `std::list` + `unordered_map` |
| Prefix sums | `std::partial_sum` |
| Binary search | `std::lower_bound` / `upper_bound` |
| k-th element | `std::nth_element` |
| Permutations | `std::next_permutation` |
| Bit manipulation | `std::bitset` |
| Custom sort/heap | lambda comparators |
| Recursive lambda | `std::function<void(int)>` |
| Parse/split strings | `std::stringstream` |
| Integer ↔ string | `std::to_string` / `std::stoi` |
| GCD/LCM | `std::gcd` / `std::lcm` |

---

# 5. Templates and Generic Programming

Templates are the foundation of C++ generic programming. They let you write code that works with any type, resolved entirely at compile time with zero runtime cost.

## 5.1 Function Templates

A function template defines a family of functions parameterized by one or more types.

### Basic syntax and type deduction

```cpp
#include <iostream>
#include <string>

template <typename T>
T max_of(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    std::cout << max_of(3, 7) << "\n";             // deduced: int
    std::cout << max_of(3.14, 2.71) << "\n";       // deduced: double
    std::cout << max_of<std::string>("a", "b");     // explicit instantiation
}
```

**Type deduction rules:**
- The compiler deduces `T` from the arguments.
- All arguments contributing to the same `T` must match exactly — `max_of(3, 3.14)` fails because `int` ≠ `double`.
- Use explicit instantiation (`max_of<double>(3, 3.14)`) to resolve ambiguity.

### Multiple template parameters

```cpp
template <typename T, typename U>
auto add(T a, U b) -> decltype(a + b) {
    return a + b;
}
// C++14 and later: just use `auto` return type
```

### Non-type template parameters

```cpp
template <typename T, int N>
struct FixedArray {
    T data[N];
    constexpr int size() const { return N; }
};

FixedArray<double, 100> arr;  // array of 100 doubles, size known at compile time
```

## 5.2 Class Templates

```cpp
#include <stdexcept>

template <typename T>
class Stack {
    T* data_;
    int top_;
    int capacity_;
public:
    explicit Stack(int cap) : data_(new T[cap]), top_(-1), capacity_(cap) {}
    ~Stack() { delete[] data_; }

    void push(const T& val) {
        if (top_ + 1 >= capacity_) throw std::overflow_error("stack full");
        data_[++top_] = val;
    }

    T pop() {
        if (top_ < 0) throw std::underflow_error("stack empty");
        return data_[top_--];
    }

    bool empty() const { return top_ < 0; }
};
```

Member functions defined outside the class:

```cpp
template <typename T>
bool Stack<T>::empty() const {
    return top_ < 0;
}
```

### Default template arguments

```cpp
template <typename T = int, typename Alloc = std::allocator<T>>
class MyVector { /* ... */ };

MyVector<> v;            // T=int, Alloc=std::allocator<int>
MyVector<double> v2;     // T=double
```

## 5.3 Template Specialization

### Full specialization

Provide a completely custom implementation for a specific type.

```cpp
#include <iostream>
#include <cstring>

template <typename T>
bool equal(T a, T b) {
    return a == b;
}

// Full specialization for C-strings
template <>
bool equal<const char*>(const char* a, const char* b) {
    return std::strcmp(a, b) == 0;
}

int main() {
    std::cout << equal(1, 1) << "\n";                // uses generic
    std::cout << equal("hello", "hello") << "\n";    // uses specialization
}
```

### Partial specialization (class templates only)

Specialize for a category of types rather than a single type.

```cpp
#include <iostream>

template <typename T>
struct IsPointer {
    static constexpr bool value = false;
};

template <typename T>
struct IsPointer<T*> {    // partial specialization: matches any pointer
    static constexpr bool value = true;
};

int main() {
    std::cout << IsPointer<int>::value << "\n";    // 0
    std::cout << IsPointer<int*>::value << "\n";   // 1
}
```

**When useful:** customizing behavior for pointers, const types, containers of a specific allocator, etc.

## 5.4 Variadic Templates

Variadic templates accept an arbitrary number of template arguments using **parameter packs**.

### Parameter packs and sizeof...

```cpp
#include <iostream>

template <typename... Args>
void print_count(Args... args) {
    std::cout << "argument count: " << sizeof...(args) << "\n";
}

int main() {
    print_count(1, 2.0, "three");   // 3
}
```

### Recursive unpacking (C++11/14 style)

```cpp
#include <iostream>

void print_all() {}   // base case

template <typename T, typename... Rest>
void print_all(T first, Rest... rest) {
    std::cout << first << " ";
    print_all(rest...);
}

int main() {
    print_all(1, 2.5, "hello", 'c');   // 1 2.5 hello c
}
```

### Fold expressions (C++17)

Fold expressions collapse a parameter pack with an operator in a single expression.

```cpp
#include <iostream>

template <typename... Args>
auto sum(Args... args) {
    return (args + ...);   // unary right fold
}

template <typename... Args>
void print_all(Args... args) {
    ((std::cout << args << " "), ...);   // comma fold
    std::cout << "\n";
}

int main() {
    std::cout << sum(1, 2, 3, 4) << "\n";   // 10
    print_all("a", 2, 3.0);                  // a 2 3.0
}
```

| Fold Form | Syntax | Expansion |
|---|---|---|
| Unary right fold | `(args op ...)` | `a1 op (a2 op (a3 op a4))` |
| Unary left fold | `(... op args)` | `((a1 op a2) op a3) op a4` |
| Binary right fold | `(args op ... op init)` | `a1 op (a2 op (a3 op init))` |
| Binary left fold | `(init op ... op args)` | `((init op a1) op a2) op a3` |

## 5.5 Type Traits (intro)

Type traits are compile-time predicates about types, defined in `<type_traits>`.

```cpp
#include <type_traits>
#include <iostream>

template <typename T>
void classify(T val) {
    if constexpr (std::is_integral_v<T>) {
        std::cout << val << " is integral\n";
    } else if constexpr (std::is_floating_point_v<T>) {
        std::cout << val << " is floating-point\n";
    } else {
        std::cout << "other type\n";
    }
}

int main() {
    classify(42);      // integral
    classify(3.14);    // floating-point
    classify("hi");    // other
}
```

### Commonly used type traits

| Trait | Purpose |
|---|---|
| `std::is_integral_v<T>` | true for int, char, bool, etc. |
| `std::is_floating_point_v<T>` | true for float, double |
| `std::is_same_v<T, U>` | true if T and U are the same type |
| `std::is_pointer_v<T>` | true for pointer types |
| `std::is_reference_v<T>` | true for lvalue/rvalue references |
| `std::remove_const_t<T>` | strips const from T |
| `std::remove_reference_t<T>` | strips reference from T |
| `std::decay_t<T>` | applies array-to-pointer, function-to-pointer, removes cv/ref |

### std::enable_if (pre-Concepts SFINAE)

```cpp
#include <type_traits>
#include <iostream>

template <typename T>
std::enable_if_t<std::is_integral_v<T>, T>
safe_divide(T a, T b) {
    return b != 0 ? a / b : 0;
}

int main() {
    std::cout << safe_divide(10, 3) << "\n";   // 3
    // safe_divide(1.0, 2.0);  // compile error: not integral
}
```

`enable_if` uses SFINAE (Substitution Failure Is Not An Error) to remove overloads from consideration. It works but is hard to read — prefer **Concepts** in C++20.

## 5.6 Concepts (C++20)

Concepts replace SFINAE with readable, declarative constraints on template parameters.

### Basic syntax

```cpp
#include <concepts>
#include <iostream>

template <std::integral T>
T safe_divide(T a, T b) {
    return b != 0 ? a / b : 0;
}

int main() {
    std::cout << safe_divide(10, 3) << "\n";   // 3
    // safe_divide(1.0, 2.0);  // clear error: double does not satisfy std::integral
}
```

### Defining your own concept

```cpp
#include <concepts>
#include <iostream>
#include <string>

template <typename T>
concept Printable = requires(T val) {
    { std::cout << val } -> std::same_as<std::ostream&>;
};

template <Printable T>
void display(const T& val) {
    std::cout << val << "\n";
}

int main() {
    display(42);
    display(std::string("hello"));
}
```

### requires clause (inline constraints)

```cpp
template <typename T>
    requires std::integral<T> || std::floating_point<T>
T clamp_positive(T val) {
    return val > T{0} ? val : T{0};
}
```

### Standard library concepts (selected)

| Concept | Meaning |
|---|---|
| `std::integral<T>` | integer type |
| `std::floating_point<T>` | float/double |
| `std::same_as<T, U>` | exact type match |
| `std::convertible_to<From, To>` | implicit conversion exists |
| `std::totally_ordered<T>` | supports `<`, `<=`, `>`, `>=`, `==`, `!=` |
| `std::copyable<T>` | copy constructible and assignable |
| `std::movable<T>` | move constructible and assignable |
| `std::default_initializable<T>` | `T{}` is valid |
| `std::ranges::range<T>` | supports `begin()` and `end()` |

### Concepts vs SFINAE — interview comparison

| Aspect | SFINAE (enable_if) | Concepts (C++20) |
|---|---|---|
| Readability | Poor — nested templates | Clear — reads like English |
| Error messages | Cryptic template errors | States which constraint failed |
| Composability | Manual with conjunction/disjunction | `&&`, `||`, nested requires |
| Interview preference | Know it exists | Preferred if C++20 allowed |

### Key Interview Points to Remember
- Templates are resolved at compile time — no runtime overhead, but can increase binary size.
- Template argument deduction works for functions; class templates need CTAD (C++17) or explicit arguments.
- Specialization allows customizing generic code for specific types without modifying the original template.
- Fold expressions (C++17) eliminate recursive variadic template boilerplate.
- Concepts (C++20) are the modern replacement for SFINAE — cleaner syntax, better error messages.
- `if constexpr` (C++17) enables compile-time branching inside templates without specialization.

### Common Mistakes
- Forgetting that partial specialization is only for class templates, not function templates (use overloading instead).
- Mismatched types in function template calls (e.g., `max_of(1, 2.0)`) — the compiler cannot deduce a single `T`.
- Using `enable_if` in the return type but forgetting to provide a fallback, causing hard-to-debug "no matching function" errors.
- Writing variadic templates with no base case, causing infinite recursion at compile time.
- Assuming Concepts are available everywhere — they require C++20 and a supporting compiler.

### Quick Recap
- **Function templates**: generic functions, compiler deduces types from arguments.
- **Class templates**: generic classes, often need explicit template arguments.
- **Specialization**: full (exact type) or partial (pattern-based, classes only).
- **Variadic templates**: parameter packs + fold expressions for arbitrary argument counts.
- **Type traits**: compile-time type queries in `<type_traits>`.
- **Concepts (C++20)**: named constraints on template parameters, replacing SFINAE.

---

# 6. Error Handling, Debugging, and Tooling

Robust error handling and effective debugging skills separate working code from production-quality code. In interviews, understanding exception safety and undefined behavior signals maturity.

## 6.1 Exceptions

### try / catch / throw

```cpp
#include <iostream>
#include <stdexcept>

double safe_sqrt(double x) {
    if (x < 0) throw std::invalid_argument("negative input to sqrt");
    return std::sqrt(x);
}

int main() {
    try {
        std::cout << safe_sqrt(25) << "\n";
        std::cout << safe_sqrt(-1) << "\n";
    } catch (const std::invalid_argument& e) {
        std::cerr << "Error: " << e.what() << "\n";
    } catch (const std::exception& e) {
        std::cerr << "General error: " << e.what() << "\n";
    } catch (...) {
        std::cerr << "Unknown error\n";
    }
}
```

### Exception hierarchy

```
std::exception
├── std::logic_error
│   ├── std::invalid_argument
│   ├── std::domain_error
│   ├── std::length_error
│   └── std::out_of_range
├── std::runtime_error
│   ├── std::range_error
│   ├── std::overflow_error
│   └── std::underflow_error
└── std::bad_alloc
    std::bad_cast
    std::bad_typeid
```

### When to use exceptions

| Scenario | Use Exceptions? |
|---|---|
| Truly exceptional conditions (file not found, OOM) | Yes |
| Expected failure (user input validation) | Prefer return values |
| Competitive programming / DSA interviews | Rarely — check conditions instead |
| Library code consumed by others | Yes — let caller decide recovery |
| Performance-critical hot loops | No — exceptions have overhead when thrown |

### noexcept specifier

```cpp
void safe_operation() noexcept {
    // guaranteed not to throw — std::terminate if it does
}

// conditional noexcept
template <typename T>
void swap_values(T& a, T& b) noexcept(std::is_nothrow_move_assignable_v<T>) {
    T tmp = std::move(a);
    a = std::move(b);
    b = std::move(tmp);
}
```

Mark functions `noexcept` when you can guarantee no exceptions. The compiler can optimize better, and move operations on containers require `noexcept` to be used (otherwise they fall back to copy).

## 6.2 Exception Safety Guarantees

| Guarantee | Meaning | Example |
|---|---|---|
| **No-throw** | Operation never throws | `std::vector::size()`, destructors |
| **Strong** | If exception is thrown, state is rolled back completely | `std::vector::push_back` (when reallocation fails) |
| **Basic** | If exception is thrown, invariants are preserved but state may change | Most STL operations |
| **No guarantee** | Anything can happen | Poorly written code |

**Key principle:** Destructors must never throw. If a destructor throws during stack unwinding, `std::terminate` is called.

## 6.3 Return-Based Error Handling

### std::optional (C++17)

```cpp
#include <optional>
#include <iostream>
#include <string>
#include <charconv>

std::optional<int> parse_int(const std::string& s) {
    int result;
    auto [ptr, ec] = std::from_chars(s.data(), s.data() + s.size(), result);
    if (ec == std::errc()) return result;
    return std::nullopt;
}

int main() {
    auto val = parse_int("42");
    if (val) {
        std::cout << "parsed: " << *val << "\n";
    } else {
        std::cout << "parse failed\n";
    }
}
```

### Error codes

```cpp
#include <system_error>
#include <iostream>

std::error_code read_file(const std::string& path, std::string& out) {
    // ... implementation ...
    if (/* file not found */) return std::make_error_code(std::errc::no_such_file_or_directory);
    return {};  // success
}
```

### When to prefer each approach

| Approach | Best For |
|---|---|
| Exceptions | Rare errors, deep call stacks, library APIs |
| `std::optional` | "Value or nothing" semantics, simple lookup failures |
| Error codes | C interop, performance-critical paths, embedded |
| `bool` return + out param | Quick prototyping, competitive programming |

## 6.4 Assertions

### assert (runtime)

```cpp
#include <cassert>

int binary_search(const int* arr, int n, int target) {
    assert(arr != nullptr && "array must not be null");
    assert(n > 0 && "array must be non-empty");
    // ... implementation ...
    return -1;
}
```

`assert` is stripped out in release builds when `NDEBUG` is defined. Use for invariants during development.

### static_assert (compile-time)

```cpp
#include <type_traits>

template <typename T>
class NumericContainer {
    static_assert(std::is_arithmetic_v<T>, "T must be a numeric type");
    T data_[100];
};

NumericContainer<int> ok;
// NumericContainer<std::string> fail;  // compile error with clear message
```

`static_assert` fires at compile time — zero runtime cost. Use it to enforce template constraints pre-C++20.

## 6.5 Sanitizers

Sanitizers are compiler-instrumented runtime checks that detect bugs normal testing misses.

### AddressSanitizer (ASan)

Detects: buffer overflows, use-after-free, double-free, stack-buffer-overflow, memory leaks.

```bash
g++ -fsanitize=address -g -O1 -fno-omit-frame-pointer program.cpp -o program
```

### UndefinedBehaviorSanitizer (UBSan)

Detects: signed integer overflow, null pointer dereference, out-of-bounds array access, misaligned access, division by zero.

```bash
g++ -fsanitize=undefined -g program.cpp -o program
```

### MemorySanitizer (MSan)

Detects: reads of uninitialized memory. Only available on Clang/Linux.

```bash
clang++ -fsanitize=memory -g program.cpp -o program
```

### ThreadSanitizer (TSan)

Detects: data races between threads.

```bash
g++ -fsanitize=thread -g program.cpp -o program
```

| Sanitizer | Flag | Catches |
|---|---|---|
| ASan | `-fsanitize=address` | Buffer overflows, use-after-free, leaks |
| UBSan | `-fsanitize=undefined` | Signed overflow, null deref, shift errors |
| MSan | `-fsanitize=memory` | Uninitialized reads (Clang only) |
| TSan | `-fsanitize=thread` | Data races |

**Tip:** You can combine ASan + UBSan: `-fsanitize=address,undefined`.

## 6.6 Debugging Strategy

### In coding interviews

1. **Read the problem twice.** Misunderstanding wastes more time than any bug.
2. **Trace through a small example by hand** before coding.
3. **Print debugging:** insert `std::cerr << variable << "\n";` at key decision points. Use `cerr` so it doesn't interleave with expected output.
4. **Edge case checklist:** empty input, single element, all identical elements, maximum constraints, negative numbers.
5. **Check off-by-one errors** in loop bounds, especially with 0-indexed arrays.

### In real projects

**GDB / LLDB basics:**

```bash
# compile with debug symbols
g++ -g -O0 program.cpp -o program

# gdb
gdb ./program
(gdb) break main
(gdb) run
(gdb) next          # step over
(gdb) step          # step into
(gdb) print var     # inspect variable
(gdb) backtrace     # show call stack
(gdb) watch var     # break when var changes

# lldb (macOS)
lldb ./program
(lldb) breakpoint set --name main
(lldb) run
(lldb) next
(lldb) print var
```

**Compiler warnings** catch bugs before they happen:

```bash
g++ -Wall -Wextra -Wpedantic -Werror program.cpp
```

## 6.7 Common Compile Flags

| Flag | Purpose |
|---|---|
| `-std=c++17` / `-std=c++20` | Set language standard |
| `-O0` | No optimization (best for debugging) |
| `-O2` | Standard optimization (good default for production) |
| `-O3` | Aggressive optimization (sometimes slower due to code bloat) |
| `-Og` | Optimize for debugging experience |
| `-g` | Include debug symbols |
| `-Wall` | Enable most warnings |
| `-Wextra` | Enable additional warnings |
| `-Wpedantic` | Warn on non-standard extensions |
| `-Werror` | Treat warnings as errors |
| `-fsanitize=address` | Enable AddressSanitizer |
| `-fsanitize=undefined` | Enable UBSan |
| `-fno-omit-frame-pointer` | Better stack traces with ASan |

### Recommended development command

```bash
g++ -std=c++20 -O2 -g -Wall -Wextra -fsanitize=address,undefined -o prog main.cpp
```

### Key Interview Points to Remember
- Know the exception hierarchy: `std::exception` → `std::runtime_error` / `std::logic_error` → specific types.
- Exception safety has three useful levels: no-throw, strong, and basic.
- `noexcept` enables compiler optimizations and is required for efficient container operations (move).
- `std::optional` is the modern way to represent "value or nothing" without exceptions.
- `static_assert` enforces compile-time invariants at zero cost.
- Sanitizers catch bugs that testing alone misses — ASan and UBSan are the most commonly used.

### Common Mistakes
- Catching exceptions by value instead of by `const&` — causes object slicing.
- Throwing in destructors — leads to `std::terminate` during stack unwinding.
- Forgetting that `assert` is removed in release builds (`NDEBUG`) — don't use it for production error checking.
- Not using `-Wall -Wextra` during development — misses implicit conversion warnings, unused variables, etc.
- Assuming sanitizers are free — they add 2–5x runtime overhead. Use for testing, not production.

### Quick Recap
- **Exceptions**: use for truly exceptional cases; `try`/`catch`/`throw`, hierarchy under `std::exception`.
- **Safety guarantees**: no-throw > strong > basic. Destructors must be no-throw.
- **Return-based errors**: `std::optional`, error codes — prefer for expected failures.
- **Assertions**: `assert` for runtime debug checks, `static_assert` for compile-time.
- **Sanitizers**: ASan, UBSan, MSan, TSan — compiler flags that instrument your binary for bug detection.
- **Debugging**: print debugging in interviews, GDB/LLDB + sanitizers in real projects.

---

# 7. Concurrency Basics

Concurrency rarely appears in DSA interviews but is a common topic in systems design and C++ language interviews. Understanding the basics demonstrates systems-level thinking.

## 7.1 std::thread

```cpp
#include <iostream>
#include <thread>

void greet(const std::string& name) {
    std::cout << "Hello, " << name << "\n";
}

int main() {
    std::thread t(greet, "world");
    t.join();   // wait for thread to finish
}
```

### join vs detach

| Method | Behavior |
|---|---|
| `join()` | Blocks calling thread until `t` finishes |
| `detach()` | Thread runs independently; cannot be joined later |

**Critical rule:** Every `std::thread` must be either joined or detached before destruction. Otherwise, `std::terminate` is called.

```cpp
#include <thread>
#include <iostream>

int main() {
    std::thread t([] {
        std::cout << "running in thread " << std::this_thread::get_id() << "\n";
    });
    t.join();
}
```

## 7.2 Mutex and Locks

When multiple threads access shared data, you need **mutual exclusion** to prevent data races.

### std::mutex

```cpp
#include <iostream>
#include <thread>
#include <mutex>
#include <vector>

std::mutex mtx;
int counter = 0;

void increment(int times) {
    for (int i = 0; i < times; ++i) {
        std::lock_guard<std::mutex> lock(mtx);
        ++counter;
    }
}

int main() {
    std::thread t1(increment, 100000);
    std::thread t2(increment, 100000);
    t1.join();
    t2.join();
    std::cout << "counter: " << counter << "\n";   // always 200000
}
```

### Lock types

| Lock Type | Use Case |
|---|---|
| `std::lock_guard<std::mutex>` | Simple scoped lock — locks in constructor, unlocks in destructor |
| `std::unique_lock<std::mutex>` | Flexible — supports deferred locking, timed locking, manual unlock |
| `std::scoped_lock` (C++17) | Locks multiple mutexes simultaneously, prevents deadlock |

```cpp
#include <mutex>

std::mutex m1, m2;

void safe_transfer() {
    std::scoped_lock lock(m1, m2);   // acquires both, deadlock-free
    // ... transfer logic ...
}
```

## 7.3 Deadlock

**Deadlock** occurs when two or more threads each hold a lock and wait for the other's lock, forming a cycle.

```
Thread A: locks m1, waits for m2
Thread B: locks m2, waits for m1
→ Both stuck forever
```

### How to avoid deadlock

1. **Lock ordering:** Always acquire mutexes in the same global order.
2. **`std::scoped_lock`:** Acquires multiple locks atomically using a deadlock-avoidance algorithm.
3. **`std::lock()`:** Locks multiple mutexes without deadlock, then adopt them into `lock_guard`/`unique_lock`.
4. **Minimize lock scope:** Hold locks for the shortest time possible.

```cpp
#include <mutex>

std::mutex m1, m2;

void correct_approach() {
    std::lock(m1, m2);
    std::lock_guard<std::mutex> lg1(m1, std::adopt_lock);
    std::lock_guard<std::mutex> lg2(m2, std::adopt_lock);
    // ... safe ...
}
```

## 7.4 Atomics

`std::atomic<T>` provides lock-free operations on simple types. The hardware guarantees atomicity without explicit mutexes.

```cpp
#include <atomic>
#include <thread>
#include <iostream>

std::atomic<int> counter{0};

void increment(int times) {
    for (int i = 0; i < times; ++i) {
        counter.fetch_add(1, std::memory_order_relaxed);
    }
}

int main() {
    std::thread t1(increment, 100000);
    std::thread t2(increment, 100000);
    t1.join();
    t2.join();
    std::cout << counter.load() << "\n";   // 200000
}
```

### Key atomic operations

| Operation | Description |
|---|---|
| `load()` | Read the value |
| `store(val)` | Write a value |
| `fetch_add(n)` | Add and return old value |
| `fetch_sub(n)` | Subtract and return old value |
| `compare_exchange_strong(expected, desired)` | CAS operation |
| `exchange(val)` | Swap and return old value |

**When to use:** Simple counters, flags, and lock-free data structures. For anything complex, prefer mutexes.

## 7.5 std::async and std::future

`std::async` launches a task that may run asynchronously and returns a `std::future` to retrieve the result.

```cpp
#include <future>
#include <iostream>
#include <numeric>
#include <vector>

long long parallel_sum(const std::vector<int>& data) {
    auto mid = data.begin() + data.size() / 2;

    auto future_left = std::async(std::launch::async, [&]() {
        return std::accumulate(data.begin(), mid, 0LL);
    });

    long long right = std::accumulate(mid, data.end(), 0LL);
    return future_left.get() + right;   // .get() blocks until result ready
}

int main() {
    std::vector<int> v(1000000, 1);
    std::cout << parallel_sum(v) << "\n";   // 1000000
}
```

| Launch Policy | Behavior |
|---|---|
| `std::launch::async` | Guaranteed new thread |
| `std::launch::deferred` | Lazy evaluation — runs when `.get()` is called |
| Default (both) | Implementation decides |

## 7.6 Thread Safety of STL Containers

**STL containers are NOT thread-safe by default.** Concurrent reads are safe, but any write requires external synchronization.

| Operation | Thread-Safe? |
|---|---|
| Multiple threads reading a `const` container | Yes |
| One thread writing, others reading | **No** — data race |
| Multiple threads writing | **No** — data race |
| Different threads accessing different containers | Yes |

**What this means in practice:** If you share a `vector`, `map`, or any container between threads, you must protect it with a mutex or use `std::atomic` for primitive shared state.

## 7.7 When to Avoid Concurrency

- **Competitive programming:** Single-threaded. The judge runs your code on one core.
- **Most DSA interviews:** Focus on algorithmic complexity, not parallelism.
- **When overhead > benefit:** Thread creation and synchronization have overhead. For small data sets, single-threaded is faster.

Concurrency knowledge is tested as a **language/systems question**, not typically as part of a coding problem.

### Key Interview Points to Remember
- Every `std::thread` must be `join()`ed or `detach()`ed — otherwise `std::terminate`.
- `std::lock_guard` for simple RAII locking; `std::scoped_lock` (C++17) for multiple mutexes.
- Deadlock = circular wait. Avoid with consistent lock ordering or `std::scoped_lock`.
- `std::atomic` is for simple types; it provides lock-free thread-safe operations.
- STL containers are NOT thread-safe for writes. Always protect shared containers.
- `std::async` + `std::future` is the simplest way to get parallelism.

### Common Mistakes
- Forgetting to `join()` a thread before it goes out of scope — instant `std::terminate`.
- Assuming `std::cout` is thread-safe — interleaved output is common without synchronization.
- Using `detach()` when you need the thread's result — detached threads cannot be joined or queried.
- Holding a lock while performing I/O or expensive computation — kills parallelism.
- Using `std::atomic` for complex data structures — atomics only work correctly on trivially copyable types.

### Quick Recap
- **std::thread**: create with callable + args, must `join()` or `detach()`.
- **Mutex**: `std::mutex` + `std::lock_guard` / `std::unique_lock` / `std::scoped_lock`.
- **Deadlock**: circular lock dependency; prevent with ordering or `std::scoped_lock`.
- **Atomics**: lock-free ops for simple types (`std::atomic<int>`, etc.).
- **async/future**: launch tasks, retrieve results with `.get()`.
- **STL thread safety**: concurrent reads OK, any write needs a mutex.

---

# 8. Performance and Optimization for DSA

In competitive programming and interviews, algorithmic complexity dominates. But understanding constant factors and practical performance can be the difference between AC and TLE.

## 8.1 Big-O and Constant Factors

Big-O gives the growth rate, but constant factors matter in practice.

| Algorithm | Big-O | Typical constant factor |
|---|---|---|
| `std::sort` (introsort) | O(n log n) | Very fast — cache-friendly |
| `std::stable_sort` (mergesort) | O(n log n) | ~2x slower than `sort` (extra memory) |
| `std::list::sort` (mergesort) | O(n log n) | ~10x slower (pointer chasing, cache misses) |
| `std::unordered_map` lookup | O(1) amortized | Hash + potential collisions; often 3–5x slower than array |
| `std::map` lookup | O(log n) | Tree traversal with pointer chasing |

**Rule of thumb:** For n ≤ 10⁸, O(n) with a small constant is fine. For n ≤ 10⁶, O(n log n) works. Always estimate: **~10⁸ simple operations per second** as a rough benchmark for competitive programming.

## 8.2 Cache Locality

Modern CPUs have fast L1/L2/L3 caches. Accessing memory sequentially (contiguous layout) is dramatically faster than random access (pointer chasing).

### Why vector beats list

```cpp
#include <vector>
#include <list>

// vector: contiguous memory → sequential access → cache-friendly
std::vector<int> v(1000000);   // one block, accessed linearly

// list: each node is a separate allocation → random memory addresses → cache misses
std::list<int> l;
for (int i = 0; i < 1000000; ++i) l.push_back(i);
```

**Benchmark reality:** Iterating a `vector` of 1M ints is often 10–50x faster than iterating a `list` of 1M ints, despite both being O(n).

### Cache-friendly data structures

| Structure | Cache Behavior |
|---|---|
| `std::vector` | Excellent — contiguous |
| `std::array` | Excellent — contiguous, stack-allocated |
| `std::deque` | Good — chunked contiguous blocks |
| `std::unordered_map` | Moderate — hash table with buckets |
| `std::map` / `std::set` | Poor — tree nodes scattered in memory |
| `std::list` | Poor — every node is a separate allocation |

**Practical advice:** Default to `std::vector`. Use `std::map`/`std::set` only when you need ordered traversal or logarithmic operations.

## 8.3 Passing Conventions — Performance Implications

| Convention | Syntax | Copy? | Use When |
|---|---|---|---|
| By value | `void f(T x)` | Yes | Small types (int, double), or when you need a local copy anyway |
| By reference | `void f(T& x)` | No | You need to modify the original |
| By const reference | `void f(const T& x)` | No | Read-only access to large objects (string, vector) |
| By move | `void f(T&& x)` | No (transfers) | Caller is done with the value (sink parameter) |
| By pointer | `void f(T* x)` | No | Nullable or C API interop |

```cpp
#include <string>
#include <vector>

void process(const std::vector<int>& data);        // good: no copy
void process_bad(std::vector<int> data);            // bad: copies entire vector
void consume(std::string&& name);                   // good: takes ownership

struct Widget {
    std::string name;
    Widget(std::string n) : name(std::move(n)) {}   // sink parameter — move into member
};
```

## 8.4 Move Semantics and RVO

### Move semantics — avoiding unnecessary copies

```cpp
#include <vector>
#include <string>
#include <iostream>

int main() {
    std::vector<std::string> v;
    std::string s = "hello";

    v.push_back(s);               // copy: s still valid
    v.push_back(std::move(s));    // move: s is now in a valid-but-unspecified state

    std::cout << v.size() << "\n";   // 2
}
```

### Return Value Optimization (RVO / NRVO)

The compiler elides the copy/move when returning a local object. This is mandatory in C++17 for prvalues.

```cpp
#include <vector>

std::vector<int> make_data() {
    std::vector<int> v(1000, 42);
    return v;   // NRVO: no copy, no move — constructed directly in caller's storage
}

int main() {
    auto data = make_data();   // efficient: no extra copies
}
```

**Key insight:** Return by value freely. The compiler optimizes it. Don't return `std::move(local)` — that actually *prevents* NRVO.

## 8.5 Fast I/O Patterns

Standard C++ I/O is slow by default because of synchronization with C stdio.

```cpp
#include <iostream>

int main() {
    std::ios_base::sync_with_stdio(false);  // unsync C and C++ I/O
    std::cin.tie(nullptr);                   // untie cin from cout

    int n;
    std::cin >> n;
    std::cout << n << '\n';   // use '\n' not endl
}
```

| Technique | Why |
|---|---|
| `sync_with_stdio(false)` | Removes synchronization between `printf`/`scanf` and `cin`/`cout` — major speedup |
| `cin.tie(nullptr)` | Prevents `cout` from flushing before every `cin` read |
| `'\n'` instead of `std::endl` | `endl` forces a flush; `'\n'` doesn't |

**Caveats:**
- After `sync_with_stdio(false)`, do not mix C I/O (`scanf`/`printf`) with C++ I/O (`cin`/`cout`).
- `printf`/`scanf` are often faster than even unsynced `cin`/`cout` for large I/O.

## 8.6 Reserve and Resize

### vector::reserve

`reserve` pre-allocates memory without changing size. Avoids repeated reallocations when you know the final size.

```cpp
#include <vector>

int main() {
    int n = 1000000;
    std::vector<int> v;
    v.reserve(n);           // allocates space for n elements, size is still 0
    for (int i = 0; i < n; ++i) {
        v.push_back(i);     // no reallocation — all pushes are O(1) guaranteed
    }
}
```

| Method | Effect on size | Effect on capacity |
|---|---|---|
| `reserve(n)` | Unchanged | At least `n` |
| `resize(n)` | Set to `n` (adds default elements or removes) | At least `n` |
| `shrink_to_fit()` | Unchanged | Requests reduction to size (non-binding) |

### reserve for unordered containers

```cpp
#include <unordered_map>

std::unordered_map<int, int> freq;
freq.reserve(1000);   // pre-allocate buckets — reduces rehashing
```

## 8.7 Avoiding Allocations in Hot Loops

```cpp
#include <string>
#include <vector>

// Bad: allocates a new string every iteration
void bad_loop(const std::vector<int>& data) {
    for (int x : data) {
        std::string s = std::to_string(x);   // allocation per iteration
        // ... use s ...
    }
}

// Better: reuse the string
void better_loop(const std::vector<int>& data) {
    std::string s;
    for (int x : data) {
        s = std::to_string(x);   // may reuse existing buffer
        // ... use s ...
    }
}
```

**General rules:**
- Hoist allocations out of loops when possible.
- Reuse containers by calling `clear()` instead of creating new ones.
- Use `reserve()` before filling containers in loops.

## 8.8 Compiler Optimization Levels

| Level | Flag | Behavior |
|---|---|---|
| None | `-O0` | No optimization. Best for debugging. |
| Moderate | `-O1` | Basic optimizations. Faster compile than `-O2`. |
| Standard | `-O2` | Good balance of speed and compile time. Default for production. |
| Aggressive | `-O3` | Adds vectorization, loop unrolling. Can increase binary size. Sometimes slower than `-O2` due to instruction cache pressure. |
| Size | `-Os` | Optimize for binary size. Similar to `-O2` but avoids size-increasing transforms. |
| Debug | `-Og` | Optimized for debugging. Better than `-O0` for performance while preserving debuggability. |

**For competitive programming:** `-O2` is standard on most judges. Don't rely on `-O3`-only optimizations.

### Key Interview Points to Remember
- Big-O is necessary but not sufficient — constant factors (cache, allocation overhead) matter.
- `std::vector` should be your default container. Its cache locality makes it faster than `std::list` for almost everything.
- Pass large objects by `const&`. Use move semantics for sink parameters.
- Return by value — RVO/NRVO makes it efficient. Don't return `std::move(local)`.
- Fast I/O (`sync_with_stdio(false)`, `cin.tie(nullptr)`, `'\n'`) is mandatory for competitive programming.
- `reserve()` avoids reallocation overhead when the size is known ahead of time.

### Common Mistakes
- Using `std::list` or `std::map` when `std::vector` + sorting would be faster in practice.
- Passing `std::vector` by value to functions, causing unnecessary copies.
- Using `std::endl` in competitive programming — the flush is a significant performance hit.
- Calling `std::move` on a return value — this *disables* NRVO.
- Forgetting to `reserve()` before a known-size sequence of `push_back` calls.
- Mixing `printf`/`scanf` with `cin`/`cout` after disabling sync — undefined behavior.

### Quick Recap
- **Cache locality**: contiguous memory (vector, array) >> pointer-based (list, map).
- **Passing**: `const T&` for read-only large objects; `T&&` for sink parameters.
- **Move semantics**: transfer ownership instead of copying. Compiler applies RVO for returns.
- **Fast I/O**: unsync + untie + `'\n'` for competitive programming.
- **reserve**: pre-allocate to avoid reallocation.
- **Optimization flags**: `-O2` for production/contests, `-O0 -g` for debugging.

---

# 9. Practical DSA-in-C++ Playbook

This section is a ready-reference for solving DSA problems in C++.

## 9.1 Competitive Programming Template

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    // solution here

    return 0;
}
```

**When this is appropriate:**
- Competitive programming contests (Codeforces, AtCoder, LeetCode).
- Timed coding interviews where speed matters.

**When this is NOT appropriate:**
- Production code — `<bits/stdc++.h>` is a GCC extension, not portable.
- Code reviews, take-home assignments, or collaborative projects.
- Interviews where the company uses Clang or MSVC (it won't compile).

**Alternative for interviews:**

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_map>
#include <queue>
#include <stack>
#include <string>
#include <cmath>
#include <numeric>
using namespace std;
```

## 9.2 Container Selection Guide

| Problem Type | Recommended Container | Why |
|---|---|---|
| Frequency counting | `unordered_map<T, int>` | O(1) average insert/lookup |
| Sorted unique elements | `set<T>` | O(log n) insert, ordered iteration |
| Sorted with duplicates | `multiset<T>` | Like set but allows duplicates |
| Key-value mapping (ordered) | `map<K, V>` | Sorted keys, O(log n) ops |
| Key-value mapping (fast) | `unordered_map<K, V>` | O(1) average ops |
| LIFO (Last In, First Out) | `stack<T>` | Backed by deque by default |
| FIFO (First In, First Out) | `queue<T>` | Backed by deque by default |
| Top-K / streaming min/max | `priority_queue<T>` | Max-heap by default |
| Min-heap | `priority_queue<T, vector<T>, greater<T>>` | Smallest element on top |
| Graph adjacency list | `vector<vector<int>>` | Contiguous, cache-friendly |
| Weighted graph | `vector<vector<pair<int,int>>>` | {neighbor, weight} |
| Bit manipulation (fixed size) | `bitset<N>` | Compact, fast bitwise operations |
| Dynamic boolean array | `vector<bool>` | Space-efficient (1 bit per element) |
| Contiguous buffer, known size | `array<T, N>` or `vector<T>` | Stack vs heap allocation |
| Ordered set with rank queries | Policy-based tree (GCC ext) | For competitive programming |
| Sliding window min/max | `deque<T>` | Efficient push/pop at both ends |

## 9.3 Common DSA Patterns in C++

### Two Pointers

```cpp
#include <vector>
#include <algorithm>

// Find a pair with target sum in a sorted array
std::pair<int,int> two_sum_sorted(const std::vector<int>& a, int target) {
    int lo = 0, hi = static_cast<int>(a.size()) - 1;
    while (lo < hi) {
        int sum = a[lo] + a[hi];
        if (sum == target) return {lo, hi};
        else if (sum < target) ++lo;
        else --hi;
    }
    return {-1, -1};
}
```

### Sliding Window

```cpp
#include <vector>
#include <algorithm>

// Maximum sum of any subarray of length k
int max_sum_k(const std::vector<int>& a, int k) {
    int n = static_cast<int>(a.size());
    int window = 0;
    for (int i = 0; i < k; ++i) window += a[i];

    int best = window;
    for (int i = k; i < n; ++i) {
        window += a[i] - a[i - k];
        best = std::max(best, window);
    }
    return best;
}
```

### Prefix Sums

```cpp
#include <vector>
#include <numeric>

// Build prefix sum array, answer range-sum queries in O(1)
std::vector<long long> build_prefix(const std::vector<int>& a) {
    std::vector<long long> pre(a.size() + 1, 0);
    std::partial_sum(a.begin(), a.end(), pre.begin() + 1);
    return pre;
}

// sum of a[l..r] (inclusive)
long long range_sum(const std::vector<long long>& pre, int l, int r) {
    return pre[r + 1] - pre[l];
}
```

### Hash Map Lookups (Two Sum)

```cpp
#include <vector>
#include <unordered_map>

std::pair<int,int> two_sum(const std::vector<int>& nums, int target) {
    std::unordered_map<int,int> seen;
    for (int i = 0; i < static_cast<int>(nums.size()); ++i) {
        int complement = target - nums[i];
        if (auto it = seen.find(complement); it != seen.end()) {
            return {it->second, i};
        }
        seen[nums[i]] = i;
    }
    return {-1, -1};
}
```

### Heap / Priority Queue

```cpp
#include <vector>
#include <queue>

// Find K largest elements
std::vector<int> top_k(const std::vector<int>& nums, int k) {
    std::priority_queue<int, std::vector<int>, std::greater<int>> min_heap;
    for (int x : nums) {
        min_heap.push(x);
        if (static_cast<int>(min_heap.size()) > k) min_heap.pop();
    }
    std::vector<int> result;
    while (!min_heap.empty()) {
        result.push_back(min_heap.top());
        min_heap.pop();
    }
    return result;
}
```

### Graph BFS

```cpp
#include <vector>
#include <queue>

std::vector<int> bfs(const std::vector<std::vector<int>>& adj, int src) {
    int n = static_cast<int>(adj.size());
    std::vector<int> dist(n, -1);
    std::queue<int> q;
    dist[src] = 0;
    q.push(src);

    while (!q.empty()) {
        int u = q.front(); q.pop();
        for (int v : adj[u]) {
            if (dist[v] == -1) {
                dist[v] = dist[u] + 1;
                q.push(v);
            }
        }
    }
    return dist;
}
```

### Graph DFS

```cpp
#include <vector>

void dfs(const std::vector<std::vector<int>>& adj, int u,
         std::vector<bool>& visited) {
    visited[u] = true;
    for (int v : adj[u]) {
        if (!visited[v]) dfs(adj, v, visited);
    }
}
```

### Binary Search with lower_bound / upper_bound

```cpp
#include <vector>
#include <algorithm>
#include <iostream>

int main() {
    std::vector<int> a = {1, 2, 4, 4, 4, 7, 9};

    // first element >= 4
    auto lo = std::lower_bound(a.begin(), a.end(), 4);

    // first element > 4
    auto hi = std::upper_bound(a.begin(), a.end(), 4);

    int count_of_4 = static_cast<int>(hi - lo);                     // 3
    int index_of_first_4 = static_cast<int>(lo - a.begin());        // 2

    std::cout << "count: " << count_of_4 << "\n";
    std::cout << "first index: " << index_of_first_4 << "\n";
}
```

### Monotonic Stack

```cpp
#include <vector>
#include <stack>

// Next Greater Element for each position
std::vector<int> next_greater(const std::vector<int>& nums) {
    int n = static_cast<int>(nums.size());
    std::vector<int> result(n, -1);
    std::stack<int> stk;   // stores indices

    for (int i = 0; i < n; ++i) {
        while (!stk.empty() && nums[stk.top()] < nums[i]) {
            result[stk.top()] = nums[i];
            stk.pop();
        }
        stk.push(i);
    }
    return result;
}
```

## 9.4 Pitfalls Checklist Before Submitting

Run through this list before submitting any solution:

| Pitfall | Check |
|---|---|
| **Integer overflow** | Use `long long` for products, sums of large ranges. `INT_MAX` is ~2×10⁹. |
| **Off-by-one errors** | Verify loop bounds: `< n` vs `<= n`, `i - 1` at `i = 0`. |
| **Uninitialized variables** | Default-initialize: `int x = 0;` not `int x;`. Vectors default-construct elements. |
| **Empty container access** | Check `!v.empty()` before `v.front()`, `v.back()`, `v[0]`. |
| **Iterator invalidation** | Don't modify a container while iterating it. Erase returns the next valid iterator. |
| **Forgetting to sort** | `lower_bound`/`upper_bound`/`binary_search` require a sorted range. |
| **Wrong comparator for priority_queue** | `greater<int>` → min-heap. Default is max-heap. Custom comparator: return true if first arg has *lower* priority. |
| **Signed/unsigned comparison** | `size()` returns `size_t` (unsigned). Compare with `int` cautiously — cast if needed. |
| **Floating-point comparison** | Don't use `==`. Use `abs(a - b) < eps` where `eps` is e.g., `1e-9`. |
| **Dangling references** | Don't return references to local variables. |
| **Modular arithmetic** | Apply `% MOD` after every addition/multiplication to prevent overflow. |
| **Graph: 0-indexed vs 1-indexed** | Match your adjacency list size: `adj(n)` for 0-indexed, `adj(n+1)` for 1-indexed. |

### Key Interview Points to Remember
- Know which container to reach for by problem type — this is one of the most testable C++ interview skills.
- Master the two-pointer, sliding window, prefix sum, and binary search patterns — they appear in 50%+ of array problems.
- Use `lower_bound`/`upper_bound` for binary search — don't hand-roll unless necessary.
- For graphs, `vector<vector<int>>` adjacency list is the standard representation.
- The monotonic stack pattern solves next-greater-element, largest rectangle, and stock span problems.
- Always check for integer overflow, off-by-one errors, and empty containers before submitting.

### Common Mistakes
- Using `unordered_map` when order matters (e.g., iterating keys in sorted order).
- Forgetting `greater<int>` for min-heap — default `priority_queue` is a max-heap.
- Using `bits/stdc++.h` in a non-GCC environment — it won't compile.
- Running binary search on an unsorted array — `lower_bound` gives garbage results.
- Not handling the "no solution found" case — return a sentinel value or throw.
- Writing DFS without a visited array — infinite loop on cyclic graphs.

### Quick Recap
- **Template**: `ios_base::sync_with_stdio(false)` + `cin.tie(nullptr)` for fast I/O.
- **Container selection**: match problem type to container (table above).
- **Patterns**: two pointers, sliding window, prefix sums, hash map, heap, BFS/DFS, binary search, monotonic stack.
- **Pitfalls**: overflow, off-by-one, uninitialized, empty access, iterator invalidation, unsorted binary search.

---

# 10. C++ Interview Questions and Answers

## Fundamentals (Q1–Q12)

**Q1: What are the stages of C++ compilation?**

The four stages are: preprocessing (expands `#include`, `#define`, macros), compilation (translates each translation unit to assembly), assembly (converts assembly to object files `.o`), and linking (combines object files and resolves symbols into an executable). Understanding this helps debug linker errors vs compilation errors.

> **What interviewers want to hear:**
> - Mention the preprocessor, compiler, assembler, and linker as distinct stages.
> - Explain that linker errors (undefined reference) differ from compile errors (syntax/type errors).

**Q2: What is the difference between a declaration and a definition?**

A declaration introduces a name and its type to the compiler (`extern int x;`, `void foo();`). A definition provides the actual implementation or allocates storage (`int x = 5;`, `void foo() { ... }`). Every definition is a declaration, but not every declaration is a definition. The One Definition Rule (ODR) mandates exactly one definition per entity across the program.

**Q3: What does `const` mean and where can it appear?**

`const` makes a variable or pointee immutable. `const int x = 5;` means `x` cannot be reassigned. For pointers: `const int* p` (pointer to const int — can't modify `*p`), `int* const p` (const pointer — can't modify `p`), `const int* const p` (both). For member functions, `void foo() const` promises not to modify the object's state. `const` enables compiler optimizations and communicates intent.

> **What interviewers want to hear:**
> - Distinguish pointer-to-const from const-pointer.
> - Mention `const` member functions and their role in const-correctness.

**Q4: What is `auto` and how does type deduction work?**

`auto` tells the compiler to deduce the type from the initializer. `auto x = 42;` deduces `int`, `auto s = std::string("hi");` deduces `std::string`. Deduction strips top-level `const` and references by default — use `const auto&` or `auto&&` when needed. In C++14+, `auto` can also be used for function return types.

**Q5: What is the difference between `++i` and `i++`?**

`++i` (pre-increment) increments `i` and returns the new value. `i++` (post-increment) saves the old value, increments `i`, and returns the old value. For primitive types, the compiler optimizes away any difference. For iterators and custom types, prefer `++i` because `i++` creates a temporary copy.

**Q6: What are references in C++ and how do they differ from pointers?**

A reference is an alias for an existing object. Once bound, it cannot be reseated to another object and cannot be null. A pointer holds a memory address, can be null, can be reassigned, and requires dereferencing (`*p`) to access the value. References are safer and cleaner for function parameters; pointers are necessary for optional values (nullable), dynamic allocation, and data structures like linked lists.

> **What interviewers want to hear:**
> - References cannot be null or reseated; pointers can.
> - Prefer `const T&` for function parameters to avoid copies without modification.

**Q7: What is the difference between pass-by-value and pass-by-reference?**

Pass-by-value copies the argument into the parameter — modifications don't affect the caller. Pass-by-reference passes an alias — modifications affect the caller's variable. Pass by `const T&` gives the efficiency of reference passing with the safety of no modification. For small types like `int` and `double`, pass-by-value is preferred.

**Q8: What is `nullptr` and why is it preferred over `NULL`?**

`nullptr` is a keyword of type `std::nullptr_t` that represents a null pointer. `NULL` is a macro that expands to `0` or `(void*)0`, which can cause ambiguity in overload resolution (e.g., `foo(NULL)` might call `foo(int)` instead of `foo(int*)`). Always use `nullptr` in modern C++.

**Q9: What are the fundamental data types and their typical sizes?**

`bool` (1 byte), `char` (1 byte), `short` (2 bytes), `int` (4 bytes), `long` (4 or 8 bytes), `long long` (8 bytes), `float` (4 bytes), `double` (8 bytes). Sizes are platform-dependent but these are typical for 64-bit systems. Use `<cstdint>` for guaranteed sizes: `int32_t`, `int64_t`, etc.

**Q10: What is `constexpr` and how does it differ from `const`?**

`const` means the variable won't be modified after initialization, but the value may be determined at runtime. `constexpr` guarantees the value is computed at compile time. A `constexpr` function can be evaluated at compile time if given constant arguments. Use `constexpr` for array sizes, template arguments, and any value that can be known at compile time.

> **What interviewers want to hear:**
> - `constexpr` = compile-time evaluation guarantee; `const` = immutability only.
> - `constexpr` functions can also run at runtime if inputs aren't constant.

**Q11: What is undefined behavior (UB)?**

Undefined behavior means the C++ standard imposes no requirements on the program's behavior — anything can happen: crash, wrong output, or appearing to work. Common UB sources: accessing out-of-bounds memory, dereferencing null/dangling pointers, signed integer overflow, using uninitialized variables, and violating the strict aliasing rule. Compilers assume UB never occurs and may optimize based on that assumption.

**Q12: What is the scope and lifetime of a variable?**

Scope is where a name is visible (block scope, function scope, namespace scope, class scope). Lifetime is how long the object exists in memory. Local variables have automatic storage duration — they live until the enclosing block ends. Dynamic objects (created with `new`) live until explicitly deleted. Static/global variables live for the entire program. A common bug is returning a reference to a local variable whose lifetime has ended.

---

## Memory Management (Q13–Q24)

**Q13: What is the difference between stack and heap memory?**

The stack is a LIFO region for automatic storage: local variables, function parameters, and return addresses. Allocation and deallocation are instantaneous (just moving the stack pointer). The heap is a large pool for dynamic allocation (`new`/`delete`). Heap allocation is slower (involves searching for free blocks) and requires manual management or smart pointers. Stack size is limited (typically 1–8 MB); heap is limited by available memory.

> **What interviewers want to hear:**
> - Stack: fast, automatic, limited size, LIFO.
> - Heap: slower, manual or smart-pointer managed, large capacity.

**Q14: What is RAII?**

RAII (Resource Acquisition Is Initialization) ties resource ownership to object lifetime. A resource (memory, file handle, mutex lock) is acquired in the constructor and released in the destructor. When the object goes out of scope, the destructor runs automatically, guaranteeing cleanup even if an exception is thrown. This is the most important C++ idiom — it's the foundation of smart pointers, `lock_guard`, and file stream classes.

> **What interviewers want to hear:**
> - Constructor acquires, destructor releases.
> - Guarantees exception-safe cleanup without explicit `try`/`finally` blocks.

**Q15: What are smart pointers?**

Smart pointers are RAII wrappers for dynamic memory. `std::unique_ptr<T>` has exclusive ownership — it cannot be copied, only moved. `std::shared_ptr<T>` uses reference counting for shared ownership — the object is deleted when the last `shared_ptr` is destroyed. `std::weak_ptr<T>` is a non-owning observer of a `shared_ptr` that doesn't affect the reference count, used to break circular references.

**Q16: When would you use `unique_ptr` vs `shared_ptr`?**

Use `unique_ptr` by default — it has zero overhead over a raw pointer and expresses single ownership clearly. Use `shared_ptr` only when multiple owners genuinely need to share the same resource and no single owner can determine when to delete it. `shared_ptr` has overhead: reference count (atomic increment/decrement), control block allocation. In practice, 90%+ of dynamic allocation should use `unique_ptr`.

**Q17: What is a dangling pointer?**

A dangling pointer points to memory that has been freed or to a local variable that has gone out of scope. Dereferencing a dangling pointer is undefined behavior. Common causes: using a pointer after `delete`, returning a pointer to a local variable, or iterator invalidation (e.g., using an iterator after a `vector` reallocation).

**Q18: What is a memory leak and how do you prevent it?**

A memory leak occurs when dynamically allocated memory is never freed. The program consumes increasingly more memory over time. Prevent leaks by: using smart pointers (`unique_ptr`, `shared_ptr`), following RAII, avoiding raw `new`/`delete`, and using containers that manage their own memory. Tools like Valgrind and AddressSanitizer detect leaks at runtime.

**Q19: What is the Rule of Three / Five / Zero?**

The **Rule of Three** (C++03): if you define any of destructor, copy constructor, or copy assignment operator, define all three. The **Rule of Five** (C++11): add move constructor and move assignment operator. The **Rule of Zero**: prefer classes that don't need custom resource management — use smart pointers and standard containers so the compiler-generated defaults are correct. Rule of Zero is the ideal in modern C++.

> **What interviewers want to hear:**
> - Rule of Zero is the modern goal — let the compiler generate everything.
> - Rule of Five when you manage resources directly.

**Q20: What are move semantics and why do they exist?**

Move semantics (C++11) allow transferring resources from one object to another instead of copying. An rvalue reference (`T&&`) binds to temporaries and objects marked with `std::move`. Moving a `vector` of 1M elements is O(1) — it transfers the internal pointer rather than copying all elements. This eliminates unnecessary deep copies, especially for return values and container operations.

**Q21: What does `std::move` actually do?**

`std::move` is a cast — it converts its argument to an rvalue reference. It does not move anything by itself. The actual move happens when the rvalue reference is passed to a move constructor or move assignment operator. After a move, the source object is in a "valid but unspecified" state — you can destroy it or assign a new value, but don't read from it.

> **What interviewers want to hear:**
> - `std::move` is just `static_cast<T&&>(x)` — a cast, not a move.
> - The move constructor/assignment does the actual resource transfer.

**Q22: What is `new` vs `malloc`?**

`new` calls the constructor after allocating memory and returns the correct type. `malloc` only allocates raw bytes and returns `void*` — no construction. `new` throws `std::bad_alloc` on failure; `malloc` returns `nullptr`. In C++, always prefer `new` over `malloc` (and smart pointers over raw `new`). Never mix `new`/`free` or `malloc`/`delete`.

**Q23: What is placement new?**

Placement new constructs an object at a pre-allocated memory address: `new (ptr) T(args...)`. It does not allocate memory — it only calls the constructor at the given location. Used in custom allocators, memory pools, and the implementation of `std::vector` (which allocates raw memory with `allocator::allocate` and constructs elements in-place).

**Q24: How does `std::allocator` work?**

`std::allocator<T>` separates memory allocation from object construction. `allocate(n)` obtains raw memory for `n` objects. `construct(ptr, args...)` constructs an object at `ptr`. `destroy(ptr)` calls the destructor. `deallocate(ptr, n)` frees the memory. This separation is how containers like `vector` implement `reserve()` — allocating memory without constructing elements.

---

## OOP (Q25–Q42)

**Q25: What are the four pillars of OOP?**

Encapsulation (bundling data and methods, controlling access), Abstraction (exposing only relevant interfaces, hiding implementation), Inheritance (deriving new classes from existing ones to reuse/extend behavior), and Polymorphism (treating different types uniformly through a common interface — virtual functions in C++).

**Q26: What are access specifiers?**

`public`: accessible from anywhere. `protected`: accessible from the class itself and derived classes. `private`: accessible only from the class itself. The default access for `class` is `private`; for `struct`, it's `public`. Use `private` for data members (encapsulation) and `public` for the interface.

**Q27: What is a constructor and what types exist?**

A constructor initializes an object. Types: **default** (no arguments), **parameterized** (takes arguments), **copy** (takes `const T&`), **move** (takes `T&&`). C++11 adds delegating constructors (one constructor calls another) and inheriting constructors (`using Base::Base;`). Use member initializer lists for efficiency — they construct members directly rather than default-constructing then assigning.

**Q28: What is the difference between a struct and a class?**

The only difference is default access: `struct` defaults to `public` members and inheritance; `class` defaults to `private`. They are otherwise identical — both can have constructors, destructors, virtual functions, and templates. Convention: use `struct` for plain data aggregates, `class` for types with invariants and encapsulation.

**Q29: What is inheritance and what types exist in C++?**

Inheritance creates an "is-a" relationship where a derived class inherits members from a base class. C++ supports single inheritance and multiple inheritance. Access modes: `public` inheritance (most common — preserves base's public/protected), `protected` (base's public becomes protected), `private` (everything becomes private). `public` inheritance models "is-a"; `private` inheritance models "implemented-in-terms-of".

**Q30: What are virtual functions?**

A virtual function is declared with `virtual` in the base class and can be overridden in derived classes. When called through a base pointer or reference, the most-derived override is invoked at runtime (dynamic dispatch). This is the mechanism for runtime polymorphism. Without `virtual`, the base class version is always called (static dispatch based on pointer type).

> **What interviewers want to hear:**
> - `virtual` enables dynamic dispatch via the vtable.
> - Always use `override` keyword in derived classes to catch signature mismatches at compile time.

**Q31: What is a vtable?**

The vtable (virtual table) is a per-class array of function pointers to virtual function implementations. Each object of a class with virtual functions contains a hidden vptr (pointer to the vtable). When a virtual function is called, the runtime follows the vptr to the vtable and calls the correct function. This adds one pointer of overhead per object and one level of indirection per virtual call.

**Q32: What is a pure virtual function and an abstract class?**

A pure virtual function is declared with `= 0`: `virtual void draw() = 0;`. A class with at least one pure virtual function is abstract — it cannot be instantiated directly. Derived classes must override all pure virtual functions to be concrete. Abstract classes define interfaces that derived classes must implement.

**Q33: What is the diamond problem?**

The diamond problem occurs with multiple inheritance when two base classes share a common ancestor. Class D inherits from B and C, both of which inherit from A. Without virtual inheritance, D contains two copies of A's members, causing ambiguity. Solution: `class B : virtual public A` and `class C : virtual public A` — ensures a single shared A subobject.

**Q34: What is object slicing?**

Object slicing occurs when a derived class object is assigned to a base class variable by value. The derived-class-specific data is "sliced off," leaving only the base portion. The object loses its derived identity and virtual function overrides. Prevention: use pointers or references to base classes, never pass polymorphic objects by value.

> **What interviewers want to hear:**
> - Slicing happens with value semantics, not with pointers/references.
> - It's a common bug when storing polymorphic objects in containers by value.

**Q35: What is the `override` keyword?**

`override` (C++11) explicitly marks a function as overriding a base class virtual function. If the signature doesn't match any base class virtual function, the compiler produces an error. This catches bugs like mismatched parameter types or forgetting `const`. Always use `override` on every overriding function.

**Q36: What is the `final` keyword?**

`final` (C++11) can be applied to a class (prevents inheritance: `class Leaf final { };`) or a virtual function (prevents further overriding: `void foo() final;`). Use it to express design intent and enable compiler devirtualization optimizations.

**Q37: What is the difference between composition and inheritance?**

Inheritance models "is-a" (Dog is-a Animal). Composition models "has-a" (Car has-a Engine). Prefer composition over inheritance because it provides looser coupling, easier testing, and doesn't expose the base class's interface. Inheritance creates a tight dependency on the base class's implementation, making changes fragile.

**Q38: What is operator overloading?**

Operator overloading defines custom behavior for operators on user-defined types. For example, overloading `<` for a struct enables it to work with `std::sort` and ordered containers. Some operators must be member functions (`=`, `()`, `[]`, `->`), others can be free functions (prefer free functions for symmetric operators like `+`, `==`). Don't abuse it — only overload operators when the meaning is intuitive.

**Q39: What is a friend function/class?**

A `friend` declaration grants a non-member function or another class access to private and protected members. Use sparingly — it breaks encapsulation. Common legitimate uses: operator overloading (e.g., `operator<<` for output streams needs access to private data), and tightly coupled helper classes.

**Q40: What is SOLID in OOP?**

**S**ingle Responsibility: a class has one reason to change. **O**pen/Closed: open for extension, closed for modification. **L**iskov Substitution: derived classes must be substitutable for their base. **I**nterface Segregation: prefer small, focused interfaces. **D**ependency Inversion: depend on abstractions, not concretions. These principles guide maintainable OOP design and are frequently discussed in system design interviews.

**Q41: What are virtual destructors and why are they important?**

If you delete a derived object through a base pointer and the base destructor is not virtual, only the base destructor runs — the derived part leaks. Making the base destructor virtual ensures the correct destructor chain is called. **Rule:** If a class has any virtual functions, its destructor should be virtual.

> **What interviewers want to hear:**
> - Non-virtual destructor + polymorphic deletion = undefined behavior / resource leak.
> - If you see `virtual` anywhere in a class, the destructor should be `virtual` too.

**Q42: What is the difference between early binding and late binding?**

Early binding (static dispatch) resolves the function call at compile time based on the declared type. Late binding (dynamic dispatch) resolves at runtime based on the actual object type, using the vtable. Non-virtual functions use early binding; virtual functions use late binding. Late binding has a small overhead (vtable lookup) but enables polymorphism.

---

## STL and Containers (Q43–Q58)

**Q43: What is the STL?**

The Standard Template Library consists of containers (data structures), algorithms (sorting, searching, transforming), and iterators (interface between containers and algorithms). It uses templates for type-generic code and follows the principle of separating data structures from algorithms through iterators.

**Q44: What is the difference between `vector` and `array`?**

`std::array<T, N>` has a fixed size known at compile time, stored on the stack, with no heap allocation overhead. `std::vector<T>` is dynamically sized, heap-allocated, and supports `push_back`/`pop_back`. Use `array` when the size is a compile-time constant and small. Use `vector` for everything else — it's the default container.

**Q45: How does `vector` manage memory internally?**

`vector` maintains a contiguous heap buffer with three values: pointer to data, size (number of elements), and capacity (allocated space). When `push_back` exceeds capacity, it allocates a new buffer (typically 2x capacity), copies/moves elements, and frees the old buffer. This amortized reallocation gives `push_back` O(1) amortized time.

> **What interviewers want to hear:**
> - Amortized O(1) push_back due to geometric growth (typically doubling).
> - Use `reserve()` when you know the size to avoid reallocations.

**Q46: What is iterator invalidation?**

Iterator invalidation means an iterator no longer points to a valid element after a container modification. For `vector`: `push_back` invalidates all iterators if reallocation occurs; `insert`/`erase` invalidate iterators at or after the affected position. For `map`/`set`: only iterators to the erased element are invalidated. For `unordered_map`: any rehash invalidates all iterators. Know the rules for the containers you use.

**Q47: What is the difference between `map` and `unordered_map`?**

`std::map` uses a red-black tree: O(log n) operations, ordered iteration, works with any comparable type. `std::unordered_map` uses a hash table: O(1) average operations, unordered iteration, requires a hash function. Use `unordered_map` when you need speed and don't care about order. Use `map` when you need sorted keys or range queries.

> **What interviewers want to hear:**
> - `map`: O(log n), sorted, balanced BST. `unordered_map`: O(1) average, hash table.
> - `unordered_map` worst-case is O(n) due to hash collisions.

**Q48: How does `unordered_map` handle collisions?**

The standard mandates separate chaining — each bucket contains a linked list of elements that hash to the same bucket. When the load factor exceeds `max_load_factor()` (default 1.0), the table rehashes: allocates more buckets, redistributes all elements. Worst-case performance is O(n) per lookup if all keys hash to the same bucket.

**Q49: What is the difference between `set` and `multiset`?**

`std::set` stores unique sorted elements; inserting a duplicate is a no-op. `std::multiset` allows duplicates. Both use red-black trees with O(log n) operations. Use `set` for unique membership testing; `multiset` when you need to count occurrences while maintaining sorted order.

**Q50: How does `priority_queue` work and how do you make a min-heap?**

`std::priority_queue<T>` is a max-heap by default — `top()` returns the largest element. It wraps a `vector` and uses heap operations. For a min-heap: `std::priority_queue<T, std::vector<T>, std::greater<T>>`. For custom ordering, provide a comparator that returns `true` when the first argument has *lower* priority (should be below the second in the heap).

```cpp
// Custom comparator for min-heap of pairs by second element
auto cmp = [](const auto& a, const auto& b) { return a.second > b.second; };
std::priority_queue<std::pair<int,int>, std::vector<std::pair<int,int>>, decltype(cmp)> pq(cmp);
```

**Q51: What is `deque` and when should you use it?**

`std::deque` (double-ended queue) supports O(1) push/pop at both front and back. Internally it uses an array of fixed-size blocks, giving it near-contiguous memory access. Use it when you need efficient insertion at both ends (e.g., sliding window problems). It's the default backing container for `stack` and `queue`.

**Q52: What is `std::pair` and `std::tuple`?**

`std::pair<T1, T2>` holds exactly two values, accessed via `.first` and `.second`. `std::tuple<Ts...>` holds any number of values, accessed via `std::get<index>(t)`. Structured bindings (C++17) simplify access: `auto [x, y] = my_pair;`. Use `pair` for key-value pairs and `tuple` for returning multiple values.

**Q53: What is `std::string_view` and when should you use it?**

`std::string_view` (C++17) is a non-owning reference to a contiguous character sequence. It stores a pointer and a length — no allocation, no copy. Use it for function parameters that only need to read a string. Do not store a `string_view` that outlives the underlying data.

**Q54: How do you iterate and erase elements from a container?**

For sequence containers, use the erase-remove idiom: `v.erase(std::remove_if(v.begin(), v.end(), pred), v.end());`. In C++20, use `std::erase_if(v, pred)`. For associative containers, loop with `it = container.erase(it)` which returns the next valid iterator. Never increment an invalidated iterator.

**Q55: What is `emplace_back` vs `push_back`?**

`push_back(val)` copies or moves an existing object into the container. `emplace_back(args...)` constructs the object in-place directly inside the container's memory, forwarding the arguments to the constructor. `emplace_back` can be more efficient when you'd otherwise construct a temporary just to move it. In practice, modern compilers often optimize both to the same result.

**Q56: What is the difference between `list` and `forward_list`?**

`std::list` is a doubly-linked list (bidirectional iteration, O(1) insert/erase anywhere). `std::forward_list` is a singly-linked list (forward-only, slightly less memory per node). Both have poor cache locality. In DSA contexts, `vector` is almost always better. Use `list` only when you need guaranteed O(1) splice operations or stable iterators across insertions/erasures.

**Q57: What are container adaptors?**

`std::stack`, `std::queue`, and `std::priority_queue` are adaptors — they wrap an underlying container and restrict its interface. `stack` wraps `deque` (LIFO: `push`, `pop`, `top`). `queue` wraps `deque` (FIFO: `push`, `pop`, `front`). `priority_queue` wraps `vector` (heap: `push`, `pop`, `top`).

**Q58: When should you use `vector<bool>` and what's the caveat?**

`vector<bool>` is a space-optimized specialization that stores each bool as a single bit. It saves memory (8x compared to `vector<char>`) but breaks normal `vector` semantics: `operator[]` returns a proxy object, not a `bool&`. You cannot take the address of an element. If you need proper reference semantics, use `vector<char>` or `std::bitset<N>`.

---

## Algorithms and Problem Solving (Q59–Q68)

**Q59: What is the time complexity of `std::sort`?**

`std::sort` is O(n log n) on average and worst case. It typically implements introsort — a hybrid of quicksort, heapsort, and insertion sort. Quicksort for average-case performance, heapsort as fallback to guarantee O(n log n) worst case, and insertion sort for small subarrays.

> **What interviewers want to hear:**
> - O(n log n) guaranteed (not O(n²) like naive quicksort).
> - Uses introsort: quicksort + heapsort fallback + insertion sort for small ranges.

**Q60: What is the difference between `std::sort` and `std::stable_sort`?**

`std::sort` is not guaranteed to preserve the relative order of equal elements. `std::stable_sort` preserves that order (stability) but uses more memory (O(n) extra space for mergesort) and is typically slower by a constant factor. Use `stable_sort` when the relative order of equal elements matters (e.g., sorting by one key while preserving a prior sort by another key).

**Q61: How do `lower_bound` and `upper_bound` work?**

Both require a sorted range. `lower_bound(first, last, val)` returns an iterator to the first element ≥ `val`. `upper_bound(first, last, val)` returns an iterator to the first element > `val`. The distance `upper_bound - lower_bound` gives the count of elements equal to `val`. Both are O(log n) for random-access iterators, O(n) for forward iterators.

**Q62: What is a lambda expression?**

A lambda is an anonymous function object: `[capture](params) -> ret { body }`. The capture clause specifies which outer variables are available: `[x]` by copy, `[&x]` by reference, `[=]` all by copy, `[&]` all by reference. Lambdas are used extensively with STL algorithms for custom predicates, comparators, and callbacks.

```cpp
auto is_even = [](int x) { return x % 2 == 0; };
std::count_if(v.begin(), v.end(), is_even);
```

**Q63: How do you write a custom comparator for `std::sort`?**

Provide a callable that takes two elements and returns `true` if the first should come before the second. It must define a strict weak ordering (irreflexive, asymmetric, transitive).

```cpp
std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });  // descending
```

> **What interviewers want to hear:**
> - Must be a strict weak ordering — returning `true` for equal elements causes undefined behavior.
> - Can use a lambda, function pointer, or functor with `operator()`.

**Q64: What is `std::accumulate` and how is it used?**

`std::accumulate` (in `<numeric>`) computes the sum (or custom fold) of a range. `std::accumulate(v.begin(), v.end(), 0)` sums all elements starting from initial value 0. The fourth argument can be a custom binary operation. Be careful with the initial value type — `accumulate(v.begin(), v.end(), 0)` uses `int` even if `v` contains `long long`; use `0LL` for `long long`.

**Q65: How does `std::next_permutation` work?**

`std::next_permutation(first, last)` rearranges the range to the next lexicographically greater permutation and returns `true`. If the range is the last permutation (descending order), it wraps to the first (ascending) and returns `false`. To enumerate all permutations, sort the range first and loop while `next_permutation` returns `true`.

**Q66: What is the two-pointer technique?**

Two pointers is a pattern where two indices traverse a data structure, usually from opposite ends or with different speeds. Used for: finding pairs with a target sum in a sorted array, removing duplicates in-place, detecting cycles in linked lists (fast/slow pointers), and partitioning. Time complexity is typically O(n) with O(1) space.

**Q67: What is the sliding window technique?**

Sliding window maintains a window (subarray) over a sequence, expanding or shrinking it to satisfy constraints. Fixed-size windows slide by adding one element and removing one. Variable-size windows expand until a condition breaks, then shrink from the left. Used for: maximum sum subarray of size k, longest substring without repeating characters, minimum window substring.

**Q68: What are `std::min_element` and `std::max_element`?**

Both return an iterator to the minimum/maximum element in a range in O(n) time. `std::minmax_element` finds both in a single pass using ~1.5n comparisons. Prefer these over manual loops — they handle empty ranges (return `last`) and accept custom comparators.

Follow-up: What does `std::nth_element` do? It partially sorts a range so the element at position n is what would be there in a fully sorted range, with all elements before it ≤ and all after ≥. Average O(n), used for finding the kth smallest element.

---

## Templates (Q69–Q74)

**Q69: What is the difference between a function template and a class template?**

Function templates allow template argument deduction from function arguments — the compiler infers types automatically. Class templates (pre-C++17) require explicit template arguments: `Stack<int> s;`. C++17 introduced Class Template Argument Deduction (CTAD) which allows deduction in some cases: `std::pair p{1, 2.0};`. Function templates also support overloading; class templates use specialization instead.

**Q70: What is template specialization and when would you use it?**

Template specialization provides a custom implementation for specific types. Full specialization handles one exact type. Partial specialization (class templates only) handles categories of types (e.g., all pointers). Use it when the generic implementation is incorrect or suboptimal for certain types — for example, `std::vector<bool>` is a specialization that stores bits instead of bytes.

**Q71: What is SFINAE?**

SFINAE (Substitution Failure Is Not An Error) means that when template argument substitution fails, the overload is silently removed from the candidate set rather than causing a compile error. It's the mechanism behind `std::enable_if`, which uses SFINAE to conditionally enable/disable function templates based on type traits. C++20 Concepts are the modern, readable replacement.

> **What interviewers want to hear:**
> - SFINAE = invalid substitution removes the overload, doesn't cause an error.
> - `enable_if` uses SFINAE; Concepts (C++20) are the clean replacement.

**Q72: What are Concepts (C++20) and how do they improve templates?**

Concepts are named sets of compile-time constraints on template parameters. They replace SFINAE with clear syntax: `template <std::integral T>` instead of `template <typename T, std::enable_if_t<std::is_integral_v<T>>* = nullptr>`. Benefits: readable syntax, clear compiler error messages that state which constraint was violated, composable with `&&` and `||`.

**Q73: What is `if constexpr`?**

`if constexpr` (C++17) evaluates the condition at compile time and discards the false branch entirely. This is critical in templates: it allows different code paths for different types without triggering compile errors in branches that don't apply. Without `if constexpr`, you'd need template specialization or SFINAE for the same effect.

```cpp
template <typename T>
auto stringify(T val) {
    if constexpr (std::is_arithmetic_v<T>) return std::to_string(val);
    else return val;
}
```

**Q74: What are parameter packs and fold expressions?**

Parameter packs (`typename... Ts`, `Ts... args`) represent zero or more template arguments or function arguments. Before C++17, you recursively unpacked them. C++17 fold expressions apply an operator across the pack in one line: `(args + ...)` sums all arguments. `sizeof...(args)` gives the count at compile time.

---

## Concurrency (Q75–Q78)

**Q75: How do you create and manage threads in C++?**

Use `std::thread t(callable, args...)` to spawn a thread. The callable can be a function, lambda, or functor. You must call `t.join()` (wait for completion) or `t.detach()` (run independently) before the `thread` object is destroyed — otherwise `std::terminate` is called. Use `std::jthread` (C++20) which auto-joins in its destructor.

**Q76: What is a mutex and how do you use it?**

A `std::mutex` provides mutual exclusion — only one thread can hold the lock at a time. Always use RAII wrappers: `std::lock_guard` for simple scoped locking, `std::unique_lock` for flexible locking (deferred, timed, manual unlock), `std::scoped_lock` (C++17) for locking multiple mutexes without deadlock. Never call `lock()`/`unlock()` directly — if an exception is thrown between them, the mutex stays locked.

> **What interviewers want to hear:**
> - Always use RAII lock wrappers, never raw `lock()`/`unlock()`.
> - `std::scoped_lock` for multiple mutexes — prevents deadlock.

**Q77: What is a deadlock and how do you prevent it?**

Deadlock occurs when threads form a circular chain where each holds a resource the next needs. Prevention: always acquire locks in a consistent global order, use `std::scoped_lock` to atomically acquire multiple locks, minimize lock scope, avoid holding locks while calling external code. Detection is hard — prevention through design is the right approach.

**Q78: Are STL containers thread-safe?**

No. STL containers are not thread-safe for concurrent writes. Multiple readers with no writers are safe. Any write operation requires external synchronization (mutex). Even `const` operations can be unsafe if another thread is writing. The only thread-safe-by-default types are `std::atomic<T>` specializations.

---

## Debugging and Best Practices (Q79–Q85)

**Q79: What are sanitizers and which ones should you use?**

Sanitizers are compiler-instrumented runtime checks. AddressSanitizer (ASan: `-fsanitize=address`) catches buffer overflows, use-after-free, and leaks. UndefinedBehaviorSanitizer (UBSan: `-fsanitize=undefined`) catches signed overflow, null dereference, and shift errors. ThreadSanitizer (TSan: `-fsanitize=thread`) catches data races. Use ASan + UBSan together during development — they catch the majority of C++ bugs.

> **What interviewers want to hear:**
> - ASan + UBSan are the most important pair for catching C++ bugs.
> - They add runtime overhead (2–5x) — use for testing, not production.

**Q80: What is undefined behavior and why is it dangerous?**

Undefined behavior (UB) means the language standard places no requirements on the program's behavior. The compiler assumes UB never occurs and may optimize based on that assumption, leading to unexpected results. Common UB: signed integer overflow, null/dangling pointer dereference, out-of-bounds access, reading uninitialized variables, violating ODR. UB can appear to "work" on one compiler and crash on another.

**Q81: What does `-Wall -Wextra` do and why should you always use them?**

`-Wall` enables a broad set of useful warnings (unused variables, missing return statements, sign comparison, etc.). `-Wextra` adds additional warnings beyond `-Wall`. Together they catch a large class of bugs at compile time with zero runtime cost. Many professional codebases add `-Werror` to treat all warnings as errors, preventing warning-blind code from merging.

**Q82: How do you debug a segmentation fault?**

A segfault means your program accessed invalid memory. Steps: (1) compile with `-g -fsanitize=address` and run — ASan gives the exact line and allocation/deallocation history. (2) If no sanitizer, use GDB/LLDB: `run`, then `backtrace` to see the call stack at the crash. (3) Check for: null pointer dereference, array out-of-bounds, use-after-free, stack overflow from deep recursion.

**Q83: What are common sources of bugs in C++ DSA code?**

The most frequent bugs: (1) integer overflow when multiplying or summing large values — use `long long`. (2) Off-by-one errors in loop bounds and array indices. (3) Uninitialized variables — especially local `int` in functions. (4) Empty container access — calling `front()`/`back()` on an empty container. (5) Iterator invalidation — modifying a container while iterating. (6) Using `endl` instead of `'\n'` causing TLE. (7) Forgetting to sort before binary search.

**Q84: What is the fast I/O trick and when should you use it?**

`ios_base::sync_with_stdio(false)` disables synchronization between C and C++ I/O streams. `cin.tie(nullptr)` stops `cout` from flushing before every `cin` read. Together they make `cin`/`cout` competitive with `scanf`/`printf`. Use them in competitive programming and timed interviews. Caveat: after disabling sync, do not mix C I/O (`printf`/`scanf`) with C++ I/O.

**Q85: What compiler flags should you use for competitive programming vs production?**

For competitive programming: `-std=c++20 -O2`. For development and debugging: `-std=c++20 -g -O0 -Wall -Wextra -fsanitize=address,undefined`. For production: `-std=c++20 -O2 -DNDEBUG`. The `-DNDEBUG` flag disables `assert()` macros. Never use `-O2` with sanitizers in production — sanitizers are for testing.

> **What interviewers want to hear:**
> - Know the difference between debug and release flags.
> - Sanitizers are for development, `-O2` for production/contests.

Follow-up: What does `-O3` do beyond `-O2`? It enables more aggressive optimizations like loop vectorization, function inlining, and loop unrolling. It can sometimes produce *slower* code due to increased instruction cache pressure.
