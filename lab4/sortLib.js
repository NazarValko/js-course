const sortingAlgorithms = {
  bubbleSort: function(arr, ascending = true) {
    let n = arr.length;
    let comparisons = 0;
    let swaps = 0;
    let undefinedCount = 0;

    const filteredArr = arr.filter(item => item !== undefined);
    undefinedCount = arr.length - filteredArr.length;
    const undefinedArr = new Array(undefinedCount).fill(undefined);

    if (undefinedCount > 0) {
      console.log(`Знайдено ${undefinedCount} undefined елементів у масиві.`);
    }

    for (let i = 0; i < filteredArr.length - 1; i++) {
      for (let j = 0; j < filteredArr.length - 1 - i; j++) {
        comparisons++;
        if ((ascending && filteredArr[j] > filteredArr[j + 1]) ||
            (!ascending && filteredArr[j] < filteredArr[j + 1])) {
          [filteredArr[j], filteredArr[j + 1]] = [filteredArr[j + 1], filteredArr[j]];
          swaps++;
        }
      }
    }

    console.log(`Bubble Sort: Порівнянь - ${comparisons}, Обмінів - ${swaps}`);
    return ascending ? [...filteredArr, ...undefinedArr] : [...undefinedArr, ...filteredArr];
  },

  selectionSort: function(arr, ascending = true) {
    let comparisons = 0;
    let swaps = 0;
    let undefinedCount = 0;

    const filteredArr = arr.filter(item => item !== undefined);
    undefinedCount = arr.length - filteredArr.length;
    const undefinedArr = new Array(undefinedCount).fill(undefined);

    if (undefinedCount > 0) {
      console.log(`Знайдено ${undefinedCount} undefined елементів у масиві.`);
    }

    for (let i = 0; i < filteredArr.length - 1; i++) {
      let extIndex = i;
      for (let j = i + 1; j < filteredArr.length; j++) {
        comparisons++;
        if ((ascending && filteredArr[j] < filteredArr[extIndex]) ||
            (!ascending && filteredArr[j] > filteredArr[extIndex])) {
          extIndex = j;
        }
      }
      [filteredArr[i], filteredArr[extIndex]] = [filteredArr[extIndex], filteredArr[i]];
      swaps++;
    }

    console.log(`Selection Sort: Порівнянь - ${comparisons}, Обмінів - ${swaps}`);
    return ascending ? [...filteredArr, ...undefinedArr] : [...undefinedArr, ...filteredArr];
  },

  insertionSort: function(arr, ascending = true) {
    let comparisons = 0;
    let shifts = 0;
    let undefinedCount = 0;

    const filteredArr = arr.filter(item => item !== undefined);
    undefinedCount = arr.length - filteredArr.length;
    const undefinedArr = new Array(undefinedCount).fill(undefined);

    if (undefinedCount > 0) {
      console.log(`Знайдено ${undefinedCount} undefined елементів у масиві.`);
    }

    for (let i = 1; i < filteredArr.length; i++) {
      let key = filteredArr[i];
      let j = i - 1;
      while (j >= 0 && ((ascending && filteredArr[j] > key) || (!ascending && filteredArr[j] < key))) {
        comparisons++;
        filteredArr[j + 1] = filteredArr[j];
        j--;
        shifts++;
      }
      filteredArr[j + 1] = key;
    }

    console.log(`Insertion Sort: Порівнянь - ${comparisons}, Зсувів - ${shifts}`);
    return ascending ? [...filteredArr, ...undefinedArr] : [...undefinedArr, ...filteredArr];
  },

  shellSort: function(arr, ascending = true) {
    let comparisons = 0;
    let swaps = 0;
    let undefinedCount = 0;

    const filteredArr = arr.filter(item => item !== undefined);
    undefinedCount = arr.length - filteredArr.length;
    const undefinedArr = new Array(undefinedCount).fill(undefined);
    let n = filteredArr.length;
    let gap = Math.floor(n / 2);

    if (undefinedCount > 0) {
      console.log(`Знайдено ${undefinedCount} undefined елементів у масиві.`);
    }

    while (gap > 0) {
      for (let i = gap; i < n; i++) {
        let temp = filteredArr[i];
        let j = i;
        while (j >= gap && ((ascending && filteredArr[j - gap] > temp) ||
            (!ascending && filteredArr[j - gap] < temp))) {
          comparisons++;
          filteredArr[j] = filteredArr[j - gap];
          j -= gap;
          swaps++;
        }
        filteredArr[j] = temp;
      }
      gap = Math.floor(gap / 2);
    }

    console.log(`Shell Sort: Порівнянь - ${comparisons}, Обмінів - ${swaps}`);
    return ascending ? [...filteredArr, ...undefinedArr] : [...undefinedArr, ...filteredArr];
  },

  quickSort: function(arr, ascending = true) {
    let comparisons = 0;
    let swaps = 0;
    let undefinedCount = 0;

    const filteredArr = arr.filter(item => item !== undefined);
    undefinedCount = arr.length - filteredArr.length;
    const undefinedArr = new Array(undefinedCount).fill(undefined);

    if (undefinedCount > 0) {
      console.log(`Знайдено ${undefinedCount} undefined елементів у масиві.`);
    }

    if (filteredArr.length <= 1) {
      return ascending ? [...filteredArr, ...undefinedArr] : [...undefinedArr, ...filteredArr];
    }

    function partition(arr, low, high) {
      let pivot = arr[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        comparisons++;
        if ((ascending && arr[j] < pivot) || (!ascending && arr[j] > pivot)) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          swaps++;
        }
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      swaps++;
      return i + 1;
    }

    function quickSortRecursive(arr, low, high) {
      if (low < high) {
        let pi = partition(arr, low, high);
        quickSortRecursive(arr, low, pi - 1);
        quickSortRecursive(arr, pi + 1, high);
      }
    }

    quickSortRecursive(filteredArr, 0, filteredArr.length - 1);
    console.log(`Quick Sort: Порівнянь - ${comparisons}, Обмінів - ${swaps}`);
    return ascending ? [...filteredArr, ...undefinedArr] : [...undefinedArr, ...filteredArr];
  },
};
