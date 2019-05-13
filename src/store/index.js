import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'

import initState from "./initState"
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

import moduleA from "./modules/moduleA"
import moduleB from "./modules/moduleB"

Vue.use(Vuex)

// store
export default function(){
    const store = new Vuex.Store({
        strict: process.env.NODE_ENV !== 'production',
        // 声明state
        state:initState,
        mutations,
        actions,
        getters,
        modules:{
            moduleA,
            moduleB
        }
    })

    return store;
}