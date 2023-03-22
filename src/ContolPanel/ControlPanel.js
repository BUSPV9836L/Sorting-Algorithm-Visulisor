import React, { useState } from "react";

const ContolPanel = (props) => {
    const [flag, setFlag] = useState(false);
    const [choose, setChoose] = useState('Select Sorting Algorithm.');
    const [show,setShow]=useState(false)
    function chooseHandler() {
        setFlag(true);
    }
    function chooseAlgorithmHandler(props) {
        setChoose(props);
    }
    function generateArrayHandler() {
        setChoose('Select Sorting Algorithm.');
        props.generateArray(setChoose);
    }
    function resetArrayHandler() {
        setChoose('Select Sorting Algorithm.');
        props.resetArray(setChoose);
    }
    function mergeSortHandler() {
        chooseAlgorithmHandler('Merge Sort.');
        setFlag(false);
        let array=[...props.arr];
        props.mergeSort(array,0,array.length-1);
    }
    function quickSortHandler() {
        chooseAlgorithmHandler('Quick Sort.');

        setFlag(false);
        let array=[...props.arr];
     props.quickSort(array,0,array.length);
    }
    // function heapSortHandler() {
    //     chooseAlgorithmHandler('Heap Sort.');
    //     setFlag(false);
    // }
    function insertionSortHandler() {
        chooseAlgorithmHandler('Insertion Sort.');
        setFlag(false);
        let array=[...props.arr];
        props.insertionSort(array,array.length);
    }
    function bubbleSortHandler() {
        chooseAlgorithmHandler('Bubble Sort.');
        setFlag(false);
        let array=[...props.arr];
        props.bubbleSort(array,array.length);
    }
    function selectionSortHandler() {

        chooseAlgorithmHandler('Selection Sort.');
        setFlag(false);
        let array=[...props.arr];
        props.selectionSort(array,array.length);

    }
    function popUpHandler(){
        setFlag(false);
    }
    if (flag) {
        return (
            <div className="absolute flex-col w-fit bg-transparent h-fit z-10">
                <header className="w-[200px] bg-gradient-to-r from to-blue-500 to bg-yellow-400">Choose Sorting Algorith</header>
                <div>
                <button className="w-[200px] " onClick={mergeSortHandler}>Merge Sort.</button>
                </div>
                <div>
                <button className="w-[200px]" onClick={quickSortHandler}>Quick Sort.</button>
                </div>
                <div>
                <button className="w-[200px]" onClick={insertionSortHandler}>Insertion Sort.</button>
                </div>
                <div>
                <button className="w-[200px]" onClick={bubbleSortHandler}>Bubble Sort.</button>
                </div>
                <div>
                <button className="w-[200px]" onClick={selectionSortHandler}>Selection Sort.</button>
                </div>
                <div>
                <button className="w-[200px]" onClick={popUpHandler}>Close.</button>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className=" w-fit">
                <button onClick={chooseHandler} onChange={chooseAlgorithmHandler}>{choose}</button>
                <button onClick={generateArrayHandler}>Generate Array.</button>
                <button onClick={resetArrayHandler}>Reset Array.</button>
            </div>
        );
    }

}

export default ContolPanel;