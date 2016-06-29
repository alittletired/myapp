import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, ListView, Dimensions, RefreshControl} from 'react-native';



const {height, width} = Dimensions.get('window');


class Quality extends Component {
	constructor(props) {
			super(props);
		}
	render() {
		const {pullRefreshPending, tab, actions} = this.props;
		return (
			<Text>
				{'我是quality页面'}
			</Text>
		)
	}
}


const styles = StyleSheet.create({

});

export const LayoutComponent = Quality;
export function mapStateToProps(state, props) {
	const {tab} = props;
	const tabStatus = state.home[tab];
	const topics = state.topic[tab];
	return {
		data: topics,
		...tabStatus
	}
}
