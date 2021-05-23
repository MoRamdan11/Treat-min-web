//Spercial Rooms Entities
const spercialRoomsEntitiesDefaultState = [];
const SpercialRoomsEntitiesReducer = ((state = spercialRoomsEntitiesDefaultState, action) => {
    switch(action.type){
        case 'ADD_SECIALROOM_ENTITY': 
            return [...state, action.entity];
        default: return state;
    }
})

export default SpercialRoomsEntitiesReducer;