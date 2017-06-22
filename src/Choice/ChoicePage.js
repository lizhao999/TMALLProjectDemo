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
// import NavigationBar from '../NavigatorBar'
import Icon from 'react-native-vector-icons/Ionicons';
var NavH = 0;
export default class ChoicePage extends Component{
    constructor(props) {
        super(props)
        this.state={
            NavH:110,
            TM_x:0,
            TM_y:0,

        }
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
                        <Text ref = "TMALL" style={{fontSize:27,color:'white',fontWeight:'500',fontFamily:'Arial',marginTop:this.state.TM_y}}>TMALL</Text>
                        <Icon name="ios-chatbubbles" size={25} color='white'/>
                    </View>
                    <View ref="inputs" style={styles.inputView}>
                        <Icon name="ios-search-outline" size={23} color='gray'/>
                        <Text style={{fontSize:15,color:'gray',textAlign:'left',position:'absolute',left:35}}>联想笔记本</Text>
                        <Icon name="ios-camera-outline" size={26} color='gray'/>
                    </View>

                </View>
                <ScrollView style={styles.scrollViewStyle}
                            showsHorizontalScrollIndicator={true}
                            onScrollBeginDrag={(e)=>{
                                this.scrollAnimated(e.nativeEvent.contentOffset.y);
                                {/*this.setState({NavH:100})*/}
                            }}
                >
                    <View style={{height:100}}>
                        <Text>联想笔记本</Text>
                    </View>
                    <View style={{height:100}}>
                    <Text>联想笔记本</Text>
                    </View>
                    <View style={{height:100}}>
                        <Text>联想笔记本</Text>
                    </View>
                    <View style={{height:100}}>
                        <Text>联想笔记本</Text>
                    </View>
                    <View style={{height:100}}>
                        <Text>联想笔记本</Text>
                    </View>
                    <View style={{height:100}}>
                        <Text>联想笔记本</Text>
                    </View>
                    <View style={{height:100}}>
                        <Text>联想笔记本</Text>
                    </View>
                    <View style={{height:100}}>
                        <Text>联想笔记本</Text>
                    </View>
                    <View style={{height:100}}>
                        <Text>联想笔记本</Text>
                    </View>
                    <View style={{height:100}}>
                        <Text>联想笔记本</Text>
                    </View>

                </ScrollView>
            </View>
        )
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
})