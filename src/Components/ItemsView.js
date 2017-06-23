import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    ListView,
    PixelRatio,
    Dimensions
} from 'react-native';
let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}
export default class HomeList extends Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this._renderRow = this._renderRow.bind(this);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        };
    }

    _renderRow(rowDate) {
        return (
            <View style={styles.row}>
                <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={()=>{alert('我是102')} }
                >
                    <Image
                        source={{ uri: rowDate.image }}
                        style={styles.rowDateImage}
                    />
                    <Text style={{ marginTop: 10, fontSize: 14, textAlign: 'center',color:'#444' }}>{rowDate.title} </Text>
                </TouchableOpacity>
            </View>
        );
    }
    render() {

        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(this.props.items) }
                    renderRow={this._renderRow}
                    contentContainerStyle={styles.list}
                    enableEmptySections={true}
                    initialListSize= {4}
                    style={styles.listView}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        height: 120,
        width: window.width / 5,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    rowDateImage: {
        height: 55,
        width: 55,
    },
    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    listView: {
        backgroundColor: 'white',
    },
});