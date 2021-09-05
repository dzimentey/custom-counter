import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Paper} from "@material-ui/core";
import {Display} from "./Components/Display";
import {ButtonComponent} from "./Components/ButtonComponent";


function App() {
    let initValue: number = 0
    const [counter, setCounter] = useState(initValue)
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const minValueChange = (e: ChangeEvent<HTMLInputElement>) => setMinValue(e.currentTarget.valueAsNumber)
    const maxValueChange = (e: ChangeEvent<HTMLInputElement>) => setMaxValue(e.currentTarget.valueAsNumber)
    const incrHandler = () => setCounter(counter + 1)
    const resetHandler = () => setCounter(minValue)
    const setHandler = () => setCounter(minValue)

    return (

        <div className="App">
            <Paper elevation={6} square className={"paper"}>

                <div className={"inputs"}>

                        <div>max value:</div> <input type="number" min={1} value={maxValue} onInput={maxValueChange}/>

                        <div>start value:</div> <input type="number" min={0} value={minValue} onChange={minValueChange}/>
                </div>

                <div className={"controls"}>
                    <ButtonComponent value={"set"} click={setHandler}/>
                </div>
            </Paper>

            <Paper elevation={6} square className={"paper"}>

                <Display counter={counter} maxValue={maxValue}/>

                <div className={"controls"}>

                    <ButtonComponent counter={counter} maxValue={maxValue} value={"incr"}
                                     click={incrHandler}/>

                    <ButtonComponent value={"reset"} click={resetHandler}/>

                </div>

            </Paper>

        </div>

    );
}

export default App;
