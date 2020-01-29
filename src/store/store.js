import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        CarStyleOne: '1',
    },
    mutations: {
        setCarStyleOne(state, CarStyleOne) {
            state.CarStyleOne = CarStyleOne;
        },
    },
    getters: {
        CarStyleOne: state => state.CarStyleOne
    }
})