<template>
  <common-view :element="element">
    <template #default="{formData}">
      <el-time-picker
          v-model="formData[element.prop]"
          :placeholder="element.options.placeholder"
          :disabled="element.options.disabled"
          :start-placeholder="element.options.startPlaceholder"
          :end-placeholder="element.options.endPlaceholder"
          :is-range="element.options.isRange"
          :arrow-control="element.options.arrowControl"
          :range-separator="element.options.rangeSeparator"
      ></el-time-picker>
    </template>
  </common-view>
</template>

<script lang="ts" name="el-time-picker-view" setup>
import CommonView from '../view.vue'

const props = defineProps<{
  element: any
}>()

const handlerDisabledHours = () => {}
</script>

<style lang="scss" scoped>

</style>