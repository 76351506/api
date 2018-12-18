# 组件通讯
## 父子通讯

父级组件调用子组件，通过props来传递参数，子组件通过this.props来接收

```jsx
	import React from "react";
	
	class Children extends React.Component{
		render(){
			const { datalist } = this.props;
			return <div>

			</div>
		}
	}

	class Parent extends React.Component{
		render(){
			const { datalist } = [];
			return <div>
				<Children datalist={datalist}></Children>
			</div>
		}
	}
```
## 子父通讯

父级组件通过props给子组件传递一个回调函数，子级组件调用父级传递过来的回调，将参数返回
```jsx
	import React from "react";
	
	class Children extends React.Component{
		componentDidMount(){
			const { getData } = this.props;
			getData([1,2,3,4,5])
		}
		render(){
			
			return <div>
				this is children
			</div>
		}
	}

	class Parent extends React.Component{
		getData(val){
			//[1,2,3,4,5]
			console.log(val)
		}
		render(){
			return <div>
				<Children getData={this.getData}></Children>
			</div>
		}
	}
```
## 同级通讯
``` cmd
	npm install --save events
```
```js
	const EventEmitter = require('events')
	 
	const EventBus = new EventEmitter()
	//事件订阅
	EventBus.on("message", function (text) {
		console.log(text)  //hello world
	})

	//事件发布
	EventBus.emit("message", 'hello world')
```
## 跨级通讯
**案例描述**:

当前有三个组件，包裹顺序依次是： Parent > Middle > Children
现在 Parent组件有数据要传递给 Children组件

-   Parent > Middle > Children
具体方案请参考 props 传参

- Parent > Children
具体方案如下，通context对象完成数据传递：

```jsx
	import React from "react";
	import PropTypes from "prop-types";

	// 子级
	class Children extends React.Component{
		static contextTypes = {
			propA: PropTypes.string
			methodA: PropTypes.func
		}
		render(){
			
			return <div>
				this is children: {this.context.propA}
			</div>
		}
	}
	// 中间
	class Middle extends React.Component {
	  render () {
	    return <Children />
	  }
	}
	// 父级
	class Parent extends React.Component{
		// 声明Context对象属性
		static childContextTypes = {
			propA: PropTypes.string,
			methodA: PropTypes.func
		}

		// 返回Context对象，方法名是约定好的
		getChildContext () {
			return {
			  propA: 'propA',
			  methodA: () => 'methodA'
			}
		}
		render(){
			return <div>
				<Middle/>
			</div>
		}
	}
```
## redux
全局状态的管理库，详情请看[redux指南](../redux/README.md)