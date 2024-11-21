// przyjmujemy jakas tablice liczb
// zwracamy liczby posortowane rosnaco
function bubbleSort(arr) {
  let result = arr;
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (result[j] > result[j+1]) {
        var temp = result[j];
        result[j] = result[j+1];
        result[j+1] = temp;
      }
    }
  }
  return result;
}


function selectionSort(arr) {
  let result = arr;
  let minIndex = 0;
  for (let i = 0; i < result.length; i++) {
    minIndex = i;
    for (let j = i; j < result.length; j++) {
      if (result[minIndex] > result[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      var temp = result[i];
      result[i] = result[minIndex];
      result[minIndex] = temp;
    }
  }
  return result;
}


let array = [3, 2, 1, 4, 7, 5];
console.log(selectionSort(array)); 