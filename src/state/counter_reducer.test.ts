import {counterReducer, increaseCounterAC} from "./counter_reducer";


test('Increase counter', () => {
    const startState = {
        counterValue: 0,
        startValue: 0,
        maxValue: 5,
        settings: true,
        error: false
    }
    const action = increaseCounterAC()
    const endState = counterReducer(startState, action).counterValue

    expect(endState).toBe(1)
})
