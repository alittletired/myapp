import React, {Component, PropTypes} from 'react';
import {ActivityIndicator} from 'react-native';


class Spinner extends Component {
	static defaultProps={
		color: 'white'
	};

	render() {
		return (
			<ActivityIndicator
				animating={true}
				{...this.props}/>
		)
	}
}


export default Spinner;


