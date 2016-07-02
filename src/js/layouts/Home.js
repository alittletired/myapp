import  {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native'
import React, { Component } from 'react';
import connectComponent from '../utils/connectComponent';
class Home extends Component {
    constructor(props) {
        super(props);

    } 
    render() {        
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
 const LayoutComponent = Home;
 function mapStateToProps(state) {
    return {
        user: state.user
    };
}
export default connectComponent({ LayoutComponent, mapStateToProps})