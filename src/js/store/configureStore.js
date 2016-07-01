import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {AsyncStorage}  from 'react-native'
import createLogger from 'redux-logger';
import reducers from '../reducers';

import promiseMiddleware from './promiseMiddleware';
import asyncActionCallbackMiddleware from './asyncActionCallbackMiddleware';
var {persistStore, autoRehydrate} = require('redux-persist');

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

var createMyStore = applyMiddleware(thunkMiddleware, promiseMiddleware, asyncActionCallbackMiddleware, logger)(createStore);
export default function configureStore(onComplete) {
   
    const store = autoRehydrate()(createMyStore)(reducers);
    persistStore(store, { storage: AsyncStorage }, onComplete);
  // store = createMyStore(reducers);
    if (isDebuggingInChrome) {
        window.store = store;
    }

    return store;
}
