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
