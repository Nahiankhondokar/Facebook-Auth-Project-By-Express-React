

// auth reducer
const AuthReducer = (state, { type, payload }) => {

    switch (type) {
        case 'LOGIN_USER_SUCCESSS':
        return {
            isLoggedIn : true,
            user : payload
        };

        case 'USER_LOGOUT':
        return {
            isLoggedIn : false,
            user : { }
        };
    
        default:
            return state;
    }

}

export default AuthReducer;