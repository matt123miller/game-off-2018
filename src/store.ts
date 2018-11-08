import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        brews: [
            {
                id: 34567890,
                name: 'Broski Brewski',
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
                container: {
                    name: 'Stubby Can',
                    size: 0.5,
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
    },
    mutations: {
    },
    actions: {
    },
});
