# jsx

## 概念
jsx是 javascript and xml 的简写

**xml 指可扩展标记语言,被设计用来传输和存储数据**

**json 写法比xml简单，类似与js的对象，以键值对的形式保存**


## 意义
我们之前创建一个template模板
而且想在js中写html 需要通过字符串("")引起来,插入变量的时候需要截断，非常麻烦，而且很容易出错，
jsx 应用而生。

```js
	//es5
	var result = "hello template";
	var temp = "<div>"+
		"<h1>"+result+"</h1>"+
	"</div>";

	//es6 字符串模板
	var result = "hello template";
	var temp = `<div>
		<h1>${result}</h1>
	</div>`
```
## 基本语法
```js
	//这种看起来可能有些奇怪的标签语法既不是字符串也不是 HTML。
	const element = <h1>Hello, world!</h1>;
```
**它被称为 JSX， 一种 JavaScript 的语法扩展**

## 表达式

```jsx
	let result = "hello template"
	let temp = <div>
		<h1>{result}</h1>
	</div>
```

## 使用方式
想让你的webpack项目认识jsx，需要：
- babel-loader

webpack.config.js
```js
	module.exports= {
		module: {
	        rules: [{
	                test: /\.(js|jsx)$/,
	                loader: "babel-loader"
	            }
	        ]
		},
	}
```
- react 支持 jsx (选择一个)

```js
	//手动搭建 babel 6.0
	npm install --save-dev babel-preset-react
	//脚手架 babel 7.0
	npm install --save-dev babel-preset-react-app
```
```babelrc
	{
		"presets": [
	      "react",
	      "react-app"
	    ]
	}
```

## 实现原理
```js
	import React from "react"
	import ReactDOM from "react-dom"
	ReactDOM.render(
		<div></div>,
		document.getElementById("#app")
	)
```

# 传统操作dom绑定数据的方式及调优
	1 document.createElement()
	2 innerHTML
```js
	// 通过appendChild 插入节点，来达到更新dom的目的
	const root = document.getElementById("root");
	const oHeader = document.createElement("header");
	const oH1 = document.createElmment("h1");
	oH1.innerHTML = "世界你好";
	oHeader.className="memeda";
	oHeader.appendChild(oH1);
	root.appendChild(oHeader)

	//通过innerHTML来替换目标节点的内容
	const root = document.getElementById("root");
	const temp = `<header>世界你好</header>`
	root.innerHTML = temp;

```
## 调优思路
	通过createElement()创建dom需要频繁的插入节点，导致页面进行大量重绘，性能很差
	我们可以通过 document.documentCreateFragement() 片段来完成dom 操作一次性插入到节点当中
```js
	var d=document.createDocumentFragment();
	const oHeader = document.createElement("header");
	const oH1 = document.createElement("h1");
	oH1.innerHTML = "世界你好";
	oHeader.appendChild(oH1);
	d.appendChild(oHeader)
	document.getElementsByTagName("UL")[0].appendChild(d);
```

## 模拟jsx

```js
	//创建好的对象就是一个虚拟dom
	createElement(tag, attrs, ...children) {
        //模拟dom树，返回一个js对象
        return {
            tag,
            attrs,
            children
        }
	}
```

## 虚拟dom
- 用途 通过创建虚拟dom与原dom树的比较，插入更新模板
- 算法 diff算法

### 模拟
```js
	const render = (vnode, container) => {
		//判断节点类型
	    if (typeof vnode === "string") {
	        const textNode = document.createTextNode(vnode)
	        return container.appendChild(textNode)
	    }
		//创建虚拟dom节点
	    const virtualDom = document.createElement(vnode.tag);
	    if (vnode.attrs) {
	        Object.keys(vnode.attrs).forEach(key => {
	            if (key === "className") {
	                virtualDom.setAttribute("class", vnode.attrs[key])
	            } else {
	                virtualDom.setAttribute(key, vnode.attrs[key])
	            }
	        })
	    }
	    //遍历子元素，递归调用，并绑定元素
	    vnode.children.forEach(child => {
	        return render(child, virtualDom)
	    })
		将生成的虚拟dom树渲染
	    return container.appendChild(virtualDom)
	}
```

## 总结
- react 综合渲染性能较强
结合了jsx以及dif算法，通过创建虚拟dom与原dom树的比较，替换需要更新的模板，完成数据绑定
- 误区
一般情况下，原生js实现渲染性能好，从普适性和整体性能来看，react做的diff算法在前端框架中较好



