import Vue from 'vue';
import Vuex from 'vuex';
import Ingredient from './interfaces/Ingredient';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        brews: Array(),
    },
    mutations: {
        addBrew(state, paylod) {
            state.brews.push(paylod.brew);
        },
        score: 1.9,
        flavourProfile: {
          bitter: 0.3,
          sweet: 0.7,
          sour: 0.1,
          spice: 0.05,
          salty: 0.05,
        },
        unitsSold: 46,
      },
    ],
    ingredients: [
      {
        name: 'Candyfloss',
        flavourProfile: {
          bitter: 0.2,
          sweet: 0.8,
          sour: 0.1,
          spice: 0.0,
          salty: 0.0,
        },
      },
      {
        name: 'Oats',
        flavourProfile: {
          bitter: 0.4,
          sweet: 0.6,
          sour: 0.1,
          spice: 0.1,
          salty: 0.1,
        },
      },
    ],
  },
  mutations: {
    addBrew(state, payload) {
      state.brews.push(payload);
    },
    addIngredients(state, payload: Ingredient[]) {
      // Get the current beer being developed...How?

      // Add the ingredients to that beer or the store
      state.ingredients = payload;
    },
  },
  actions: {},
});
