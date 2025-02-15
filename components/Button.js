import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({ title, onPress, color, bg }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.btn, {backgroundColor: bg || '#fff' }]}>
            <Text style={[styles.text, { color: color || '#000' }]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        margin: 5,
        elevation: 5,
        padding: 20,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    text: {
        fontSize: 20,
        fontWeight: '800',
    }
})
