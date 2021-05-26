import { v4 as uuid } from 'uuid';

export const addClinic = ({
    avatar = '',
    specalist = '',
    rating = 0,
    waiting = '',
    price = 0,
    rating_total = 0,
    rating_users = 0,
    schedules =  [],
    id,
    api,
    hospital,
    doctor: {
        name= '',
        title= ''
    }
} = {}) => {
    const spaceIndex = name.indexOf(' ');
    avatar = (name[0] + ' ' + name[spaceIndex + 1]).toUpperCase();
    return {
        type: 'ADD_CLINIC',
        clinic: {
            id: uuid(),
            avatar,
            specalist,
            rating,
            hospital,
            waiting,
            price,
            rating_total,
            rating_users,
            schedules,
            id_Schedule: id,
            api,
            doctor:{
                name,
                title
            },
        }
    }
}

export const removeClinic = ({id} = {}) => {
    return{
        type: 'REMOVE_CLINIC',
        id    
    }
}