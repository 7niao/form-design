<template>
  <form-design
      v-if="true"
      :extensionFields="extensionFields"
  />
  <form-view v-else :list="formJson.list" :config="formJson.config" :form-data="formData" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import FormDesign from '@/components/form-design/design.vue'
import FormView from '@/components/form-design/form.vue'

import formJson from './json'

const formData = ref<any>({})

const formConfig = ref({
  formName: '',
  projectId: '',
  projectName: '',
  remark: '',
  labelWidth: 100,
  labelPosition: 'right',
  size: 'default',
  customClass: '',
  disabled: false,
  hideError: false, // 验证错误信息
  hideAsterisk: false, // 必填星号
  onMounted: '', // 生命周期函数，eval转为js语句
  onUpdated: '', //
  onUnmounted: '', //
})
const extensionFields = ref<any[]>([
  {
    type: 'extend',
    extend: true,
    path: 'components/extend-component',
    name: '拓展',
    options: {
      span: 24
    }
  }
])
</script>

<style lang="scss">
html, body, #app{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
/* 移除type=number时原生dom的箭头 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>