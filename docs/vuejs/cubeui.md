# cube-ui
是基于 Vue.js 实现的精致移动端组件库。

# 开始

1、升级vue-cli 到3.X
```cmd
cnpm install -g @vue/cli-init
```

2、通过 3.X脚手架创建vue+cube-ui项目
```cmd
vue init cube-ui/cube-template projectname
```

3、
```cmd
cnpm install cube-ui --save
```

4、引入方式一：
import Vue from 'vue'
import Cube from 'cube-ui'

Vue.use(Cube)

4、引入方式二：
import {
  Style,
  Button
} from 'cube-ui'

Vue.use(Style);
Vue.use(Button);