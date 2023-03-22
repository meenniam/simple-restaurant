import { GET_RESTAURANTS_SUCCESS, GET_API_FAIL, GET_RESTAURANTS } from "./constants";
import {getRestaurants} from '../services'

export default {
    getRestaurants: async ({ commit }, payload)=> {
        try {
            commit(GET_RESTAURANTS)
            const data = await getRestaurants(payload);
            commit(GET_RESTAURANTS_SUCCESS, data)
        } catch (e) {
            commit(GET_API_FAIL, e.message)
        }
    }
}
