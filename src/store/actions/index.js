import * as MutationTypes from "../mutations/mutation-types"

export default {
    // 结构赋值  context={commit}    { commit } = context
    increment({commit},payload){
        setTimeout(function(){
            commit(MutationTypes.INCREMENT,payload)
        },0)
    },
    decrement(context,payload){
        context.commit(MutationTypes.DECREMENT,payload)
    },
    firstBanners({commit}){
        commit("firstBanners")
    },
    async setBanners({commit}){
        await fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
        .then(res => res.json())
        .then(data => {
            commit("setBanners",data)
            console.log("网络请求")
        })
        .catch(error => {
            commit("setBanners",{
                msg:'请求失败'
            })
        })
        commit("firstBanners");
    }
}