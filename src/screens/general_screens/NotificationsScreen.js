import React, { useState, useEffect } from 'react'
import api from '../../api/api'
import { connect } from 'react-redux';
import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons'
import Header from '../../components/Header'
import { hideSiteModal, setError, setResult, setSuccess, showSiteModal, startLoading, stopLoading } from '../../actions/site';





const { height, width } = Dimensions.get('window');


const NotificationsScreen = (props) => {

    const { colors } = useTheme();
    const { navigation } = props;

    const [notifications, setNotifications] = useState([]);

    
    const fetchNotifications = () => {
        api.get('fetch_notifications').then(response => {
            const ref = response.data;
            if (ref.success === true) {
                setNotifications(ref.notifications)
            }
            else {
                props.showSiteModal()
                props.setError(ref.message)
            }
        }).catch(e => {
            console.log(e)
            props.showSiteModal()
            props.setError('An API error occurred. Please check your network connection.')
        })
    }

    useEffect(() => {
        // fetchNotifications();
    }, [])


    return (
        <>
            <View>
                <Header alt />
            </View>
            <ScrollView contentContainerStyle={{ minHeight: height, backgroundColor: colors.primaryBackground }}>
                <View style={{ marginVertical: 30 }}>

                    {notifications.map((item, index) => (
                        <TouchableOpacity 
                            onPress={() => { if(item.link !== '') { navigation.navigate(item.link) } }} 
                            key={index} 
                            style={{ ...styles.container, borderTopColor: colors.primaryBorderColor, borderBottomColor: colors.primaryBorderColor, }}
                            >
                            <View style={{ width: '90%' }}>
                                <Text style={{ color: colors.secondaryTextColor }}>
                                    {item.description}
                            </Text>
                            </View>
                            <FontAwesome5 name='chevron-right' size={24} color={colors.secondaryTextColor} />
                        </TouchableOpacity>
                    ))}

                </View>
            </ScrollView>
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


export default connect(mapStateToProps, mapDispatchToProps)(NotificationsScreen);



const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row',
        width,
        flexShrink: 1,
        justifyContent: 'space-between'
    }
})
