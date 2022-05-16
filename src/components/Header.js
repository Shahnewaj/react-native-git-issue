import { View, StyleSheet, Image } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.main}>
            <Image style={{ width: 115, height: 85 }} source={require('../assets/img/logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        marginBottom: 20,
    }
})

export default Header;