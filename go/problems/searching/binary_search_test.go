package searching

import "testing"

func TestBinarySearch(t *testing.T) {
	arr := []int{2, 5, 8, 12, 16, 23, 38, 56, 72, 91}

	tests := []struct {
		target int
		want   int
	}{
		{23, 5},
		{2, 0},
		{91, 9},
		{50, -1},
		{1, -1},
	}

	for _, tt := range tests {
		got := BinarySearch(arr, tt.target)
		if got != tt.want {
			t.Errorf("BinarySearch(arr, %d) = %d, want %d", tt.target, got, tt.want)
		}
	}
}
