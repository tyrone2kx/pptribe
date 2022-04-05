import React from 'react'
import { ScrollView, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Header from '../../components/Header'
import SectionHeader from '../../components/SectionHeader';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'




const { height, width } = Dimensions.get('window');

const DashboardScreen = (props) => {


    const { colors } = useTheme();
    const tabBarHeight = useBottomTabBarHeight();
    const { navigation } = props;

    return (
        <>
            <View>
                <Header />
            </View>
            <ScrollView contentContainerStyle={{ backgroundColor: colors.primaryBackground, minHeight: height }}>
                <View style={{ ...styles.imageContainer }}>
                    <View style={{ ...styles.picHolder }}>
                        <Image style={{ ...styles.profilePic }} source={{ uri: 'http://picsum.photos/100/100' }} />
                    </View>
                    <View style={{ width, marginTop: 20 }}>
                        <SectionHeader title='Tyrone Stevens' />
                    </View>
                </View>


                <View style={{ backgroundColor: colors.primaryBackground, flexDirection: 'row', }}>
                    <View style={{ backgroundColor: colors.primaryContainerColor, width, justifyContent: 'center', paddingVertical: 40 }}>
                        <View style={{ ...styles.iconSection }}>
                            <TouchableOpacity style={{ ...styles.SingleContainer, backgroundColor: colors.secondaryContainerColor, shadowColor: colors.shadowColor, }} onPress={() => navigation.navigate('editProfile')} activeOpacity={0.6}>
                                <FontAwesome5 name='user-edit' size={40} color={colors.blue} />
                                <Text style={{ color: colors.primaryTextColor }}>Edit Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ ...styles.SingleContainer, backgroundColor: colors.secondaryContainerColor, shadowColor: colors.shadowColor, }} onPress={() => navigation.navigate('userTestimony')} activeOpacity={0.6}>
                                <FontAwesome5 name='hands' size={40} color={colors.purple} />
                                <Text style={{ color: colors.primaryTextColor }}>Testimonies</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ ...styles.iconSection }}>
                            <TouchableOpacity style={{ ...styles.SingleContainer, backgroundColor: colors.secondaryContainerColor, shadowColor: colors.shadowColor, }} activeOpacity={0.6} onPress={() => navigation.navigate('prayerRequest')}>
                                <FontAwesome5 name='praying-hands' size={40} color={colors.orange} />
                                <Text style={{ color: colors.primaryTextColor }}>Prayer Request</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ ...styles.SingleContainer, backgroundColor: colors.secondaryContainerColor, shadowColor: colors.shadowColor, }} activeOpacity={0.6} onPress={() => navigation.navigate('payment')}>
                                <FontAwesome5 name='hand-holding-usd' size={40} color={colors.green} />
                                <Text style={{ color: colors.primaryTextColor }}>Give</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default DashboardScreen

const styles = StyleSheet.create({
    imageContainer: {
        width,
        height: 300,
        alignItems: 'center',
        paddingVertical: 20
    },
    picHolder: {
        height: 150,
        width: 150,
    },
    profilePic: {
        height: '100%',
        width: '100%',
        borderRadius: 100
    },
    iconSection: {
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: 'space-around'
    },
    SingleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '30%',
        height: 110,
        alignItems: 'center',
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.3,
        elevation: 11,
    },
})
