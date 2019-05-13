VueX
    1.安装：
        npm install vuex --save
    2.引入：
        import Vue from 'vue'
        import Vuex from 'vuex'
        Vue.use(Vuex)
    3.IE兼容性
        npm install es6-promise --save
        import 'es6-promise/auto'
    4.核心概念
        state
        getter
        mutation
        action
        module
    5.store的创建
        const store = new Vuex.Store({
            // 声明state
            state:{
                count:10
            }
        })
    6.state
        读取：this.$store.state.count
        mapState 辅助函数
            computed: {
                ...mapState(["count","msg"])
            }
    7.mutations
        1.更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
        2.创建
            mutations:{
                [MutationTypes.INCREMENT](state,payload){
                    state.count+=payload.num
                },
                [MutationTypes.DECREMENT](state,payload){
                    state.count-=payload.num
                }
            }
        3.调用
            this.$store.commit(MutationTypes.INCREMENT,{
                num:10
            })
        4.提交载荷
        5.对象风格的提交方式
        6.Mutation 需遵守 Vue 的响应规则：对象的属性发生变化，需要通过set方法处理
        7.使用常量替代 Mutation 事件类型
        8.Mutation 必须是同步函数
        9.在组件中提交 Mutation(辅助函数)
    8.Action
    9.Getter
    10.Module

