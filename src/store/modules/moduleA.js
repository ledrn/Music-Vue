export default {
    namespaced:true,
    state:{
        moduleACount:10000
    },
    mutations:{
        incrementA(state){
            state.moduleACount++
        },
        decrementA(state){
            state.moduleACount--
        }
    },
    actions:{
        incrementA({commit}){
            commit("incrementA")
        },
        decrementA({commit}){
            commit("decrementA")
        }
    },
    getters:{
        getModuleACount(state,getters,rootState){
            console.log(rootState);
            return state.moduleACount
        }
    }
}