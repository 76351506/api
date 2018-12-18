# middleware 中间件
进入一个路由页面或者一个接口之前，执行某一些特殊的操作，通过中间件来完成。

**中间件特点**
形参具备三个参数  request response next

**错误处理中间件特点**
形参具备四个参数  request response  error next

## 内置中间件  
fs path url http scoket

## 第三方中间件 
axios jquery body-parser redux react
```js
	//es5 
	const jquery = require("jquery")
	//es6
	import jquery from "jquery" 
```

## 全局挂载的中间件

```js
	// 结合 express
	var app = require("express")();
	app.use(funciton(req,res,next){
		//do something
	})
```
##  错误处理中间件
```js
	app.get("/login",(req,res,error,next)=>{
		do something...
	},(req,res)=>{
	
	})
```
## 路由中间件
```js
	app.get("/login",(req,res,next)=>{
		do something...
	},(req,res)=>{
	
	})
```