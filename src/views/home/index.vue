<template>
    <div class="home">
        {{ category }}
        <HomeHeader></HomeHeader>
    </div>
</template>

<script lang="ts">
import { IGlobalState } from "@/store";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import HomeHeader from './home-header.vue';

export default defineComponent({
    components: {
        HomeHeader
    },
    setup() {
        let store = useStore<IGlobalState>();
        let category = computed(() => {
            return store.state.home.currentCategory;
        })

        return {
            category
        }
    }
})
</script>

