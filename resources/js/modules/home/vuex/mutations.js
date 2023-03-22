import { GET_RESTAURANTS, GET_API_FAIL, GET_RESTAURANTS_SUCCESS } from "./constants";

export default {
    [GET_RESTAURANTS]: (state)=> {
        state.isFetching = true;
        state.error = null;
        state.restaurants = []
    },
    [GET_API_FAIL]: (state, error)=> {
        state.isFetching = false;
        state.error = error;
    },
    [GET_RESTAURANTS_SUCCESS]: (state, payload)=> {
        state.isFetching = false;
        state.restaurants = payload;
    }
}
