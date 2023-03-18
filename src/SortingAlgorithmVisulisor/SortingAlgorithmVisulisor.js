import React from "react";
import classes from "./SortingAlgorithmVisulisor.module.css";
import Bar from "../Bar/Bar";

const SortingAlgorithmVisulisor = (props) => {
    let max = 0;
    for (let i = 0; i < props.array.length; i++) {
        if (props.array[i] > max) {
            max = props.array[i];
        }
    }
    return (
        <div className={classes['bar-container']}>
            {
                props.array.map((element) => {
                    return <Bar height={(element/max)*window.screen.height/1.5} key={Math.random()}  />
                })
            }
            hi
        </div>

    );
}
export default SortingAlgorithmVisulisor;