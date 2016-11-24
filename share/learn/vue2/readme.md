#### vue2
最近2个月都在弄vue1 对vue有一定的了解 完成了[火车票项目](m.12308.com/train)
越来越喜欢 vue 主要是数据驱动的思想 的确 MVVM的框架 一但上手 就回不去了 哈哈
> ps 以前采用ko 写过管理网站的 也算MVVM的入门 那时就感觉Jquery这种手动Dom的方式真心难受   

近段时间 重构汽车票 对vuex node 都加强了解 vue1的全家桶 用的还是很顺手的    
对vue2 一直对vue2 不向上兼容vue1 耿耿入怀 而刚出来 线上项目不敢尝试使用
如是 趁着空闲或周末 来熟悉下 vue2
学习 步骤  采用vue-cli 生成项目  参看别的较成熟的vue2的开源demo 进行学习

上来就遇到第一坑
先按照 vue-cli [vue--cli](https://vuefe.cn/guide/installation.html)
一上来就说不兼容 需要升级npm node
本地原来安装的是4.x 果断升级到 6.9.x LTS 版本
npm 从2.x 升级到4.x
瞬间清静了

>ps 下载node LTS版本的时候 电脑居然自动关机了 查了半天 发现是EagleGet 热的祸 果断设置好
> 人生最痛苦的事 就是撸码正high的时候 电脑居然自动关机了 按什么都终止不了这个 心中一万只操尼玛飞过
npm run dev
npm run build
ok 没问题
 cd dist
 http-server (需要先安装http-server 服务器) 完美

  打开package.json
  又发现都是坑 去了vue 什么都没有  vue的全家桶呢 尼玛 又要开始骂了
  vue- vue-router vuex vue-resource(从vue2不被官方推荐 大大说要改用(axiso)[//https://github.com/mzabriskie/axios 的学习])
  个人觉得 请求这块 采用ES Promise的写法 爽得不要不要的 哈哈

  //有时间再一个个添加上来 vue全家桶 然后开始写demo todo
