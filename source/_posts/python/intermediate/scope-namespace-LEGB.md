---
title: Python 命名空间、作用域及LEGB规则
cover: 'https://s2.loli.net/2022/02/03/7sXCgO2wYznbSMe.png'
categories:
  - Python
  - Intermediate
tags:
  - LEGB
abbrlink: 62708
date: 2020-04-28 17:05:50
---

## 定义

### 命名空间

Python使用叫做命名空间的东西来记录变量的轨迹。

命名空间是一个字典（dictionary），它的键就是变量名，它的值就是那些变量的值，即 {name:object}映射。

A *namespace* is a mapping from names to objects. Most namespaces are currently implemented as Python dictionaries。

<!--more-->

### 作用域

Python 中 name-object 的映射存储在不同的作用域中，各个不同的作用域是相互独立的。而我们就在不同的作用域中搜索 name-object。

Python是静态作用域，也就是说，**在Python中，变量的作用域源于它在代码中的位置；在不同的位置，可能有不同的命名空间。命名空间是变量作用域的体现形式。**如：函数定义了本地作用域，而模块定义的是全局作用域。如果想要在函数内定义全局作用域，需要加上global修饰符。

### 命名空间的访问：globals() 和 locals()

Python的命名空间是一个字典，字典内保存了变量名称与对象之间的映射关系。因此，查找变量名就是在命名空间字典中**查找键-值对**，想要**打印出全局变量与局部变量的字典映射**，我们可以使**用函数globals()和locals()**。

### 命名空间的查找顺序：LEGB 规则

Python有多个命名空间，因此需要有规则来规定，LEGB就是用来规定命名空间查找顺序的规则**，**顺序为：**local-->enclosing function locals-->global-->builtin。**

补：**上面的变量规则只适用于简单对象**，当出现引用对象的属性时，则有另一套搜索规则:属性引用搜索一个或多个对象，而不是作用域，并且有可能涉及到所谓的"继承"。



## LEGB 规则解释

![LEGB](/images/LEGB.png)

### L：Local    函数内的命名空间

作用范围：当前整个函数体范围。

生命周期：当函数被调用时创建一个局部命名空间，当函数返回结果 或 抛出异常时，被删除。每一个递归调用的函数都拥有自己的命名空间。



### **E-Enclosing function locals**    外部嵌套函数的命名空间

作用范围：闭包函数。

生命周期：



### **G-Global**   全局命名空间

作用范围：当前模块(文件)。

生命周期：在模块定义被读入时创建，通常模块命名空间也会一直保存到解释器退出。



### **B-\__Builtin__**    内建模块命名空间

作用范围：所有模块(文件)。

生命周期：Python 解释器启动时创建，会一直保留，不被删除。



Python 在启动的时候会自动为我们载入很多内建的函数、类，比如 dict，list，type，print，这些都位于 \_\__builtin__ 模块中，可以使用 dir(\_\__builtin__) 来查看。这也是为什么我们在没有 import任何模块的情况下，就能使用这么多丰富的函数和功能了。

在Python中，有一个内建模块，该模块中有一些常用函数;在Python启动后，且没有执行程序员所写的任何代码前，Python会首先加载该内建函数到内存。另外，该内建模块中的功能可以直接使用，不用在其前添加内建模块前缀，其原因是对函数、变量、类等标识符的查找是按LEGB法则，其中B即代表内建模块。比如：内建模块中有一个abs()函数，其功能求绝对值，如abs(-20)将返回20。



### 例题练习

```python
# coding=utf-8
#!/usr/bin/env python

def proc1():
    j,k = 3,4
    print("j == %d and k == %d" % (j,k))
    k = 5

def proc2():
    j = 6
    proc1()
    print("j == %d and k == %d" % (j,k))

k = 7
proc1()
print("j == %d and k == %d" % (j, k))

j = 8
proc2()
print("j == %d and k == %d" % (j, k))

# 输出结果
# j == 3 and k == 4
# name 'j' is not defined #注释对应代码后出现以下三列结果
# j == 3 and k == 4
# j == 6 and k == 7
# j == 8 and k == 7
```

### 答案解释

- proc1() 函数内部就有j,k，停止向上查找，故 j == 3 and k == 4

- print("j == %d and k == %d" % (j,k)) 程序从上往下执行，当前只定义 k=7,j 还未定义，因为已经是全局变量了，Builtin中未定义 j, 因此返回未定义的错误。

- proc2()中会调用proc1()依旧先打印 j == 3 and k == 4
  proc2()内部需要打印，j, k值，j本地已经定义为6，k未定义，则向上查找，查找到全局变另种定义了k=7,因此输出：j == 6 and k == 7

- print ("j == %d and k == %d" % (j,k))  前面的程序已经给j,k进行了赋值，直接输出即可，j == 8 and k == 7



## 拓展阅读

[**Python中的LEGB规则**](https://www.cnblogs.com/GuoYaxiang/p/6405814.html)

**[理解 Python 的 LEGB](https://segmentfault.com/a/1190000000640834)**

[**A Beginner's Guide to Python's Namespaces, Scope Resolution, and the LEGB Rule**](http://sebastianraschka.com/Articles/2014_python_scope_and_namespaces.html)

[**Python-tutorial-classes-python-scopes-and-namespaces**](https://docs.python.org/zh-cn/3/tutorial/classes.html#python-scopes-and-namespaces)