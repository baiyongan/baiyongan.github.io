---
title: 如何阅读 Python 的开源项目？(转载自 董伟明)
date: 2020-05-10 12:07:18
categories:
	- Python
	- Intermediate
	- Experience
tags:
	- 源码
---



## 为什么要阅读开源代码

阅读Python开源项目代码主要有如下三个原因：

-  在工作过程中**遇到一些问题**，Google和 StackOverFlow 等网站找不到解决办法，只能去翻源码。

-  对某些项目或者方向非常**感兴趣**，希望**深入**。

-  学习遇到瓶颈需要**汲取**开源项目的**经验**和用法来做提高。

<!--more-->

## 有目的性地阅读开源项目

**没有目的的阅读开源项目就是耍流氓。**浪费了时间，但是能学到的东西也很少。怎么样根据自身情况去阅读呢？

- **和兴趣以及工作契合。**举个例子，工作中没有机会用到Celery又不是想自己造个轮子，读它的源码做什么？所以要从平时能接触到的那些项目中选取。比如我，我肯定不去看 Django的代码，因为日常工作基本遇不到，遇到了现翻就好了。

-  **一个方向只看一两个典型的**就可以了。比如Web框架，我只看过Bottle和Flask的源码（其实之前也看过Django 的，只是浅尝辄止），而且看Bottle已经是好几年前的事情了。并不是堆的多了更好，有时候反而选择太多会懵。

-  不同技术阶段的选择代码量、复杂度不一样的项目，下面会具体推荐。

-  **清楚自己看代码的目的**。就是你看代码是想了解人家怎么设计、调试BUG、还是只是想学习正确的编程用法呢？其实没有必要细抠每个代码细节，有时候当黑盒看，知道输入输出就可以了。



## 优秀的开源作者

和工作中看别人代码差不多，基本每个人、每个项目、每个团队都有自己写代码的风格，比如变量命名风格、某些语言特性使用方式、代码规范要求、目录风格等，其实开源项目的作者也是一样。**看代码，如看人（团队）**。 

首先介绍下我的喜好（排名分先后）：

