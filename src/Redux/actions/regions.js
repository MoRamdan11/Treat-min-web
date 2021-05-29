export const addRegion = ({
    id,
    name
}) => {
    return {
        type: 'ADD_REGION',
        region: {
            id,
            name
        }
    }
}