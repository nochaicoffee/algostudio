#!/usr/bin/env bash
set -euo pipefail

if [ $# -lt 3 ]; then
    echo "Usage: ./scripts/new-problem.sh <topic> <slug> \"<Title>\""
    echo "Example: ./scripts/new-problem.sh arrays two-sum \"Two Sum\""
    exit 1
fi

TOPIC="$1"
SLUG="$2"
TITLE="$3"

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

CPP_FILE="$ROOT/cpp/src/$TOPIC/$SLUG.cpp"
GO_FILE="$ROOT/go/problems/$TOPIC/${SLUG}.go"
NOTE_FILE="$ROOT/docs/problems/$TOPIC/$SLUG.md"
META_FILE="$ROOT/content/problems/$TOPIC/$SLUG.json"

for f in "$CPP_FILE" "$GO_FILE" "$NOTE_FILE" "$META_FILE"; do
    if [ -f "$f" ]; then
        echo "ERROR: $f already exists. Aborting."
        exit 1
    fi
done

mkdir -p "$(dirname "$CPP_FILE")" "$(dirname "$GO_FILE")" "$(dirname "$NOTE_FILE")" "$(dirname "$META_FILE")"

GO_PKG=$(echo "$SLUG" | tr '-' '_')

cat > "$CPP_FILE" <<EOF
#include <iostream>
#include <vector>
using namespace std;

// $TITLE
// Topic: $TOPIC
// Problem: TODO — paste problem link or statement here

class Solution {
public:
    // TODO: implement solution
};

int main() {
    Solution sol;
    // TODO: add test cases
    return 0;
}
EOF

cat > "$GO_FILE" <<EOF
package ${TOPIC}

// $TITLE
// Topic: $TOPIC
// Problem: TODO — paste problem link or statement here

func ${GO_PKG}() {
	// TODO: implement solution
}
EOF

cat > "$NOTE_FILE" <<EOF
# $TITLE

## Problem Statement
TODO — describe the problem.

## Pattern / Topic
$TOPIC

## Approaches

### 1. Brute Force

**Idea:** TODO — one-sentence summary.

**Step-by-step:**
1. TODO

**Why it works:** TODO

**Time Complexity Breakdown:**
- TODO: O(?)
- Combined: O(?) — TODO explain which term dominates.

**Space Complexity Breakdown:**
- TODO: O(?)
- Total extra space: O(?)

**Pros:** TODO
**Cons:** TODO

\`\`\`mermaid
flowchart TD
    A[Start] --> B[TODO]
    B --> C[End]
\`\`\`

---

### 2. Alternative Approach

TODO — describe an intermediate or different approach, or state:
"No notable intermediate approach for this problem."

**Idea:** TODO

**Step-by-step:**
1. TODO

**Why it works:** TODO

**Time Complexity Breakdown:**
- TODO: O(?)
- Combined: O(?) — TODO explain which term dominates.

**Space Complexity Breakdown:**
- TODO: O(?)
- Total extra space: O(?)

**Pros:** TODO
**Cons:** TODO

\`\`\`mermaid
flowchart TD
    A[Start] --> B[TODO]
    B --> C[End]
\`\`\`

---

### 3. Optimal Approach

**Idea:** TODO

**Step-by-step:**
1. TODO

**Why it works:** TODO

**Time Complexity Breakdown:**
- TODO: O(?)
- Combined: O(?) — TODO explain which term dominates.

**Space Complexity Breakdown:**
- TODO: O(?)
- Total extra space: O(?)

**Pros:** TODO
**Cons:** TODO

\`\`\`mermaid
flowchart TD
    A[Start] --> B[TODO]
    B --> C[End]
\`\`\`

---

## Approach Comparison

| Approach | Time | Space | Pros | Cons |
|----------|------|-------|------|------|
| Brute Force | O(?) | O(?) | TODO | TODO |
| Alternative | O(?) | O(?) | TODO | TODO |
| Optimal | O(?) | O(?) | TODO | TODO |

## Key Pitfalls
TODO — common mistakes and edge cases.

## Interview Talking Points
TODO — what to mention when walking through this in an interview.

## Solutions
- C++: \`cpp/src/$TOPIC/$SLUG.cpp\`
- Go: \`go/problems/$TOPIC/${SLUG}.go\`
- Visualizer metadata: \`content/problems/$TOPIC/$SLUG.json\`
EOF

cat > "$META_FILE" <<EOF
{
  "id": "$TOPIC/$SLUG",
  "title": "$TITLE",
  "topic": "$TOPIC",
  "difficulty": "medium",
  "tags": [],
  "summary": "",
  "visualizable": false,
  "animationType": "array",
  "steps": [],
  "relatedNotes": "docs/problems/$TOPIC/$SLUG.md",
  "solutionPaths": {
    "cpp": "cpp/src/$TOPIC/$SLUG.cpp",
    "go": "go/problems/$TOPIC/${SLUG}.go"
  }
}
EOF

MANIFEST="$ROOT/content/manifest.json"
MANIFEST_ENTRY="problems/$TOPIC/$SLUG.json"
if [ -f "$MANIFEST" ]; then
    TMP=$(mktemp)
    python3 -c "
import json, sys
with open('$MANIFEST') as f:
    data = json.load(f)
entry = '$MANIFEST_ENTRY'
if entry not in data:
    data.append(entry)
    data.sort()
with open('$MANIFEST', 'w') as f:
    json.dump(data, f, indent=2)
    f.write('\n')
"
fi

echo "Created problem: $TOPIC/$SLUG ($TITLE)"
echo "  C++:  $CPP_FILE"
echo "  Go:   $GO_FILE"
echo "  Note: $NOTE_FILE"
echo "  Meta: $META_FILE"
