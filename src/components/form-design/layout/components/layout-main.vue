<template>
  <div class="layout-main">
    <el-form
        class="form-box"
        :size="formConfig.size"
        :label-width="formConfig.labelWidth"
        :label-position="formConfig.labelPosition"
        :hide-required-asterisk="formConfig.hideAsterisk"
    >
      <draggable
          class="draggable-box"
          :list="formList"
          tag="el-row"
          item-key="prop"
          group="view"
          :animation="200"
          ghostClass="move-class"
          handle=".drag-box"
          @end="dragEnd"
          @add="handlerAdd"
      >
        <template #item="{element, index}">
          <form-item :element="element" :index="index"></form-item>
        </template>
      </draggable>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue'
import Draggable from "vuedraggable"
import FormItem from '../../components/form-item.vue'

const formConfig = ref<any>(inject('formConfig'))
const formList = ref<Array<any>>(inject('formList') as any)
const formCurrent = ref<any>(inject('formCurrent'))

const handlerAdd = (element: any) => {
  formCurrent.value = element.newIndex
}

const dragEnd = (element: any) => {
  formCurrent.value = element.newIndex
}
</script>

<style lang="scss" scoped>
@import "../../style/common";
.layout-main,
.form-box{
  width: 100%;
  height: 100%;
}
.draggable-box{
  @extend .flex-row;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  justify-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
</style>