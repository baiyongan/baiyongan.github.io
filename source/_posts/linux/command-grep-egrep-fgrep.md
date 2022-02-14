---
title: Linux 运维实战系列——文本处理三剑客之一 grep
cover: 'https://s2.loli.net/2022/02/03/4UVYz1jmQLP9hAs.png'
categories:
  - Linux
  - Fundation
tags:
  - 运维
  - 命令
abbrlink: 9193
date: 2020-05-23 10:12:16
---

## 命令小结

Linux系统中grep命令是一个可以利用“正则表达式”进行“全局搜索”，并将搜索出的行打印出来的工具。grep全称是**G**lobal **R**egular **E**xpression **P**rint，它的使用权限是所有用户。

**grep是Linux中最常用的“文本处理工具”之一，grep与sed、awk合称为Linux中的三剑客。**它与egrep和fgrep 实用程序属于同一系列的Unix工具。

<!--more-->



## 实战经验

### grep、egrep、fgrep三者关系

man grep 查询可知：

 **egrep is the same as grep -E.**  

其中 -E, --extended-regexp
 Interpret PATTERN as an extended regular expression (ERE, see below).  (-E is specified by POSIX.)

**fgrep is the  same as  grep -F.**

其中 -F, --fixed-strings, --fixed-regexp
Interpret PATTERN as a list of fixed strings, separated by newlines, any of which is to be matched.  (-F  is specified by POSIX, --fixed-regexp is an obsoleted alias, please do not use it in new scripts.)

> **简而言之，grep支持基础正则表达式，egrep支持扩展正则表达式，fgrep不支持正则。**



### grep 高亮打印

以下都是围绕/etc/passwd文件来进行说明

```shell
[baiyongan@bya linux_practice]$ cat /etc/passwd | tail -n 15 # 获取passwd文件最后15行内容
sshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin
avahi:x:70:70:Avahi mDNS/DNS-SD Stack:/var/run/avahi-daemon:/sbin/nologin
postfix:x:89:89::/var/spool/postfix:/sbin/nologin
tcpdump:x:72:72::/:/sbin/nologin
baiyongan:x:1000:1000:BaiYongan:/home/baiyongan:/bin/bash
netdata:x:990:985:netdata:/opt/netdata:/usr/sbin/nologin
influxdb:x:989:984::/var/lib/influxdb:/bin/false
apache:x:48:48:Apache:/usr/share/httpd:/sbin/nologin
mosquitto:x:988:983:Mosquitto Broker:/etc/mosquitto:/sbin/nologin
ganglia:x:987:982:Ganglia Monitoring System:/var/lib/ganglia:/sbin/nologin
nut:x:57:57:Network UPS Tools:/var/lib/ups:/bin/false
test_ansible:x:986:980::/home/test_ansible:/sbin/nologin
mysql:x:27:27:MariaDB Server:/var/lib/mysql:/sbin/nologin
caddy:x:985:979:Caddy web server:/var/lib/caddy:/sbin/nologin
elasticsearch:x:1001:888::/home/elasticsearch:/bin/bash
[baiyongan@bya linux_practice]$
[baiyongan@bya linux_practice]$ grep --color "baiyongan" /etc/passwd
baiyongan:x:1000:1000:BaiYongan:/home/baiyongan:/bin/bash
[baiyongan@bya linux_practice]$ grep "baiyongan" /etc/passwd
baiyongan:x:1000:1000:BaiYongan:/home/baiyongan:/bin/bash
[baiyongan@bya linux_practice]$ alias
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'
alias grep='grep --color=auto'
alias l.='ls -d .* --color=auto'
alias ll='ls -l --color=auto'
alias ls='ls --color=auto'
alias vi='vim'
alias which='alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'
[baiyongan@bya linux_practice]$ 
```

其实系统默认grep的别名就是高亮打印了，所以 加不加--color 参数，都会将匹配到的字符串显示成红色。



### grep的反查技能

**使用 -v 参数，可以实现反查效果**

> -v, --invert-match
>               Invert the sense of matching, to select non-matching lines.  (-v is specified by POSIX.)

