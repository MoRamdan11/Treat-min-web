const defaultReducer = {
    //clinics
    fetch: false,
    fetchEntities: false,
    //endclinics
    //Services
    fetchServicesEntities: false,
    fetchServices: false,
    //EndServices
    fetchHospital: false,
    fetchCity: false,
    fetchRegion: false,
}

const fetchReducer = ((state = defaultReducer, action) => {
    switch (action.type) {
        case 'SET_FETCH_SERVICES': 
            return { ...state, fetchServices: action.fetch }
        case 'SET_FETCH_SERVICES_ENTITIES':
            return { ...state, fetchServicesEntities: action.fetchEntities }
        case 'SET_FETCH_REGION':
            return { ...state, fetchRegion: action.fetchRegion };
        case 'SET_FETCH_HOSPITALS':
            return { ...state, fetchHospital: action.fetchHospital };
        case 'SET_FETCH_CITY':
            return { ...state, fetchCity: action.fetchCity };
        case 'SET_FETCH_CLINIC': {
            return { ...state, fetch: action.fetch }
        }
        case 'SET_FETCH_ENTITIES': {
            return { ...state, fetchEntities: action.fetchEntities }
        }
        default: return state;
    }
});

export default fetchReducer;