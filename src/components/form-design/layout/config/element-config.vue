<template>
  <el-form
      ref="elementConfigEle"
      class="element-config"
      label-position="top"
  >
    <el-collapse v-if="config !== null" v-model="elementConfigCollapse">

      <el-collapse-item v-if="config.type !== 'col'" title="基础属性" name="1">
        <el-form-item label="字段属性">
          <el-input v-model="config.prop" placeholder="请输入字段唯一属性"></el-input>
        </el-form-item>
        <el-form-item label="标签名称">
          <el-input v-model="config.name" placeholder="请输入标签名"></el-input>
        </el-form-item>
        <el-form-item label="标签宽度">
          <el-input
              v-model="config.options.labelWidth"
              placeholder="请输入标签宽度"
              type="number"
              :disabled="config.options.labelWidthUnit === 'auto'"
          >
            <template #append>
              <el-select
                  v-model="config.options.labelWidthUnit"
                  placeholder="单位"
                  style="width: 90px;"
                  @change="labelWidthChange"
              >
                <el-option label="auto" value="auto"></el-option>
                <el-option label="像素" value="px"></el-option>
                <el-option label="百分比" value="%"></el-option>
              </el-select>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="行宽度">
          <el-input-number
              :min="6"
              :max="24"
              v-model="config.options.span"
          ></el-input-number>
        </el-form-item>
        <el-form-item v-if="typeof config.options.readonly === 'boolean'" label="是否只读">
          <el-switch
              v-model="config.options.readonly"
              inline-prompt
              active-text="是"
              inactive-text="否"
          ></el-switch>
        </el-form-item>
        <el-form-item label="是否禁用">
          <el-switch
              v-model="config.options.disabled"
              inline-prompt
              active-text="是"
              inactive-text="否"
          ></el-switch>
        </el-form-item>
        <el-form-item label="可编辑">
          <el-switch
              v-model="config.options.canEdit"
              inline-prompt
              active-text="是"
              inactive-text="否"
          ></el-switch>
        </el-form-item>
        <el-form-item label="是否必填">
          <el-switch
              v-model="config.options.required"
              inline-prompt
              active-text="是"
              inactive-text="否"
          ></el-switch>
        </el-form-item>
        <el-form-item label="必填提示语">
          <el-input v-model="config.options.requireMessage" placeholder="输入必填提示语" />
        </el-form-item>
      </el-collapse-item>

      <el-collapse-item title="组件属性" name="2">
        <component :is="customComponent" :config="config"></component>
      </el-collapse-item>

    </el-collapse>
  </el-form>
</template>

<script lang="ts" setup>
import {ref, inject, watch, defineAsyncComponent, computed} from 'vue'

const props = withDefaults(defineProps<{
  config: any
}>(),{
  config: null
})

const elementConfigCollapse = ref('2')
const formCurrent = ref<any>(inject('formCurrent'))
const formList = ref<any>(inject('formList'))
const elementConfig = ref<any>()

const customComponent = computed(() => {
  const path = elementConfig.value.path
  if(props.config.extend)
    return defineAsyncComponent( (): any => import(/* @vite-ignore */'../../../../'+ path +'/config.vue'))
  else
    return defineAsyncComponent( (): any => import(/* @vite-ignore */'../../elements/'+ path +'/config.vue'))
})

const labelWidthChange = (e: any) => {
  if(e === 'auto') props.config.options.labelWidth = '';
  else if(e === 'px') props.config.options.labelWidth = 100;
  else props.config.options.labelWidth = 10;
}

watch(formCurrent, (nVal: any) => {
  elementConfig.value = formList.value[nVal]
},{
  immediate: true,
  deep: true
})
</script>

<style lang="scss" scoped>
.element-config{

}
</style>