//specialRooms Selectors

const getVisibleSpecialRooms = (rooms, {text, room, hospital, price, sortBy}) => {
    return rooms.filter((roomElement) => {
        const textMatch = text === '' || roomElement.room.toLowerCase().includes(text.toLowerCase()) ||
                        roomElement.hospital.toLowerCase().includes(text.toLowerCase());
        const roomMatch = (room === '') || (roomElement.room === room);
        const hospitalMatch = (hospital === '') || (roomElement.hospital === hospital);
        const priceMatch = (price === 0) || (roomElement.price <= price);
        return textMatch && roomMatch && hospitalMatch && priceMatch;
    }).sort((a, b) => {
        if(sortBy === 'A to Z' || sortBy === 'ا الى ي'){
            return a.room.toLowerCase() < b.room.toLowerCase()? -1 : 1;
        }else if(sortBy === 'Z to A' || sortBy === 'ي الى ا'){
            return a.room.toLowerCase() < b.room.toLowerCase()? 1 : -1;
        }else if(sortBy === 'Lowest Price' || sortBy === 'اقل سعر'){
            return a.price < b.price? -1 : 1;
        }else if(sortBy === 'Highest Price' || sortBy === 'اغلى سعر'){
            return a.price < b.price? 1 : -1;
        }
    })
}

export default getVisibleSpecialRooms;