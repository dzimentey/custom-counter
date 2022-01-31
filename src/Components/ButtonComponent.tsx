import {Button} from "@material-ui/core";
import React from "react";
type ButtonType = {
    title: string
    counter?: number
    maxValue?: number
    disable?: boolean
    click: () => void
}

export const ButtonComponent = (props: ButtonType) => {
    return(
        <Button variant={"contained"} color={"primary"} size={"small"}
                onClick = {props.click}
                disabled={props.disable}>{props.title}
        </Button>
    )
}