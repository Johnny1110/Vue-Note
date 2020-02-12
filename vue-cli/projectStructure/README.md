# vue.js 專案資料夾結構

<br>

避免用的不明不白，這邊大置介紹一下專案每個資料夾作用 : 

<br>


## 資料夾樹狀圖

* 翻譯自官方文件

    ```bash
    .
    ├── build/                      # webpack 設定檔
    │   └── ...
    ├── config/
    │   ├── index.js                # 專案設定檔
    │   └── ...
    ├── src/
    │   ├── main.js                 # app 的入口文件
    │   ├── App.vue                 # 基底 app component 
    │   ├── components/             # 所有 component 存放處
    │   │   └── ...
    │   └── assets/                 # module assets (webpack 存取使用)
    │       └── ...
    |
    ├── static/                     # 靜態文件放置處
    |
    ├── test/
    │   └── unit/                   # 單元測試
    │   │   ├── specs/              # 實際測試程式存放處
    │   │   ├── eslintrc            # eslint 為測試單元額外配置的設定檔
    │   │   ├── index.js            # 單元測試入口文件
    │   │   ├── jest.conf.js        # 使用 Jest 進行單元測試的設定檔
    │   │   └── karma.conf.js       # 使用 Karma 進行單元測試的設定檔 
    │   │   ├── setup.js            # 使用 Jest 單元測試前初始化工作可以在這邊設定
    |   |               
    │   └── e2e/                    # e2e 測試
    │   │   ├── specs/              # 實際測試程式存放處
    │   │   ├── custom-assertions/  # e2e 的客製化測試文件存放處
    │   │   ├── runner.js           # test runner script
    │   │   └── nightwatch.conf.js  # test runner 設定文件
    ├── .babelrc                    # babel 設定
    ├── .editorconfig               # 縮排，空格/符號以及編輯器的設定
    ├── .eslintrc.js                # eslint 設定
    ├── .eslintignore               # eslint 忽略的規則
    ├── .gitignore                  # git 相關
    ├── .postcssrc.js               # postcss 設定
    ├── index.html                  # index.html 模板
    ├── package.json                # 專案依賴設定
    └── README.md                   # ...
    ```

<br>
<br>

## build/

該目錄包含開發階段 Server 和生產環境下 Webpack 構建的配置文件。通常，除非要自行定義 Webpack 加載程序，否則無需修改這些文件，真的需要要改，就修改 build/webpack.base.conf.js。

<br>
<br>

## config/index.js

像是開發跟部屬階段要使用的基本語法 `npm run build` 與 `npm run dev` 的時候，會讀取一些基本配置參數，像是 port 號之類的，都是設定在這個文件裡，有需要再改。

<br>
<br>

## src/

應用程序代碼所在的位置。如何構造此目錄中的所有內容完全取決於自己。

<br>
<br>

## static/

該目錄是如果不想使用 Webpack 處理的靜態 assets。它們將直接複製到生成 webpack 構建的資產的同一目錄中。

<br>
<br>

## test/

單元測試區塊

<br>
<br>

## index.html

SPA 應用的那個所謂的 Single Page。實際上整個專案就只有這一個 html 文件，作為整個前端功能的承載頁面，一般無須做任何改動。

<br>
<br>

## package.json


NPM package meta file，包含所有構建依賴項和構建命令。

關於建構命令，這邊擷取了一部分展示 :

```js
"scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "unit": "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",
    "e2e": "node test/e2e/runner.js",
    "test": "npm run unit && npm run e2e",
    "lint": "eslint --ext .js,.vue src test/unit test/e2e/specs",
    "build": "node build/build.js"
  },
```

這邊的所有命令前綴都是加 `npm run` 