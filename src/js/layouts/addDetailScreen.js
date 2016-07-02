import React from 'react';
import {
  StyleSheet,
  ListView,
  Dimensions,
  Text,
  Image,
  View,
  TouchableHighlight,
  TouchableOpacity,
  RecyclerViewBackedScrollView,
  TextInput,
  ViewPagerAndroid,
  ScrollView
} from 'react-native';
import Button from 'react-native-button';
var { connect } = require('react-redux');



import Icon from 'react-native-vector-icons/FontAwesome';
import Modal  from 'react-native-modalbox';
const IMAG_PRE_ROW=3;
var WINDOW_HEIGHT = Dimensions.get('window').height;
var WINDOW_WIDTH = Dimensions.get('window').width;
var BASE_PADDING = 10;

const styles = StyleSheet.create({
  container:{
      width:WINDOW_WIDTH,
      backgroundColor:'#F0EFF5',
      flexDirection: 'column'
  },
  datainfo:{
    padding:10,
    marginTop:20,
    width:WINDOW_WIDTH,
    flexDirection: 'row',
    borderTopWidth :1,
    borderBottomWidth  :1,
    borderColor:'#DDDDDD',
    backgroundColor: 'white'
  },
  dt:{
    flex:1,
    marginTop:20,
    marginRight:10
  },
  dd:{
    flex:4,
    marginLeft:10
  },
  title:{
    textAlign:'center',
    fontSize:16
  },
  input:{
    flex:4,
    flexDirection:'column',
    borderColor: 'gray',
    borderWidth: 0,
    justifyContent:'center'

  },
  list: {
     marginTop:5,
    // width:WINDOW_WIDTH,
     justifyContent: 'flex-start',
     flexDirection: 'row',
     flexWrap: 'wrap',
     flex:1,
     backgroundColor: 'white',
   },
   imagelist:{
       flex:1,
       height:WINDOW_WIDTH/4+20,
       width:WINDOW_WIDTH,
       backgroundColor: 'white',
   },
   row: {
     justifyContent: 'flex-start',
     width: window.WINDOW_WIDTH/4,
     height:  window.WINDOW_WIDTH/4,
     backgroundColor: 'white',
     alignItems: 'center',
     borderWidth: 1,
     borderRadius: 5,
     borderColor: '#CCC',
     flexDirection: 'row'
   },
   save:{
    alignItems :'center',
    textAlign:'center'
   },
   thumb: {
     width: 45,
     height: 45
   },
   thumbbig: {
     width: 450,
     height: 450,
   },
   text: {
     flex: 1,
     marginTop: 5,
     fontWeight: 'bold'
   },

    btmsubmit:{
      width:200,
      height:50,
      backgroundColor:'#199BFC',
      alignSelf:'center'
    },
    carousel: {
      height:100,
      width:100,
      backgroundColor: 'white',
    },
    avatarContainer: {
      borderColor: '#9B9B9B',
      borderWidth: 1 / 1000,
      justifyContent: 'center',
      alignItems: 'center'
    },
    avatar: {
      width: 100,
      height: 100
    },
    modal: {

    width:WINDOW_WIDTH,
    height:WINDOW_HEIGHT

  },
  wrapper: {
   paddingTop: 50,
   flex: 1
 },
 topStyle: {
     marginTop: 20,
     marginLeft:15
 }
});
import ImagePicker from 'react-native-image-picker';

  export class addDetailScreen extends React.Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
      avatarSource: null,
      ds:ds,
      text:''
      ,newPics:[require('../../images/3.png')]
      ,takephotoimg:[require('../../images/takephoto.png')]
      ,swipeToClose: true
      ,clickimage:null
    };
  this.state.allPics=[...this.state.newPics,...this.state.takephotoimg];
  this.state.dataSource=ds.cloneWithRows(this.state.allPics);

}

