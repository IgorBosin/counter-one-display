import React, {ChangeEvent} from 'react';
import {Input} from "../Input/Input";
import s from "./Settings.module.css";
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../state/store";
import {
    changeMaxValueAC,
    changeStartValueAC,
    setSettingsAC,
    StateType,
    toggleSettingsAC
} from "../../state/counter_reducer";
import {Dispatch} from "redux";

const Settings: React.FC = () => {
    const counter = useSelector<AppRootState, StateType>(state => state.counter)
    const dispatch: Dispatch = useDispatch()

    const settings = () => {
        dispatch(setSettingsAC(counter.startValue))
        dispatch(toggleSettingsAC())
    }
    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStartValueAC(+e.currentTarget.value, counter.maxValue))
    }

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValueAC(+e.currentTarget.value, counter.startValue))
    }

    return (
        <div className={s.container}>
            <div className={s.borderInput}>
                <div className={s.inputWrapper}>
                    <span>start value:</span>
                    <Input onChange={changeStartValue}
                           value={counter.startValue}
                           className={counter.error ? s.redBackground : ''}
                           typeInput={'number'}/></div>
                <div className={s.inputWrapper}>
                    <span>max value:</span>
                    <Input onChange={changeMaxValue}
                           value={counter.maxValue}
                           className={counter.error ? s.redBackground : ''}
                           typeInput={'number'}/>
                </div>
            </div>
            {counter.error
                ? <span style={{color: "red", width: '250px'}}>{counter.error}</span>
                : <div className={s.borderButton}>
                    <Button disabled={counter.startValue >= counter.maxValue} callback={settings} name='set'/>
                </div>}

        </div>
    );
};

export default Settings;