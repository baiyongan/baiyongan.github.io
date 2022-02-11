---
title: Linux 运维实战系列—— wc 字数统计
date: 2020-05-24 10:51:26
cover: https://s2.loli.net/2022/02/03/4UVYz1jmQLP9hAs.png
categories:
	- Linux
	- Fundation
tags:
	- 运维
	- 命令
---

## 命令小结

wc 命令，全称 word count，功能有限，主要是计算一个文件中的字数，单词数和字节数。

直接执行 wc 命令 ，输出信息 依此是 `行数 词数 字节数 文件名`

<!--more-->

## 实战经验

### 实验素材

准备文件如下，使用 UTF-8 编码

可见，第一行12个英文半角字符，“hello world”11个字符，加上行尾符$；

第二行 6个字符，"你好 世界"5个字符，加上行尾符 $。 

```shell
[baiyongan@bya wc_test]$ cat wc_test.txt 
hello world
你好 世界
[baiyongan@bya wc_test]$ file wc_test.txt 
wc_test.txt: UTF-8 Unicode text
[baiyongan@bya wc_test]$ sed -n l wc_test.txt 
hello world$
\344\275\240\345\245\275 \344\270\226\347\225\214$
[baiyongan@bya wc_test]$ 


[baiyongan@bya wc_test]$ wc -c wc_test.txt 
26 wc_test.txt
[baiyongan@bya wc_test]$ wc -m wc_test.txt 
18 wc_test.txt
[baiyongan@bya wc_test]$ wc -l wc_test.txt 
2 wc_test.txt
[baiyongan@bya wc_test]$ wc -w wc_test.txt 
4 wc_test.txt
[baiyongan@bya wc_test]$ wc  wc_test.txt 
 2  4 26 wc_test.txt
[baiyongan@bya wc_test]$ 

```



### 基本用法

> -  字节数统计
>
>   -c, --bytes
>           print the byte counts
>
> - 字符数统计
>
>    -m, --chars
>           print the character counts
>
> - 行数统计
>
>    -l, --lines
>           print the newline counts
>
> - 词数统计
>
>    -w, --words
>           print the word counts



### 如何找出长度最长的行

-L 选项，会按照字节数来计算，而非字符数或词数，同时，不会将行尾符$计算在内。

>    -L, --max-line-length
>           print the length of the longest line

```shell
[baiyongan@bya wc_test]$ cat new_wc_test.txt # 最后 一行有 15 + 2x2 = 19 个字节
hello world
你好 世界
123451234512345你好
[baiyongan@bya wc_test]$ wc -L new_wc_test.txt 
19 new_wc_test.txt
[baiyongan@bya wc_test]$ 

```



### 制表符的细节

```shell
[baiyongan@bya wc_test]$ cat new_wc_test.txt 
hello	world
[baiyongan@bya wc_test]$ sed -n l new_wc_test.txt 
hello\tworld$
[baiyongan@bya wc_test]$ wc -c new_wc_test.txt # 统计字节
12 new_wc_test.txt
[baiyongan@bya wc_test]$ wc -m new_wc_test.txt # 统计字符
12 new_wc_test.txt
[baiyongan@bya wc_test]$ wc -w new_wc_test.txt # 统计词数
2 new_wc_test.txt
[baiyongan@bya wc_test]$ 
```

使用 -c 时，tab只算一个字符 \\t；

使用 -m 时，视觉上有很多空格，但wc只把它当作一个字符，即制表符；

使用 -w 时，tab和空格没区别，都被当作间隔对待；



## 拓展阅读

