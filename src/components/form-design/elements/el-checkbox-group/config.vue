<template>
  <el-form-item label="最少选中">
    <el-input-number
        v-model="config.options.min"
        :min="0"
        :max="config.options.options.length"
        @change="setDefaultVal('')"
    ></el-input-number>
  </el-form-item>
  <el-form-item label="最多选中">
    <el-input-number
        v-model="config.options.max"
        :min="1"
        :max="config.options.options.length"
        @change="setDefaultVal('')"
    ></el-input-number>
  </el-form-item>
  <el-form-item label="是否带有边框">
    <el-switch
        v-model="config.options.border"
        inline-prompt
        active-text="是"
        inactive-text="否"
    ></el-switch>
  </el-form-item>
  <el-form-item label="是否显示为按钮">
    <el-switch
        v-model="config.options.button"
        inline-prompt
        active-text="是"
        inactive-text="否"
    ></el-switch>
  </el-form-item>
  <template v-if="config.options.button">
    <el-form-item label="文本色">
      <el-color-picker v-model="config.options.textColor" />
    </el-form-item>
    <el-form-item label="填充色">
      <el-color-picker v-model="config.options.fill" />
    </el-form-item>
  </template>
  <el-form-item label="选项设置">
    <div class="options">
      <el-checkbox-group v-model="config.options.defaultValue">
        <draggable
            class="drag-options"
            :list="config.options.options"
            tag="div"
            item-key="value"
            handle=".sort.icon"
        >
          <template #item="{ element, index }">
            <div class="option-item">
              <div
                  class="checkbox"
                  :class="config.options.defaultValue.includes(element.value) ? 'active' : ''"
                  @click="setDefaultVal(element.value)"
              >
                <div class="box">
                  <check-small theme="outline" size="13" fill="#fff" :strokeWidth="5"/>
                </div>
              </div>
              <el-input class="input" v-model="element.value"></el-input>
              <el-input class="input" v-model="element.label"></el-input>
              <sort-two class="icon sort" theme="outline" :strokeWidth="3"/>
              <reduce-one class="icon remove" theme="outline" size="20" :strokeWidth="3" @click="removeOption(index)" />
            </div>
          </template>
        </draggable>
      </el-checkbox-group>
      <div class="btn-line">
        <el-button type="primary" link @click="addOption">添加选项</el-button>
        <el-button type="primary" link @click="setDefaultVal('')">重置默认值</el-button>
      </div>
    </div>
  </el-form-item>
</template>

<script lang="ts" name="el-checkbox-group-config" setup>
import { ref, inject } from 'vue'
import Draggable from "vuedraggable"
import { SortTwo, ReduceOne, CheckSmall } from '@icon-park/vue-next'

const props = defineProps<{
  config: any
}>()

const formData = ref<any>(inject('formData'))

const setDefaultVal = (value: any) => {
  if(value === '') {
    props.config.options.defaultValue = []
    formData.value[props.config.prop] = []
  } else {
    if(formData.value[props.config.prop].length < props.config.options.max || !props.config.options.max) {
      if(formData.value[props.config.prop].includes(value)){
        const index = formData.value[props.config.prop].findIndex((item: any) => item === value)
        props.config.options.defaultValue.splice(index, 1)
        formData.value[props.config.prop].splice(index, 1)
      } else {
        props.config.options.defaultValue.push(value)
        formData.value[props.config.prop].push(value)
      }
    } else {
      props.config.options.defaultValue.splice(0, 1)
      formData.value[props.config.prop].splice(0, 1)
      props.config.options.defaultValue.push(value)
      formData.value[props.config.prop].push(value)
    }
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