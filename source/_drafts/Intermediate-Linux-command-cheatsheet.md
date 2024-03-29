---
title: Linux 命令的应用场景及常用选项速查系列
date: 2020-05-23 13:48:09
top: 10 
cover: https://s2.loli.net/2022/02/03/4UVYz1jmQLP9hAs.png
categories:
	- Linux
	- cheatsheet
tags:
	- 命令
	- 速查
---

# 前言

《Linux 命令实战经验 & shell脚本总结系列》更多是针对一个个命令的运维经验而言的，都有具体的使用案例。这个系列，命令仍为关注重点，但却是**以专题的形式展开的**。**作为速查指南**，不求面面俱到，也不深究操作系统内部细节，力求**简洁、高效、精华**。

<!--more-->

# 综合应用场景归纳

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

> 应用场景的描述 & 相关命令功能简介
>
> 单个命令工具的常用选项速查：按照一定的格式
>



## 常见应用场景

### 获得帮助

| 工具列表                              | 备注 |
| :------------------------------------ | :--: |
| （man、info、--help、/usr/share/doc） |      |



### 文件基本操作

| 工具列表                                                     |           备注           |
| :----------------------------------------------------------- | :----------------------: |
| [ **(ls、cp、mv、rm、ln)** ](http://bya.cool/2020/06/01/Series-linux-theme-file-operation/) | 2020/6/2  待完善，已备注 |



### 目录操作

| 工具列表                                            | 备注 |
| :-------------------------------------------------- | :--: |
| （cd、pwd、basename、dirname、mkdir、rmdir、rm -r） |      |



### 查看文件

| 工具列表                                   | 备注 |
| :----------------------------------------- | :--: |
| （cat、less、nl、head、tail、strings、od） |      |



### 文件的创建与编辑

| 工具列表             | 备注 |
| :------------------- | :--: |
| （nano、emacs、vim） |      |



### 文件属性

| 工具列表                                                     | 备注 |
| :----------------------------------------------------------- | :--: |
| （stat、wc、du、file、touch、chown、chgrp、chmod、umask、chattr、lsattr） |      |



### 文件的定位

| 工具列表                                      | 备注 |
| :-------------------------------------------- | :--: |
| （find、xargs、locate、which、type、whereis） |      |



###  文件的正文处理

| 工具列表                                                     |        备注        |
| :----------------------------------------------------------- | :----------------: |
| [**（grep、cut、paste、tr、expand、unexpand、sort、uniq、tee、awk、m4）**](http://bya.cool/2020/05/23/Series-Linux-theme-text-processing-of-files/) | 2020/05/23  已完成 |



### 文件的压缩与打包

| 工具列表                                                     | 备注 |
| :----------------------------------------------------------- | :--: |
| （tar、gzip、gunzip、bzip2、bunzip2、bzcat、compress、uncompress、zcat、zip、unzip、munpack、mpack） |      |



### 文件的比较

| 工具列表                    | 备注 |
| :-------------------------- | :--: |
| （diff、comm、cmp、md5sum） |      |



### 处理PDF文件和PostScript文件

| 工具列表                                                    | 备注 |
| :---------------------------------------------------------- | :--: |
| （pdftotext、ps2ascii、pdfseparate、pdftk、pdf2ps、ps2pdf） |      |



### 打印

| 工具列表           | 备注 |
| :----------------- | :--: |
| （lpr、lpq、lprm） |      |



### 拼写检查

| 工具列表                | 备注 |
| :---------------------- | :--: |
| （look、aspell、spell） |      |



### 磁盘和文件系统

| 工具列表                           | 备注 |
| :--------------------------------- | :--: |
| （df、mount、umount、fsck、eject） |      |



### 备份和远程存储

| 工具列表                 | 备注 |
| :----------------------- | :--: |
| （rsync、dd、growisofs） |      |



### 查看进程

| 工具列表                     | 备注 |
| :--------------------------- | :--: |
| （ps、uptime、w、top、free） |      |



### 控制进程

| 工具列表                               | 备注 |
| :------------------------------------- | :--: |
| （kill、timeout、nice、renice、flock） |      |



### 作业调度

| 工具列表                      | 备注 |
| :---------------------------- | :--: |
| （sleep、watch、at、crontab） |      |



### 登陆、注销与关机

| 工具列表                | 备注 |
| :---------------------- | :--: |
| （shutdown、systemctl） |      |



### 用户及其环境变量

| 工具列表                                                    | 备注 |
| :---------------------------------------------------------- | :--: |
| （logname、whoami、id、who、users、finger、last、printenv） |      |



### 用户账户管理

| 工具列表                                          | 备注 |
| :------------------------------------------------ | :--: |
| （useradd、userdel、usermod、passwd、chfn、chsh） |      |



### 成为超级用户

| 工具列表     | 备注 |
| :----------- | :--: |
| （sudo、su） |      |



### 用户组的管理

| 工具列表                                 | 备注 |
| :--------------------------------------- | :--: |
| （groups、groupadd、groupdel、groupmod） |      |



### 主机信息

| 工具列表                                      | 备注 |
| :-------------------------------------------- | :--: |
| （uname、hostname、domainname、ip、ifconfig） |      |



### 主机位置

| 工具列表                          | 备注 |
| :-------------------------------- | :--: |
| （host、whois、ping、traceroute） |      |



### 网络连接

| 工具列表                        | 备注 |
| :------------------------------ | :--: |
| （ssh、scp、sftp、ftp、netcat） |      |



### Email

| 工具列表              | 备注 |
| :-------------------- | :--: |
| （mutt、mail、mailq） |      |



### 网页浏览

| 工具列表       | 备注 |
| :------------- | :--: |
| （lynx、wget） |      |



### 即时通讯

| 工具列表                                         | 备注 |
| :----------------------------------------------- | :--: |
| （write、mesg、tty、sendxmpp、profanity、irssi） |      |



### 屏幕输出

| 工具列表                          | 备注 |
| :-------------------------------- | :--: |
| （echo、printf、yes、seq、clear） |      |



### 复制和粘贴

| 工具列表        | 备注 |
| :-------------- | :--: |
| （xclip、xsel） |      |



### 数学和计算

| 工具列表         | 备注 |
| :--------------- | :--: |
| （expr、bc、dc） |      |



### 日期和时间

| 工具列表              | 备注 |
| :-------------------- | :--: |
| （cal、date、npdate） |      |



### 图像

| 工具列表                               | 备注 |
| :------------------------------------- | :--: |
| （display、convert、mogrify、montage） |      |



### 音频与视频

| 工具列表                                                     | 备注 |
| :----------------------------------------------------------- | :--: |
| （cdparanoia、lame、id3info、id3tag、ogginfo、metaflac、sox、mplayer） |      |



### 安装软件

| 工具列表                         | 备注 |
| :------------------------------- | :--: |
| （dnf、yum、rpm、apt、aptitude） |      |



### shell脚本编程

| 工具列表 | 备注 |
| :------- | :--: |
|          |      |



# 拓展阅读

**《Linux命令速查手册》Daniel J.Barrett·著 韩波·译**



# 备注

专题太多，很多偏门的也用不到，或者有更好的替代方案了，所以，主要还是依据博主的需求、挑着进行阅读。

**如果某专题【备注】部分有时间戳，说明已经总结了，只需要直接点击【工具列表】部分，跳转到相应博文链接即可。**

建议还是要以实际操作为主。

