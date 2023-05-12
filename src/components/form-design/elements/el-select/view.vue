<template>
  <common-view :element="element">
    <template #default="{formData}">
      <el-select
          v-model="formData[element.prop]"
          :class="element.options.customClass"
          :placeholder="element.options.placeholder"
          :disabled="element.options.disabled"
          :filterable="element.options.filterable"
          :clearable="element.options.clearable"
          :multiple="element.options.multiple"
          :multiple-limit="element.options.multipleLimit"
          :collapse-tags="element.options.collapseTags"
          :collapse-tags-tooltip="element.options.collapseTagsTooltip"
          :effect="element.options.effect"
      >
        <el-option
            v-for="item in element.options.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        ></el-option>
      </el-select>
    </template>
  </common-view>
</template>

<script lang="ts" name="el-select-view" setup>
import CommonView from '../view.vue'

const props = defineProps<{
  element: any
}>()
</script>

<style lang="scss" scoped>

</style>