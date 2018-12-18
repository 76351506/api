# react-redux
帮助用户管理store中的状态

## 安装
```md
	cnpm install react-redux --save
```
## 仓库的引用
```js
	import React from "react";
	import ReactDOM from "react-dom";
	import { Provider } from "react-redux";
	import store from "store"
	import App from "view";

	ReactDOM.render(
		<Provider store={store}>
			<App/>
		</Provider>,
		document.getElementById("#app")
	)
```

## 页面注入数据

写法一:

```js
	import React from "react";
	import {connect} from "react-redex";

	class App extends React.Component{
		render(){
			const { datalist } = [];
			return <div>
				<Children datalist={datalist}></Children>
			</div>
		}
	}
	const mapStateToProps = (state)=>{
		return state.reducer;
	}
	const mapDispatchToProps = (dispatch)=>{
		return {
			update(){
				dispatch({type:"",payload})
			}
		}
	}
	export default connect(mapStateToProps,mapDispatchToProps)(App);
```

写法二:

通过 es7 Decorator 装饰器完成

```js
	import React from "react";
	import {connect} from "react-redex";

	const mapStateToProps = (state)=>{
		return state.reducer;
	}
	const mapDispatchToProps = (dispatch)=>{
		return {
			update(){
				dispatch({type:"",payload})
			}
		}
	}

	@connext(mapStateToProps,mapDispatchToProps)
	class App extends React.Component{
		render(){
			const { datalist } = [];
			return <div>
				<Children datalist={datalist}></Children>
			</div>
		}
	}
	
	export default App;
```

## 装饰器
decorator（装饰器）是ES7里面的一个语法糖，作用于类、类属性\方法，为它们提供一个实现与业务逻辑无关的功能的接口。

### 安装

```md
	//babel 6.0
	npm install babel-plugin-transform-decorator --save
	//babel 7.0
	npm install @babel/plugin-proposal-decorators
```

### 配置
.babelrc
```md
	{
		 "plugins": ["@babel/plugin-proposal-decorators"]
	}
```