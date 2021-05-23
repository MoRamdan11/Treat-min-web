import { v4 as uuid } from 'uuid';
// services actions

export const addService = ({
    id = 0,
    avatar = "",
    service = "",
    hospital = "",
    rating_total = 0,
    rating_users = 0,
    waiting = "",
    price = 0,
    callus = "",
    avaliabledate1 = "",
    avaliabledate2 = "",
    avaliabledate3 = ""
} = {}) => {
    const spaceIndex = service.indexOf(' ');
    avatar = (service[0] + ' ' + service[spaceIndex + 1]).toUpperCase();
    return {
        type: 'ADD_SERVICE',
        serviceElement: {
            id: uuid(),
            avatar,
            service,
            hospital,
            waiting,
            price,
            callus,
            apiId: id,
            rating_total,
            rating_users,
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