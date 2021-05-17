//servicesReducer

const servicesReducerDefaultState = [];

const servicesReducer = (state = servicesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_SERVICE': {
            return [...state, action.serviceElement];
        }
        case 'REMOVE_SERVICE': {
            return state.filter(({id}) => (action.id !== id));
        }            
        default: return state;
    }
}

export default servicesReducer;