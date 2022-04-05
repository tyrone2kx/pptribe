import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/general_screens/HomeScreen';

const GeneralDrawerScreens = (props) => {

    const GeneralStack = createStackNavigator();


    return (
        <GeneralStack.Navigator headerMode='none'>
            <GeneralStack.Screen name='home' component={HomeScreen} />
        </GeneralStack.Navigator>
    )
}

export default GeneralDrawerScreens

