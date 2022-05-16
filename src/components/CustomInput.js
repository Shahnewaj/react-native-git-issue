import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import React from 'react'

const CustomInput = ({
    label,
    placeholder,
    required,
    validated,
    errorMessage,
    onChangeText,
    value,
    error,
}) => {
    return (
        <View style={styles.main}>
            <View style={styles.labelView}>
                <Text style={styles.label} >{label}</Text>
                {required && <Text style={styles.requiredMark}>*</Text>}
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor='#aaa'
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoComplete='off'
                    value={value}
                    onChangeText={(value) => onChangeText(value)}
                    selectionColor='#9A41EA'
                />
                {validated &&
                    <Image style={{ width: 16, height: 16 }} source={require('../assets/img/checked.png')} />
                }
            </View>
            {error &&
                <Text style={styles.errorMessage}>This field is required*</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        marginTop: 10
    },
    labelView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    requiredMark: {
        color: '#ff0000',
        fontSize: 30,
        marginLeft: 5
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1D1D38',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 10,
    },
    input: {
        color: '#ffffff',
        fontSize: 16,
        paddingHorizontal: 10,
    },
    errorMessage: {
        color: '#ff0000',
    }
})

export default CustomInput