addPhoto(source){

source = 'data:image/jpeg;base64,' + source;
this.state.newPics.push({uri:source});
this.setState({allPics:[...this.state.newPics,...this.state.takephotoimg]});
this.setState({
  avatarSource: source,
  dataSource: this.state.ds.cloneWithRows(this.state.allPics)
});
}


  selectPhotoTapped() {
    const options = {
      title: '',
      //takePhotoButtonTitle: '选择',
      chooseFromLibraryButtonTitle: '选择',
      customButtons: {
        '拍照': '拍照',
 },
      quality: 0.5,
      maxWidth: 300,
      maxHeight: 300,
      allowsEditing: true,
      storageOptions: {
        skipBackup: true
      },
      mediaType: 'photo', // 'photo' or 'video'
      videoQuality: 'high' // 'low', 'medium', or 'high'
    }
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
          this.props.router.takePhoto({addPhoto:this.addPhoto.bind(this)});
      }
      else {
        var source=response.data;
        this.addPhoto(source);
        // You can display the image using either:
    }});
  }

  openModal(image) {
    this.setState({clickimage:image});
    this.refs.modal.open();
  }


   

    _renderRow (rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
       var imgSource = this.state.allPics[rowID];
       if (rowID==this.state.allPics.length-1){
         return (

        <TouchableOpacity style={styles.row} onPress={this.selectPhotoTapped.bind(this)}>
          <View style={styles.carousel}>
            <Image style={styles.carousel} resizeMode="stretch" source={require('../../images/takephoto.png')} />
          </View>
        </TouchableOpacity>

    );
       }else{
       return (
         <TouchableOpacity style={styles.row} source1=""  onPress={()=> {this.openModal.bind(this)(imgSource)}}>
         <View style={styles.carousel}>
             <Image style={styles.carousel} resizeMode="stretch" source={imgSource} />
         </View>
         </TouchableOpacity>

     );
   }
  }
       _renderSeperator (sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
         return (
           <View
             key={`${sectionID}-${rowID}`}
             style={{
               height: adjacentRowHighlighted ? 4 : 1,
               backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
             }}
           />
         );
       }

save(){
    alert("保存成功");
    return;
    var data={};
    data.Subject=this.refs.Subject.value;
    data.Descriss=this.refs.described.value;
    data.imags=this.state.allPics;
    
}

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.imagelist}>
          <ListView
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              contentContainerStyle={styles.list}
              showsVerticalScrollIndicator={true}
              //renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
            />
      </View>
        <View style={styles.datainfo}>
              <View style={styles.dt}>
                <Text style={styles.title}>主题:</Text>
              </View>
          <View style={styles.dd}>
                <TextInput ref="Subject"
                    style={styles.input}
                    onChangeText={(text) => {this.refs.Subject.value=text;}}
                        />
          </View>
        </View>
      <View style={styles.datainfo}>
          <View style={styles.dt}>
              <Text style={styles.title}>描述:</Text>
          </View>

            <View style={styles.dd}>
            <TextInput ref="described"
                        style={styles.inputList}
                        onChangeText={(text) => {this.refs.described.value=text;}}
            />
            </View>
      </View>
      <View style={styles.topStyle}>
          <Button
              containerStyle={{ width: WINDOW_WIDTH - 30, height: 40, paddingTop: 8, overflow: 'hidden', borderRadius: 4, backgroundColor: '#199BFC', borderColor: "#DEDEDE", borderWidth: 2 }}
              style={{ fontSize: 16, color: 'white' }}
              styleDisabled={{ color: 'red' }}
              onPress={() => {alert("保存成功")} }>
              保存
          </Button>
      </View>
    <Modal style={styles.modal} position={"center"} ref={"modal"} isDisabled={this.state.isDisabled} >
        <View style={{width: WINDOW_WIDTH-20, height:  WINDOW_HEIGHT-20}}>
          <Image  ref={"modalimg"}  resizeMode="stretch" source={this.state.clickimage} />
        </View>

   </Modal>
    </View>
    );
  }
}


  
