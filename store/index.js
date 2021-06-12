import { combineReducers, createStore } from "redux";
import reducerA from './reducerA';
import reducerB from './reducerB';
export default (preloadState, options) => {
    return createStore(
        combineReducers({
            reducerA,
            reducerB
        }),
        preloadState
    )
}