# 操作dom

# dangerouslySetInnerHTML
dangerouslySetInnerHTML
```js
	// native
	var oDiv = document.getElementById("div");
	oDiv.innerHTML ="";

	// react
	const temp = { __html:"hahahaha"};
	<div dangerouslySetInnerHTML={temp} />;
```

# findDOMNode

# ref

```jsx
	//设置名字
	<input type="" ref="name"/>
	//取值
	this.refs.name
```