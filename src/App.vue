<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item link="/home" activeColor="tomato">
        <img slot="item-icon" src="./assets/images/home-fill.svg" alt="home">
        <img slot="item-icon-active" src="./assets/images/home-fill-a.svg" alt="home">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category" activeColor="tomato">
        <img slot="item-icon" src="./assets/images/分类.svg" alt="分类">
        <img slot="item-icon-active" src="./assets/images/分类-a.svg" alt="分类">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/shoppingCart" activeColor="tomato">
        <img slot="item-icon" src="./assets/images/购物车满.svg" alt="购物车">
        <img slot="item-icon-active" src="./assets/images/购物车满-a.svg" alt="购物车">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile" activeColor="tomato">
        <img slot="item-icon" src="./assets/images/我的.svg" alt="我的">
        <img slot="item-icon-active" src="./assets/images/我的-a.svg" alt="我的">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import router from './router/index'
import TabBar from './components/common/tabbar/TabBar.vue'
import TabBarItem from './components/common/tabbar/TabBarItem.vue'
export default {
  name: 'App',
  router,
  components:{
    TabBar,
    TabBarItem
  }
}
</script>
<style>
  @import "./assets/css/base.css";
</style>
