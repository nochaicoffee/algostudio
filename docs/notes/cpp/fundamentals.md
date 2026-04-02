# C++ fundamentals

## Summary

This note is a **practical introduction to C++ fundamentals** for learning and interviews. It covers the language features you will use most often:

- types and variables
- operators, conditions, and loops
- functions and parameter passing
- standard library basics
- pointers, references, and memory intuition
- OOP concepts in C++
- best practices, pitfalls, and common interview questions

Use this as a **language reference** while solving problems in C++.

## C++ mental model

C++ gives you:

- **high performance** with close-to-the-machine control
- **multiple styles**: procedural, object-oriented, and generic programming
- a rich **standard library** with containers and algorithms
- control over **memory and object lifetime**

That power comes with responsibility: types matter, ownership matters, and undefined behavior is real.

## Basic program structure

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> nums = {1, 2, 3};
    std::cout << nums[0] << '\n';
    return 0;
}
```

Key ideas:

- `#include` brings in declarations from headers.
- `main()` is the program entry point.
- `std::` refers to names inside the standard library namespace.
- Statements usually end with `;`.

## Data types and variables

### Primitive types

| Type | Typical use | Example |
| ---- | ----------- | ------- |
| `int` | integers | `int age = 25;` |
| `long long` | larger integers | `long long big = 1'000'000'000LL;` |
| `float` | single-precision decimal | `float x = 3.14f;` |
| `double` | double-precision decimal | `double pi = 3.14159;` |
| `char` | single character | `char grade = 'A';` |
| `bool` | true/false | `bool found = true;` |
| `void` | no value / no return | `void print();` |

### Common standard library types

| Type | Use |
| ---- | --- |
| `std::string` | text |
| `std::vector<T>` | dynamic array |
| `std::pair<T1, T2>` | two related values |
| `std::unordered_map<K, V>` | hash table |

### Variables, initialization, and `const`

```cpp
int count = 10;
double price{19.99};
const int maxSize = 100;
auto name = std::string("Alice");
```

- Prefer **initialized variables**. Uninitialized local variables can contain garbage values.
- Use `const` when a value should not change.
- Use `auto` when the type is obvious from the right-hand side and improves readability.

### Arrays vs vectors

```cpp
int fixed[3] = {1, 2, 3};           // fixed-size array
std::vector<int> dynamic = {1, 2};  // resizable array
dynamic.push_back(3);
```

- Use raw arrays mainly for low-level or specialized cases.
- Prefer `std::vector` for most interview and application code.

## Operators and expressions

| Category | Examples |
| -------- | -------- |
| Arithmetic | `+`, `-`, `*`, `/`, `%` |
| Comparison | `==`, `!=`, `<`, `>`, `<=`, `>=` |
| Logical | `&&`, `\|\|`, `!` |
| Assignment | `=`, `+=`, `-=`, `*=`, `/=` |
| Increment/decrement | `++`, `--` |

```cpp
int a = 10;
int b = 3;
int sum = a + b;
bool isEqual = (a == b);
bool valid = (a > 0 && b > 0);
```

Be careful with:

- integer division: `10 / 3` gives `3`, not `3.333...`
- assignment vs comparison: `=` is not the same as `==`
- operator precedence: use parentheses when intent is not obvious

## Namespaces

Namespaces help avoid name collisions.

```cpp
std::cout << "Hello\n";
std::vector<int> nums = {1, 2, 3};
```

- `std` is the standard library namespace.
- `std::cout` and `std::vector` mean "use these names from `std`."
- Avoid `using namespace std;` in larger codebases because it can create naming conflicts.

## Conditions

### `if`, `else if`, `else`

```cpp
if (score >= 90) {
    std::cout << "A\n";
} else if (score >= 75) {
    std::cout << "B\n";
} else {
    std::cout << "C\n";
}
```

### `switch`

```cpp
switch (day) {
    case 1:
        std::cout << "Monday\n";
        break;
    case 2:
        std::cout << "Tuesday\n";
        break;
    default:
        std::cout << "Unknown\n";
}
```

Use `switch` when comparing one value against several constant cases.

### Ternary operator

```cpp
std::string result = (n % 2 == 0) ? "even" : "odd";
```

Good for short expressions. Avoid it when it makes code harder to read.

## Loops

### `for`

```cpp
for (int i = 0; i < 5; i++) {
    std::cout << i << ' ';
}
```

### Range-based `for`

```cpp
std::vector<int> nums = {2, 4, 6};
for (int num : nums) {
    std::cout << num << ' ';
}
```

Use `const auto&` when you want to avoid copying:

```cpp
for (const auto& word : words) {
    std::cout << word << '\n';
}
```

