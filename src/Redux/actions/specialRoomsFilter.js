//filters special rooms action
export const fetchRooms = (fetch = false) => {
    return{
        type: 'SET_FETCH_ROOMS',
        fetch
    }
}

export const fetchRoomsEntities = (fetchEntities = false) => {
    return{
        type: 'SET_FETCH_ROOMS_ENTITIES',
        fetchEntities
    }
}
export const setTextFilterSP = (text = '') => {
    //for searching
    return{
        type: 'SET_TEXT_FILTER',
        text
    };
}


export const setRoomName = (room = '') => {
    return{
        type: 'SET_ROOM_FILTER',
        room
    }
}

export const setHospitalFilter = (hospital = '') => {
    return{
        type: 'SET_HOSPITAL_FILTER',
        hospital
    }
}

export const setPriceFilter = (price = 0) => {
    return{
        type: 'SET_PRICE_FILTER',
        price
    }
}

export const setSortBySP = (sortBy = '') => {
    return{
        type: 'SET_SORT_BY',
        sortBy
    }
}