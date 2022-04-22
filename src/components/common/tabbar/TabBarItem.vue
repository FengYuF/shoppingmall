<template>
  <!-- 当我们需要给插槽添加属性时,最好用其他标签将插槽进行包裹,添加的属性放在其他标签里
       因为插槽会被替换掉,为了保证这些属性不会被替换掉,所以才会将插槽包裹起来
   -->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"TabBarItem",
  data(){
    return {
    }
  },
  props:{
    link: String,
    activeColor:{
      type: String,
      default: "red"
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.link)
      console.log(this.$route.path);
      console.log(this.link);
      console.log(this.isActive);
    }
  },
  computed:{
    isActive() {
      return this.$route.path.indexOf(this.link) === -1
    },
    activeStyle() {
      return !this.isActive ? {color: this.activeColor} : {}
    }
  }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}
</style>
