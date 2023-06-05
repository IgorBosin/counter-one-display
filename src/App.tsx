import React, {ChangeEvent, useState} from 'react';
import Button from "./Button/Button";
import s from './App.module.css'
import {Input} from "./Input/Input";

const App = () => {

    const [counter, setCounter] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [setting, setSetting] = useState(true)
    const [error, setError] = useState<boolean | string>(false)

    const increase = () => {
        (counter < maxValue) && setCounter(counter + 1)
    }

    const reset = () => {
        setCounter(startValue)
    }

    const settings = () => {
        setSetting(!setting)
        setCounter(startValue)
    }

    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let presentValue = +e.currentTarget.value
        setStartValue(presentValue)
        presentValue >= maxValue
            ? setError('the max number must be greater than the start number')
            : setError(false)
    }

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let presentValue = +e.currentTarget.value
        setMaxValue(presentValue)
        startValue >= presentValue
            ? setError('the max number must be greater than the start number')
            : setError(false)
    }

    return (
        <div>
            {setting
                ? <div>
                    <span className={counter === maxValue ? s.redCounter : ''}>{counter}</span>
                    <Button disabled={maxValue === counter} callback={increase} name='inc'/>
                    <Button disabled={startValue === counter} callback={reset} name='reset'/>
                </div>
                : <div>
                    start value: <Input onChange={changeStartValue} defaultValue={startValue} error={error}/>
                    max value: <Input onChange={changeMaxValue} defaultValue={maxValue} error={error}/>
                    {/*start value: <input className={error ? s.redBackground : ''} defaultValue={startValue} onChange={changeStartValue} type="number"/>*/}
                    {/*max value: <input className={error ? s.redBackground : ''} defaultValue={maxValue} onChange={changeMaxValue} type="number"/>*/}
                    <span style={{color: "red"}}>{error}</span>
                </div>
            }
            <Button disabled={startValue >= maxValue} callback={settings} name='set'/>
        </div>
    );
};

export default App;