import React, {Component} from 'react';
import {View, StyleSheet, TouchableHighlight, Text, Dimensions} from 'react-native';


const {height, width} = Dimensions.get('window');
class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <TouchableHighlight activeOpacity={0.5} onPress={() => { alert("123") } }>
                <View style={[styles.buttonStyle, this.props.buttonStyle]} >
                    <Text style={[styles.textStyles, this.props.textStyles]} >
                        { this.props.text}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        //height: overlayButtonSize,
        //width: overlayButtonSize,
        //position: 'absolute',
        //borderRadius: overlayButtonSize / 2,
        //backgroundColor: 'rgba(0,0,0,0.7)',
        //flexDirection: 'row',
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    buttonStyle: {
        width: width,
        height: 40,
        backgroundColor: "#199BFC",
        padding: 5,
        borderRadius:5
       
    },
    textStyles: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center"
    }
});


export default Button;
