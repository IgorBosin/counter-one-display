import React, {ChangeEvent} from 'react';
import s from "../App.module.css";

type InputType = {
    error: string | boolean
    defaultValue: number
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void
}

export const Input = (props: InputType) => {
    return (
        <div>
            <input
                defaultValue={props.defaultValue}
                onChange={props.onChange}
                className={props.error ? s.redBackground : ''}
                type="number"/>
        </div>
    );
};

