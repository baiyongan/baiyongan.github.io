---
title: Linux 运维实战系列——文本处理三剑客之一 awk
date: 2020-05-30 14:30:02
top:
categories:
	- Linux
	- Fundation
tags:
	- 运维
	- 命令
---

# 命令小结

awk其名称得自于它的创始人 Alfred Aho 、Peter Weinberger 和 Brian Kernighan 姓氏的首个字母。实际上 AWK 拥有自己的语言： AWK 程序设计语言 ， 三位创建者已将它正式定义为“样式扫描和处理语言”。它允许您创建简短的程序，这些程序读取输入文件、为数据排序、处理数据、对输入执行计算以及生成报表，还有很多其他的功能。

作为一个强大的文本分析工具，相对于grep的查找，sed的编辑，awk在其对数据分析并生成报告时，显得尤为强大。**简单来说awk就是把文件逐行的读入，以空格为默认分隔符将每行切片，切开的部分再进行各种分析处理。**数据可以来自标准输入、外部文件，或者其他命令的输出。awk 同时支持正则表达式和用户自定义函数。

**awk是行处理器**: 相比较屏幕处理的优点，在处理庞大文件时不会出现内存溢出或是处理缓慢的问题，通常用来格式化文本信息(ctrl+c/v的，未考证😳)。

<!--more-->

# 实战经验

## 入门

### 指定输出列

awk 处理文件是以记录为单位的，它会一条记录一条记录地遍历文件并进行处理。$0 代表的是一条记录，也就是student.txt 文件中的一整行内容。$1, 和 $3 代表的是第一、三列。

```shell
[baiyongan@bya awk_test]$ cat student.txt 
xiaoqiang	05/99	henan		98	96	97
xiaohong	06/99	shandong	98	99	100	
xiaofang	02/99	guangdong	82	90	89
xiaogang	07/99	beijing		88	86	87
xiaohua		05/99	anhui		90	91	93
[baiyongan@bya awk_test]$ awk '{print $0}' student.txt 
xiaoqiang	05/99	henan		98	96	97
xiaohong	06/99	shandong	98	99	100	
xiaofang	02/99	guangdong	82	90	89
xiaogang	07/99	beijing		88	86	87
xiaohua		05/99	anhui		90	91	93
[baiyongan@bya awk_test]$ awk '{print $1, $3}' student.txt
xiaoqiang henan
xiaohong shandong
xiaofang guangdong
xiaogang beijing
xiaohua anhui
[baiyongan@bya awk_test]$ 
```



### 修饰表头和表尾

两个关键字：

BEGIN：在awk对文件处理之前首先被执行

END：表示在awk对所有文件处理完后才被执行

```shell
[baiyongan@bya awk_test]$ awk 'BEGIN {print "Name    province\n----------------------------"} {print $1, $3} END {print "----------------------------"}' student.txt
Name    province
----------------------------
xiaoqiang henan
xiaohong shandong
xiaofang guangdong
xiaogang beijing
xiaohua anhui
----------------------------
[baiyongan@bya awk_test]$ 
```



### 统计功能

如下：可以用 $4 + $5 + $6 来实现总分的计算

```shell
[baiyongan@bya awk_test]$ cat student.txt 
xiaoqiang	05/99	henan		98	96	97
xiaohong	06/99	shandong	98	99	100	
xiaofang	02/99	guangdong	82	90	89
xiaogang	07/99	beijing		88	86	87
xiaohua		05/99	anhui		90	91	93
[baiyongan@bya awk_test]$ awk 'BEGIN {print "Name    province\n----------------------------"} {print $1, $3, $4+$5+$6} END {print "---------------------------------"}' student.txt
Name    province
----------------------------
xiaoqiang henan 291
xiaohong shandong 297
xiaofang guangdong 261
xiaogang beijing 261
xiaohua anhui 274
---------------------------------
[baiyongan@bya awk_test]$ 
```



### 筛选功能

可以使用类似 $3 ~ /beijing/ 的语法筛选出来来自beijing的学生的信息。

