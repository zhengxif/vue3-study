<template>
    <div class="home">
        <div>name {{fullName}}</div>
        <van-button type="primary" @click="clickHandle">点击</van-button>
        {{ category }}
        <!-- <HomeHeader></HomeHeader> -->
    </div>
</template>

<script lang="ts">
import { IGlobalState } from "@/store";
import { computed, defineComponent } from "vue";
import { Store, useStore } from "vuex";
import HomeHeader from './home-header.vue';
import * as Types from '@/store/action-types'
import { CATOGORY_TYPES } from "@/typings/home";
import comMixin from './comMixin'

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
    mixins: [comMixin],
    components: {
        HomeHeader
    },
    data() {
        return {
            firstName: 'z',
            lastName: 'x',
            count: 0
        }
    },
    // 计算属性将被混入到组件实例中。所有 getter 和 setter 的 this 上下文自动地绑定为组件实例。
    computed: {
        fullName():string {
            return this.firstName + this.lastName
        }
    },
    watch: {
        count(newValue) {
            console.log(newValue);
        }
    },
    mounted() {
        setTimeout(() => {
            this.count ++;
        },1000)
    },
    // 方法中的 this 自动绑定为组件实例。
    methods: {
        clickHandle() {
            console.log(this.fullName)
        }
    },
    // 访问不到this
    setup(props, context) {
        let store = useStore<IGlobalState>();
        let { category, setCurrentCategory } = useCategory(store);
        return {
            category,
            setCurrentCategory
        }
    }
})
</script>

