export default function mergeSort<T>(arr: T[]): T[] {
	if (arr.length <= 1) {
		return arr;
	}
	let middleIndex = Math.floor(arr.length / 2);
	let left = arr.slice(0, middleIndex);
	let right = arr.slice(middleIndex, arr.length);
	let sortedLeft = mergeSort(left);
	let sortedRight = mergeSort(right);
	return merge(sortedLeft, sortedRight);
}

function merge<T>(left: T[], right: T[]): T[] {
	if (right.length === 0) {
		return left
	}
	if (left.length === 0) {
		return right;
	} 
	let smallest: T;
	if (left[0] <= right[0]) {
		smallest = left.shift();
	} else {
		smallest = right.shift()
	}
	let merged = merge(left, right)
	merged.unshift(smallest);
	return merged
}