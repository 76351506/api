# 安装

```js
	<!-- 开发环境版本，包含了有帮助的命令行警告 -->
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

```js
	//结合webpack
	import Vue from "vue";
```

# 初始化
```js
	new Vue({
		el:"#app",
		data:{

		},
		render: (h)=>(App)
	});
```

# jsx
vue 添加jsx 支持
//下面代码 babel 6.0 vue 2.0
babel-helper-vue-jsx-merge-props
babel-plugin-syntax-jsx
babel-plugin-transform-vue-jsx