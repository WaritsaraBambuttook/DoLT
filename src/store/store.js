import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        CarStyle: '',
        Bumpertype: '',
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
        num_rf1: '',
        num_rf2: '',
        num_rf31: '',
        num_rf32: '',
        num_rf33: '',
        num_rf4: '',
        num_lf1: '',
        num_lf2: '',
        num_lf31: '',
        num_lf32: '',
        num_lf33: '',
        num_lf4: '',

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
        //RUPD
        setnum_rf1(state, num_rf1) {
            state.num_rf1 = num_rf1
        },
        setnum_rf2(state, num_rf2) {
            state.num_rf2 = num_rf2
        },
        setnum_rf31(state, num_rf31) {
            state.num_rf31 = num_rf31
        },
        setnum_rf32(state, num_rf32) {
            state.num_rf32 = num_rf32
        },
        setnum_rf33(state, num_rf33) {
            state.num_rf33 = num_rf33
        },
        setnum_rf4(state, num_rf4) {
            state.num_rf4 = num_rf4
        },
        //LUPD
        setnum_lf1(state, num_lf1) {
            state.num_lf1 = num_lf1
        },
        setnum_lf2(state, num_lf2) {
            state.num_lf2 = num_lf2
        },
        setnum_lf31(state, num_lf31) {
            state.num_lf31 = num_lf31
        },
        setnum_lf32(state, num_lf32) {
            state.num_lf32 = num_lf32
        },
        setnum_lf33(state, num_lf33) {
            state.num_lf33 = num_lf33
        },
        setnum_lf4(state, num_lf4) {
            state.num_lf4 = num_lf4
        }
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
        //Num RUPD
        num_rf1: state => state.num_rf1,
        num_rf2: state => state.num_rf2,
        num_rf31: state => state.num_rf31,
        num_rf32: state => state.num_rf32,
        num_rf33: state => state.num_rf33,
        num_rf4: state => state.num_rf4,
        //Num LUPD
        num_lf1: state => state.num_lf1,
        num_lf2: state => state.num_lf2,
        num_lf31: state => state.num_lf31,
        num_lf32: state => state.num_lf32,
        num_lf33: state => state.num_lf33,
        num_lf4: state => state.num_lf4,
    }
})