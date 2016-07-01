
'use strict';
import {AppRegistry, Navigator, StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import connectComponent from './utils/connectComponent';



import MyApp from './MyApp'

class Setup extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            store: configureStore(() => this.setState({ isLoading: false })),
        };
    }
    render() {
        if (this.state.isLoading) {
            return null;
        }
        return (
            <Provider store={this.state.store}>
                <MyApp />
            </Provider>
        );
    }
}
export default Setup;
