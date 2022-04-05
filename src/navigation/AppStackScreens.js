import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import MainStackScreens from './MainStackScreens';
import AuthStackScreens from './AuthStackScreens';
import NotificationsScreen from '../screens/general_screens/NotificationsScreen';
import PaymentScreen from '../screens/general_screens/PaymentScreen';
import TestimonyScreen from '../screens/general_screens/TestimonyScreen';

const AppStackScreens = (props) => {

    const AppStack = createStackNavigator();

    const user = {
        isAuthenticated: true
    }

    return (
        <AppStack.Navigator headerMode='none'>
            <AppStack.Screen name='Main' component={MainStackScreens} />
            <AppStack.Screen name='notifications' component={NotificationsScreen} />
            <AppStack.Screen name='payment' component={PaymentScreen} />
            <AppStack.Screen name='all_testimonies' component={TestimonyScreen} />
            {/* {user.isAuthenticated
                ? <AppStack.Screen name='Main' component={MainStackScreens} />
                : <AppStack.Screen name='Auth' component={AuthStackScreens} />
            } */}
        </AppStack.Navigator>
    )
}

export default AppStackScreens

