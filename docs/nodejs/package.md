# 包管理文件
package.json 是一个项目的包管理文件（非常重要）

完整的包管理文件 package.json
```js
{
	//项目名称
	"name": "nodejs",
	//项目版本号
	"version": "1.0.0",
	//项目描述
	"description": "my first nodejs project",
	//入口文件
	"main": "index.js",
	//快捷启动命令
	"scripts": {
	"test": "echo \"Error: no test specified\" && exit 1"
	},
	//项目的关键字，用于seo优化
	"keywords": [
	"nodejs",
	"express",
	"mysql"
	],
	//作者
	"author": "heinan",
	//版权信息
	"license": "ISC",
	"dependencies":{}
	"devDependencies":{}
}

```
## dependencies 生产环境依赖模块
```js
	npm install --save <package>
```
## devDependencies 开发环境依赖模块
```js
	npm install --save-dev <package>
```