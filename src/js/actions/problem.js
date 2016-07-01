import {createAction} from 'redux-actions';
import * as types from './types';
import * as requestService from '../services/requestService';
export const getProblemList = createAction(types.GET_PROBLEM_LIST, async () => {
    return requestService.get('/problems',data).then((problem) => {
        if (problem.success) {
            console.log(JSON.stringify(userinfo))
            return problem;
        }
        throw '获取数据失败'
    });


});