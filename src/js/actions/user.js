import {createAction} from 'redux-actions';
import * as types from './types';
import * as userService from '../services/userService';
export const userLogin = createAction(types.LOGGED_IN, async (user) => {
    return userService.login(user).then((userinfo) => {
        if (userinfo.success) {
            console.log(JSON.stringify(userinfo))
            return user;
        }
        throw '错误的用户名和密码'
    });


});