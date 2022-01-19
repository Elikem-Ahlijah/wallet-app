import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const MomoCard = (props) => {
    return (
        <TouchableOpacity onPress={props.handleClick} style={styles.container}>
            <Text>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default MomoCard;



const styles = StyleSheet.create({
    container:{
        flex: .12,
        marginHorizontal: 20,
        marginVertical: 20,
        borderRadius: 5,
        borderColor: 'grey',
        borderWidth: .5,
        paddingHorizontal: 2,
        backgroundColor: 'grey',
        height: 20
        
    
        
    } 
})
