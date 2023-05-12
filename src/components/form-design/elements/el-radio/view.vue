<template>
  <common-view :element="element"></common-view>
</template>

<script lang="ts" name="el-radio-view" setup>
import CommonView from '../view.vue'

const props = defineProps<{
  element: any
}>()
</script>

<style lang="scss" scoped>

</style>