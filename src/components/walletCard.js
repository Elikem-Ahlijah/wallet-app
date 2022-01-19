import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WalletCard = (props) => {
    return (
            
        <TouchableOpacity onPress={props.handleClick} style={styles.container}><Text>{props.name}</Text>
        </TouchableOpacity>
            
        
    )
}

export default WalletCard;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // marginVertical:200,
        marginHorizontal: 20,
        borderRadius: 5,
        borderColor: 'grey',
        borderWidth: .5,
        paddingHorizontal: 2,
        backgroundColor: '#DAB600',
        height: 50, 
        
    }
})
