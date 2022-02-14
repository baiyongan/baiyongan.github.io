---
title: Linux 运维实战系列——cut 剪切
cover: 'https://s2.loli.net/2022/02/03/4UVYz1jmQLP9hAs.png'
categories:
  - Linux
  - Fundation
tags:
  - 运维
  - 命令
abbrlink: 11842
date: 2020-05-24 08:55:10
---

## 命令小结

Linux中，cut命令在文件中负责剪切数据，它以每一行为一个处理对象，这种机制和sed命令一样。

<!--more-->

## 实战经验

### cut的定位依据

所谓的定位依据，就是说，应该如何告诉 cut，想要定位到哪一段内容去进行剪切。

cut共接受三类定位方法，其定位依据：

- **按照字节定位，bytes，用-b选项；**

  >    -b, --bytes=LIST
  >           select only these bytes

- **按照字符定位，characters， 用 -c 选项；**

  >    -c, --characters=LIST
  >           select only these characters

- **按照域定位， fileds，用 -f 选项。**

  >    -f, --fields=LIST
  >           select  only  these  fields;  also print any line that contains no delimiter character,
  >           unless the -s option is specified



### 字节定位的技巧

如下所示，若要提取每一行的第3，4，5，8位的字符，可以如下 “-b 3-5，8” 操作，且cut使用了-b选项之后，cut会先把 -b 后面所有的定位数字按照从小到大的顺序排序，然后再依此提取。所以可以随意颠倒数字顺序，而不改变结果。

```shell
[baiyongan@bya cut_test]$ who
baiyongan :0           2020-02-11 20:01 (:0)
baiyongan pts/0        2020-05-23 21:07 (:0)
[baiyongan@bya cut_test]$ who | cut -b 3-5,8
iyoa
iyoa
[baiyongan@bya cut_test]$ 
[baiyongan@bya cut_test]$ who | cut -b 8,3-5
iyoa
iyoa
[baiyongan@bya cut_test]$ 
```



### 有关定位数字的技巧

定位数字的设定，非常灵活，比如可以只限定最大定位数或者最小定位数。

cut 对区间采用的是闭区间，如下所示：

```shell
[baiyongan@bya cut_test]$ who
baiyongan :0           2020-02-11 20:01 (:0)
baiyongan pts/0        2020-05-23 21:07 (:0)
[baiyongan@bya cut_test]$ who | cut -b -3 # -3 表示 第一字节到第三字节
bai
bai
[baiyongan@bya cut_test]$ who | cut -b 3- # 3- 表示第三字节到结尾
iyongan :0           2020-02-11 20:01 (:0)
iyongan pts/0        2020-05-23 21:07 (:0)
[baiyongan@bya cut_test]$ 

```



### 字符定位

-b 只会以字节（8位二进制）来计算，而 -c 则会以字符为单位来提取内容。

 当将 -n 与 -b 结合的时候，则不会讲多字节字符拆开

- >  -n     with -b: don't split multibyte characters

```shell
[baiyongan@bya cut_test]$ cat cut_ch.txt 
星期一
星期二
星期三
星期四

[baiyongan@bya cut_test]$ cut -b 3 cut_ch.txt #用 -b 则会乱码
�
�
�
�

[baiyongan@bya cut_test]$ cut -c 3 cut_ch.txt # 用 -c 显示正常
一
二
三
四

[baiyongan@bya cut_test]$ cat cut_ch.txt | cut -nb 1
星
星
星
星

[baiyongan@bya cut_test]$ 

```



### 按域定位

-b 和 -c 都只能在固定格式的文档中提取信息，而对于非固定格式的文档则束手无策，如 /etc/passwd。

cut的 -d 、-f 选项，则支持 “设置间隔符”，并指定 “提取第几个域”。

>    -d, --delimiter=DELIM
>           use DELIM instead of TAB for field delimiter

如下，用 -d 设置间隔符，用 -f指定域

```shell
[baiyongan@bya cut_test]$ cat /etc/passwd | head -n 5
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
[baiyongan@bya cut_test]$ cat /etc/passwd | head -n 5 | cut -d : -f 1 # 提取用户名
root
bin
daemon
adm
lp
[baiyongan@bya cut_test]$ 
# 设定 -f选项时，也可以用“3-5”， “-2”等形式
[baiyongan@bya cut_test]$ cat /etc/passwd | head -n 5 | cut -d : -f -2
root:x
bin:x
daemon:x
adm:x
lp:x
[baiyongan@bya cut_test]$ 

```



### 如何识别空格和制表符

有时候，文件中出现Tab制表符，是很难察觉的，那么如何区分普通空格和制表符呢？

可以用 sed -n l 来进行查看， 如果是制表符，则会显示\\t, 如果是空格，则原样显示，判断完之后，就可以更准确的去cut了。

```shell
[baiyongan@bya cut_test]$ cat tab_space.txt 
this is tab finish.	
this is serveral space 	     finish.
[baiyongan@bya cut_test]$ sed -n l tab_space.txt # 其中，l是L的小写，不是数字1
this is tab finish.\t$
this is serveral space \t     finish.$
[baiyongan@bya cut_test]$ 

```



### 把间隔符设置为空格或制表符

cut的-d 选项，默认就是以Tab制表符为间隔符，如果想将间隔符设置为空格，则可以用单引号里面有空格来表示：`' '`， 且 -d 后面只能设置一个空格，不能设置多个空格，因为cu只允许 间隔符是一个字符。

```shell
[baiyongan@bya cut_test]$ cat tab_space.txt 
this is tab finish.	
this is serveral space 	     finish.
[baiyongan@bya cut_test]$ cat tab_space.txt | cut -d ' ' -f 1
this
this
[baiyongan@bya cut_test]$ cat tab_space.txt | cut -d '  ' -f 1
cut: the delimiter must be a single character
Try 'cut --help' for more information.
[baiyongan@bya cut_test]$ 

```



### ps 与 cut 结合时，奇怪的重复现象

实际运用中，经常会将ps 命令和 cut 结合使用，但是总会出现重复的行，为什么呢？

```shell
[baiyongan@bya cut_test]$ ps 
   PID TTY          TIME CMD
  4052 pts/0    00:00:00 ps
125335 pts/0    00:00:00 bash
[baiyongan@bya cut_test]$ ps | cut -b3  # 为什么不是 0 4 5 呢？
 
4
4
5
[baiyongan@bya cut_test]$ 

```

解释：ps | cut 组合命令，其实会产生两个进程，即 ps进程和 cut 进程。当ps进程执行时，也会列出cut命令对应的进程的信息，并且将所有进程的信息都通过管道输出给 cut 进程。所以，cut截取之后，就多了一行，之所以会重复上一行的内容，是恰好截取到相同的字符而已。

```shell
[baiyongan@bya cut_test]$ ps 
   PID TTY          TIME CMD
  4176 pts/0    00:00:00 ps
125335 pts/0    00:00:00 bash
[baiyongan@bya cut_test]$ ps | cut -b 1-
   PID TTY          TIME CMD
  4194 pts/0    00:00:00 ps
  4195 pts/0    00:00:00 cut
125335 pts/0    00:00:00 bash
[baiyongan@bya cut_test]$ 
# 用 ps | cat 也可以查看
```



## 拓展阅读