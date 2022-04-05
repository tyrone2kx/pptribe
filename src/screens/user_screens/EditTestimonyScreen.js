import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { Image, ScrollView, StyleSheet, View, Dimensions, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.development';
import Header from '../../components/Header';
import SectionHeader from '../../components/SectionHeader';
import PrayerRequestItem from '../../components/PrayerRequestItem';
import { hideSiteModal, setError, setResult, setSuccess, showSiteModal, startLoading, stopLoading } from '../../actions/site';
import api from '../../api/api'

const { height, width } = Dimensions.get('window');

const EditTestimonyScreen = (props) => {

    const id = navigation.getParam('id');

  

    const fetchTestimony = () => {
        api.post('fetch_single_testimony', { id }).then(response => {
            const ref = response.data;
            props.stopLoading()
            if (ref.success === true) {
                setDescription(ref.testimony.description)
                setTitle(ref.testimony.title)
            }
            else {
                props.setError(ref.message)
            }
        }).catch(e => {
            console.log(e)
            props.stopLoading()
            props.setError('An API error occurred. Please check your network connection.')
        })
    }


    useEffect(() => {
        if (!id) {
            navigation.goBack();
        }
        else {
            fetchTestimony();
        }
    },[])



    const { colors } = useTheme();
    const tabBarHeight = useBottomTabBarHeight();
    const { navigation } = props;
    const [openForm, setOpenForm] = useState(false)


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');



    const editPrayerRequest = () => {
        api.post('edit_testimony', { title, description, id }).then(response => {
            const ref = response.data;
            props.stopLoading()
            if (ref.success === true) {
                props.setSuccess('Your request has been added successfully.')
            }
            else {
                props.setError(ref.message)
            }
        }).catch(e => {
            console.log(e)
            props.stopLoading()
            props.setError('An API error occurred. Please check your network connection.')
        })
    }





    const onSubmit = () => {
        props.showSiteModal();
        if (!title) {
            props.setError('Please enter a valid title.');
        }
        else if (!description) {
            props.setError('Please enter your prayer request.');
        }
        else {
            props.startLoading();
            editPrayerRequest();
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

                <ScrollView alwaysBounceVertical style={{ minHeight: height, backgroundColor: colors.primaryBackground, }}>

                    <View style={{ width: '90%', alignSelf: 'center', marginBottom: 30, marginTop: 20 }}>
                        
                    </View>

                        <View style={{ ...styles.pageContainer, backgroundColor: colors.primaryBackground, paddingTop: tabBarHeight }}>

                            <View style={{ ...styles.formContainer, backgroundColor: colors.primaryContainerColor }}>


                                <View style={{ width: '100%', paddingVertical: 10, justifyContent: 'center' }}>
                                    <TextInput
                                        placeholder='Title'
                                        onChangeText={setTitle}
                                        placeholderTextColor={colors.secondaryTextColor}
                                        style={{ ...styles.textInput, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}
                                    />


                                    <TextInput
                                        placeholder='Description'
                                        onChangeText={setDescription}
                                        multiline={true}
                                        numberOfLines={5}
                                        placeholderTextColor={colors.secondaryTextColor}
                                        style={{ ...styles.textInput, height: 150, backgroundColor: colors.secondaryContainerColor, color: colors.secondaryTextColor, borderColor: colors.primaryLineColor }}
                                    />

                                    <TouchableOpacity activeOpacity={0.5} style={{ ...styles.button, backgroundColor: colors.green, }} onPress={() => navigation.navigate('dashboard')}>
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
});



const mapDispatchToProps = (dispatch) => ({
    setError: (data) => dispatch(setError(data)),
    setSuccess: (data) => dispatch(setSuccess(data)),
    showSiteModal: () => dispatch(showSiteModal()),
    hideSiteModal: () => dispatch(hideSiteModal()),
    startLoading: () => dispatch(startLoading()),
    stopLoading: () => dispatch(stopLoading()),
});


export default connect(mapStateToProps, mapDispatchToProps)(EditTestimonyScreen);

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
    addTestimonyBtn: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