```shell
[baiyongan@bya linux_practice]$ cat /etc/passwd | tail -n 15 | grep --color "baiyongan"
baiyongan:x:1000:1000:BaiYongan:/home/baiyongan:/bin/bash
[baiyongan@bya linux_practice]$ cat /etc/passwd | tail -n 15 | grep -v "baiyongan"
sshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin
avahi:x:70:70:Avahi mDNS/DNS-SD Stack:/var/run/avahi-daemon:/sbin/nologin
postfix:x:89:89::/var/spool/postfix:/sbin/nologin
tcpdump:x:72:72::/:/sbin/nologin
netdata:x:990:985:netdata:/opt/netdata:/usr/sbin/nologin
influxdb:x:989:984::/var/lib/influxdb:/bin/false
apache:x:48:48:Apache:/usr/share/httpd:/sbin/nologin
mosquitto:x:988:983:Mosquitto Broker:/etc/mosquitto:/sbin/nologin
ganglia:x:987:982:Ganglia Monitoring System:/var/lib/ganglia:/sbin/nologin
nut:x:57:57:Network UPS Tools:/var/lib/ups:/bin/false
test_ansible:x:986:980::/home/test_ansible:/sbin/nologin
mysql:x:27:27:MariaDB Server:/var/lib/mysql:/sbin/nologin
caddy:x:985:979:Caddy web server:/var/lib/caddy:/sbin/nologin
elasticsearch:x:1001:888::/home/elasticsearch:/bin/bash
[baiyongan@bya linux_practice]$ 
```



### grep展示行号和统计行数

**使用 -n 参数，可以输出行号**

>   -n, --line-number
>               Prefix each line of output with the 1-based line number within its input file.  (-n is specified by POSIX.)

```shell
[baiyongan@bya linux_practice]$ grep -n "baiyongan" /etc/passwd
41:baiyongan:x:1000:1000:BaiYongan:/home/baiyongan:/bin/bash
[baiyongan@bya linux_practice]$ 
```

**使用 -c 参数，仅返回搜索到的匹配行数**

> -c, --count
>               Suppress  normal  output;  instead  print  a  count  of  matching  lines  for each input file.  With the -v, --invert-match option (see below), count non-matching lines.  (-c is specified by POSIX.)

```shell
[baiyongan@bya linux_practice]$ cat /etc/passwd | tail -n 15 | grep -c "baiyongan"
1
[baiyongan@bya linux_practice]$ cat /etc/passwd | tail -n 15 | grep -cv "baiyongan"
14
[baiyongan@bya linux_practice]$ 
```



### grep展示检索行的上下临近部分

**A 即After，使用 -A num参数，表示除了打印匹配行之外，还要打印出匹配行下面的num行**

> -A NUM, --after-context=NUM
>           Print NUM lines of trailing context after matching lines.   Places  a  line  containing  a  group  separator (described  under  --group-separator)  between contiguous groups of matches.  With the -o or --only-matching option, this has no effect and a warning is given.

**B即 Before，使用 -B num参数，表示除了打印匹配行之外，还要打印出匹配行上面的num行**

>    -B NUM, --before-context=NUM
>           Print NUM lines of leading context before matching lines.   Places  a  line  containing  a  group  separator
>           (described  under  --group-separator)  between contiguous groups of matches.  With the -o or --only-matching
>           option, this has no effect and a warning is given.

**C即context，使用 -C num 参数，表示除了打印匹配行之外，还要打印出匹配行的上下num行**

>    -C NUM, -NUM, --context=NUM
>           Print NUM  lines  of  output  context.   Places  a  line  containing  a  group  separator  (described  under
>           --group-separator) between contiguous groups of matches.  With the -o or --only-matching option, this has no
>           effect and a warning is given.

