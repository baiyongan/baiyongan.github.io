---
title: Linux 运维实战系列——文本处理三剑客之一 sed
date: 2020-05-27 14:39:37
top:
cover: https://s2.loli.net/2022/02/03/4UVYz1jmQLP9hAs.png
categories:
	- Linux
	- Fundation
tags:
	- 运维
	- 命令
---

## 命令小结

sed 是 stream editor的简写，中文称之为“流编辑器”。

sed命令是一个面向行处理的工具，以“行”为处理单位，针对每一行进行处理，处理后的结果默认输出道标准输出（STDOUT）。

基本格式为 `sed command file`

command部分：指针对每行的内容所要进行的处理，为该命令的精髓所在，共分为两块知识：一块是范围设定，一块是动作处理。

file部分：指要处理的文件，如果忽略file参数，则sed会把标准输入作为处理对象

<!--more-->

## 实战经验

### sed 的工作原理

sed 命令每次处理时，会把要处理的行存储到缓冲区间，接着用sed命令处理缓冲区中的内容，处理完成之后，把缓冲区的内容送往屏幕。接着处理下一行，不断重复，直至文件末尾。这个缓冲区称为 “模式空间”（pattern space）。

工作原理详解见 文章： [**《Linux 公社：Linux基础知识：sed命令》**](https://www.linuxidc.com/Linux/2017-09/146906.htm)

### sed实现cut命令的效果

想实现 cut -d ： -f /etc/passwd 的效果，使用sed 如何操作？主要用到了 sed 's/XXX/YYY/' 这个用法。

```shell
[baiyongan@bya sed_test]$ head -n 5 /etc/passwd 
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
[baiyongan@bya sed_test]$ head -n 5 /etc/passwd | cut -d : -f 1 
root
bin
daemon
adm
lp
[baiyongan@bya sed_test]$ head -n 5 /etc/passwd | sed 's/:.*$//'
root
bin
daemon
adm
lp
[baiyongan@bya sed_test]$ 

```



### sed的常用选项

#### -n 选项，只显示被匹配的行      

>  -n, --quiet, --silent
>
> ​          suppress automatic printing of pattern space

```shell
[baiyongan@bya sed_test]$ cat roc.txt 
1
2
3
4
5
[baiyongan@bya sed_test]$ sed '/4/p' roc.txt 
1
2
3
4
4
5
[baiyongan@bya sed_test]$ sed -n '/4/p' roc.txt 
4
[baiyongan@bya sed_test]$ 
```

### command部分详解

command 有两部分知识：一块是范围设定，一块是动作处理。

范围设定：

- 指定行数：比如 '3,5' 表示第3，4，5 行， 而 `'5，$'` 表示第5至文件最后一行。
- 模式匹配：比如`/^[^dD]/` 表示匹配行首不以d 或者 D 开头的行。 

动作处理部分：提供丰富的动作以供选择，几种常见的有：

- d：删除行

> d      Delete pattern space.  Start next cycle.

- p：打印行

> ​    p      Print the current pattern space.

- r：读取指定文件的内容

>    r filename
>               Append text read from filename.

- w：写入指定文件

>    w filename
>           Write the current pattern space to filename.

- a：在下面插入新行新内容

>    a \
>
>    text   Append text, which has each embedded newline preceded by a backslash.

### 几个案例

#### 显示指定行区间的内容

例如，显示/etc/passwd文件第10 ~20 行的内容。

```shell
[baiyongan@bya sed_test]$ sed -n '10,20p' /etc/passwd
operator:x:11:0:operator:/root:/sbin/nologin
games:x:12:100:games:/usr/games:/sbin/nologin
ftp:x:14:50:FTP User:/var/ftp:/sbin/nologin
nobody:x:99:99:Nobody:/:/sbin/nologin
systemd-network:x:192:192:systemd Network Management:/:/sbin/nologin
dbus:x:81:81:System message bus:/:/sbin/nologin
polkitd:x:999:998:User for polkitd:/:/sbin/nologin
abrt:x:173:173::/etc/abrt:/sbin/nologin
libstoragemgmt:x:998:996:daemon account for libstoragemgmt:/var/run/lsm:/sbin/nologin
rpc:x:32:32:Rpcbind Daemon:/var/lib/rpcbind:/sbin/nologin
colord:x:997:995:User for colord:/var/lib/colord:/sbin/nologin
[baiyongan@bya sed_test]$ 

```



#### 匹配并替换

将所有以d或者D开头的行里面的所有小写x 字符，变为 大写 X字符：

```shell
sed '/^[dD]/s/x/X/g'  test
```

#### 删除每行最后的两个字符

```shell
sed 's/..$//' test
```

#### 删除每行的前两个字符

```shell
sed 's/..//' test
```



### & 符号拼接

>    **s/regexp/replacement/**          
>
> ​		  Attempt to match regexp against the pattern space.  If successful, replace that portion
> ​          matched with replacement.  The replacement may contain the special character & to refer
> ​          to  that portion of the pattern space which matched, and the special escapes \1 through
> ​          \9 to refer to the corresponding matching sub-expressions in the regexp.

```shell
[baiyongan@bya sed_test]$ cat mysed.txt 
Beijing
London
[baiyongan@bya sed_test]$ sed 's/Bei/&2008/' mysed.txt 
Bei2008jing
London
[baiyongan@bya sed_test]$ 

```

### () 小括号 sed的预存储技术

命令中，被“（”，“）” 括起来的内容，会被以此暂存起来，存储到\\1, \\2, 里面。这样，就可以使用 \\N 来调用这些预存储的内容了。

如下，只在每行的第一个和最后一个Beijing 后面加上 2008 字符串。 

```shell
[baiyongan@bya sed_test]$ cat mysed.txt 
Beijing Beijing Beijing Beijing
London London London London
[baiyongan@bya sed_test]$ sed "s/\(Beijing\)\(.*\)\(Beijing\)/\12008\2\32008/" mysed.txt 
Beijing2008 Beijing Beijing Beijing2008
London London London London
[baiyongan@bya sed_test]$ 

```



### 更聪明的定位行范围

匹配 2005 ~2007 之间的行内容， 如下，只能匹配第一个2007，并没有匹配到第二个2007。

```shell
[baiyongan@bya sed_test]$ cat mysed.txt 
Beijing 2003
Beijing 2004
Beijing 2005
Beijing 2006
Beijing 2007
Beijing 2008
Beijing 2007
Beijing 2009
[baiyongan@bya sed_test]$ sed -n '/2005/,/2007/p' mysed.txt 
Beijing 2005
Beijing 2006
Beijing 2007
[baiyongan@bya sed_test]$ 
```



### 用 -e 选项设置多个 command

>    -e script, --expression=script
>
> ​      add the script to the commands to be executed

例如：

```shell
[baiyongan@bya sed_test]$ sed -n -e '1,2p' -e '4p' mysed.txt 
Beijing 2003
Beijing 2004
Beijing 2006
[baiyongan@bya sed_test]$ 
```

####  -e 选项 的执行顺序是按照从左至右依此进行的

如下所示：

```shell
[baiyongan@bya sed_test]$ cat mysed.txt 
Beijing 2003
Beijing 2004
Beijing 2005
Beijing 2006
Beijing 2007
Beijing 2008
Beijing 2007
Beijing 2009
[baiyongan@bya sed_test]$ sed -e 's/Beijing/London/g' -e '/Beijing/d' mysed.txt 
London 2003
London 2004
London 2005
London 2006
London 2007
London 2008
London 2007
London 2009
[baiyongan@bya sed_test]$ sed -e '/Beijing/d' -e 's/Beijing/London/g' mysed.txt 
[baiyongan@bya sed_test]$ 

```



### 用 -f 选项 设定 command 文件

>    -f script-file, --file=script-file
>
> ​      add the contents of script-file to the commands to be executed

```shell
[baiyongan@bya sed_test]$ cat callsed 
/2004/,/2006/p
[baiyongan@bya sed_test]$ sed -n -f callsed mysed.txt 
Beijing 2004
Beijing 2005
Beijing 2006
[baiyongan@bya sed_test]$ 

```

### 插入和控制功能

#### 使用 `r`动作 ，在处理行后面插入内容

>    r filename
>           Append text read from filename.

```shell
[baiyongan@bya sed_test]$ echo "===China===" > ins.txt
[baiyongan@bya sed_test]$ cat ins.txt 
===China===
[baiyongan@bya sed_test]$ sed '/2005/r ins.txt' mysed.txt 
Beijing 2003
Beijing 2004
Beijing 2005
===China===
Beijing 2006
Beijing 2007
Beijing 2008
Beijing 2007
Beijing 2009
[baiyongan@bya sed_test]$ 

```

#### 使用 `a \`动作， 在匹配行后面加上要插入的内容。

>    a \
>
>    text   Append text, which has each embedded newline preceded by a backslash.

```shell
[baiyongan@bya sed_test]$ sed '/2004/a\China' mysed.txt 
Beijing 2003
Beijing 2004
China
Beijing 2005
Beijing 2006
Beijing 2007
Beijing 2008
Beijing 2007
Beijing 2009
[baiyongan@bya sed_test]$ 

```

#### 亦可以使用 `i\` 动作，在匹配行的前面加上要插入的内容。

>    i \
>
>    text   Insert text, which has each embedded newline preceded by a backslash.

```shell
[baiyongan@bya sed_test]$ sed '/2004/i\China' mysed.txt 
Beijing 2003
China
Beijing 2004
Beijing 2005
Beijing 2006
Beijing 2007
Beijing 2008
Beijing 2007
Beijing 2009
[baiyongan@bya sed_test]$ 

```



#### `y`动作 

>    y/source/dest/
>           Transliterate  the characters in the pattern space which appear in source to the corre‐
>           sponding character in dest.

```shell
[baiyongan@bya sed_test]$ cat mysed.txt 
Beijing 2003
Beijing 2004
Beijing 2005
Beijing 2006
Beijing 2007
Beijing 2008
Beijing 2007
Beijing 2009
[baiyongan@bya sed_test]$ sed 'y/ei/ie/' mysed.txt 
Biejeng 2003
Biejeng 2004
Biejeng 2005
Biejeng 2006
Biejeng 2007
Biejeng 2008
Biejeng 2007
Biejeng 2009
[baiyongan@bya sed_test]$ 
```



#### y/// 和 s/// 的区别？

y的语法格式是 y/source/dest/ ，表示将source 中的字符对位替换为dest中的字符。

s的语法格式是 s/regexp/replacement/，表示通过正则匹配到的内容替换为 replacement部分。

y只是简单的逐字替换，s则支持 & 符号和预存处等特性。

注意，如果 source 部分出现了重复的字符，则只有第一次出现的对位替换，会产生效果，后面的并不会起作用。

```shell
[baiyongan@bya sed_test]$ cat mysed.txt 
Beijing 2003
Beijing 2004
Beijing 2005
Beijing 2006
Beijing 2007
Beijing 2008
Beijing 2007
Beijing 2009
[baiyongan@bya sed_test]$ sed 'y/iji/iba/' mysed.txt 
Beibing 2003
Beibing 2004
Beibing 2005
Beibing 2006
Beibing 2007
Beibing 2008
Beibing 2007
Beibing 2009
[baiyongan@bya sed_test]$ 

```



#### 通过 `n`动作控制行的下移

隔行处理 ，比如只需对偶数行进行某个替换

```shell
[baiyongan@bya sed_test]$ cat mysed.txt 
Beijing 2003
Beijing 2004
Beijing 2005
Beijing 2006
Beijing 2007
Beijing 2008
Beijing 2007
Beijing 2009
[baiyongan@bya sed_test]$ sed '/200/{n;y/eijing/EIJING/;}' mysed.txt 
Beijing 2003
BEIJING 2004
Beijing 2005
BEIJING 2006
Beijing 2007
BEIJING 2008
Beijing 2007
BEIJING 2009
[baiyongan@bya sed_test]$ 

```

n的真实作用，是将下一行内容放在处理缓存中，这样，就让当前这一行躲避开了替换动作。



### 将指定行写入到特定文件中

`w`动作，将匹配到的内容写入到另一个文件中，用来实现内容的筛选与保存

>    w filename
>           Write the current pattern space to filename.

```shell
[baiyongan@bya sed_test]$ 
[baiyongan@bya sed_test]$ sed '/200[4-6]/w new.txt' mysed.txt 
Beijing 2003
Beijing 2004
Beijing 2005
Beijing 2006
Beijing 2007
Beijing 2008
Beijing 2007
Beijing 2009
[baiyongan@bya sed_test]$ cat new.txt 
Beijing 2004
Beijing 2005
Beijing 2006
[baiyongan@bya sed_test]$ 

```



## 拓展阅读

[**CSDN-Linux三剑客之sed命令详解及相关实例**](https://blog.csdn.net/bbwangj/article/details/78620859)

[**《Linux 公社：Linux基础知识：sed命令》**](https://www.linuxidc.com/Linux/2017-09/146906.htm)

