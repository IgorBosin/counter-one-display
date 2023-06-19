import {counterReducer} from "./counter_reducer";
import {combineReducers, legacy_createStore} from "redux";

const rootReducer = combineReducers({
    counter: counterReducer,
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)

// @ts-ignore
window.store = store