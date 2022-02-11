---
title: Chapter4 文本处理 《Python Linux 系统管理与自动化运维》
date: 2019-09-07 00:36:01
categories: 
	- Python
	- DevOps
tags:
	- 文本处理
	- 字符集编码
---



## 4 文本处理

Linux下的文本处理工具有：**grep、awk、sed、wc、tr、cut、cat** 等。

但其**限制**一般有如下

1）在Windows下处理很不方便；

2）对于中文处理支持不友好；

3）大量依赖正则表达式，而RE 的学习曲线比较陡峭。

而python内嵌的字符类型包含大量的文本处理函数，标准库对文本处理提供了很好支持，此外，一些开源项目对Python处理复杂文本提供支持，如模板处理、解析xml和html的标准库和第三方库等。

so， 人生苦短，我用python ~ 

<!--more-->

------

### 4.1 字符串常量

#### 定义字符串

**Python中不区分字符和字符串**，可以使用单引号、双引号来定义字符串。

在编程语言中，使用 \  来定义转义字符，在 URL中，使用%定义转义字符。

除了使用转义符外，还可以使用原始字符串（raw string） ，原始字符串会一直所有转义。

如：

```python
import os
path = r"c:\next"
print(path)
```

**多行字符串**：使用三个引号定义的字符串，起止都是三个单引号或三个双引号。其中，所有的引号、换行符、制表符等特殊字符，都会被认为使普通字符。

Python中，两个相连的字符串会自动组成一个新的字符串。

#### 字符串是不可变的有序集合

Python语言字符串的两大特点：

**1）字符串不可变**，无法直接对其修改。

- （但是可以通过字符运算、切片操作、格式化表达式和字符串调用等创建新字符串，再赋值给最初的变量名）

**2）字符串是字符的有序集合。**

- 可通过下标和切片进行访问。
- 下标每次只能访问一个元素，切片每次可以访问一个范围，可指定切片操作的起点、终点和步长。

Tips：

- 因为每个新的字符串会占用一块独立内存，因此，**操作字符串时，尽量避免产生太多不必要的中间结果。**
- 尽量不要同时制定切片操作的起点、终点和步长，可读性不好。
  - 如 置逆字符串操作，使用**s[: : -1]** 不如 **'  '.join(reversed(s))****



#### 字符串函数

Python中，与字符串处理相关的方法有两大类：

- 一类可用于多种类型的**通用操作**，以内置函数或表达式方式提供；
- Python中，字符串、列表和元组具有一些共性，即都是元素的有序集合。
- 一类**只作用于字符串**的**特定类型**操作，以方法调用的形式提供。



**通用操作**

下标访问 s[0]、序列切片、求长度 len[s] 、判断存在与否 'x' in s



**与大小写相关的方法**

upper  lower

isupper  islower

swapcase ：大换小，小换大

capitalize：首字母换为大写

istitle：判断字符串是不是标题

应用：判断用户输入是否为yes，统一将Yes，YES，yeS等换为yes



**判断类方法**

s.isalpha

s.isdecimal

s.isalnum

s.isspace  包含空格、制表符、换行符，且非空，返回True



**字符串方法 startwith 和 endswith**

startswith

endswith

实际工作中，更多用前缀匹配，如日志的处理，查看所有MongoDB文件大小，如：

```python
import os
mongod_logs = [item for item in os.listdir('/var/mongo/log') if item.startswith('mongod.log')]
sum_size = sum(os.path.getsize(os.path.join('/var/mongo/log', item)) for item in mongod_logs)

```

**查找类函数**

find：查找字串出现在字符串中的位置，失败则返回 -1，还可以指定查找范围

index：查找失败，抛出ValueError 异常

rfind：与find类似，是从后向前查

rindex：与index类似，从后向前查

对于判断一个字符串是否是另一个字符串的子串，正确做法是用in 和 not in。



**字符串操作方法**

join 函数：连接

split 函数：拆分

strip 函数：两边裁剪（多用于去除两边的空白字符，也可传递被裁剪参数）；lstrip：左裁剪；rstrip：右裁剪

replace 函数：替换子串



