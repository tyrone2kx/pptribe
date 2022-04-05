import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground, Platform, ScrollView } from 'react-native'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native';
import Header from '../../components/Header';


const { height, width } = Dimensions.get('window');
const MenuScreen = (props) => {
    const { navigation } = props;
    const { colors } = useTheme();
    return (
        <ScrollView>
            <View style={{ height, width, backgroundColor: colors.primaryBackground, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ height: '100%', backgroundColor: colors.primaryContainerColor, width, justifyContent: 'center' }}>
                    <View style={{ ...styles.iconSection }}>
                        <TouchableOpacity style={{ ...styles.SingleContainer, backgroundColor: colors.secondaryContainerColor, shadowColor: colors.shadowColor, }} onPress={() => navigation.navigate('live')} activeOpacity={0.6}>
                            <Ionicons name='ios-videocam' size={40} color={colors.blue} />
                            <Text style={{ color: colors.primaryTextColor }}>Live</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...styles.SingleContainer, backgroundColor: colors.secondaryContainerColor, shadowColor: colors.shadowColor, }} onPress={() => navigation.navigate('radio')} activeOpacity={0.6}>
                            <Ionicons name='ios-radio' size={40} color={colors.purple} />
                            <Text style={{ color: colors.primaryTextColor }}>TTC Radio</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ ...styles.iconSection }}>
                        <TouchableOpacity style={{ ...styles.SingleContainer, backgroundColor: colors.secondaryContainerColor, shadowColor: colors.shadowColor, }} activeOpacity={0.6} onPress={() => navigation.navigate('all_testimonies')}>
                            <Ionicons name='ios-mic' size={40} color={colors.orange} />
                            <Text style={{ color: colors.primaryTextColor }}>Testimonies</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...styles.SingleContainer, backgroundColor: colors.secondaryContainerColor, shadowColor: colors.shadowColor, }} onPress={() => navigation.navigate('payment')} activeOpacity={0.6}>
                            <FontAwesome5 name='hand-holding-usd' size={40} color={colors.green} />
                            <Text style={{ color: colors.primaryTextColor }}>Give</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ ...styles.iconSection }}>
                        <TouchableOpacity style={{ ...styles.SingleContainer, backgroundColor: colors.secondaryContainerColor, shadowColor: colors.shadowColor, }} activeOpacity={0.6}>
                            <Ionicons name='ios-settings' size={40} color={colors.pink} />
                            <Text style={{ color: colors.primaryTextColor }}>Settings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...styles.SingleContainer, backgroundColor: colors.secondaryContainerColor, shadowColor: colors.shadowColor, }} activeOpacity={0.6}>
                            <Ionicons name='ios-person' size={40} color={colors.purple} />
                            <Text style={{ color: colors.primaryTextColor }}>My Profile</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

export default MenuScreen

const styles = StyleSheet.create({
    iconSection: {
        flexDirection: 'row',
        width,
        marginVertical: 20,
        justifyContent: 'space-around'
    },
    SingleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        width: '30%',
        height: 110,
        alignItems: 'center',
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.3,
        elevation: 11,
    },
})
