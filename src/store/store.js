import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        CarStyle: '',
        Bumpertype: 'กระบะบรรทุก',
        numberOfSubType: "",
        CheckWidth: '',
        RLtype: '',
        rfone: '',
        rftwo: '',
        rfthree: '',
        rffour: '',
        rffive: '',
        rfsix: '',
        lfone: '',
        lftwo: '',
        lfthree: '',
        lffour: '',
        lffive: '',
        lfsix: '',
    },
    mutations: {
        setCarStyle(state, CarStyle) {
            state.CarStyle = CarStyle;
        },
        setBumpertype(state, Bumpertype) {
            state.Bumpertype = Bumpertype;
        },
        setnumberOfSubType(state, numberOfSubType) {
            state.numberOfSubType = numberOfSubType;
        },

        setCheckWidth(state, CheckWidth) {
            state.CheckWidth = CheckWidth;
        },
        setRLtype(state, RLtype) {
            state.RLtype = RLtype;
        },
        setrfone(state, rfone) {
            state.rfone = rfone;
        },
        setrftwo(state, rftwo) {
            state.rftwo = rftwo
        },
        setrfthree(state, rfthree) {
            state.rfthree = rfthree
        },
        setrffour(state, rffour) {
            state.rffour = rffour
        },
        setrffive(state, rffive) {
            state.rffive = rffive
        },
        setrfsix(state, rfsix) {
            state.rfsix = rfsix
        },
        setlfone(state, lfone) {
            state.lfone = lfone
        },
        setlftwo(state, lftwo) {
            state.lftwo = lftwo
        },
        setlfthree(state, lfthree) {
            state.lfthree = lfthree
        },
        setlffour(state, lffour) {
            state.lffour = lffour
        },
        setlffive(state, lffive) {
            state.lffive = lffive
        },
        setlfsix(state, lfsix) {
            state.lfsix = lfsix
        },
    },
    getters: {
        CarStyle: state => state.CarStyle,
        Bumpertype: state => state.Bumpertype,
        numberOfSubType: state => state.numberOfSubType,
        CheckWidth: state => state.CheckWidth,
        RLtype: state => state.RLtype,
        rfone: state => state.rfone,
        rftwo: state => state.rftwo,
        rfthree: state => state.rfthree,
        rffour: state => state.rffour,
        rffive: state => state.rffive,
        rfsix: state => state.rfsix,
        lfone: state => state.lfone,
        lftwo: state => state.lftwo,
        lfthree: state => state.lfthree,
        lffour: state => state.lffour,
        lffive: state => state.lffive,
        lfsix: state => state.lfsix,

    }
})