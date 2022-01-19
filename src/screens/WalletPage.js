import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MomoCard from '../components/momoCard';
import WalletCard from '../components/walletCard';
import SecondWalletCard from '../components/secondWalletCard';
import ThirdWalletCard from '../components/thirdWalletCard';

const WalletPage = ({navigation}) => {
    const handleMomoPage = () =>{
        navigation.navigate('Mobile Money')
    }


    return (
        <View style={styles.container}>
            <MomoCard name ='Momo' handleClick={handleMomoPage}/> 
            <MomoCard name ='Visa'/>
            <MomoCard name='Master Card'/>
        </View>
    )
}

export default WalletPage

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: 'lightgrey',
    
        
    }
})