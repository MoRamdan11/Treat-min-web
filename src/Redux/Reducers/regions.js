//Regions Reducer

const regionDefaultState = [];

const regionReducer = (state = regionDefaultState, action) => {
    switch(action.type){
        case 'ADD_REGION': 
            return [...state, action.region];
        default: return state;
    }
}

export default regionReducer;