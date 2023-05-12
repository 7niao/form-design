<template>
  <design-layout class="design-content" />
</template>

<script lang="ts" setup>
import { provide, ref } from 'vue'
import DesignLayout from './layout/layout.vue'
import {
  commonFields,
  layoutFields,
  extensionFields
} from './utils/fields'
import staticFields from "./utils/fields/static";

const props = withDefaults(defineProps<{
  list?: any,
  config?: any,
  formData?: any,
  type?: string,
  commonFields?: any
  layoutFields?: any
  extensionFields?: any
  staticComponents?: any
}>(),{
  list: [],
  config: {
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
  },
  formData: {},
  type: 'design',
  commonFields: commonFields,
  layoutFields: layoutFields,
  extensionFields: extensionFields,
  staticComponents: staticFields
})

// 初始的表单json
provide('formList', ref<Array<any>>(props.list))
provide('formConfig', ref<any>(props.config))
provide('formType', ref(props.type))
provide('formData', ref(props.formData))
provide('commonFields', ref(props.commonFields))
provide('layoutFields', ref(props.layoutFields))
provide('extensionFields', ref(props.extensionFields))

provide('staticComponent', ref(props.staticComponent)) // 不可删除的字段数组

// 初始的表单设计器选中部分
provide('formCurrent', ref(NaN))
</script>

<style lang="scss" scoped>
.design-content{
  font-size: 13px;
  *{
    box-sizing: border-box;
    transition: 200ms;
  }
}
</style>