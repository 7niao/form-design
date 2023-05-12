<template>
  <el-form-item label="是否可清空">
    <el-switch
        v-model="config.options.clearable"
        inline-prompt
        active-text="是"
        inactive-text="否"
    ></el-switch>
  </el-form-item>
  <el-form-item label="是否允许多选">
    <el-switch
        v-model="config.options.multiple"
        inline-prompt
        active-text="是"
        inactive-text="否"
    ></el-switch>
  </el-form-item>
  <template v-if="config.options.multiple">
    <el-form-item label="最多选择数">
      <el-input-number
          v-model="config.options.multipleLimit"
          :min="0"
          :max="config.options.options.length"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="是否以文字形式展示">
      <el-switch
          v-model="config.options.collapseTags"
          inline-prompt
          active-text="是"
          inactive-text="否"
      ></el-switch>
    </el-form-item>
    <el-form-item label="是否启用鼠标悬停">
      <el-switch
          v-model="config.options.collapseTagsTooltip"
          inline-prompt
          active-text="是"
          inactive-text="否"
      ></el-switch>
    </el-form-item>
    <el-form-item label="悬停弹出主题">
      <el-radio-group v-model="config.options.effect">
        <el-radio label="light">亮色</el-radio>
        <el-radio label="dark">暗色</el-radio>
      </el-radio-group>
    </el-form-item>
  </template>
  <el-form-item label="默认值">
    <el-select
        v-model="config.options.defaultValue"
        :multiple="config.options.multiple"
        :multiple-limit="config.options.multipleLimit"
        placeholder="选择默认值"
    >
      <el-option
        v-for="item in config.options.options"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      ></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="选项设置">
    <div class="options">
      <draggable
          class="drag-options"
          :list="config.options.options"
          tag="div"
          item-key="value"
          handle=".sort.icon"
      >
        <template #item="{ element, index }">
          <div class="option-item">
            <el-input class="input" v-model="element.value"></el-input>
            <el-input class="input" v-model="element.label"></el-input>
            <sort-two class="icon sort" theme="outline" :strokeWidth="3"/>
            <reduce-one class="icon remove" theme="outline" size="20" :strokeWidth="3" @click="removeOption(index)" />
          </div>
        </template>
      </draggable>
      <div class="btn-line">
        <el-button type="primary" link @click="addOption">添加选项</el-button>
        <el-button type="primary" link @click="resetDefaultVal">重置默认值</el-button>
      </div>
    </div>
  </el-form-item>
</template>

<script lang="ts" name="el-select-config" setup>
import { watch, ref, inject } from 'vue'
import Draggable from "vuedraggable"
import { SortTwo, ReduceOne, CheckSmall } from '@icon-park/vue-next'

const props = defineProps<{
  config: any
}>()

const formData = ref<any>(inject('formData'))

watch(() => props.config.options.multiple, (nVal: boolean) => {
  if(nVal) {
    formData.value[props.config.prop] = []
    props.config.options.defaultValue = []
  } else {
    formData.value[props.config.prop] = ''
    props.config.options.defaultValue = ''
  }
},{
  immediate: true,
  deep: true
})

watch(() => props.config.options.defaultValue, (nVal: any) => {
  formData.value[props.config.prop] = nVal
})

const resetDefaultVal = () => {
  if(props.config.options.multiple) {
    formData.value[props.config.prop] = []
    props.config.options.defaultValue = []
  } else {
    formData.value[props.config.prop] = ''
    props.config.options.defaultValue = ''
  }
}

const addOption = () => {
  const date = new Date();
  props.config.options.options.push({
    label: `选项${date.getTime()}`,
    value: date.getTime()
  })
}

const removeOption = (index: number) => {
  props.config.options.options.splice(index, 1)
}
</script>

<style lang="scss" scoped>
@import "../options";
</style>