```shell
[baiyongan@bya awk_test]$ awk 'BEGIN {print "Name    province\n----------------------------"} $3 ~ /beijing/ {print $1, $3, $4+$5+$6} END {print "---------------------------------"}' student.txt
Name    province
----------------------------
xiaogang beijing 261
---------------------------------
[baiyongan@bya awk_test]$ 
```



### 语法格式

> **简版：awk 'Pattern {Action}' filename** 

其中：

- Pattern 用来指定判断条件，比如上面例子中的 $3 ~ /beijing/

- {} 中包含的是 awk 的动作，也就是 awk 对记录的操作，比如 $4+$5+$6 或者 print

### 工作原理

- 第一步，awk 读取一条记录（文件中的一行内容）作为输入，并将这条记录赋值给内部变量 $0
- 第二步，记录被分隔符分割成多个字段，每一个字段都存储到指定编号的变量中，从 $1 开始。(awk 的内部变量 FS 用来指定字段的分隔符。默认情况下，为空格，包含制表符和空格符，也可以用 - F 来人为指定分隔符 )
- 第三步，对每一条记录，按 Pattern 进行匹配，匹配成功，则执行对应 Action，匹配失败，则不执行Action。
  - Pattern 和 Action都可选，但是**必须提供其中一个**。没有指定 Pattern，则对所有的输入行都执行 Action 操作。如果没有指定 Action，则会输出匹配行的内容。
  - 如果Action 被指定为 {}， 则表示不做任何动作，也不会输出匹配行的内容。
- 第四步，重复进行上面的 1-3 步直到文件结束。



### 更完整的格式与工作流程

> **详版：awk 'BEGIN{ commands } Pattern { commands } END{ commands }'**

![awk](/images/awk.png)

- 通过关键字 BEGIN 执行 BEGIN 块的内容，即 BEGIN 后花括号 {} 的内容。
- 完成 BEGIN 块的执行，开始执行body块。
- 读入有  换行符分割的记录。
- 将记录按指定的域分隔符划分域，填充域，$0 则表示所有域(即一行内容)，$1 表示第一个域，$n 表示第 n 个域。
- 依次执行各 BODY 块，pattern 部分匹配该行内容成功后，才会执行 awk-commands 的内容。
- 循环读取并执行各行直到文件结束，完成body块执行。
- 开始 END 块执行，END 块可以输出最终结果。
  

### awk 脚本编写

如果需要在Action的部分里写打断的逻辑，建议将器写道一个独立的脚本文件中。

```shell
[baiyongan@bya awk_test]$ cat student.awk 
BEGIN {print "Name  province  total\n-------------------------"}
{print $1, $3, $4+$5+$6}
END {print "-------------------------"}
[baiyongan@bya awk_test]$ cat -n student.awk 
     1	BEGIN {print "Name  province  total\n-------------------------"}
     2	{print $1, $3, $4+$5+$6}
     3	END {print "-------------------------"}
[baiyongan@bya awk_test]$ awk -f student.awk student.txt 
Name  province  total
-------------------------
xiaoqiang henan 291
xiaohong shandong 297
xiaofang guangdong 261
xiaogang beijing 261
xiaohua anhui 274
-------------------------
[baiyongan@bya awk_test]$ 

```

如果要让awk脚本执行得“更像样子”：可以在awk脚本开头加上如下一句话。#! /bin/awk -f

```shell
[baiyongan@bya awk_test]$ sed -i '1i\#! /bin/awk -f' student.awk 
[baiyongan@bya awk_test]$ cat student.awk 
#! /bin/awk -f
BEGIN {print "Name  province  total\n-------------------------"}
{print $1, $3, $4+$5+$6}
END {print "-------------------------"}
[baiyongan@bya awk_test]$ chmod u+x student.awk 
[baiyongan@bya awk_test]$ ./student.awk student.txt 
Name  province  total
-------------------------
xiaoqiang henan 291
xiaohong shandong 297
xiaofang guangdong 261
xiaogang beijing 261
xiaohua anhui 274
-------------------------
[baiyongan@bya awk_test]$ 

```



