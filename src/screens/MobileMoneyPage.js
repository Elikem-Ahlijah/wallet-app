import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MomoCard from '../components/momoCard';

const MobileMoneyPage = ({navigation}) => {
    const handleMtnMomo = () =>{
        navigation.navigate('MTN Mobile Money')
    }

    return (
        <View style={styles.container}>
            <MomoCard name='MTN' style={styles.card} handleClick={handleMtnMomo}><Image></Image></MomoCard>
            <MomoCard name='Vodafone' style={styles.card}><Image></Image></MomoCard>
            <MomoCard name='TigoAirtel' style={styles.card}><Image></Image></MomoCard>
            <MomoCard name='GLO' style={styles.card}><Image></Image></MomoCard>

            
        </View>
    )
}

export default MobileMoneyPage;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: 'lightgrey'
    },
    card:{
        
    }
})
