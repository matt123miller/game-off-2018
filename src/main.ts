import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './badTests';
import './configs/Containers';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
    beforeCreate() {
        this.$store.commit('initialiseStore');
    },
}).$mount('#app');

// Subscribe to store updates
store.subscribe((mutation, state) => {
    // Store the state object as a JSON string
    localStorage.setItem('store', JSON.stringify(state));
});