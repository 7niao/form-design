<template>
  <div class="ace-editor" ref="aceEditorEle"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import ace from 'ace-builds'
import 'ace-builds/src-noconflict/theme-chrome'
import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/mode-javascript'

const props = withDefaults(defineProps<{
  code?: any
  maxLines?: number
  minLines?: number
  fontSize?: number
  tabSize?: number
  type?: string
}>(), {
  maxLines: 20,
  minLines: 10,
  fontSize: 12,
  tabSize: 2,
  type: 'json'
})

const aceEditorEle = ref<any>()
const aceEditor = ref<any>()

const emits = defineEmits(['change', 'update:code'])
const handlerChange = () => {
  emits('update:code', aceEditor.value?.getSession().getValue())
  emits('change', aceEditor.value?.getSession().getValue())
}

// watch(() => props.code, (nVal) => {
//   if(nVal && nVal !== '') {
//     aceEditor.value?.session.setValue(JSON.stringify(props.code, null, 2))
//   }
// },{
//   immediate: true
// })

onMounted(() => {
  aceEditor.value = ace.edit(aceEditorEle.value, {
    value: '',
    maxLines: props.maxLines,
    minLines: props.minLines,
    fontSize: props.fontSize,
    theme: 'ace/theme/chrome',
    mode: 'ace/mode/' + props.type,
    useWorker: false,
    tabSize: props.tabSize,
    enableAutoIndent: true,
    wrapBehavioursEnabled: true,
    wrap: true,
    scrollPastEnd: true,
    copyWithEmptySelection: true
  })
  aceEditor.value.getSession().on('change', handlerChange)
  if(props.code && props.code !== '') {
    aceEditor.value.session.setValue(JSON.stringify(props.code, null, 2))
  }
})
</script>

<style lang="scss" scoped>
.ace-editor{
  width: 100%;
  height: 100%;
}
</style>