# 晓空iApp手册Web版

这个是晓空iApp手册的网页版本，基于PHP v7.1.13，您可以使用此源码来为自己搭建一个私有的在线iApp手册
<br>当然，本源码的功能也不仅仅在于此，你拿去改成Java等其他语言的手册或者拿来做个工具箱也是可以的
<br>本源码采用GPL v3协议,您可以在保留版权信息与原站地址以及开源修改过的源码情况下免费使用本源码
<br>如果你需要进行更深一步的修改，请联系我们获取商业授权

# 注意

目前本项目已经不再维护，目前的开发中心主要在空梦框架那边
<br>这个项目写的很烂，如果想用也可以，不过因为处于版权问题，数据不能一起分享出来，所以还是麻烦大家自己翻一下代码按照格式建下数据库吧
<br>Tips:目前本项目已经完成了基本的重构，但是会放在其他的仓库里更新，而且需要空梦框架的前端支持，敬请期待！

## 上手指南

以下指南将帮助你在本地机器上安装和运行该项目，进行开发和测试。关于如何将该项目部署到在线环境，请参考部署小节。

### 安装要求

1.PHP环境为php7.1.13及以上（php低级版本仅在php5.4测试运行正常，其他版本尚未测试）
<br>2.服务器剩余空间至少20MB
<br>3.MYSQL数据库空间剩余至少20MB

### 安装步骤

1.将本项目的master分支克隆并解压在你的服务器根目录
<br>2.使用notepad++打开 /my/php/global.php按照注释修改相关内容并保存
<br>3.导入项目中的sql文件至你的数据库中
<br>4.绑定域名解析，生效后再浏览器中打开http://你的域名/index.php

## DEMO

官方源站 http://web.xksc.rcraft.ml
<br>图片预览 2019.08.16
<br>![图一](http://shp.qpic.cn/collector/3335116152/6c202ef5-a25b-45c3-923a-e94481d67109/0) 
<br>![图二](http://shp.qpic.cn/collector/3335116152/6241eb66-dd7d-4f16-bac8-d6e476f1f55f/0) 
<br>![图三](http://shp.qpic.cn/collector/3335116152/995332b2-5354-4004-80ca-b64f536a670c/0) 
<br>![图四](http://shp.qpic.cn/collector/3335116152/dd16adee-617c-4128-b647-8ae5521f9016/0) 

*由于时间以及更新延迟等关系，您安装的可能和图片以及官网中的样式有所区别*
<br>*此外，为了避免版权问题，内置数据仅提供基本的内容*

## 分流地址

GitHub https://github.com/KJZH001/XiaoKongIappCoursesForWeb
<br>码云 Gitee https://gitee.com/rcraft/XiaoKongIappCoursesForWeb
<br>晓空iApp手册_官方Q群 661246868

## 发布地址以及其他说明

http://blog.rcraft.ml/index.php/2019/08/15/17/34/00/185/


## 测试

如果看到没有报错并且正常输出内容时即为正常的安装完成。

## 部署

和安装步骤相同，但是在部分服务器上可能会出现数据输出为空的情况，这是由于在代码中使用了中文所导致的，请自行修改相关的代码。

## 使用到的框架

MDUI - Web框架
<br>Crypto JS - 使用纯js进行算法的加解密计算

## 贡献者

请阅读**CONTRIBUTING.md** 查阅为该项目做出贡献的开发者。

## 作者

晓空（贴吧@KJZH001）
*您也可以在贡献者名单中参看所有参与该项目的开发者。*

## 版权说明

本源码采用GPL v3协议，您可以在保留版权信息与原站地址以及开源修改过的源码情况下免费使用本源码，
<br>和本源码有关的相关内容，如无特殊说明则一律遵循 知识共享署名-相同方式共享 4.0 国际许可协议 进行许可。
<br>有关GPL v3开源协议的中文说明，请阅读 https://gitee.com/oschina/git-osc/wikis/License 中的GPL v3协议部分
<br>如果您向我们获取商业授权，则您在授权有效期内不受此限制
<br>
<br>此外，除了在本页面中所注明的下载地址以外，其他地方均为盗版
<br>本项目为免费开源项目，严禁盗卖！


## 鸣谢

详情请见 http://blog.rcraft.ml/index.php/about/

