import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Header from '../../components/Header'
import SectionHeader from '../../components/SectionHeader'






const { height, width } = Dimensions.get('window');

const LoginScreen = (props) => {

    const { colors } = useTheme();
    const tabBarHeight = useBottomTabBarHeight();

    const { navigation } = props;

    return (
        <>
            {/* <View>
                <Header />
            </View> */}
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >

                <ScrollView>
                    <View style={{ ...styles.pageContainer, backgroundColor: colors.primaryBackground, height: height - tabBarHeight }}>
                        <View style={{ ...styles.formContainer, backgroundColor: colors.primaryContainerColor }}>


                            <View style={{ padding: 20, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <SectionHeader title='Login' />
                            </View>

                            <View style={{ width: '100%', height: '85%', paddingVertical: 20, justifyContent: 'center' }}>
                                <TextInput
                                    placeholder='Email'
                                    keyboardType='email-address'
                                    placeholderTextColor={colors.secondaryTextColor}
                                    style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}
                                />

                                <TextInput
                                    placeholder='Password'
                                    secureTextEntry
                                    placeholderTextColor={colors.secondaryTextColor}
                                    style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}
                                />

                                <TouchableOpacity activeOpacity={0.5} style={{ ...styles.button, backgroundColor: colors.blue, }}>
                                    <Text style={{ color: '#FFF' }}>LOGIN</Text>
                                </TouchableOpacity>

                                <View style={{ marginTop: 20, alignItems: 'center' }}>
                                    <TouchableOpacity  onPress={() => navigation.navigate('forgot_password')}>
                                        <Text style={{ color: colors.green }}>Forgot Password?</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ marginTop: 10 }} onPress={() => navigation.navigate('sign_up')}>
                                        <Text style={{ color: colors.secondaryTextColor }}>Don't have an account? <Text style={{ color: colors.green }}>Sign Up</Text></Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </View>
                </ScrollView>

            </KeyboardAvoidingView>
        </>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    pageContainer: {
        height,
        width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        height: '75%',
        width: '90%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    textInput: {
        width: '100%',
        height: '20%',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20
    },
    button: {
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
