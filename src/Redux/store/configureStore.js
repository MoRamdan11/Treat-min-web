import { createStore, combineReducers } from 'redux';
import clincsReducer from "../Reducers/clinics";
import filterClinicsReducer from "../Reducers/filterClinics";
import servicesReducer from "../Reducers/services";
import filterServicesReducer from "../Reducers/filterServices";
import authReducer from "../Reducers/Auth";
import entityReducer from "../Reducers/entities";
import servicesEntitiesReducer from "../Reducers/servicesEntities";
import hospitalReducer from "../Reducers/hospitals";
import cityReducer from "../Reducers/cities";
import regionReducer from "../Reducers/regions";
import fetchReducer from '../Reducers/fetching';
const configureStore = () => {
    const store = createStore(combineReducers({
        fetching: fetchReducer,
        regions: regionReducer,
        cities: cityReducer,
        hospitals: hospitalReducer,
        servicesEntities: servicesEntitiesReducer,
        entities: entityReducer,
        clinics: clincsReducer,
        filterClinics: filterClinicsReducer,
        services: servicesReducer,
        filterServices: filterServicesReducer,
        auth: authReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}

export default configureStore;