```shell
[baiyongan@bya linux_practice]$ cat /etc/passwd | tail -n 15 | grep -A 1 "baiyongan"
baiyongan:x:1000:1000:BaiYongan:/home/baiyongan:/bin/bash
netdata:x:990:985:netdata:/opt/netdata:/usr/sbin/nologin
[baiyongan@bya linux_practice]$ cat /etc/passwd | tail -n 15 | grep -B 1 "baiyongan"
tcpdump:x:72:72::/:/sbin/nologin
baiyongan:x:1000:1000:BaiYongan:/home/baiyongan:/bin/bash
[baiyongan@bya linux_practice]$ cat /etc/passwd | tail -n 15 | grep -C 1 "baiyongan"
tcpdump:x:72:72::/:/sbin/nologin
baiyongan:x:1000:1000:BaiYongan:/home/baiyongan:/bin/bash  # 匹配行，前后一行
netdata:x:990:985:netdata:/opt/netdata:/usr/sbin/nologin
[baiyongan@bya linux_practice]$ cat /etc/passwd | tail -n 15 | grep -2 "baiyongan"
postfix:x:89:89::/var/spool/postfix:/sbin/nologin
tcpdump:x:72:72::/:/sbin/nologin
baiyongan:x:1000:1000:BaiYongan:/home/baiyongan:/bin/bash # 匹配行，前后两行
netdata:x:990:985:netdata:/opt/netdata:/usr/sbin/nologin
influxdb:x:989:984::/var/lib/influxdb:/bin/false
[baiyongan@bya linux_practice]$ 
```



### grep不区分大小写

**使用 -i 参数，可以忽略大小写，提高搜索命中的概率**

>    -i, --ignore-case
>           Ignore case distinctions in both the PATTERN and the input files.  (-i is specified by POSIX.)

```shell
[baiyongan@bya linux_practice]$ cat /etc/passwd | tail -n 15 | grep -i "baiYONGan"
baiyongan:x:1000:1000:BaiYongan:/home/baiyongan:/bin/bash
[baiyongan@bya linux_practice]$ 
#其中，虽然搜索baiYONGan，而baiyongan、BaiYongan都高亮显示了
```



### grep处理多文件

grep命令可以一次性搜索多个文件，最常用的场景就是：从大量的文件中查找出含有特定字符的文件。

**使用 -l 参数，可以找到包含匹配字符的文件，并打印文件名**

**使用-L 参数，是 -l 参数的反向操作，可以找到不包含匹配字符的文件，并打印文件名**

>    -l, --files-with-matches
>           Suppress normal output; instead print the name of each input file from which output would normally have been
>           printed.  The scanning will stop on the first match.  (-l is specified by POSIX.)
>
>    -L, --files-without-match
>           Suppress normal output; instead print the name of each input file from which no output would  normally  have
>           been printed.  The scanning will stop on the first match.

```shell
[baiyongan@bya grep_test]$ ll
total 12
-rw-rw-r-- 1 baiyongan baiyongan 36 May 23 11:26 1.txt
-rw-rw-r-- 1 baiyongan baiyongan 37 May 23 11:27 2.txt
-rw-rw-r-- 1 baiyongan baiyongan 36 May 23 11:26 3.txt
[baiyongan@bya grep_test]$ for i in $(ls ./); do echo context of  $i &&  cat $i && echo; done
context of 1.txt
the first file
this line is useless

context of 2.txt
the second file
this line is useless

context of 3.txt
the third file
this line is useless

[baiyongan@bya grep_test]$ grep -l "first" *.txt
1.txt
[baiyongan@bya grep_test]$ grep -L "first" *.txt
2.txt
3.txt
[baiyongan@bya grep_test]$ 
```


### grep与正则

**检索行首匹配的字符串， 用 ^string**

**检索行尾匹配的字符串，用string$**

```shell
[baiyongan@bya grep_test]$ grep '^baiyongan' /etc/passwd
baiyongan:x:1000:1000:BaiYongan:/home/baiyongan:/bin/bash
[baiyongan@bya grep_test]$ grep 'bash$' /etc/passwd
root:x:0:0:root:/root:/bin/bash
baiyongan:x:1000:1000:BaiYongan:/home/baiyongan:/bin/bash
elasticsearch:x:1001:888::/home/elasticsearch:/bin/bash
[baiyongan@bya grep_test]$ 
```

### 正则中有关 '词' 的知识

