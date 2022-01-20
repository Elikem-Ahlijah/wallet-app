import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MtnMomoPage from '../screens/MtnMomoPage'
import ReceiveMtnMomo from '../screens/ReceiveMtnMomo';
import TransferMtnMomo from '../screens/TransferMtnMomo';
import WalletPage from '../screens/WalletPage';
import MobileMoneyPage from '../screens/MobileMoneyPage';
import SigninScreen from '../screens/Login';
import SignupScreen from '../screens/SignUp';
import HomeScreen from '../screens/HomeScreen';
import TransactionsList from '../screens/TransactionsList';




const Stack = createNativeStackNavigator()


const Routes = () => {
    return (
        <Stack.Navigator screenOptions={{
            // header: () => null,
            headerStyle: {
                backgroundColor: 'purple',
              
            },
            headerTitleStyle: {
                color: 'white',
            },
            headerTintColor: 'white'
          
        }}>
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ title: 'Signup' }}/>
        <Stack.Screen name="SigninScreen" component={SigninScreen} options={{ title: 'Signin' }}/>  
        <Stack.Screen name="HomeScreen" component={HomeScreen}/> 
        <Stack.Screen name='Wallet' component={WalletPage}></Stack.Screen>
        <Stack.Screen name='Mobile Money' component={MobileMoneyPage}></Stack.Screen>
        <Stack.Screen name='MTN Mobile Money' component={MtnMomoPage}></Stack.Screen>
        <Stack.Screen name='Receive MTN Payment' component={ReceiveMtnMomo}></Stack.Screen>
        <Stack.Screen name='Send MTN Momo' component={TransferMtnMomo}></Stack.Screen>
        <Stack.Screen name='Transactions' component={TransactionsList}></Stack.Screen>
</Stack.Navigator>
    )
}

export default Routes

const styles = StyleSheet.create({})
