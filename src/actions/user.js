import api from '../api/api';
import { setError, startLoading, stopLoading, clearStatus, showSiteModal, hideSiteModal, setSuccess } from './site';


// User action to login new user 

export const login = (userData) => ({
    type: 'LOGIN',
    userData
});



export const signUp = (userData) => ({
    type: 'SIGNUP',
    userData
});


export const logout = () => ({
    type: 'LOGOUT'
});



// EDIT_USER

export const editUser = (updates) => ({
    type: 'EDIT_USER',
    updates
});


// VERIFY USER ACCOUNT

export const resendVerificationCode = () => {
    return (dispatch, getState) => {

        try {
            dispatch(showSiteModal());
            dispatch(startLoading());
            const email = getState().user.email;
            api.post('/resend_verification_code', { email }).then(response => {
                dispatch(stopLoading());
                const ref = response.data;
                if (ref.success === true) {
                    dispatch(setSuccess('Code Sent.'));
                }
                else {
                    dispatch(setError(ref.message));
                }
            }).catch(e => {
                console.log(e);
                dispatch(setError('An error occurred on the server. Please try again later.'));
                dispatch(stopLoading());
            })
        }

        catch (e) {
            dispatch(setError('An error occurred on the server. Please try again later.'));
            dispatch(stopLoading());
            console.log(e);
        }
    }

}












// CONFIRM RESET CODE

export const confirmResetCode = (resetCode) => {
    return (dispatch, getState) => {

        try {
            dispatch(showSiteModal());
            dispatch(startLoading());
            const email = getState().user.email;
            api.post('/confirm_reset_code', { resetCode, email }).then(response => {
                dispatch(stopLoading());
                const ref = response.data;
                if (ref.success === true) {
                    dispatch(setSuccess('Correct Code.'));
                    History.push('/reset-password')
                }
                else {
                    dispatch(setError(ref.message));
                }
            }).catch(e => {
                console.log(e);
                dispatch(setError('An error occurred on the server. Please try again later.'));
                dispatch(stopLoading());
            })
        }

        catch (e) {
            dispatch(setError('An error occurred on the server. Please try again later.'));
            dispatch(stopLoading());
            console.log(e);
        }
    }

}





// START LOGIN FROM SERVER

export const startLogin = (email, password) => {
    return (dispatch, getState) => {

        try {
            dispatch(showSiteModal());
            dispatch(startLoading());
            api.post('/sign_in', { email, password }).then(response => {
                const ref = response.data;
                if (ref.success === true) {
                    const user = { ...ref.user, token: ref.token }
                    dispatch(clearStatus());
                    dispatch(login(user));
                    dispatch(stopLoading());
                    dispatch(hideSiteModal());
                    if (user.verificationStatus === 'unverified') {
                        resendVerificationCode(user.email);
                        History.push('/verify-account')
                    }
                    else {

                        if (ref.user.type === 'corper') {
                            window.location.href = "/dashboard";
                        }
                        else if (ref.user.type === 'company') {
                            window.location.href = "/company-dashboard";
                        }
                    }
                }
                else {
                    dispatch(setError(ref.message));
                    dispatch(stopLoading());
                }
            }).catch(e => {
                console.log(e);
                dispatch(setError('An error occurred on the server. Please try again later.'));
                dispatch(stopLoading());
            })
        }

        catch (e) {
            dispatch(setError('An error occurred on the server. Please try again later.'));
            dispatch(stopLoading());
            console.log(e);
        }
    }

}




// VERIFY USER ACCOUNT

export const startVerifyAccount = (code) => {
    return (dispatch, getState) => {

        try {
            const email = getState().user.email;
            dispatch(showSiteModal());
            dispatch(startLoading());
            api.post('/verify_account', { code, email }).then(response => {
                const ref = response.data;
                if (ref.success === true) {
                    dispatch(clearStatus());
                    dispatch(stopLoading());
                    dispatch(hideSiteModal());
                    const user = ref.user;
                    dispatch(login(user))
                    if (user.type === 'corper') {
                        History.push('/dashboard')
                    }
                    else if (user.type === 'company') {
                        History.push('/company-dashboard')
                    }
                }
                else {
                    dispatch(stopLoading());
                    dispatch(setError(ref.message));
                }
            }).catch(e => {
                console.log(e);
                dispatch(setError('An error occurred on the server. Please try again later.'));
                dispatch(stopLoading());
            })
        }

        catch (e) {
            dispatch(setError('An error occurred on the server. Please try again later.'));
            dispatch(stopLoading());
            console.log(e);
        }
    }

}







// START SIGN UP FROM SERVER

