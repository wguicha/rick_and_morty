import { ADD_FAV, REMOVE_FAV, REMOVE_ALL, FILTER_CARDS, ORDER_CARDS} from './action_types'
import axios from 'axios';

const URL = 'http://localhost:3001/rickandmorty/'

export const addFav = (payload) => {
    return (dispatch) => {
        axios.post(`${URL}fav`, payload).then(({ data }) => {
           return dispatch({
              type: ADD_FAV,
              payload: data,
           });
        });
    }
}

export const removeFav = (id) => {
    return (dispatch) => {
        axios.delete(`${URL}fav/${id}`).then(({ data }) => {
           return dispatch({
              type: REMOVE_FAV,
              payload: data,
        });
        });
     };
}

export const removeAll = () => {
    return { type: REMOVE_ALL}
}

export const filterCards = (gender) => {
    return { type: FILTER_CARDS, payload:gender}
}

export const orderCards = (order) => {
    return { type: ORDER_CARDS, payload:order}
}
