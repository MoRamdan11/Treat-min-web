const reducerDefault = [];

const hospitalReducer = (state = reducerDefault, action) => {
    switch (action.type) {
        case 'ADD_HOSPITAL': 
            return [...state, action.hospital];
        default: return state;
    }
}

export default hospitalReducer;