export const addCity = ({
    id,
    name
}) => {
    return {
        type: 'ADD_CITY',
        city: {
            id,
            name
        }
    }
}