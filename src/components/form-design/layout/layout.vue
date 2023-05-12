<template>
  <el-container class="form-design-layout">
    <el-aside class="form-design-left-aside" :width="leftWidth">
      <left-aside />
    </el-aside>

    <el-container>

      <el-header class="form-design-header">
        <layout-header></layout-header>
      </el-header>

      <el-main class="form-design-main">
        <layout-main></layout-main>
      </el-main>

    </el-container>

    <el-aside class="form-design-right-aside" :width="rightWidth">
      <right-aside />
    </el-aside>

  </el-container>
</template>

<script lang="ts" setup>
import LeftAside from './components/left-aside.vue';
import RightAside from './components/right-aside.vue';
import LayoutHeader from './components/layout-header.vue';
import LayoutMain from './components/layout-main.vue';

const props = withDefaults(defineProps<{
  leftWidth?: string
  rightWidth?: string
}>(),{
  leftWidth: '240px',
  rightWidth: '280px'
})
</script>

<style lang="scss" scoped>
.form-design-layout{
  position: relative;
  height: 100%;
  background-color: #FAFCFF;
  .form-design-left-aside{
    z-index: 2;
    border-right: 1px solid #eee;
    background-color: #fff;
  }
  .form-design-right-aside{
    z-index: 2;
    border-left: 1px solid #eee;
    background-color: #fff;
  }

  .form-design-header{
    z-index: 1;
    height: 40px;
    padding: 0;
    background-color: #ffffff;
    box-shadow: 0 2px 5px rgba(0,0,0,.04);
  }

  .form-design-main{
    z-index: 1;
    margin: 15px;
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 1px 1px 3px rgba(0,0,0,.1);
  }
}
</style>