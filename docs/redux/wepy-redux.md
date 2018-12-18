# wepy-redux
## 安装
``` cmd
	cnpm install redux redux-actions redux-promise wepy-redux --save
```
## 目录结构
![redux_data_flow image](/images/store_close.png)

![redux_data_flow image](/images/store_open.png)

## 创建 store
```js
	import { createStore, applyMiddleware } from "redux";
	import Reducers from "./reducer";
	import promiseMiddleware from "redux-promise";

	//写法一：
	export default function configStore() {
	   return createStore(Reducers, applyMiddleware(promiseMiddleware))
	}
	//写法二
	export default createStore(Reducers, applyMiddleware(promiseMiddleware))
```
## 创建 reducer
**rank.js**
```js
	
	const defaultState = {
	  rankList: [1, 2, 3]
	}
	const rankReducer = (state = defaultState, action) => {
	  const { type, payload } = action;
	  switch (type) {
	    case "UPDATE":
	      return { ...state, rankList: payload }
	    default:
	      return state;
	  }
	}

	export default rankReducer;
```

**index.js**
```js
	import { combineReducers } from "redux";

	import rankReducer from "./rank";
	import topListReducer from "./toplist";
	import searchReducer from "./search";

	const Reducers = combineReducers({
	  rankReducer,
	  topListReducer,
	  searchReducer,
	  ...
	})

	export default Reducers;
```
## 创建 action
```js
	import { RNAK_UPDATE } from "../type/rank";
	import { createAction } from "redux-actions";
	import axios from "@/utils/request";

	//方式一:
	export function update(payload) {
	  return {
	    type: RNAK_UPDATE,
	    payload
	  }
	}

	//方式二：
	const getJson = async function(url) {
	  let result = await axios.get(url);
	  return result.data.data.slider;
	}

	export const update = createAction(RNAK_UPDATE, () => {
	  const url = "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";
	  return getJson(url);
	})

```
## 创建 type
```js
	export const RNAK_UPDATE = "UPDATE";
	export const TOPLIST_UPDATE = "UPDATE";
```
## 绑定及监听
在app.wepy文件中，添加下面代码：
```js
	import { setStore } from 'wepy-redux'
	import store from './store'
	setStore(store)
```
setStore()是用来将仓库中的数据绑定到页面中

类似react-redux中的 `<Provider store={store}></Provider>组件`