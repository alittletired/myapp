import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, Image, Dimensions, TouchableHighlight} from 'react-native';

import Button from 'react-native-button';

import Icon from 'react-native-vector-icons/FontAwesome'
const {height, width} = Dimensions.get('window');

class Setting extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={[styles.container, styles.topStyle]}>
                <TouchableHighlight  activeOpacity={0.5} onPress={() => { alert("123") } }>
                <View style={styles.cell}>
                        <Text style={styles.row_col3_left}>
                            当前公司
                    </Text>
                        <Text style={styles.row_col3_middle}>
                            XXXX公司
                        </Text>
                            <Text style={styles.row_col3_right}>
                            ＞
                            </Text>
                                

                </View>
                </TouchableHighlight>
                <TouchableHighlight  activeOpacity={0.5} onPress={() => { alert("123") } }>
                    <View style={styles.cell}>
                        <Text style={styles.row_col3_left}>
                            离线时间设置
                        </Text>
                        <Text style={styles.row_col3_middle}>
                            3个月
                        </Text>
                        <Text style={styles.row_col3_right}>
                            ＞
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight  activeOpacity={0.5} onPress={() => { alert("123") } }>
                    <View style={styles.cell}>
                        <Text style={styles.row_col2_left}>
                            仅在WiFi下使用
                        </Text>
                        <Text style={styles.row_col2_right_icon}>
                            <Icon name="toggle-on" size={35} color="#54D769" />
                        </Text>
                    </View>
                </TouchableHighlight>

                <View style={styles.topStyle}>
                    <Button
                        containerStyle={{ width: width - 30, height: 40, paddingTop: 8, overflow: 'hidden', borderRadius: 4, backgroundColor: 'red', borderColor: "#DEDEDE", borderWidth: 2 }}
                        style={{ fontSize: 16, color: 'white' }}
                        styleDisabled={{ color: 'red' }}
                        onPress={() => this._handleClose() }>
                        退出登录
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 0,
        backgroundColor: '#F0EFF5'
    }, cell: {
        flexDirection: 'row',
        width: width,
        height: 40,
        backgroundColor: 'white',
        borderBottomColor: "#DDDDDD",
        borderBottomWidth: 1
      
    },
    row_col3_left: {
        flex: 3,
        textAlign: "left",
        marginLeft: 15,
        marginTop: 10,
        color:"#363636"

    },
    row_col3_middle: {
        flex: 3,
        textAlign: "right",
        marginTop: 10
    },
    row_col3_right: {
        flex: 1,
        textAlign: "right",
        marginRight: 15,
        fontWeight: "bold",
        marginTop: 10
    },
    row_col2_left: {
        flex: 1,
        textAlign: "left",
        marginLeft: 15,
        marginTop: 10,
        color: "#363636"
    },
    row_col2_right: {
        flex: 1,
        textAlign: "right",
        marginRight: 15,
        fontWeight: "bold",
        marginTop: 10
    },
    row_col2_right_icon: {
        flex: 1,
        textAlign: "right",
        marginRight: 15,
        fontWeight: "bold",
        marginTop: 3
    },
    topStyle: {
        marginTop: 60

    }
    
});


export default Setting;