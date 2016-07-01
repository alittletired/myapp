import React, {Component, PropTypes} from 'react';
import {Navigator, StyleSheet, View, Text, Image, Dimensions} from 'react-native';

import Router from './Router';
import connectComponent from '../utils/connectComponent';
import config from '../configs';


import * as HomeComponent from './Home';


const { height, width } = Dimensions.get('window');

import * as LoginScreen   from './LoginScreen';
connectComponent(LoginScreen)


const initialRoute = {
	name: 'Home',
	index: 0,
    component: connectComponent(HomeComponent),
	id: 0
};


export class Navigation extends Component {
	constructor(props) {
		super(props);
		this.ids = [];
	}

  /*页面插入真实dom之后*/
	componentDidMount() {
        this.navigator.navigationContext.addListener('didfocus', e => {
            const { index, id } = e.data.route;
            const haveFocused = this.ids.indexOf(id) > -1;
            this[index] && this[index] && this[index].getWrappedInstance().componentDidFocus && this[index].getWrappedInstance().componentDidFocus(haveFocused);
            !haveFocused && this.ids.push(id);
        });
	}


    renderScene({ component, name, props, id, index }, navigator) {
       this.router = this.router || new Router(navigator);
       
        if (component) {
            let prop = Object.assign({}, props, {
                ref: view => this[index] = view,
                router: this.router,
                route: { name, id, index }
            });
            return React.createElement(component, prop);
        }
    }


    configureScene(route) {
        if (route.sceneConfig) {
            return route.sceneConfig
        }
        return Navigator.SceneConfigs.FloatFromRight
    }


    render() {
       
        return (
            
            <View				
				style={styles.bg}>
				<Navigator
                    ref={view => this.navigator = view}
					initialRoute={initialRoute}
					configureScene={this.configureScene.bind(this)}
					renderScene={this.renderScene.bind(this)} />
			
            </View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	flexCenter: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	bg: {
		flex: 1,
		height,
		width,
		backgroundColor: 'transparent'
	}
});



export default Navigation
