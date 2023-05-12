<template>
  <common-view :element="element">
    <template #default="{formData}">
      <el-date-picker
          v-model="formData[element.prop]"
          :placeholder="element.options.placeholder"
          :start-placeholder="element.options.startPlaceholder"
          :end-placeholder="element.options.endPlaceholder"
          :range-separator="element.options.rangeSeparator"
          :type="element.options.type"
          :value-format="element.options.valueFormat"
          :format="element.options.format"
          :clearable="element.options.clearable"
      ></el-date-picker>
    </template>
  </common-view>
</template>

<script lang="ts" name="el-date-picker-view" setup>
import CommonView from '../view.vue'

const props = defineProps<{
  element: any
}>()
</script>

<style lang="scss" scoped>

</style>