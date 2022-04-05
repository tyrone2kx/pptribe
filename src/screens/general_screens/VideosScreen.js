import React, { useState, useCallback, useRef, useEffect } from 'react'
import { connect } from 'react-redux';
import YoutubePlayer, { getYoutubeMeta } from "react-native-youtube-iframe";
import { StyleSheet, Text, View, Dimensions, AppState, Alert, Button, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import Header from '../../components/Header'
import { hideSiteModal, setError, setResult, setSuccess, showSiteModal, startLoading, stopLoading } from '../../actions/site';





const { height, width } = Dimensions.get('window');

const VideosScreen = (props) => {

    const { navigation } = props;

    const { colors } = useTheme();
    const [playing, setPlaying] = useState(false);
    const [activeVideo, setActiveVideo] = useState('W0tZSuuUltA');

    const playlist = props.site.videos;
    //what i added


    useEffect(() => {
        navigation.addListener('focus', () => { setPlaying(true) });
        navigation.addListener('blur', () => { setPlaying(false) });
        console.log('navigation', navigation)

        return function stopPlaying() {
            navigation.removeListener('focus', () => { setPlaying(true) });
            navigation.removeListener('blur', () => { setPlaying(false) });
        };
    }, [navigation])



    // const AddVideo = (videoId) => {
    //     getYoutubeMeta(videoId).then((data) => {
    //         let arr = [...playlists];
    //         arr.push(data);
    //         setPlaylists(arr);
    //         console.log('playlists ==>', playlists);
    //     })

    // }




    return (
        <>
            <View>
                <Header />
            </View>
            <View style={{ backgroundColor: colors.primaryBackground, height: height }} >

                <View>
                    <YoutubePlayer
                        height={height / 3}
                        play={playing}
                        // videoId={activeVideo}
                        playList={'PLikpIvqSGHRsa04WtFurxSkX81Nbcoh0f'}
                    />
                </View>
            </View>

            {/* <ScrollView style={{ paddingHorizontal: 10, backgroundColor: colors.primaryBackground }}> */}
            {/* {playlist.map((data, index) => (
                    <TouchableOpacity key={index} activeOpacity={0.5} style={{ ...styles.thumbnail, borderColor: colors.primaryBorderColor, backgroundColor: colors.primaryContainerColor }}>
                        <Image source={{ uri: data.thumbnail_url }} style={{ width: 100, height: 100 }} />
                        <View>
                            <Text style={{ marginLeft: 15, color: colors.primaryTextColor }}>{data.author_name}</Text>
                            <Text style={{ marginLeft: 15, color: colors.secondaryTextColor, marginTop:5 }}>{data.provider_name}</Text>
                        </View>
                    </TouchableOpacity>
                ))} */}
            {/* </ScrollView> */}
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


export default connect(mapStateToProps, mapDispatchToProps)(VideosScreen);


const styles = StyleSheet.create({
    thumbnail: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1
    }
})
