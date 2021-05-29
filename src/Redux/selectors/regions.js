const getVisibleRegions = (regions) => {
    return regions.sort((a, b) => {
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
    });
}

export default getVisibleRegions;