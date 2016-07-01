
'use strict';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React from 'react';


import { connect } from 'react-redux';
import Navigation   from './layouts/Navigation';
import * as LoginScreenComponent   from './layouts/LoginScreen';
import connectComponent from './utils/connectComponent';
const LoginScreen = connectComponent(LoginScreenComponent)


class MyApp extends React.Component {

    render() {
        if (!this.props.user.isLoggedIn) {
            return <LoginScreen />

        }
        return (<Navigation />);


    }
}

function select(store) {
    return {
        user: store.user
    };
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default connect(select)(MyApp);
 
