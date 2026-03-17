package sorting

import (
	"reflect"
	"testing"
)

func TestBubbleSort(t *testing.T) {
	tests := []struct {
		input []int
		want  []int
	}{
		{[]int{64, 34, 25, 12, 22, 11, 90}, []int{11, 12, 22, 25, 34, 64, 90}},
		{[]int{5, 1, 4, 2, 8}, []int{1, 2, 4, 5, 8}},
		{[]int{1, 2, 3}, []int{1, 2, 3}},
		{[]int{}, []int{}},
	}

	for _, tt := range tests {
		arr := make([]int, len(tt.input))
		copy(arr, tt.input)
		BubbleSort(arr)
		if !reflect.DeepEqual(arr, tt.want) {
			t.Errorf("BubbleSort(%v) = %v, want %v", tt.input, arr, tt.want)
		}
	}
}
