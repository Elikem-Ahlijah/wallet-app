import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MomoCard from '../components/momoCard';

const HomeScreen = ({navigation}) => {
    const handleWalletPage =()=>{
        navigation.navigate('Wallet')
    }

    const handleTransactionsPage=()=>{
        navigation.navigate('Transactions')
    }
  


    return (
        <View style={styles.container}>
            <MomoCard name='Payments' handleClick={handleWalletPage}/>
            <MomoCard name= 'Transactions' handleClick={handleTransactionsPage}/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: 'lightgrey',
    
        
    }
})
