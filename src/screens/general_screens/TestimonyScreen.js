import React from 'react';
import { connect } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { Image, ScrollView, StyleSheet, View, Dimensions, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.development';
import Header from '../../components/Header';
import SectionHeader from '../../components/SectionHeader';
import PrayerRequestItem from '../../components/PrayerRequestItem';
import PublicPrayerRequest from '../../components/PublicPrayerRequest';

const { height, width } = Dimensions.get('window');

const TestimonyScreen = (props) => {

    const { colors } = useTheme();
    const { navigation } = props;
    const [openForm, setOpenForm] = useState(false)


    return (
        <>
            <View>
                <Header alt />
            </View>




            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >

                <ScrollView alwaysBounceVertical style={{ minHeight: height, backgroundColor: colors.primaryBackground, }}>




                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 30 }}>
                        {props.site.testimonies.map((item, index) => (
                            <PublicPrayerRequest key={index} testimony={item} />
                        ))}
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
});


export default connect(mapStateToProps, mapDispatchToProps)(TestimonyScreen);




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