### `while`

```cpp
int i = 0;
while (i < 5) {
    std::cout << i << ' ';
    i++;
}
```

### `do while`

```cpp
int x = 0;
do {
    std::cout << x << '\n';
    x++;
} while (x < 3);
```

### `break` and `continue`

```cpp
for (int i = 0; i < 10; i++) {
    if (i == 5) break;
    if (i % 2 == 0) continue;
    std::cout << i << ' ';
}
```

## Functions

### Basic function

```cpp
int add(int a, int b) {
    return a + b;
}
```

### Pass by value vs pass by reference

```cpp
void incrementByValue(int x) {
    x++;
}

void incrementByReference(int& x) {
    x++;
}

void printVector(const std::vector<int>& nums) {
    for (int n : nums) {
        std::cout << n << ' ';
    }
}
```

| Style | Meaning | When to use |
| ----- | ------- | ----------- |
| `int x` | copy the argument | small types, or when you need a local copy |
| `int& x` | alias to the original value | when the function should modify the caller's value |
| `const int& x` | read-only alias | large objects you do not want to copy |

### Function overloading

```cpp
int square(int x) {
    return x * x;
}

double square(double x) {
    return x * x;
}
```

Same function name, different parameter types.

## References, pointers, and memory

### References

```cpp
int a = 10;
int& ref = a;
ref = 20;   // a also becomes 20
```

- A reference is another name for an existing variable.
- References must be initialized when declared.
- Use references heavily in C++ for parameter passing.

### Pointers

```cpp
int value = 42;
int* ptr = &value;
std::cout << *ptr << '\n';
```

- `&value` means "address of value"
- `ptr` stores an address
- `*ptr` means "the value at that address"

### Stack vs heap

| Area | Typical behavior |
| ---- | ---------------- |
| Stack | automatic storage, cleaned up when scope ends |
| Heap | dynamic storage, lifetime controlled manually or through objects that manage it |

```cpp
int x = 5;                // stack
int* p = new int(10);     // heap
delete p;
```

For learning, `new` and `delete` are important to understand. In modern C++, prefer:

- `std::vector`
- `std::string`
- smart pointers like `std::unique_ptr`
- RAII objects that clean up automatically

### RAII

**RAII** means resources are acquired and released through object lifetime.

Example intuition:

- create an object
- the constructor acquires the resource
- when the object goes out of scope, the destructor releases it

This is one of the most important C++ ideas.

## Standard library essentials

### `std::string`

```cpp
std::string s = "hello";
s += " world";
std::cout << s.size() << '\n';
```

### `std::vector`

```cpp
std::vector<int> nums = {1, 2, 3};
nums.push_back(4);
std::cout << nums[1] << '\n';
```

### `std::pair`

```cpp
std::pair<int, std::string> student = {1, "Sam"};
std::cout << student.first << ' ' << student.second << '\n';
```

### `std::unordered_map`

```cpp
std::unordered_map<std::string, int> freq;
freq["apple"]++;
freq["banana"]++;
```

Why these matter:

- `std::vector` is the default array-like container in interviews
- `std::string` and `std::unordered_map` show up constantly in DSA problems
- knowing their common operations saves time during coding rounds

## Classes and OOP in C++

### Basic class

```cpp
class BankAccount {
private:
    double balance;

public:
    BankAccount(double initialBalance) : balance(initialBalance) {}

    void deposit(double amount) {
        balance += amount;
    }

    double getBalance() const {
        return balance;
    }
};
```

### Core OOP concepts

| Concept | Meaning in C++ |
| ------- | -------------- |
| Encapsulation | bundle data and methods together; hide internals with access modifiers |
| Abstraction | expose what an object does, hide how it works |
| Inheritance | derive one class from another |
| Polymorphism | use a common interface with behavior chosen at runtime or compile time |

### Access modifiers

- `private`: accessible only inside the class
- `public`: accessible from outside the class
- `protected`: accessible inside the class and derived classes

### Constructors and destructors

```cpp
class Person {
public:
    Person() {
        std::cout << "Constructed\n";
    }

    ~Person() {
        std::cout << "Destroyed\n";
    }
};
```

- A constructor runs when an object is created.
- A destructor runs when an object is destroyed.

### Inheritance

```cpp
class Animal {
public:
    void eat() const {
        std::cout << "Eating\n";
    }
};

class Dog : public Animal {
public:
    void bark() const {
        std::cout << "Bark\n";
    }
};
```

### Runtime polymorphism and `virtual`

