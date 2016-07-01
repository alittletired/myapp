import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, ListView, Dimensions, RefreshControl, Image } from 'react-native';
import {problem} from './ListData'
import Button from 'react-native-button';
import Modal from 'react-native-modalbox';
const {height, width} = Dimensions.get('window');

class ProblemDetials extends Component {
    constructor(props) {
        super(props);
    }
    _handlePress() {
        this.refs.modal.open();
    }

    _handleClose() {
        this.refs.modal.close();
    }

    _handlePass() {

        //逻辑
        this.props.hasValiad = true;
        this.refs.modal.close();
        this.setState({
            hasValiad: true
        });
    }

    _handleNoPass() {
        //逻辑
        this.refs.modal.close();
    }
    /**
     *resizeMode enum('cover', 'contain', 'stretch')
     */
    render() {

        this.props = Object.assign({}, this.props, {
            problem: problem,
            modalShow: false,
            hasValiad:false

        });
        if (!this.props.hasValiad) {
            return (

                <View style={styles.container}>

                    <Image
                        style={styles.ImgStyle}
                        resizeMode ={"cover"}
                        source={{ uri: problem.imgurl, scale: 3 }}
                        />

                    <View style={styles.paddingStyle}>
                        <View style={styles.cell}>
                            <Text style={styles.dt}>
                                问题描述
                            </Text>
                            <Text style={styles.dd}>
                                {this.props.problem.description}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.borderStyle}>
                        <View style={styles.cell}>
                            <Text style={styles.dt}>
                                整改期限
                            </Text>
                            <Text style={styles.dd}>
                                {this.props.problem.publishDate}
                            </Text>
                        </View>

                        <View style={styles.cell}>
                            <Text style={styles.dt}>
                                整改单位
                            </Text>
                            <Text style={styles.dd}>
                                {this.props.problem.publishDate}
                            </Text>
                        </View>
                        <View style={styles.cell}>
                            <Text style={styles.dt}>
                                整改状态
                            </Text>
                            <Text style={styles.dd}>
                                {this.props.problem.status}
                            </Text>
                        </View>
                    </View>



                    <View style={styles.buttonStyle}>
                        <Button
                            containerStyle={{ padding: 10, paddingLeft: 100, paddingRight: 100, height: 40, overflow: 'hidden', borderRadius: 4, backgroundColor: '#199BFC' }}
                            style={{ fontSize: 14, color: 'white' }}
                            styleDisabled={{ color: 'red' }}
                            onPress={() => this._handlePress() }>
                            验证
                        </Button>
                    </View>




                    <Modal style={styles.modal} position={"bottom"} ref={"modal"}>
                        <View >
                            <Button
                                containerStyle={{ width: width - 30, height: 40, paddingTop: 8, overflow: 'hidden', borderRadius: 4, backgroundColor: '#199BFC' }}
                                style={{ fontSize: 16, color: 'white' }}
                                styleDisabled={{ color: 'red' }}
                                onPress={() => this._handlePass() }>
                                通过
                            </Button>
                        </View>
                        <View style={styles.modelButton}>
                            <Button
                                containerStyle={{ width: width - 30, height: 40, paddingTop: 8, overflow: 'hidden', borderRadius: 4, backgroundColor: '#199BFC' }}
                                style={{ fontSize: 16, color: 'white' }}
                                styleDisabled={{ color: 'red' }}
                                onPress={() => this._handleNoPass() }>
                                不通过
                            </Button>
                        </View>
                        <View style={styles.modelButton}>
                            <Button
                                containerStyle={{ width: width - 30, height: 40, paddingTop: 8, overflow: 'hidden', borderRadius: 4, backgroundColor: 'white', borderColor: "#DEDEDE", borderWidth: 2 }}
                                style={{ fontSize: 16, color: '#666666' }}
                                styleDisabled={{ color: 'red' }}
                                onPress={() => this._handleClose() }>
                                取消
                            </Button>
                        </View>
                    </Modal>


                </View>

            )
        }
        else {
            return (

                <View style={styles.container}>

                    <Image
                        style={styles.ImgStyle}
                        resizeMode ={"cover"}
                        source={{ uri: problem.imgurl, scale: 3 }}
                        />

                    <View style={styles.paddingStyle}>
                        <View style={styles.cell}>
                            <Text style={styles.dt}>
                                问题描述
                            </Text>
                            <Text style={styles.dd}>
                                {this.props.problem.description}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.borderStyle}>
                        <View style={styles.cell}>
                            <Text style={styles.dt}>
                                整改期限
                            </Text>
                            <Text style={styles.dd}>
                                {this.props.problem.publishDate}
                            </Text>
                        </View>

                        <View style={styles.cell}>
                            <Text style={styles.dt}>
                                整改单位
                            </Text>
                            <Text style={styles.dd}>
                                {this.props.problem.publishDate}
                            </Text>
                        </View>
                        <View style={styles.cell}>
                            <Text style={styles.dt}>
                                整改状态
                            </Text>
                            <Text style={styles.dd}>
                                {this.props.problem.status}
                            </Text>
                        </View>
                    </View>




                    <View style={styles.buttonStyle}>
                        <Button
                            containerStyle={{ padding: 10, paddingLeft: 100, paddingRight: 100, height: 40, overflow: 'hidden', borderRadius: 4, backgroundColor: '#199BFC' }}
                            style={{ fontSize: 14, color: 'white' }}
                            styleDisabled={{ color: 'red' }}
                            onPress={() => this._handlePress() }>
                            验证
                        </Button>
                    </View>




                    <Modal style={styles.modal} position={"bottom"} ref={"modal"}>
                        <View >
                            <Button
                                containerStyle={{ width: width - 30, height: 40, paddingTop: 8, overflow: 'hidden', borderRadius: 4, backgroundColor: '#199BFC' }}
                                style={{ fontSize: 16, color: 'white' }}
                                styleDisabled={{ color: 'red' }}
                                onPress={() => this._handlePass() }>
                                通过
                            </Button>
                        </View>
                        <View style={styles.modelButton}>
                            <Button
                                containerStyle={{ width: width - 30, height: 40, paddingTop: 8, overflow: 'hidden', borderRadius: 4, backgroundColor: '#199BFC' }}
                                style={{ fontSize: 16, color: 'white' }}
                                styleDisabled={{ color: 'red' }}
                                onPress={() => this._handleNoPass() }>
                                不通过
                            </Button>
                        </View>
                        <View style={styles.modelButton}>
                            <Button
                                containerStyle={{ width: width - 30, height: 40, paddingTop: 8, overflow: 'hidden', borderRadius: 4, backgroundColor: 'white', borderColor: "#DEDEDE", borderWidth: 2 }}
                                style={{ fontSize: 16, color: '#666666' }}
                                styleDisabled={{ color: 'red' }}
                                onPress={() => this._handleClose() }>
                                取消
                            </Button>
                        </View>
                    </Modal>


                </View>

            )

        }
    }
}


const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 0,
        backgroundColor: 'white'
    },
    ImgStyle: {
        height: 200,
        width: width
    },
    cell: {
        flexDirection: 'row',
        padding: 5,
        width: width - 10
    },
    dt: {
        flex: 1,
        textAlign: "center",
        color: "#999999"
    },
    dd: {
        flex: 4,
        textAlign: "left",
        color: "#333333"


    },
    borderStyle: {
        borderBottomColor: "#DDDDDD",
        borderBottomWidth: 1,
        padding: 3
    },
    paddingStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: "#DDDDDD",
        borderBottomWidth: 1,
        padding: 3
    },
    buttonStyle: {
        marginTop: 20
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        flexDirection: 'column',
        width: width - 10,
        marginBottom: 50,
        borderRadius:4
    },
    modelButton: {
        marginTop:10
    }

});


export default ProblemDetials;