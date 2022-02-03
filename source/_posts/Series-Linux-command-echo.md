---
title: Linux 运维实战系列——echo 打印
date: 2020-05-22 22:49:21
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

**echo命令是 linux 中最基础的命令，也是最常用的命令之一，常用于在终端处进行输入输出验证，而且在写shell脚本的时候，也会被经常用到**。

<!--more-->



## 实战经验

### echo显示字符串与变量

显示字符串，直接打印即可，显示变量，用 $引用， 示例如下：

```shell
[baiyongan@bya ~]$ echo 'hello world'
hello world
[baiyongan@bya ~]$ echo "hello world"
hello world
[baiyongan@bya ~]$ echo hello world
hello world
[baiyongan@bya ~]$ str="hello world"
[baiyongan@bya ~]$ echo "$str, good night"
hello world, good night
```

### 用echo -e 显示反斜杠转义

转义字符，是shell中的一些有特殊功能的字符，比如\n代表换行，\t代表制表符等。它统一由反斜线 "\\" 开头，后面跟上一个或几个字符。  

> echo中，要使用转义字符，需要使用 -e 参数，并用双引号将转义字符括起来。
>
> 其中： **-e     enable interpretation of backslash escapes**

```shell
[baiyongan@bya ~]$ echo "hello world"
hello world
[baiyongan@bya ~]$ echo "hello world\n"
hello world\n
[baiyongan@bya ~]$ echo -e "hello world\n" #-e参数，实现了换行
hello world

[baiyongan@bya ~]$ 
```

#### 常用的转义字符列表

- **\b转义相当于按退格键（backspace），但前提是“\b”后面存在字符；**
- **\c不换行输出，在“\c”后面不存在字符的情况下，作用相当于echo -n；**
- **\n换行；**
- **\t 表示插入tab，即制表符；**
- **\f换页，即换行后的新行的开头位置连接着上一行的行尾；**
- **\v 垂直制表符，与\f相同；**
- **\r光标移至行首，但不换行，相当于使用“\r”以后的字符覆盖“\r”之前同等长度的字符，只看这段文字描述的话可能不容易理解，具体效果查看示例。**
- **\\表示插入“\”本身；**

```shell
# \b 的作用：一个"\b"就相当于按一次backspace键
[baiyongan@bya ~]$ echo -e "123\b"
123
[baiyongan@bya ~]$ echo -e "123\b4567"
124567
[baiyongan@bya ~]$ echo -e "123\b\b4567"
14567
[baiyongan@bya ~]$ echo -e "123\b\b\b4567"
4567

# \c 的作用： 如果"\c"后面不存在任何字符时，效果与"echo -n"相同，
# 当"\c"后面仍然存在字符时，"\c"后面的字符将不会被输出。
[baiyongan@bya ~]$ echo -e "123\c"
123[baiyongan@bya ~]$ echo -n "123"
123[baiyongan@bya ~]$ echo -e "123\c456"
123[baiyongan@bya ~]$ 

# \f的作用：换行后的新行的开头位置连接着上一行的行尾
[baiyongan@bya ~]$ echo -e "123\f456"
123
   456
[baiyongan@bya ~]$ echo -e "hello world\f456"
hello world
           456
[baiyongan@bya ~]$ echo -e "hello world\f456\fgoodbye"
hello world
           456
              goodbye
[baiyongan@bya ~]$ 

#\v的作用：同 \f
[baiyongan@bya ~]$ echo -e "123\v456"
123
   456
[baiyongan@bya ~]$ echo -e "hello world\v456"
hello world
           456
[baiyongan@bya ~]$ echo -e "hello world\v456\vgoodbye"
hello world
           456
              goodbye
[baiyongan@bya ~]$ 

#\r的作用：表示使用“\r”后面的字符覆盖“\r”之前的同等长度的字符
[baiyongan@bya ~]$ echo -e "abcdefg\r123"
123defg
[baiyongan@bya ~]$ echo -e "abc\r123"
123
[baiyongan@bya ~]$ echo -e "a\r123"
123
[baiyongan@bya ~]$ echo -e "a\r"
a
[baiyongan@bya ~]$ 

#\\的作用：转义表示\
[baiyongan@bya ~]$ echo -e "abc\\def"
abc\def
[baiyongan@bya ~]$
```



### 关闭echo的自动换行行为

默认情况下，echo会在内容输出后换行，如果要改变这种默认方式，可有两种方法：

用 -n 选项去掉echo末尾的换行符；（ -n     do not output the trailing newline）

用 -e 选项打印出转义字符。

> 开发shell程序的时候，经常需要用户在一些提示语后的同一行，输入一些内容，这时，就可以用到不换行模式。

```shell
[baiyongan@bya ~]$ echo -n "Enter your username:"
Enter your username:[baiyongan@bya ~]$ 
[baiyongan@bya ~]$ echo -e "Enter your username:\c"
Enter your username:[baiyongan@bya ~]$ 
[baiyongan@bya ~]$ 
```



