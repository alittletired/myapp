import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, Image, ListView, TouchableHighlight, Dimensions, RefreshControl} from 'react-native';
import moment from 'moment';
import {parseImgUrl} from '../utils';


const {height, width} = Dimensions.get('window');



class ProblemList extends Component {
	
    

	constructor(props) {
        super(props);        
        
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			ds: this.ds.cloneWithRows(this.props.data)
		}

	}


	componentWillReceiveProps(nextProps) {
		if (nextProps.data !== this.props.data) {
			this.setState({
				ds: this.state.ds.cloneWithRows(nextProps.data)
			});
		}
	}

    getProblemList() {

        this.props = {
            "data": [
                {
                    "imgurl": "/js/images/addproblem.png",
                    "description": "我是标题1YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY",
                    "status": "我是状态1",
                    "publishDate": "2016-06-31",
                    "id": 1
                },
                {
                    "imgurl": "/js/images/addproblem.png",
                    "description": "我是标题3",
                    "status": "我是状态2",
                    "publishDate": "2016-07-21",
                    "id": 2
                }
            ]
        }
       
    }



	_renderRowFooter(problem) {
		return (
			<View style={styles.topicFooter}>
				<Text style={styles['topicFooter text']}>
					<Text>
					{problem.status}
					</Text>
				</Text>

				<Text style={[styles['topicFooter date'],styles['topicFooter text']]}>
					{problem.publishDate}
				</Text>
			</View>
		)
	}


	_renderRow(problem) {
		return (
			<TouchableHighlight
                onPress={() => { this.props.onItemPress(problem)}}
				underlayColor='#3498DB'
				key={problem.id}
			>
				<View style={styles.row}>
					<Image
						style={styles.img}
                        source={{ uri: problem.imgurl, scale: 3 }}
					/>

					<View style={styles.topic}>
						<Text numberOfLines={1} style={[styles.title]}>
                            {problem.title}
						</Text>

						<View style={[styles.topicFooter]}>
							{this._renderRowFooter(problem)}
						</View>
					</View>
				</View>
			</TouchableHighlight>
		)
	}


	_renderHeader() {
		const {data} = this.props;
		if (!data.length) {
			return (
				<View style={styles.emptyMessage}>
					<Text style={styles.emptyMessageText}>
						暂时没有问题数据
					</Text>
				</View>
			)
		}
		return null;
	}

	_loadMore(){
        const {page, getProblemListMore} = this.props;
        const newPage = page + 1;
        this.setState({
            isLoadingTail: true,
            data: getProblemListMore(newPage)
        });

       
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            ds: this.ds.cloneWithRows(this.props.data)
        }

	}

    

    render() {
        const defaultOption = {
            isRefreshing: false,
            page:1
        }

        this.props = Object.assign({}, defaultOption, this.props);

        const { getProblemList, isRefreshing} = this.props;

        return (
			<ListView
				enableEmptySections
				showsVerticalScrollIndicator={true}
				initialListSize={10}
				pagingEnabled={true}
				removeClippedSubviews={true}
				dataSource={this.state.ds}
				renderRow={this._renderRow.bind(this)}
				//onEndReached ={this._loadMore.bind(this)}
				//onEndReachedThreshold={1}
				renderHeader={this._renderHeader.bind(this)}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={() => {getProblemList()} }
                        {...refreshControl}
                        />
                }
			/>
		)
	}
}

const  refreshControl = {
    tintColor: "rgba(241,196,15, 1)",
    title: "正在加载...",
    colors: ["rgba(241,196,15, 1)", "rgba(241,196,15, 0.9)", "rgba(241,196,15, 0.8)"],
    progressBackgroundColor: "#292829",
};


const styles = StyleSheet.create({
	"row": {
		"height": 100,
		"flexDirection": "row",
		"borderBottomColor": "rgba(0, 0, 0, 0.02)",
		"borderBottomWidth": 3,
		"paddingTop": 20,
		"paddingRight": 20,
		"paddingBottom": 20,
		"paddingLeft": 20,
		alignItems: 'center'
	},
	"img": {
		"height": 80,
		"width": 80,
		"borderRadius": 0,
		marginRight: 20,

	},
	"topic": {
		flexDirection: 'column',
		width: width - 20 * 3 - 80
	},
	"title": {
		"fontSize": 14
	},
	"topicFooter": {
		"marginTop": 10,
		"flexDirection": "row",
		width: width - (20 + 100)
	},
	"topicFooter text": {
		"fontSize": 12,
		"color": "rgba(0, 0, 0, 0.4)",
		marginTop:10
	},
	"topicFooter date": {
		"position": "absolute",
		"right": 0,
		"top": 0
	},
	"topicFooter count": {
		"marginRight": 15
	},
	"topicFooter top": {
		"fontSize": 11,
		"marginTop": 1,
		"marginRight": 0,
		"marginBottom": 0,
		"marginLeft": 10,
		"color": "#E74C3C"
	},
	"topicFooter good": {
		"fontSize": 11,
		"marginTop": 1,
		"marginRight": 0,
		"marginBottom": 0,
		"marginLeft": 10,
		"color": "#2ECC71"
	},
	"topicFooter tab": {
		"fontSize": 11,
		"marginTop": 1,
		"marginRight": 0,
		"marginBottom": 0,
		"marginLeft": 10
	},
	"loading": {
		"marginTop": 250
	},
	rowFooterText: {
		fontSize: 13,
		color: 'rgba(0,0,0,0.7)'
	},
	atText: {
		color: '#E74C3C'
	},
	replyText: {
		color: '#2980B9'
	},
	emptyMessage: {
		marginTop: height/2-30,
		flex: 1
	},
	emptyMessageText: {
		textAlign: 'center',
        color: '#666666',
		fontSize: 24
	}

});


export default ProblemList;
