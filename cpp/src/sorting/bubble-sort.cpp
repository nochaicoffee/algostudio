#include <iostream>
#include <vector>
using namespace std;

// Bubble Sort
// Repeatedly step through the list, compare adjacent elements, and swap
// them if they are in the wrong order.

void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        bool swapped = false;
        for (int j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    cout << "Before: ";
    for (int x : arr) cout << x << " ";
    cout << endl;

    bubbleSort(arr);

    cout << "After:  ";
    for (int x : arr) cout << x << " ";
    cout << endl;

    return 0;
}
