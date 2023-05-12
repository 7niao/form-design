<template>
  <el-col
      class="col"
      :span="element.options.span"
      :style="`height:${element.options.height}`"
  >
    <slot></slot>
  </el-col>
</template>

<script lang="ts" name="el-col-view" setup>
const props = defineProps<{
  element: any
}>()
</script>

<style lang="scss" scoped>
.col{
  //border: 1px dashed #ddd;
}
</style>