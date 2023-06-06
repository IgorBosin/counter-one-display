import React, {ChangeEvent} from 'react';

type InputType = {
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    className: string
    typeInput: string
}

export const Input: React.FC<InputType> = (props) => {
    const {value, onChange, className, typeInput} = props
    return (
            <input
                value={value}
                onChange={onChange}
                className={className}
                type={typeInput}/>
    );
};

