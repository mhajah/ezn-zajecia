// funckja czysta (pure function):
// - zawsze zwraca to samo dla tych samych argumentów
// - nie ma efektów ubocznych (nie modyfikuje argumentow
// i innych zmiennych spoza funkcji)
function bubbleSort(arr) {
  let result = [...arr];
  let isSwapped = false;
  for (let i = 0; i < result.length; i++) {
    isSwapped = false;
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j] > result[j+1]) {
        let temp = result[j];
        result[j] = result[j+1];
        result[j+1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) return result;
  }
  return result;
}

function selectSort(arr) {
  let result = [...arr];
  let minIndex = 0;
  for (let i = 0; i < result.length; i++) {
    minIndex = i;
    for (let j = i; j < result.length; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = result[i];
      result[i] = result[minIndex];
      result[minIndex] = temp;
    }
  }
  return result;
}
console.log(selectSort([5, 3, 8, 1, 2, 7]));











// let arr = [5, 3, 8, 1, 2, 7];
// console.log(bubbleSort(arr));