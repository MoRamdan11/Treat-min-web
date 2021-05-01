//Special Rooms Reducer
const specialRoomReducerDefaultState = [];

const specialRoomReducer = (state = specialRoomReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_SPECIAL_ROOM':{
            return [...state, action.specialRoom]
        } 
        case 'REMOVE_SPECIAL_ROOM':
            return state.filter(({id}) => (action.id !== id));
        default: return state;
    }
}

export default specialRoomReducer;