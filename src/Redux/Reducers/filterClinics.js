//filter clinic reducer

const filterReducerDefaultState = {
    fetch: true,
    text: '',
    speciality: '',
    drName: '',
    hospital: '',
    price: 0,
    gender: '',
    sortBy: '', 
    //sort by ==> 'A to Z' || 'Z to A' || 'Lowest Price' || 'Highest Price' || 'Date'
};

const filterClinicsReducer = ((state = filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_FETCH_CLINIC':{
            return{...state, fetch: action.fetch}
        }
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text};
        case 'SET_SPECIALITY': 
            return {...state, speciality: action.speciality};
        case 'SET_DR_NAME':
            return {...state, drName: action.drName};
        case 'SET_HOSPITAL_NAME':
            return {...state, hospital: action.hospital};
        case 'SET_PRICE':
            return {...state, price: action.price};
        case 'SET_GENDER':
            return {...state, gender: action.gender};
        case 'SORT_BY':
            return {...state, sortBy: action.sortBy}
        default: return state;
    }
});

export default filterClinicsReducer;