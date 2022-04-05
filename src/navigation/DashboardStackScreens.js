import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/general_screens/HomeScreen';
import AuthStackScreens from './AuthStackScreens';
import DashboardScreen from '../screens/user_screens/DashboardScreen';
import PrayerRequestScreen from '../screens/user_screens/PrayerRequestScreen';
import UserTestimonyScreen from '../screens/user_screens/UserTestimonyScreen';
import EditProfileScreen from '../screens/user_screens/EditProfileScreen';
import ChangePasswordScreen from '../screens/user_screens/ChangePasswordScreen';
import EditPrayerRequestScreen from '../screens/user_screens/EditPrayerRequestScreen';
import EditTestimonyScreen from '../screens/user_screens/EditTestimonyScreen';



const DashboardStackScreens = (props) => {

    const DashboardStack = createStackNavigator();


    return (
        <DashboardStack.Navigator headerMode='none'>
            <DashboardStack.Screen name='auth' component={AuthStackScreens} />
            <DashboardStack.Screen name='dashboard' component={DashboardScreen} />
            <DashboardStack.Screen name='prayerRequest' component={PrayerRequestScreen} />
            <DashboardStack.Screen name='userTestimony' component={UserTestimonyScreen} />
            <DashboardStack.Screen name='editProfile' component={EditProfileScreen} />
            <DashboardStack.Screen name='change-password' component={ChangePasswordScreen} />
            <DashboardStack.Screen name='editPrayerRequest' component={EditPrayerRequestScreen} />
            <DashboardStack.Screen name='editTestimony' component={EditTestimonyScreen} />
        </DashboardStack.Navigator>
    )
}

export default DashboardStackScreens

