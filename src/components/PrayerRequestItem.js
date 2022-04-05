import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'

const PrayerRequestItem = (props) => {

    const { colors } = useTheme();

    const [showDesc, setShowDesc] = useState(false);


    return (
        <View style={{ backgroundColor: colors.secondaryContainerColor, borderRadius: 10, paddingVertical: 20, paddingHorizontal: 10, borderWidth: 1, borderColor: colors.primaryBorderColor, marginBottom: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>

                <View style={{flexDirection:'row', flexShrink: 1}}>
                    <FontAwesome5 name='eye' size={20} color={colors.green} />
                    <Text style={{ fontSize: 14, color: colors.primaryTextColor, marginLeft: 5, flexShrink: 1 }}>
                        PRAYER FOR SUPERNATURAL HEALING OF MY LEFT AND RIGHT LEG
                    </Text>
                </View>

                <TouchableOpacity onPress={() => setShowDesc(!showDesc)}>
                    {showDesc === false ? <FontAwesome5 name='chevron-right' size={24} color={colors.primaryTextColor} /> : <FontAwesome5 name='chevron-down' size={24} color={colors.primaryTextColor} />}
                </TouchableOpacity>
            </View>
            {showDesc && (
                <>
                    <Text style={{ fontSize: 12, color: colors.secondaryTextColor, marginTop: 10 }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

                    <TouchableOpacity style={{ marginTop: 20, alignItems: 'center' }}>
                        <Text style={{ color: 'red' }}>DELETE</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    )
}

export default PrayerRequestItem

const styles = StyleSheet.create({})
