#include <cassert>

class DynamicArray {
private:
  int *arr;
  int length;
  int capacity;

public:
  // Constructor to initialize the array
  DynamicArray(int initCapacity) : length(0), capacity(initCapacity) {
    arr = new int[capacity];
  }

  ~DynamicArray() { delete[] arr; }

  int get(int i) { return arr[i]; }

  void set(int i, int n) { arr[i] = n; }

  void pushback(int n) {
    if (length == capacity) {
      resize();
    }
    arr[length] = n;
    length++;
  }

  int popback() {
    assert(length > 0);
    length--;
    return arr[length];
  }

  void resize() {
    int newCap = (capacity == 0) ? 1 : capacity * 2;
    int *newArr = new int[newCap];
    for (int i = 0; i < length; i++) {
      newArr[i] = arr[i];
    }
    delete[] arr;
    arr = newArr;
    capacity = newCap;
  }

  int getSize() { return length; }

  int getCapacity() { return capacity; }
};
