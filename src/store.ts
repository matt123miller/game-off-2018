import Vue from 'vue';
import Vuex from 'vuex';
import Ingredient from './interfaces/Ingredient';
import Brew from './interfaces/Brew';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        brews: Array<Brew>(),
        currentBrew: {} as Brew,
        ingredients: Array<Ingredient>(),
    },
    mutations: {
        addBrew(state, payload: { brew: Brew }) {
            state.brews.push(payload.brew);
            state.currentBrew = payload.brew;
        },
        addIngredients(state, payload: Ingredient[]) {
            // Get the current beer being developed...How?

            // Add the ingredients to that beer or the store
            state.currentBrew.ingredients = payload;
        },
        initialiseStore(state) {
            // Check if the ID exists
            if (localStorage.getItem('store')) {
                // Replace the state object with the stored item
                // TODO: resolve TS error here... not sure how
                this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('store') || '{}')));
            }
        },
    },
    actions: {},
});
