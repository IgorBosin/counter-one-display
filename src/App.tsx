import React, {useState} from 'react';
import {Display} from "./Components/Display/Display";
import Settings from "./Components/Settings/Settings";
import s from './App.module.css'

const App = () => {

    const [counter, setCounter] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [setting, setSetting] = useState(true)


    const settings = () => {
        setSetting(!setting)
        setCounter(startValue)
    }

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