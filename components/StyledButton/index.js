import React from 'react'
import { View, Text,Pressable } from 'react-native'
import styles from './styles'

const StyledButton = (props) => {
    const backgroundColor = props.type ==='primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = props.type==='primary' ? '#FFFFFF' : '#171A20';
    const content = props.content;
    const onPress = props.onPress;
    return (
        <View style={styles.container}>
            <Pressable style={[styles.button,{backgroundColor:backgroundColor}]} onPress={() => onPress()}>
                <Text style={[styles.text,{color:textColor}]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton
