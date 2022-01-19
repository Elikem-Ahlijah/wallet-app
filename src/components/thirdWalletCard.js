import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ThirdWalletCard = (props) => {
    return (
        <TouchableOpacity onPress={props.handleClick} style={styles.container}>
            
        </TouchableOpacity>
    )
}

export default ThirdWalletCard;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 30,
        position: 'relative',
        borderRadius: 5,
        borderColor: 'grey',
        borderWidth: .5,
        paddingHorizontal: 10,
        backgroundColor: 'lightblue',
        top: -240
        
    }
})