# 描述

issue专用，用于展示rspack处理ts/js时发生的问题

# 项目执行

```shell
$ npm run build
```


## rspack打包前

```JS
// src/index.ts
const xhr = { status: 200 }

console.log(( xhr || "text" ) !== "text"  || typeof xhr !== "string")
```

## 打包后

```JS
// src/index.ts

var xhr = {
    status: 200
};
console.log((xhr || "text") !== "text" || 0);  // 不符合预期，typeof xhr !== "string" 被转为 0

```
