import mutations from './mutations'
import actions from './actions'
import getters from './getters'


const state = {
    restaurants: [],
    error: null,
    isFetching: false
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
