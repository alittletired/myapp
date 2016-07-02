import React, {Component, PropTypes} from 'react';
import {  View, Text, ScrollView } from 'react-native';
import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';
import Icon from 'react-native-vector-icons/FontAwesome';
const iconName = {'设置':'gear',"问题":"home"}
export default  class TabIcon extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View >
                <Icon name={iconName[this.props.title]} size={30} color={ this.props.selected ? '#199BFC' : '#666666'} />
                <Text style={{ color: this.props.selected ? '#199BFC' : '#666666' ,fontSize:12}}>{this.props.title}</Text>
            </View>
       
        );
    }
}

