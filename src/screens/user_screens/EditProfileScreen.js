import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { setError, showSiteModal } from '../../actions/site';
import { startEditUser } from '../../actions/user';
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Header from '../../components/Header'
import SectionHeader from '../../components/SectionHeader'






const { height, width } = Dimensions.get('window');

const EditProfileScreen = (props) => {

    const { colors } = useTheme();
    const tabBarHeight = useBottomTabBarHeight();
    const { navigation } = props;

    const [gender, setGender] = useState('');

    
    const [fullName, setFullName] = useState(props.user ? props.user.fullName : '')
    const [firstName, setFirstName] = useState(props.user ? props.user.firstName : '')
    const [lastName, setLastName] = useState(props.user ? props.user.lastName : '')
    const [phoneNo, setPhoneNo] = useState(props.user ? props.user.phoneNo : '')
    const [address, setAddress] = useState(props.user ? props.user.address : '')
    const [city, setCity] = useState(props.user ? props.user.city : '')
    const [state, setState] = useState(props.user ? props.user.state : '')
    const [country, setCountry] = useState(props.user ? props.user.country : 'Nigeria')

    
    const onSubmit = () => {
        props.showSiteModal();
        if (!firstName) {
            props.setError('Please enter a valid first name.');
        }
        else if (!lastName) {
            props.setError('Please enter a valid last name.');
        }
        else if (!phoneNo || isNaN(phoneNo)) {
            props.setError('Please enter a valid phone number.');
        }
        else if (!address) {
            props.setError('Please enter a valid address.');
        }
        else if (!city) {
            props.setError('Please enter a valid city.');
        }
        else if (!state) {
            props.setError('Please enter a valid state.');
        }
        else if (!country) {
            props.setError('Please enter a valid country.');
        }
        else {
            const update = { fullName, phoneNo, address, city, state, country }
            props.startEditUser(update);
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
                                <TouchableOpacity style={{ width: 150, height: 150, borderRadius: 100 }}>
                                    <Image source={{ uri: 'http://picsum.photos/150/150' }} style={{ width: '100%', height: '100%', borderRadius: 100 }} />
                                </TouchableOpacity>
                            </View>


                            <View style={{ width: '100%', paddingVertical: 10, justifyContent: 'center' }}>
                                <TextInput
                                    placeholder='Fullname'
                                    onChangeText={setFullName}
                                    placeholderTextColor={colors.secondaryTextColor}
                                    style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}

                                />



                                <TextInput
                                    placeholder='City'
                                    placeholderTextColor={colors.secondaryTextColor}
                                    onChangeText={setCity}
                                    style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}
                                />


                                <TextInput
                                    placeholder='State'
                                    onChangeText={setState}
                                    placeholderTextColor={colors.secondaryTextColor}
                                    style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}
                                />


                                <TextInput
                                    placeholder='Country'
                                    onChangeText={setCountry}
                                    placeholderTextColor={colors.secondaryTextColor}
                                    style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}
                                />


                                <TextInput
                                    placeholder='Phone Number'
                                    onChangeText={setPhoneNo}
                                    keyboardType='decimal-pad'
                                    placeholderTextColor={colors.secondaryTextColor}
                                    style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}
                                />

                                <TouchableOpacity activeOpacity={0.5} style={{ ...styles.button, backgroundColor: colors.blue, }} onPress={() => navigation.navigate('dashboard')}>
                                    <Text style={{ color: '#FFF' }}>SAVE CHANGES</Text>
                                </TouchableOpacity>

                                <View style={{ marginTop: 20, alignItems: 'center' }}>
                                    <TouchableOpacity  onPress={() => navigation.navigate('change-password')}>
                                        <Text style={{ color: colors.green }}>Change Password</Text>
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


const mapStateToProps = (state) => ({
    site: state.site,
    user: state.user,
    cart: state.cart
});



const mapDispatchToProps = (dispatch) => ({
    setError: (data) => dispatch(setError(data)),
    showSiteModal: () => dispatch(showSiteModal()),
    startEditUser: (updates) => dispatch(startEditUser(updates))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditProfileScreen);

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
