# 安装

## 验证
通过 cmd命令窗口中输入下面命令，来检查是否安装成功：
```js
	C:\Users\Nan> node -v
	C:\Users\Nan> npm -v
```
## 为什么要配置环境变量？
- 因为我们想访问一个包或者一个文件，只能在它的存放路径去访问
- 如果想在其他路径访问，会报错，提示找不到文件或者命令

```js
	C:\Users\Nan>gulp -v 
	> 'gulp' 不是内部或外部命令，也不是可运行的程序或批处理文件。
```
ps: 修改好环境变量，需要重开cmd.exe命令提示符

## 环境变量
添加环境变量 path:
- nodejs 的安装路径
- npm 包的下载路径

![node path](/images/node_path.png)

## 自定义路径
```js
	> npm config set prefix <指定npm 全局安装包的存放路径>
	> npm config set cache <指定npm 下包的缓存路径>
```
如果目录不存在，nodejs会自动创建

## 全局包的引用
添加系统变量 NODE_PATH，来获取全局包的存放路径

![redux_data_flow image](/images/nodepath.png)



## 淘宝镜像
由于npm服务器在美国，国内由于“墙”的原因,国内访问缓慢

这是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。

**cnpm具备除了 publish及unpublish npm的所有功能**

安装:

```js
	> npm install cnpm -g
	> npm config set registry https://registry.npm.taobao.org
```
## yarn 包管理器
快速、可靠、安全的依赖管理工具。
```js
	npm install -g yarn 
```