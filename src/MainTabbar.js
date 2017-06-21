/**
 * Created by Lizhao on 2017/6/21.
 */
import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image
}from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home'
import ChoicePage from './Choice/ChoicePage'
export default class MainTabbar extends Component {
    constructor(props) {
        super(props);
        // Global.userToken = 'token';
        this.state = {
            selectedTab:'home'
        }
    }

    componentWillMount() {
        Icon.getImageSource('ios-settings', 30).then((source) => this.setState({ gearIcon: source }));
    }

    renderIcon(){
        return <Image source={{uri:'menu_home'}} style={{width:23,height: 23,marginBottom:5}}/>
    }
    render() {
        return (
            <TabNavigator tabBarStyle={{backgroundColor:'white'}} style={{backgroundColor:'blue'}}>
                <TabNavigator.Item
                    title="精选"
                    titleStyle={{color:'gray',marginBottom:2,marginTop:-2,fontSize:12}}
                    selectedTitleStyle={{color:'red'}}
                    selected={this.state.selectedTab === 'home'}
                    //{/*renderIcon = {this.renderIcon}*/}
                    renderIcon = {() => <Icon name="ios-home-outline" size={30} color='gray'/>}
                    renderSelectedIcon={() => <Icon name="ios-home" size={30} color='red' />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <ChoicePage {...this.props} navigator={this.props.navigator} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="品牌"
                    titleStyle={{color:'gray',marginBottom:2,marginTop:-2,fontSize:12}}
                    selectedTitleStyle={{color:'red'}}
                    selected={this.state.selectedTab === 'logo'}
                    //renderIcon={() => <Icon name={ 'ios-settings-outline' } size={30} color={'gray'}/>}
                    renderIcon = {() => <Icon name="ios-pricetag-outline" size={30} color='gray'/>}
                    renderSelectedIcon={() => <Icon name="ios-pricetag" size={30} color='red' />}
                    onPress={() => this.setState({ selectedTab: 'logo' })}>
                    <Home {...this.props} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="购物车"
                    titleStyle={{color:'gray',marginBottom:2,marginTop:-2,fontSize:12}}
                    selectedTitleStyle={{color:'red'}}
                    selected={this.state.selectedTab === 'car'}
                    //renderIcon={()=><Image source={{uri:'menu-my'}} style={{width:23,height:23,marginBottom:5}} />}
                    //renderSelectedIcon={() => <Image source={{uri:'menu_my_s'}} style={{width:23,height:23,marginBottom:5}} />}
                    renderIcon = {() => <Icon name="ios-cart-outline" size={30} color='gray'/>}
                    renderSelectedIcon={() => <Icon name="ios-cart" size={30} color='red' />}

                    onPress={() => this.setState({ selectedTab: 'car' })}>
                    <Home {...this.props} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="我"
                    titleStyle={{color:'gray',marginBottom:2,marginTop:-2,fontSize:12}}
                    selectedTitleStyle={{color:'red'}}
                    selected={this.state.selectedTab === 'person'}
                    renderIcon = {() => <Icon name="ios-person-outline" size={30} color='gray'/>}
                    renderSelectedIcon={() => <Icon name="ios-person" size={30} color='red' />}
                    onPress={() => this.setState({ selectedTab: 'person' })}>
                    <Home {...this.props} />
                </TabNavigator.Item>
            </TabNavigator>

        )
    }

}
