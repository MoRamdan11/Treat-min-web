//Clinics Actions
export const fetchClinic = (fetch = false) => {
    return{
        type: 'SET_FETCH_CLINIC',
        fetch
    }
}

export const fetchEntities = (fetchEntities = false) => {
    return{
        type: 'SET_FETCH_ENTITIES',
        fetchEntities
    }
}
export const setTextFilter = (text = '') => {
    //for searching
    return{
        type: 'SET_TEXT_FILTER',
        text
    };
}

export const setSpeciality = (speciality = '') => {
    return{
        type: 'SET_SPECIALITY',
        speciality
    };
}

export const setDrName = (drName = '') => {
    return{
        type: 'SET_DR_NAME',
        drName
    };
}

export const setHospitalName = (hospital = '') => {
    return {
        type: 'SET_HOSPITAL_NAME',
        hospital
    };
}

export const setPrice = (price = 0) => {
    return {
        type: 'SET_PRICE',
        price
    };
}

export const setGender = (gender = '') => {
    return {
        type: 'SET_GENDER',
        gender
    }
}

export const setSortBy = (sortBy = '') => {
    return {
        type: 'SORT_BY',
        sortBy
    }
}