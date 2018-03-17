import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './ducks'

export default function configureStore(initState) {
    const composeEnhancers =  process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

    const rootReducer = combineReducers(reducers)

    return createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk)),
    )
}