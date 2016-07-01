
'use strict';
import {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native'
import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import connectComponent from './utils/connectComponent';

const store = configureStore();

import MyApp from './MyApp'

class Setup extends React.Component {
   
    render() {
        return (
            <Provider store={store}>
                <MyApp />
            </Provider>
        );
    }
}
export default Setup;
