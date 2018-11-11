import Vue from 'vue';
import Router from 'vue-router';
import Menu from './views/Menu.vue';
import Brews from './views/Brews.vue';
import Ingredients from './views/Ingredients.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/brews',
      name: 'brews',
      component: Brews,
    },
    {
      path: '/ingredients',
      name: 'ingredients',
      component: Ingredients,
    },
  ],
});
