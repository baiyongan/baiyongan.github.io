---
title: Python 中的可变参数 *args 和 **kwargs
date: 2020-05-10 23:06:35
top:
categories:
	- Python
	- Intermediate
tags:
	- args
	- kwargs
---



在Python中的代码中经常会见到这两个词 \*args 和 \*\*kwargs，这两个词主要用于函数定义，表示将不定数量的参数 (Variable Argument) 传递给一个函数。而其实前面的星号才是必须的，args 和 kwargs 只是编程人员约定的变量名字。

args 是 arguments 的缩写，表示位置参数，**它的数据类型是一个tuple**。

kwargs 是 keyword arguments 的缩写，表示关键字参数。**它的数据类型是一个dict。**

<!--more-->

## Ordering Arguments

Python中的参数有位置参数 (positional arguments) 和关键字参数 (keyword arguments) 之分。在函数定义或者函数调用时，各种参数之间的顺序是有要求的，顺序如下: 

> 1.  **Formal positional arguments**
>
> 2.  **\*args**
>
> 3.  **Keyword arguments**
>
> 4.  **\*\*kwargs**
>



## \*args的用法

\*args就是就是传递一个可变参数列表给函数实参，这个参数列表的数目未知，甚至长度可以为0。

```python
def test_args(first, *args):
    print('Required argument: ', first)
    print(type(args))
    for v in args:
        print ('Optional argument: ', v)

test_args(1, 2, 3, 4)
```

第一个参数是必须要传入的参数，所以使用了第一个形参，而后面三个参数则作为可变参数列表传入了实参，并且是作为元组tuple来使用的。代码的运行结果如下:

```python
Required argument:  1
<class 'tuple'>
Optional argument:  2
Optional argument:  3
Optional argument:  4
```



## \*\*kwargs 的用法

而\*\*kwargs则是将一个可变的关键字参数的字典传给函数实参，同样参数列表长度可以为0或为其他值。

```python
def test_kwargs(first, *args, **kwargs):
   print('Required argument: ', first)
   print(type(kwargs))
   for v in args:
      print ('Optional argument (args): ', v)
   for k, v in kwargs.items():
      print ('Optional argument %s (kwargs): %s' % (k, v))

test_kwargs(1, 2, 3, 4, k1=5, k2=6)
```

正如前面所说的，args类型是一个tuple，而kwargs则是一个字典dict，并且args只能位于kwargs的前面。代码的运行结果如下:

```python
Required argument:  1
<class 'dict'>
Optional argument (args):  2
Optional argument (args):  3
Optional argument (args):  4
Optional argument k1 (kwargs): 5
Optional argument k2 (kwargs): 6
```



## 调用函数

args和kwargs不仅可以在函数定义中使用，还可以在函数调用中使用。在调用时使用就相当于pack（打包）和unpack（解包），类似于元组的打包和解包。

如下所示：

```python
def test_args_kwargs(arg1, arg2, arg3):
    print("arg1:", arg1)
    print("arg2:", arg2)
    print("arg3:", arg3)

#使用args来解包调用函数
args = ("two", 3, 5)
test_args_kwargs(*args)

#result
arg1: two
arg2: 3
arg3: 5
    
#使用kwargs解包调用函数
kwargs = {"arg3": 3, "arg2": "two", "arg1": 5}
test_args_kwargs(**kwargs)

#result
arg1: 5
arg2: two
arg3: 3
```



## 常见的使用场景

最常见的用例是在**写函数装饰器**的时候。

此外也可以**用来做猴子补丁(monkey patching)**。

猴子补丁的意思是指Python中类和模块可以在外部被动态修改这种特性。通常是添加功能或修正缺陷。猴子补丁在代码运行时内存中发挥作用，不会修改源码，因此只对当前运行的程序实例有效。

为什么叫做猴子补丁呢？在模块和类的外部对模块和类进行修改是一种非常耍赖的做法，会破坏代码的封装结构，这种事情大概只有淘气的猴子喜欢去做，因此形象地称之为猴子补丁。

——待完善



## 拓展阅读

[**Understanding '\*', '\*args', '\*\*' and '\*\*kwargs'**](https://www.agiliq.com/blog/2012/06/understanding-args-and-kwargs/)

[**理解'\*','\*args','\*\*','\*\*kwargs'(译)**](https://blog.csdn.net/callinglove/article/details/45483097)

[**Python中的args和kwargs**](https://www.cnblogs.com/abclife/p/11483372.html)

[**How To Use \*args and \*\*kwargs in Python 3**](https://www.digitalocean.com/community/tutorials/how-to-use-args-and-kwargs-in-python-3)

