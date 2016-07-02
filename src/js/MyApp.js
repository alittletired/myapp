﻿
'use strict';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React from 'react';


import { connect } from 'react-redux';

import  LoginScreen   from './layouts/LoginScreen';
import {Scene, Router, TabBar, Modal, Schema, Actions, Reducer} from 'react-native-router-flux'
import Problem from './layouts/Problem'
import ProblemDetials from './layouts/ProblemDetials'
import addDetailScreen from './layouts/addDetailScreen'
import Setting from './layouts/Setting'
import TabIcon from './components/TabIcon'



const RouterWithRedux = connect()(Router);
//const reducerCreate = params => {
//    const defaultReducer = Reducer(params);
//    return (state, action) => {
//        console.log("ACTION:", action);
//        return defaultReducer(state, action);
//    }
//};
class MyApp extends React.Component {

    onPress() {
        var c = Actions;
        Actions.addDetailScreen();
    }
    render() {
       
        if (!this.props.user.isLoggedIn) {
            return <LoginScreen />

        }
        return (<RouterWithRedux  rightButtonTextStyle={{ color: 'white' }} navigationBarStyle={{ backgroundColor: '#199BFC' }} tabBarStyle={{ borderColor: "#666666", borderTopWidth: 1, backgroundColor:'white'}}  sceneStyle={{}} titleStyle={{  color: 'white',fontSize:20 }}>
            <Scene key="modal" component={Modal} >
                <Scene key="root" tabs={true} >

                    <Scene key="Problem" component={Problem} title="问题"  icon={TabIcon} initial={true}
                        rightTitle="新增" onRight={() => { alert(1);  this.onPress.bind(this) }  } >


                      
                    </Scene>
                    <Scene key="Setting" component={Setting} title="设置"  icon={TabIcon}/>
                    <Scene key="ProblemDetials"   component={ProblemDetials} title="问题详情"
                        tabs={false}
                        />
                    <Scene key="addDetailScreen"  hideTabBar={true} component={addDetailScreen} title="添加问题"
                        tabs={false}
                        />
                </Scene>
            </Scene>
        </RouterWithRedux>

        );
         


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
 
