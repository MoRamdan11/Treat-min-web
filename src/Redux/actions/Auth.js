export const setAuth = (isLogin = false) => {
    //for searching
    return {
        type: 'SET_AUTH',
        isLogin
    };
}

export const setUserProfile = ({
    id = "",
    name = "",
    email = "",
    phone = "",
    gender = "",
    birth = ""
}) => {
    return {
        type: 'SET_USER_PROFILE',
        profile: {
            id,
            name,
            email,
            phone,
            gender,
            birth
        }
    }
}

export const deleteProfile = () => {
    return {
        type: 'RESET_USER_PROFILE'
    }
}