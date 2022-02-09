const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  let length = array.length;
  if (length === 1) {
    return array
  }
  // Split Array in into right and left

  let half = Math.floor(length / 2);

  let left = array.slice(0, half);
  let right = array.slice(half, length);


  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right) {
  let i = 0, j = 0;
  let mergedArray = [];
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      mergedArray.push(left[i]);
      i++;
    } else if (left[i] > right[j]) {
      mergedArray.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    mergedArray.push(left[i]);
    i++;
  }
  while (j < right.length) {
    mergedArray.push(right[j]);
    j++;
  }
  return mergedArray;
}


const answer = mergeSort(numbers);
console.log(answer);