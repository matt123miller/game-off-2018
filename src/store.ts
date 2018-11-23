import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        brews: Array(),
    },
    mutations: {
        addBrew(state, paylod) {
            state.brews.push(paylod.brew);
        },
    },
    actions: {},
});
