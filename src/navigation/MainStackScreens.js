import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import GeneralDrawerScreens from './GeneralDrawerScreens';
import LandingScreen from '../screens/general_screens/LandingScreen';
import BottomStackScreens from './BottomStackScreens';

const MainStackScreens = (props) => {

    const MainStack = createStackNavigator();


    return (
        <MainStack.Navigator headerMode='none'>
            <MainStack.Screen name='landing' component={LandingScreen} />
            <MainStack.Screen name='home' component={BottomStackScreens} />
            <MainStack.Screen name='sidebar' component={GeneralDrawerScreens} />
        </MainStack.Navigator>
    )
}

export default MainStackScreens

