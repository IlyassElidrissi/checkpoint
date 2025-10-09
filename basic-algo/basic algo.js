function insertionSort(arr) {
  // Loop from the second element to the end of the array
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // Current element to be inserted
    let j = i - 1;

    // Move elements of arr[0..i-1] that are greater than key
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    // Insert the key into the correct position
    arr[j + 1] = key;
  }

  return arr;
}

// Example usage:
let numbers = [8, 3, 5, 2, 9, 1];
console.log("Sorted array:", insertionSort(numbers));
