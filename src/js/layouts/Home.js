
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class Home extends Component {
   

    render() {
        
        return (
            <Icon.ToolbarAndroid
                title="首页"
                titleColor="white"
                navIconName="md-arrow-back"
                onIconClicked={() => { return true; }}
                actions={[
                    { title: 'Settings', iconName: 'md-settings', iconSize: 30, show: 'always' },
                    { title: 'Follow me on Twitter', iconName: 'logo-twitter', iconColor: "#4099FF", show: 'ifRoom' },
                ]}
                overflowIconName="md-more"
                />
        );
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
export const LayoutComponent = Home;
export function mapStateToProps(state) {
    return {
        user: state.user
    };
}
