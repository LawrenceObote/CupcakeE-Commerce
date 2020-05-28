import React from 'react'
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements'


const Heading = ({title}) => {

    return (
        <View style={styles.header}>
            <Icon
            name="bars"
            color='#fff'
            type='font-awesome'/>
            <Text style={styles.text}>Cupcake Shop</Text>
            <Icon
            name="shopping-cart"
            color="#fff"
            type='font-awesome'/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    text: {
        color: 'white',
        fontSize: 23,
        textAlign: 'center',
    },
    // icon: {
    //     t

    // }

});

export default Heading;