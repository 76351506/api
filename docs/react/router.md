# 路由

## 安装
```md
	npm install react-router-dom --save
```
## 分类
- 历史模式 BrowserRouter
- 哈希模式 HashRouter

**注意（前方高能）**
使用BrowserRouter时，我们需要与后端配合，因为访问路由会像一个真实的url路径，会被后端解析。
```md
	http://localhost:8080/login/heinan
```
我们通过react路由配置出这样的一个动态路由时，后端会根据上面地址去找对应的接口和页面，没有找到时，将会返回一个404的错误的页面

### 解决方案
- 使用webpack-dev-server 来mock 数据，我们需要开启

	```js
		module.exports = {
			devServer:{
				historyApiFallback:true
			}
		}
	```
- 后端添加前端路由的过滤白名单
思考:
当我们在浏览器，输入一个url地址时，发生了什么？

## 常用API

- Route
- Switch
- Link
- NavLink
- this.props.match
- this.props.location
- this.props.history

## 动态路由配置

动态路由组件
```js
	import React from "react";
	import Routes from "./routes";
	import RouterMap from "./map";

	class RouterView extends React.Component {
	    render() {
	        const routes = this.props.routes ? this.props.routes : Routes;
	        return <RouterMap routes={routes}/>
	    }
	}
	export default RouterView;
```

动态生成Routes及多级路由
```js
	import React from "react";
	import { Switch, Route, Redirect } from "react-router-dom";

	class RouterMap extends React.Component {
	    render() {
	        const { routes } = this.props;
	        const defaultRoute = <Route path="/" render={()=>{
	            return <Redirect to="/index/rank"/>
	        }} key={0} exact/>;
	        return <Switch>
	            {
	                routes.length && routes.map((item,index)=>{
	                    const TempComponent = item.component;
	                    if(TempComponent){
	                        return <Route key={item.name} path={item.path} render={(config)=>{
	                            const children = item.children===undefined?[]:item.children;
	                            if(children.length){

	                            }
	                            return (children.length
	                                ?<TempComponent routes={children} {...config}/>
	                                :<TempComponent {...config}/>)
	                             
	                        }}/>
	                    }
	                    return true; 
	                }).concat([defaultRoute])
	            }
	        </Switch>
	    }
	}
	export default RouterMap;
```

routes 配饰文件
```js
	import Index from "view/index";
	import Rank from "view/index/rank";
	import RankDetail from "view/index/detail";
	import TopList from "view/index/toplist";
	import Search from "view/index/search";

	const Routes = [{
	    path: "/index",
	    name: "首页",
	    component: Index,
	    children: [{
	            path: "/index/rank",
	            name: "推荐",
	            component: Rank
	        },
	        {
	            path: "/index/rankDetail/:id",
	            name: "详情",
	            component: RankDetail
	        }, {
	            path: "/index/toplist",
	            name: "排行",
	            component: TopList
	        }, {
	            path: "/index/search",
	            name: "搜索",
	            component: Search
	        }
	    ]
	}]

	export default Routes;
```

## 传参

- props.params

```js
	//设置路由
	const routes = [{
		path:"/user",
		component:User
	},{
		path:"/user/:userId",
		component: Detail
	}]

	//跳转路由一:
	this.props.history.push({
		pathname:"/user/89757"
	})
	//跳转路由二:
	<Link to={{
		pathname:"/user/89757"
	}}>

	//取值
	this.props.match.params.userId

```

- query 类似 get 请求
```js
	//设置路由
	const routes = [{
		path:"/user",
		component:User
	},{
		path:"/user/detail",
		component: Detail
	}]

	//跳转路由一:
	this.props.history.push({
		pathname:"/user/detail",
		query:{
			userId:89757
		}
	})
	//跳转路由二:
	<Link to={{
		pathname:"/user/detail",
		query:{
			userId:89757
		}
	}}>

	//取值
	this.props.location.query.userId

```

- state 类似post请求，使用方式与 query基本一致
```js
	//设置路由
	const routes = [{
		path:"/user",
		component:User
	},{
		path:"/user/detail",
		component: Detail
	}]

	//跳转路由一:
	this.props.history.push({
		pathname:"/user/detail",
		state:{
			userId:89757
		}
	})
	//跳转路由二:
	<Link to={{
		pathname:"/user/detail",
		state:{
			userId:89757
		}
	}}>

	//取值
	this.props.location.state.userId

```