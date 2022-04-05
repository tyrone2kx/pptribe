import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import { setError, showSiteModal } from '../../actions/site';
import { changePassword } from '../../actions/user';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Header from '../../components/Header'
import SectionHeader from '../../components/SectionHeader'





const { height, width } = Dimensions.get('window');

const ChangePasswordScreen = (props) => {

    const { colors } = useTheme();
    const tabBarHeight = useBottomTabBarHeight();
    const { navigation } = props;

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordAgain, setNewPasswordAgain] = useState('');




    
    const onSubmit = () => {
        if (!oldPassword) {
            props.setError('Please enter a valid password.');
            props.showSiteModal();
        }
        else if (!newPassword) {
            props.setError('Please enter a new password.');
            props.showSiteModal();
        }
        else if (!newPasswordAgain) {
            props.setError('Please enter the new password again.');
            props.showSiteModal();
        }
        else if (newPasswordAgain !== newPassword) {
            props.setError('Both password fields does not match.');
            props.showSiteModal();
        }
        
        else {
            props.changePassword(oldPassword, newPassword);
        }
    }





    return (
        <>
        <View>
                <Header alt />
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >

                <ScrollView alwaysBounceVertical style={{ backgroundColor: colors.primaryBackground, minHeight: height }} >
                    <View style={{ ...styles.pageContainer, backgroundColor: colors.primaryBackground, paddingTop: 30, marginBottom: tabBarHeight * 2 }}>

                        <View style={{ ...styles.formContainer, backgroundColor: colors.primaryContainerColor }}>

                            <View style={{ padding: 20, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <SectionHeader title='Change Password' />
                            </View>


                            <View style={{ width: '100%', paddingVertical: 10, justifyContent: 'center' }}>
                                <TextInput
                                    placeholder='Old Password'
                                    secureTextEntry
                                    onChangeText={setOldPassword}
                                    placeholderTextColor={colors.secondaryTextColor}
                                    style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}

                                />
                                
                                <TextInput
                                    placeholder='New Password'
                                    secureTextEntry
                                    onChangeText={setNewPassword}
                                    placeholderTextColor={colors.secondaryTextColor}
                                    style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}

                                />



                                <TextInput
                                    placeholder='Confirm Password'
                                    secureTextEntry
                                    onChangeText={setNewPasswordAgain}
                                    placeholderTextColor={colors.secondaryTextColor}
                                    style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}
                                />

                                <TouchableOpacity activeOpacity={0.5} style={{ ...styles.button, backgroundColor: colors.blue, }} onPress={() => navigation.navigate('dashboard')}>
                                    <Text style={{ color: '#FFF' }}>SAVE CHANGES</Text>
                                </TouchableOpacity>


                            </View>

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
    cart: state.cart
});



const mapDispatchToProps = (dispatch) => ({
    setError: (data) => dispatch(setError(data)),
    showSiteModal: () => dispatch(showSiteModal()),
    changePassword: (old, password) => dispatch(changePassword(old, password))
});


export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordScreen);


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
    },})
