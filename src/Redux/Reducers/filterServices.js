//filterServices Reducer

const filterSReducerDefaultState = {
    fetch: false,
    text: '',
    service: '',
    hospital: '',
    price: 0,
    sortBy: '',
    fetchEntities: false,
    //sort by ==> 'A to Z' || 'Z to A' || 'Lowest Price' || 'Highest Price'
};

const filterServicesReducer = (state = filterSReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_FETCH_SERVICES':{
            return{...state, fetch: action.fetch}
        }
        case 'SET_FETCH_SERVICES_ENTITIES': {
            return {...state, fetchEntities: action.fetchEntities}
        }
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text};
        case 'SET_SERVICE_FILTER': 
            return {...state, service: action.service};
        case 'SET_HOSPITAL_FILTER':
            return {...state, hospital: action.hospital};
        case 'SET_PRICE_FILTER':
            return {...state, price: action.price};
        case 'SET_SORT_BY':
            return {...state, sortBy: action.sortBy};
        default: return state;
    }
}

export default filterServicesReducer;