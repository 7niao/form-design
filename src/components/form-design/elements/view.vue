<template>
  <el-form-item
      class="custom-form-item"
      :label="element.name"
      :prop="element.prop"
      :label-width="element.options.labelWidth !== '' ? `${element.options.labelWidth}${element.options.labelWidthUnit}` : ''"
      :label-position="element.labelPosition"
      :rules="{ required: element.options.required, message: element.options.requireMessage }"
  >
    <slot v-bind:formData="formData"></slot>
  </el-form-item>
</template>

<script lang="ts" setup>
import { onMounted, ref, inject } from 'vue'

const props = defineProps<{
  element: any
}>()

const formData = ref<any>(inject('formData'))

onMounted(() => {
  const options = props.element.options
  const prop = props.element.prop
  if(prop) {
    if(['', null, NaN, undefined].includes(formData.value[prop])) formData.value[prop] = options.defaultValue
  }
})
</script>

<style lang="scss" scoped>
.custom-form-item{
  :deep(.el-radio-group),
  :deep(.el-select),
  :deep(.el-date-editor.el-input),
  :deep(.el-cascader){
    width: 100%;
  }
}
</style>