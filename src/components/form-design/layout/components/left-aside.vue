<template>
  <el-scrollbar class="left-aside">

    <div class="aside-header">
      <template
          v-for="(item, index) in tabs.list"
          :key="index"
      >
        <div
            class="item"
            :class="{ active: tabs.current === index }"
            @click="tabs.current = index"
        >
          <component
              class="icon"
              :is="index === 0 ? FigmaComponent : ListView"
              theme="outline"
              :strokeWidth="5"
          ></component>
          <span>{{ item.label }}</span>
        </div>
      </template>
      <div class="active-bar" :class="`position-${tabs.current}`"></div>
    </div>

    <div v-if="tabs.current === 0" class="fields-container">
      <el-collapse v-model="fieldsCollapse">
        <el-collapse-item
          v-for="(item, index) in fields"
          :key="index"
          :title="item.label"
          :name="item.value"
          class="collapse-item"
        >
          <vue-draggable
              class="content"
              v-model="item.list"
              item-key="prop"
              tag="div"
              v-bind="{
                group: { name: 'view', pull: 'clone', put: false },
                sort: false
              }"
              :clone="handlerClone"
          >
            <template #item="{ element, index }">
              <div class="item" @click="handlerClick(element)">{{ element.name }}</div>
            </template>
          </vue-draggable>
        </el-collapse-item>
      </el-collapse>
    </div>

  </el-scrollbar>
</template>

<script lang="ts" setup>
import { reactive, ref, inject } from 'vue'
import VueDraggable from 'vuedraggable'
import { commonFields, layoutFields } from "../../utils/fields"
import staticFields from '../../utils/fields/static'
import { uuid, deepClone } from'../../utils/utils'
import { FigmaComponent, ListView } from '@icon-park/vue-next'

const tabs = reactive({
  current: 0,
  list: [
    {
      label: '组件库',
      name: 'components',
      icon: 'FigmaComponent'
    },
    {
      label: '表单模板',
      name: 'template',
      icon: 'ListView'
    }
  ]
})

const fieldsCollapse = ref('common')
const fields = ref([
  {
    label: '基础字段',
    value: 'common',
    list: inject('commonFields')
  },
  {
    label: '布局容器',
    value: 'layout',
    list: inject('layoutFields')
  },
  {
    label: '业务字段',
    value: 'business',
    list: inject('extensionFields')
  }
])
const common = ref<any>()

const handlerClone = (element: any) => {
  const key = uuid()
  const el = deepClone(element)

  // 级联选项
  if (element.type === 'cascader') {
    el.options.remoteOption = 'cascader_option_' + key
  }

  let prop: string;
  if(staticFields.includes(element.type)){
    prop = element.type;
  } else {
    prop = element.type + '_' + key;
  }

  return Object.assign(el, {
    key,
    prop: prop,
  })
}

const formList = ref<any>(inject('formList'))
const formCurrent = ref<any>(inject('formCurrent'))
// 点击左侧
const handlerClick = (element: any) => {
  const key = uuid()
  const el = deepClone(element)

  // 级联选项
  if (element.type === 'cascader') {
    el.options.remoteOption = 'cascader_option_' + key
  }

  let prop: string;
  if(staticFields.includes(element.type)){
    prop = element.type;
  } else {
    prop = element.type + '_' + key;
  }
  formList.value.push(Object.assign(el, {
    key,
    prop
  }))
  formCurrent.value = formList.value.length - 1
}
</script>

<style lang="scss" scoped>
@import "../../style/common";
.left-aside{
  @extend .flex-column;
  .aside-header{
    @extend .flex-row;
    position: relative;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
    .item{
      @extend .flex-row;
      cursor: pointer;
      padding: 0 10px;
      transition: 200ms;
      .icon{
        @extend .flex-column;
        justify-content: center;
        padding: 2px 5px;
      }
      &.active,
      &:hover{
        color: $primary;
      }
    }
    .active-bar{
      z-index: 2;
      position: absolute;
      width: 75px;
      height: 1px;
      bottom: 0;
      background-color: $primary;
      transition: 200ms;
      &.position-0{
        width: 67px;
        left: 10px;
      }
      &.position-1{
        left: 95px;
      }
    }
  }

  .fields-container{
    padding: 0 10px 10px;
    :deep(.el-collapse){
      border: none;
    }
    .content{
      @extend .flex-row;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: -10px;
      .item{
        cursor: pointer;
        width: 45%;
        line-height: 32px;
        padding: 0 10px;
        margin-bottom: 10px;
        border-radius: 4px;
        border: 1px solid $primary;
        color: $primary;
      }
    }

  }
}
</style>