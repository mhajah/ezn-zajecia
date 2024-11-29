function mergeSort(array) {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2 );
  // lewa czesc tablicy
  const left = array.slice(0, mid);
  // prawa czesc tablicy
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  const result = [];
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (right < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

const array = [4, 3, 2, 1];
console.log(mergeSort(array)); // [1, 2, 3, 4]