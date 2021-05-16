import { CATOGORY_TYPES, IHomeState } from "@/typings/home"
import { Module } from "vuex"
import { IGlobalState } from '../index'

// 首页里应该存哪些数据
const state:IHomeState = {
    currentCategory: CATOGORY_TYPES.ALL,
    sliders: [],
    lessions: {
        hasMore: false,
        loading: false,
        offset: 0,
        limit: 5,
        list: []
    }
}
// Module里的参数第一个是自己的状态， 第二个是全局的状态
const home: Module<IHomeState, IGlobalState> = {
    namespaced: true,
    state
}


export default home