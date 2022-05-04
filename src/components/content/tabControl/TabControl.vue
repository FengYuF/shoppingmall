<template>
  <div class="tab-control">
    <div v-for="item in tiltes" :key="item.index" class="tab-control-item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    tiltes: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.tab-control{
display: flex;
}
.tab-control-item{
  flex: 1;
  text-align: center;
}
</style>
