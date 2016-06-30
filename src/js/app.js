
'use strict';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React  from 'React';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {serverURL} from  './configs'
const store = configureStore();
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            store

        };
    }
    render() {
        
        return (
            <Provider store={this.state.store}>
              <View style={styles.container}>
                <Text style={styles.welcome}>
                        Welcome everybodyad to React Native!

                </Text>
                <Text style={styles.instructions}>
                  To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                  Press Cmd+R to reload, {'\n'}
                  shake for devas menu
		</Text>
                </View>
            </Provider>
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
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color:'green'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
export default App;
