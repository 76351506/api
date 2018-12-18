# Reducer
指定了应用状态的变化如何响应 actions 并发送到 store 的
reducer 接收旧的 state 和 action，返回新的 state。
```js
    import {createStore} from "redux";
    const defaultState = {
        count:0
    }
    const reducer = (state = defaultState,action)=>{
        const { type,payload } = action;
        switch (type) {
             case "PLUS":
                //写法一：
                 return {...state, count: state.count+1}

             case "MINUS":
                //写法二：
                 return Object.assign({},state,{
                    count: state.count-1
                 })
             default:
                return state;
         } 
    }
    const store = createStore(reducer)
```

# 注意事项
**永远不要在 reducer 里做这些操作：**

- 修改传入参数
- 执行有副作用的操作，如 API 请求和路由跳转
- 调用非纯函数，如 Date.now() 或 Math.random()

# 纯函数

## 为什么要使用纯函数？
当我们的程序变得庞大的时候, 将不可避免地引发一些bugs。我们不能保证杜绝bug产生, 但是我们可以通过某些编程方式来减少一些错误的发生。

纯函数就是其中一种,它也是函数式编程中一部分。那它为什么可以起到减少bug的作用呢, 原因就在于能被称之为纯函数而制定的一些原则，我们来简单看下

**3个原则：**

- 变量都只在函数作用域内获取, 作为的函数的参数传入
- **不会产生副作用**(side effects), 不会改变被传入的数据或者其他数据
- 相同的输入 **一定** 保证相同的输出(same input -> same ouput)

## 纯函数的一些优点
- 容易测试(testable)
- 因为相同的输入必定是相同的输出，因此结果可以缓存(cacheable)
- 自我记录(Self documenting),因为需要的变量都是参数，参数命名良好的情况下即便很久以后再去看这个函数依旧可以很容易知道这个函数需要哪些参数
- 因为不用担心有副作用(side-effects),因此可以更好地工作

## 合并 reducer
### 需求
当我们的业务逻辑足够复杂的时候，一个全局的state 已经不能很好维持每个页面中的共享数据，迫切的需要进行作用域隔离 combineReducers 函数应用而生
```js
    import { combineReducers } from 'redux';
    const reducer1 = ()=>{};
    const reducer2 = ()=>{};
    const Reducers  = combineReducers({
        reducer1:reducer1,
        reducer2,
        ...
    })
```