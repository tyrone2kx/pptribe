import React from 'react'
import { WebView } from "react-native-webview";
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import { useTheme } from '@react-navigation/native'

const RadioScreen = (props) => {
    const { height, width } = Dimensions.get('window');
    const { colors } = useTheme();


    return (
        <View style={{flex:1}}>
            <WebView
                originWhitelist={['*']}
                source={{ uri: 'http://ttcradio.org' }}
                style={{ height, width, padding: 0, margin: 0, backgroundColor: colors.primaryBackground }}
                onMessage={(e) => {
                    let receivedData = JSON.parse(e.nativeEvent.data)
                    // onReceiveResponse(receivedData)
                }}
            />
        </View>
    )
}

export default RadioScreen

const styles = StyleSheet.create({})
