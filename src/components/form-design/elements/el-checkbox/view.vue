<template>
  <common-view :element="element">
    <el-checkbox-group>
      <el-checkbox
          v-for="item in element.options.options"
          :key="item.value"
          :label="item.value"
      >{{ item.label }}</el-checkbox>
    </el-checkbox-group>
  </common-view>
</template>

<script lang="ts" name="el-checkbox-view" setup>
import CommonView from '../view.vue'

const props = defineProps<{
  element: any
}>()
</script>

<style lang="scss" scoped>

</style>