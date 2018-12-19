# 起步
## 介绍
 - **nodejs 是基于 chrome V8 引擎的 javascript 运行环境( runtime )**
 - **npm nodejs的包管理工具**

## 与传统后端的关系
![nodejs image](/images/node_middleware.png)

## 为什么选择node
nodejs 是服务器端语言与传统后端语言 PHP、 JAVA、ASP.NET有什么差异

多加了一层通讯，肯定会有一定的性能损耗。但分层带来的损失，一定能在其他方面的收益弥补回来，而且合理的分层能让职责清晰、方便协作，大大提升开发效率。也可以通过优化通讯方式和协议，尽可能把损耗降到最低。

## 特性
- **nodejs 运行速度快，性能非常好**
	```md
		v8 是用c++实现，编译速度媲美二进制语言，能够让计算机快速编译识别
	```
- **异步 I/O**
	```md
		- I 指代 input 输入
		- O 指代 output 输出
	```
	同步代码执行，会按照文档流的执行顺序，自上而下去执行代码

	异步代码执行，可以同时去执行某些操作

::: warning 举例：
如何提升工作效率？ 比如清洁工同时扫地与拖地
:::


- **单线程**

默认是单线程，代码按照文档流自上而下执行，以通过process来开启多进程

- **非阻塞**

nodejs提供了一套同步、一套异步的API, 建议我们使用异步编程，事件与回调

**单线程容易阻塞服务器，通过异步操作（process）开启多线程,充分利用服务器的性能**
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