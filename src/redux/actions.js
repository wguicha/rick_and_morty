import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS} from './action_types'

export const addFav = (payload) => {
    return { type: ADD_FAV, payload: payload}
}

export const removeFav = (id) => {
    return { type: REMOVE_FAV, payload:id}
}

export const filterCards = (gender) => {
    return { type: FILTER_CARDS, payload:gender}
}

export const orderCards = (order) => {
    return { type: ORDER_CARDS, payload:order}
}
