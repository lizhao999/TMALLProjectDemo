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
            <Swiper
                height={150}
                loop={true}
                autoplay={true}
                dot={<View style={styles.customDot} />}
                activeDot={<View style={styles.customActiveDot} />}
                paginationStyle={{
                    bottom: 10
                }}
            >
                {

                    this.props.bannerData.map((banner,i) => {
                    console.log('1111'+banner)

                    return (

                        <TouchableOpacity key={i} activeOpacity={0.75}
                                          onPress={() => { alert('我是banner') } }
                        >
                            <Image
                                style={styles.bannerImage}
                                source={{ uri: banner }}
                            />
                        </TouchableOpacity>
                    )
                })
                }
            </Swiper>
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
        marginLeft:10,
        marginRight:10,

        height: 150,
        backgroundColor: 'white',
        // width: window.width,
        resizeMode:'cover',
    },
});
