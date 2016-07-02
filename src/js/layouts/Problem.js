import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, ListView, Dimensions, RefreshControl} from 'react-native';
import ProblemList from '../components/ProblemList'
import TabBar from '../components/TabBar'
import * as flux from 'react-native-router-flux'
//import ScrollableTabView from 'react-native-scrollable-tab-view';
import * as temp from './ListData0'


const {height, width} = Dimensions.get('window');

class Problem extends Component {
    constructor(props) {
        super(props);
       
        this.state = { activeTab: 0, data: temp['data0']}
    }

    onItemPress(problem) {
        flux.Actions.ProblemDetials({ problem });
      //  Actions.ProblemDetials && Actions.ProblemDetials(problem)
    }
    onTabClick(newTab) {

        this.setState({ activeTab: newTab, data: temp[newTab] })
    }
    render() {
       
        
        
        return (    

            <View  style={styles.container}>
                <TabBar { ...this.state}  onTabClick={this.onTabClick.bind(this) }  />
                <ProblemList  { ...this.state} onItemPress={this.onItemPress.bind(this)} />
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        height,
        width
    },
    scrollableTabView: {
        flex: 1
    }
});


export default Problem;

