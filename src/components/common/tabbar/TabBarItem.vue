<template>
  <div class="tab-bar-item" @click="itemClick">
<!--  将v-if等一些属性写在div是因为在slot中的会被替换  -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-isActive"></slot>
    </div>
    <div :class="{active: isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path: String
    },
    data() {
      return {
        // isActive: false
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    },
    computed: {
      isActive() {
        //indexOf 判断是否存在  不存在返回-1
        return this.$route.path.indexOf(this.path) !==-1
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
  }
  .active{
    color: red;
  }
</style>