## 多行操作

### 显示奇数行

NR 表示行数，如下案例，当行数为偶数时，不输出，当行数为奇数时，输出。

> **NR          The total number of input records seen so far.**
>
> **next**      Stop processing the current input record.  The next input record is read
>                 and  processing  starts  over with the first pattern in the AWK program.
>                 If the end of the input data is reached, the END block(s), if  any,  are
>                 executed.

```shell
[baiyongan@bya awk_test]$ cat -n input.txt 
     1	one
     2	two
     3	three
     4	four
     5	five
     6	six
     7	seven
     8	eight
     9	nine
    10	ten
[baiyongan@bya awk_test]$ awk 'NR%2==0 {next} {print NR, $0}' input.txt 
1 one
3 three
5 five
7 seven
9 nine
[baiyongan@bya awk_test]$ 

```



### 固定行数合并

如果将文件中的每三行数据合并为一行，如何操作呢？ 

```shell
[baiyongan@bya awk_test]$ cat -n input.txt 
     1	one
     2	two
     3	three
     4	four
     5	five
     6	six
     7	seven
     8	eight
     9	nine
    10	ten
[baiyongan@bya awk_test]$ awk 'NR%3!=0 {T=(T" "$0); next} {print T, $0; T=""}' input.txt 
 one two three
 four five six
 seven eight nine
[baiyongan@bya awk_test]$
```

解释：

**第一部分：NR%3!=0 {T=(T" "$0); next}**

**第二部分：{print T, $0; T=""}**

T=(T" "$0) 表示将字符型的变量T，空格和变量 $0，三者的值进行连接，然后再赋值给变量T。也就是说，awk 语句每读取一行都会把这行的内容追加到变量T中。

next 的作用很关键，表示不再执行第二部分的语句，而是直接进行下一行的处理，这样就保证awk把每三行一组的内容都存储到了变量T中。

{print T, $0; T=""} 表示输出变量T和$0的内容，并把变量T的内容清空。

注意：最后一行的数据ten没有输出出来，其实时最后一行没有达到 “3个一组”的条件。如果需要，可以再最后增加END操作，进行收尾

```shell
[baiyongan@bya awk_test]$ awk 'NR%3!=0 {T=(T" "$0); next} {print T, $0; T=""} END {print T}' input.txt 
 one two three
 four five six
 seven eight nine
 ten
[baiyongan@bya awk_test]$ 

```

### 不定行数合并

有时候的分组合并场景，并不都是固定行数的合并，不定行数应该怎么办呢？如下，对于不同时间，可以用worktime来分组：

```shell
[baiyongan@bya awk_test]$ awk 'BEGIN {T=""} /worktime/ {print T; T=$0; next} {T=T""$0} END {print T}' input_time.txt 

xiaoming worktime is898788908978
xiaoqiang worktime is90989790
xiaohong worktime is909293
[baiyongan@bya awk_test]$ 

```



### 合并所有的行

合并一个文件的所有行，经常碰到，linux中实现这类操作的方法很多，可以用sed 直接删除文件中的换行符，当然，也可以用awk来实现。

```shell
[baiyongan@bya awk_test]$ cat input.txt 
one
two
three
four
five
six
seven
eight
nine
ten
[baiyongan@bya awk_test]$ awk '{T=T" "$0} END {print T}' input.txt 
 one two three four five six seven eight nine ten
[baiyongan@bya awk_test]$ 

```



## 多文件操作

### 多文件输出

Q：如何将两个文件一起输出呢？

A：直接再命令尾部加上文件名即可

```shell
[baiyongan@bya awk_test]$ awk '{print $0}' input.txt input_time.txt 
one
two
three
four
five
six
seven
eight
nine
ten
xiaoming worktime is
89
87
88
90
89
78
xiaoqiang worktime is
90
98
97
90
xiaohong worktime is
90
92
93
[baiyongan@bya awk_test]$ 

```



