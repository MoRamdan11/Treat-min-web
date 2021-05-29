const getVisibleHospitals = (hospitals) => {
    return hospitals.sort((a, b) => {
        return a.name.toLowerCase() < b.name.toLowerCase()? -1 : 1;
    });
}

export default getVisibleHospitals;