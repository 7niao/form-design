<template>
  <el-dialog
      title="导出json"
      v-model="visible"
      append-to-body
      center
      width="800px"
  >
    <div class="ace-editor">
      <ace-editor ref="aceEditorEle" v-model:code="code" :min-lines="20" @change="codeChange" />
    </div>
    <template #footer>
      <el-button type="primary" @click="copy(JSON.stringify(formJson, null, 2))">复制JSON</el-button>
      <el-button @click="handlerSaveFile">保存为文件</el-button>
      <el-button @click="closeDialog">关闭</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, inject, onMounted, watch } from 'vue'
import { useClipboard } from '@vueuse/core'
import { ElMessage } from "element-plus";
import AceEditor from './ace-editor.vue'
import { downloadJsonOrTxt } from '../../utils/utils'

const visible = ref(false)
const formJson = ref<any>({
  list: inject('formList'),
  config: inject('formConfig')
})
const code = ref(formJson.value)

const aceEditorEle = ref<any>()
const codeChange = (e: any) => {
  formJson.value = JSON.parse(e)
}

// 复制到剪切板
const { copied, copy } = useClipboard()
watch(copied, (nVal: any) => {
  if(nVal) {
    ElMessage({
      message: '已复制到剪切板',
      type: 'success',
    })
  }
})

// 保存为文件
const handlerSaveFile = () => {
  downloadJsonOrTxt('formJson.json', JSON.stringify(formJson.value, null, 2))
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

onMounted(() => {
  // aceEditorEle.value?.setVal(inject('formJson'))
})
</script>

<style lang="scss" scoped>

</style>