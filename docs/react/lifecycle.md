# 生命周期
**无状态组件没有生命周期钩子函数**
# 实例期
	constructor(){}
# 存在期
	componentWillMount() {} 组件将要加载
	componentDidMount() {} 组件加载完成
	componentWillUpdate() {} 物件将要更新
	componentDidUpdate() {} 组件完成更新
	shouldComponentUpdate（）{}  组件可以更新？
	componentWillReceiveProps{} 组件将要接受props参数
	render(){}
# 销毁期
	componentWillUnmount() {} 销毁组件


# 组件初始化生命周期的执行过程

- constructor
- componentWillMount
- render
- componentDidMount

# 组件内部状态(state)被改变生命周期的执行过程

- shouldComponentUpdate() {}
- componentWillUpdate() {}
- render() {}
- componentWillUpdate() {}

# 组件外部部状态(props)被改变生命周期的执行过程

- componentWillReceiveProps() {}
- shouldComponentUpdate() {}
- componentWillUpdate() {}
- render() {}
- componentWillUpdate() {}


