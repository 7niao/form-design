<template>
  <common-view :element="element">
    <template #default="{formData}">
      <el-cascader
          v-model="formData[element.prop]"
          :class="element.options.customClass"
          :placeholder="element.options.placeholder"
          :props="eleProps"
          :options="element.options.options"
          :disabled="element.options.disabled"
          :readonly="element.options.readonly"
          :clearable="element.options.clearable"
          :show-all-levels="element.options.showAllLevels"
          :collapse-tags="element.options.collapseTags"
          :collapse-tags-tooltip="element.options.collapseTagsTooltip"
          :separator="element.options.separator"
          :filterable="element.options.filterable"
          :filter-method="filterMethod"
          :debounce="element.options.debounce"
          :before-filter="beforeFilter"
          :popper-class="element.options.popperClass"
          :teleported="element.options.teleported"
          :tag-type="element.options.tagType"
          :validate-event="element.options.validateEvent"
          @change="handlerChange"
          @expand-change="handlerExpandChange"
          @blur="handlerBlur"
          @focus="handlerFocus"
          @visible-change="handlerVisibleChange"
          @remove-tag="handlerRemoveTag"
      ></el-cascader>
    </template>
  </common-view>
</template>

<script lang="ts" name="el-cascader-view" setup>
import { ref } from 'vue'
import CommonView from '../view.vue'

const props = defineProps<{
  element: any
}>()

// element-plus级联选择器的props属性
const eleProps = ref<any>(eval(props.element.options.props))

// 自定义搜索
const filterMethod = (node: any, keyword: any) => {
  eval(props.element.options.filterMethod)
}

//
const beforeFilter = (value: any) => {
  eval(props.element.options.beforeFilter)
}

const handlerChange = (value: any) => {
  eval(props.element.options.change)
}

const handlerExpandChange = (value: any) => {
  eval(props.element.options.expandChange)
}

const handlerBlur = (event: any) => {
  eval(props.element.options.blur)
}

const handlerFocus = (event: any) => {
  eval(props.element.options.focus)
}

const handlerVisibleChange = (visible: boolean) => {
  eval(props.element.options.visibleChange)
}

const handlerRemoveTag = (value: any) => {
  eval(props.element.options.removeTag)
}
</script>

<style lang="scss" scoped>

</style>