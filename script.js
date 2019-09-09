// quicksort

let array = [];
function randomNum () {
	for (let i = 0; i < 7500; i++) {
		array.push(Math.round(Math.random() * 8000));
	}
}

randomNum();


let quickSort = function (arr, start, end) {
	
	let pivot = arr[end];
	let pivotIndex = end;
	let index = 0;
	
	
	if (start >= end) {
		return;
	}
	
	for (let i = index + 1; i < arr.length; i++) {
		
	if (arr[index] > pivot && index < end) {
		if (arr[i] < arr[index]) {
			swap(arr, i, index);
			}
		}
		index++;
	}	
		
	
	function swap(arr, a, b) {
	
		let temp = arr[a];
			arr[a] = arr[b];
			arr[b] = temp;
	
			//return arr[a];
			//return arr[b];
	};
	quickSort(arr, pivotIndex + 1, end);
	quickSort(arr, start, pivotIndex - 1);
	return arr;
	
};

console.log(quickSort(array, 0, array.length - 1));









