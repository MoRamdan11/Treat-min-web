//specialRooms Actions
import { v4 as uuid } from 'uuid';

export const addSpecialRoom = ({
    avatar = '',
    room = '',
    hospital =  '',
    rating = 0,
    waiting = '',
    callus = '',
    price = 0,
    avaliabledate1 = '',
    avaliabledate2 = '',
    avaliabledate3 = '',
    services: {
        wifi = false,
        beds = 0,
        tv = false, 
        fridge = false
    }
}= {}) => {
    return {
        type: 'ADD_SPECIAL_ROOM',
        specialRoom: {
            id: uuid(),
            avatar,
            room,
            hospital,
            rating,
            waiting,
            callus,
            price,
            avaliabledate1,
            avaliabledate2,
            avaliabledate3,
            services:{
                wifi,
                beds,
                tv,
                fridge
            }
        }
    }
}

export const removeSpecialRoom = ({id} = {}) => {
    return{
        type: 'REMOVE_SPECIAL_ROOM',
        id
    }
}