#### 字符串格式化

Python中，存在两种格式化字符串的方法，**即% 表达式和format函数**，format才是未来趋势。

通过{} 表示一个占位符，Python会将format函数参数依次传递给 {} 占位符，

```python
"{} is better than {}. {} is better than {}.".format('Beautiful', 'ugly', 'Explicit', 'implicit')
'Beautiful is better than ugly. Explicit is better than implicit.'
```

也可以通过下标方式访问format函数参数，即{1}，{2}等，或者{keyword1}，{keyword2}等；

也可以直接访问对象的属性，如：

```python
>>> from collections import namedtuple
>>> Person = namedtuple('Person', 'name age sex')
>>> xm = Person('Roger', 25, 'male')
>>> "{p.name} is {p.age} old this year".format(p=xm)

'Roger is 25 old this year'

```

------

### 4.2 正则表达式

原则：大部分情况下，用Python 内置的字符串处理函数解决文本问题，少数情况下，用简单的正则处理。

#### **正则语法**

**正则表达式的核心**——**定义模式以及熟悉模式的定义规则。**由普通文本和具有特殊意义的符号组成。

如：

匹配所有单词： 	？[a-zA-Z]+

匹配IP地址：		 [0-9]{1,3}\\. [0-9]{1,3}\\. [0-9]{1,3}\\. [0-9]{1,3}

#### **利用re库处理正则表达式**

两种方式：一是直接使用re中的函数；一是创建一个特定模式编译的正则表达式对象，然后使用这个对象中的方法。

数据量大，建议用编译后的方式，更省时。如seq 10000000 >> **data.txt**，读取文件：

```shell
[root@bya Python_exercise]# seq 10000000 >> data.txt
[root@bya Python_exercise]# ll -h
total 76M
-rw-r--r-- 1 root root 76M Sep  8 16:59 data.txt
-rw-r--r-- 1 root root 206 Sep  8 17:05 re_compile.py
-rw-r--r-- 1 root root 182 Sep  8 17:04 re_nocompile.py
[root@bya Python_exercise]# cat re_nocompile.py 
import re

def main():
    pattern = "[0-9]+"
    with open('data.txt') as f:
        for line in f:
            re.findall(pattern, line)
    
if __name__ == '__main__':
    main()
[root@bya Python_exercise]# cat re_compile.py 
import re

def main():
    pattern = "[0-9]+"
    re_obj = re.compile(pattern)
    with open('data.txt') as f:
        for line in f:
            re_obj.findall(line)

if __name__ == '__main__':
    main()
[root@bya Python_exercise]# time python re_nocompile.py 

real	0m9.870s
user	0m9.818s
sys	0m0.046s
[root@bya Python_exercise]# time python re_compile.py 

real	0m4.762s
user	0m4.741s
sys	0m0.010s

```

#### 常用的re方法

**匹配类函数**

re.findall() 返回匹配的所有结果

re.finditer() 同样返回匹配的所有结果，返回一个迭代器。

re.match() ，类似于字符串中的startwith函数，但能用正则，更强大。

re.search()，在任意地方进行匹配，但只查找第一次匹配，而match仅对开始部分匹配。

match和search 共同点——匹配成功，返回一个SRE_Match类型的对象；匹配失败，返回一个None。

**修改类函数**

re.sub(), 类似于字符串中的replace函数，能用正则，更强大。

re.split(),类似于字符串中的split函数，能用正则，更强大，能制定多个分隔符。

```python
import re
text = "MySQL slave binlog position: master host '10.172.33.45',filename 'mysql-bin.000002', position '52342359'"
result = re.split(r"[':,\s]+", text.strip("\n"))
print(result)
```

**大小写不敏感**

查找或替换时，常要忽略字符大小写

如：

```python
re.findall('python', text, flags=re.IGNORECASE)
re.sub('python', 'snake', text, flags=re.IGNORECASE)
```

**非贪婪匹配**

默认使用贪婪匹配，即匹配最长的字符串，如果使用非贪婪匹配，在匹配字符串时，加上一个**？**

------

### 4.3 字符集编码



------

### 4.4Jinja2 模板







