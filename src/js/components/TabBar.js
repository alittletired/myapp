import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Dimensions, Animated} from 'react-native';


const { width } = Dimensions.get('window');
const underLineColor = '#00A0FF';
const activeTabTextColor = 'rgba(0,0,0,9)';
const normalTabTextColor = 'rgba(0,0,0,0.4)';

class TabBar extends Component {

	constructor(props) {
        super(props);
       
        
	}

    goToPage(name) {
         
    }

	renderTabOption(name, page) {
		const isTabActive = this.props.activeTab === page;
		const textStyle = {
			color: isTabActive ? this.props.activeTabTextColor : this.props.normalTabTextColor,
            fontWeight: isTabActive ? 'bold' : 'normal',
        };
        const tabStyle = {
            borderBottomWidth: isTabActive ? 3 : 0,
            borderBottomColor: "#00A0FF",
            width: this.props.tabStyle
        }

		return (
			<TouchableOpacity key={name}
                onPress={() => this.props.onTabClick(page)}
       >
                <View style={[styles.tab, tabStyle]}>
                    <Text style={[textStyle, this.props.tabTextStyle]}>
						{ name }
					</Text>
				</View>
			</TouchableOpacity>
		);
	}


    render() {
        const defaultProps = {
            style: {
                height: 50 + 4,
                paddingTop: 0
            },
            activeTabTextColor: '#00A0FF',
            normalTabTextColor: '#666666',
            tabStyle: 0,
            tabs: ['全部', '待整改' , '已验证'],
            tabTextStyle: {fontSize:16}
        };
        this.props = Object.assign({}, this.props, defaultProps)
		var numberOfTabs = this.props.tabs.length;
		//var tabUnderlineStyle = {
		//	position: 'absolute',
		//	width: width / numberOfTabs,
		//	height: 4,
		//	backgroundColor: underLineColor,
		//	bottom: 0
		//};
        this.props.tabStyle = width / numberOfTabs;
		//var left = this.props.scrollValue.interpolate({
		//	inputRange: [0, 1], outputRange: [0, width / numberOfTabs]
		//});
    
		return (

			<View style={[ styles.tabs, this.props.style]}>
				{this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
			
			</View>
		);
	}
}


const styles = StyleSheet.create({
	tab: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 10,
        paddingTop: 10
       
	},

	tabs: {
		height: 50 + 4,
		flexDirection: 'row',
		marginTop: 50,
		borderWidth: 1,
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		borderBottomColor: 'rgba(0,0,0,0.06)',
		justifyContent: 'space-around'
    },
    tabStyle: {
       
    }
});



export default TabBar;
