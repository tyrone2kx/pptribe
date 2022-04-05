import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MenuScreen from '../screens/general_screens/MenuScreen';



const MenuStackScreens = (props) => {

    const MenuStack = createStackNavigator();


    return (
        <MenuStack.Navigator headerMode='none'>
            <MenuStack.Screen name='menu' component={MenuScreen} />
        </MenuStack.Navigator>
    )
}

export default MenuStackScreens

