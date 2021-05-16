<template>
    <div class="home">
        {{ category }}
        <HomeHeader></HomeHeader>
    </div>
</template>

<script lang="ts">
import { IGlobalState } from "@/store";
import { computed, defineComponent } from "vue";
import { Store, useStore } from "vuex";
import HomeHeader from './home-header.vue';
import * as Types from '@/store/action-types'
import { CATOGORY_TYPES } from "@/typings/home";


// 与原来的option配置api相比，这种compositionAPI更好维护代码
function useCategory(store:Store<IGlobalState>) {
    let category = computed(() => {
        return store.state.home.currentCategory;
    })
    function setCurrentCategory(category:CATOGORY_TYPES) {
        store.commit(`home/${Types.SET_CATEGORY}`, category)
    }
    return {
        category,
        setCurrentCategory
    }
}

export default defineComponent({
    components: {
        HomeHeader
    },
    setup() {
        let store = useStore<IGlobalState>();
        let { category, setCurrentCategory } = useCategory(store);



        return {
            category,
            setCurrentCategory
        }
    }
})
</script>

