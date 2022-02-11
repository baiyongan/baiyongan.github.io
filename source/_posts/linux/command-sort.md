---
title: Linux 运维实战系列——sort 排序
date: 2020-05-23 20:19:38
cover: https://s2.loli.net/2022/02/03/4UVYz1jmQLP9hAs.png
categories:
	- Linux
	- Fundation
tags:
	- 运维
	- 命令

---

## 命令小结

Linux中，sort 是非常常用的命令之一，它可以帮助我们进行各种文件和内容的排序，又快又准。

默认情况下，sort是将文件的每一行作为一个单元，进行排序的，其规则是从每行首字符向后，依此按ASCII码值前后顺序进行比较，最后将它们按照升序输出。

<!--more-->

## 实战经验

### -u 选项消除重复行

>  -u, --unique
>               with -c, check for strict ordering; without -c, output only  the
>               first of an equal run

```shell
[baiyongan@bya sort_test]$ cat seq.txt 
banana
apple
pear
orange
pear
[baiyongan@bya sort_test]$ sort seq.txt 
apple
banana
orange
pear
pear
[baiyongan@bya sort_test]$ sort -u seq.txt  # 重复的pear只显示一次
apple
banana
orange
pear
[baiyongan@bya sort_test]$ 
```



### -r 选项降序排列

sort的默认是升序，如果要降序排列，可用 -r

>    -r, --reverse
>           reverse the result of comparisons

```shell
[baiyongan@bya sort_test]$ cat seq.txt 
banana
apple
pear
orange
pear
[baiyongan@bya sort_test]$ sort  seq.txt 
apple
banana
orange
pear
pear
[baiyongan@bya sort_test]$ sort -r seq.txt 
pear
pear
orange
banana
apple
[baiyongan@bya sort_test]$
```



### -o 选项保存排序结果

sort默认将结果输出到标准输出 ，如果想存储排序结果，需要借助重定向，将结果写入文件，

即sort filename > newfile，但是，如果要写回原文件，重定向就不行了。

>    -o, --output=FILE
>           write result to FILE instead of standard output

```shell
[baiyongan@bya sort_test]$ cat number.txt 
1
2
3
4
5
[baiyongan@bya sort_test]$ sort -r number.txt > number.txt 
[baiyongan@bya sort_test]$ cat number.txt 
[baiyongan@bya sort_test]$ 

[baiyongan@bya sort_test]$ cat number.txt 
1
2
3
4
5
[baiyongan@bya sort_test]$ sort -r number.txt -o number.txt #使用-o选项，可以将结果写回原文件
[baiyongan@bya sort_test]$ cat number.txt 
5
4
3
2
1
[baiyongan@bya sort_test]$ 

```



### -n 进行数字排序

sort默认按照字符来进行排序，它会把诸如 10，2 这些看作普通字符，而非数字，sort会先比较1 和2 两个字符，在ASCII码中，字符1 排在字符2 之前，所以10 被排在2 前面，要想按照数字方式排列，需要 -n 选项

>    -n, --numeric-sort
>           compare according to string numerical val

```shell
[baiyongan@bya sort_test]$ cat number.txt 
1
10
19
11
2
5
[baiyongan@bya sort_test]$ sort number.txt 
1
10
11
19
2
5
[baiyongan@bya sort_test]$ sort -n number.txt 
1
2
5
10
11
19
[baiyongan@bya sort_test]$ 
```



### tk 选项组合使用

-t 选项指定间隔符；-k 选项指定根据第几列进行排序

>    -t, --field-separator=SEP
>           use SEP instead of non-blank to blank transition
>
>    -k, --key=KEYDEF
>           sort via a key; KEYDEF gives location and type

```shell
[baiyongan@bya sort_test]$ cat fruits.txt  #以：间隔，每行格式为  水果：数量：价格
banana:30:5.5
apple:10:2.5
pear:90:2.3
orange:20:3.4
[baiyongan@bya sort_test]$ sort -n -k 2 -t : fruits.txt  # 表示按照数量进行排序
apple:10:2.5
orange:20:3.4
banana:30:5.5
pear:90:2.3
[baiyongan@bya sort_test]$ 

```



### 其他的好用的sort选项

- -f 选项，将小写字母转化为大写字母来比较，效果相当于排序时忽略大小写

>    -f, --ignore-case
>           fold lower case to upper case characters

- -c 选项， 会检查文件是否已经排好序，如果乱序，则输出第一个乱序的行的相关信息

>    -c, --check, --check=diagnose-first
>           check for sorted input; do not sort

- -C 选项，会检查文件是否已经排好序，如果乱序，则不输出内容，而命令的返回值为 1 

>    -C, --check=quiet, --check=silent
>           like -c, but do not report first bad line

- -M 选项，按照月份（英文名称）进行排序

>    -M, --month-sort
>           compare (unknown) < 'JAN' < ... < 'DEC'

- -b 选项，忽略每一行前面所有的空白部分，从第一个可见字符开始比较

>    -b, --ignore-leading-blanks    
>           ignore leading blanks



### -k 选项详解

设计一个文件 facebook.txt 每行结构为公司名：公司人数：员工工资，如下

```shell
[baiyongan@bya sort_test]$ cat facebook.txt 
google 110 5000
baidu 100 5000
guge 50 300
sohu 100 4500
```

#### 复合条件排序

