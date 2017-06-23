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

import Swiper from 'react-native-swiper'

export default class ChoiceSwiper extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {

    }

    render(){
        return(
            <View style={styles.newsView}>
                <Image
                    style={styles.icon}
                    source={{ uri: this.props.newsData.icon}}
                />
                <View style={{height:40,width:1.2,backgroundColor:'#eee'}}></View>
                <Swiper
                    height={40}
                    loop={true}
                    horizontal={false}
                    autoplay={true}
                    dot={<View style={styles.customDot} />}
                    activeDot={<View style={styles.customActiveDot} />}
                    paginationStyle={{
                        bottom: 0
                    }}
                >
                    {

                        this.props.newsData.titles.map((titles,i) => {
                            return (
                                <TouchableOpacity key={i} activeOpacity={0.75}
                                                  onPress={() => { alert('我是banner') } }
                                >
                                    <View style={styles.newsTitlesView}>
                                        <Text style={{height:20,fontSize:14,textAlign:'left', color:'#444'}}>{titles[0]}</Text>
                                        <Text style={{height:20,fontSize:14,textAlign:'left',color:'#444'}}>{titles[1]}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </Swiper>


            </View>
        )
    }

}
const styles = StyleSheet.create({
    newsView: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 80,
        backgroundColor: 'white',
        flexDirection:'row'
    },
    icon: {
        marginLeft:15,
        marginRight:10,
        height: 38,
        width:38,
        backgroundColor: 'white',
        // width: window.width,
        resizeMode:'cover',
    },

    newsTitlesView: {
         marginLeft:10,
        // marginRight:10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 45,
        backgroundColor: 'white',
        flexDirection:'column'
        // width: window.width,
    },
});
