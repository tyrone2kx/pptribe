import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { hideSiteModal, setError, setResult, setSuccess, showSiteModal, startLoading, stopLoading } from '../../actions/site';
import api from '../../api/api'
import { forgotPassword, confirmResetCode, login } from '../../actions/user';
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Header from '../../components/Header'
import SectionHeader from '../../components/SectionHeader'






const { height, width } = Dimensions.get('window');

const ConfirmationCodeScreen = (props) => {

    const { colors } = useTheme();
    const tabBarHeight = useBottomTabBarHeight();

    const { navigation } = props;

    const [code, setCode] = useState('');


    const onCodeSubmit = () => {

        if (!code) {
            props.setError('Please enter the reset code that was sent to your email.');
            props.showSiteModal();
        } else {
            props.confirmResetCode(code)
        }
    }

    const onResendCode = () => {
        props.forgotPassword(props.user.email)
    }


    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >

                <ScrollView>
                    <View style={{ ...styles.pageContainer, backgroundColor: colors.primaryBackground, height: height - tabBarHeight }}>
                        <View style={{ ...styles.formContainer, backgroundColor: colors.primaryContainerColor }}>


                            <>
                                <View style={{ padding: 20, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <SectionHeader title='Confirm Reset Code' />
                                </View>

                                <View style={{ width: '100%', height: '85%', paddingVertical: 20, justifyContent: 'center' }}>
                                    <TextInput
                                        placeholder='Enter 6-digit Code'
                                        keyboardType='decimal-pad'
                                        onChangeText={setCode}
                                        placeholderTextColor={colors.secondaryTextColor}
                                        style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}
                                    />

                                    <TouchableOpacity activeOpacity={0.5} style={{ ...styles.button, backgroundColor: colors.blue, }}>
                                        <Text style={{ color: '#FFF' }}>SUBMIT</Text>
                                    </TouchableOpacity>

                                    <View style={{ marginTop: 20, alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('login')}>
                                            <Text style={{ color: colors.green }}>Resend Code</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </>

                        </View>
                    </View>
                </ScrollView>

            </KeyboardAvoidingView>
        </>
    )
}



const mapStateToProps = (state) => ({
    site: state.site,
    user: state.user,
});



const mapDispatchToProps = (dispatch) => ({
    setError: (data) => dispatch(setError(data)),
    setSuccess: (data) => dispatch(setSuccess(data)),
    showSiteModal: () => dispatch(showSiteModal()),
    hideSiteModal: () => dispatch(hideSiteModal()),
    startLoading: () => dispatch(startLoading()),
    stopLoading: () => dispatch(stopLoading()),
    confirmResetCode: (code) => dispatch(confirmResetCode(code)),
    forgotPassword: (email) => dispatch(forgotPassword(email)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationCodeScreen);



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