正则中的词，一般是由字母、数字和下划线组成的，词与词之间，通常用空格、制表符或换行符分隔。

如下所示：在正则中，使用 \\< 和 \\> 来匹配love这个词，gloves则不会被匹配到。

其实，更简单的方式是 -w参数：

**使用-w 参数，精确匹配要检索的字符串，并打印相关行**

> -w, --word-regexp
>           Select only those lines containing matches that form whole words.  The test is that the  matching  substring must either be at the beginning of the line, or preceded by a non-word constituent character.  Similarly, it  must be either at the end of the line or followed by a  non-word  constituent  character.   Word-constituent characters are letters, digits, and the underscore.

```shell
[baiyongan@bya grep_test]$ cat word.txt 
I love daisy
My gloves are red.
[baiyongan@bya grep_test]$ grep love word.txt 
I love daisy
My gloves are red.
[baiyongan@bya grep_test]$ grep '\<love\>' word.txt 
I love daisy
[baiyongan@bya grep_test]$# 使用 -w 参数，更加简单
[baiyongan@bya grep_test]$ grep -w love word.txt 
I love daisy
[baiyongan@bya grep_test]$ 
```



### egrep 实现多条件查找

如下所示，使用egrep实现两个条件的查找，其中  '|'  符号代表 或 搜索。

```shell
[baiyongan@bya grep_test]$ egrep '^root|bash$' /etc/passwd
root:x:0:0:root:/root:/bin/bash
baiyongan:x:1000:1000:BaiYongan:/home/baiyongan:/bin/bash
elasticsearch:x:1001:888::/home/elasticsearch:/bin/bash
[baiyongan@bya grep_test]$ 
[baiyongan@bya grep_test]$ grep -E '^root|bash$' /etc/passwd # 与egrep等价
root:x:0:0:root:/root:/bin/bash
baiyongan:x:1000:1000:BaiYongan:/home/baiyongan:/bin/bash
elasticsearch:x:1001:888::/home/elasticsearch:/bin/bash
[baiyongan@bya grep_test]$ grep  '^root|bash$' /etc/passwd 
[baiyongan@bya grep_test]$ 
```



### 基本正则表达式和扩展正则表达式

正则表达式种类繁多且复杂，POSIX则将正则进行了标准化，并把实现方法分成了两大类。

- 基本正则表达式（BRE）
- 扩展正则表达式（ERE）

两者的区别，更多的是元字符的区别。

基本正则中，只承认 **"^", "$", ".", "[", "]", "*"**是元字符，其他都被识别为普通字符；

扩展正则中，在BRE的基础上，增加了 **"(", ")", "{", "}", "?", "+", "|"** 等元字符。

特别说明：只有在用反斜杠进行转义的情况下，字符  **"(", ")", "{", "}"**，才会在扩展正则中被当作元字符处理，而在基本正则中，任何元字符前面加上反斜杠，反而会使其被当作普通字符处理。



### 不支持正则的fgrep

```shell
[baiyongan@bya grep_test]$ grep -c 'bash$' /etc/passwd
3
[baiyongan@bya grep_test]$ fgrep -c 'bash$' /etc/passwd
0
[baiyongan@bya grep_test]$ 
```

既然fgrep不支持正则，那要它何用？其实，当搜索时，假如搜索字符串中包含了不少的特殊字符，而这些特殊字符，恰好又是正则表达式的预留字符，比如"$", "^"等，这是，可以用fgrep避免转义。示例如下:

```shell
[baiyongan@bya grep_test]$ cat roc.txt # roc.txt文件中，有^ ^$等
^this is a useless line
^$this is another useless line
[baiyongan@bya grep_test]$ grep '^this' roc.txt  # grep会找开头为this的行，无匹配
[baiyongan@bya grep_test]$ grep '\^this' roc.txt 
^this is a useless line
[baiyongan@bya grep_test]$ fgrep '^this' roc.txt # fgrep会找 ^this这个字符串，有匹配
^this is a useless line
[baiyongan@bya grep_test]$ 
```



## 拓展阅读

无

## 备注

正则上面内容还比较少