<template>
  <el-form-item label="默认值">
    <el-input v-model="config.options.defaultValue" placeholder="输入默认值"></el-input>
  </el-form-item>
  <el-form-item label="样式class">
    <el-input v-model="config.options.customClass"></el-input>
  </el-form-item>
  <el-form-item label="类型">
    <el-select v-model="config.options.type" placeholder="请选择">
      <el-option label="单行文本" value="text"></el-option>
      <el-option label="多行文本" value="textarea"></el-option>
      <el-option label="密码" value="password"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item v-if="config.options.type === 'password'" label="是否显示密码切换图标">
    <el-switch
        v-model="config.options.showPassword"
        inline-prompt
        active-text="是"
        inactive-text="否"
    ></el-switch>
  </el-form-item>
  <template v-else>
    <el-form-item v-if="config.options.type === 'text'" label="指定格式">
      <ace-editor v-model:code="config.options.formatter"></ace-editor>
    </el-form-item>
    <el-form-item label="最大长度">
      <el-input v-model="config.options.maxlength"></el-input>
    </el-form-item>
    <el-form-item label="原生minlength">
      <el-input v-model="config.options.minlength"></el-input>
    </el-form-item>
    <el-form-item label="原生min">
      <el-input v-model="config.options.min"></el-input>
    </el-form-item>
    <el-form-item label="原生max">
      <el-input v-model="config.options.max"></el-input>
    </el-form-item>
    <el-form-item v-if="config.options.maxlength !== ''" label="是否显示统计字数">
      <el-switch
          v-model="config.options.showWordLimit"
          inline-prompt
          active-text="是"
          inactive-text="否"
      ></el-switch>
    </el-form-item>
    <el-form-item v-if="config.options.type === 'textarea'" label="输入框行数">
      <el-input-number v-model="config.options.rows" :min="2" :step="1" :precision="0"></el-input-number>
    </el-form-item>
  </template>
  <el-form-item label="blur">
    <ace-editor v-model:code="config.options.blur"></ace-editor>
  </el-form-item>
  <el-form-item label="focus">
    <ace-editor v-model:code="config.options.blur"></ace-editor>
  </el-form-item>
  <el-form-item label="change">
    <ace-editor v-model:code="config.options.blur"></ace-editor>
  </el-form-item>
  <el-form-item label="input">
    <ace-editor v-model:code="config.options.blur"></ace-editor>
  </el-form-item>
  <el-form-item label="clear">
    <ace-editor v-model:code="config.options.blur"></ace-editor>
  </el-form-item>
</template>

<script lang="ts" name="el-input-config" setup>
import AceEditor from "../../layout/modal/ace-editor.vue";

defineProps<{
  config: any
}>()
</script>

<style lang="scss" scoped>

</style>