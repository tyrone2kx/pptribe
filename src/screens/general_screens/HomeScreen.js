import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import Header from '../../components/Header'
import TabBarHeight from '../../components/TabBarHeight'



const { height, width } = Dimensions.get('window');
const imbHeight = height / 3;

const HomeScreen = (props) => {
    const tabBarHeight = useBottomTabBarHeight();
    const { colors } = useTheme();
    const { navigation } = props;

    return (
        <>
            <View>
                <Header />


                <View style={{ backgroundColor: colors.blue, width, height: height - (tabBarHeight + 60), flexDirection: 'column', justifyContent: 'space-between' }}>

                    <View style={{ height: '40%', backgroundColor: colors.primaryBackground }}>
                        <ImageBackground source={require('../../../assets/homepic.png')} style={{ height: '100%', ...styles.hero }}>
                            <View style={{ flex: 1, ...styles.imageHolder }}>
                                <View style={{ backgroundColor: colors.primaryOverlayColor, padding: 20, borderRadius: 5, borderWidth: 1, borderColor: colors.primaryBorderColor }}>
                                    <Text style={{ color: colors.primaryTextColor, fontSize: 18 }}>Welcome to PPTribe</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>




                    <View style={{ borderBottomWidth: 5, borderBottomColor: colors.secondaryTextColor, height: '60%' }}>
                        <View style={styles.iconSection}>
                            <View activeOpacity={0.6} style={{ borderWidth: 5, borderBottomWidth: 0, borderColor: colors.primaryTextColor }}>
                                <View style={{ ...styles.imageBackground, shadowColor: colors.shadowColor, backgroundColor: colors.primaryContainerColor }}>
                                    <TouchableOpacity style={{ flex: 1, ...styles.imageHolder }} onPress={() => navigation.navigate('live')}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Ionicons name='ios-videocam' size={40} color={colors.pink} />
                                            <Text style={{ ...styles.title, color: colors.primaryTextColor }}>LIVE VIDEOS</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View activeOpacity={0.6} style={{ borderWidth: 5, borderBottomWidth: 0, borderColor: colors.primaryTextColor }}>
                                <View style={{ ...styles.imageBackground, shadowColor: colors.shadowColor, backgroundColor: colors.primaryContainerColor }}>
                                    <TouchableOpacity style={{ flex: 1, ...styles.imageHolder }} onPress={() => navigation.navigate('radio')}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Ionicons name='ios-radio' size={40} color={colors.orange} />
                                            <Text style={{ ...styles.title, color: colors.primaryTextColor }}>TTC RADIO</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>



                        <View style={styles.iconSection}>
                            <View activeOpacity={0.6} style={{ borderWidth: 5, borderBottomWidth: 0, borderColor: colors.primaryTextColor }}>
                                <View style={{ ...styles.imageBackground, shadowColor: colors.shadowColor, backgroundColor: colors.primaryContainerColor }}>
                                    <TouchableOpacity style={{ flex: 1, ...styles.imageHolder }} onPress={() => navigation.navigate('payment')}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Ionicons name='ios-cash' size={40} color={colors.green} />
                                            <Text style={{ ...styles.title, color: colors.primaryTextColor }}>GIVE</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View activeOpacity={0.6} style={{ borderWidth: 5, borderBottomWidth: 0, borderColor: colors.primaryTextColor }}>
                                <View style={{ ...styles.imageBackground, backgroundColor: colors.primaryContainerColor }}>
                                    <TouchableOpacity style={{ flex: 1, ...styles.imageHolder }} onPress={() => navigation.navigate('dashboard')}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Ionicons name='ios-person-add' size={40} color={colors.purple} />
                                            <Text style={{ ...styles.title, color: colors.primaryTextColor }}>JOIN US</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    imageBackground: {
        height: '100%',
        width: width / 2,
        elevation: 5,
        shadowOpacity: 0.3,
        shadowRadius: 50,
        shadowOffset: { width: 0, height: 10 },
    },
    iconSection: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '50%',
        width,
    },
    imageHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    hero: {
        resizeMode: 'cover'
    },

})
