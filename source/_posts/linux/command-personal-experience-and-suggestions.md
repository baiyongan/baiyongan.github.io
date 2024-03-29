---
title: Linux 命令掌握的阶段性总结
sticky: 10
cover: 'https://s2.loli.net/2022/02/03/4UVYz1jmQLP9hAs.png'
categories:
  - Linux
  - Intermediate
tags:
  - Echarts
  - commamds
  - 反思
abbrlink: 10184
date: 2019-03-28 21:35:24
---

## 命令类型概览

<div id="command1" style="width: 1000px; height: 800px;"></div>
<script type="text/javascript" src="/Echarts_js/echarts.js"></script>
<script type="text/javascript" src="/Echarts_js/linux_total_command_list.js"></script>
## 个人学习经验梳理

### **免责声明**

就我的Linux 操作技术而言，自我客观地评价，目前应该算是在应用层级上的中上游水平。所以，我的所有经验，肯定囿于目前的能力与视野，不过先写下来也无妨，日后好进行修正与精进。简言之，这些仅仅是个人的使用经验与学习习惯的总结，更多的是以linux 命令工具的学习掌握为例，反思我个人的学习模式。因为我发现工具、技能的应用范围必然有限，但背后的学习模式是基本普适的，并可以迁移至其他领域，且得到不断优化提高的。

<!--more-->



### 学习的基本流程：调研—实践—总结

**资料的搜集与筛选：**信息搜集整理能力

目前，只要掌握基本的网络搜索功能，想要获得一项技能的学习资料，是轻而易举的，而且还能得到海量的学习资源。但是其中存在一些典型的思维误区，以为信息就是知识，储备即能掌握，这是非常自欺欺人的。所以，既要有基本的检索技能，也要能够客观判断自身能力水平，并依此筛选适合目前能力水平的资料。

**学习计划的制订与执行：**规划力与执行力

网上以及现实工作交流中，经验丰富的工程师，会提供一些他们认为切实有效的学习建议与学习路线，这时候，就可以结合自身的需求与兴趣，制定大致的学习计划，并贯彻执行。因为每个人的具体情况不一样，所以，学习计划应该是根据自身期望（要学什么，掌握到什么水平）与学习习惯制定并执行的。

**实践中的反馈与总结：**客观理性以及自省反思能力

投入到实际的运用中去，从中暴露出方方面面的隐性问题，并依此得到最切实中肯的反馈，使得自身技术能力迅速得到良性提升。这就既要dive into it，figure it out，也要能从全局角度看待问题，把握进度与方向。

所以，简而言之，这套流程还是学生时期以来，最简单的预习—学习—复习流程，只不过是针对陌生领域，变成了调研—掌握—总结的模式。



### 技能晋级的模式：基础-进阶-高级

与上面学习流程对应的，是由浅入深的学习模式。不同阶段，对于技能的要求程度（掌握程度和熟练程度）是不一样的。

**基础阶段：有的放矢，80/20原则**

掌握最常用，最高频的用法即可，懂得基础的知识点与概念，熟练程度为中等，掌握程度为中等，心中有个大致知识框架，并了解具体的应用场景。

**进阶阶段：术业有专攻**，**选择 > 努力**

吾生也有涯，而学也无涯，以有涯随无涯，则殆已。只要大致明白具体的应用有哪些，再结合岗位要求和自身的兴趣需求，朝着想要努力的方向，主动投入资源（包括时间、精力、金钱），必然能得到技术的精进。

**高级阶段：游刃有余，熟能生巧**

通过解决实际问题，与项目经验的积累，这时候，能够进一步精进技术细节等，形成自己特有的风格，技术的熟练度和掌握度得到进一步强化，以致熟能生巧，从心所欲。就像专业网球选手一样，虽然最开始学的都是标准教材一样的动作，但是经过基础训练+实际比赛之后，最终，每个人都会形成自己的风格习惯，whatever，这才是diversity的魅力所在。虽然可能风格迥异，但此时都已然不惑于工具的使用，能更客观地鉴别评判其优劣，知道能够优雅操作更好，不过切实有效的才是最好的。而且作为技能高手，必然有其相似之处——熟练，精准，深刻，灵活，客观，全局，远瞻等等（自忖还没到~~瞎琢磨的）。



### 相应的心态转变

