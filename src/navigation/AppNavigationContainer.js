import React, { useEffect } from 'react'
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native'
import { useColorScheme } from 'react-native-appearance';
import { connect } from 'react-redux'
import AppStackScreens from './AppStackScreens'
import { darkColors, lightColors } from '../theme/customThemes'
import { setTheme } from '../actions/site';

const AppNavigationContainer = (props) => {

    const customDarkTheme = {
        ...DarkTheme,
        colors: {
            ...DarkTheme.colors,
            ...darkColors
        }
    }


    const customDefaultTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            ...lightColors
        }
    }


    const colorScheme = useColorScheme();

    
    useEffect(() => {
        if (props.site.theme === undefined) {
            props.setTheme(colorScheme)
        }
    }, [props.site.theme])


    let currentTheme = props.site.theme;




    return (
        <NavigationContainer theme={currentTheme === 'dark' ? customDarkTheme : customDefaultTheme}>
            <AppStackScreens />
        </NavigationContainer>
    )
}

const mapStateToProps = (state) => ({
    site: state.site
})


const mapDispatchToProps = (dispatch) => ({
    setTheme:(theme) => dispatch(setTheme(theme))
})

export default connect(mapStateToProps,mapDispatchToProps)(AppNavigationContainer)

