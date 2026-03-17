package searching

// BinarySearch returns the index of target in a sorted slice, or -1 if not found.
func BinarySearch(arr []int, target int) int {
	left, right := 0, len(arr)-1
	for left <= right {
		mid := left + (right-left)/2
		switch {
		case arr[mid] == target:
			return mid
		case arr[mid] < target:
			left = mid + 1
		default:
			right = mid - 1
		}
	}
	return -1
}
