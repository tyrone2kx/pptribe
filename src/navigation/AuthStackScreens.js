import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import GeneralDrawerScreens from './GeneralDrawerScreens';
import LandingScreen from '../screens/general_screens/LandingScreen';
import LoginScreen from '../screens/auth_screens/LoginScreen';
import SignUpScreen from '../screens/auth_screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/auth_screens/ForgotPasswordScreen';
import ConfirmationCodeScreen from '../screens/auth_screens/ConfirmationCodeScreen';
import ResetPasswordScreen from '../screens/auth_screens/ResetPasswordScreen';

const AuthStackScreens = (props) => {

    const AuthStack = createStackNavigator();

    return (
        <AuthStack.Navigator headerMode='none'>
            {/* <AuthStack.Screen name='landing' component={LandingScreen} /> */}
            <AuthStack.Screen name='login' component={LoginScreen} />
            <AuthStack.Screen name='forgot_password' component={ForgotPasswordScreen} />
            <AuthStack.Screen name='sign_up' component={SignUpScreen} />
            <AuthStack.Screen name='confirm_code' component={ConfirmationCodeScreen} />
            <AuthStack.Screen name='reset_password' component={ResetPasswordScreen} />
        </AuthStack.Navigator>
    )
}

export default AuthStackScreens

