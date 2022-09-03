## 博客介绍

<p align=center>
  <a href="https://blog.unanaos.com">
    <img src="https://file.unanaos.com/avatar/avatar.png" alt="9527的个人博客" style="border-radius: 50%">
  </a>
</p>

<p align=center>
   基于Springboot + Vue 开发的前后端分离博客
</p>

<p align="center">
   <a target="_blank" href="https://github.com/X1192176811/blog">
      <img src="https://img.shields.io/hexpm/l/plug.svg"/>
      <img src="https://img.shields.io/badge/JDK-1.8+-green.svg"/>
      <img src="https://img.shields.io/badge/springboot-2.4.2.RELEASE-green"/>
      <img src="https://img.shields.io/badge/vue-2.5.17-green"/>
      <img src="https://img.shields.io/badge/mysql-8.0.20-green"/>
      <img src="https://img.shields.io/badge/mybatis--plus-3.4.0-green"/>
      <img src="https://img.shields.io/badge/redis-6.0.5-green"/>
      <img src="https://img.shields.io/badge/elasticsearch-7.9.2-green"/>
      <img src="https://img.shields.io/badge/rocketmq-2.1.1-green"/>
   </a>
</p>

[在线地址](#在线地址) | [目录结构](#目录结构) | [项目特点](#项目特点) | [技术介绍](#技术介绍) | [运行环境](#运行环境) | [开发环境](#开发环境) | [项目截图](#项目截图) | [快速开始](#快速开始) | [注意事项](#注意事项) | [项目总结](#项目总结) | [交流群](#交流群)

## 在线地址

**项目链接：** [blog.unanaos.com](https://blog.unanaos.com)

**后台链接：** [admin.unanaos.com](https://admin.unanaos.com)

测试账号：暂未开放

**Github地址：** [https://github.com/yantaosun/blog-system](https://github.com/yantaosun/blog-system)

**Gitee地址：** [https://gitee.com/unanaos/blog-system](https://gitee.com/unanaos/blog-system)

**在线接口文档地址：** [https://blog.unanaos.com/api/doc.html](https://blog.unanaos.com/api/doc.html)


## 目录结构

项目总共分为三个

前端项目: [front-blog](http://gitee.com/unanaos/front-blog)为前台，[front-admin](http://gitee.com/unanaos/front-admin)为后台。

后端项目:[blog-system](http://)。

SQL文件位于根目录下的blog-mysql8.sql，需要MYSQL8以上版本。

可直接导入该项目于本地，修改后端配置文件中的数据库等连接信息，项目中使用到的关于阿里云功能和第三方授权登录等需要自行开通。

当你克隆项目到本地后可使用邮箱账号：admin@qq.com，密码：1234567 进行登录，也可自行注册账号并将其修改为admin角色。

本地访问接口文档地址：[http://127.0.0.1:8080/doc.html](http://127.0.0.1:8080/doc.html)

**ps：请先运行后端项目，再启动前端项目，前端项目配置由后端动态加载。** 

```
blog-springboot
├── annotation    --  自定义注解
├── config        --  配置模块
├──────  aspect   --  aop模块
├──────  consumer --  MQ消费者模块 
├──────  handler  --  处理器模块
├── constant      --  常量模块
├── controller    --  控制器模块
├── dao           --  框架核心模块
├── dto           --  dto模块
├── enums         --  枚举模块
├── exception     --  自定义异常模块
├── handler       --  处理器模块（扩展Security过滤器，自定义Security提示信息等）
├── service       --  服务模块
├── strategy      --  策略模块（用于扩展第三方登录，搜索模式，上传文件模式等策略）
├── util          --  工具类模块
└── vo            --  vo模块
```

## 项目特点

- 前台参考"Hexo"的"Butterfly"设计，美观简洁，响应式体验好。
- 后台参考"element-admin"设计，侧边栏，历史标签，面包屑自动生成。
- 采用Markdown编辑器，写法简单。
- 评论支持表情输入回复等，样式参考Valine。
- 添加音乐播放器，支持在线搜索歌曲。
- 前后端分离部署，适应当前潮流。
- 接入第三方登录，减少注册成本。
- 支持发布说说，随时分享趣事。
- 留言采用弹幕墙，更加炫酷。
- 支持代码高亮和复制，图片预览，深色模式等功能，提升用户体验。
- 搜索文章支持高亮分词，响应速度快。
- 新增文章目录、推荐文章等功能，优化用户体验。
- 新增在线聊天室，支持撤回、语音输入、统计未读数量等功能。
- 新增aop注解实现日志管理。  
- 支持动态权限修改，采用RBAC模型，前端菜单和后台权限实时更新。
- 后台管理支持修改背景图片，博客配置等信息，操作简单，支持上传相册。
- 代码支持多种搜索模式（Elasticsearch或MYSQL），支持多种上传模式（OSS或本地），可支持配置。
- 代码遵循阿里巴巴开发规范，利于开发者学习。

## 技术介绍

**前端：** vue + vuex + vue-router + axios + vuetify + element + echarts

**后端：** SpringBoot + nginx + docker + SpringSecurity + Swagger2 + MyBatisPlus + Mysql + Redis + elasticsearch + RabbitMQ + MaxWell + Websocket

**其他：** 接入QQ，GitHub,Gitee第三方登录，接入腾讯云人机验证、websocket

## 运行环境

**服务器：** 阿里云2核8G Alibaba Cloud Linux 3.2104 LTS 64位

**CDN：** 这在接入阿里用CDN

**对象存储：** 阿里云OSS

CDN接入完这套搭配响应速度非常快，理论上可以做到响应100ms以下。

**最低配置：** 1核2G服务器（关闭ElasticSearch）

## 开发环境

|开发工具|说明|
|-|-|
|IDEA|Java开发工具IDE|
|VSCode|Vue开发工具IDE|
|Navicat|MySQL远程连接工具|
|Another Redis Desktop Manager|Redis远程连接工具|
|X-shell|Linux远程连接工具|
|Xftp|Linux文件上传工具|

|开发环境|版本|
|-|-|
|JDK|1.8|
|MySQL|8.0.29|
|Redis|7.0.0|
|Elasticsearch|7.9.2|
|RocketMQ|4.8.0|

## 项目截图

![1.png](https://file.unanaos.com/upload/articles/2022-06-26/bbb6699fe2208506662354b9a5823293.png)

![2.jpg](https://file.unanaos.com/upload/articles/2022-06-26/e830de44f7b6c662198aa35f1ad89478.png)

![3.png](https://file.unanaos.com/upload/articles/2022-06-26/d82e447fd57c6c7aac10db5ebfcd72bd.png)

![4.png](https://file.unanaos.com/upload/articles/2022-06-26/2cbd0fb6feaa3c2d580f3c2f4bf3cc81.png)

## 快速开始

### 项目环境安装

详见文章[Docker安装运行环境](https://blog.unanaos.com/articles/101)

### 项目配置

详见文章[项目配置教程](https://blog.unanaos.com/articles/70)

### Docker部署项目

详见文章[项目部署教程](https://blog.unanaos.com/articles/102)

## 注意事项

- 项目拉下来运行后，可到后台管理页面网站配置处修改博客相关信息.
- 邮箱配置，第三方授权配置需要自己申请。
- ElasticSearch需要自己先创建索引，项目运行环境教程中有介绍。

## 项目总结

博客作为新手入门项目是十分不错的，项目所用的技术栈覆盖的也比较广，适合初学者学习。主要难点在于权限管理、第三方登录、websocket这块。做的不好的地方请大家见谅，有问题的或者有好的建议可以留言哦。