### echo后面的引号区别：单引号 vs 双引号 vs 无引号

> **单引号无视所有的特殊字符，所有字符在它眼里都是普通字符；**
>
> **双引号无视文件通配符，但是对 $，\\，`起作用；**
>
> **不加引号，则会解释所有的特殊字符。**

```shell
[baiyongan@bya linux_practice]$ echo $USER
baiyongan
[baiyongan@bya linux_practice]$ echo $(date)
Fri May 22 23:48:57 CST 2020
[baiyongan@bya linux_practice]$ echo *
demo.sh
[baiyongan@bya linux_practice]$ ls
demo.sh
[baiyongan@bya linux_practice]$ echo '$USER * $(date)'
$USER * $(date)
[baiyongan@bya linux_practice]$ echo "$USER * $(date)"
baiyongan * Fri May 22 23:49:12 CST 2020
[baiyongan@bya linux_practice]$ echo $USER * $(date)
baiyongan demo.sh Fri May 22 23:49:16 CST 2020
[baiyongan@bya linux_practice]$ 
```

#### 使用echo打印双引号 or 单引号

```shell
#打印双引号
[baiyongan@bya linux_practice]$ echo "\"hello wolrd\""
"hello wolrd"
[baiyongan@bya linux_practice]$ echo '"hello world"'
"hello world"
[baiyongan@bya linux_practice]$ 

#打印单引号
[baiyongan@bya linux_practice]$ echo "'hello again'"
'hello again'
[baiyongan@bya linux_practice]$ 
```



### echo 在shell中显示色彩

echo通过转义序列，来为输出添加色彩，语法格式如下：

> **echo  -e "\\033[颜色1；颜色2m 要展示的文字  \\033[0m"**

![echo](/images/echo.png)



| 色彩 | 前景色 | 背景色 |
| :--: | :----: | :----: |
|  黑  |   30   |   40   |
|  红  |   31   |   41   |
|  绿  |   32   |   42   |
|  黄  |   33   |   43   |
|  蓝  |   34   |   44   |
| 洋红 |   35   |   45   |
|  青  |   36   |   46   |
|  白  |   37   |   47   |



### 在脚本中显示色彩

有两种方法：

- 在shell脚本中，**事先定义好"颜色变量"**，然后使用echo -e 调用变量显示颜色；

```shell
#!/bin/bash
#定义颜色变量，\033  \e  \E 都是等价的。
RED='\E[1;31m'
GREEN='\E[1;32m'
YELLOW='\E[1;33m'
BLUE='\E[1;34m'
PINK='\E[1;35m'
RESET='\E[0m'

真正使用时，通过echo -e 调用
echo -e "${RED}Red color${RESET}"
echo -e "${GREEN}Red color${RESET}"
echo -e "${YELLOW}Red color${RESET}"
echo -e "${BLUE}Red color${RESET}"
echo -e "${PINK}Red color${RESET}"

```

- 在shell中，**事先定义好"颜色动作"**，然后直接调用动作来输出变量。(这样可以不用频繁输入echo了。)

```shell
#!/bin/bash
#定义颜色动作，把echo -e 也定义到变量中
SETCOLOR_SUCCESS="echo -en \\E[1;32m"
SETCOLOR_FAILURE="echo -en \\E[1;31m"
SETCOLOR_WARNING="echo -en \\E[1;33m"
SETCOLOR_NORMAL="echo -en \\E[1;39m"

#使用时，直接调用颜色动作即可
$SETCOLOR_SUCCESS && echo SUCCESS
$SETCOLOR_FAILURE && echo FAILURE
$SETCOLOR_WARNING && echo WARNING
$SETCOLOR_NORMAL && echo NORMAL

#测试完之后，可以在终端输入 reset 恢复
```



### 使用tput简单的涂色

UNIX 诞生之初，计算机专家就是用终端来登陆到UNIX主机的，而不同类型的终端，用着不同的命令集，这会导致终端与UNIX之间无法配合。为了解决这个问题，计算机专家将几乎所有类型的终端的命令集，都存储到了一个数据库中，以便实现统一化、标准化的处理和响应。**这个数据库就叫terminfo**。

而tput命令，会利用terminfo中的信息，控制和更改终端，比如控制光标、更改文本属性、控制屏幕，以及文本涂色等等。

> **tput setab：用于设置背景色；（background）**
>
> **tput setaf：用于设置前景色。（foreground）**

| 数  值 | 颜  色 |
| :----: | :----: |
|   0    |   黑   |
|   1    |   红   |
|   2    |   绿   |
|   3    |   黄   |
|   4    |   蓝   |
|   5    |  洋红  |
|   6    |   青   |
|   7    |   白   |

```shell
RED=$(tput setaf 1)
GREEN=$(tput setaf 2)
YELLOW=$(tput setaf 3)
RESET=$(tput sgr0)

echo "${RED}red text ${GREEN}green text ${YELLOW}yellow text${RESET}"
# sgr0 表示颜色重置
```



## 拓展阅读

无