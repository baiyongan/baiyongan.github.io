---
title: Python 内置函数
cover: 'https://s2.loli.net/2022/02/03/7sXCgO2wYznbSMe.png'
categories:
  - Python
  - Fundation
tags:
  - 内置函数
abbrlink: 38946
date: 2020-05-02 07:34:11
---

## 内置函数

内置函数，一般都是因为使用频率比较频繁或是元操作，所以通过内置函数的形式提供出来。

python 版本不同，其内容也有变化，例如之前Py2 vs. Py3 还存在 xrange() vs. range()， raw_input() vs. input()，现在只保留range()、input()。依据目前的python 3.8 版本，共计69个（实际上，[only 42 of them are actually functions](https://treyhunner.com/2019/04/is-it-a-class-or-a-function-its-a-callable/#The_distinction_between_functions_and_classes_often_doesn't_matter)）。

<!--more-->

## 按功能类型分类

|    类型    | 数量 |
| :--------: | :--: |
|  数学运算  |  7   |
|  类型转换  |  24  |
|  序列操作  |  8   |
|  对象操作  |  9   |
|  反射操作  |  8   |
|  变量操作  |  2   |
|  交互操作  |  2   |
|  文件操作  |  1   |
|  编译执行  |  5   |
| 装饰器相关 |  3   |

注：其分类的对象操作和反射操作中，有自省的东西，见之前的博客——《Python  自省与反射》，文件操作和交互操作也可以合并，因为参照的别的博客文章，所以，还是宏观掌握，实际应用为主，也懒得自己重新分类了。



### 数学运算

|  函数名  |                          功能简介                          |
| :------: | :--------------------------------------------------------: |
|  abs()   |                     返回一个数的绝对值                     |
| divmod() |                   返回两个数值的商和余数                   |
|  max()   | 返回可迭代对象中最大的元素，或者返回两个及以上实参中最大的 |
|  min()   |    返回可迭代对象中的元素中的最小值或者所有参数的最小值    |
|  pow()   |         返回两个数值的幂运算值或其与指定整数的模值         |
| round()  |                  对浮点数进行四舍五入求值                  |
|  sum()   |        对元素类型是数值的可迭代对象中的每个元素求和        |

### 类型转换

|    函数名    |                      功能简介                      |
| :----------: | :------------------------------------------------: |
|    bool()    |      根据传入的参数的逻辑值创建一个新的布尔值      |
|    int()     |           根据传入的参数创建一个新的整数           |
|   float()    |          根据传入的参数创建一个新的浮点数          |
|  complex()   |            根据传入参数创建一个新的复数            |
|    str()     |        返回一个对象的字符串表现形式(给用户)        |
| bytearray()  |         根据传入的参数创建一个新的字节数组         |
|   bytes()    |      根据传入的参数创建一个新的不可变字节数组      |
| memoryview() |       根据传入的参数创建一个新的内存查看对象       |
|    ord()     |             返回Unicode字符对应的整数              |
|    chr()     |            返回整数所对应的Unicode字符             |
|    bin()     |              将整数转换成2进制字符串               |
|    oct()     |             将整数转化成8进制数字符串              |
|    hex()     |              将整数转换成16进制字符串              |
|   tuple()    |           根据传入的参数创建一个新的元组           |
|    list()    |           根据传入的参数创建一个新的列表           |
|    dict()    |           根据传入的参数创建一个新的字典           |
|    set()     |           根据传入的参数创建一个新的集合           |
| frozenset()  |        根据传入的参数创建一个新的不可变集合        |
| enumerate()  |             根据可迭代对象创建枚举对象             |
|   range()    |        根据传入的参数创建一个新的range对象         |
|    iter()    |        根据传入的参数创建一个新的可迭代对象        |
|   slice()    |         根据传入的参数创建一个新的切片对象         |
|   super()    | 根据传入的参数创建一个新的子类和父类关系的代理对象 |
|   object()   |               创建一个新的object对象               |

### 序列操作  

|   函数名   |                           功能简介                           |
| :--------: | :----------------------------------------------------------: |
|   all()    |            判断可迭代对象的每个元素是否都为True值            |
|   any()    |           判断可迭代对象的元素是否有为True值的元素           |
|  filter()  |               使用指定方法过滤可迭代对象的元素               |
|   map()    | 使用指定方法去作用传入的每个可迭代对象的元素，生成新的可迭代对象 |
|   next()   |                返回可迭代对象中的下一个元素值                |
| reversed() |                  反转序列生成新的可迭代对象                  |
|  sorted()  |            对可迭代对象进行排序，返回一个新的列表            |
|   zip()    | 聚合传入的每个迭代器中相同位置的元素，返回一个新的元组类型迭代器 |

### 对象操作

|  函数名  |                           功能简介                           |
| :------: | :----------------------------------------------------------: |
|  help()  |                      返回对象的帮助信息                      |
|  dir()   |              返回对象或者当前作用域内的属性列表              |
|   id()   |                     返回对象的唯一标识符                     |
|  hash()  |                       获取对象的哈希值                       |
|  type()  |      返回对象的类型，或者根据传入的参数创建一个新的类型      |
|  len()   |                        返回对象的长度                        |
| ascii()  |               返回对象的可打印表字符串表现方式               |
| format() |                         格式化显示值                         |
|  vars()  | 返回当前作用域内的局部变量和其值组成的字典，或者返回对象的属性列表 |

### 反射操作

|      函数名      |                       功能简介                       |
| :--------------: | :--------------------------------------------------: |
| \_\_import\_\_() |                     动态导入模块                     |
|   isinstance()   |    判断对象是否是类或者类型元组中任意类元素的实例    |
|   issubclass()   | 判断类是否是另外一个类或者类型元组中任意类元素的子类 |
|    hasattr()     |                 检查对象是否含有属性                 |
|    getattr()     |                   获取对象的属性值                   |
|    setattr()     |                   设置对象的属性值                   |
|    delattr()     |                    删除对象的属性                    |
|    callable()    |                 检测对象是否可被调用                 |

### 变量操作

|  函数名   |                  功能简介                  |
| :-------: | :----------------------------------------: |
| globals() | 返回当前作用域内的全局变量和其值组成的字典 |
| locals()  | 返回当前作用域内的局部变量和其值组成的字典 |

### 交互操作

| 函数名  |        功能简介        |
| :-----: | :--------------------: |
| print() | 向标准输出对象打印输出 |
| input() |     读取用户输入值     |

### 文件操作

| 函数名 |                    功能简介                    |
| :----: | :--------------------------------------------: |
| open() | 使用指定的模式和编码打开文件，返回文件读写对象 |

### 编译执行

|    函数名    |                           功能简介                           |
| :----------: | :----------------------------------------------------------: |
|  compile()   | 将字符串编译为代码或者AST对象，使之能够通过exec语句来执行或者eval进行求值 |
|    eval()    |                      执行动态表达式求值                      |
|    exec()    |                        执行动态语句块                        |
|    repr()    |            返回一个对象的字符串表现形式(给解释器)            |
| breakpoint() | 调用 [`sys.breakpointhook()`](https://docs.python.org/zh-cn/3.8/library/sys.html#sys.breakpointhook) ，直接传递 `args` 和 `kws`，在调用时直接进入调试器中 |

### 装饰器

|     函数名     |          功能简介          |
| :------------: | :------------------------: |
|   property()   |      标示属性的装饰器      |
| classmethod()  |  标示方法为类方法的装饰器  |
| staticmethod() | 标示方法为静态方法的装饰器 |



## 按使用频度分类

> Python 有几十个内置函数和类，数百个工具捆绑在Python的标准库中，以及PyPI上的数千个第三方库。任何人都不可能记住所有这些东西。

但其实不止是对Python的学习，对所有要掌握的技能而言， 建议对你的知识进行分类：

1.我应该记住的东西，这样我就能很好地理解它们；
2.我应该知道的东西，这样我以后才能更有效地查找它们；
3.我根本不应该为之烦恼的东西，除非有一天我需要它们 。 

（道理都懂，但知易行难，新手小白，如果没高手带着飞，哪里会提前知道呢，该踩的坑，一个也不能少，修行在个人，多学习，多总结就好，总会慢慢变强的。）



> **估计大多数Python开发人员只需要大约30个内置函数，但是哪30个取决于你实际使用Python做什么。**

依据上述方法论，以鸟瞰的方式来看看Python中的所有的69个内置函数。

可以把这些内置组件分成五类:

1. 众所周知: 大多数python初学者会因为需要而很快地接触到这些内置组件
2. 初学者所忽略的: 了解这些函数很有用，但是当你是Python新手时，就会很容易忽略它们
3. 稍后再学习的: 了解这些内置组件通常很有用，但是当/如果你需要它们时，你就会找到它们
4. 也许最终会学的: 这些东西迟早会派上用场，但只是在特定的情况下
5. 你可能不需要这些: 除非你在做一些相当专业的事情，否则你不太可能会需要这些

类别1和类别2中的内置函数几乎是所有Python程序员最终都应该学习的基本内置函数。

类别3和类别4中的内置函数是专门的内置函数，它们通常非常有用，但是你对它们的需求会根据你对Python的使用情况而有所不同。

类别5是神秘的内置函数，当你需要它们时，这可能非常方便，但是许多Python程序员可能永远都不需要它们。

如此分类下来，则可以看到

### 10 Commonly known built-in functions

- print

- len
- str
- int
- float
- list
- tuple
- dict
- set
- range

### Built-ins overlooked by new Pythonistas

- bool
- enumerate
- zip
- reversed
- sum
- min and max
- sorted
- any and all

#### The 5 debugging functions

- breakpoint
- dir
- vars
- type
- help

### Learn it later

- **open**
- **input**
- repr
- super
- property
- issubclass  and  isinstance
- hasattr, getattr, setattr, delattr 
- classmethod, staticmethod
- next

### Maybe learn it eventually

- iter
- callable
- **filter** and **map**
- **id**, locals, globals
- round
- divmod
- bin, oct, hex
- abs
- hash
- object

### You likely don’t need these

- ord  and chr
- exec  and eval
- compile
- bytes  and  bytearray  and memoryview
- ascii
- frozenset
- \_\_import \_\_
- **format**
- pow
- complex

注：巧了，上述前两类10+10+5 = 25个，再加我根据经验，在后面几类加粗的6个函数，共31个，大佬就是大佬，毕竟过来人，果然应付一般的Python开发，30个左右即可。



## 源码阅读的问题

> Q:  有的python内置函数，在PyCharm 这个IDE中，用ctrl+b 查看源码时，为什么函数内容就是一个pass？

> A：你**看到的只是**用来生成文档和给静态分析工具看的**假代码**，这些函数的**真正实现在解释器里**，一般看不到源代码。

Python的解释器有c、 java、 python等多种实现，官方提供的默认实现是CPython，因此，作为解释器标准实现的一部分，那些内置函数也是用c语言实现的，也就是说，正常情况下你是连pass也看不到的。PyCharm这个IDE，维护着一个对当前解释器中所有函数，类型等东西的索引，这样就可以进行定义跳转一类的操作。但是对内置函数来说，找不到对应的实现，只有文档 pydoc 可用。PyCharm就根据文档自动地生成这些函数的签名，也就是内容为pass 占位符的函数。而这些函数的具体实现需要到[**python的源代码(官方的github仓库)**](https://github.com/python/cpython)中去找，也可以参考官方文档 [**Extending and Embedding the Python Interpreter**](https://docs.python.org/3.8/extending/index.html)，看看 c 写的东西是怎么被python使用的。



## 拓展阅读

[**Python 标准库-69个内置函数**](https://docs.python.org/zh-cn/3.8/library/functions.html)

[**Python built-ins worth learning**](https://treyhunner.com/2019/05/python-builtins-worth-learning/)

[**Python内置函数详解——总结篇**](https://www.cnblogs.com/sesshoumaru/p/6140987.html)