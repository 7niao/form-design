<template>
  <el-dialog
    title="导入json"
    v-model="visible"
    append-to-body
    center
    width="800px"
  >
    <div class="ace-editor">
      <ace-editor v-model:code="code" :min-lines="20" />
    </div>
    <template #footer>
      <el-button @click="closeDialog">取消</el-button>
      <el-button type="primary" @click="handlerImport">导入</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue'
import AceEditor from './ace-editor.vue'

const visible = ref(false)
const code = ref('')

const formList = ref(inject('formList'))
const formConfig = ref(inject('formConfig'))

const handlerImport = () => {
  const formJson = JSON.parse(code.value)
  formList.value = formJson.list
  formConfig.value = formJson.config
  closeDialog()
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