为了避免从入门到放弃这种尴尬局面（其实**快速试错**是**很有必要**的），这其中就要求前期搜集与宏观大致规划，以及中期坚决执行与灵活调整，后期及时反馈与修正的能力。经历过上述过程以后，心态会随之慢慢变化，大致是从一个萌新菜鸡，到中级进阶者，再到高级引导者级别的转变，个中滋味，每个有一技之长的人，大都能有切身体会（约略像王国维的为学三境界？）。此时，回想起曾经跨专业找工作时，迷茫又自卑的我，受一个科大师兄面试官所点拨的一样：**不管你干什么，干好就行**。的确如此，只要能把事情做好，就会体验到正确的心态及行事逻辑，然后自然而然，在习惯的驱使下，导致良性的正反馈循环。毕竟，也不过就是一项项技能而已，天赋高低，可能会决定一个人的上限，但努力与否，则决定了一个人的下限。



### 具体的学习技巧与习惯

针对Linux 命令行工具的掌握而言，因为它的使用场景是Linux系统下的操作与管理，所以，是以实践性质为主。下面则是我的一些使用习惯与思考，其中一些点，譬如说交流沟通等，我自己有些做的不足之处，但是先记录下来，待以后再来审视（是的，道理都懂，但还是过不好这一生）：

**养成良性的习惯：**

命令行操作 & 英文工作环境 & 官方文档 & 优质参考书 or 教学视频

慢慢摆脱之前在 windows下的鼠标操作，查询基础命令用法时，尽量第一选择是阅读官方manual，其次是优秀的搜索引擎如 google 与专业论坛等，习惯英文原文资料的阅读。浸淫其中，才能逐渐建立新的习惯。同时，follow the **fitful** mentor，无论是视频学习还是书本阅读，选择权威，口碑好的，适合自己的，大概率总是没错，不贪多，但求精。

**选择合适的工具：**

工欲善其事，必先利其器，一个合适称手的工具，能够让学习事半功倍。

建议个人版 Ubuntu，企业版 CentOS，虚拟机安装VMWare，命令行客户端 Xshell，文本编辑器VIM，或Sublime。一开始就定好一个业界普遍使用的工具，把它的**快捷键，常用功能，高级功能**等掌握好，能减少很多不必要的时间浪费。

**最少必要知识的掌握：**

学中文汉字时，学童启蒙阶段，除了基本的拼音读法和常用汉字等，接着要学习查阅字典的方法。这样，即使碰见一个生僻字，只要会查阅字典的部首索引，或者猜测读音，也能找到并认识它。很显然，不需要先背下整个汉语词典，才去组词造句，构思行文，只要掌握了查阅字典的方式即可。而**Linux命令的最少必要知识，则是——命令的模式pattern+常用cases，manual的查阅能力（俗称的面向API文档编程，呵呵) + google/baidu的搜索能力（俗称的面向stack overflow編程，哈哈）**。

**学习中的衡量与取舍：**

一个或者一组命令的常见功能，应用场景，使用频度、难度等，心中有个大概衡量与认识即可。只有在具体的使用中，才能潜移默化的理解。比如，对于ls、cd，mkdir，scp这种高频基础命令，要尽量掌握80%，乃至100%的功能。**原则就是用最小的时间，精力成本，学习掌握并运用到实际需求中。**其实也只有应用的多了，才知道哪些高频使用，哪些是冷僻的。然后就知道有所侧重。

**重要度排序：高频 + 低难度 >= 高频 + 高难度 >低频+低难度 >低频+高难度**

对应的掌握排序：依此则是熟练应用>掌握>基本识记即可。

<div id="command2" style="width: 1200px; height: 900px;"></div>
<script type="text/javascript" src="/Echarts_js/echarts.js"></script>
<script type="text/javascript" src="/Echarts_js/linux_common_command_list.js"></script>
**以问题为导向的实践练习：**

学习掌握工具的目的是为了解决实际工程问题，而不是为了应用该工具。要知君子不器，要使工具为我所用，而不是成为工具的奴隶，也不要把自己当作一个工具来看待，这是其一。其二，一如学习烹饪，并不是拿着一本烹饪大全，背记下食谱步骤，就能一步到位。而是先磕磕绊绊，手忙脚乱地做个简单的菜，熟悉下流程，然后精进掌握厨艺，同样，学习大部分linux命令，更多是problem-solving type，learning by doing，学习完命令的基本pattern和高频用法后，再结合具体的使用场景，相辅相成，得以迅速掌握。

