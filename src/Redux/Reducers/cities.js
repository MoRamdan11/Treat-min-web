//cities Reducer

const cityDefaultState = [];

const cityReducer = (state = cityDefaultState, action) => {
    switch(action.type){
        case 'ADD_CITY': 
            return [...state, action.city];
        default: return state;
    }
}

export default cityReducer;