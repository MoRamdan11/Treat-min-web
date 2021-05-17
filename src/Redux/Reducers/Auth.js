const authReducerDefault = false;

const authReducer = ((state = authReducerDefault, action) => {
    switch(action.type){
        case 'SET_AUTH':
            return {...state, isLogin: action.isLogin};
        default: return state;
    }
})

export default authReducer;