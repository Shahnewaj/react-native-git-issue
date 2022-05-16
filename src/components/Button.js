import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.buttonView}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonView: {
        backgroundColor: '#9A41EA',
        paddingVertical: 15,
        marginTop: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    }
})


export default Button