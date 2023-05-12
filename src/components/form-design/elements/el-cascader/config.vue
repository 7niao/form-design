<template>

</template>

<script lang="ts" name="el-cascader-config" setup>
import { watch, ref, inject } from 'vue'
import Draggable from "vuedraggable"
import { SortTwo, ReduceOne, CheckSmall } from '@icon-park/vue-next'

const props = defineProps<{
  config: any
}>()

const formData = ref<any>(inject('formData'))
</script>

<style lang="scss" scoped>

</style>