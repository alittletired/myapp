import React from 'react';
import ReactNative from 'react-native';
import {Navigator, Platform, BackAndroid, SceneConfigs} from 'react-native';
import * as LoginScreen   from './LoginScreen';




import * as CustomSceneConfigs from '../configs/sceneConfig';
import connectComponent from '../utils/connectComponent';




var id = 1;
class Router {
    constructor(navigator) {
        this.navigator = navigator;
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', () => {
                const routesList = this.navigator.getCurrentRoutes();
                const currentRoute = routesList[routesList.length - 1];
                if (currentRoute.name !== 'home') {
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
        route.id =id++ ;

        route.component = connectComponent(route.component);
        this.navigator.push(route);
    }


    pop() {
        this.navigator.pop();
    }

    toLogin(props) {
        this.push(props, {
            component: LoginScreen,
            name: 'µÇÂ¼'
        })
    }
   




}


export default Router;
