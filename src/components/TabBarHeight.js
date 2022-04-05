import React from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native'

const TabBarHeight = (props) => {
    const tabBarHeight = useBottomTabBarHeight();
    return (
        <View style={{height: tabBarHeight}}>
            
        </View>
    )
}

export default TabBarHeight

const styles = StyleSheet.create({})
