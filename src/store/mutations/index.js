import * as MutationTypes from "./mutation-types"

export default {
    [MutationTypes.INCREMENT](state,payload){
        state.count+=payload.num
    },
    [MutationTypes.DECREMENT](state,payload){
        state.count-=payload.num
    },
    firstBanners(state){
        console.log("我执行了");
    },
    setBanners(state,obj){
        state.banners = obj
    }
}