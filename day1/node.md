### 什么是npm?

    node package manger (包管理器)

模块：node里面的模块就是js文件，一个js文件即一个模块。遵循的是commonjs规范。（引入：require(),抛出用exports、module.exports）。commonjs规范只能用在服务端。

***exports***

```
    exports = sum ;  // 空对象
    exports.sum =  sum ; //{sun:functions}

```
exports不能直接赋值，可以添加属性和方法。

***module.exports***

module.exports可以直接赋值，当出现多个的时候，最后一个会覆盖前边的。

exports和module.exports指的是同一个对象。

***js六大数据类型***

    String、Number、Boolean、undefined、null、Object

Object最后一个是引用类型，引用类型都存在堆里面，其余的都是基本类型，存在栈里面


包: 把多个文件放在一个目录下边，并且这个目录下边有一个package.json(包的描述文件)的文件。


### npm的作用？
1. 下载
2. 安装
3. 卸载
4. 查看
5. 使用

##### 安装
==本地安装==

    npm install 包名

1. 开发环境安装 
    npm install 包名  --save-dev
    npm install 包名  --D

开发环境下载的包，在package.json里面的devDependencies中体现出来

2. 生产环境安装

    npm install 包名  --save
    npm install 包名  -S

生产环境下载的包，在package.json里面的dependencies中体现出来

==全局安装==

    npm install 包名 -g

> 查看全局安装的包所在位置

    npm root -g


##### 安装的基本流程
1. 



==镜像源==
==缓存==
==解压==


#### 根据依赖安装


#### commonjs查找机制


#### NODE_PATH配置和作用

    作用：指定一个路径，供require查找使用
