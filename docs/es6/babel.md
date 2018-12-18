# Babel
Babel 是一个广泛使用的 ES6 转码器

babel babel-cli  babel-loader babel-core 
babel-cli babel-loader babel-core 
@babel/

```cmd
	npm install --save-dev babel-cli babel-preset-env
	// babel 6.0
	npm install --save-dev babel-preset-stage-2
	// babel 7.0
	npm install --save-dev @babel/preset-stage-2
```
## 配置

- 项目根目录创建 .babelrc
```babelrc
	{
	  "presets": ["env","stage-2"],
	  "presets": ["env","@babel/preset-stage-2"]
	}
```
- package.json 添加 babel 属性
```js
	{
		"babel":{
			 "presets": ["env"]
		}
	}
```