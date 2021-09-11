import React from "react";

type DisplayPropsType = {
    counter: number
    maxValue: number
    error: string | boolean
}

export const Display = (props: DisplayPropsType) => {

    return(
    <div className={"display"}>
        <div style={props.counter === props.maxValue ? {color: "red"} : {color: ""}}>
            {props.error? props.error : props.counter}
        </div>
    </div>
    )
}