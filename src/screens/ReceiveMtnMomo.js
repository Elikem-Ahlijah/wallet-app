import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import  RNWeb from '../../RNWeb';

const ReceiveMtnMomo = () => {
    const [momoUri, setMomoUri] = useState(null);

  

  //After we create a data object with info to be submitted to the Api
  //Note that the txt_ref has to be unique for every transaction. Thats why
  //we're using math.random to add a random number.

  //We then make a post request to the flutterwave api with the data using fetch
  //the response contains a url we have to use to confirm the request
  //we then update our url state with the url from the response
  function handleOnChangeText(text) {
    if (text.length === 10) {
      let data = {

        
        // tx_ref: 'AW-15' + (1000 + Math.floor(Math.random * 100000)),
        // amount: '20',
        // currency: 'GHS',
        // network: 'MTN',
        // email: 'agbenyame@gmail.com',
        // phone_number: text,
        // redirect_url: 'https://codetraingh.com',

        amount: 50,
        email: "customer@email.com",
        currency: "GHS",
        mobile_money: {
        phone : text,
        provider : "mtn"
      
    }

        
      };

      fetch('https://api.paystack.co/charge', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer sk_test_13a5d6840300b7d06060486282eefc9cbb8d9a34', 
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          alert('Transaction was Successful')
          // setMomoUri(data.meta.authorization.redirect);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }

  // a function to be called when the payment is completed
  // you can do anything you want after successfull payment like
  //navigating to a new screen etc.
  function closeWebView() {
    setMomoUri(null);
  }
    return (
        <View style={styles.container}>
      {/* Input field for users to enter their momo number */}
      <TextInput
        onChangeText={handleOnChangeText}
        style={styles.input}
        placeholder='Enter Number'
      />
      <Text style={styles.line}></Text>

      {/* We display a webview for momo authorization if we have a valid url from
      the flutterwave api. Remember, we get a valid url from the response in
      handleOnchangeText above */}
      {momoUri !== null && <RNWeb uri={momoUri} closeWebView={closeWebView} />}
    </View>
    )
}

export default ReceiveMtnMomo;

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
    card:{
        
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
})
