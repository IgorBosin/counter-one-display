import React from 'react';

type ButtonType = {
    name: string
    callback: () => void
    disabled: boolean
}

const Button: React.FC<ButtonType> = ({name, callback, disabled}) => {

    const onClickHandler = () => {
        callback()
    }

    return (
        <div>
            <button disabled={disabled} onClick={onClickHandler}>{name}</button>
        </div>
    );
};

export default Button;