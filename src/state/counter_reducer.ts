export type ActionType =
    IncreaseActionType
    | ResetActionType
    | SettingsActionType
    | ChangeMaxValueActionType
    | ChangeStartValueActionType
    | ToggleSettingsActionType

export type IncreaseActionType = {
    type: 'INCREASE'
}
export type ResetActionType = {
    type: 'RESET'
    startValue: number
}

export type SettingsActionType = {
    type: 'SET-SETTINGS'
    startValue: number
}
export type ToggleSettingsActionType = {
    type: 'TOGGLE-SETTINGS'
}

export type ChangeStartValueActionType = {
    type: 'CHANGE-START-VALUE'
    newStartValue: number
    maxValue: number
}

export type ChangeMaxValueActionType = {
    type: 'CHANGE-MAX-VALUE'
    newMaxValue: number
    startValue: number
}

export type StateType = {
    counterValue: number
    startValue: number
    maxValue: number
    settings: boolean
    error: boolean | string
}

const initialValue = {
    counterValue: 0,
    startValue: 0,
    maxValue: 5,
    settings: true,
    error: false
}

export const counterReducer = (state: StateType = initialValue, action: ActionType): StateType => {
    switch (action.type) {
        case 'INCREASE': {
            if (state.counterValue < state.maxValue) { // здесь или в функции
                return {...state, counterValue: state.counterValue + 1}
            } else return state
        }
        case 'RESET': {
            return {...state, counterValue: action.startValue}
        }
        case 'SET-SETTINGS': {
            return {...state, counterValue: state.startValue}
        }
        case "TOGGLE-SETTINGS": {
            debugger
            return {...state, settings: !state.settings}
        }
        case "CHANGE-START-VALUE": {
            return (action.newStartValue >= action.maxValue)
                ? {...state, startValue: action.newStartValue, error: 'max number must be greater start number'}
                : {...state, startValue: action.newStartValue, error: false}
        }
        case "CHANGE-MAX-VALUE": {
            return (action.startValue >= action.newMaxValue)
                ? {...state, maxValue: action.newMaxValue, error: 'max number must be greater start number'}
                : {...state, maxValue: action.newMaxValue, error: false}
        }
        default:
            return state
    }
}

export const increaseCounterAC = (): IncreaseActionType => {
    return {
        type: 'INCREASE'
    }
}
export const resetCounterAC = (startValue: number): ResetActionType => {
    return {
        type: 'RESET',
        startValue,
    }
}
export const setSettingsAC = (startValue: number) => { // название функции
    return {
        type: 'SET-SETTINGS',
        startValue
    }
}
export const toggleSettingsAC = () => {
    return {
        type: 'TOGGLE-SETTINGS',
    }
}
export const changeStartValueAC = (newStartValue: number, maxValue: number) => {
    return {
        type: 'CHANGE-START-VALUE',
        newStartValue,
        maxValue,
    }
}
export const changeMaxValueAC = (newMaxValue: number, startValue: number) => {
    return {
        type: 'CHANGE-MAX-VALUE',
        newMaxValue,
        startValue,
    }
}

