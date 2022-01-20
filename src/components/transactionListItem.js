import React  from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


export default function TransactionItemComponent ({transactions}) {
    return (
      <View style={styles.transactionsList}>
        {transactions.map((transaction, index) => {
          return (
            <View style={styles.transactionItem} key={index}>
              <Text style={styles.transactiontext}>{transaction.id}</Text>
              <Text style={styles.transactiontext}>{transaction.response.message}</Text>
              <Text style={styles.transactiontext}>{transaction.response.status}</Text>
            </View>
          );
        })}
      </View>
    );
 }

const styles = StyleSheet.create({
  transactionsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    
  },
  transactionItem:{
    margin: 5,
    padding: 5,  
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5
  },
  transactiontext: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});