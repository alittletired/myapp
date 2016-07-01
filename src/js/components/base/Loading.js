﻿import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, Dimensions, Animated} from 'react-native';
import Spinner from './Spinner';


const { height, width } = Dimensions.get('window');
const toastWidth = width * 0.7;

class Loading extends Component {
	static propTypes = {
		show: PropTypes.bool
	};


	static defaultProps = {
		show: false
	};


	constructor(props) {
		super(props);
		this.state = {
			fadeAnim: new Animated.Value(0.4)
		};
	}


    render() {
        this.props = {
            "show": true,
            "style": {}
        };
		const opacity = {
			opacity: this.state.fadeAnim
		};
		if (!this.props.show) return null;
		return (
			<Animated.View style={[styles.container, this.props.style, opacity]}>
                <Spinner />
                <Text style={styles.text}>
                     正在加载...
                </Text>
			</Animated.View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		backgroundColor: 'rgba(0,0,0,0.8)',
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: toastWidth,
		left: (width - toastWidth) / 2,
		top: (height - 60) / 2
		
	},
	text: {
		flex: 1,
		color: 'white',
		fontSize: 16,
        textAlign: 'center',
        margin: 20
	}
});


export default Loading;
