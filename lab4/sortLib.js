const sortingAlgorithms = {
  
  bubbleSort: function(arr, ascending = true) {
    let n = arr.length;
    let comparisons = 0;
    let swaps = 0;
    let undefinedCount = 0;

    
    arr.forEach((item, index) => {
      if (item === undefined) {
        console.log(`undefined елемент знайдений на індексі ${index}`);
        undefinedCount++;
      }
    });

    if (undefinedCount > 0) {
      console.log(`Знайдено ${undefinedCount} undefined елементів у масиві.`);
    }

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        comparisons++;
        if ((ascending && arr[j] > arr[j + 1]) || (!ascending && arr[j] < arr[j + 1])) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swaps++;
        }
      }
    }

    console.log(`Bubble Sort: Порівнянь - ${comparisons}, Обмінів - ${swaps}`);
    return arr;
  },

  
  selectionSort: function(arr, ascending = true) {
    let n = arr.length;
    let comparisons = 0;
    let swaps = 0;
    let undefinedCount = 0;

    
    arr.forEach((item, index) => {
      if (item === undefined) {
        console.log(`undefined елемент знайдений на індексі ${index}`);
        undefinedCount++;
      }
    });

    if (undefinedCount > 0) {
      console.log(`Знайдено ${undefinedCount} undefined елементів у масиві.`);
    }

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        comparisons++;
        if ((ascending && arr[j] < arr[minIndex]) || (!ascending && arr[j] > arr[minIndex])) {
          minIndex = j;
        }
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      swaps++;
    }

    console.log(`Selection Sort: Порівнянь - ${comparisons}, Обмінів - ${swaps}`);
    return arr;
  },

  
  insertionSort: function(arr, ascending = true) {
    let n = arr.length;
    let comparisons = 0;
    let shifts = 0;
    let undefinedCount = 0;

    
    arr.forEach((item, index) => {
      if (item === undefined) {
        console.log(`undefined елемент знайдений на індексі ${index}`);
        undefinedCount++;
      }
    });

    if (undefinedCount > 0) {
      console.log(`Знайдено ${undefinedCount} undefined елементів у масиві.`);
    }

    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && ((ascending && arr[j] > key) || (!ascending && arr[j] < key))) {
        comparisons++;
        arr[j + 1] = arr[j];
        j--;
        shifts++;
      }
      arr[j + 1] = key;
    }

    console.log(`Insertion Sort: Порівнянь - ${comparisons}, Зсувів - ${shifts}`);
    return arr;
  },

  
  shellSort: function(arr, ascending = true) {
    let n = arr.length;
    let comparisons = 0;
    let swaps = 0;
    let undefinedCount = 0;
    let gap = Math.floor(n / 2);

    
    arr.forEach((item, index) => {
      if (item === undefined) {
        console.log(`undefined елемент знайдений на індексі ${index}`);
        undefinedCount++;
      }
    });

    if (undefinedCount > 0) {
      console.log(`Знайдено ${undefinedCount} undefined елементів у масиві.`);
    }

    while (gap > 0) {
      for (let i = gap; i < n; i++) {
        let temp = arr[i];
        let j = i;
        while (j >= gap && ((ascending && arr[j - gap] > temp) || (!ascending && arr[j - gap] < temp))) {
          comparisons++;
          arr[j] = arr[j - gap];
          j -= gap;
          swaps++;
        }
        arr[j] = temp;
      }
      gap = Math.floor(gap / 2);
    }

    console.log(`Shell Sort: Порівнянь - ${comparisons}, Обмінів - ${swaps}`);
    return arr;
  },

  
  quickSort: function(arr, ascending = true) {
    let comparisons = 0;
    let swaps = 0;
    let undefinedCount = 0;

    
    arr.forEach((item, index) => {
      if (item === undefined) {
        console.log(`undefined елемент знайдений на індексі ${index}`);
        undefinedCount++;
      }
    });

    if (undefinedCount > 0) {
      console.log(`Знайдено ${undefinedCount} undefined елементів у масиві.`);
    }

    if (arr.length <= 1) return arr;

    
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

    quickSortRecursive(arr, 0, arr.length - 1);  
    console.log(`Quick Sort: Порівнянь - ${comparisons}, Обмінів - ${swaps}`);  
    return arr;
  }
};

  