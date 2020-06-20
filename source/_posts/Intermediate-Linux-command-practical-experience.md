---
title: Linux 命令实战经验 & shell脚本总结系列
date: 2020-05-22 20:33:00
top: 10
categories:
	- Linux
	- practical
tags:
	- 运维
	- 命令
	- 实战
	- 脚本
---

# 目前的瓶颈与破局 

在刚开始接触实际工作时，linux 的命令工具应用的比较多，日常的应用场景大致熟悉之后，也知道哪些工具常不常用、某个命令能做什么、怎么去查询帮助文档、哪些需要组合起来，才能实现特定功能等等······

但是目前的瓶颈就是，平台应用场景有限，故而经验有限。且更多时候，仅能保证解决问题，却还不能漂亮地、流畅地解决问题。现在打算看一下实战总结类的相关书籍，**汲取下经验**，然后**结合自身实际，做些增补**。

<!--more-->

关于 linux 命令使用的 tricks 应该很多，我对这些个炫技操作没那么苛求。只要当碰见实际问题时，知道用什么来实现，进而能追溯其语法格式，熟练运用常用模式即可。所以我的学习目标是**实战经验为主，总结笔记备忘**，主要参考的书籍是 [**《Linux大棚命令百篇 · 上 (文件和文本篇)》**](https://book.douban.com/subject/26849802/)，以及 [**《Linux 大棚命令百篇 · 下 (网络和系统篇)》**](https://book.douban.com/subject/26849844/)。其作者是百度运维部的工程师，一线经验丰富，其内容特点：**1. 聚焦专题、2. 贴近实战、3. 易于阅读**。

p.s. 该书评价不错，值得一读。linux 也不是我现在主要关注的技术点，隔三岔五睡前看几页，再小小总结一下，水一篇 blog，逐渐做个系列，这种节奏还是比较惬意的😂。不过技术问题是普适的，笔记期间，我也会适当添补一些资料，力求用例精确可复现，希望该笔记系列也能对读者有所帮助~~（如有纰漏之处，还请多多留言指出，谢谢）



# 实战经验的总结&归纳

## 说明

### 测试版本

所有案例都经本地测试通过，linux 测试版本为Centos 7.4

```shell
[baiyongan@bya linux_practice]$ cat /etc/redhat-release 
CentOS Linux release 7.4.1708 (Core) 
[baiyongan@bya linux_practice]$ uname -a
Linux bya 3.10.0-693.el7.x86_64 #1 SMP Tue Aug 22 21:09:27 UTC 2017 x86_64 x86_64 x86_64 GNU/Linux
```

### 基本行文结构

> **命令小结：作为简介，描述命令的功能、使用频度、重要程度、应用场景等。**
>
> **实战经验：一般，是在原书内容之上，结合manual手册、互联网资料的提炼总结。**
>
> **拓展阅读：一些可能的拓展资料**
>
> **备注（或有）：主要是一些针对文章内容的备忘**



## 工具篇

|  工具  | 链接 | 备注 |
| :----: | :--: | :--: |
| vmware |      |      |
| Xshell |      |      |
|  vim   |      |  .   |



## 上 · 文件和文本



### shell 基础及工具篇

|    命令     | 链接 | 备注 |
| :---------: | :--: | :--: |
|  **shell**  |      |      |
|  **chsh**   |      |      |
| **export**  |      |      |
|  **read**   |      |      |
|  **expr**   |      |      |
|  **tmux**   |      |      |
|  **alias**  |      |      |
| **history** |      |      |
|  **xargs**  |      |      |
|  **time**   |      |      |
|  **sleep**  |      |  .   |



### 文件和磁盘篇

|   命令    | 链接 | 备注 |
| :-------: | :--: | :--: |
| **file**  |      |      |
|  **ln**   |      |      |
| **find**  |      |      |
|  **du**   |      |      |
| **gzip**  |      |      |
| **bzip2** |      |      |
|  **zip**  |      |      |
|  **dd**   |      |  .   |



### 文本处理篇

|          命令          |                             链接                             |   备注    |
| :--------------------: | :----------------------------------------------------------: | :-------: |
|        **echo**        | [linux运维实战系列— echo 打印](http://bya.cool/2020/05/22/Series-Linux-command-echo/) | 2020/5/22 |
| **grep、egrep、fgrep** | [**Linux 运维实战系列——文本处理三剑客之一 grep**](http://bya.cool/2020/05/23/Series-Linux-command-grep-egrep-fgrep/) | 2020/5/23 |
|        **sed**         | [**Linux 运维实战系列——文本处理三剑客之一 sed**](http://bya.cool/2020/05/27/Series-Linux-command-sed/) | 2020/5/27 |
|        **awk**         | [**Linux 运维实战系列——文本处理三剑客之一 awk**](http://bya.cool/2020/05/30/Series-Linux-command-awk/) | 2020/5/30 |
|        **cut**         | [Linux 运维实战系列——cut 剪切](http://bya.cool/2020/05/24/Series-Linux-command-cut/) | 2020/5/24 |
|         **wc**         | [Linux 运维实战系列—— wc 字数统计](http://bya.cool/2020/05/24/Series-Linux-command-wc/) | 2020/5/24 |
|       **split**        | [Linux 运维实战系列—— split 拆分](http://bya.cool/2020/05/24/Series-Linux-command-split/) | 2020/5/24 |
|       **paste**        | [Linux 运维实战系列——paste 粘贴](http://bya.cool/2020/05/24/Series-Linux-command-paste/) | 2020/5/24 |
|        **sort**        | [Linux运维实战之—sort](http://bya.cool/2020/05/23/Series-Linux-command-sort/) | 2020/5/23 |
|       **vi/vim**       |                                                              |     .     |



## 下 · 网络和系统



### 网络篇

|            命令            | 链接 | 备注 |
| :------------------------: | :--: | :--: |
|          **ping**          |      |      |
| **DNS相关(nslookup、dig)** |      |      |
|        **iproute2**        |      |      |
|        **tcpdump**         |      |      |
|           **nc**           |      |      |
|      **ssh-copy-id**       |      |      |
|         **rsync**          |      |      |
|          **wget**          |      |  .   |



### 进程和性能篇

|    命令    | 链接 | 备注 |
| :--------: | :--: | :--: |
| **uptime** |      |      |
|  **free**  |      |      |
| **vmstat** |      |      |
| **mpstat** |      |      |
|  **top**   |      |      |
| **iostat** |      |      |
| **pidof**  |      |      |
|  **sar**   |      |      |
|  **lsof**  |      |      |
| **fuser**  |      |      |
|   **ps**   |      |      |
|  **kill**  |      |      |
|  **trap**  |      |      |
| **nohup**  |      |  .   |



### 系统管理篇

|     命令      | 链接 | 备注 |
| :-----------: | :--: | :--: |
|   **uname**   |      |      |
|  **whoami**   |      |      |
|  **service**  |      |      |
| **chkconfig** |      |      |
| **dmidecode** |      |      |
|   **lsmod**   |      |      |
|  **chroot**   |      |  .   |



### 增补-其他实用工具篇

|       命令       | 链接 | 备注 |
| :--------------: | :--: | :--: |
| **bash背景知识** |      |      |
|    **screen**    |      |      |
|    **fg、bg**    |      |  .   |



### shell脚本篇

| 场景 | 链接 | 备注 |
| :--: | :--: | :--: |
|      |      |  .   |



# 拓展阅读

 [**《Linux大棚命令百篇 · 上 (文件和文本篇)》**](https://book.douban.com/subject/26849802/)

[**《Linux 大棚命令百篇 · 下 (网络和系统篇)》**](https://book.douban.com/subject/26849844/)



# 备注

~~文本处理相关~~

~~sed~~ 、~~awk~~、~~grep~~

find、lsof、fuser、sar

网络相关

