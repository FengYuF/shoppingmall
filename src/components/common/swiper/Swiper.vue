<template>
  <div class="home-swiper" @touchmove="ctouchmove" @touchend='ctouchleave'>
    <slot></slot>
  </div>
</template>

<script>
import SwiperItem from './SwiperItem.vue'
export default {
  name: 'Swiper',
  components: {
    SwiperItem
  },
  methods:{
    ctouchmove (){
      this.$emit('ftouchmove')
    },
    ctouchleave (){
      this.$emit('ftouchend')
    }
  }
}
</script>

<style>

</style>
