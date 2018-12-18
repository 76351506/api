# 组件
组件可以将UI切分成一些独立的、可复用的部件，这样你就只需专注于构建每一个单独的部件。

**组件从概念上看就像是函数，它可以接收任意的输入值（称之为“props”），并返回一个需要在页面上展示的React元素**

``` md
react 组件的名称，首字母一律大写，并且使用驼峰写法
```

## 类定义组件

- 如果没有组件私有状态(state)需要去定义，根据es6 class的原则，可以省略不写constructor

```jsx
	
	import React from "react";
	class App extends React.Component{
		
		constructor(props){
			super(props);
		}

		//通过render方法渲染组件的模板

		render(){
			return <div></div>
		}
	}
	
	// 解构了 Component,依然需要引入 React, 否则报错
	import React, { Component } from "react";
	class App extends Component{
		//通过render方法渲染组件的模板，并且render只能返回一个根节点元素
		render(){
			return <div></div>
		}
	}
```
```jsx
	import React from "react";
	import ReactDOM from "react-dom";
	
	const template = <div></div>;
	const element = document.getElementById("#app");

	ReactDOM.render(template,element)
```

## 函数定义组件
函数定义组件又被称为无状态组件,**下文一律称-无状态组件**

该函数是一个有效的React组件，它接收一个单一的“props”对象并返回了一个React元素。我们之所以称这种类型的组件为函数定义组件，是因为从字面上来看，它就是一个JavaScript函数。

定义组件时，render 返回的jsx模板如果有多个子节点，那么给组件的根节点元素最好用小括号包起来
```js
	const ProductList = (props)=>{
		return (<div>
			this is productList
			<p></p>
		</div>)
	}
```
## es5创建组件

```
	var ProductList = React.createClass({
		render:function(){
			return <div>
				this is productList
			</div>
		}	
	})
```
## 注意事项

- 无状态组件prop不要通过this.props来调用
- 无状态组件没有生命周期
- 无状态组件不能定义定义状态（state）
- 无状态组件不能实例化,组件名不能被 new 
- 无状态组件只能返回一个根节点元素

- 类组件render函数，只能返回一个根节点元素
- 类组件如果显式的声明了 constructor, 必须调用 super()
