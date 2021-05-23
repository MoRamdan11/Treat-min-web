//services Reducer
const servicesReducerDefaultState = [];
const servicesEntitiesReducer = ((state = servicesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_SERVICE_ENTITY':
            return[...state, action.entity];
        default: return state;
    }
})

export default servicesEntitiesReducer;