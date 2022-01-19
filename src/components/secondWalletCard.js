import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SecondWalletCard = (props) => {
    return (
        <TouchableOpacity onPress={props.handleClick} style={styles.container}>
            
        </TouchableOpacity>
    )
}

export default SecondWalletCard;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 25,
        position: 'relative',
        borderRadius: 5,
        borderColor: 'grey',
        borderWidth: .5,
        paddingHorizontal: 10,
        backgroundColor: '#74F69C',
        top: -120
        
    }
})

