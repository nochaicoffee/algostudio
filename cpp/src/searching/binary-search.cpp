#include <iostream>
#include <vector>
using namespace std;

// Binary Search
// Given a sorted array and a target, return the index of the target
// or -1 if not found.

int binarySearch(const vector<int>& arr, int target) {
    int left = 0, right = (int)arr.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

int main() {
    vector<int> arr = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    cout << "Search 23: index " << binarySearch(arr, 23) << endl;
    cout << "Search 50: index " << binarySearch(arr, 50) << endl;
    return 0;
}
