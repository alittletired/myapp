import { isFSA } from 'flux-standard-action';
import _ from 'lodash';

function isPromise(val) {
	return val && typeof val.then === 'function';
}

export default function promiseMiddleware({ dispatch }) {
    return next => action => {
        if (!isFSA(action)) {
            return isPromise(action)
                ? action.then(dispatch)
                : next(action);
        }
        const { meta = {}, payload } = action;

        const id = _.uniqueId();

        if (isPromise(payload)) {
            let sequence = { type: 'start', id };
            let newMeta = Object.assign({}, meta, { sequence })
            dispatch(Object.assign(action, { payload: undefined, meta: newMeta }));


            return payload.then(
                result => {
                    let sequence = { type: 'next', id };
                    let newMeta = Object.assign({}, meta, { sequence })
                    dispatch(Object.assign(action, { payload: result, meta: newMeta }));
                },
                error => {
                    let sequence = { type: 'next', id };
                    let newMeta = Object.assign({}, meta, { sequence })
                    dispatch(Object.assign(action, { payload: error, meta: newMeta }));
                }
            );
        }

        return next(action);
    };
}
