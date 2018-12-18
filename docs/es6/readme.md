# ES6

- 2015 年 6 月正式发布
- ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准

## ECMAScript 和 JavaScript 的关系
前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 Jscript 和 ActionScript）

## ES6 与 ECMAScript 2015 的关系
ES6 既是一个历史名词，也是一个泛指

ES6 这个词的原意，就是指 2015年6月发布的 es6，但是每年都会发布一个新版本 es2016( es6.1) es2017 (es6.2) 因此 es6 也是一个泛指，代表es2015年之后的 js 版本

## 语法提案的批准流程 

- Stage 0 - Strawman（展示阶段）
- Stage 1 - Proposal（征求意见阶段）
- Stage 2 - Draft（草案阶段）
- Stage 3 - Candidate（候选人阶段）
- Stage 4 - Finished（定案阶段）

**一个提案只要能进入 Stage 2，就差不多肯定会包括在以后的正式标准里面**
## [babel]

## 变量与常量

ES6 新增了let、const命令，用来声明变量、常量。它的用法类似于var，但是所声明的变量，只在let、const命令所在的代码块内有效。

```js
	{
	  let a = 10;
	  var b = 1;
	}

	a // ReferenceError: a is not defined.
	b // 1
```

## 不允许重复声明

//报错 语法错误
let a = 1;
let a = 2;

## 块级作用域
javascript 是一门弱类型的语言
javascript (es6之前的版本)当中具备作用域只有函数（function）
变量通过let声明的时候，会形成该变量的块级作用域，不受外部变量的影响

```js
	for (var i = 0; i < 5; i++) {
	    var c = 4;
	    console.log(c)
	}

	for (let i = 0; i < 5; i++) {
	    let i = 4;
	    console.log(i)
	}
```

```js
	var a = 1;
	if(true){
		//暂时性死区
		console.log(a);
		let a = 2;
		var b = 1;
		console.log(a);
	}

	for(let i =0;i<5;i++){
		i = 4;
		console.log(i)
	}
```

## 不存在变量提升

```es5
	console.log(a,b)  //undefined
	var a = 1;
	var b = 2;
```
在声明之前调用的参数，值为undefined

```es6
	console.log(a,b)  // ReferenceError
	let a = 1;
	let b = 2;
```
使用了let const 语法，变量不得在声明之前调用，否则会返回一个语法错误


## 暂时性死区
在声明一个变量之前调用，就会报错

## 常量不允许修改

```js
	//es5
	var PI = 3.14; 
	PI= 3; // 3
	//es6
	const PI = 3.14
	PI =3; //报错 恒定的值不可以被修改
```

```js
	const ProductList = [];
	ProductList = [1,2,3,4] //报错 TypeError: Assignment to constant variable.


	const productList = [];
	productList.push({
		name:"fengjie"
	})
	console.log(productList)
```

## 顶层对象的属性
服务端 nodejs global
客户端 浏览器 window


## Es6声明变量的有几种方式
- var 
- function 
- let 
- const
- import
- class

## 解构赋值
ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
为什么要用解构?

```js
	var a = 0;
	var b = 0;
	...

	let [a , b ,c, ...] = [1,2,3,...]
	let {a ,b ,c} = { a:1,b:2,c:3}
```

### 默认值

```js
let [foo] = [];
foo // undefined

let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
```

```js 
	let [a=123] = [];  /a 123

	function test({age,name}){
		console.log(age)
		console.log(name)
	}
	let result = {name:"heinan",age:25,hobby:[]}
	test(result)

	
```
