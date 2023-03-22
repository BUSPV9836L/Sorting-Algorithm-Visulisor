import React, { useEffect } from "react";
import SortingAlgorithmVisulisor from "./SortingAlgorithmVisulisor/SortingAlgorithmVisulisor";
import { useState } from "react";
import MainHeader from "./MainHeader/MainHeader";
import ContolPanel from "./ContolPanel/ControlPanel";
import Welcome from "./Welcome/Welcome";
let width = window.screen.width;
let sizeOfArray = Math.floor(width / 4);
console.log(sizeOfArray);
let dummy = [];
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function App() {
  //Initilizing the array.
  const [array, setArray] = useState(dummy);
  const [WelcomeFlag, setWelcomeFlag] = useState(true);

  //updating the original array
  function updateArray(props) {
    setArray(() => {
      return [...props];
    });
  }
  //Generating the new array.
  function generateArray() {
    setWelcomeFlag(false);
    for (let i = 0; i < sizeOfArray; i++) {
      dummy[i] = Math.floor(Math.random() * 10000 + 1);
    }
    setArray(() => {
      return [...dummy];
    });
  }
  //reseting the array;
  function resetArray() {
    setWelcomeFlag(true);
    setArray(() => {
      return [];
    });
  }
  function swap(arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  }

  async function selectionSort(arr, n) {
    var i, j, min_idx;
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n - 1; i++) {
      min_idx = i;
      for (j = i + 1; j < n; j++) {
        if (arr[j] < arr[min_idx]) min_idx = j;
      }

      // Swap the found minimum element with the first element
      swap(arr, min_idx, i);
      updateArray(arr);
      await sleep(100);
    }
  }
  // An optimized version of Bubble Sort
  async function bubbleSort(arr, n) {
    var i, j;
    for (i = 0; i < n - 1; i++) {
      for (j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
          updateArray(arr);
          await sleep(10);
        }
      }
    }
  }
  async function insertionSort(arr, n) {
    let i, key, j;
    for (i = 1; i < n; i++) {
      key = arr[i];
      j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      updateArray(arr);
      await sleep(30);
      arr[j + 1] = key;
    }
  }
  const states = [];
  async function quickSort(arr, start, end) {
    if (start >= end) {
      return;
    }
    let index = await partition(arr, start, end);
    states[index] = -1;

    await Promise.all([
      quickSort(arr, start, index - 1),
      quickSort(arr, index + 1, end),
    ]);
  }

  async function partition(arr, start, end) {
    for (let i = start; i < end; i++) {
      states[i] = 1;
    }
    let pivotValue = arr[end];
    let pivotIndex = start;
    states[pivotIndex] = 0;
    for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
        swap(arr, i, pivotIndex);
        updateArray(arr);
        await sleep(50);
        states[pivotIndex] = -1;
        pivotIndex++;
        states[pivotIndex] = 0;
      }
    }
    swap(arr, pivotIndex, end);
    updateArray(arr);
    await sleep(50);

    for (let i = start; i < end; i++) {
      if (i != pivotIndex) {
        states[i] = -1;
      }
    }

    return pivotIndex;
  }
  async function merge(ele, low, mid, high) {
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);

    for (let i = 0; i < n1; i++) {
      await sleep(10);
      left[i] = ele[low + i];
    }
    for (let i = 0; i < n2; i++) {
      await sleep(10);
      right[i] = ele[mid + 1 + i];
    }
    await sleep(10);
    let i = 0,
      j = 0,
      k = low;
    while (i < n1 && j < n2) {
      await sleep(10);

      if (parseInt(left[i]) <= parseInt(right[j])) {
        ele[k] = left[i];
        updateArray(ele);
        i++;
        k++;
      } else {
        ele[k] = right[j];
        updateArray(ele);
        j++;
        k++;
      }
    }
    while (i < n1) {
      ele[k] = left[i];
      updateArray(ele);
      i++;
      k++;
    }
    while (j < n2) {
      ele[k] = right[j];
      updateArray(ele);
      j++;
      k++;
    }
  }

  async function mergeSort(ele, l, r) {
    if (l >= r) {
      //sorting complete
      return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
  }
  // function heapSort(){

  // }
  if (WelcomeFlag) {
    return (
      <React.Fragment>
        <MainHeader />
        <ContolPanel
          generateArray={generateArray}
          resetArray={resetArray}
          selectionSort={selectionSort}
          bubbleSort={bubbleSort}
          insertionSort={insertionSort}
          quickSort={quickSort}
          mergeSort={mergeSort}
          // heapSort={heapSort}
          arr={array}
        />
        <Welcome />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <MainHeader/>
      <ContolPanel
        generateArray={generateArray}
        resetArray={resetArray}
        selectionSort={selectionSort}
        bubbleSort={bubbleSort}
        insertionSort={insertionSort}
        quickSort={quickSort}
        mergeSort={mergeSort}
        arr={array}
      />
      <SortingAlgorithmVisulisor array={array} />
    </React.Fragment>
  );
}

export default App;
