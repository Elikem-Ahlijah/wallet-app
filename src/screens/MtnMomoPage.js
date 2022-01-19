import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MomoCard from '../components/momoCard';


const MtnMomoPage = ({navigation}) => {
    const handleReceiveMtn = () =>{
        navigation.navigate('Receive MTN Payment')
    }
    const handleSendMtnMomo = ()=>{
        navigation.navigate('Send MTN Momo')
    }
    return (
        <View style={styles.container}>
            <MomoCard handleClick={handleReceiveMtn} name='Receive Payment' style={styles.card}></MomoCard>
            <MomoCard handleClick={handleSendMtnMomo} name='Make Payment' style={styles.card}></MomoCard>
        </View>
    )
}

export default MtnMomoPage;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: 'lightgrey'
    },
    card:{
        
    }
})
