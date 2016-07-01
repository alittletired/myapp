import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, TouchableHighlight,Text} from 'react-native';


class Row extends Component {
    render() {
        this.props = {
            "style": {},
            "contentStyle": {}
        }
		return (
			<TouchableHighlight {...this.props} style={[styles.container, this.props.style]}>
				<View style={[styles.content, this.props.contentStyle]}>
                    { this.props.children }
				</View>
			</TouchableHighlight>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	content: {
		flex: 1,
		flexDirection: 'row'
	}
});


export default Row;
