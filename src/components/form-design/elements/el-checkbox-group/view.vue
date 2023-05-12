<template>
  <common-view :element="element">
    <template #default="{formData}">
      <el-checkbox-group
          v-model="formData[element.prop]"
          :disabled="element.options.disabled"
          :min="element.options.min"
          :max="element.options.max"
          :text-color="element.options.textColor"
          :fill="element.options.fill"
      >
        <el-checkbox-button
            v-if="element.options.button"
            v-for="item in element.options.options"
            :key="item.value"
            :label="item.value"
        >{{ item.label }}</el-checkbox-button>
        <el-checkbox
            v-else
            v-for="item in element.options.options"
            :key="item.value"
            :label="item.value"
            :border="element.options.border"
        >{{ item.label }}</el-checkbox>
      </el-checkbox-group>
    </template>
  </common-view>
</template>

<script lang="ts" name="el-checkbox-group-view" setup>
import CommonView from '../view.vue'

const props = defineProps<{
  element: any
}>()
</script>

<style lang="scss" scoped>

</style>