# 描述

issue专用，用于展示rspack处理ts/js时发生的问题

# 项目执行

```shell
$ npm run build
```


## rspack打包前

```JS
// src/index.ts
const xhr = {
    responseType: false,
    responseText: "OK",
    response: {}
}

console.log(
    ( xhr.responseType || "text" ) !== "text"  ||
    typeof xhr.responseText !== "string" ?
        { binary: 1 } :
        { text: 2 }
)

// 条件一 和 条件二 均为false，因此实际应该打印 { text: 2 }
```

## 打包后

```JS
// dist/main.js

var xhr = {
    responseType: false,
    responseText: "OK",
    response: {}
};
console.log((xhr.responseType || "text") !== "text" || 0 ? { // 语句：`typeof xhr.responseText !== "string"` 被转为 0 
    binary: 1
} : 0) // 此处打印{ binary: 1 } 或 0，结果都不对；

```