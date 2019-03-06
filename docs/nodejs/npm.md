# 包管理器
npm 是 nodejs 的包管理器，可以用来下载第三方包（模块）

# 常用命令

```md
	npm adduser 登陆
	npm clear cache  清除缓存
	npm clean cache 清除缓存
	npm config set <key> <value>
	npm config get <key>
	npm -h
	npm --help 查看帮助

	package代表包的名称
	-g 全局安装
	-d 当前路径安装
	--save 向包管理文件添加 生产环境依赖
	--save-dev 向包管理文件添加 开发环境依赖

	npm install <package> -g  安装
	npm uninstall <package> -g 卸载

	npm publish 发布
	npm unpublish 取消发布
	 
	npm owner 一个包的作者
	npm whoami 用户名
	npm -v 查看版本号
	npm run <> 执行包管理文件的某条命令
	npm start 启动默认命令 简写， npm run start
	npm init 生成一个包管理文件
	npm i 等同于 npm install

```