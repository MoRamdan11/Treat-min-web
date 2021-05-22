export const addEntity = ({
    id,
    name
}) => {
    return {
        type: 'ADD_ENTITY',
        entity: {
            id,
            name
        }
    }
}