<template>
    <div>
        {{ this.$store.state.count }}
        HelloVueX:
        <button @click="addHandler">增加</button>
        <button @click="minHandler">减少</button>
    </div>
</template>
<script>

import { mapState,mapMutations } from "vuex";

export default {
    name:"HelloVueX",
    data(){
        return{

        }
    },
    methods:{
        ...mapMutations(["INCREMENT","DECREMENT"]),
        addHandler(){
            // this.$store.commit("INCREMENT",{
            //     num:20
            // })
            this.INCREMENT({
                num:20
            });
        },
        minHandler(){
            // this.$store.commit("DECREMENT",{
            //     num:20
            // })
            this.DECREMENT({
                num:20
            })
        }
    }
}
</script>
<style scoped>

</style>
