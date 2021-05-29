export const addHospital = ({
    id,
    name
}) => {
    return {
        type: 'ADD_HOSPITAL',
        hospital: {
            id,
            name
        }
    }
}