const getVisibleClinics = (clinics, {text, speciality, drName, hospital, price, gender, sortBy}) => {
    return clinics.filter((clinic) => {
        const textMatch = text === '' || clinic.name.toLowerCase().includes(text.toLowerCase()) ||
                         clinic.specalist.toLowerCase().includes(text.toLowerCase()) ||
                         clinic.hospital.toLowerCase().includes(text.toLowerCase()) || false;
        const specialityMatch = (speciality === '') || (clinic.specalist === speciality);
        const drNameMatch = (drName === '') || (clinic.name === drName);
        const hospitalMatch = (hospital === '') || (clinic.hospital === hospital);
        const priceMatch = (price === 0) || (clinic.price <= price);
        const genderMatch = true //there is no field in card related to gender
        return textMatch && specialityMatch && drNameMatch && hospitalMatch && priceMatch && genderMatch;
    }).sort((a, b) => {
        if(sortBy === 'A to Z'){
            return a.name.toLowerCase() < b.name.toLowerCase()? -1 : 1;
        }else if(sortBy === 'Z to A'){
            return a.name.toLowerCase() < b.name.toLowerCase()? 1 : -1;
        }else if(sortBy === 'Lowest Price'){
            return a.price < b.price? -1 : 1;
        }else if(sortBy === 'Highest Price'){
            return a.price < b.price? 1 : -1;
        }
    });
}

export default getVisibleClinics;