//service Selector

const getVisibleServices = (services, {text, service, hospital, price, sortBy, city, region}) => {
    return services.filter((serviceElement) => {
        const textMatch = text === '' ||
            serviceElement.service.toLowerCase().includes(text.toLowerCase()) ||
            serviceElement.hospital.toLowerCase().includes(text.toLowerCase());
        const serviceMatch = (service === '') || (serviceElement.service === service);
        const hospitalMatch = (hospital === '') || (serviceElement.hospital.name === hospital);
        const priceMatch = (price === 0) || (serviceElement.price <= price);
        const cityMatch = (city === '')  || (serviceElement.hospital.city === city);
        const regionMatch = (region === '') || (serviceElement.hospital.area === region); 
        return textMatch && serviceMatch && hospitalMatch && priceMatch && cityMatch && regionMatch;
    }).sort((a, b) => {
        if(sortBy === 'A to Z' || sortBy === 'ا الى ي'){
            return a.service.toLowerCase() < b.service.toLowerCase()? -1 : 1;
        }else if(sortBy === 'Z to A' || sortBy === 'ي الى ا'){
            return a.service.toLowerCase() < b.service.toLowerCase()? 1 : -1;
        }else if(sortBy === 'Lowest Price' || sortBy === 'اقل سعر'){
            return a.price < b.price? -1 : 1;
        }else if(sortBy === 'Highest Price' || sortBy === 'اغلى سعر'){
            return a.price < b.price? 1 : -1;
        }
    });
};

export default getVisibleServices;