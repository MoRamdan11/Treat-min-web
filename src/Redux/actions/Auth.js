export const setAuth = (isLogin = false) => {
    //for searching
    return{
        type: 'SET_AUTH',
        isLogin
    };
}