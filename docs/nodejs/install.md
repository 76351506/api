# 安装
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
- nodejs的安装路径
- npm包的下载路径

## 全局包的引用
添加系统变量 NODE_PATH

![redux_data_flow image](/images/nodepath.png)

## 自定义路径
```js
	> npm config set prefix <指定npm安装包存放路径>
	> npm config set cache <指定npm缓存存放路径>
```

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
### 包是个啥?
比如咱么要在代码中使用 axios包，这个包又被称为(第三方)中间件，又被称为(第三方)模块，

```js
	npm install -g yarn 
```