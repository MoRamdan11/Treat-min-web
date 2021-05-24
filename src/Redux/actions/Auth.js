export const setAuth = (isLogin = false) => {
    //for searching
    return {
        type: 'SET_AUTH',
        isLogin
    };
}

export const setUserProfile = ({
    name = "",
    email = "",
    phone = "",
    gender = "",
    birth = ""
}) => {
    return {
        type: 'SET_USER_PROFILE',
        profile: {
            name,
            email,
            phone,
            gender,
            birth
        }
    }
}