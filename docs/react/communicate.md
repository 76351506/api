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

## 跨级组件通讯 - 发布订阅模式

```js
	const eventProxy = {
    // onObj 存放多个监听事件的对象
    // oneObj 存放多个监听事件的对象,获取一次清空
    onObj: {},
    oneObj: {},
    //监听事件
    $on: function(key, fn) {
        // 当前请求事件在对象中是否存在
        //不存在 返回一个[]
        if (this.onObj[key] === undefined) {
            this.onObj[key] = [];
        }
        //将事件处理函数添加到对应的key
        this.onObj[key].push(fn);
    },
    $once: function(key, fn) {

        if (this.oneObj[key] === undefined) {
            this.oneObj[key] = [];
        }

        this.oneObj[key].push(fn);
    },
    // 移除事件监听
    $remove: function(key) {
        this.onObj[key] = [];
        this.oneObj[key] = [];
    },
    // 触发器或者发射器
    $emit: function() {
        let key, args;

        if (arguments.length == 0) {
            return false;
        }

        //trigger("update",data1,data2,data3)

        // 获取trigger函数的arguments，得到类数组
        // key 获取传参序列的第一项
        key = arguments[0]; //onObj[arguments[0]
        //类数组没有数组的slice,通过call改变this指向，让类数组继承数组的slice方法，完成截取功能
        args = [].concat(Array.prototype.slice.call(arguments, 1)); //data1,data2,data3

        // console.log(this.onObj[key][0]())
        if (this.onObj[key] !== undefined &&
            this.onObj[key].length > 0) {
            for (let i in this.onObj[key]) {
                // console.log(args)
                this.onObj[key][i].call(null, args);
            }
        }
        if (this.oneObj[key] !== undefined &&
            this.oneObj[key].length > 0) {
            for (let i in this.oneObj[key]) {
                // null 继承 this.oneObj[key][i]函数并调用，参数是args
                this.oneObj[key][i].apply(null, args);
                // console.log(args)
                this.oneObj[key][i] = undefined;
            }
            this.oneObj[key] = [];
        }
    }
};
eventProxy.$on("update", function(val) {
    console.log(val)
})
eventProxy.$once("update", function(val) {
    console.log(val)
})
eventProxy.$emit("update", 1, 2, 3)
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

## 跨级组件通讯（新）

```jsx
	conts { Provider ,Consumer}= React.createContect([defaultValue])

	class Child extends React.Component {
	    render() {
	    	//Consumer只能通过一个回调函数返回一react元素
	        return <Consumer>
	            {context => <div>
	                {
	                    context.map(item=>{
	                        return <li key={item.id}>
	                            {item.name}
	                        </li>
	                    })
	                }
	            </div>}
	        </Consumer>
	    }
	}

	class Middleware extends React.Component {
	    render() {
	        return <div>
	            this is Middleware
	            <Child/>
	        </div>
	    }
	}
	class App extends React.Component {
	    constructor() {
	        super()
	        this.state = {
	            productList: [{
	                id: 1,
	                name: "zhangsan"
	            }, {
	                id: 2,
	                name: "lisi"
	            }]
	        }
	    }
	    render() {
	        return <div className="wraper">
	            <Header></Header>
	            <Layout>
	            	//value 固定写法用来给子组件传参
	                <Provider value={this.state.productList}>
	                    <Middleware/>
	                </Provider>
	            </Layout>
	        </div>
	    }
	}
```
## redux
全局状态的管理库，详情请看[redux指南](../redux/README.md)