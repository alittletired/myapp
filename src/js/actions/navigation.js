import {createAction} from 'redux-actions';
import * as  types from './types';

export const switchTab = createAction(types.SWITCH_TAB, tab=>{tab});