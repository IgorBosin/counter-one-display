import React, {useEffect, useState} from 'react';
import {Display} from "./Components/Display/Display";
import Settings from "./Components/Settings/Settings";
import s from './App.module.css'

const App = () => {

    // const [counter, setCounter] = useState(JSON.parse(localStorage.getItem('currentValue') || '0'))
    const [counter, setCounter] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [setting, setSetting] = useState(true)

    const settings = () => {
        setSetting(!setting)
        setCounter(startValue)
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }

    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            let newValue = JSON.parse(startValueAsString)
            setStartValue(newValue)
        }
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newValue = JSON.parse(maxValueAsString)
            setMaxValue(newValue)
        }
        let currentValueAsString = localStorage.getItem('currentValue')
        if (currentValueAsString) {
            let newValue = JSON.parse(currentValueAsString)
            setCounter(newValue)
        }
    }, [])

    return (
        <div className={s.border}>
            {setting
                ? <Display counter={counter}
                           maxValue={maxValue}
                           startValue={startValue}
                           settings={settings}
                           setCounter={setCounter}/>
                : <Settings setStartValue={setStartValue}
                            setMaxValue={setMaxValue}
                            startValue={startValue}
                            settings={settings}
                            maxValue={maxValue}/>
            }
        </div>
    );
};

export default App;