```shell
# 按照公司人数排序，人数相同时，默认按照第一个字段升序
[baiyongan@bya sort_test]$ sort -n -t ' ' -k 2 facebook.txt 
guge 50 300
baidu 100 5000
sohu 100 4500
google 110 5000

# 按照公司人数排序，人数相同时，按照员工平均工资升序排序
[baiyongan@bya sort_test]$ sort -n -t ' ' -k 2 -k 3 facebook.txt 
guge 50 300
sohu 100 4500
baidu 100 5000
google 110 5000

#按照员工工资降序，工资相同时，按照公司人数升序
[baiyongan@bya sort_test]$ sort -n -t ' ' -k 3r -k 2 facebook.txt 
baidu 100 5000
google 110 5000
sohu 100 4500
guge 50 300

#同上需求，前面去掉 -n，后面包含 n
[baiyongan@bya sort_test]$ sort -t ' ' -k 3nr -k 2n facebook.txt 
baidu 100 5000
google 110 5000
sohu 100 4500
guge 50 300
[baiyongan@bya sort_test]$ 
```



#### -k 选项的具体语法格式

> #### **[ FStart [ .CStart ] ]   [ Modifier ]  [ , [  FEnd [  .CEnd  ]   ]  [  Modifier  ]  ]**

以其中的 "," 为分隔，分前后两大部分，Start和End部分。

Start部分由三个元素组成，即FStart、CStart、Modifier

- FStart 表示我们要排序的列
- CStart 表示在FStart列中，从第几个字符开始算”排序首字符“。CStart可省略，即默认从FStart的开头部分开始。
- Modifier 是之前的类似 n 和 r 的选项部分，可以对排序的需求做补充说明，例如 -k 3nr。

同理， End部分，也可以设定 FEnd.CEnd。如果省略CEnd，则表示从FEnd列的开头到”列尾“， 即FEnd列的最后一个字符。如果将CEnd设为0，效果和省略CEnd一样。整个的End部分也可被省略，即认为End被设定为行尾了。

#### 字母级的排序需求

```shell
# 从公司名称的第二个字母开始排序
[baiyongan@bya sort_test]$ sort -t ' ' -k 1.2 facebook.txt 
baidu 100 5000
sohu 100 4500
google 110 5000
guge 50 300
[baiyongan@bya sort_test]$ 
# 如上，1.2 表示 对第一列的第二个字符开始到本行最后一个字符进行排序。baidu因a排在首位，sohu和google都是
# o，但sohu后的h，比google后的o靠前，所以sohu在google前

# ”只“ 针对公司名的第二个英文字母进行排序，如果内容相同，则按照员工工资进行降序排列
[baiyongan@bya sort_test]$ sort -t ' ' -k 1.2,1.2 -k 3,3nr facebook.txt 
baidu 100 5000
google 110 5000
sohu 100 4500
guge 50 300
[baiyongan@bya sort_test]$ 
# 其中，-k 1.2，1.2 保证 ”只“ 对第二个字母进行排序，-k 3，3nr保证了 ”只“ 对第三列进行排序
```

#### -k 和 -n 参数配合的一些注意点

- 没有使用 -n 选项，同时 -k选项没有指定 End部分时， 则会比较从所指定的列到行尾的所有内容，与此同时，并不支持使用多个 -k 选项。
- 当使用 -n 选项， 同时 -k 选项没有指定End部分时，则当比较的列出现内容相同的情况时，则会从第一列开始进行比较。

#### modifier 部分

modifier部分，可用到的修饰词，大体上包括 b、d、f、i、n、r。

- r  逆序
- n  按数字排序
- b  忽略本域前面的空白符号
- d   表示对本域按照字典顺序排序（即 只考虑空白和字母）
- f   表示对本域忽略大小写进行排序
- i   忽略”不可打印字符“，只针对可打印字符进行排序



#### -k 和 -u 选项的联合效果

-u 只识别用 -k 设定的域，一旦发现内容相同，就会将后续相同的行都删除掉

```shell
[baiyongan@bya sort_test]$ cat facebook.txt 
google 110 5000
baidu 100 5000
guge 50 300
sohu 100 4500
[baiyongan@bya sort_test]$ sort -n -k 2 facebook.txt  # 按照第二列进行排序
guge 50 300
baidu 100 5000
sohu 100 4500
google 110 5000
[baiyongan@bya sort_test]$ sort -n -k 2 -u facebook.txt  # 加上 -u 选项
guge 50 300
baidu 100 5000
google 110 5000
[baiyongan@bya sort_test]$ 

```

同时，-u 也会权衡所有的 -k 选项，存在多层排序时，只有都相同时，才会删除。

```shell
[baiyongan@bya sort_test]$ sort -n -k 2 -k 3 -u facebook.txt 
guge 50 300
sohu 100 4500
baidu 100 5000
google 110 5000
[baiyongan@bya sort_test]$ 

```

#### 诡异的跨列排序

```shell
[baiyongan@bya sort_test]$ cat facebook.txt 
google 110 5000
baidu 100 5000
guge 50 300
sohu 100 4500
[baiyongan@bya sort_test]$ sort -n -k 2.2,3.1 facebook.txt 
guge 50 300
baidu 100 5000
sohu 100 4500
google 110 5000
[baiyongan@bya sort_test]$ 
```

如上，对从第二列的第二个字符，到第三列的第一个字符部分，进行排序

第一行 提取 0 3， 第二行 提取 00 5， 第三行 提取 00 4， 第四行 提取 10  5。为什么 00  5 排在 00 4 前面呢？

其实”跨列排序只是个骗局“， sort指挥比较第二列的第二个字符到第二列的最后一个字符的部分，而不会把第三列的开头字符纳入比较范围。发现00 和00 相同，就会去自动比较第一列了，结果baidu在sohu前面了。可用案例佐证

```shell
[baiyongan@bya sort_test]$ sort -n -k 2.2,3.1 -k 1,1r facebook.txt 
guge 50 300
sohu 100 4500
baidu 100 5000
google 110 5000
[baiyongan@bya sort_test]$ 

```



## 拓展阅读

