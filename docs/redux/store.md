# Store
## 职责：
- action 描述“发生了什么”的一个动作，通过dispatch 来执行这个动作。
- reducers 来根据 action 更新 state 的用法。
- store 就是把它们联系到一起的对象

## 什么时候使用
    - 有参数或者数据需要被多个页面共享的时候
## 基础 
- 提供 getState() 方法获取 state；
- 提供 dispatch(action) 方法更新 state；
- 通过 subscribe(listener) 注册监听器;
- 通过 subscribe(listener) 返回的函数注销监听器。

**再次强调一下 Redux 应用只有一个单一的 store。**

## 创建

当需要拆分数据处理逻辑时，你应该使用 reducer 组合 而不是创建多个 store。
根据已有的 reducer 来创建 store 是非常容易的。
使用 combineReducers() 将多个 reducer 合并成为一个。

现在我们将其导入，并传递 createStore()。

``` js
        //reducers
        import { combineReducers } from 'redux';
        import ...Reducer from somepath;
        import ...Reducer from somepath;
        const Reducers = combineReducers({
            ...Reducer,
            ...Reducer,
            ...
        })
```

``` js
        import { createStore } from 'redux'
        import Reducers from './reducers'
        let store = createStore(Reducers)
```


## 配置初始化数据
createStore() 的第二个参数是可选的, 用于设置 state初始状态。这对开发应用时非常有用，服务器端 redux 应用的 state 结构可以与客户端保持一致, 那么客户端可以将从网络接收到的服务端 state 直接用于本地数据初始化。

``` js
    let store = createStore(reducer, window.STATE_FROM_SERVER)
```
## 添加监听

当仓库状态改变时，页面数据也需要随着改变，通过subscribe监听数据变化，并绑定到视图

```jsx
    import store from "store";
    import React from "react";
    import ReactDOM from "react-dom";
    
    const template = <div></div>;
    const element = document.getElementById("#app");

    const render = ()=>{
        ReactDOM.render(template,element)
    }
    render()
    //只能监听一个函数，所以对render方法改造
    store.subcribe(render)
```

## 移除监听
创建监听后，store.subscribe() 将返回一个函数作为返回值，调用这个函数，即可移除对视图监听

```js
     const unsubscribe  = store.subscribe(listener);
     unsubscribe()
```