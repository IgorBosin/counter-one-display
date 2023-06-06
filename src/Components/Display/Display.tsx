import React from 'react';
import s from "./Display.module.css";
import Button from "../Button/Button";

type DisplayType = {
    counter:number
    setCounter:(counter:number)=>void
    startValue:number
    maxValue:number
    settings:()=>void
}

export const Display: React.FC<DisplayType> = (props) => {

    const {counter, startValue,maxValue,setCounter,settings } = props

    const increase = () => {
        (counter < maxValue) && setCounter(counter + 1)
    }



    const reset = () => {
        setCounter(startValue)
    }

    return (
        <div className={s.border}>
            <span className={ `${s.counter} ${counter === maxValue && s.redCounter}`}>{counter}</span>
            <div className={s.buttons}>
                <Button disabled={maxValue === counter} callback={increase} name='inc'/>
                <Button disabled={startValue === counter} callback={reset} name='reset'/>
                <Button disabled={startValue >= maxValue} callback={settings} name='set'/>
            </div>
        </div>
    );
};
