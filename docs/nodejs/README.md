# Nodejs
## javascript 运行环境
javascript 是脚本语言，运行环境只有浏览器

## 介绍
nodejs 是基于chrome V8引擎的 javascript 运行环境(runtime)
npm nodejs的包管理工具

## 特性

### nodejs 运行速度快
	因为用了v8，运行速度快
	v8 是用c++实现，编译速度媲美二进制语言，能够让计算机快速编译识别
	
### 异步I/O
- I 指代 input 输入
- O 指代 output 输出
同步代码执行，会按照文档流的执行顺序，自上而下去执行代码
异步代码执行，可以同时去执行某些操作
举例：
如何提升工作效率？ 比如清洁工同时扫地与拖地

### 单线程
默认是单线程，同时可以通过process来开启多进程

### 非阻塞
```js
	//同步  1,2,3
	console.log(1);
	console.log(2);
	console.log(3);

	//异步 1,3,2
	console.log(1);
	setTimeout(()=>{
		console.log(2);
	},0)
	console.log(3);
```