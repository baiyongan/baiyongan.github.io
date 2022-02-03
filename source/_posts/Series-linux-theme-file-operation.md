---
title: 命令速查系列——文件基本操作
date: 2020-06-01 14:17:18
top:
cover: https://s2.loli.net/2022/02/03/4UVYz1jmQLP9hAs.png
categories:
	- Linux
	- cheatsheet
tags:
	- 速查
---

## 文件基本操作

| 命令工具 | 功能简介                     |
| -------- | ---------------------------- |
| ls       | 列出目录中的文件和目录的属性 |
| cp       | 复制文件                     |
| mv       | 重命名（“移动”）文件         |
| rm       | 删除（“移除”）文件           |
| ln       | 创建文件链接（替代名称）     |

<!--more-->

## ls

> ### ls [*options*] [*files*]

### 常用选项

**最重要的三个： -a、-l、-d**

- -a	列出所有的文件，包括文件名以句点开头的文件

- -l	长列表，包括文件属性。添加-h选项（human-readable的首字母）后，文件大小的显示可增加可读性

**各项含义解释**

- -G	在长列表中，不输出文件的组所有权

- -F	用意义明确的符号修饰文件名称，从而指示文件的类型。
  - 斜杠（`/`）表示目录（或“文件夹”）。
  - 星号（`*`）表示可执行文件。这包括二进制文件（编译代码）以及脚本（具有可执行权限的文本文件）。
  - 符号（`@`）表示符号链接（或“别名”）。
  - 等号（`=`）表示套接字。
  - 在 BSD 上，百分号（`%`）表示 *涂改(whiteout)*（某些文件系统上的文件删除方法）。
  - 在 GNU 上，尖括号（`>`）表示 *门(door)*（Illumos和 Solaris上的进程间通信）。
  - 竖线（`|`）表示 FIFO 管道。 这个选项的一个更简单的版本是 `-p`，它只区分文件和目录。

- -S	澳门找大小对文件排序

- -t	按照最近修改时间对文件进行排序

- -r	反序

- -R	显示目录时，递归显示其内容

- -d	显示目录时，不显示其内容，仅显示目录本身的信息



## cp

> ### cp [*options*] files (*file | directory*)

### 常用选项

- -p	不仅复制文件内容，同时复制文件的权限、时间错，权限够的话，还可以复制其属主和用户组

- -a	递归复制目录的层次结构，保留所有的文件属性和链接

- -r	递归复制目录的层次结构。该选项不保留文件的属性，如权限和时间戳，但会保留符号链接

- -i	交互模式，在覆盖目标文件前会询问

- -f	强制复制，如果目标文件存在，则无条件覆盖



## mv

> ### mv [*options*] *source target*

### 常用选项

- -i	交互模式，在覆盖目标文件之前，进行询问

- -f	强制移动，如果目标文件存在，则无条件覆盖



## rm

> ### rm [*options*]  *files | directories*

### 常用选项

- -i	交互式，在删除每个文件之前，进行询问

- -f 	强制删除，忽略任何错误或警告

- -r	递归删除目录及其内容，慎用，尤其慎用 -rf 



## ln

> ### ln [*options*]  *source target*

### 常用选项

直观的讲，链接就是给同一个文件取多个名称，允许将其同时放到两个（或多个）地方。

- ln -s myfile mysoftlink     符号链接（软链接）：通过路径来引用另一个文件，类似于windows中的快捷方式。

- ln myfile myhardlink	硬链接   只是磁盘上物理文件的第二个名称（它指向同一个inode），删除原始文件，该链接仍旧有效。

- -s	创建一个符号链接

- -i	交互模式，再覆盖目标文件之前，进行询问

- -f	强制链接，如果目标文件存在的话，则无条件覆盖

- -d	创建指向目录的硬链接，（仅限于超级用户）

  
  
  ![ln](/images/ln.png)
  
  注：符号链接，可以指向其他的符号链接，如果要查找出整个链接最终指向的位置，可以使用readlink -f 命令。
  
  ```shell
  [root@bya ln_test]# touch test_file
  [root@bya ln_test]# ln -s test_file test_file_1 #创建符号链接
  [root@bya ln_test]# ln -s test_file_1 test_file_2 # 创建第二个符号链接
  [root@bya ln_test]# ll
  total 0
  -rw-r--r-- 1 root root  0 Jun  2 12:19 test_file
  lrwxrwxrwx 1 root root  9 Jun  2 12:20 test_file_1 -> test_file
  lrwxrwxrwx 1 root root 11 Jun  2 12:20 test_file_2 -> test_file_1
  [root@bya ln_test]# readlink -f test_file_2 
  /home/baiyongan/linux_practice/ln_test/test_file
  
  ```
  
  
  
  

## 备注

其中，ls -l 显示的文件属性细节需要补充，或另辟一文