### 两手抓两个文件

Q：如果要输出 input.txt 文件中的第一行数据，input_time.txt 的第八行数据以及它们的文件名，应该怎么实现呢？

A：如下所示

- NR 表示已读记录数，无论有几个文件，每读一条记录，值会增加 1；

- FNR 表示当前文件的已读记录数，操作当前文件时，每读一条记录，值会增加 1。但当更换文件后，该变量会重新从零开始。
- 当 NR==FNR时，表示awk正在处理第一个输入文件。当 NR>FNR时，表示正在处理第二个输入文件。
- FILENAME表示当前处理文件的文件名。

> NR          The total number of input records seen so far.
>
> FNR         The input record number in the current input file.
>
> FILENAME    The name of the current input file.  If no files  are  specified  on  the  command
>                        line,  the  value  of  FILENAME is “-”.  However, FILENAME is undefined inside the
>                         BEGIN block (unless set by getline).

```shell
[baiyongan@bya awk_test]$ awk '{print $0}' input.txt input_time.txt 
one
two
three
four
five
six
seven
eight
nine
ten
xiaoming worktime is
89
87
88
90
89
78
xiaoqiang worktime is
90
98
97
90
xiaohong worktime is
90
92
93
[baiyongan@bya awk_test]$ awk 'NR==FNR&&FNR==1 {print FILENAME, $0} NR>FNR&&FNR==8 {print FILENAME, $0}' input.txt input_time.txt 
input.txt one
input_time.txt xiaoqiang worktime is
[baiyongan@bya awk_test]$ 

```



### 多只手抓多个文件

Q：如何区分多个文件呢？

A：针对多个文件，awk里有个专门的环境变量  ARGIND ，用来指定当前正在处理的文件的编号

> ARGIND      The index in ARGV of the current file being processed.

```shell
[baiyongan@bya awk_test]$ cat input.txt input_time.txt input_3.txt 
one
two
three
four
five
six
seven
eight
nine
ten
xiaoming worktime is
89
87
88
90
89
78
xiaoqiang worktime is
90
98
97
90
xiaohong worktime is
90
92
93
file3 line1
file3 line2
file3 line3
file3 line4
[baiyongan@bya awk_test]$ awk 'ARGIND==1&&FNR==1 {print $0} ARGIND==2&&FNR==2 {print $0} ARGIND==3&&FNR==3 {print $0}' input.txt input_time.txt input_3.txt 
one
89
file3 line3
[baiyongan@bya awk_test]$ 

```

除了上述的方法，还可以在文件名上下手，例如：

- FILENAME
- ARGV：命令行参数的数组，同C语言的main（int argc， char \*\*argv）

> ARGV    Array of command line arguments.  The array is indexed from 0 to ARGC - 1.  Dynam‐
>                  ically changing the contents of ARGV can control the files used for data.

```shell
[baiyongan@bya awk_test]$ 
[baiyongan@bya awk_test]$ awk 'FILENAME==ARGV[1]&&FNR==1 {print $0} FILENAME==ARGV[2]&&FNR==2 {print $0} FILENAME==ARGV[3]&&FNR==3 {print $0}' input.txt input_time.txt input_3.txt 
one
89
file3 line3
[baiyongan@bya awk_test]$ 

```



### 合并两个文件

Q: /etc/passwd 中的第二个域是用 x 来代替的，表示账户对应的密码，/etc/shadow 文件中第二个域，则存储着具体的密码信息，如何用密码来替换掉 x 呢？

A：

第一部分：BEGIN {OFS=FS=":"}

第二部分：NR==FNR {a[$1]=$2}

第三部分：NR>FNR {$2=a[$1]; print}

