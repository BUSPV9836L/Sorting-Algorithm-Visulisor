import React from "react";
import Bar from "../Bar/Bar";

const SortingAlgorithmVisulisor = (props) => {
    let max = 0;
    for (let i = 0; i < props.array.length; i++) {
        if (props.array[i] > max) {
            max = props.array[i];
        }
    }
    return (
        <div className=' w-[100%] h-[81vh] sm:h-[83.4vh] md:h-[85.3vh] items-end flex'>
            {
                props.array.map((element) => {
                    return <Bar height={(element/max)*window.screen.height/1.4} key={Math.random()}  />
                })
            }
        </div>

    );
}
export default SortingAlgorithmVisulisor;