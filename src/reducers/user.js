// user REDUCER


const userReducerDefaultState = {
    type: 'corper',
    _id: '',
    firstName: ''
}


const userReducer = (state = userReducerDefaultState, action) => {
    switch (action.type) {

        case 'LOGIN':
            return {
                ...state,
                ...action.userData
            };
        case 'SIGNUP':
            return action.userData;

        case 'LOGOUT':
            return userReducerDefaultState;

        case 'EDIT_USER':
            return {
                ...state,
                ...action.updates
            };

        default:
            return state;
    }

}



export default userReducer;