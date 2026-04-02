#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

// Two Sum
// Given an array of integers and a target, return indices of the two numbers
// that add up to the target.

class Solution {
public:
  vector<int> twoSum(vector<int> &nums, int target) {
    unordered_map<int, int> seen;
    for (int i = 0; i < (int)nums.size(); i++) {
      int complement = target - nums[i];
      if (seen.count(complement)) {
        return {seen[complement], i};
      }
      seen[nums[i]] = i;
    }
    return {};
  }

  // Note: This doesn't return the correct index, since the numbers in the
  // vector are shuffled after sort. inorder to return the correct index
  vector<int> twoSumPointerMethod(vector<int> &nums, int target) {
    vector<pair<int, int>> arr;
    for (int i = 0; i < (int)nums.size(); i++) {
      arr.push_back({nums[i], i});
    }
    sort(arr.begin(), arr.end());
    int left = 0, right = (int)arr.size() - 1;
    while (left < right) {
      int sum = arr[left].first + arr[right].first;
      if (sum == target) {
        return {arr[left].second, arr[right].second};
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return {};
  }
};

int main() {
  Solution sol;
  vector<int> nums = {2, 7, 11, 15};
  auto result = sol.twoSum(nums, 9);
  cout << "[" << result[0] << ", " << result[1] << "]" << endl;

  vector<int> nums2 = {3, 2, 4};
  auto result2 = sol.twoSum(nums2, 6);
  cout << "[" << result2[0] << ", " << result2[1] << "]" << endl;

  return 0;
}
