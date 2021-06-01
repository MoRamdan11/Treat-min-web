//filter clinic reducer

const filterReducerDefaultState = {
    fetch: false,
    fetchHospital: false,
    fetchCity: false,
    fetchRegion: false,
    fetchEntities: false,
    text: '',
    speciality: '',
    drName: '',
    hospital: '',
    price: 0,
    gender: '',
    sortBy: '',
    city: '',
    region: ''
    //sort by ==> 'A to Z' || 'Z to A' || 'Lowest Price' || 'Highest Price' || 'Date'
};

const filterClinicsReducer = ((state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_FETCH_REGION': 
            return {...state, fetchRegion: action.fetchRegion};
        case 'SET_FETCH_HOSPITALS':
            return {...state, fetchHospital: action.fetchHospital};
        case 'SET_FETCH_CITY': 
            return {...state, fetchCity: action.fetchCity};
        case 'SET_CITY_CLINIC':
            return {...state, city: action.city};
        case 'SET_REGION_CLINIC':
            return {...state, region: action.region}
        case 'REST_FILTER_CLINICS': {
            return { ...filterReducerDefaultState }
        }
        case 'SET_FETCH_CLINIC': {
            return { ...state, fetch: action.fetch }
        }
        case 'SET_FETCH_ENTITIES': {
            return { ...state, fetchEntities: action.fetchEntities }
        }
        case 'SET_TEXT_FILTER_DR':
            return { ...state, text: action.text };
        case 'SET_SPECIALITY_DR':
            return { ...state, speciality: action.speciality };
        case 'SET_DR_NAME':
            return { ...state, drName: action.drName };
        case 'SET_HOSPITAL_NAME_DR':
            return { ...state, hospital: action.hospital };
        case 'SET_PRICE_DR':
            return { ...state, price: action.price };
        /*case 'SET_GENDER':
            return {...state, gender: action.gender};*/
        case 'SORT_BY_DR':
            return { ...state, sortBy: action.sortBy }
        default: return state;
    }
});

export default filterClinicsReducer;