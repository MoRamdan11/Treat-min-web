//clinics Reducer

const clinicsReducerDefaultState = [];

const clincsReducer = ((state = clinicsReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_CLINIC':
            return [...state, action.clinic];
        case 'REMOVE_CLINIC':
            return state.filter(({id}) => (action.id !== id));
        default: return state;
    }
})


export default clincsReducer;