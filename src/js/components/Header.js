import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Dimensions, Animated} from 'react-native';
import Button from 'react-native-button';

const { width } = Dimensions.get('window');

class Header extends Component {

    constructor(props) {
        super(props);


    }

    goToPage(name) {

    }

    


    render() {

        return (

            <View style={styles.tabs}>
                <View style={styles.tab_left}>
                    <Button
                        style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}
                        onPress={() => this._handlePass() }>
                        ＜
                    </Button>
                </View>
                <View style={styles.tab_middle}>
                    <Button
                        style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}
                        onPress={() => this._handlePass() }>
                        我是标题
                    </Button>
                </View>
                <View style={styles.tab_right}>
                    <Button
                        style={{ fontSize: 20, color: 'white',fontWeight:'bold' }}
                        onPress={() => this._handlePass() }>
                        问题
                    </Button>
                </View>
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
    tab_left: {
        flex: 1,
        paddingTop: 10,
       
    },
    tab_middle: {
        flex: 5,
        alignItems: 'center',
        paddingTop: 10
    },
    tab_right: {
        flex: 1,
        paddingTop: 10,
        paddingRight:3
       
        
    },
    tabs: {
        height: 50,
        padding:0,
        flexDirection: 'row',
        marginTop: 0,
        borderWidth: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0.06)',
        backgroundColor: '#199BFC',
        justifyContent: 'space-around'
    },
    tabStyle: {

    }
});



export default Header;
