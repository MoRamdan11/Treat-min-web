// services actions

export const addService = ({
    id = 0,
    avatar = "",
    service = "",
    hospital = "",
    rating = 0,
    waiting = "",
    price = 0,
    callus = "",
    avaliabledate1 = "",
    avaliabledate2 = "",
    avaliabledate3 = ""
} = {}) => {
    return {
        type: 'ADD_SERVICE',
        serviceElement: {
            id,
            avatar,
            service,
            hospital,
            rating,
            waiting,
            price,
            callus,
            avaliabledate1,
            avaliabledate2,
            avaliabledate3
        }
    }
};

export const removeService = ({id} = {}) => {
    return{
        type: 'REMOVE_SERVICE',
        id
    }
};