//Entities Reducer
const entityReducerDefaultState = [];
const entityReducer = ((state = entityReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_ENTITY':
            return[...state, action.entity];
        default: return state;
    }
})

export default entityReducer;