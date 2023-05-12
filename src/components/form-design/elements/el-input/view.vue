<template>
  <common-view :element="element">
    <template #default="{formData}">
      <el-input
          v-model="formData[element.prop]"
          :class="element.options.customClass"
          :type="element.options.type"
          :disabled="element.options.disabled"
          :readonly="element.options.readonly"
          :placeholder="element.options.placeholder"
          :show-password="element.options.showPassword"
          :max="element.options.max"
          :min="element.options.min"
          :maxlength="element.options.maxlength"
          :minlength="element.options.minlength"
          :formatter="handlerFormatter"
          :clearable="element.options.clearable"
          :show-word-limit="element.options.showWordLimit"
          @blur="handlerBlur"
          @focus="handlerFocus"
          @change="handlerChange"
          @inpu="handlerInput"
          @clear="handlerClear"
      >
        <template v-if="element.options.prefix" #prefix>
          <slot name="prefix">
            <div v-html="element.options.prefix"></div>
          </slot>
        </template>
        <template v-if="element.options.suffix" #prefix>
          <slot name="suffix">
            <div v-html="element.options.suffix"></div>
          </slot>
        </template>
        <template v-if="element.options.prepend" #prefix>
          <slot name="prepend">
            <div v-html="element.options.prepend"></div>
          </slot>
        </template>
        <template v-if="element.options.append" #prefix>
          <slot name="append">
            <div v-html="element.options.append"></div>
          </slot>
        </template>
      </el-input>
    </template>
  </common-view>
</template>

<script lang="ts" name="el-input-view"  setup>
import { ref } from 'vue'
import CommonView from '../view.vue'

const props = defineProps<{
  element: any
}>()

//
const handlerFormatter = (value: string|number): any => {
  if(props.element.options.formatter)
    return eval('(' + props.element.options.formatter + ')')
  else return value
}

// 失去焦点
const handlerBlur = (event: any) => {
  eval(props.element.options.blur)
}

// 获得焦点
const handlerFocus = (event: any) => {
  eval(props.element.options.blur)
}

// 变化
const handlerChange = (value: string | number) => {
  eval(props.element.options.change)
}

// input值改变时
const handlerInput = (value: string | number) => {
  eval(props.element.options.input)
}

// 清空时
const handlerClear = (e: any) => {
  eval(props.element.options.clear)
}

const value = ref<any>(props.element.value)
</script>

<style lang="scss" scoped>

</style>