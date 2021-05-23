import { createStore, combineReducers } from 'redux';
import clincsReducer from "../Reducers/clinics";
import filterClinicsReducer from "../Reducers/filterClinics";
import specialRoomReducer from "../Reducers/specialRooms";
import filterSpecialRoomsReducer from "../Reducers/filterSpecialRooms";
import servicesReducer from "../Reducers/services";
import filterServicesReducer from "../Reducers/filterServices";
import authReducer from "../Reducers/Auth";
import entityReducer from "../Reducers/entities"; 
import servicesEntitiesReducer from "../Reducers/servicesEntities";
const configureStore = () => {
    const store = createStore(combineReducers({
        servicesEntities: servicesEntitiesReducer,
        entities: entityReducer,
        clinics: clincsReducer,
        filterClinics: filterClinicsReducer,
        specialRooms: specialRoomReducer,
        filterSpecialRooms: filterSpecialRoomsReducer,
        services: servicesReducer,
        filterServices: filterServicesReducer,
        auth: authReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}

export default configureStore;