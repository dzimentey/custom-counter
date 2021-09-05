import React from "react";

type DisplayPropsType = {
    counter: number
    maxValue: number
}

export const Display = (props: DisplayPropsType) => {

    return(
    <div className={"display"}>
        <div style={props.counter === props.maxValue ? {color: "red"} : {color: ""}}>{props.counter}</div>
    </div>
    )
}