import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Paper} from "@material-ui/core";
import {Display} from "./Components/Display";
import {ButtonComponent} from "./Components/ButtonComponent";

function App() {
    let initValue: number = 0
    const [counter, setCounter] = useState(initValue)
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(1)
    const minValueChange = (e: ChangeEvent<HTMLInputElement>) => setMinValue(e.currentTarget.valueAsNumber)
    const maxValueChange = (e: ChangeEvent<HTMLInputElement>) => setMaxValue(e.currentTarget.valueAsNumber)
    const incrHandler = () => setCounter(counter + 1)
    const resetHandler = () => setCounter(minValue)
    const setHandler = () => {
        setCounter(minValue);
        setLocal()
    }
    const setLocal = () => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue)) // put max value to local storage as string
        localStorage.setItem("minValue", JSON.stringify(minValue)) // put min value to local storage as string
    }
    useEffect(() => { // set values from local storage when page will be reloaded
        let minValueAsString = localStorage.getItem("minValue") //get min value from local storage as string
        let maxValueAsString = localStorage.getItem("maxValue") // get max value from local storage as string

        if (minValueAsString) {
            let minValueLocal = JSON.parse(minValueAsString) // transform minValueAsString to number
            setCounter(minValueLocal);  // set min value from local storage to Display
            setMinValue(minValueLocal); // set min value from local storage to "start value:" input zone
        }

        if (maxValueAsString) {
            let maxValueLocal = JSON.parse(maxValueAsString) // transform maxValueAsString to number
            setMaxValue(maxValueLocal); //set max value from local storage to "max value:" input zone
        }
    }, [])

    let disableButton = false
    if(counter >= maxValue){disableButton = true}

    return (
        <div className="App">
            <Paper elevation={6} square className={"paper"}>

                <div className={"inputs"}>
                    <div>max value:</div>
                    <input type="number" min={minValue + 1} value={maxValue} onInput={maxValueChange}/>
                    <div>start value:</div>
                    <input type="number" max={maxValue - 1} value={minValue} onChange={minValueChange}/>
                </div>

                <div className={"controls"}>
                    <ButtonComponent title={"set"} click={setHandler} setLocal={setLocal}/>
                </div>

            </Paper>

            <Paper elevation={6} square className={"paper"}>

                <Display counter={counter} maxValue={maxValue}/>

                <div className={"controls"}>
                    <ButtonComponent counter={counter} maxValue={maxValue} title={"incr"}
                                     click={incrHandler} disable={disableButton}
                    />
                    <ButtonComponent title={"reset"} click={resetHandler}/>
                </div>

            </Paper>
        </div>
    );
}

export default App;
