---
title: Linux 运维实战系列——paste 粘贴
date: 2020-05-24 10:51:40
top:
categories:
	- Linux
	- Fundation
tags:
	- 运维
	- 命令

---

## 命令小结

paste单词意思是粘贴。该命令主要用来将多个文件的内容合并，与cut命令完成的功能刚好相反。就是将几个文件的相应行用拼接间隔符(默认是制表符(Tab)) 连接起来，并输出到标准输出。

<!--more-->

## 实战经验

```shell
[baiyongan@bya paste_test]$ cat p1.txt 
1
2
3
[baiyongan@bya paste_test]$ cat p2.txt 
a
b
c
[baiyongan@bya paste_test]$ paste p1.txt p2.txt 
1	a
2	b
3	c
[baiyongan@bya paste_test]$ paste p1.txt p2.txt | sed -n l # 使用制表符进行分隔
1\ta$
2\tb$
3\tc$
[baiyongan@bya paste_test]$ 
```



### 行数不同的文件如何拼接

```shell
[baiyongan@bya paste_test]$ cat s1.txt 
a
b
c
d
e
[baiyongan@bya paste_test]$ cat s2.txt 
1
2
3
[baiyongan@bya paste_test]$ paste s1.txt s2.txt 
a	1
b	2
c	3
d	
e	
[baiyongan@bya paste_test]$ paste s2.txt s1.txt 
1	a
2	b
3	c
	d
	e
[baiyongan@bya paste_test]$ 
```

拼接的顺序对输出有影响；

也可以拼接多个文件

### 拼接符的替换

-d 选项 可以设定间隔符

>    -d, --delimiters=LIST
>           reuse characters from LIST instead of TABs

```shell
[baiyongan@bya paste_test]$ paste -d '*' p3.txt p1.txt p2.txt 
I*1*a
II*2*b
III*3*c
[baiyongan@bya paste_test]$ 

```



### paste 的 -s 选项

 -s 选项，以每个文件自身作为处理单元，将文件中的所有行，以 -d 选项设定的间隔符拼接成一个大行，并输出到标准输出中。 

>   -s, --serial
>           paste one file at a time instead of in parallel

```shell
[baiyongan@bya paste_test]$ cat p1.txt 
1
2
3
[baiyongan@bya paste_test]$ cat p2.txt 
a
b
c
[baiyongan@bya paste_test]$ cat p3.txt 
I
II
III
[baiyongan@bya paste_test]$ paste -s -d "*" p*
1*2*3
a*b*c
I*II*III
[baiyongan@bya paste_test]$ 
```



## 拓展阅读



