import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, Dimensions, Animated} from 'react-native';

const {height, width} = Dimensions.get('window');
const toastWidth = width * 0.7;
const defaultText = 'Toast';
const defaultTimeout = 2000;


class Toast extends Component {

	static defaultProps = {
		duration: 300
	};


	constructor(props) {
		super(props);
		this.state = {
			fadeAnim: new Animated.Value(0.4),
			show: false,
			text: defaultText,
			timeout: defaultTimeout
		};
	}


	componentWillUnmount() {
		clearTimeout(this.timeout);
	}


	show(text = defaultText, timeout = defaultTimeout) {
		Animated.timing(this.state.fadeAnim, {
			toValue: 1,
            duration: 300
		}).start();

		this.setState({
			show: true,
			text,
			timeout
		});

		this.timeout = setTimeout(()=> {
			Animated.timing(this.state.fadeAnim, {
				toValue: 0,
                duration: 300
			}).start(()=> {
				this.setState({
					show: false
				});
			});
		}, timeout - duration);
	}


    render() {
        this.props = {
            "style": {},
            "text":"我是临时提示的"
        }
		const opacity = {
			opacity: this.state.fadeAnim
		};
		if (!this.state.show) return null;
		return (
			<Animated.View style={[styles.container, this.props.style, opacity]}>
				<Text style={styles.text}>
                    {this.props.text}
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
		top: (height - 60) / 2,
		padding: 20
	},
	text: {
		flex: 1,
		color: 'red',
		fontSize: 16,
		textAlign: 'center',
		lineHeight: 16 * 1.5
	}
});


export default Toast;
