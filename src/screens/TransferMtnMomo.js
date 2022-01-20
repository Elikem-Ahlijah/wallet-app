import React from 'react';
import {Alert, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import {getFirestore, collection, addDoc} from 'firebase/firestore';

const TransferMtnMomo = () => {


   function handleOnChangeText (text){
       
       
        if(text.length === 10){
             let data = {
                account_bank: 'MTN',
                amount: 50,
                narration: 'New GHS momo transfer',
                currency: 'GHS',
                beneficiary_name: 'Elikem Ahlijah',
                account_number: text

                
                   
        }

        fetch('https://api.flutterwave.com/v3/transfers', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            Authorization: 'FLWSECK-7519df57530ddcd0dfe88c4890c45118-X', // flutterwave api key
        },
            body: JSON.stringify(data),
        })
            .then((response) => response.json()).then(response =>{
                const db = getFirestore()  
                addDoc( collection(db,"transactions"),{response})
            })
            .then((response) => {
                let myTimeOut = setTimeout(Alert.alert('Transaction has been Successful'), 3000 )   
                console.log('Success:', response);
                myTimeOut
                clearTimeout(myTimeOut)
            
        
              })
              .catch((error) => {
                console.error('Error:', error);
              });
        
    };

        //      let res = await fetch(`https://api.paystack.co/bank/resolve?account_number=${data.account_number}&bank_code=058`, {
        //         method: 'GET', // or 'PUT'
        //         headers: {
        //             'Content-Type': 'application/json',
        //              Authorization: 'Bearer sk_test_13a5d6840300b7d06060486282eefc9cbb8d9a34', // flutterwave api key
        //         }
        // })

        //     console.log(await res.json());

        //     await fetch()

           
   }
    return (
        <View style={styles.container}>
            <TextInput placeholder='Enter Number' style={styles.input}  onChangeText={handleOnChangeText} 
            
        />
        <Text style={styles.line}></Text>

        {/* <TouchableOpacity style={styles.button}  >
					<Text style={styles.buttonText}>Transfer</Text>
		</TouchableOpacity> */}

        </View>
    )
}

export default TransferMtnMomo;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: 'lightgrey',
        marginTop: 25,
        marginHorizontal:20,
        // borderColor: 'grey',
        // borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5
    },

    input:{
        
        // borderWidth: 1,
    
        marginBottom: 10
        
        
    }, 
    line: {
		width: '100%',
		height: 2,
		backgroundColor: 'purple',
        marginBottom: 40
	},
    button:{
        width: '100%',
		height: 50,
		backgroundColor: 'purple',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
        marginVertical: 70
    },
    buttonText: {
		color: 'white',
		fontSize: 15,
	},
    
})
