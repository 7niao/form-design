<template>
  <common-view :element="element">
    <template #default="{formData}">
      <el-radio-group
          v-model="formData[element.prop]"
          :disabled="element.options.disabled"
          :text-color="element.options.textColor"
          :fill="element.options.fill"
          @change="handlerChange"
      >
        <el-radio-button
            v-if="element.options.button"
            v-for="item in element.options.options"
            :label="item.value"
            :key="item.value"
            :border="element.options.border"
            :disabled="item.disabled"
        >{{ item.label }}</el-radio-button>
        <el-radio
            v-else
            v-for="item in element.options.options"
            :label="item.value"
            :key="item.value"
            :border="element.options.border"
            :disabled="item.disabled"
        >{{ item.label }}</el-radio>
      </el-radio-group>
    </template>
  </common-view>
</template>

<script lang="ts" name="el-radio-group-view" setup>
import CommonView from '../view.vue'

const props = defineProps<{
  element: any
}>()

const handlerChange = (value: any) => {
  eval(props.element.options.change)
}
</script>

<style lang="scss" scoped>

</style>