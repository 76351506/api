# props类型校验

由于react在新版本中移除了类型校验，我们需要下载一个 prop-types 的包
```md
	yarn add prop-types --save
```
-  PropTypes.number
-  PropTypes.string
-  PropTypes.func
-  PropTypes.bool
-  PropTypes.object
-  PropTypes.array
-  PropTypes.symbol
-  PropTypes.node 验证值为节点
-  PropTypes.element  验证值为元素
-  PropTypes.any  任意数据类型
-  PropTypes.oneOfType([types...])  满足数组中的一种验证规则就可以通过
-  PropTypes.isRequired  props必须传值，可以链式调用
-  callback(props,propsName,componentName) 自定义校验，必须返回一个new Error()

```js
	

	import PropTypes from "prop-types";

	class App extends React.Component{
		//第一种写法
		static propTypes = {
			params: PropTypes.type
		}
	}
	//第二种写法
	App.propTypes= {
		params: PropTypes.type
	}
```
# props 的默认值

写法一:

结合webpack+babel 6.0 需要添加 对与static修饰符的支持 (es6+不需要)

```cmd
	npm install --save-dev babel-preset-stage-0
```
.babelrc
```json
	{
	  "presets": ["stage-0"]
	}
```

```js
	import PropTypes from "prop-types";

	class App extends React.Component{
		static defaultProps = {
			params: <any>
		}
	}
	
```

第二种写法
```js
	import PropTypes from "prop-types";

	class App extends React.Component{
		
	}

	App.defaultProps= {
		params:  <any>
	}
```