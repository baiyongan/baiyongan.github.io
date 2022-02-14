---
title: Linux 运维实战系列—— split 拆分
cover: 'https://s2.loli.net/2022/02/03/4UVYz1jmQLP9hAs.png'
categories:
  - Linux
  - Fundation
tags:
  - 运维
  - 命令
abbrlink: 11771
date: 2020-05-24 10:51:33
---

## 命令小结

Linux中，有时需要将文件分割成更小的片段，比如为提高可读性，生成日志。使用 split命令，则可以将一个大文件分割成指定大小的很多个小文件，如果是文本文件，也可以按照行数进行拆分，默认是1000行作为一个拆分单位。

<!--more-->

## 实战经验

### 命令格式与常用选项

> #### split [ -b ] [ -C ] [ - ] [ -l ] [ 要切割的文件 ] [ 输出文件名前缀 ] [ -a ]  

- -b <字节> :指定按照多少字节进行拆分，也可指定 K，M，G，T单位

   -b, --bytes=SIZE
          put SIZE bytes per output file

- -<行数> 或 -l <行数> ：指定每多少行要拆分成一个文件

   -l, --lines=NUMBER
          put NUMBER lines per output file

- 输出文件名前缀：设置拆分后的文件的名称前缀，split会自动在前缀后加上编号，默认从aa开始
- -a<后缀长度>：默认的后缀长度是2，也就是按照aa、ab、ac这样的格式依此编号

   -a, --suffix-length=N
          generate suffixes of length N (default 2)

### 拆分文件与合并

如下，dd命令生成一个700M的文件，用400M单位拆分成两个文件，然后再合并为新文件，比较。

```shell
[baiyongan@bya split_test]$ dd if=/dev/zero bs=1024 count=700000 of=test_large_file
700000+0 records in
700000+0 records out
716800000 bytes (717 MB) copied, 2.02677 s, 354 MB/s
[baiyongan@bya split_test]$ ll
total 700000
-rw-rw-r-- 1 baiyongan baiyongan 716800000 May 24 11:39 test_large_file
[baiyongan@bya split_test]$ split -b 400M test_large_file 
[baiyongan@bya split_test]$ ll
total 1400000
-rw-rw-r-- 1 baiyongan baiyongan 716800000 May 24 11:39 test_large_file
-rw-rw-r-- 1 baiyongan baiyongan 419430400 May 24 11:40 xaa
-rw-rw-r-- 1 baiyongan baiyongan 297369600 May 24 11:40 xab
[baiyongan@bya split_test]$ cat xaa xab > test_large_file_merged
[baiyongan@bya split_test]$ ll
total 2100000
-rw-rw-r-- 1 baiyongan baiyongan 716800000 May 24 11:39 test_large_file
-rw-rw-r-- 1 baiyongan baiyongan 716800000 May 24 11:40 test_large_file_merged
-rw-rw-r-- 1 baiyongan baiyongan 419430400 May 24 11:40 xaa
-rw-rw-r-- 1 baiyongan baiyongan 297369600 May 24 11:40 xab
[baiyongan@bya split_test]$ 
```



### 设置拆分文件的名称前、后缀

如下，以文件名   test_large_file_part_作为前缀， 以及设置数字后缀

>    -d, --numeric-suffixes[=FROM]
>           use numeric suffixes instead of alphabetic; FROM changes the start value (default 0)

```shell
[baiyongan@bya split_test]$ rm -rf xa*
[baiyongan@bya split_test]$ ll
total 1400000
-rw-rw-r-- 1 baiyongan baiyongan 716800000 May 24 11:39 test_large_file
-rw-rw-r-- 1 baiyongan baiyongan 716800000 May 24 11:40 test_large_file_merged
[baiyongan@bya split_test]$ split -b 400M test_large_file test_large_file_part_
[baiyongan@bya split_test]$ ll
total 2100000
-rw-rw-r-- 1 baiyongan baiyongan 716800000 May 24 11:39 test_large_file
-rw-rw-r-- 1 baiyongan baiyongan 716800000 May 24 11:40 test_large_file_merged
-rw-rw-r-- 1 baiyongan baiyongan 419430400 May 24 11:42 test_large_file_part_aa
-rw-rw-r-- 1 baiyongan baiyongan 297369600 May 24 11:42 test_large_file_part_ab
[baiyongan@bya split_test]$ 
[baiyongan@bya split_test]$ rm -rf *part*
[baiyongan@bya split_test]$ ll
total 1400000
-rw-rw-r-- 1 baiyongan baiyongan 716800000 May 24 11:39 test_large_file
-rw-rw-r-- 1 baiyongan baiyongan 716800000 May 24 11:40 test_large_file_merged
[baiyongan@bya split_test]$ split -b 400M -d test_large_file test_large_file_part_
[baiyongan@bya split_test]$ ll
total 2100000
-rw-rw-r-- 1 baiyongan baiyongan 716800000 May 24 11:39 test_large_file
-rw-rw-r-- 1 baiyongan baiyongan 716800000 May 24 11:40 test_large_file_merged
-rw-rw-r-- 1 baiyongan baiyongan 419430400 May 24 11:45 test_large_file_part_00
-rw-rw-r-- 1 baiyongan baiyongan 297369600 May 24 11:45 test_large_file_part_01
[baiyongan@bya split_test]$ 
```



### 按照行数进行拆分

例如将/etc/passwd 文件每十行进行拆分

```shell
[baiyongan@bya split_test]$ split -d -10 /etc/passwd my_passwd_
[baiyongan@bya split_test]$ ll
total 2100024
-rw-rw-r-- 1 baiyongan baiyongan       385 May 24 11:47 my_passwd_00
-rw-rw-r-- 1 baiyongan baiyongan       543 May 24 11:47 my_passwd_01
-rw-rw-r-- 1 baiyongan baiyongan       607 May 24 11:47 my_passwd_02
-rw-rw-r-- 1 baiyongan baiyongan       526 May 24 11:47 my_passwd_03
-rw-rw-r-- 1 baiyongan baiyongan       589 May 24 11:47 my_passwd_04
-rw-rw-r-- 1 baiyongan baiyongan        56 May 24 11:47 my_passwd_05
[baiyongan@bya split_test]$ 
[baiyongan@bya split_test]$ wc -l my_passwd_*
  10 my_passwd_00
  10 my_passwd_01
  10 my_passwd_02
  10 my_passwd_03
  10 my_passwd_04
   1 my_passwd_05
  51 total
[baiyongan@bya split_test]$ 
```



### 合并后的校验

网络传输大文件，或者再设备之间复制大文件的时候，可能会出现传输前后数据不一致的情况。

推荐使用md5sum进行计算，比对前后两个大文件的md5 值。

```shell
[baiyongan@bya split_test]$ ll
total 2100000
-rw-rw-r-- 1 baiyongan baiyongan 716800000 May 24 11:49 test_large_file
-rw-rw-r-- 1 baiyongan baiyongan 716800000 May 24 11:50 test_large_file_merged
-rw-rw-r-- 1 baiyongan baiyongan 419430400 May 24 11:50 test_large_file_part_00
-rw-rw-r-- 1 baiyongan baiyongan 297369600 May 24 11:50 test_large_file_part_01
[baiyongan@bya split_test]$ md5sum test_large_file
eacff27bf2db99c7301383b7d8c1c07c  test_large_file
[baiyongan@bya split_test]$ md5sum test_large_file_merged 
eacff27bf2db99c7301383b7d8c1c07c  test_large_file_merged
[baiyongan@bya split_test]$ 

```







## 拓展阅读