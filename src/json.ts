export default {
  "list": [
    {
      "type": "radio",
      "component": "ElRadioGroup",
      "path": "el-radio-group",
      "name": "单选框组",
      "icon": "icon-radio",
      "options": {
        "span": 24,
        "labelWidth": "",
        "inline": true,
        "customClass": "",
        "defaultValue": 2,
        "disabled": false,
        "button": false,
        "textColor": "#ffffff",
        "fill": "#409EFF",
        "change": "",
        "border": false,
        "canEdit": true,
        "component": "ElRadio",
        "options": [
          {
            "label": "选项 1",
            "value": 1
          },
          {
            "label": "选项 2",
            "value": 2
          }
        ],
        "width": 100
      },
      "key": "1667031745503_cc5d",
      "prop": "radio_1667031745503_cc5d",
      "value": 2
    },
    {
      "type": "select",
      "component": "ElSelect",
      "path": "el-select",
      "name": "下拉选择器",
      "icon": "icon-select",
      "value": "",
      "options": {
        "span": 24,
        "isLabelWidth": false,
        "labelWidth": "",
        "defaultValue": "",
        "placeholder": "请选择",
        "customClass": "",
        "disabled": false,
        "filterable": true,
        "clearable": true,
        "multiple": false,
        "multipleLimit": 0,
        "collapseTags": false,
        "collapseTagsTooltip": false,
        "effect": "light",
        "canEdit": true,
        "component": "ElOption",
        "options": [
          {
            "label": "选项 1",
            "value": "option 1"
          },
          {
            "label": "选项 2",
            "value": "option 2"
          }
        ],
        "width": 100
      },
      "key": "1667031746027_2e2c",
      "prop": "select_1667031746027_2e2c"
    },
    {
      "type": "cascader",
      "component": "ElCascader",
      "path": "el-cascader",
      "name": "级联选择器",
      "icon": "icon-select",
      "options": {
        "span": 24,
        "isLabelWidth": false,
        "labelWidth": "",
        "hideLabel": false,
        "defaultValue": null,
        "placeholder": "请选择",
        "customClass": "",
        "disabled": false,
        "clearable": true,
        "showAllLevels": false,
        "collapseTags": false,
        "collapseTagsTooltip": false,
        "separator": "/",
        "filterable": true,
        "filterMethod": "",
        "debounce": 300,
        "beforeFilter": "",
        "popperClass": "",
        "teleported": true,
        "canEdit": true,
        "tagType": "info",
        "validateEvent": true,
        "props": "",
        "options": [
          {
            "label": "选项 1",
            "value": "option 1",
            "children": [
              {
                "label": "选项 1-1",
                "value": "option 1-1"
              },
              {
                "label": "选项 1-2",
                "value": "option 1-2"
              }
            ]
          },
          {
            "label": "选项 2",
            "value": "option 2"
          }
        ],
        "remoteOption": "cascader_option_1667032057874_ae54",
        "width": 100
      },
      "key": "1667032057874_ae54",
      "prop": "cascader_1667032057874_ae54",
      "value": [
        "option 1",
        "option 1-1"
      ]
    },
    {
      "type": "date",
      "component": "ElDatePicker",
      "path": "el-date-picker",
      "name": "日期选择器",
      "icon": "icon-date",
      "options": {
        "span": 24,
        "isLabelWidth": false,
        "labelWidth": "",
        "defaultValue": "",
        "placeholder": "请选择",
        "startPlaceholder": "",
        "endPlaceholder": "",
        "rangeSeparator": "-",
        "type": "date",
        "valueFormat": "YYYY-MM-DD",
        "format": "YYYY-MM-DD",
        "clearable": true,
        "disabled": false,
        "editable": false,
        "canEdit": true,
        "width": 100
      },
      "key": "1667032059692_4bb5",
      "prop": "date_1667032059692_4bb5"
    },
    {
      "type": "time",
      "component": "ElTimePicker",
      "path": "el-time-picker",
      "name": "时间选择器",
      "icon": "icon-time",
      "options": {
        "span": 24,
        "isLabelWidth": false,
        "labelWidth": "",
        "placeholder": "请选择",
        "editable": false,
        "canEdit": true,
        "width": 100
      },
      "key": "1667032060386_9b02",
      "prop": "time_1667032060386_9b02"
    },
    {
      "type": "col",
      "component": "ElCol",
      "path": "el-col",
      "name": "栅格列",
      "icon": "",
      "options": {
        "span": 24,
        "height": "60px",
        "slot": "",
        "width": 100
      },
      "key": "1667032063474_2c15",
      "prop": "col_1667032063474_2c15"
    }
  ],
  "config": {
    "formName": "",
    "projectId": "",
    "projectName": "",
    "remark": "",
    "labelWidth": 100,
    "labelPosition": "right",
    "size": "default",
    "customClass": "",
    "disabled": false,
    "hideError": false,
    "hideAsterisk": false,
    "onMounted": "",
    "onUpdated": "",
    "onUnmounted": ""
  }
}