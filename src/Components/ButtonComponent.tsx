import {Button} from "@material-ui/core";
import React from "react";
type ButtonType = {
    value: string
    counter?: number
    maxValue?: number
    click: () => void
}

export const ButtonComponent = (props: ButtonType) => {
    return(
        <Button variant={"contained"} color={"primary"} size={"small"}
                onClick={props.click}
                disabled={props.counter? props.counter === props.maxValue  : false}>{props.value}
        </Button>
    )
}