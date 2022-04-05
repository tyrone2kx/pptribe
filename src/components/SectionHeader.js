import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { useTheme } from '@react-navigation/native'




const { height, width } = Dimensions.get('window');

const SectionHeader = (props) => {

    const { colors } = useTheme();

    return (
        <View style={{ width: '100%', flexDirection:'row', justifyContent:'center' }}>
            <View style={{ width: '60%' }}>
                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <View style={{ width: '50%', height: 2, backgroundColor: colors.green }}></View>
                    <View style={{ width: '50%', height: 2 }}></View>
                </View>

                <View style={{ paddingVertical: 10, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: colors.primaryTextColor, fontSize: 22, textAlign: 'center' }}> {props.title} </Text>
                </View>

                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <View style={{ width: '50%', height: 2 }}></View>
                    <View style={{ width: '50%', height: 2, backgroundColor: colors.green }}></View>
                </View>
            </View>
        </View>
    )
}

export default SectionHeader

const styles = StyleSheet.create({})
