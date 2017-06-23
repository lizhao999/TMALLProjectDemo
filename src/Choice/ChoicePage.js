/**
 * Created by Lizhao on 2017/6/21.
 */
import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image,
    ListView,
    ScrollView,
    TextInput,
    StatusBar,
    Animated,
    LayoutAnimation
} from 'react-native'
import TestData from './TestData.json'
import ChoiceHeadView from './ChoiceHeadView'

import Icon from 'react-native-vector-icons/Ionicons';
var NavH = 0;
let tmall= 'https://gw.alicdn.com/tfs/TB1HWNORFXXXXciaXXXXXXXXXXX-800-140.png'
export default class ChoicePage extends Component{
    constructor(props) {
        super(props)
        var ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        })
        this.state={
            dataSource:ds.cloneWithRows([]),

            NavH:110,
            TM_x:0,
            TM_y:0
        }
    }

    componentDidMount() {
        // data = {'a':TestData}
        //
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(TestData.swiper)
        })
        // fetch('http://ued.yihaodian.com:3001/api/70')
        //     .then((response) => response.json())
        //     .then((data) => {
        //         this.listData = data.listData;
        //         this.len = this.listData.length;
        //         this.count = Math.ceil(this.len / this.pageSize);
        //
        //         this.setState({
        //             dataSource:this.ds.cloneWithRows(TestData)
        //         })
        //
        //     })
        //     .done();
    }

    scrollAnimated(y){
        if(y>10) {
            LayoutAnimation.configureNext({
                duration: 1200,
                create: {
                    type: 'linear',
                    property: 'opacity'  //注意这里，我们设置新布局被创建时的动画特性为透明度
                },
                update: {
                    type: 'linear',
                    property: 'opacity'
                }
            });
            this.setState({TM_y: -150})
        }else {
            LayoutAnimation.configureNext({
                duration: 100,
                create: {
                    type: 'linear',
                    property: 'opacity'  //注意这里，我们设置新布局被创建时的动画特性为透明度
                },
                update: {
                    type: 'linear',
                 }
            });
            this.setState({TM_y: 0})

        }
    }

    render(){
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <View style={[styles.navView,{height:this.state.NavH}]}>
                    <View style={{paddingTop:24,padding:15,paddingBottom:8,height:65,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Icon name="md-qr-scanner" size={25} color='white'/>
                        {/*<Text ref = "TMALL" style={{fontSize:27,color:'white',fontWeight:'500',fontFamily:'Arial',marginTop:this.state.TM_y}}>TMALL</Text>*/}
                        <Image
                            style={{height:25,width:200,resizeMode:'cover'}}
                            source={{ uri:tmall}}
                        />
                        <Icon name="ios-chatbubbles" size={25} color='white'/>
                    </View>
                    <View ref="inputs" style={styles.inputView}>
                        <Icon name="ios-search-outline" size={23} color='gray'/>
                        <Text style={{fontSize:15,color:'gray',textAlign:'left',position:'absolute',left:35}}>联想笔记本</Text>
                        <Icon name="ios-camera-outline" size={26} color='gray'/>
                    </View>
                </View>
                <ListView
                    style={styles.listView}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    renderSeparator={this._renderSeparator.bind(this)}
                    renderHeader={this._renderHeader.bind(this)}

                    enableEmptySections={true}
                    initialListSize= {1}
                />
            </View>
        )
    }

    _renderHeader(){
        return <ChoiceHeadView headData = {TestData}/>
    }

    _renderRow(rowData,sectionId,rowId) {

        return   <View style={{height:200,width:300}}>
                    <Text>{rowData}</Text>
                </View>

    }

    _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View key={`{sectionID}-${rowID}`}
                  style={{height: 1, backgroundColor: '#eee'}}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor:'white'
    },
    navView:{
        flexDirection:'column',
        backgroundColor:'#FB0528'
    },
    inputView: {
        height: 36,
        margin: 15,
        paddingHorizontal: 10,
        marginTop:0,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
    },
    scrollViewStyle: {
        // 背景色
        backgroundColor:'#eee',

    // width:100,
    },
    listView: {

        backgroundColor: 'white',
    },
})