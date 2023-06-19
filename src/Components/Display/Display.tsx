import React from 'react';
import s from "./Display.module.css";
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {
    increaseCounterAC,
    resetCounterAC,
    StateType,
    toggleSettingsAC
} from "../../state/counter_reducer";
import {AppRootState} from "../../state/store";

// type DisplayType = {
//     counter: StateType
//     settings: () => void
// }

export const Display: React.FC = () => {
    const counter = useSelector<AppRootState, StateType>(state => state.counter)

    const dispatch= useDispatch()

    const increase = () => {
        dispatch(increaseCounterAC())
    }

    const settings = () => {
        dispatch(toggleSettingsAC())
    }

    const reset = () => {
        dispatch(resetCounterAC(counter.startValue))
    }

    return (
        <div className={s.border}>
            <span className={`${s.counter} ${counter.counterValue === counter.maxValue && s.redCounter}`}>
                {counter.counterValue}
            </span>
            <div className={s.buttons}>
                <Button disabled={counter.maxValue === counter.counterValue} callback={increase} name='inc'/>
                <Button disabled={counter.startValue === counter.counterValue} callback={reset} name='reset'/>
                <Button disabled={counter.startValue >= counter.maxValue} callback={settings} name='set'/>
            </div>
        </div>
    );
};
