/**
 * Created by Lizhao on 2017/6/23.
 */
import React,{Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions
}  from 'react-native'
let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}
var banner = [
    "https://img.alicdn.com/tfs/TB1Lx87RVXXXXccXVXXXXXXXXXX-1130-500.jpg_q100.jpg_.webp",
    "https://gdp.alicdn.com/imgextra/i1/747872819/TB2CxGjub8kpuFjy0FcXXaUhpXa_!!747872819.jpg",
    "https://img.alicdn.com/tps/i4/TB1m2yLRVXXXXcqXVXXSutbFXXX.jpg_1080x1800Q90s50.jpg",
    "https://img.alicdn.com/tfs/TB1n0R7RVXXXXXMXFXXXXXXXXXX-1920-350.jpg",
    "https://gjusp.alicdn.com/img/img1498124488118-3158802926.jpg@1000y-0ic_50Q.jpg"
]

import ChoiceSwiper from '../Components/ChoiceSwiper'
import ItemsView from '../Components/ItemsView'
import NewsView from '../Components/NewsView'

var dataa=[];
export default class ChoiceHeadView extends Component{
    constructor(props){
        super(props);
        dataa = this.props.headData;
        this.state= {
            data:dataa,
        }
    }

    componentDidMount() {
        {console.log('xxx'+this.props)}
    }

    render(){
        return(
            <View>
                <ItemsView items = {this.props.headData.Items} />
                <ChoiceSwiper bannerData = {this.props.headData.swiper} />
                <NewsView newsData = {this.props.headData.News}/>

                <View style={{height:10,width:window.width,backgroundColor:'#eee'}}>

                </View>

            </View>
        )
    }

}
const styles = StyleSheet.create({
    customDot: {
        backgroundColor: '#ccc',
        height: 1.5,
        width: 15,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
    },
    customActiveDot: {
        backgroundColor: 'white',
        height: 1.5,
        width: 15,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
    },
    bannerImage: {
        height: 150,
        backgroundColor: 'red',
        width: window.width,
    },
});
