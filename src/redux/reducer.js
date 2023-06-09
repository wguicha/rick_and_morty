import { ADD_FAV, REMOVE_FAV, REMOVE_ALL, FILTER_CARDS, ORDER_CARDS} from './action_types'

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload,
            };
        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload };

            case REMOVE_ALL:
                return {
                    ...state,
                    myFavorites: [],
                    allCharacters: [],
                };

        case FILTER_CARDS:
            return {
                ...state,
                myFavorites: action.payload === 'All' ? state.allCharacters : state.allCharacters.filter((char) => char.gender === action.payload)
            };

        case ORDER_CARDS:
            return {
                ...state,
                    myFavorites: state.myFavorites.sort((x,y) => {
                        if(action.payload === 'A'){
                            return x.id - y.id;
                        } else {
                            return y.id - x.id;
                        }
                    })
            };

        default:
            return {...state};
    }
};

export default rootReducer;