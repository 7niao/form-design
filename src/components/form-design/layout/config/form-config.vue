<template>
  <el-form
      ref="formConfigEle"
      class="form-config"
      label-position="top"
  >

    <el-collapse v-model="formConfigCollapse">
      <el-collapse-item title="基本配置" name="1">
        <el-form-item label="表单名称">
          <el-input v-model="formConfig.formName" placeholder="请输入名称" />
        </el-form-item>
        <el-form-item label="备注">
          <el-input
              v-model="formConfig.remark"
              type="textarea"
              maxlength="80"
              show-word-limit
              placeholder="请输入表单备注"
          />
        </el-form-item>
      </el-collapse-item>
      <el-collapse-item title="表单样式" name="2">
        <el-form-item label="组件大小">
          <el-radio-group v-model="formConfig.size">
            <el-radio-button label="small">小号</el-radio-button>
            <el-radio-button label="default">默认</el-radio-button>
            <el-radio-button label="large">大号</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="标签宽度">
          <el-input-number v-model="formConfig.labelWidth" />
        </el-form-item>
        <el-form-item label="标签位置">
          <el-radio-group v-model="formConfig.labelPosition">
            <el-radio-button label="left">左</el-radio-button>
            <el-radio-button label="right">右</el-radio-button>
            <el-radio-button label="top">上</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否禁用">
          <el-switch
              v-model="formConfig.disabled"
              inline-prompt
              active-text="是"
              inactive-text="否"
          ></el-switch>
        </el-form-item>
        <el-form-item label="是否隐藏必填星号">
          <el-switch
              v-model="formConfig.hideAsterisk"
              inline-prompt
              active-text="是"
              inactive-text="否"
          ></el-switch>
        </el-form-item>
        <el-form-item label="是否隐藏验证错误信息">
          <el-switch
              v-model="formConfig.hideAfter"
              inline-prompt
              active-text="是"
              inactive-text="否"
          ></el-switch>
        </el-form-item>
      </el-collapse-item>
      <el-collapse-item title="事件配置" name="3">
        <el-form-item label="onMounted">
          <ace-editor
              v-model:code="formConfig.onMounted"
              type="javascript"
              :min-lines="10"
          />
        </el-form-item>
        <el-form-item label="onUpdated">
          <ace-editor
              v-model:code="formConfig.onUpdated"
              type="javascript"
              :min-lines="10"
          />
        </el-form-item>
        <el-form-item label="onUnmounted">
          <ace-editor
              v-model:code="formConfig.onUnmounted"
              type="javascript"
              :min-lines="10"
          />
        </el-form-item>
      </el-collapse-item>
    </el-collapse>

  </el-form>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue'
import AceEditor from '../modal/ace-editor.vue'

// 表单配置
const formConfigCollapse = ref('1')
const formConfigEle = ref<any>()
const formConfig = ref<any>(inject('formConfig'))
</script>

<style lang="scss" scoped>

</style>