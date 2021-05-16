import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Tabbar, TabbarItem } from 'vant';

const app = createApp(App);
app.use(Button)
    .use(Tabbar)
    .use(TabbarItem)

app.use(store).use(router).mount('#app')
