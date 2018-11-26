import Vue from 'vue';
import Vuex from 'vuex';
import Ingredient from './interfaces/Ingredient';
import Brew from './interfaces/Brew';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    brews: Array<Brew>(),
  },
  mutations: {
    addBrew(state, payload) {
      state.brews.push(payload.brew);
    },
    addIngredients(state, payload: Ingredient[]) {
      // Get the current beer being developed...How?

      // Add the ingredients to that beer or the store
      state.ingredients = payload;
    },
  },
  actions: {},
  ingredients: [],
});
