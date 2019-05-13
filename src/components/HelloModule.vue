<template>
    <div>
        HelloModule:
        <!-- ModuleA:{{ this.$store.state.moduleA.moduleACount }}
        ModuleB:{{ this.$store.state.moduleB.moduleBCount }} -->
        ModuleA:{{ getMudleACount }}
        ModuleB:{{ this.$store.state.moduleB.moduleBCount }}
        <button @click="addClickHandlerA">Module-Add</button>
        <button @click="minClickHandlerA">Module-Min</button>
    </div>
</template>
<script>

import { mapGetters } from "vuex"

export default {
    name:"HelloModule",
    data(){
        return{

        }
    },
    computed: {
        ...mapGetters({
            getMudleACount:"moduleA/getModuleACount"
        })
    },
    methods:{
        addClickHandlerA(){
            // this.$store.commit("incrementA")
            this.$store.dispatch("moduleA/incrementA")
        },
        minClickHandlerA(){
            // this.$store.commit("decrementA")
            this.$store.dispatch("moduleA/decrementA")
        }
    }
}
</script>
<style scoped>

</style>
