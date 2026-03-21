package arrays

// TwoSum returns indices of the two numbers in nums that add up to target.
// Uses a hash map for O(n) time lookup.
func TwoSum(nums []int, target int) []int {
	seen := make(map[int]int)
	for i, num := range nums {
		complement := target - num
		if j, ok := seen[complement]; ok {
			return []int{j, i}
		}
		seen[num] = i
	}
	return nil
}

// TwoSumsBruteForce is a brute force approach to the two sum problem.
// It uses a nested loop to check every pair of numbers in the array.
// Time complexity: O(n^2)
// Space complexity: O(1)
func TwoSumsBruteForce(nums []int, target int) []int {
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i]+nums[j] == target {
				return []int{i, j}
			}
		}
	}
	return []int{-1, -1}
}
