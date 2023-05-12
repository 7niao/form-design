<template>
  <el-form
      ref="formEle"
      :class="config.customClass"
      :model="formData"
      :rules="rules"
      :disabled="config.disabled"
      :label-width="config.labelWidth"
      :label-position="config.labelPosition"
      :size="config.size"
      :hide-required-asterisk="config.hideAsterisk"
      :show-message="!config.hideError"
  >
    <el-row>
      <template
          v-for="(item, index) in list"
          :key="index"
      >
        <el-col :span="item.options.span">
          <component :is="getComponent(item)" :element="item"></component>
        </el-col>
      </template>
    </el-row>

  </el-form>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, provide, ref, onMounted, onUpdated, onUnmounted } from "vue";

const props = withDefaults(defineProps<{
  list?: any,
  config?: any,
  formData?: any
  rules?: any
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
    requireAsteriskPosition: 'right', // 必填星号位置 left/right
    onMounted: '', // 生命周期函数，eval转为js语句
    onUpdated: '', //
    onUnmounted: '', //
  },
  formData: {},
  rules: {}
})

provide('formData', props.formData)

const getComponent = (item: any) => {
  return defineAsyncComponent(() => import(`./elements/${item.path}/view.vue`))
}

const formEle = ref<any>()

const submit = () => {
  return new Promise((resolve, reject) => {
    formEle.value?.validate((valid: boolean) => {
      if(valid) {
        resolve(props.formData)
      } else {
        reject(valid)
      }
    })
  })
}

const reset = () => {
  formEle.value?.resetFields()
}

defineExpose({
  submit,
  reset
})

onMounted(() => {
  const formObj: any = {}
  props.list.forEach((item: any) => {
    if(item.prop) formObj[item.prop] = ''
  })
  Object.assign(props.formData, formObj)

  eval(props.config.onMounted)
})
onUpdated(() => {
  eval(props.config.onUpdated)
})
onUnmounted(() => {
  eval(props.config.onUnmounted)
})
</script>

<style lang="scss" scoped>

</style>