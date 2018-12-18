# Action
Action 是把数据从应用传到 store 的有效载荷。
**它是 store 数据的唯一来源。**
一般来说你会通过 store.dispatch() 将 action 传到 store。

``` js
    const ADD_TODO = 'ADD_TODO'
    {
      type: ADD_TODO,
      text: 'Build my first Redux app'
    }
```

Action 本质上是 JavaScript 普通对象。我们约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。多数情况下，type 会被定义成字符串常量。当应用规模越来越大时，建议使用单独的模块或文件来存放 action。
```js
    import { PLUS, MINUS } from './store/action'
```
除了 type 字段外，action 对象的结构完全由你自己决定。参照 Flux 标准 Action 获取关于如何构造 action 的建议。

这时，我们还需要再添加一个 action index 来表示用户完成任务的动作序列号。因为数据是存放在数组中的，所以我们通过下标 index 来引用特定的任务。而实际项目中一般会在新建数据的时候生成唯一的 ID 作为数据的引用标识。
```js
    {
      type: "PLUS",
      index: 1
    }
```
我们应该尽量减少在 action 中传递的数据。比如上面的例子，传递 index 就比把整个任务对象传过去要好。

最后，再添加一个 action type 来表示当前的任务展示选项。
```js
    {
      type: SET_VISIBILITY_FILTER,
      filter: SHOW_COMPLETED
    }
```



# 发起Action
  通过 dispatch()来发起一个Action, 接受一个对象，对象中有 type,payload

  ```js
   store.dispatch( { type:"PLUS",payload:[something]})
  ```