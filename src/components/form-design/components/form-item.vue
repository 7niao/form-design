<template>
  <el-col
      v-if="element.type !== 'col'"
      class="form-item"
      :span="element.options.span"
      :class="{active: formCurrent === index}"
      :style="`width:${element.options.width}%`"
      @click="formCurrent = index"
  >
    <template v-if="formCurrent === index">
      <div class="drag-box">
        <sort-two theme="outline" :strokeWidth="5"/>
        <span>{{ element.name }}</span>
      </div>
      <div class="delete-box" @click="handlerDelete">
        <delete theme="outline" :strokeWidth="5"/>
      </div>
    </template>
    <component :is="customComponent" :element="element"></component>
  </el-col>

  <el-col
      v-else
      class="form-item"
      :span="element.options.span"
      :style="`height:${element.options.height}`"
      :class="{active: formCurrent === index}"
      :is="customComponent"
      :element="element"
      @click="formCurrent = index"
  >
    <template v-if="formCurrent === index">
      <div class="drag-box">
        <sort-two theme="outline" :strokeWidth="5"/>
        <span>{{ element.name }}</span>
      </div>
      <div v-if="!staticComponent.includes(element.component)" class="delete-box" @click="handlerDelete">
        <delete theme="outline" :strokeWidth="5"/>
      </div>
    </template>
    <template v-if="element.options.slot !== ''">
      <div v-html="element.options.slot"></div>
    </template>
    <div v-else class="place">占位（实际表单不显示）</div>
  </el-col>
</template>

<script lang="ts" setup>
import { ref, onMounted, inject, computed, defineAsyncComponent } from 'vue'
import { SortTwo, Delete } from '@icon-park/vue-next'

const props = withDefaults(defineProps<{
  element: any,
  index?: any,
  type?: string
}>(),{
  type: 'design'
})

const val = ref(props.element[props.element.prop])
const formCurrent = ref<any>(inject('formCurrent'))
const formConfig = ref<any>(inject('formConfig'))
const formList = ref<any>(inject('formList'))
const staticComponent = ref<any>(inject('staticComponent'))

const handlerDelete = () => {
  formList.value.splice(formCurrent.value, 1)
  formCurrent.value = formCurrent.value - 1
}

const customComponent = computed(() => {
  if(props.element.type !== 'col'){
    const path = props.element.path
    if(props.element.extend)
      return defineAsyncComponent((): any => import(/* @vite-ignore */'../../../' + path + '/view.vue'))
    else
      return defineAsyncComponent((): any => import(/* @vite-ignore */'../elements/' + path + '/view.vue'))
  }
  else return
})

onMounted(() => {
  if(props.element.options.defaultValue) val.value = props.element.options.defaultValue
  props.element.options.width = 100
})
</script>

<style lang="scss" scoped>
@import "../style/common";
.form-item{
  position: relative;
  padding: 10px 5px;
  border: 2px solid transparent;
  &.active{
    border-color: $primary;
  }
  .drag-box{
    cursor: move;
    z-index: 9;
    position: absolute;
    top: 0;
    left: 0;
    padding: 3px 5px;
    font-size: 12px;
    color: #ffffff;
    background-color: rgba($primary, .7);
  }
  .delete-box{
    cursor: pointer;
    z-index: 9;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 3px 5px;
    font-size: 14px;
    color: #ffffff;
    background-color: rgba($primary, .7);
  }
  :deep(.el-form-item--default){
    margin-bottom: auto;
  }

  .place{
    @extend .flex-column;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    border: 1px dashed #eee;
    color: #ccc;
  }
}
</style>