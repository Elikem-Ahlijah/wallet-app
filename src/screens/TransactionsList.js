import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {getFirestore ,collection, getDocs } from "firebase/firestore"; 
import TransactionItemComponent from '../components/transactionListItem';




function TransactionsList() {
    const [transactionsArray, setTransactionsArray] = useState([]);

    const db = getFirestore()
    useEffect(async() => {
        let transactions =[]
        const querySnapshot = await getDocs(collection(db, "transactions"));
        querySnapshot.forEach((doc) => {
            transactions.push({ ...doc.data(), id: doc.id })
            console.log(`${doc.id} => ${doc.data()}`);
            setTransactionsArray(transactions)
        });
        
    }, []);
    
      
    
    return (
      <ScrollView style={styles.container}>
        {transactionsArray.length > 0 ? (
          <TransactionItemComponent style={styles.transactionsContainer} transactions={transactionsArray} />) : (
          <Text>No transactiions</Text>
        )}
      </ScrollView>
    );
}          

export default TransactionsList;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
    
      backgroundColor: '#ebebeb',
    },

    transactionsContainer:{
        flex: 0.2
    }
});