- 第一部分，设定OFS（输出字段分隔符） 和 FS（字段分隔符） 都为 ":"。
- 第二部分，NR==FNR {a[$1]=$2}。其中NR==FNR 表示awk输入的第一个文件。{a[$1]=$2}执行，则awk会把文件的第二个字段，存放到下标为$1（文件的第一个字段的值）的数组a中。
- 第三部分，NR>FNR {$2=a[$1]; print}。其中，NR>FNR表示awk输入的第二个文件。桑awk在处理第二个文件时， {$2=a[$1]; print}，awk会把下标为$1（文件的第一个字段的值）的数组a 中取出内容赋值给 $2 (文件的第一个字段)，最后输出替换后的文件内容。

```shell
[root@bya awk_test]# cat /etc/shadow | head -n 5
root:$6$BzPXls0eBogVmwQz$iCAbjP1CE4ANU35SWcdzo.//3Fm5Bg/MnzKyWEF1rPLTtuMxFwqH2lwbZyCsNAkbAtCQnIUG9MwV98fJ/WOu1.::0:99999:7:::
bin:*:17110:0:99999:7:::
daemon:*:17110:0:99999:7:::
adm:*:17110:0:99999:7:::
lp:*:17110:0:99999:7:::
[root@bya awk_test]# 
[root@bya awk_test]# cat /etc/passwd | head -n 5
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
[root@bya awk_test]# 
[root@bya awk_test]# awk 'BEGIN {OFS=FS=":"} NR==FNR {a[$1]=$2} NR>FNR {$2=a[$1]; print}' /etc/shadow /etc/passwd | head -n 5
root:$6$BzPXls0eBogVmwQz$iCAbjP1CE4ANU35SWcdzo.//3Fm5Bg/MnzKyWEF1rPLTtuMxFwqH2lwbZyCsNAkbAtCQnIUG9MwV98fJ/WOu1.:0:0:root:/root:/bin/bash
bin:*:1:1:bin:/bin:/sbin/nologin
daemon:*:2:2:daemon:/sbin:/sbin/nologin
adm:*:3:4:adm:/var/adm:/sbin/nologin
lp:*:4:7:lp:/var/spool/lpd:/sbin/nologin
[root@bya awk_test]# 

```



### 合并两文件并求和

```shell
[root@bya awk_test]# cat 1.txt 
92 33 44
20 30 45
[root@bya awk_test]# cat 2.txt 
23 45 56
35 56 89
[root@bya awk_test]# awk '{for(i=1;i<=NF;i++) a[i]=$i; getline <"1.txt"; for(i=1;i<=NF;i++) printf a[i]+$i" "; printf "\n"}' 2.txt 
115 78 100 
55 86 134 

```



## 外部调用

实现awk 外部调用的两种方式：

- 通过getline 引用外部数据；
- 通过 system 调用 shell的命令。

### getline操作文件的困惑

>    **getline               Set $0 from next input record; set NF, NR, FNR.**
>
>    getline <file         Set $0 from next record of file; set NF.
>
>    getline var           Set var from next input record; set NR, FNR.
>
>    getline var <file     Set var from next record of file.
>
>    command | getline [var]
>                          Run command piping the output either into $0 or var, as above.
>
>    command |& getline [var]
>                          Run command as a co-process piping the output either into $0 or var, as above.  Co-processes are a gawk extension.  (command can also be a socket.  See the  subsection  Special
>                          File Names, below.)



**当只有 getline时，getline是针对当前打开的文件操作，表示读取当前行的下一行数据，并把读取到的数据赋值给$0，同时更新 NF，NR，FNR。**

因此，

**'{print; getline}'** 输出奇数行

**'{getline; print}'** 输出偶数行

**'{print; getline; print}'**  输出全部行

```shell
[root@bya awk_test]# cat -n test | awk '{print}'
     1	a
     2	b
     3	c
     4	d
[root@bya awk_test]# cat -n test | awk '{getline; print}'
     2	b
     4	d
[root@bya awk_test]# cat -n test | awk '{print; getline}'
     1	a
     3	c
[root@bya awk_test]# cat -n test | awk '{print; getline; print}' 
     1	a
     2	b
     3	c
     4	d
[root@bya awk_test]# 

```

