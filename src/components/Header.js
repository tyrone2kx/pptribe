import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, View, Switch, SafeAreaView,Platform, StatusBar, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native'
import { setTheme } from '../actions/site';

const Header = (props) => {
    const { colors } = useTheme();


    const defaultTheme = props.site.theme === 'light' ? false : true;
    const navigation = useNavigation();

    const [isEnabled, setIsEnabled] = useState(defaultTheme);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);




    useEffect(() => {
        if (isEnabled) {
            props.setTheme('dark')
        }
        if (isEnabled === false) {
            props.setTheme('light')
        }
    }, [isEnabled])




    return (
        <>
        <StatusBar backgroundColor={colors.primaryHeaderColor} barStyle={props.site.theme === 'light' ? 'dark-content' : 'light-content'}  />
            <SafeAreaView style={{ backgroundColor: colors.primaryHeaderColor, color: colors.primaryTextColor, ...styles.safeArea }} />
            <View style={{ ...styles.header, backgroundColor: colors.primaryHeaderColor, borderBottomColor: colors.primaryBorderColor }}>

                {props.alt ? <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesome5 name='chevron-left' size={24} color={colors.primaryTextColor} /></TouchableOpacity>
                : <TouchableOpacity onPress={() => navigation.navigate('notifications')}><Ionicons name='ios-notifications' size={30} color={colors.primaryTextColor} /></TouchableOpacity>}

                <Text style={{ ...styles.logo, color: colors.primaryTextColor }}>PPTribe</Text>
                <Switch
                    style={{ height: '100%' }}
                    trackColor={{ false: "#767577", true: "#f2f2f2" }}
                    thumbColor={isEnabled ? "#666" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        height: 50
    },
    logo: {
        fontSize: 18
    },
    safeArea: {
        flex: 1,
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})

const mapDispatchToProps = (dispatch) => ({
    setTheme: (theme) => dispatch(setTheme(theme))
})

const mapStateToProps = (state) => ({
    user: state.user,
    site: state.site
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