- [kenneth reitz](https://link.zhihu.com/?target=https%3A//github.com/kennethreitz)。requests和python-guide作者。他还有一个非常励志的故事，有兴趣的可以看 [谁说程序员不是潜力股？](https://zhuanlan.zhihu.com/p/22332669)

- [mitsuhiko](https://link.zhihu.com/?target=https%3A//github.com/mitsuhiko)。flask、Jinja2、werkzeug和flask-sqlalchemy作者。

- [sigmavirus24](https://link.zhihu.com/?target=https%3A//github.com/sigmavirus24)。flake8、pycodestyle（原pep8）、requests、urllib3等项目的主要贡献者和维护者。

- [ask](https://link.zhihu.com/?target=https%3A//github.com/ask)。Celery及相关依赖的作者。

- [ajdavis](https://link.zhihu.com/?target=https%3A//github.com/ajdavis)。mongo-python-driver（pymongo）、tornado等项目的主要贡献者。

- [bitprophet](https://link.zhihu.com/?target=https%3A//github.com/bitprophet)。fabric、paramiko（Python的ssh库）作者。

前2个是公认的Python领域代码写的最好的、最有创意的工程师。



## 初学者推荐阅读项目

初学者可以先阅读一些代码量比较少的，最好是单文件的项目：

- [GitHub - kennethreitz/pip-pop: Tools for managing requirements files.](https://link.zhihu.com/?target=https%3A//github.com/kennethreitz/pip-pop)
- [GitHub - kennethreitz/envoy: Python Subprocesses for Humans™.](https://link.zhihu.com/?target=https%3A//github.com/kennethreitz/envoy)
- [GitHub - kennethreitz/records: SQL for Humans™](https://link.zhihu.com/?target=https%3A//github.com/kennethreitz/records)
- [GitHub - mitsuhiko/pluginbase: A simple but flexible plugin system for Python.](https://link.zhihu.com/?target=https%3A//github.com/mitsuhiko/pluginbase)
- [GitHub - mitsuhiko/pipsi: pip script installer](https://link.zhihu.com/?target=https%3A//github.com/mitsuhiko/pipsi/)
- [GitHub - mitsuhiko/unp: Unpacks things.](https://link.zhihu.com/?target=https%3A//github.com/mitsuhiko/unp)
- [GitHub - chrisallenlane/cheat](https://link.zhihu.com/?target=https%3A//github.com/chrisallenlane/cheat/)
- [GitHub - jek/blinker: A fast Python in-process signal/event dispatching system.](https://link.zhihu.com/?target=https%3A//github.com/jek/blinker)
- [GitHub - mitsuhiko/platter: A useful helper for wheel deployments.](https://link.zhihu.com/?target=https%3A//github.com/mitsuhiko/platter/)
- [GitHub - kennethreitz/tablib: Python Module for Tabular Datasets in XLS, CSV, JSON, YAML, &c.](https://link.zhihu.com/?target=https%3A//github.com/kennethreitz/tablib)

看代码主要是了解别人写代码的方式，语法实践这些内容。看完之后，你可以针对这些项目能解决的问题自己写个项目，写完之后和上述项目去对比一下，看看哪些方面做的不好。

## 进阶阅读项目

进阶的时候就要阅读一些相对复杂的项目，它们能帮助你提升Python编程技巧：

- [faif/python-patterns](https://link.zhihu.com/?target=https%3A//github.com/faif/python-patterns)。使用Python实现一些设计模式的例子。

- [pallets/werkzeug](https://link.zhihu.com/?target=https%3A//github.com/pallets/werkzeug)。flask的WSGI工具集。其中包含了实现非常好的LocalProxy、cached_property、import_string、find_modules、TypeConversionDict等。

- [bottlepy/bottle](https://link.zhihu.com/?target=https%3A//github.com/bottlepy/bottle)。阅读一个Web框架对Web开发就会有更深刻的理解，flask太大，bottle就4k多行，当然如果你有毅力和兴趣直接看flask是最好了的。

- [msiemens/tinydb](https://link.zhihu.com/?target=https%3A//github.com/msiemens/tinydb)。了解用Python实现数据库。

- [coleifer/peewee](https://link.zhihu.com/?target=https%3A//github.com/coleifer/peewee)。了解ORM的实现。

- [pallets/click](https://link.zhihu.com/?target=https%3A//github.com/pallets/click)。click已经内置于在flask 0.11里，提供命令行功能，值得阅读。

- [mitsuhiko/flask-sqlalchemy](https://link.zhihu.com/?target=https%3A//github.com/mitsuhiko/flask-sqlalchemy)。了解一个flask插件是怎么实现的。

除此之外Web开发者可以阅读一些相关的项目：

- [runscope/httpbin](https://link.zhihu.com/?target=https%3A//github.com/Runscope/httpbin)。使用flask，网站是[httpbin(1): HTTP Client Testing Service](https://link.zhihu.com/?target=http%3A//httpbin.org/)。

- [jahaja/psdash](https://link.zhihu.com/?target=https%3A//github.com/Jahaja/psdash)。使用flask和psutils的获取Linux系统信息的面板应用。

- [pallets/flask-website](https://link.zhihu.com/?target=https%3A//github.com/pallets/flask-website)。 flask官方网站应用。

- [pypa/warehouse](https://link.zhihu.com/?target=https%3A//github.com/pypa/warehouse)。如果你使用pyramid，这个[新版的PYPI网站](https://link.zhihu.com/?target=https%3A//pypi.org/)，可以帮助你理解很多。

当然，2个学习flask重要的资源必须爆一爆：

- [GitHub - realpython/discover-flask: Full Stack Web Development with Flask](https://link.zhihu.com/?target=https%3A//github.com/realpython/discover-flask)。

- [The Flask Mega-Tutorial](https://link.zhihu.com/?target=http%3A//blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world)。 这个就是《Flask Web开发：基于Python的Web应用开发实战》的原始博客。



## 500lines

推荐一个非常厉害的项目 [GitHub - aosabook/500lines: 500 Lines or Less](https://link.zhihu.com/?target=https%3A//github.com/aosabook/500lines), 它里面包含了22个由该领域的专家完成，用不到500行的代码实现一个特定功能的子项目。连Guido van Rossum都亲自来写基于asyncio爬虫了，Nick Coghlan、ajdavis也出场了。更具体的介绍可以看[Python 的练手项目有哪些值得推荐？ - 小小搬运工的回答](https://www.zhihu.com/question/29372574/answer/88624507)。



## **怎么阅读开源项目源码**

我基于个人兴趣和日常开发需要阅读过一些开源项目，我列一些比较通用的经验和感悟：

> **不要畏惧**。

我发现大家都经常会感叹XXX强大，YYY流行，无形中你会把它放在一个不可触及到的地位，感觉它很难，而令自己不敢去挑战它。其实**是人就会产出bug，假如你发现它有问题，就应该抓住机会去验证它。这个过程中，它的神秘感也就消失了，有过这么几次经验你就有信心了。**其次是不要怕你提交的PR被拒绝。这是非常正常的，我有很多PR是被拒绝的，尤其是给标准库提交的Patch，绝大多数都被拒绝了。

> **带着问题去阅读代码**

这也是我认为**最有效的方式**。这会让你在阅读时候有个主线，比较有针对性。

> **断点调试。**

在Python代码中使用 pdb一般不太好使，因为代码复杂的话，这种断点需要你使用多个n跳到对应的位置，我一般都是先抛出异常，然后使用pdb的up/down/n等命令调试。当然在目标位置添加一些print日志或注释部分代码然后直接使用exit()退出也是可以的。

> **善用文档，官网例子**。

阅读一个项目一开始会有点无从下手，那么就先好好这些内容，它们一般都是作者表达这个项目的第一个入口。**quickstart、tutorial等内容中的最小化的例子其实就是最好的阅读入口**，先去看这些引用的模块和调用的对应方法或者函数的对应实现，从下至上去阅读。

> **理解作者的思考方式。**

不同的项目要有不同的思考方式来阅读，不要拧着自己的习惯去阅读，这样会很累，得尝试接受别人的观点，甚至于改变自己。

> **阅读项目的早期版本**。

一些项目随着时间演进已经非常复杂了，读起来有难度，那么你可以回到项目的早期版本上，先去看相对简单地版本，然后设置几个时间点或者版本节点，渐进的来阅读。

> **记忆并绘制项目架构。**

项目就是一堆代码的组合，**除了学习编程技巧，还要了解项目的架构决策**，这对于未来自己写大型项目非常用用。这种理解越补充，你会对它就越来越清晰。

> **参与**。

如果只是看和思考而不参与，其实效果大打折扣。我建议要参与一些issue讨论、向作者提问、提PR添加新的功能、帮助改善文档等等。很多时候你理解的其实和作者是有冲突的，无论是你说服他和被他说服，对自己的成长都是很有帮助的。



## Steps in short

1. 阅读 doc or tutorial
2. 实现 demo examples
3. run 看 log，strace/ltrace 看进程相关调用 
4. 硬读源码，怕忘记各种调用关系，就拿笔在白纸上画流程，复杂的直接上 **yEd**（流程图、数据关系图工具）
5. 关键过程上 pdb **debug**
6. use it，这步最关键，不常用都白搭
7. perhaps 去issue，找需求，看代码，写patch

——总结自知乎经验



## 拓展阅读

[**董伟明 知乎专栏——教你阅读Python开源项目代码**](https://zhuanlan.zhihu.com/p/22275595)

[**github - Requests源码阅读清单**](https://github.com/wangshunping/read_requests)

[**bilibli-手把手教你Python源码的阅读和调试**](https://www.bilibili.com/video/av91303459?fromvsogou=1&bsource=sogou)