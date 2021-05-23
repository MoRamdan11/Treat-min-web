const filterSpecialRoomsReducerReducerDefaultState = {
    text: '',
    room: '',
    hospital: '',
    price: 0,
    sortBy: '',
    fetchEntities: false,
    fetch: false
    //sort by ==> 'A to Z' || 'Z to A' || 'Lowest Price' || 'Highest Price' || 'Date'
};

const filterSpecialRoomsReducer = ((state = filterSpecialRoomsReducerReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_FETCH_ROOMS': 
            return {...state, fetch: action.fetch};
        case 'SET_FETCH_ROOMS_ENTITIES': {
            return {...state, fetchEntities: action.fetchEntities}
        }
        case'SET_TEXT_FILTER':
            return {...state, text: action.text};
        case 'SET_ROOM_FILTER':
            return {...state, room: action.room};
        case 'SET_HOSPITAL_FILTER':
            return {...state, hospital: action.hospital};
        case 'SET_PRICE_FILTER':
            return {...state, price: action.price};
        case 'SET_SORT_BY':
            return {...state, sortBy: action.sortBy};
        default: return state;
    }
});

export default filterSpecialRoomsReducer;