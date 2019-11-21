# Eslint 项目应用

## 开发工具
微软出品的前端开发利器--[VScode](https://www.baidu.com/)；

## 安装插件
  - [ESLint](https://eslint.org)
  - [Vetur](https://vuejs.github.io/vetur/)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## 初始化
 - 通过脚手架 vue-cli自定义下载一个项目;
 - 并执行 yarn install 命令安装项目依赖;
 - 根据提示完成项目启动

![项目配置](/images/eslint_init.png)

## 配置vscode
- 在首选项>扩展 搜索框中搜索 "settings.json"
- 点击编辑
- 添加下图配置
- [vscode完整配置](/files/vscode.settings.json)


```json
  {
    //编辑器字体格式
    "editor.fontFamily": " 'Courier New'",
    //字体大小
    "editor.fontSize": 16,
    //首行缩进大小
    "editor.tabSize": 2,
    //保存自动格式化
    "editor.formatOnSave": true,
     //保存时使用eslint规范自动格式化 
    "eslint.autoFixOnSave": true,
    //添加对vue格式支持
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue",
            "autoFix": true
        }
    ],
  }
```

```json
  {
    //设置vue默认格式化方式
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    //设置js的引号风格为单引号
    "javascript.preferences.quoteStyle": "single",
    "prettier.quoteProps": "preserve",
    // 使用带引号替代双引号 
    "prettier.singleQuote": true,
    "editor.formatOnPaste": true,
    "typescript.preferences.quoteStyle": "single",
    "javascript.implicitProjectConfig.checkJs": true,
    "prettier.requireConfig": true,
    //代码结尾不添加分号
    "prettier.semi": false,
  }
```