export const addRoomEntity = ({
    id,
    name
}) => {
    return {
        type: 'ADD_SECIALROOM_ENTITY',
        entity: {
            id,
            name
        }
    }
}