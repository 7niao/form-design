<template>
  <div class="layout-header">
    <div class="left">
<!--      <el-button type="primary" link><back-one :strokeWidth="5" /></el-button>-->
<!--      <el-button type="primary" link><go-ahead :strokeWidth="5" /></el-button>-->
    </div>
    <div class="right">
      <el-button type="primary" link @click="clearFormData" :icon="Delete">清空</el-button>
      <el-button type="primary" link @click="showPreview" :icon="PreviewOpen">预览</el-button>
      <el-button type="primary" link @click="showImport" :icon="Upload">导入JSON</el-button>
      <el-button type="primary" link @click="showExport" :icon="Download">导出JSON</el-button>
    </div>

    <import-json ref="importJsonEle" />
    <export-json ref="exportJsonEle" />
    <preview ref="previewEle" />
  </div>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue'
import ImportJson from '../modal/import-json.vue'
import ExportJson from '../modal/export-json.vue'
import Preview from '../modal/preview.vue'
import { ElMessageBox } from 'element-plus'
import {
  GoAhead,
  BackOne,
  Delete,
  PreviewOpen,
  Download,
  Upload
} from '@icon-park/vue-next'
import { deepClone } from '../../utils/utils'

const importJsonEle = ref<any>()
const exportJsonEle = ref<any>()
const previewEle = ref<any>()

const showImport = () => {
  importJsonEle.value?.showDialog()
}

const showExport = () => {
  exportJsonEle.value?.showDialog()
}

const showPreview = () => {
  previewEle.value?.showDialog()
}

const formList = ref<any>(inject('formList'))
const formCurrent = ref<any>(inject('formCurrent'))
const staticComponent = ref<any>(inject('staticComponent'))
const clearFormData = () => {
  ElMessageBox.confirm(
      '确定情况表单数据吗？',
      '提示',
      {
        type: 'warning'
      }
  ).then(() => {
    const formArr = deepClone(formList.value)
    const arr: Array<any> = []
    formArr.forEach((item: any) => {
      if(staticComponent.value.includes(item.component)) arr.push(item)
    })
    formList.value = arr
    formCurrent.value = NaN
  }).catch(() => {
    console.log('取消清空')
  })
}
</script>

<style lang="scss" scoped>
@import "../../style/common";
.layout-header{
  @extend .flex-row;
  justify-content: space-between;
  padding: 10px 15px;
}
</style>