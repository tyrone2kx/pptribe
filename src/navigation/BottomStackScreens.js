import React from 'react'
import { connect } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/general_screens/HomeScreen';
import { useTheme } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import RadioScreen from '../screens/general_screens/RadioScreen';
import VideosScreen from '../screens/general_screens/VideosScreen';
import MenuScreen from '../screens/general_screens/MenuScreen';
import DashboardScreen from '../screens/user_screens/DashboardScreen';
import DashboardStackScreens from './DashboardStackScreens';
import NotificationsScreen from '../screens/general_screens/NotificationsScreen';
import MenuStackScreens from './MenuStackScreens';

const BottomStackScreens = (props) => {
    const BottomStack = createBottomTabNavigator();
    const { colors } = useTheme();

    const tabBarOpitons = {
        lazy: false,
        style: {
            backgroundColor: colors.primaryContainerColor
        }
    }

    const screenOptions = (({ route }) => ({
        tabBarIcon: ({ focused }) => {
            let iconName;

            switch (route.name) {
                case 'menu':
                    iconName = 'ios-menu'
                    break;

                case 'live':
                    iconName = 'ios-videocam'
                    break;

                case 'home':
                    iconName = 'ios-home'
                    break;

                case 'dashboard':
                    iconName = 'ios-person'
                    break;

                case 'radio':
                    iconName = 'ios-radio'
                    break;

                default:
                    iconName = ''
                    break;
            }

            return (
                <View style={focused
                    ? {
                        borderRadius: 50,
                        shadowColor: colors.shadowColor,
                        shadowOffset: { width: 0, height: 10 },
                        shadowRadius: 10,
                        shadowOpacity: 0.3,
                        elevation: 8,
                        textAlign: 'center',
                        width: 60,
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 30,
                        backgroundColor: colors.secondaryContainerColor
                    }
                    : null
                }>
                    <Ionicons name={iconName} size={30} color={focused ? colors.blue : colors.primaryTextColor} />
                </View>
            )
        },

        tabBarLabel: ({ focused }) => {
            let routeName;

            switch (route.name) {
                case 'menu':
                    routeName = 'Menu'
                    break;

                case 'live':
                    routeName = 'Live'
                    break;

                case 'home':
                    routeName = 'Home'
                    break;

                case 'dashboard':
                    routeName = props.user._id === '' ? 'Login' : 'Dashboard'
                    break;

                case 'radio':
                    routeName = 'TTC Radio'
                    break;
            }

            return focused ? (<Text style={{ color: colors.primaryTextColor, fontSize: 12 }}>{routeName}</Text>) : null
        }
    }))


    return (
        <BottomStack.Navigator tabBarOpitons={tabBarOpitons} screenOptions={screenOptions} initialRouteName='home'>
            <BottomStack.Screen name='menu' component={MenuStackScreens} />
            <BottomStack.Screen name='live' component={VideosScreen} />
            <BottomStack.Screen name='home' component={HomeScreen} />
            <BottomStack.Screen name='dashboard' component={DashboardStackScreens} />
            <BottomStack.Screen name='radio' component={RadioScreen} />
        </BottomStack.Navigator>
    )
}


const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps)(BottomStackScreens)

