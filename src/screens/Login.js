import React, { useState } from 'react';
// import firebase from "../../config/firebase";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../config/firebase';
import { Button, Alert, StyleSheet, Text, View, TextInput, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';




const SigninScreen = ( {navigation}) => {

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


    
    
    


    function handleonSubmit(){
        const auth= getAuth(app)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        navigation.navigate('HomeScreen')

    })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log( errorCode,errorMessage)
    // ..
        });
    } 
    
    // if (credentials.isLoading){
    //     return <h1>Loading...</h1>
    // }
    // //if a user is logged in
    // //redirect them to display
    
    
    

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            {/* <View>
                <TextInput style={styles.input} type='text'  name='companyname' placeholder='Company Name' />
                <Text style={styles.line}></Text>
            </View> */}
            <View>
                <TextInput leftIcon='email' style={styles.input} value={email} name='email' placeholder='Email' onChangeText={text => setEmail(text)} textContentType='emailAddress'/>
                <Text style={styles.line}></Text>
               
            </View>
            <View>
                <TextInput leftIcon='lock' style={styles.input} value={password} type='password' placeholder='Password' onChangeText={text => setPassword(text)} secureTextEntry={passwordVisibility} textContentType='password'/>
                <Text style={styles.line}> rightIcon={rightIcon}</Text>
            </View>
            
            <View>
                <TouchableOpacity style={styles.button} onPress={handleonSubmit} >
					<Text style={styles.buttonText}>Sign up</Text>
				</TouchableOpacity>
            </View>

           
            
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
        color: '#711be4',
        
    }
})


// class SigninScreen extends Component {
//   constructor() {
//     super();
//     this.state = { 
//       email: '', 
//       password: '',
//       isLoading: false
//     }
//   }

//   onTextChange = (val, prop) => {
//     const state = this.state;
//     state[prop] = val;
//     this.setState(state);
//   }

//   signIn = () => {

//     const auth = getAuth(app)
//     if(this.state.email === '' && this.state.password === '') {
//       Alert.alert('Enter correct details.')
//      } 
//      else {
//     //   this.setState({
//     //     isLoading: true,
//     //   })
//       signInWithEmailAndPassword(auth, this.state.email, this.state.password)
//       .then((res) => {
//         this.setState({
//           isLoading: false,
//           email: '', 
//           password: ''
//         })
//         alert('Logged in to app')
//       })
//       .catch(error => this.setState({ errorMessage: error.message }))
//     }
//   }

//   render() {
//     if(this.state.isLoading){
//       return(
//         <View style={styles.loading}>
//           <ActivityIndicator size="large" color="grey"/>
//         </View>
//       )
//     }    
//     return (
//       <View style={styles.formWrapper}> 
//         <TextInput
//           style={styles.formField}
//           placeholder="Email"
//           value={this.state.email}
//           onChangeText={(val) => this.onTextChange(val, 'email')}
//         />
//         <TextInput
//           style={styles.formField}
//           placeholder="Password"
//           value={this.state.password}
//           onChangeText={(val) => this.onTextChange(val, 'password')}
//           maxLength={20}
//           secureTextEntry={true}
//         />   
//         <Button
//           color="purple"
//           title="Login"
//           onPress={() => this.signIn()}
//         />

//         <Text 
//           style={styles.redirectText}
//           onPress={() => this.props.navigation.navigate('SignupScreen')}>
//           Don't have account ? Signup
//         </Text>                          
//       </View> 
//     );
//   }
// }

// const styles = StyleSheet.create({
//   formWrapper: {
//     flex: 1,
//     display: "flex",
//     justifyContent: "center",
//     padding: 30,
//     backgroundColor: '#fff',    
//     flexDirection: "column",
//   },
//   formField: {
//     width: '100%',
//     alignSelf: "center",
//     borderColor: "#444",
//     borderBottomWidth: 1,    
//     marginBottom: 20,
//     paddingBottom: 20,
//   },
//   redirectText: {
//     textAlign: 'center',
//     color: 'blue',
//     marginTop: 24,    
//   },
//   loading: {
//     position: 'absolute',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',    
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//   }
// });

export default SigninScreen;


