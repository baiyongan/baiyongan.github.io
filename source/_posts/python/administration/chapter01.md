---
title: Chapter 1 Python语言与Linux系统管理 《Python Linux系统管理与自动化运维》
categories:
  - Python
  - DevOps
tags:
  - Roadmap
abbrlink: 48527
date: 2019-09-30 22:21:58
---

## 本书特色

本书介绍了Python语言在Linux系统管理中的应用，包括编写Python脚本管理Linux系统，使用Python编写的自动化工具管理Linux系统，以及使用Python打造专属的管理工具等。

实战类书籍，有**大量实战案例**。

<!--more-->

## 如何阅读本书？

共11章，每一章专注于解决某一类问题，均可单独成册，择需阅读即可。

Chapter1: 为什么学Python？

Chapter2：Python的多个生态工具，解决学习Python中的环境问题。

Chapter3~7：如何用Python编写脚本管理Linux？可提高Python编程技能。

如何构建命令行工具？

如何处理文本问题？

如何进行系统管理？

如何监控Linux系统？

如何处理文档和报告？······

Chapter8~10：多个Python语言开发的工具：网络嗅探工具Scapy、自动化部署Fabric、自动部署工具Ansible，偏重运维操作。简单易用、功能强大、扩展性强，运维工程师的得力助手。

**Chapter11：综合案例**——Python打造MySQL的数据库专家系统，以数据库为载体，介绍了Python中的高级语言特性，和Python中的系统架构。充分理解本章，可以使自身Python水平有较大提升。



## 勘误&资源

**[github-lalor](https://github.com/lalor/python_for_linux_system_administration)**



## Python 语言的流行证明

学习一门新技术，该越流行，对于初学者越友好，容易提升技能，还有求职优势。

**TIOBE 的编程语言排行榜**——使编程语言流行趋势的一个指标，它基于互联网上有经验的工程师、课程和第三方厂商的数量，使用搜索引擎计算而得。

**Google Trend** ：查询Python关键词搜索

**微信搜索指数**：对比关键词



## why Python 开始流行？

1. 简单易学：专注于如何解决问题，而不是编程语言的语法和结构
2. 语法优美：缩进标识代码块，减少大括号，句末分号等视觉杂讯，提高可读性
3. 强大的库：battery included
4. 开发效率高：实现相同功能，Python的代码往往只有C、C++、Java的 1/5~1/3，能够满足互联网快速迭代的需求。
5. 应用领域广泛：Web开发、网络编程、自动化运维、自动化测试、Linux系统管理、数据分析、科学计算、人工智能、机器学习等。**Python介于脚本语言和系统语言之间，所以，我们按照需求，可以将它当成一门脚本语言来编写脚本，也可以当成系统语言来编写服务。**



## Python语言的缺点

1. **执行速度不够快**：不是啥严重问题，一方面，网络或磁盘的延迟会抵消部分Python本身消耗的时间，另一方面，Python 和C特别容易结合，可以分离一部分需要优化速度的应用，将其转换为编译好的扩展，提高整体效率。
2. **Python中的GIL锁限制并发**：Python对多处理器支持不好，GIL，即Python全局解释器锁，Global Interpreter Lock，当Python的默认解释器要执行字节码时，都需要先申请这个锁，也就是说，如果试图通过多线程扩展应用程序，将总是被这个GIL限制。
3. **Python2 和Python3 不兼容**



## Python语言应用场景

**应用场景几乎无限**

Web开发：适合快速迭代，非常适合互联网公司。如Django、Pyramid、Bottle、Tornado、Flask、web2py等。说明其能经受大规模用户的并发访问考验。

用户图形接口（GUI）：标准库tkInter，PyGObject、PyQt、PySide、Kivy、wxPython等。TKinter可轻松在不同平台间使用。

数值计算和科学计算：取代Matlab，成为科研新宠，SciPy、NumPy、Pandas等。

系统管理：OpenStack开源云计算平台即使用Python开发，除此，还有Ansible和Salt等自动化部署工具。

其他：pygame开发游戏，PIL库处理图片，NLTK进行自然语言处理等。



## why Python适合Linux系统管理

1. Python程序语法清晰、简单易懂，相对而言，shell作为基本功，语法复杂、可读性、可维护性差。
2. Python表达能力强：相对shell，有丰富的数据结构等，也可以进行多线程编程，shell办不到。
3. Python可跨平台：Python标准库对操作系统的接口进行了封装，如Python标准库绑定了POSIX以及其他常规操作工具，如环境变量、文件、套接字、管道、进程、多线程、正则、命令行参数、Shell命令启动器、文件名扩展等。相对于shell，有了跨平台的优势。
4. 可方面地与操作系统集成，可以使用标准库对OS地封装，也可以在Python中执行Linux命令，完成任何管理任务。
5. 许多Linux系统管理的开源项目：如psutil监控、IPy的IP地址管理等
6. 许多自动化管理工具：Fabric、Ansible、SaltStack等
7. **Linux系统管理，可以发挥Python优点，避免其缺点**——开发效率高，执行速度要求不高



## Python2 vs Python3

通过Google统计分析

在**https://cloud.google.com/bigquery/querying-data** 中执行下面的语句，查询不同Python版本依赖包的下载数据

**SELECT details.python, count(\*)  as count FROM [the-psf:pypi.downloads20190930] GROUP BY details.python;**

统计中国Python版本使用情况

**SELECT details.python, count(\*)  as count FROM [the-psf:pypi.downloads20190930] where country_code = 'CN' GROUP BY details.python;**

建议：

充分使用\_\___future\_\___  库，可以很好兼容Python2 和Python3 ；

可参考[OpenStack](https://wiki.openstack.org/wiki/Python3)的做法，兼容Python2和Python3，也可用six库同时兼容2和3；

了解在Python3 中，已经弃用的Python2 语法；

版本推荐：Python2 > 2.7    Python3 > 3.4



## 拓展阅读

[TIOBE之2019年8月编程语言排行](https://mp.weixin.qq.com/s?src=11&timestamp=1569855067&ver=1884&signature=JqSmr4FcWkHUOixFmflaJkSN4gTMJePXfLHA9iDDclycxQKhgkIZ84nJLFz3CU-gnvS-EbMtbaLcWUgOFZD4ds5gU55zVm1wRPTQTcns2C32aDN2aoI4qJJlc9Tgu0BW&new=1)

[知乎-像 TIOBE 这样的编程语言排行榜是如何统计出来的？](https://www.zhihu.com/question/20430292)

[官网-TIOBE Programming Community Index Definition](https://www.tiobe.com/tiobe-index/programming-languages-definition/)

 

## 个人学习路线

| 章节            | 要求掌握程度       |
| --------------- | :----------------- |
| chapter1        | 了解               |
| chapter2        | 熟练应用           |
| chapter 3,4,5,7 | 熟练应用           |
| chapter 6       | 学习了解           |
| chapter11       | 重点阅读，争取掌握 |
| chapter8        | 有空再看           |
| chapter9        | 有空再看           |

