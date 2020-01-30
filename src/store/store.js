import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        CarStyle: '',
        Bumpertype: '',
    },
    mutations: {
        setCarStyle(state, CarStyle) {
            state.CarStyle = CarStyle;
        },
        setBumpertype(state, Bumpertype) {
            state.Bumpertype = Bumpertype;
        },
    },
    getters: {
        CarStyle: state => state.CarStyle,
        Bumpertype: state => state.Bumpertype
    }
})