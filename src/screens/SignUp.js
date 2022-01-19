import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../../config/firebase';
import {Form, Button, Alert, StyleSheet, Text, View, TextInput, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';


const SignupScreen = ({navigation} ) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
    const [loginError, setLoginError] = useState('');


    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
          setRightIcon('eye-off');
          setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off') {
          setRightIcon('eye');
          setPasswordVisibility(!passwordVisibility);
        }
      };
    

    
    
    
    function handleLogin(){
        navigation.navigate('SigninScreen')
    }

    function handleonSubmit(){
        const auth= getAuth(app)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        navigation.navigate('SigninScreen')

    })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    // ..
  });
    }  
    
    
   
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.heading}>Sign up</Text>
            {/* <View>
                <TextInput style={styles.input} type='text'  name='companyname' placeholder='Company Name' />
                <Text style={styles.line}></Text>
            </View> */}
            <View>
                <TextInput leftIcon='email' style={styles.input} value={email}  name='email' placeholder='Email' onChangeText={text => setEmail(text)}/>
                <Text style={styles.line}></Text>
               
            </View>
            <View>
                <TextInput leftIcon='lock' style={styles.input} value={password} type='password' placeholder='Password' onChangeText={text => setPassword(text)} secureTextEntry={passwordVisibility} textContentType='password' rightIcon={rightIcon}/>
                <Text style={styles.line}></Text>
            </View>
            
            
                <TouchableOpacity style={styles.button} onPress={handleonSubmit} >
					<Text style={styles.buttonText}>Sign up</Text>
				</TouchableOpacity>
            

            <TouchableOpacity onPress={handleLogin }>
                <Text>Already have an account?    <Text style={styles.login}>Log in</Text></Text>
            </TouchableOpacity>
            
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 25,
        marginHorizontal:20,
        // borderColor: 'grey',
        // borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5
    },

    heading:{
        fontSize: 50,
        marginTop: 50,
        marginBottom: 100,
        color: 'purple'
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

    forgotpass:{
        alignSelf: 'flex-end',
        color:'purple'
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
    login:{
        color: 'purple',
        
    }
})



export default SignupScreen;