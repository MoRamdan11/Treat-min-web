// servicesfilters actions
//SE --> shortcut for service
export const fetchServices = (fetch = false) => {
    return{
        type: 'SET_FETCH_SERVICES',
        fetch
    }
}

export const fetchServicesEntities = (fetchEntities = false) => {
    return{
        type: 'SET_FETCH_SERVICES_ENTITIES',
        fetchEntities
    }
}

export const setTextFilterSE = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}

export const setServicesFilterSE = (service = '') => {
    return {
        type: 'SET_SERVICE_FILTER',
        service
    }
}

export const setHospitalFilterSE = (hospital = '') => {
    return {
        type: 'SET_HOSPITAL_FILTER',
        hospital
    }
}

export const setPriceFilterSE = (price = 0) => {
    return{
        type: 'SET_PRICE_FILTER',
        price
    }
}

export const setSortFilterSE = (sortBy = '') => {
    return{
        type: 'SET_SORT_BY',
        sortBy
    }
}