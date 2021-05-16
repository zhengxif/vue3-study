<template>
  <div id="nav">
    <van-tabbar route>
        <van-tabbar-item icon="home-o" to="/">home</van-tabbar-item>
        <van-tabbar-item icon="user-o" dot to="mine">我的</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  
})
</script>

