import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import createLogger from 'redux-logger';
import reducers from '../reducers';

import promiseMiddleware from './promiseMiddleware';
import asyncActionCallbackMiddleware from './asyncActionCallbackMiddleware';

let middlewares = [
    thunkMiddleware,
    promiseMiddleware,
    asyncActionCallbackMiddleware
];
const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
const logger = createLogger({
	predicate: (getState, action) => isDebuggingInChrome,
	collapsed: true,
	duration: true
});

if (isDebuggingInChrome) {
	 middlewares.push(logger);
}


export default function configureStore(initialState) {
    const store = applyMiddleware(
        logger
    )(createStore)(reducers, initialState);

    if (isDebuggingInChrome) {
        window.store = store;
    }

    return store;
}
