### base-vue
项目说明 base-vue 根据生产项目抽离出来的基本vue1.0的模板

  项目所涉及的技术有:
  > 1. [vuejs](http://vuejs.org.cn/guide/) （框架）
  > 2. vue-router ([vue路由](https://github.com/vuejs/vue-router/tree/1.0/docs/en))
  > 3. vue-resource (vue ajax的封装 promise)
  > 4. ES6 babel ([ES6 语法糖](http://es6.ruanyifeng.com/#docs/module) 和[bebel](http://babeljs.io/)转化为可执行的ES5)
  > 5. webpack (项目构建打包发布工具)[webpack](http://webpack.github.io/docs/)
  > 6. [mint ui](http://mint-ui.github.io/docs/#!/zh-cn) vue组件库  类型的还有(vux sui等)
  > 7. eslint (部分文件约束规范)

### 安装
项目地址：（使用`git clone`）

```shell
git clone https://github.com/eteplus/vue-sui-demo.git
```

通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))，使用npm安装依赖模块可能会很慢，建议换成[cnpm](http://cnpmjs.org/)

```shell
npm install -g cnpm --registry=http://registry.npm.taobao.org
```

```bash
# 安装依赖模块
cnpm install

# 启动服务
npm run dev

# 发布代码
npm run build

# 发布后启动服务
npm run main

```

### 开发

### 目录结构
<pre>
.
├── README.md           
├── dist                     // 项目build目录
├── build                    // 项目的配置文件目录
│   ├── dev-server.js        // 开发的服务配置
│   ├── webpack-dev-conf.js  // 开发的Webpack 配置文件
│   ├── webpack-prod-conf.js // 生产的Webpack 配置文件
│   ├── webpack-base-conf.js // 基本的Webpack 配置文件
├── index.js                 // 项目发布后的启动文件
├── package.json             // 项目配置文件
├── src                      // 生产目录
│   ├── assets               // css js 和图片资源
│   ├── data                 // 数据文件
│   ├── components           // 各种组件
│   ├── views                // 各种页面
│   ├── directives           // 各种指令
│   ├── filters.js           // 各种过滤器
│   ├── router.js            // 路由配置
│   └── main.vue             // 根组件
│   └── app.js               // Webpack 预编译入口
│   └── index.html           // 项目入口文件
.
</pre>

### 更新记录
参看 [CHANGELOG.md](./CHANGELOG.md)
