<template>
  <el-scrollbar class="right-aside">

    <div class="aside-header">
      <template
          v-for="(item, index) in tabs.list"
          :key="index"
      >
        <div
            class="item"
            :class="{ active: tabs.current === index }"
            @click="tabs.current = index"
        >{{ item.label }}</div>
      </template>
      <div class="active-bar" :class="`position-${tabs.current}`"></div>
    </div>

    <div class="content">

      <form-config v-if="tabs.current === 0" />
      <element-config v-else-if="elementConfig !== null" :config="elementConfig" />

    </div>

  </el-scrollbar>
</template>

<script lang="ts" setup>
import { reactive, ref, inject, watch } from 'vue'
import FormConfig from '../config/form-config.vue'
import ElementConfig from '../config/element-config.vue'

const tabs = reactive({
  current: 0,
  list: [
    {
      label: '表单配置',
      name: 'form'
    },
    {
      label: '组件配置',
      name: 'component'
    },
  ]
})

const formCurrent = ref<any>(inject('formCurrent'))
const formList = ref<any>(inject('formList'))
const elementConfig = ref<any>(null)

watch(formCurrent, (nVal: any) => {
  if(formList.value.length > 0 && formList.value[nVal]) {
    tabs.current = 1
    elementConfig.value = formList.value[nVal]
  } else {
    tabs.current = 0
    elementConfig.value = null
  }
},{
  immediate: true,
  deep: true
})
</script>

<style lang="scss" scoped>
@import "../../style/common";
.right-aside{
  @extend .flex-column;
  .aside-header{
    @extend .flex-row;
    z-index: 999;
    position: sticky;
    top: 0;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    .item{
      cursor: pointer;
      padding: 0 10px;
      transition: 200ms;
      &.active,
      &:hover{
        color: $primary;
      }
    }
    .active-bar{
      z-index: 2;
      position: absolute;
      width: 55px;
      height: 1px;
      bottom: 0;
      background-color: $primary;
      transition: 200ms;
      &.position-0{
        left: 10px;
      }
      &.position-1{
        left: 80px;
      }
    }
  }

  .content{
    padding: 0 15px 15px;
    :deep(.el-collapse){
      border: none;
    }
    .label-content{
      @extend .flex-row;
    }
  }
}
</style>