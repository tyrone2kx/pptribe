import api from '../api/api';

export const setData = (data) => ({
    type: 'SET_DATA',
    data
});


export const updateSite = (update) => ({
    type: 'UPDATE_SITE',
    update
});


export const setError = (error) => ({
    type: 'SET_ERROR',
    error
});


export const setSuccess = (success) => ({
    type: 'SET_SUCCESS',
    success
});


export const clearStatus = () => ({
    type: 'CLEAR_STATUS',
});


export const startLoading = () => ({
    type: 'START_LOADING',
});


export const stopLoading = () => ({
    type: 'STOP_LOADING',
});


export const showSiteModal = () => ({
    type: 'SHOW_MODAL',
});


export const hideSiteModal = () => ({
    type: 'HIDE_MODAL',
});


export const setResult = (result) => ({
    type: 'SET_RESULT',
    result
});


export const setViewUser = (user) => ({
    type: 'SET_VIEW_USER',
    user
});




export const setTheme = (theme) => ({
    type: 'SET_THEME',
    theme
});








// FETCH SITE DATA NOW



export const fetchSiteData = () => {
    return (dispatch, getState) => {

        try {
            dispatch(showSiteModal());
            dispatch(startLoading());
            api.post('/fetch_site_details').then(response => {
                dispatch(stopLoading());
                const ref = response.data;
                if (ref.success === true) {
                    const data = {
                        ...ref.details,
                        testimonies: ref.testimonies,
                        videos: ref.videos
                    }
                    dispatch(setData(data))
                }
                else {
                    dispatch(setError(ref.message));
                }
            }).catch(e => {
                console.log(e);
                dispatch(setError('An error occurred on the server. Please check your network connection.'));
                dispatch(stopLoading());
            })
        }

        catch (e) {
            dispatch(setError('An error occurred on the server. Please check your network connection.'));
            dispatch(stopLoading());
            console.log(e);
        }
    }

}



