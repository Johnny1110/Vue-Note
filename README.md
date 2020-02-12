# Vue-筆記

<br>

* 此筆記紀錄我使用 vue.js 的一些功能，東西太多不專門記一下不行了...

* 基本上都是以 vue-cli 實作，cli 部分這邊就不詳述了。

* 每一個資料夾都是單獨一個小專案，裡面有各自的 package.json，要執行測試時，需要先下指令 `npm install` 將依賴載入專案環境。

* 需要執行時，使用 node 執行，或打開 npm serve。

<br>

---

<br>

## 目錄

### 一. 安裝使用 vue-cli

* [開始使用 vue-cli](./vue-cli/usingCli/README.md)

* [vue.js 專案資料夾結構](./vue-cli/projectStructure/README.md)

* [編寫規則介紹](./vue-cli/codingRule/README.md)

* 更多相關請參閱 vue.js webpack 官方文件 : [傳送門](https://vuejs-templates.github.io/webpack/)

<br>


### 二. Vue 物件基礎

* [物件屬性和 watch 方法](./vue-basic/attrAndWatch.js)

* [Vue 生命週期](./vue-basic/lifecycle.js)

<br>

### 三. Vue 模板

* [文本輸出 vs HTML 輸出](./vue-template/basics/README.md)

<br>

### 四. Vue 路由

* [安裝 vue-router](./vue-router/install.md)

* [動態路由匹配](./vue-router/routerMatch)

* [嵌套路由 （children components）](./vue-router/children)

* [路由導覽](./vue-router/nav)

* [命名 router-view](./vue-router/routerView)

* [路由 redirect 與 alias](./vue-router/redirectAndAlias)

* [路由 component 傳遞參數](./vue-router/passValue)

* [路由 history 模式](./vue-router/history)

* [保護 router （安全性）](./vue-router/security)

<br>

### 三. 附件

* [axios 封裝](./utils/axios/Api.js)