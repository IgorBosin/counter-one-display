import React, {ChangeEvent, useState} from 'react';
import {Input} from "../Input/Input";
import s from "./Settings.module.css";
import Button from "../Button/Button";

type SettingsType = {
    setStartValue: (startValue: number) => void
    setMaxValue: (maxValue: number) => void
    startValue: number
    maxValue: number
    settings: () => void
}

const Settings: React.FC<SettingsType> = (props) => {

    const {startValue, maxValue, setStartValue, setMaxValue, settings} = props

    const [error, setError] = useState<boolean | string>(false)

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
        <div className={s.container}>
            <div className={s.borderInput}>
                <div className={s.inputWrapper}>
                    <span>start value:</span>
                    <Input onChange={changeStartValue}
                           value={startValue}
                           className={error ? s.redBackground : ''}
                           typeInput={'number'}/></div>
                <div className={s.inputWrapper}>
                    <span>max value:</span>
                    <Input onChange={changeMaxValue}
                           value={maxValue}
                           className={error ? s.redBackground : ''}
                           typeInput={'number'}/>
                </div>
            </div>
            {error
                ? <span style={{color: "red", width:'250px'}}>{error}</span>
                : <div className={s.borderButton}>
                    <Button disabled={startValue >= maxValue} callback={settings} name='set'/>
                </div>}

        </div>
    );
};

export default Settings;