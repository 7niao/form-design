<template>
  <el-dialog
      title="预览"
      v-model="visible"
      append-to-body
      center
      destroy-on-close
      width="800px"
  >
    <div class="form-content">
      <form-view
          ref="formViewEle"
          :config="formJson.config"
          :list="formJson.list"
          :form-data="formData"
      ></form-view>
    </div>
    <template #footer>
      <el-button type="primary" @click="handlerSubmit">获取数据</el-button>
      <el-button type="primary" @click="handlerReset">重置表单</el-button>
      <el-button @click="closeDialog">关闭</el-button>
    </template>
  </el-dialog>

  <el-dialog
      title="获取数据"
      v-model="showDataDialog"
      append-to-body
      center
      destroy-on-close
      width="800px"
  >
    <ace-editor v-model:code="dialogData"></ace-editor>
    <template #footer>
      <el-button type="primary" @click="showDataDialog = false">确定</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue'
import AceEditor from './ace-editor.vue'
import FormView from '../../form.vue'
import { deepClone } from '../../utils/utils'

const visible = ref(false)

const formJson = ref<any>({
  list: inject('formList'),
  config: inject('formConfig')
})
const formData = ref<any>(inject('formData'))
const formViewEle = ref<any>()
const showDataDialog = ref(false) // 预览数据
const dialogData = ref<any>()

const handlerSubmit = () => {
  formViewEle.value?.submit().then((data: any) => {
    formData.value = data
    dialogData.value = deepClone(data)
    showDataDialog.value = true
  })
}

const handlerReset = () => {
  formViewEle.value?.reset()
}


const showDialog = () => {
  visible.value = true
}

const closeDialog = () => {
  visible.value = false
}

defineExpose({
  showDialog,
  closeDialog
})
</script>

<style lang="scss" scoped>

</style>