---
title: Python lambda 表达式
date: 2019-09-02 23:05:31
categories:
	- Python
	- Fundation
tags:
	- lambda
---



## Lambda 函数的功能及用途

Lambda函数也叫匿名函数，即没有具体名称的函数，它允许快速定义单行函数，类似于C语言的宏，可以用在任何需要函数的地方。这有别于def定义的函数。 

lambda与def的区别： 
		1）def创建的方法是有名称的，而lambda没有。 
		2）lambda会返回一个函数对象，但这个对象不会赋给一个标识符，而def则会把函数对象赋值给一个变量（函数名）。 
		3）lambda只是一个表达式，而def则是一个语句。 
		4）lambda表达式” : “后面，只能有一个表达式，def则可以有多个。 
		5）像if或for或print等语句不能用于lambda中，def可以。 
		6）lambda一般用来定义简单的函数，而def可以定义复杂的函数。 
		7）lambda函数不能共享给别的程序调用，def可以。 

<!--more-->

## 语法格式    **lambda argument_list : expression**

其中，lambda是Python预留的**关键字**，argument_list和expression由**用户自定义**。

具体介绍如下。

这里的argument_list是**参数列表**。它的结构与Python中函数(function)的参数列表是一样的。具体来说，argument_list可以有非常多的形式。例如：

-    a, b

- a=1, b=2
- *args
- **kwargs
- a, b=1, *args
- 空
- ......

这里的expression是一个关于参数的**表达式**。表达式中出现的参数需要在argument_list中有定义，并且表达式只能是**单行**的。以下都是合法的表达式：

- 1

- None
- a + b
- sum(a)
- 1 if a >10 else 0
- ......

这里的 lambda argument_list: expression表示的是一个**函数**。这个函数叫做**lambda函数**。



## **三个特性**

1. lambda函数是**匿名**的：所谓匿名函数，通俗地说就是没有名字的函数。lambda函数没有名字。
2. lambda函数有**输入**和**输出**：输入是传入到参数列表argument_list的值，输出是根据表达式expression计算得到的值。
3. lambda函数一般**功能简单**：单行expression决定了lambda函数不可能完成复杂的逻辑，只能完成非常简单的功能。

下面是一些lambda函数示例：

- lambda x, y: x*y；函数输入是x和y，输出是它们的积x*y
- lambda:None；函数没有输入参数，输出是None
- lambda *args: sum(args); 输入是任意个数的参数，输出是它们的和(隐性要求是输入参数必须能够进行加法运算)
- lambda **kwargs: 1；输入是任意键值对参数，输出是1



## **四个用法**

在实际中，根据这个lambda函数应用场景的不同，可以将lambda函数的用法扩展为以下几种：

- **将lambda函数赋值给一个变量，通过这个变量间接调用该lambda函数。**

例如，执行语句 add=lambda x, y: x+y，定义了加法函数lambda x, y: x+y，并将其赋值给变量add，这样变量add便成为具有加法功能的函数。例如，执行add(1,2)，输出为3。

- **将lambda函数赋值给其他函数，从而将其他函数用该lambda函数替换。**

例如，为了把标准库time中的函数sleep的功能屏蔽(Mock)，我们可以在程序初始化时调用：time.sleep=lambda x : None。这样，在后续代码中调用time库的sleep函数将不会执行原有的功能。例如，执行time.sleep(3)时，程序不会休眠3秒钟，而是什么都不做。

- **将lambda函数作为其他函数的返回值，返回给调用者。**

函数的返回值也可以是函数。例如return lambda x, y: x+y返回一个加法函数。这时，lambda函数实际上是定义在某个函数内部的函数，称之为嵌套函数，或者内部函数。对应的，将包含嵌套函数的函数称之为外部函数。内部函数能够访问外部函数的局部变量，这个特性是**闭包(Closure)编程**的基础，在这里我们不展开。

- **将lambda函数作为参数传递给其他函数。**
- 部分Python**内置函数**接收函数作为参数。典型的此类内置函数有这些。
- **filter函数**。对于序列中的元素进行筛选，最终获取符合条件的序列

<img src="/images/python-filter.png" height="400" width="800">

此时lambda函数用于指定过滤列表元素的条件。

例如filter(lambda x: x % 3 == 0, [1, 2, 3])指定将列表[1,2,3]中能够被3整除的元素过滤出来，其结果是[3]。

- **sorted函数**。

此时lambda函数用于指定对列表中所有元素进行排序的准则。

例如sorted([1, 2, 3, 4, 5, 6, 7, 8, 9], key=lambda x: abs(5-x))将列表[1, 2, 3, 4, 5, 6, 7, 8, 9]按照元素与5距离从小到大进行排序，其结果是[5, 4, 6, 3, 7, 2, 8, 1, 9]。

- **map函数**。遍历序列，对序列中每个元素进行操作，最终获取新的序列。

  <img src="/images/python-map.png" height="400" width="800">

  此时lambda函数用于指定对列表中每一个元素的共同操作。

  例如map(lambda x: x+1, [1, 2,3])将列表[1, 2, 3]中的元素分别加1，其结果[2, 3, 4]。

- **reduce函数。**对于序列内所有元素进行累计操作

  <img src="/images/python-reduce1.png" height="400" width="800">

  <img src="/images/python-reduce2.png" height="600" width="800">

  此时lambda函数用于指定列表中两两相邻元素的结合条件。

  例如reduce(lambda a, b: '{}, {}'.format(a, b), [1, 2, 3, 4, 5, 6, 7, 8, 9])将列表 [1, 2, 3, 4, 5, 6, 7, 8, 9]中的元素从左往右两两以逗号分隔的字符的形式依次结合起来，其结果是'1, 2, 3, 4, 5, 6, 7, 8, 9'。

另外，部分Python**库函数**也接收函数作为参数，例如gevent的spawn函数。此时，lambda函数也能够作为参数传入。



## 使用争议

事实上，关于lambda在Python社区是存在**争议**的。Python程序员对于到底要不要使用lambda意见不一致。

- **支持方**认为使用lambda编写的代码更紧凑，**更“pythonic”**。
- **反对方**认为，lambda函数能够支持的功能十分有限，其不支持多分支程序if...elif...else...和异常处理程序try ...except...。并且，lambda函数的功能被隐藏，对于编写代码之外的人员来说，理解lambda代码需要耗费一定的**理解成本**。他们认为，使用for循环等来替代lambda是一种更加直白的编码风格。

关于lambda的争执没有定论。在实际中，是否使用lambda编程取决于程序员的个人喜好。



以上就是关于Python中的lambda的“**一个语法，三个特性，四个用法，一个争论**”。



## 扩展阅读

[1] [Lambda, filter, reduce and map](https://www.python-course.eu/lambda.php)

[2] [关于Python中的lambda，这可能是你见过的最完整的讲解](https://mp.weixin.qq.com/s?src=11&timestamp=1567786052&ver=1836&signature=4VN7paXz5z-WcFqACQNpxF9XffWTyeCmA3kx*KdrmCP0CVMzRHoo5jH3HguTxYZOrEFFV1GR8TdX69F6P67HSO6IaAWte4EcBH*RO12um2Onomp8pIetTq0kYz1bpFsU&new=1)

