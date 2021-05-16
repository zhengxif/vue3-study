import { IHomeState } from '@/typings/home'
import { createStore } from 'vuex'
import home from './modules/home'


export interface IGlobalState {
  home: IHomeState
}

const store = createStore<IGlobalState>({
  mutations: {
  },
  actions: {
  },
  modules: {
    home
  }
})



export default store;


