import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Paper} from "@material-ui/core";
import {Display} from "./Components/Display";
import {ButtonComponent} from "./Components/ButtonComponent";

function App() {
    let initMinValue: number = 0
    let initMaxValue: number = 1
    const [counter, setCounter] = useState(initMinValue)
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(initMaxValue)
    const [error, setError] = useState<string | boolean>('')
    const minValueChange = (e: ChangeEvent<HTMLInputElement>) => setMinValue(e.currentTarget.valueAsNumber)
    const maxValueChange = (e: ChangeEvent<HTMLInputElement>) => setMaxValue(e.currentTarget.valueAsNumber)
    const incrHandler = () => setCounter(counter + 1)
    const resetHandler = () => {
        setCounter(minValue);
        setError('')
    }
    const setHandler = () => {
        if (minValue >= maxValue) {
            setError("error")
        } else {
            setCounter(minValue);
            setLocal()
            setError('')
        }
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

    let disableIncrButton = false
    if (counter >= maxValue) {
        disableIncrButton = true
    }

    let disableSetButton = false
    if (minValue >= maxValue) {
        disableSetButton = true
    }

    return (
        <div className="App">
            <Paper elevation={6} square className={"paper"}>

                <div className={"inputs"}>
                    <div>max value:</div>
                    <input type="number"  value={maxValue} onInput={maxValueChange}/>
                    <div>start value:</div>
                    <input type="number"  value={minValue} onChange={minValueChange}/>
                </div>

                <div className={"controls"}>
                    <ButtonComponent title={"set"} click={setHandler} disable={disableSetButton}
                        //setLocal={setLocal}
                    />
                </div>

            </Paper>

            <Paper elevation={6} square className={"paper"}>

                <Display counter={counter} maxValue={maxValue} error={error}/>

                <div className={"controls"}>
                    <ButtonComponent counter={counter} maxValue={maxValue} title={"incr"}
                                     click={incrHandler} disable={disableIncrButton}
                    />
                    <ButtonComponent title={"reset"} click={resetHandler}/>
                </div>

            </Paper>
        </div>
    );
}

export default App;
