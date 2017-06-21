/**
 * Created by Lizhao on 2017/6/21.
 */
import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'
import MainTabbar from './MainTabbar'
import {Navigator}
    from 'react-native-deprecated-custom-components'

export default class App extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            component:MainTabbar,
            titleText1: '引导页',
            name:'Guide',
            isLoaded:false
        }
    }

    render(){
        return (<Navigator initialRoute={{
            params:{
                titleText:'主页',
            },
            name:'MainTabbar',
            component: this.state.component,
        }}
                           configureScene={(route) => {
                               if (route.sceneConfig) {
                                   let res=route.sceneConfig;
                                   res.gestures=null;
                                   return res;
                               }
                               return Navigator.SceneConfigs.PushFromRight;
                           }}
                           renderScene={(route, navigator) => {
                               let Component=route.component;
                               return<Component {...route.params} navigator={navigator}/>
                           }}
                           style={{flex:1}}
        />)
    }
}