**及时的笔记总结：**

从接触一个新单词到实际应用，其中大致会有5~6遍的识记过程，但是并不可以直接跳到第七第八次就能掌握的（至少目前不能，羡慕《Matrix I》里面Neo的学习模式），谨记日积跬步，功不唐捐，这样才能从日常碎片化的零散学习，逐渐积累沉淀，最终能到框架化的全局掌握。仅就我个人的习惯，建议笔记类使用OneNote，记忆类用Anki（听说是神器，暂时没有用）。

**优质社群的交流与分享：**

独学而无友，如果有一二个经验丰富的指导者，或者优质的交流社区等**（俗称的面向github编程）**，**变被动学习为主动学习**，何乐而不为？分享知识与见解，才能产生有趣的思维碰撞与有效的信息交换。在专业的氛围下，进行交流讨论与学习，这样可以不受限于个人所处的现实环境，因为如果没有明显觉知的话（后知后觉如我），现实环境对于人的影响是潜移默化且十分巨大的，它也会很大程度上促进、抑或限制一个人的思维和行为。

![Cone_of_Learning](/images/Cone_of_Learning.jpg)

**业务层级的深度拓展：**

掌握了基本的命令工具之后，就可以完成一些简单的操作，但是如果要处理稍微复杂的自动化任务的话，则需要能够组合应用，并能够编写shell脚本，并接触业务层级的东西等。在计算机领域，各类企业级工具层出不穷，迭代迅速，很多技术工具由盛转衰，而Linux系统的命令工具相对来说，并不易被淘汰。所以**坚持扎实基本功**，**钻研基本技术**是相对更明智的选择。

**自我驱动学习逻辑的迁移：**

形成一套内在的学习逻辑，就可以进行有效的迁移：

譬如对于类Unix命令如LSF体系命令等的学习，Python 及其标准库的学习，git 的学习等，莫不如此。

以Python的学习为例：

背景了解调研：

其应用场景有哪些，工具优劣，选择一本口碑比较好的入门级别的书 《Learn python the hard way》；

选择合适的工具：

IDE如PyCharm，交互式如IPython，jupyter notebook等。 

最少必要知识：

基本的语法语义，数据结构等，高效的查阅方法**dir() help()**，**google Python xxx keyword**

学习中的取舍：

首先熟练深入掌握一些高频的常用库：os、shutil、sys、glob、re、math、datetime库等，其他的，真正用到了再查就好（有两个行话：STFW 和 RTFM，前已有述，此处不表）。后续进阶则选择学习某个应用领域的库工具：如数据分析领域，numpy、scipy、pandas、matplotlib等。

解决复杂工程问题：

从易到难，从简单到复杂的处理实际问题等，然后获得进一步提升，总结反思，继续精进。

一如《心流》里面所提及的心流体验一样，在此不表。

![flow](/images/flow.jpg)

——补写于 2019/9/13 未完待续

## 拓展阅读

- **《快乐的Linux命令行》**
- **《Linux 鸟哥的私房菜》**·

- [**Linux 命令汇总**](https://mp.weixin.qq.com/s?__biz=MzAxMjE3ODU3MQ==&mid=2650444436&idx=1&sn=8558f6a93cddfdf0bfd8c17acebd11cd&chksm=83bbf770b4cc7e660626b058904986ba7958a68bc9d58a2a3ad33e68f416e3c23153a70190fe&scene=21#wechat_redirect)

- [**github - jlevy/the-art-of-command-line**](https://link.zhihu.com/?target=https%3A//github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md)

- [**知乎专栏 - Linux上，最常用的一批命令解析**](https://zhuanlan.zhihu.com/p/73341354)

- [**看完这篇Linux基本的操作就会了**](https://mp.weixin.qq.com/s?__biz=MzI4Njg5MDA5NA==&mid=2247484231&idx=1&sn=4cf217a4d692a7aba804e5d96186b15b&chksm=ebd74246dca0cb5024de2f1d9f9e2ecb631e49752713c25bbe44f44856e919df5a973049c189&scene=21#wechat_redirect)

- [**「心流」是种怎样的极致生活体验？**](https://www.xinli001.com/info/100406701)

- [**心流，一种最优的幸福体验**](https://www.jianshu.com/p/58ef791b872a)



#   