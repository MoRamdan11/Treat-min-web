export const addServiceEntity = ({
    id,
    name
}) => {
    return {
        type: 'ADD_SERVICE_ENTITY',
        entity: {
            id,
            name
        }
    }
}