```cpp
class Shape {
public:
    virtual double area() const {
        return 0.0;
    }

    virtual ~Shape() = default;
};

class Circle : public Shape {
private:
    double radius;

public:
    Circle(double r) : radius(r) {}

    double area() const override {
        return 3.14159 * radius * radius;
    }
};
```

Important points:

- `virtual` enables runtime polymorphism.
- `override` helps catch mistakes.
- Base classes used polymorphically should usually have a `virtual` destructor.

### `struct` vs `class`

They are almost the same in C++.

- `struct` members are `public` by default
- `class` members are `private` by default

Use `struct` for simple data objects and `class` when you want stronger encapsulation.

## Header/source separation

In larger C++ codebases, declarations and definitions are often split:

- header file: declarations, interfaces
- source file: implementations

Example:

- `math_utils.h` declares `int add(int, int);`
- `math_utils.cpp` defines the function body

This matters in interviews when talking about project structure or compilation.

## Copy vs move intuition

At a high level:

- **copy** creates a new object with the same contents
- **move** transfers resources from one object to another instead of making an expensive deep copy

You do not need full mastery at the fundamentals stage, but you should know:

- copying can be expensive for large objects
- modern C++ uses move semantics for performance
- containers like `std::vector` benefit from move-aware types

## Templates

Templates let you write generic code.

```cpp
template <typename T>
T getMax(T a, T b) {
    return (a > b) ? a : b;
}
```

This is the foundation behind much of the standard library.

## Best practices

- Prefer `std::vector`, `std::string`, and STL containers over manual arrays.
- Prefer `const` whenever a value should not change.
- Pass large read-only objects as `const T&`.
- Keep functions small and focused.
- Initialize variables when declaring them.
- Use meaningful names instead of single letters unless the scope is tiny.
- Compile with warnings such as `-Wall -Wextra`.
- Avoid `using namespace std;` in headers and larger codebases.
- Favor readability over clever one-liners.

## Common pitfalls

- **Uninitialized variables:** local variables are not automatically set to zero.
- **Out-of-bounds access:** `nums[10]` is invalid if the vector has fewer elements.
- **Dangling pointers/references:** pointing to memory that is no longer valid.
- **Memory leaks:** forgetting to `delete` dynamically allocated memory.
- **Object slicing:** storing a derived object by value in a base object loses derived-specific parts.
- **Missing `virtual` destructor:** deleting a derived object through a base pointer can be unsafe without it.
- **Confusing `==` and `=`:** easy bug in conditions.
- **Integer overflow / division issues:** important in interviews and competitive programming.

## Interview questions to know

### Core syntax and basics

1. What is the difference between `struct` and `class` in C++?
2. What is the difference between stack and heap memory?
3. What is the difference between a pointer and a reference?
4. What does `const` mean in different contexts?
5. What is the difference between pass by value, pass by reference, and pass by `const` reference?
6. What is the difference between an array and `std::vector`?
7. What is the difference between `std::map` and `std::unordered_map`?

### OOP and object model

1. What are encapsulation, inheritance, polymorphism, and abstraction?
2. What is a constructor? What is a destructor?
3. Why do we use `virtual` functions?
4. Why should a polymorphic base class usually have a `virtual` destructor?
5. What is object slicing?

### Modern C++ and practical understanding

1. What is RAII?
2. Why is `std::vector` preferred over manual dynamic arrays in most code?
3. What is the Rule of Three / Five at a high level?
4. What is move semantics, and why does it help performance?
5. Why are compiler warnings important?

## Short answers for interview revision

| Question | Short answer |
| -------- | ------------ |
| Pointer vs reference | A pointer stores an address and can be reseated; a reference is an alias and must be initialized. |
| Stack vs heap | Stack memory is usually automatic and scope-based; heap memory is dynamic and must be managed through objects or manual allocation. |
| `vector` vs array | `std::vector` is resizable and manages memory; arrays are fixed-size. |
| `const T&` | Read-only reference, useful to avoid copying large objects. |
| `virtual` | Enables runtime polymorphism through base-class interfaces. |
| RAII | Resource management tied to object lifetime. |

## What to practice next

- write small functions using `std::vector`, `std::string`, and `std::unordered_map`
- solve beginner array and string problems in C++
- read simple class definitions and identify constructors, member functions, and access control
- practice explaining pointers, references, stack vs heap, and `virtual` functions aloud

## In this repo

- Concept note example: [`docs/notes/arrays/dynamic-array.md`](../arrays/dynamic-array.md)
- Study implementation related to memory and array growth: [`cpp/src/arrays/dynamic-array.cpp`](../../../cpp/src/arrays/dynamic-array.cpp)

If you get comfortable with the sections above, you will have a strong base for most beginner and intermediate C++ interview discussions.
