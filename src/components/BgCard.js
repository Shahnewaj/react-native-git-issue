import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'

const BgCard = (props) => {
    return (
        <ImageBackground style={styles.bgView} source={require('../assets/img/bg-img.png')}>
            <SafeAreaView style={styles.safeView}>
                {props.children}
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bgView: {
        flex: 1,
        backgroundColor: '#0F0A21',
        padding: 10,
    },
});



export default BgCard;