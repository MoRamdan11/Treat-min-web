import { v4 as uuid } from 'uuid';
// services actions

export const addService = ({
    id,
    api,
    avatar = "",
    service = "",
    hospital,
    rating_total = 0,
    rating_users = 0,
    waiting = "",
    price = 0,
    callus = "",
    schedules = []
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
            id_Schedule: id,
            api,
            rating_total,
            rating_users,
            schedules
        }
    }
};

export const removeService = ({id} = {}) => {
    return{
        type: 'REMOVE_SERVICE',
        id
    }
};