export const startSignUp = (userData) => {
    return (dispatch, getState) => {

        try {
            dispatch(showSiteModal());
            dispatch(startLoading());
            api.post('/sign_up', userData).then(response => {
                dispatch(stopLoading());
                const ref = response.data;
                if (ref.success === true) {
                    const user = ref.user;
                    dispatch(signUp(user));
                    dispatch(hideSiteModal())
                    History.push('/verify-account');
                }
                else {
                    dispatch(setError(ref.message));
                }
            }).catch(e => {
                console.log(e);
                dispatch(setError('An error occurred on the server. Please try again later.'));
                dispatch(stopLoading());
            })
        }

        catch (e) {
            dispatch(setError('An error occurred on the server. Please try again later.'));
            dispatch(stopLoading());
            console.log(e);
        }
    }

}









export const resetPassword = (password) => {
    return (dispatch, getState) => {
        try {
            dispatch(showSiteModal());
            dispatch(startLoading());
            const email = getState().user.email;

            api.post('/reset_password', { email, password }).then(response => {
                dispatch(stopLoading());
                const ref = response.data;
                if (ref.success === true) {
                    dispatch(setSuccess('Your password has been set successfully. You can close this message and sign in normally.'));
                    History.push('/login')
                }
                else {
                    dispatch(setError(ref.message));
                }
            }).catch(e => {
                console.log(e);
                dispatch(setError('An error occurred on the server. Please try again later.'));
                dispatch(stopLoading());
            })
        } catch (e) {
            dispatch(setError('An error occurred on the server. Please try again later.'));
            dispatch(stopLoading());
            console.log(e)
        }
    }
}









export const selectInterests = (interests) => {
    return (dispatch, getState) => {
        try {
            dispatch(showSiteModal());
            dispatch(startLoading());
            const updates = { interests }
            api.post('/user/edit_user', { updates }).then(response => {
                dispatch(stopLoading());
                const ref = response.data;
                if (ref.success === true) {
                    dispatch(setSuccess('Your interests has been added successfully.'));
                    History.push('/')
                }
                else {
                    dispatch(setError(ref.message));
                }
            }).catch(e => {
                dispatch(stopLoading());
                console.log(e);
                dispatch(setError('An error occurred on the server. Please try again later.'));
            })
        } catch (e) {
            dispatch(stopLoading());
            dispatch(setError('An error occurred on the server. Please try again later.'));
            console.log(e)
        }
    }
}





// START UPDATING USER DETAILS FROM SERVER

export const startEditUser = (updates) => {
    return (dispatch, getState) => {

        try {
            dispatch(showSiteModal());
            dispatch(startLoading());
            api.post('/user/edit_user', { updates }).then(response => {
                dispatch(stopLoading());
                const ref = response.data;
                if (ref.success === true) {
                    dispatch(editUser(updates));
                    dispatch(setSuccess('Your changes have been saved.'));
                }
                else {
                    dispatch(setError(ref.message));
                }
            }).catch(e => {
                console.log(e);
                dispatch(setError('An error occurred on the server. Please try again later.'));
                dispatch(stopLoading());
            })
        }

        catch (e) {
            dispatch(stopLoading());
            dispatch(setError('An error occurred on the server. Please try again later.'));
            console.log(e);
        }
    }

}







// CHANGE USER PASSWORD

export const changePassword = (oldPassword, password) => {
    return (dispatch, getState) => {

        try {
            dispatch(showSiteModal());
            dispatch(startLoading());
            const id = getState().user._id;
            api.post('/user/change_password', { id, password, oldPassword }).then(response => {
                dispatch(stopLoading());
                const ref = response.data;
                if (ref.success === true) {
                    dispatch(setSuccess('Your password has been changed successfully.'));
                }
                else {
                    dispatch(setError(ref.message));
                }
            }).catch(e => {
                console.log(e);
                dispatch(setError('An error occurred on the server. Please try again later.'));
                dispatch(stopLoading());
            })
        }

        catch (e) {
            dispatch(stopLoading());
            dispatch(setError('An error occurred on the server. Please try again later.'));
            console.log(e);
        }
    }

}












export const forgotPassword = (email) => {
    return (dispatch, getState) => {
        try {
            dispatch(showSiteModal());
            dispatch(startLoading());

            api.post('/forgot_password', { email }).then(response => {
                dispatch(stopLoading());
                const ref = response.data;
                if (ref.success === true) {
                    dispatch(setSuccess(`Reset code has been sent to ${email}`))
                    return true;
                } else {
                    dispatch(setError(ref.message));
                    return false;
                }
            }).catch(e => {
                console.log(e);
                dispatch(stopLoading());
                dispatch(setError('An error occurred on the server. Please try again later.'))
                return false;
            })
        } catch (e) {
            console.log(e);
            dispatch(stopLoading());
            dispatch(setError('An error occurred on the server. Please try again later.'))
            return false;
        }
    }
}







