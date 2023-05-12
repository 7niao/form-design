export const S4 = () => {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}

// 生成uuid用于表达字段prop
export const uuid = () => {
  return Date.now() + '_' + S4()
}

// 对象深拷贝
export const deepClone = (obj: any) => {
  const objClone: any = Array.isArray(obj) ? [] : {}
  if(obj && typeof obj === 'object') {
    for(let key in obj) {
      if(obj.hasOwnProperty(key)){
        if(obj[key] && typeof obj[key] === 'object') {
          objClone[key] = deepClone(obj[key])
        } else objClone[key] = obj[key]
      }
    }
  }
  return objClone
}

export const downloadJsonOrTxt = (filename: string, text: any) => {
  const link = document.createElement('a')
  link.style.display = 'none'
  link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
  link.setAttribute('download', filename)

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}