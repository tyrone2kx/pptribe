import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Header from '../../components/Header'
import SectionHeader from '../../components/SectionHeader'






const { height, width } = Dimensions.get('window');

const SignUpScreen = (props) => {

    const { colors } = useTheme();
    const tabBarHeight = useBottomTabBarHeight();
    const { navigation } = props;

    const [gender, setGender] = useState('');


    return (
        <>
            {/* <View>
                <Header />
            </View> */}
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >

                <ScrollView alwaysBounceVertical >
                    <View style={{ ...styles.pageContainer, backgroundColor: colors.primaryBackground, paddingTop: tabBarHeight }}>

                        <View style={{ ...styles.formContainer, backgroundColor: colors.primaryContainerColor }}>

                            <View style={{ padding: 20, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <SectionHeader title='Sign Up' />
                            </View>


                            <View style={{ width: '100%', paddingVertical: 10, justifyContent: 'center' }}>
                                <TextInput
                                    placeholder='Fullname'
                                    placeholderTextColor={colors.secondaryTextColor}
                                    style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}
                                />



                                <View
                                    style={{ ...styles.genderInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}
                                >
                                    <TouchableOpacity style={{ ...styles.genderItem, borderRightWidth: 1, borderRightColor: colors.primaryBorderColor }} onPress={() => setGender('male')}>
                                        <Ionicons name='ios-man' size={28} color={gender === 'male' ? colors.blue : colors.primaryTextColor} />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ ...styles.genderItem, borderLeftWidth: 1, borderLeftColor: colors.primaryBorderColor  }} onPress={() => setGender('female')}>
                                        <Ionicons name='ios-woman' size={28} color={gender === 'female' ? colors.blue : colors.primaryTextColor} />
                                    </TouchableOpacity>
                                </View>


                                <TextInput
                                    placeholder='City'
                                    placeholderTextColor={colors.secondaryTextColor}
                                    style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}
                                />


                                <TextInput
                                    placeholder='State'
                                    placeholderTextColor={colors.secondaryTextColor}
                                    style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}
                                />


                                <TextInput
                                    placeholder='Country'
                                    placeholderTextColor={colors.secondaryTextColor}
                                    style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}
                                />


                                <TextInput
                                    placeholder='Phone Number'
                                    keyboardType='decimal-pad'
                                    placeholderTextColor={colors.secondaryTextColor}
                                    style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}
                                />

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

                                <TouchableOpacity activeOpacity={0.5} style={{ ...styles.button, backgroundColor: colors.blue, }}  onPress={() => navigation.navigate('dashboard')}>
                                    <Text style={{ color: '#FFF' }}>CREATE ACCOUNT</Text>
                                </TouchableOpacity>

                                <View style={{ marginTop: 20, alignItems: 'center' }}>
                                    <TouchableOpacity>
                                        <Text style={{ color: colors.green }}>Forgot Password?</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ marginTop: 10 }} onPress={() => navigation.navigate('login')}>
                                        <Text style={{ color: colors.secondaryTextColor }}>Already have an account? <Text style={{ color: colors.green }}>Login Here.</Text></Text>
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

export default SignUpScreen

const styles = StyleSheet.create({
    pageContainer: {
        width,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 30,
    },
    formContainer: {
        width: '90%',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
    },
    textInput: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20
    },
    button: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    genderInput: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        flexDirection: 'row',
        marginBottom: 20
    },
    genderItem: {
        width: '50%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
