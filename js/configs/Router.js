import React from 'react';
import ReactNative from 'react-native';
import {Navigator, Platform, BackAndroid} from 'react-native';
import _ from 'lodash';

import * as Quality from '../layouts/Quality';
import * as Problem from '../layouts/Problem';
import * as Message from '../layouts/Message';
import * as More from '../layouts/More';

import * as CustomSceneConfigs from '../configs/sceneConfig';
import connectComponent from '../utils/connectComponent';


const Home = connectComponent(Quality);
const {} = Navigator;

const {SceneConfigs} = ReactNative;

class Router {
	constructor(navigator) {
		this.navigator = navigator;
		if (Platform.OS === 'android') {
			BackAndroid.addEventListener('hardwareBackPress', ()=> {
				const routesList = this.navigator.getCurrentRoutes();
				const currentRoute = routesList[routesList.length - 1];
				if (currentRoute.name !== 'Quality') {
					navigator.pop();
					return true;
				}
				return false;
			});
		}
	}


	push(props = {}, route) {
		let routesList = this.navigator.getCurrentRoutes();
		let nextIndex = routesList[routesList.length - 1].index + 1;
		route.props = props;
		route.index = nextIndex;
		route.sceneConfig = route.sceneConfig ? route.sceneConfig : CustomSceneConfigs.customFloatFromRight;
		route.id = _.uniqueId();
		route.component = connectComponent(route.component);
		this.navigator.push(route);
	}


	pop() {
		this.navigator.pop();
	}


	/*toAbout(props) {
		this.push(props, {
			component: Quality,
			name: 'quality',
			sceneConfig: CustomSceneConfigs.customFloatFromBottom
		});
	}*/
	toAbout(props) {
	this.push(props, {
		component: Quality,
		name: 'quality'
	});
}

	toLogin(props) {
		this.push(props, {
			component: Problem,
			name: 'problem'
		})
	}


	toQRCode(props) {
		this.push(props, {
			component: Message,
			name: 'message'
		});
	}


	toUser(props) {
		this.push(props, {
			component: More,
			name: 'more'
		});
	}

}


export default Router;
