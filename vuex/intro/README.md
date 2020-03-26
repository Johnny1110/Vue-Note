# Vuex 介紹與安裝

<br>

趁有空趕快把 Vuex 的知識補一補，先說明一下，這邊的筆記並不會一五一十的把 Vuex 完整的介紹一遍，這邊主要以實際專案配置來介紹。不必要的部分不會過多介紹。

先提供一下 Vuex 官方文件 [傳送門](https://vuex.vuejs.org/)，官方文件其實很齊全，講解的也很清楚，建議有空還是把官方文件全部看一遍。

再次強調一次，這裡並不會完全解釋 Vuex，而是以實作導向教學，最後會有實際串接後端的登入系統。

閱讀本篇筆記之前，需先掌握 __vue-router__ 與基本 __vue.js__ 知識概念。

<br>

---

<br>
<br>

## Vuex 簡介

首先，要說明一下 Vuex 在一個前端專案中的任職。有些時候我們要協調各個 Components 之間的資料交換溝通，會用到一些 `props` 來傳遞值。但是這在組件之間關系複雜的情況下，毫無疑問的會使開發變得繁瑣。

Vuex 就是專門為 Vue.js 開發的狀態管理模式。他集中管理所有 VUe Components 的狀態。他可以保證每一個 Vue Components 所共享的資料都是 __單例（singleton）__。假設有 A B 兩個 Components，當 A 改變 Vuex Store 中的一個 state， B 可以馬上知道狀態改變並取得及時數值。

__注意 :__ Vuex 中保存的狀態在瀏覽器 refresh 頁面時就會重置，但是在 `vue-router` 切換路徑時會保有 state。

<br>
<br>


## 安裝 Vuex

* 這邊就跟著筆記憶起建立一個包含 `vuex`、`vue-router` 的 vue cli 專案吧 :

    在已經下載好 vue 之後執行如下命令，（如果尚未下載 @vue/cli 就先下載一下吧 : `npm install -g @vue/cli`）

    ```bash
    vue create demo
    ```

    <br>

    出現詢問手動或自動設定時，我們選手動 （第二個）：

    ```bash
    Vue CLI v4.1.2
    ┌─────────────────────────────────────────┐
    │                                         │
    │   New version available 4.1.2 → 4.2.3   │
    │    Run npm i -g @vue/cli to update!     │
    │                                         │
    └─────────────────────────────────────────┘

    ? Please pick a preset:    
    default (babel, eslint)  
    > Manually select features 
    ```

    <br>
    
    接下來問詢問我們此專案需要問我們預先安裝那些套件，我們就選我們需要的就好，我們需要 `Babel`，`Router`，`Vuex`，`Linter / Formatter`（空格鍵勾選）:

    ```bash
    ? Please pick a preset: Manually select features
    ? Check the features needed for your project: 
     (*) Babel
     ( ) TypeScript
     ( ) Progressive Web App (PWA) Support        
     (*) Router
     (*) Vuex
     ( ) CSS Pre-processors
    >(*) Linter / Formatter
     ( ) Unit Testing
     ( ) E2E Testing
    ```

    <br>

    接下來會詢問我們要不要在 `vue-router` 開 `history mode`，雖然蠻雞婆，但是我們還是先選起來好了。

    ```bash
    ? Please pick a preset: Manually select features
    ? Check the features needed for your project: Babel, Router, Vuex, Linter
    ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) Y
    ```

    <br>

    再來是 Linter / Formatter 設定，我們選第四個 `ESLint + Prettier `，Prettier 可以幫我們統一 codeing style。

    ```bash
    ? Pick a linter / formatter config: (Use arrow keys)
     ESLint with error prevention only 
     ESLint + Airbnb config 
     ESLint + Standard config 
    >ESLint + Prettier 
    ```

    <br>

    指定 `ESLint` 檢查程式碼的時機，這邊我們用預設的 on save 就好。 :

    ```bash
    ? Pick additional lint features: 
    >(*) Lint on save
     ( ) Lint and fix on commit      
    ```

    <br>

    然後他還會問我們，要把這些設定檔寫在 `package.json`（官方推薦）還是分開來存放。我個人的習慣當然是分開放比較清楚。所以選第一個 : 

    ```bash
    ? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
    > In dedicated config files
      In package.json
    ```

    <br>

    最後了，詢問是否把剛剛的步驟存成預設專案建構模板 :

    ```bash
    ? Save this as a preset for future projects? (y/N) N
    ```

    <br>

    然後我們慢慢等待 cli 工具幫我們建構專案吧。成功畫面 :

    ```bash
    ⚓   Running completion hooks...

    �📄  Generating README.md...

    �🎉  Successfully created project demo.
    �👉  Get started with the following commands:

    $ cd demo
    $ npm run serve
    ```

    <br>
    <br>

* 以上就是配置一個完整包含 Vuex 專案的步驟。如果你想在現有專案中導入 Vuex 的話，可以如下操作 :

    在專案根目錄下（package.json 同級）輸入指定 : 

    ```bash
    npm install --save vuex
    ```

    這樣就可以在現有的專案中使用 vuex 拉 !