在getline之后，添加变量 b，则有：

```shell
[root@bya awk_test]# cat -n test 
     1	a
     2	b
     3	c
     4	d
[root@bya awk_test]# cat -n test | awk '{print; getline b; print}'
     1	a
     1	a
     3	c
     3	c
[root@bya awk_test]# 

```

- getline 后面跟着变量b，表示获取到的数据不会赋值给$0,而会给变量b；
- 两个print 用来输出 $0,$0的数据没有改变，则输出了重复的字母。

如下，已经不需要解释，就可以正确解读了

```shell
[root@bya awk_test]# cat -n test | awk '{print; getline b; print; print b}'
     1	a
     1	a
     2	b
     3	c
     3	c
     4	d
[root@bya awk_test]# 

```



### getline操作文件的返回值

先看如下案例，while语句表示，当文件test输出一行，文件 1.txt 的内容就要重新输出一遍，但为什么只有第一行是这样的，而其他行，1.txt的内容完全没有输出呢？

```shell
[root@bya awk_test]# cat 1.txt 
92 33 44
20 30 45
[root@bya awk_test]# cat test 
a
b
c
d
[root@bya awk_test]# awk '{print $0; while((getline < "1.txt") > 0) print $0}' test
a
92 33 44
20 30 45
b
c
d
[root@bya awk_test]# 

```

其实，getline的返回值：

- 1：表示正常读取一行数据。
- 0：表示到了文件末尾。
- -1：表示读取遇到错误。

**p.s.**  getline重定向文件时，后面必须跟字符串类型。因此，文件1.txt一定要加上双引号！



### 用system 调用 shell

awk可以直接通过system()调用shell，但是有两点要注意：

- awk 无法直接将脚本中的数据直接输出给shell命令；
- shell 命令的执行结果也无法直接输入到awk脚本中。

```shell
[root@bya awk_test]# awk 'BEGIN { system("ls -l")}'
total 28
-rw-r--r-- 1 root      root       18 May 30 21:22 1.txt
-rw-r--r-- 1 root      root       18 May 30 21:22 2.txt
-rw-rw-r-- 1 baiyongan baiyongan  48 May 30 20:46 input_3.txt
-rw-rw-r-- 1 baiyongan baiyongan 103 May 30 19:17 input_time.txt
-rw-rw-r-- 1 baiyongan baiyongan  49 May 30 16:42 input.txt
-rwxrw-r-- 1 baiyongan baiyongan 145 May 30 15:48 student.awk
-rw-rw-r-- 1 baiyongan baiyongan 165 May 30 14:43 student.txt
[root@bya awk_test]# 

```



## 实战

其实，将awk 与其他命令结合起来，才能体现出awk的强大之处。例如结合下面的网络相关的命令

- **ifconfig**
- **netstat**
- **tcpdump**
- **/proc/net/dev**

### 显示本机的IP

### 统计网卡的流量

### 查看TCP连接状态

### 查找请求数排名前五的IP地址

```shell
[root@bya awk_test]# netstat -anlp | grep 80 | grep tcp | awk '{print $5}' | awk -F : '{print $1}' | sort | uniq -c |sort -nr | head -n 5

```

### 用tcpdump嗅探80端口的访问

tcpdump 是 Linux工程师非常常用的流量分析工具。

### 锁定 time_wait 连接较多的源IP

### 根据端口列进程



## 补充

黑体的部分掌握即可应付80%的场景

**awk的功能**

**命令格式 + 工作原理 + 执行过程**

**常用选项**

**内置变量**

运算

**高级输入输出功能**

**循环结构**

数组

内置函数

字符串函数

时间函数

其他一般函数

# 拓展阅读

[**shell编程之awk命令详解**](https://www.cnblogs.com/quincyhu/p/5884390.html)

[**awk从放弃到入门**](http://www.zsythink.net/archives/tag/awk/)

[**The GNU Awk User’s Guide**](https://www.gnu.org/software/gawk/manual/gawk.html)