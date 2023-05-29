import { ADD_FAV, REMOVE_FAV } from  './actions';

const initialState = {
    myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_FAV:
            return 1;
        case REMOVE_FAV:
            return 2;
        default:
            return {...state};
    }
};

export default rootReducer;