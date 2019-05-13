<template>
    <div class="hello">
        <!-- 读取VueX中的state状态 -->
        <!-- {{ this.$store.state.count }} -->
        <!-- {{ this.$store.getters.getCount }} : {{ msg }} -->
        {{ getCount }}
        <button @click="addHandler">增加</button>
        <button @click="minHandler">减少</button>

        <ul v-if="banners.banner">
            <li v-for="(item,index) in banners.banner" :key="index">
                <p>{{ item.title }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState,mapMutations,mapActions,mapGetters } from "vuex";
import * as MutationTypes from "@/store/mutations/mutation-types.js"

export default {
    name: "HelloWorld",
    data() {
        return {
        };
    },
    computed: {
        ...mapState(["count","msg","banners"]),
        ...mapGetters(["getCount"])
    },
    mounted() {
        //  修改count的值
        // this.$store.state.count=1000
        // 调用actions拿数据
        this.setBanners();
    },
    methods:{

        ...mapMutations([MutationTypes.INCREMENT,MutationTypes.DECREMENT]),
        ...mapActions(["increment","decrement","setBanners"]),

        addHandler(){
            // this.$store.commit(MutationTypes.INCREMENT,{
            //     num:10
            // })
            // this[MutationTypes.INCREMENT]({
            //     num:10
            // })

            // this.$store.dispatch("increment",{
            //     num:10
            // });
            this.increment({
                num:10
            })
            
        },
        minHandler(){
            // this.$store.commit(MutationTypes.DECREMENT,{
            //     num:10
            // })
            // this[MutationTypes.DECREMENT]({
            //     num:10
            // })
            
            // this.$store.dispatch("decrement",{
            //     num:10
            // });
            this.decrement({
                num:10
            })
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
