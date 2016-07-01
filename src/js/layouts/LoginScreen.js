'use strict';
import React, { Component } from 'react';
var { connect } = require('react-redux');

import  { 
  DeviceEventEmitter, 
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
  Image,
  Modal,
  TouchableHighlight,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

var animations = {
  layout: {
    spring: {
      duration: 300,
      create: {
        duration: 300,
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 200
      }
    },
    easeInEaseOut: {
      duration: 300,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.scaleXY
      },
      update: {
        delay: 100,
        type: LayoutAnimation.Types.easeInEaseOut
      }
    }
  }
};

var user = {};
var username = ''
var password=''
export class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      keyboardSpace: 0,
      isKeyboardOpened: false,
      modalText: '',
      isModalOpen: false
    }
   
  }
  componentDidMount() {        
      this._thisUsername.focus();
  }  

  updateUserText(text) {
      username = text;
  }

  updatePasswordText(text) {
      password = text;
  }
    

  closeModal() {
    this.setState(React.addons.update(
        this.state, 
        { 
          $merge: {
            isModalOpen: false          
          }
        }));
  }  
  onloginButtonClick() {
      const {router, actions} = this.props;
      actions.userLogin({ username, password }, (data) => {
          alert('登陆成功');
          router.pop();
          return data;
      });
      //router.pop();
  }
  render() {
      if (this.props.isLoggedIn) {
          alert('登陆成功');
          this.router.pop();
        //  return (null);
      }
    return (
      <View style={[styles.container]}>        
        <View style={[styles.formcontainer, {marginBottom: this.state.keyboardSpace}]}>
          <View style={styles.loginform}>
          
           
            <TextInput style={styles.forminput} onChangeText={(e) => this.updateUserText(e)}
                        placeholder="登录账号" initialValue={''} 
              ref={component => this._thisUsername = component} 
              autoCapitalize="none"
              autoCorrect={false} />
            <TextInput style={styles.forminput} onChangeText={(e) => this.updatePasswordText(e)}
              placeholder="密码" initialValue={''}
              secureTextEntry={true} ref={component => this._thisPassword = component} />
            <Icon.Button name="sign-in" backgroundColor="#23a9e2" onPress={this.onloginButtonClick.bind(this) }>
                        登录
                    </Icon.Button>
            
          </View>            
        </View>
        <Modal  transparent={true} visible={this.state.isModalOpen} onRequestClose={() => { }}>
            <TouchableHighlight onPress={(e) => this.closeModal(e)} style={styles.container}>
              <View style={[styles.container, styles.modalBackground]}>
                <View style={[styles.innerContainer, styles.innerContainerTransparent]}>
                  <Text>{this.state.modalText}</Text>
                </View>
              </View>
            </TouchableHighlight>
        </Modal>
      </View>
    );
  }

}

var styles = StyleSheet.create({
	container: {
    flex: 1,    
    justifyContent: 'center',
    alignItems: 'stretch'    
  },  
  modalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20
  },
  innerContainer: {
    borderRadius: 10,
  },
  innerContainerTransparent: {
    backgroundColor: '#fff', 
    padding: 20
  },
  formcontainer: {
  },
	appheader: {
    resizeMode: 'contain',
		height: 60,
    alignSelf: 'center'
	},
	loginform: {
		paddingHorizontal: 20,
    alignItems: 'stretch'
	},
	forminput: {
    flex:1 ,
		borderRadius: 4,
		padding: 5,
		marginBottom: 10,
		height: 40, 
		borderColor: 'gray', 
		borderWidth: 0.5
	},
  loginbutton: {
    backgroundColor: '#23a9e2',
    color: '#FFFFFF',
    paddingVertical: 10,
    borderRadius: 4,
     flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   

  }
});


export function mapStateToProps(state, props) {
    var isLoggedIn = state.user.isLoggedIn;   
    return {
        isLoggedIn
    }
}
export const LayoutComponent=LoginScreen