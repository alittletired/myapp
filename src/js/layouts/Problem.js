import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, ListView, Dimensions, RefreshControl} from 'react-native';
import ProblemList from '../components/ProblemList'
import TabBar from '../components/TabBar'
//import ScrollableTabView from 'react-native-scrollable-tab-view';
//import {data} from './ListData'


const {height, width} = Dimensions.get('window');

class Problem extends Component {
    constructor(props) {
        super(props);
    }



    render() {
       
        return (

            <View  style={styles.container}>
                <TabBar {...this.props}  />
                <ProblemList  {...this.props}/>
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

