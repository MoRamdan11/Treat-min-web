import { v4 as uuid } from 'uuid';

export const addClinic = ({
    avatar = '',
    name = '',
    specalist = '',
    rating = 0,
    hospital = '',
    waiting = '',
    price = 0,
    callus = '',
    rating_total = 0,
    rating_users = 0,
    avaliabledate1 = '',
    avaliabledate2 = '',
    avaliabledate3 = ''
} = {}) => {
    return {
        type: 'ADD_CLINIC',
        clinic: {
            id: uuid(),
            avatar,
            name,
            specalist,
            rating,
            hospital,
            waiting,
            price,
            callus,
            rating_total,
            rating_users,
            avaliabledate1,
            avaliabledate2,
            avaliabledate3
        }
    }
}

export const removeClinic = ({id} = {}) => {
    return{
        type: 'REMOVE_CLINIC',
        id    
    }
}