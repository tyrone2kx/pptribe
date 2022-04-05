import React from 'react'
import { StyleSheet, Text, View, Dimensions, SafeAreaView, Image } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const { height, width } = Dimensions.get('window');


const LandingScreen = (props) => {

    const { colors } = useTheme();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.page}>
            <TouchableOpacity style={styles.imageHolder} onPress={() => navigation.navigate('home')} >
                <Image style={styles.image} source={require('../../../assets/logo1.png')} onPress={() => navigation.navigate('home')}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default LandingScreen

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#0660ce',
        height,
        width,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imageHolder: {
        height: 200,
        width: 200
    },
    image: {
        height: '100%',
        width: '100%'
    }
})
