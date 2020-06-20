---
title: From a pythoneer to a pythonista
date: 2020-04-29 18:59:01
categories:
	- Resource
	- interview
tags:
	- Pythonista
---

<!--TOC-->

## 我眼中一个好的Pythoneer应该具备的品质（转载）

- [1 知道python最常见的解释器有哪些。](#知道python最常见的解释器有哪些。)
- [2 知道python的语法，缩进和符号对应的含义。](#知道python的语法，缩进和符号对应的含义。)
- [3 知道python所有关键字的含义和使用。](#知道python所有关键字的含义和使用。)
- [4 知道python中大部分常用的类型（布尔值，字符串类型，数字类型，序列，集合，字典，生成器...）。](#知道python中大部分常用的类型（布尔值，字符串类型，数字类型，序列，集合，字典，生成器...）。)
- [5 知道如何编写pythonic的代码（上下文管理器，推导表达式，装饰器，切片…）。](#知道如何编写pythonic的代码（上下文管理器，推导表达式，装饰器，切片…）。)
- [6 知道如何避免python中的一些坑，如可变的默认参数，闭包的迟绑定。](#知道如何避免python中的一些坑，如可变的默认参数，闭包的迟绑定。)
- [7 知道python中的函数式编程以及map、filter的使用。](#知道python中的函数式编程以及map、filter的使用。)
- [8 知道list，tuple，dict，set等的时间复杂度和空间复杂度。](#知道list，tuple，dict，set等的时间复杂度和空间复杂度。)
- [9 知道GIL的限制以及与多线程的关系。](#知道GIL的限制以及与多线程的关系。)
- [10 知道python的命名空间查找规则（LEGB）。](#知道python的命名空间查找规则（LEGB）。)
- [11 知道python多继承的查找规则（MRO）。](#知道python多继承的查找规则（MRO）。)
- [12 知道python 2.x和3.x的主要差异。](#知道python 2.x和3.x的主要差异。)
- [13 知道property的含义以及其描述器实现。](#知道property的含义以及其描述器实现。)
- [14 知道python中dict的底层实现，以及与OrderDict的关系。](#知道python中dict的底层实现，以及与OrderDict的关系。)

<!--more-->

- [15 知道`__slots__`的含义以及使用场景。](#知道`__slots__`的含义以及使用场景。)
- [16 知道如何定义和使用元类，了解其使用场景。](#知道如何定义和使用元类，了解其使用场景。)
- [17 知道python中的多进程和多线程模型，知道多进程和多线程下间的通信实现。](#知道python中的多进程和多线程模型，知道多进程和多线程下间的通信实现。)
- [18 知道进程池和线程池在python中对应的库和使用方式。](#知道进程池和线程池在python中对应的库和使用方式。)
- [19 知道python中多线程间常用的同步原语的使用方式。](#知道python中多线程间常用的同步原语的使用方式。)
- [20 知道python大多数常用的标准库以及其用途。](#知道python大多数常用的标准库以及其用途。)
- [21 知道python中type和object之间的关系。](#知道python中type和object之间的关系。)
- [22 知道深拷贝和浅拷贝在python中的实现方式。](#知道深拷贝和浅拷贝在python中的实现方式。)
- [23 知道python的调试工具（`logging`，`pdb`），知道`unittest`和`doctest`的使用。](#知道python的调试工具（`logging`，`pdb`），知道`unittest`和`doctest`的使用。)
- [24 知道python中的打包方式（`setup.py`）。](#知道python中的打包方式（`setup.py`）。)
- [25 知道PEP8常见的范式以及代码格式化方法。](#知道PEP8常见的范式以及代码格式化方法。)
- [26 知道str，bytes和字符串编码的关系以及其相互转换的方法。](#知道str，bytes和字符串编码的关系以及其相互转换的方法。)
- [27 知道python中的几种字符串拼接方式与效率对比。](#知道python中的几种字符串拼接方式与效率对比。)
- [28 知道鸭子类型（duck typing）的含义与其在python中的表现形式。](#知道鸭子类型（duck typing）的含义与其在python中的表现形式。)
- [29 知道函数和方法的区别，知道绑定方法（bound-method）与未绑定方法（unbound-method）的关系。](#知道函数和方法的区别，知道绑定方法（bound-method）与未绑定方法（unbound-method）的关系。)
- [30 知道`a = list()`和`a = []`的区别。](#知道`a = list()`和`a = []`的区别。)
- [31 知道dict和set的常见操作，知道set之间集合运算的语法糖。](#知道dict和set的常见操作，知道set之间集合运算的语法糖。)
- [32 知道asyncio的使用方式和使用场景。](#知道asyncio的使用方式和使用场景。)
- [33 知道如何用python实现最常用的设计模式。](#知道如何用python实现最常用的设计模式。)
- [34 知道如何用python做web编程，以及WSGI协议是什么。](#知道如何用python做web编程，以及WSGI协议是什么。)
- [35 知道如何利用`collections`，`itertools`，`operator`等模块来高效地操作容器对象。](#知道如何利用`collections`，`itertools`，`operator`等模块来高效地操作容器对象。)
- [36 知道使用python中正则表达式的匹配、查找、切分和替换。](#知道使用python中正则表达式的匹配、查找、切分和替换。)
- [37 知道如何使用`virtualenv`，清楚其用途。](#知道如何使用`virtualenv`，清楚其用途。)
- [38 知道如何使用`pip`，以及其与`requirements`文件的关系。](#知道如何使用`pip`，以及其与`requirements`文件的关系。)
- [39 知道python中序列化的常用库和接口（`json`，`pickle`）。](#知道python中序列化的常用库和接口（`json`，`pickle`）。)
- [40 知道`os`和`sys`库常用的方法，和操作文件和目录的方式。](#知道`os`和`sys`库常用的方法，和操作文件和目录的方式。)
- [41 知道python中`datetime`库的常用操作。](#知道python中`datetime`库的常用操作。)
- [42 知道普通文件/二进制文件读写的方式，知道`StringIO`和`BytesIO`的用途。](#知道普通文件/二进制文件读写的方式，知道`StringIO`和`BytesIO`的用途。)
- [43 知道以单下划线开头、双下划线开头和双下划线包围的变量分别代表着什么含义。](#知道以单下划线开头、双下划线开头和双下划线包围的变量分别代表着什么含义。)
- [44 知道`__init__`和`__new__`方法在class和type中分别的作用是什么。](#知道`__init__`和`__new__`方法在class和type中分别的作用是什么。)
- [45 知道类变量和实例变量的区别。](#知道类变量和实例变量的区别。)
- [46 知道`__dict__`在类中的含义，以及类属性和方法与`__dict__`的关系。](#知道`__dict__`在类中的含义，以及类属性和方法与`__dict__`的关系。)
- [47 知道Mixin模式以及在python中的用途。](#知道Mixin模式以及在python中的用途。)
- [48 知道python中生成器的实现以及其使用场景。](#知道python中生成器的实现以及其使用场景。)
- [49 知道python中抽象类的实现方式，以及其抽象基类模块，知道如何用python类实现一个抽象容器类型。](#知道python中抽象类的实现方式，以及其抽象基类模块，知道如何用python类实现一个抽象容器类型。)
- [50 知道`dict`和`UserDict`的关系，以及为什么有`UserDict`的存在。](#知道`dict`和`UserDict`的关系，以及为什么有`UserDict`的存在。)
- [51 知道普通方法，`classmethod`和`staticmethod`的区别。](#知道普通方法，`classmethod`和`staticmethod`的区别。)
- [52 知道装饰器中添加`functools.wraps`的含义与作用。](#知道装饰器中添加`functools.wraps`的含义与作用。)
- [53 知道`__getattr__`和`__getattribute__`的作用以及其顺序关系。](#知道`__getattr__`和`__getattribute__`的作用以及其顺序关系。)
- [54 知道python中性能测量的方式，如`cProfile`，`tracemalloc`。](#知道python中性能测量的方式，如`cProfile`，`tracemalloc`。)
- [55 知道python中自省的使用方式，知道`inspect`库的常见用法。](#知道python中自省的使用方式，知道`inspect`库的常见用法。)
- [56 知道python中的模块定义，以及导入模块的各种姿势。](#知道python中的模块定义，以及导入模块的各种姿势。)
- [57 知道python中弱引用的使用方式，知道python中gc的回收算法方式以及回收规则。](#知道python中弱引用的使用方式，知道python中gc的回收算法方式以及回收规则。)
- [58 知道`sys.settrace`和`sys.setprofile`在python中的用途和使用方式。](#知道`sys.settrace`和`sys.setprofile`在python中的用途和使用方式。)
- [59 知道`global`，`local`和`nonlocal`关键字在python中的含义和其使用场景。](#知道`global`，`local`和`nonlocal`关键字在python中的含义和其使用场景。)
- [60 知道python中`==`与`is`的区别。](#知道python中`==`与`is`的区别。)
- [61 知道`for-else`，`try-else`的含义和用途。](#知道`for-else`，`try-else`的含义和用途。)
- [62 知道`.pyc`文件的含义，清楚python代码大概的执行过程。](#知道`.pyc`文件的含义，清楚python代码大概的执行过程。)
- [63 知道python代码的中文编码处理，以及如何处理乱码。](#知道python代码的中文编码处理，以及如何处理乱码。)
- [64 知道`_`在python解释器中的含义。](#知道`_`在python解释器中的含义。)
- [65 知道python中格式化字符串的方式以及其常见格式语法。](#知道python中格式化字符串的方式以及其常见格式语法。)
- [66 知道python中常见的魔术方法和其使用方式。](#知道python中常见的魔术方法和其使用方式。)
- [67 知道python项目的文件/包的组织方式。](#知道python项目的文件/包的组织方式。)

<!--/TOC-->  



# 知道python最常见的解释器有哪些。

- CPython
   当从Python官方网站下载并安装好Python2.7后，就直接获得了一个官方版本的解释器：Cpython，这个解释器是用C语言开发的，所以叫CPython，在命名行下运行python，就是启动CPython解释器，CPython是使用最广的Python解释器。
- IPython
   IPython是基于CPython之上的一个交互式解释器，也就是说，IPython只是在交互方式上有所增强，但是执行Python代码的功能和CPython是完全一样的，好比很多国产浏览器虽然外观不同，但内核其实是调用了IE。
- PyPy
   PyPy是另一个Python解释器，它的目标是执行速度，PyPy采用JIT技术，对Python代码进行动态编译，所以可以显著提高Python代码的执行速度。JythonJython是运行在Java平台上的Python解释器，可以直接把Python代码编译成Java字节码执行。
- IronPython
   IronPython和Jython类似，只不过IronPython是运行在微软.Net平台上的Python解释器，可以直接把Python代码编译成.Net的字节码。

在Python的解释器中，使用广泛的是CPython，对于Python的编译，除了可以采用以上解释器进行编译外，技术高超的开发者还可以按照自己的需求自行编写Python解释器来执行Python代码，十分的方便!

# 知道python中的函数式编程

在 Python 中，函数是「头等公民」（first-class）。也就是说，函数与其他数据类型（如 int）处于平等地位。因而，我们可以将函数赋值给变量，也可以将其作为参数传入其他函数，将它们存储在其他数据结构（如 dicts）中，并将它们作为其他函数的返回值。

# 知道GIL的限制以及与多线程的关系。

在Python多线程下，每个线程的执行方式：
 1.获取GIL
 2.执行代码直到sleep或者是python虚拟机将其挂起。
 3.释放GIL

可见，某个线程想要执行，必须先拿到GIL，我们可以把GIL看作是“通行证”，并且在一个python进程中，GIL只有一个。拿不到通行证的线程，就不允许进入CPU执行。

在python2.x里，GIL的释放逻辑是当前线程遇见IO操作或者ticks计数达到100（ticks可以看作是python自身的一个计数器，专门做用于GIL，每次释放后归零，这个计数可以通过 sys.setcheckinterval 来调整），进行释放。而每次释放GIL锁，线程进行锁竞争、切换线程，会消耗资源。并且由于GIL锁存在，python里一个进程永远只能同时执行一个线程(拿到GIL的线程才能执行)，这就是为什么在多核CPU上，python的多线程效率并不高。

那么是不是python的多线程就完全没用了呢？在这里我们进行分类讨论：
 1、CPU密集型代码(各种循环处理、计数等等)，在这种情况下，ticks计数很快就会达到阈值，然后触发GIL的释放与再竞争（多个线程来回切换当然是需要消耗资源的），所以python下的多线程对CPU密集型代码并不友好。
 2、IO密集型代码(文件处理、网络爬虫等)，多线程能够有效提升效率(单线程下有IO操作会进行IO等待，造成不必要的时间浪费，而开启多线程能在线程A等待时，自动切换到线程B，可以不浪费CPU的资源，从而能提升程序执行效率)。所以python的多线程对IO密集型代码比较友好。

而在python3.x中，GIL不使用ticks计数，改为使用计时器（执行时间达到阈值后，当前线程释放GIL），这样对CPU密集型程序更加友好，但依然没有解决GIL导致的同一时间只能执行一个线程的问题，所以效率依然不尽如人意。

多核多线程比单核多线程更差，原因是单核下多线程，每次释放GIL，唤醒的那个线程都能获取到GIL锁，所以能够无缝执行，但多核下，CPU0释放GIL后，其他CPU上的线程都会进行竞争，但GIL可能会马上又被CPU0拿到，导致其他几个CPU上被唤醒后的线程会醒着等待到切换时间后又进入待调度状态，这样会造成线程颠簸(thrashing)，导致效率更低

# 知道python的命名空间查找规则（LEGB）。

LEGB含义解释：
 L-Local(function)；函数内的名字空间
 E-Enclosing function locals；外部嵌套函数的名字空间(例如closure)
 G-Global(module)；函数定义所在模块（文件）的名字空间
 B-Builtin(Python)；Python内置模块的名字空间

# 知道python多继承的查找规则（MRO）。

查看MRO
 新式类
 ClassA.mro()(py3 使用) /ClassA.**mro**(py2 使用)
 经典类
 Inspect.getmro(A)

# 知道python 2.x和3.x的主要差异。

1. print
    在进行程序调试时用得最多的语句可能就是 print，在 Python 2 中，print 是一条语句，而 Python3 中作为函数存在。有人可能就有疑问了，我在 Python2 中明明也看到当函数使用：

   

   ```bash
   # py2
   print("hello")  # 等价 print  ("hello")
   
   #py3
   print("hello")
   ```

   然而，你看到的只是表象，那么上面两个表达式有什么区别？从输出结果来看是一样的，但本质上，前者是把 ("hello")当作一个整体，而后者 print()是个函数，接收字符串作为参数。# py2

   

   ```python
   >>> print("hello", "world")
   ('hello', 'world')
   
   # py3 
   >>> print("hello", "world")
   hello world
   ```

   这个例子更明显了，在 py2 中，print语句后面接的是一个元组对象，而在 py3 中，print 函数可以接收多个位置参数。
    如果希望在 Python2 中 把 print 当函数使用，那么可以导入 future 模块 中的 print_function

   

   ```python
   # py2
   >>> print("hello", "world")
   ('hello', 'world') 
   >>> 
   >>> from __future__ import print_function
   >>> print("hello", "world")  
   hello world
   ```

2. 编码
    Python2 的默认编码是 asscii，这也是导致 Python2 中经常遇到编码问题的原因之一，至于是为什么会使用 asscii 作为默认编码，原因在于 Python这门语言诞生的时候还没出现 Unicode。
    Python 3 默认采用了 UTF-8 作为默认编码，因此你不再需要在文件顶部写 # coding=utf-8 了。

   

   ```ruby
   # py2
   >>> sys.getdefaultencoding()
   'ascii'
   # py3
   >>> sys.getdefaultencoding()
   'utf-8'
   ```

   网上不少文章说通过修改默认编码格式来解决 Python2 的编码问题，其实这是个大坑，不要这么干。

3. 字符串
    字符串是最大的变化之一，这个变化使得编码问题降到了最低可能。在 Python2 中，字符串有两个类型，一个是 unicode，一个是 str，前者表示文本字符串，后者表示字节序列，不过两者并没有明显的界限，开发者也感觉很混乱，不明白编码错误的原因，不过在 Python3 中两者做了严格区分，分别用 str 表示字符串，byte 表示字节序列，任何需要写入文本或者网络传输的数据都只接收字节序列，这就从源头上阻止了编码错误的问题。

4. True False
    True 和 False 在 Python2 中是两个全局变量（名字），在数值上分别对应 1 和 0，既然是变量，那么他们就可以指向其它对象，例如：

   

   ```none
   >>> True = False
   >>> True
   False
   >>> True is False
   True
   >>> False = "x"
   >>> False
   'x'
   >>> if False:
   ...     print("?")
   ... 
   ```

   ?
    显然，上面的代码违背了 Python 的设计哲学 Explicit is better than implicit.。
    而 Python3 修正了这个缺陷，True 和 False 变为两个关键字，永远指向两个固定的对象，不允许再被重新赋值。

   

   ```none
   >>> True = 1
     File "<stdin>", line 1
   SyntaxError: can't assign to keyword
   ```

5. 迭代器
    在 Python2 中很多返回列表对象的内置函数和方法在 Python 3 都改成了返回类似于迭代器的对象，因为迭代器的惰性加载特性使得操作大数据更有效率。Python2 中的 range 和 xrange 函数合并成了 range，如果同时兼容2和3，可以这样：

   

   ```python
   try:
       range = xrange
   except:
       pass
   ```

   另外，字典对象的 dict.keys()、dict.values() 方法都不再返回列表，而是以一个类似迭代器的 "view" 对象返回。高阶函数 map、filter、zip 返回的也都不是列表对象了。Python2的迭代器必须实现 next 方法，而 Python3 改成了 __next__

1. nonlocal
    我们都知道在Python2中可以在函数里面可以用关键字 global 声明某个变量为全局变量，但是在嵌套函数中，想要给一个变量声明为非局部变量是没法实现的，在Pyhon3，新增了关键字 nonlcoal，使得非局部变量成为可能。

# 知道property的含义以及其描述器实现。

一种用起来像是使用的实例属性一样的特殊属性，可以对应于某个方法



```python
# ############### 定义 ###############
class Foo:
    def func(self):
        pass

    # 定义property属性
    @property
    def prop(self):
        pass

# ############### 调用 ###############
foo_obj = Foo()
foo_obj.func()  # 调用实例方法
foo_obj.prop  # 调用property属性
```

property属性的定义和调用要注意一下几点：

- 定义时，在实例方法的基础上添加 @property 装饰器；并且仅有一个self参数
- 调用时，无需括号

对于京东商城中显示电脑主机的列表页面，每次请求不可能把数据库中的所有内容都显示到页面上，而是通过分页的功能局部显示，所以在向数据库中请求数据时就要显示的指定获取从第m条到第n条的所有数据这个分页的功能包括：根据用户请求的当前页和总数据条数计算出 m 和 n根据m 和 n 去数据库中请求数据



```ruby
# ############### 定义 ###############
class Pager:
    def __init__(self, current_page):
        # 用户当前请求的页码（第一页、第二页...）
        self.current_page = current_page
        # 每页默认显示10条数据
        self.per_items = 10 

    @property
    def start(self):
        val = (self.current_page - 1) * self.per_items
        return val

    @property
    def end(self):
        val = self.current_page * self.per_items
        return val

# ############### 调用 ###############
p = Pager(1)
p.start  # 就是起始值，即：m
p.end  # 就是结束值，即：n
```

从上述可见，Python的property属性的功能是：property属性内部进行一系列的逻辑计算，最终将计算结果返回。
 由此可见，property的作用就是 将一个属性的操作方法封装为一个属性，用户用起来就和操作普通属性完全一致,非常简单。

property属性的有两种方式

- 装饰器 即：在方法上应用装饰器
- 类属性 即：在类中定义值为property对象的类属性

## 装饰器方式

在类的实例方法上应用@property装饰器

Python中的类有经典类和新式类，新式类的属性比经典类的属性丰富。（ 如果类继object，那么该类是新式类 ，Python3中默认所有类为新式类）

- 经典类，具有一种@property装饰器



```none
class Goods:
    @property
    def price(self):
        return "laowang"
# ############### 调用 ###############
obj = Goods()
result = obj.price  # 自动执行 @property 修饰的 price 方法，并获取方法的返回值
print(result)
```

- 新式类，具有三种@property装饰器



```none
# ############### 定义 ###############
class Goods:
    """python3中默认继承object类
        以python2、3执行此程序的结果不同，因为只有在python3中才有@xxx.setter  @xxx.deleter
    """
    @property
    def price(self):
        print('@property')

    @price.setter
    def price(self, value):
        print('@price.setter')

    @price.deleter
    def price(self):
        print('@price.deleter')

# ############### 调用 ###############
obj = Goods()
obj.price          # 自动执行 @property 修饰的 price 方法，并获取方法的返回值
obj.price = 123    # 自动执行 @price.setter 修饰的 price 方法，并将  123 赋值给方法的参数
del obj.price      # 自动执行 @price.deleter 修饰的 price 方法
```

注意
 经典类中的属性只有一种访问方式，其对应被 @property 修饰的方法新式类中的属性有三种访问方式，并分别对应了三个被@property、@方法名.setter、@方法名.deleter修饰的方法由于新式类中具有三种访问方式，我们可以根据它们几个属性的访问特点，分别将三个方法定义为对同一个属性：获取、修改、删除



```ruby
class Goods(object):

    def __init__(self):
        # 原价
        self.original_price = 100
        # 折扣
        self.discount = 0.8

    @property
    def price(self):
        # 实际价格 = 原价 * 折扣
        new_price = self.original_price * self.discount
        return new_price

    @price.setter
    def price(self, value):
        self.original_price = value

    @price.deleter
    def price(self):
        del self.original_price

obj = Goods()
obj.price         # 获取商品价格
obj.price = 200   # 修改商品原价
del obj.price     # 删除商品原价
```

## 类属性方式，创建值为property对象的类属性

当使用类属性的方式创建property属性时，经典类和新式类无区别



```python
class Foo:
    def get_bar(self):
        return 'laotie'

    BAR = property(get_bar)

obj = Foo()
reuslt = obj.BAR  # 自动调用get_bar方法，并获取方法的返回值
print(reuslt)
```

property方法中有个四个参数

- 第一个参数是方法名，调用 对象.属性 时自动触发执行方法
- 第二个参数是方法名，调用 对象.属性 ＝ XXX 时自动触发执行方法
- 第三个参数是方法名，调用 del 对象.属性 时自动触发执行方法第四个参数是字符串，调用 对象.属性.__doc__ ，此参数是该属性的描述信息



```python
#coding=utf-8
class Foo(object):
    def get_bar(self):
        print("getter...")
        return 'laowang'

    def set_bar(self, value): 
        """必须两个参数"""
        print("setter...")
        return 'set value' + value

    def del_bar(self):
        print("deleter...")
        return 'laowang'

    BAR = property(get_bar, set_bar, del_bar, "description...")

obj = Foo()

obj.BAR  # 自动调用第一个参数中定义的方法：get_bar
obj.BAR = "alex"  # 自动调用第二个参数中定义的方法：set_bar方法，并将“alex”当作参数传入
desc = Foo.BAR.__doc__  # 自动获取第四个参数中设置的值：description...
print(desc)
del obj.BAR  # 自动调用第三个参数中定义的方法：del_bar方法
```

由于类属性方式创建property属性具有3种访问方式，我们可以根据它们几个属性的访问特点，分别将三个方法定义为对同一个属性：获取、修改、删除



```ruby
class Goods(object):

    def __init__(self):
        # 原价
        self.original_price = 100
        # 折扣
        self.discount = 0.8

    def get_price(self):
        # 实际价格 = 原价 * 折扣
        new_price = self.original_price * self.discount
        return new_price

    def set_price(self, value):
        self.original_price = value

    def del_price(self):
        del self.original_price

    PRICE = property(get_price, set_price, del_price, '价格属性描述...')

obj = Goods()
obj.PRICE         # 获取商品价格
obj.PRICE = 200   # 修改商品原价
del obj.PRICE     # 删除商品原价
```

## 总结

- 定义property属性共有两种方式，分别是【装饰器】和【类属性】，而【装饰器】方式针对经- - 典类和新式类又有所不同。
- 通过使用property属性，能够简化调用者在获取数据的流程
   x = property(get_x, set_x, del_x, "doc")

# 知道python中dict的底层实现。

python2.7之前字典是一个hash映射



```bash
# 给字典添加一个值，key为hello，value为word
my_dict['hello'] = 'word'

# 假设是一个空列表，hash表初始如下
enteies = [
    ['--', '--', '--'],
    ['--', '--', '--'],
    ['--', '--', '--'],
    ['--', '--', '--'],
    ['--', '--', '--'],
]hash_value = hash('hello')  # 假设值为 12343543 注：以下计算值不等于实际值，仅为演示使用
index = hash_value & ( len(enteies) - 1)  # 假设index值计算后等于3，具体的hash算法本文不做介绍

# 下面会将值存在enteies中
enteies = [
    ['--', '--', '--'],
    ['--', '--', '--'],
    ['--', '--', '--'],
    [12343543, 'hello', 'word'],  # index=3
    ['--', '--', '--'],
]

# 我们继续向字典中添加值
my_dict['color'] = 'green'

hash_value = hash('color')  # 假设值为 同样为12343543
index = hash_value & ( len(enteies) - 1)  # 假设index值计算后同样等于3

# 下面会将值存在enteies中
enteies = [
    ['--', '--', '--'],
    ['--', '--', '--'],
    ['--', '--', '--'],
    [12343543, 'hello', 'word'],  # 由于index=3的位置已经被占用，且key不一样，所以判定为hash冲突，继续向下寻找
    [12343543, 'color', 'green'],  # 找到空余位置，则保存
]
```

python2.7之后字典实现里新增加了一个index列表用来维护插入顺序。



```python
# 给字典添加一个值，key为hello，value为word
my_dict['hello'] = 'word'

# 假设是一个空列表，hash表初始如下
indices = [None, None, None, None, None, None]
enteies = []

hash_value = hash('hello')  # 假设值为 12343543
index = hash_value & ( len(indices) - 1)  # 假设index值计算后等于3，具体的hash算法本文不做介绍

# 会找到indices的index为3的位置，并插入enteies的长度
indices = [None, None, None, 0, None, None]
# 此时enteies会插入第一个元素
enteies = [
    [12343543, 'hello', 'word']
]

# 我们继续向字典中添加值
my_dict['haimeimei'] = 'lihua'

hash_value = hash('haimeimei')  # 假设值为 34323545
index = hash_value & ( len(indices) - 1)  # 假设index值计算后同样等于 0

# 会找到indices的index为0的位置，并插入enteies的长度
indices = [1, None, None, 0, None, None]
# 此时enteies会插入第一个元素
enteies = [
    [12343543, 'hello', 'word'],
    [34323545, 'haimeimei', 'lihua']
]
```

# 知道__slots__的含义以及使用场景。

正常情况下，当我们定义了一个class，创建了一个class的实例后，我们可以给该实例绑定任何属性和方法。但是，如果我们想要限制实例的属性怎么办？为了达到限制的目的，Python允许在定义class的时候，定义一个特殊的slots变量，来限制该class实例能添加的属性：



```ruby
>>> class Student:
...     __slots__ = ('name', 'age')
...
>>> s = Student()
>>> s.name = 'digg'
>>> s.age = '19'
>>> s.score = 99
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'Student' object has no attribute 'score'
```

由于’score’没有被放到__dict__中，所以不能绑定score属性，试图绑定score将得到AttributeError的错误。
 使用__dict__要注意，__dict__定义的属性仅对当前类实例起作用，对继承的子类是不起作用的：



```python
>>> class GraduateStudent(Student):
...     pass
...
>>> g = GraduateStudent()
>>> g.score = 9999
```

除非在子类中也定义__slots__，这样，子类实例允许定义的属性就是自身的__slots__加上父类的__slots__。
 __slots__ 存在的真正原因是用于优化，否则我们是以__dict__来存储实例属性，如果我们涉及到很多需要处理的数据，使用元组来存储当然会节省时间和内存。
 如果我们还是想要有可以随意添加实例属性，那么把 __dict__放入 __slots__ 中既可，实例会在元组中保存各个实例的属性，此外还支持动态创建属性，这些属性存储在常规的__dict__  中。优化完全就不见了。o(╯□╰)o比如这样：



```ruby
>>> class Student:
    __slots__ = ('name', 'age', '__dict__')

>>> s.score = 99
>>> s.score
99
```

# 知道如何定义和使用元类，了解其使用场景。

fuck 两句话轻松掌握 Python 最难知识点——元类 - 楚阳的文章 - 知乎
 [https://zhuanlan.zhihu.com/p/60461261](https://links.jianshu.com/go?to=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F60461261)

# 知道python中的多进程和多线程模型，知道多进程和多线程下间的通信实现。

深入Python多进程编程基础——图文版 - 老钱的文章 - 知乎
 [https://zhuanlan.zhihu.com/p/37370577](https://links.jianshu.com/go?to=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F37370577)
 深入Python进程间通信原理——图文版 - 老钱的文章 - 知乎
 [https://zhuanlan.zhihu.com/p/37370601](https://links.jianshu.com/go?to=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F37370601)

# 知道深拷贝和浅拷贝在python中的实现方式。

所谓浅拷贝就是对引用的拷贝，所谓深拷贝就是对对象的资源的拷贝。

- 浅拷贝是在另一块地址中创建一个新的变量或容器，但是容器内的元素的地址均是源对象的元素的地址的拷贝。也就是说新的容器中指向了旧的元素（ 新瓶装旧酒 ）。
- 深拷贝是在另一块地址中创建一个新的变量或容器，同时容器内的元素的地址也是新开辟的，仅仅是值相同而已，是完全的副本。也就是说（ 新瓶装新酒 ）。

# 知道python的调试工具，知道unittest和doctest的使用。

pdb是Python自带的一个库，为Python程序提供了一种交互式的源代码调试功能，包含了现代调试器应有的功能，包括设置断点、单步调试、查看源码、查看程序堆栈等。

如果读者具有C或C++程序语言背景，则一定听说过gdb。gdb是一个由GNU开源组织发布的、UNIX/LINUX操作系统下的、基于命令行的、功能强大的程序调试工具。如果读者之前使用过gdb，那么，几乎不用学习就可以直接使用pdb。pdb和gdb保持了一样的用法，这样可以降低工程师的学习负担和Python调试的难度，pdb提供的部分调试命令见下表。
 pdb命令行：



```bash
    1）进入命令行Debug模式，python -m pdb xxx.py

    2）h：（help）帮助

    3）w：（where）打印当前执行堆栈

    4）d：（down）执行跳转到在当前堆栈的深一层（个人没觉得有什么用处）

    5）u：（up）执行跳转到当前堆栈的上一层

    6）b：（break）添加断点

                 b 列出当前所有断点，和断点执行到统计次数

                 b line_no：当前脚本的line_no行添加断点

                 b filename:line_no：脚本filename的line_no行添加断点

                 b function：在函数function的第一条可执行语句处添加断点

    7）tbreak：（temporary break）临时断点

                 在第一次执行到这个断点之后，就自动删除这个断点，用法和b一样

    8）cl：（clear）清除断点

                cl 清除所有断点

                cl bpnumber1 bpnumber2... 清除断点号为bpnumber1,bpnumber2...的断点

                cl lineno 清除当前脚本lineno行的断点

                cl filename:line_no 清除脚本filename的line_no行的断点

    9）disable：停用断点，参数为bpnumber，和cl的区别是，断点依然存在，只是不启用

    10）enable：激活断点，参数为bpnumber

    11）s：（step）执行下一条命令

                如果本句是函数调用，则s会执行到函数的第一句

    12）n：（next）执行下一条语句

                如果本句是函数调用，则执行函数，接着执行当前执行语句的下一条。

    13）r：（return）执行当前运行函数到结束

    14）c：（continue）继续执行，直到遇到下一条断点

    15）l：（list）列出源码

                 l 列出当前执行语句周围11条代码

                 l first 列出first行周围11条代码

                 l first second 列出first--second范围的代码，如果second<first，second将被解析为行数

    16）a：（args）列出当前执行函数的函数

    17）p expression：（print）输出expression的值

    18）pp expression：好看一点的p expression

    19）run：重新启动debug，相当于restart

    20）q：（quit）退出debug

    21）j lineno：（jump）设置下条执行的语句函数

                只能在堆栈的最底层跳转，向后重新执行，向前可直接执行到行号

    22）unt：（until）执行到下一行（跳出循环），或者当前堆栈结束

    23）condition bpnumber conditon，给断点设置条件，当参数condition返回True的时候bpnumber断点有效，否则bpnumber断点无效
```

有两种不同的方法启动Python调试器，一种直接在命令行参数指定使用pdb模块启动Python文件，如下所示：python -m pdb test_pdb.py另一种方法是在Python代码中，调用pdb模块的set_trace方法设置一个断点，当程序运行自此时，将会暂停执行并打开pdb调试器。



```python
#/usr/bin/python
from __future__ import print_function
import pdb

def sum_nums(n):
    s=0
    for i in range(n):
        pdb.set_trace()
        s += i
        print(s)

if __name__ == '__main__':
    sum_nums(5)
```

两种方法并没有什么质的区别，选择使用哪一种方式主要取决于应用场景，如果程序文件较短，可以通过命令行参数的方式启动Python调试器；如果程序文件较大，则可以在需要调试的地方调用set_trace方法设置断点。无论哪一种方式，都会启动Python调试器，前者将在Python源码的第一行启动Python调试器，后者会在执行到pdb.set_trace()时启动调试器。启动Python调试器以后，就可以使用前面的调试命令进行调试，例如，下面这段调试代码，我们先通过bt命令查看了当前函数的调用堆栈，然后使用list命令查看了我们的Python代码，之后使用p命令打印了变量当前的取值，最后使用n执行下一行Python代码。



```python
lmx@host1:~/temp$ python test_pdb.py
> test_pdb.py(9)sum_nums()
-> s += i
(Pdb) bt
  test_pdb.py(13)<module>()
-> sum_nums(5)
> test_pdb.py(9)sum_nums()
-> s += i
(Pdb) list
  4
  5     def sum_nums(n):
  6         s=0
  7         for i in range(n):
  8             pdb.set_trace()
  9  ->         s += i
 10             print(s)
 11
 12     if __name__ == '__main__':
 13         sum_nums(5)
[EOF]
(Pdb) p s
0
(Pdb) p i
0
(Pdb) n
> test_pdb.py(10)sum_nums()
-> print(s)
```



# 知道python中的几种字符串拼接方式与效率对比。

- 使用+拼接
- 使用%拼接
- 使用join
- 使用f''f-string方式
   f-string方式出自PEP 498（Literal String Interpolation，字面字符串插值），从Python3.6版本引入。其特点是在字符串前加 f 标识，字符串中间则用花括号{}包裹其它字符串变量。 这种方式在可读性上秒杀format()方式，处理长字符串的拼接时，速度与join()方法相当。

# 知道鸭子类型（duck typing）的含义与其在python中的表现形式。

如果一个生物走起来像鸭子，叫起来像鸭子，他就是鸭子。对于Python编程来说，解释器不管你这个对象是什么类型，只管这个对象有没有对应的方法和属性。所以你希望他是什么类型，你就调用什么方法就行了，如果类型错误解释器会告诉你，你所调用的方法不存在。而可以使用"dir(obj)"这样的命令查看这个对象有什么方法和属性，当然也可以通过"type(obj)"来查看这个对象当前的类型。

# 知道函数和方法的区别，知道绑定方法（bound-method）与未绑定方法（unbound-method）的关系。

bound和unbound方法是个很简单的概念。在许多语言当中，类似于a.b()这样的调用方法是一个整体，但在Python中，它其实是两部分：获取属性a.b，调用()。所以也可以写成：



```swift
c = a.b
c()
```

跟直接调用a.b()是等效的。当a是某个类的实例，b是这个类的方法的时候，a.b的返回值就是bound method，也就是绑定方法。它实际上是个bound method对象，这个对象提前将self参数进行了绑定。实际演示一下就很容易懂了：



```ruby
>>> class A(object):
...     def b(self):
...         pass
...
>>> a = A()
>>> a.b
<bound method A.b of <__main__.A object at 0x0000000002C1ABA8>>
>>> A.b
<unbound method A.b>
>>>
```

相应的unbound method是没有绑定self的对象。在Python 3中，它就是普通的函数，在Python 2中则是unbound method类型，不过区别不大。

我们知道像A.b这样的方法实际上跟一个普通定义的函数没有本质区别，这个函数有一个参数self，所以实际上完全可以用A.b(a)的方式来调用，也就是手工将self参数指定为a。这也就是unbound method的用法。

而相应的，bound method是一个实现了**call**的对象，它自动将调用这个对象的过程重定向到A.b(a)上面，相当于通过functools.partial绑定了第一个参数的效果，所以叫做bound method。

# 知道asyncio的使用方式和使用场景。

协程

# 知道StringIO和BytesIO的用途。

StringIO 写



```ruby
>>> from io import StringIO
>>> f = StringIO()
>>> f.write('hello')
5
>>> f.write(' ')
1
>>> f.write('world!')
6
>>> print(f.getvalue())
hello world!
```

StringIO 读



```python
>>> from io import StringIO
>>> f = StringIO('Hello!\nHi!\nGoodbye!')
>>> while True:
...     s = f.readline()
...     if s == '':
...         break
...     print(s.strip())
...
Hello!
Hi!
Goodbye!
```

BytesIO 写



```python
>>> from io import StringIO
>>> f = StringIO('Hello!\nHi!\nGoodbye!')
>>> while True:
...     s = f.readline()
...     if s == '':
...         break
...     print(s.strip())
...
Hello!
Hi!
Goodbye!
```

BytesIO 读



```ruby
>>> from io import BytesIO
>>> f = BytesIO(b'\xe4\xb8\xad\xe6\x96\x87')
>>> f.read()
b'\xe4\xb8\xad\xe6\x96\x87'
```

作用在于，提供给某些只支持文件的api，比如gzip

# 知道以单下划线开头、双下划线开头和双下划线包围的变量分别代表着什么含义。

- 在python中单下划线代表私有，但也仅仅是名义上的私有，只是一种规范，告诉人们不要在外部使用它。但实际上python没有真正意义上的私有，我们一样可以在外部去调用私有方法或属性。
- 双下划线使用来避免父类方法被子类方法覆盖的。双下划线方法的本质是在方法前加了*类名，我们可以使用对象.*类名__方法名()，来在外部调用它。
- 前后双下滑线方法是python自己定义出来，供自己调用的。这些方法会在特定的条件下被触发执行。比如 __init__

# 知道__init__和__new__方法在class和type中分别的作用是什么。

__init__ 是初始化实例的方法，__new__是创建实例的方法，先执行__new__再执行__init__ 。

# 知道类变量和实例变量的区别。

- 类变量
   类变量指的是在类中，但在各个类方法外定义的变量。举个例子：



```python
class CLanguage :
    # 下面定义了2个类变量
    name = "C语言中文网"
    add = "http://c.biancheng.net"
    # 下面定义了一个say实例方法
    def say(self, content):
        print(content)
```

- 实例变量
   实例变量指的是在任意类方法内部，以“self.变量名”的方式定义的变量，其特点是只作用于调用方法的对象。另外，实例变量只能通过对象名访问，无法通过类名访问。



```ruby
class CLanguage :
    def __init__(self):
        self.name = "C语言中文网"
        self.add = "http://c.biancheng.net"
    # 下面定义了一个say实例方法
    def say(self):
        self.catalog = 13
```

# 知道**dict**在类中的含义，以及类属性和方法与**dict**的关系。

见__slots__

# 知道Mixin模式以及在python中的用途。

多继承

# 知道python中生成器的实现以及其使用场景。

首先有两个概念，**生成器函数**和**生成器表达式**
 生成器的思想是使用的时候再实时计算出来，优点在于能节约内存开销。以计算时间换内存空间

##### 生成器函数

求N以内的偶数
 一般的写法 先算出100以内的偶数，放到nums里，然后遍历出来



```python
def even_number(N):
    nums = []
    for i in range(N):
        if not (i%2):
            nums.append(i)
    return nums
nums = even_number(100)
for i in nums:
    print(i)
```

生成器写法



```python
def even_number(N):
    for i in range(N):
        if not (i%2):
            yield i
nums = even_number(100)
for i in nums:
    print(i)
```

注意观察`even_number`没有`return` 多了个`yield`
 `yield`表示返回一个值之后 挂起该函数，等待下一次执行。

# 知道python中抽象类的实现方式，以及其抽象基类模块，知道如何用python类实现一个抽象容器类型。

一、

继承有两种用途：



```python
"""
 一：继承基类的方法，并且做出自己的改变或者扩展（代码重用）
 二：声明某个子类兼容于某基类，定义一个接口类Interface，接口类中定义了一些接口名（就是函数名）
 且并未实现接口的功能，子类继承接口类，并且实现接口中的功能
 三、接口隔离原则：使用多个专门的接口，而不使用单一的总接口。即客户端不应该依赖那些不需要的接口
"""
"""
接口类：基于同一个接口实现的类  刚好满足接口隔离原则 面向对象开发的思想 规范
接口类，python 原生不支持  在python中，并没有接口类这种东西，即便不通过专门的模块定义接口，我们也应该有一些基本的概念
"""
```

**一、接口类单继承**

我们来看一段代码去了解为什么需要接口类



```python
class Alipay:
    def pay(self,money):
        print('支付宝支付了')
class Apppay:
    def pay(self,money):
        print('苹果支付了')
class Weicht:
    def pay(self,money):
        print('微信支付了')
def pay(payment,money):       # 支付函数，总体负责支付，对应支付的对象和要支付的金额
    payment.pay(money)
p=Alipay()
pay(p,200)      #支付宝支付了
```

这段代码，实现了一个有趣的功能，就是通过一个总体的支付函数，实现了不同种类的支付方式，不同是支付方式作为对象，传入函数中
 但是开发中容易出现一些问题，那就是类中的函数名不一致，就会导致调用的时候找不到类中对应方法，例题如下：



```python
class Alipay:
    def paying(self,money):    #这里类的方法可能由于程序员的疏忽，写的不是一致的pay,导致后面调用的时候找不到pay
        print('支付宝支付了')
class Apppay:
    def pay(self,money):
        print('苹果支付了')
class Weicht:
    def pay(self,money):
        print('微信支付了')
def pay(payment,money):       # 支付函数，总体负责支付，对应支付的对象和要支付的金额
    payment.pay(money)
p=Alipay()   #不报错
pay(p,200)      #调用执行就会报错，'Alipay' object has no attribute 'pay'
```

这时候怎么办呢？可以手动抛异常：**NotImplementedError**来解决开发中遇到的问题



```python
class payment:
    def pay(self):
        raise NotImplementedError    #手动抛异常
class Alipay:
    def paying(self, money):  # 这里类的方法不是一致的pay,导致后面调用的时候找不到pay
        print('支付宝支付了')
def pay(payment, money):  # 支付函数，总体负责支付，对应支付的对象和要支付的金额
    payment.pay(money)

p = Alipay()  # 不报错
pay(p, 200)  #调用的时候才会报错  'Alipay' object has no attribute 'pay'
```

**也可以借用abc模块来处理这种错误**



```python
from abc import abstractmethod, ABCMeta     #接口类中定义了一些接口名：Pay，且并未实现接口的功能，子类继承接口类，并且实现接口中的功能
class Payment(metaclass=ABCMeta):    #抽象出的共同功能Pay
    @abstractmethod
    def pay(self,money):pass    #这里面的pay 来源于下面类中的方法pay,意思把这个方法规范为统一的标准，另外建一个规范类Payment
class Alipay(Payment):
    def paying(self, money):    #这里出现paying和我们规范的pay不一样，那么在实例化 Alipay的时候就会报错
        print('支付宝支付了')
class Weicht(Payment):
    def pay(self,money):
        print('微信支付了')
def pay(pay_obj,money):
    pay_obj.pay(money)
p=Alipay()   #实例化的时候就会报错  Can't instantiate abstract class Alipay with abstract methods pay 之前两个例子都是在执行的时候报错，这里不一样的是实例化就会知道是哪里发生错误了
```



```python
"""
总结：用abc模块装饰后，在实例化的时候就会报错，那么当我们代码很长的时候，就可以早一点预知错误，所以以后在接口类类似问题中用这个模块
接口继承实质上是要求“做出一个良好的抽象，这个抽象规定了一个兼容接口，使得外部调用者无需关心具体细节，
可一视同仁的处理实现了特定接口的所有对象”——这在程序设计上，叫做归一化。
"""
```

**二、接口类多继承**



```kotlin
from abc import abstractmethod,ABCMeta
class Walk_animal(meteaclass=ABCMeta):
    @abstractmethod
    def walk(self):
        print('walk')
class Swim_animal(meteaclass=ABCMeta):
    @abstractmethod
    def swim(self):pass
class Fly_animal(metaclass=ABCMeta)
    @abstractmethod
    def fly(self):pass
#如果正常一个老虎有跑和跑的方法的话，我们会这么做
class Tiger:
    def walk(self):pass
    def swim(self):pass
#但是我们使用接口类多继承的话就简单多了，并且规范了相同功能
class Tiger(Walk_animal,Swim_animal):pass
#如果此时再有一个天鹅swan,会飞，走，游泳 那么我们这么做
class Swan(Walk_animal,Swim_animal, Fly_animal):pass
# 这就是接口多继承
```

为什么需要接口类

**三、抽象类**



```bash
#抽象类
# 抽象类的本质还是类，
# 指的是一组类的相似性，包括数据属性（如all_type）和函数属性（如read、write），而接口只强调函数属性的相似性
```



```python
"""
1.抽象类是一个介于类和接口直接的一个概念，同时具备类和接口的部分特性，可以用来实现归一化设计
2.在继承抽象类的过程中，我们应该尽量避免多继承；
3.而在继承接口的时候，我们反而鼓励你来多继承接口
# 一般情况下 单继承 能实现的功能都是一样的，所以在父类中可以有一些简单的基础实现
# 多继承的情况 由于功能比较复杂，所以不容易抽象出相同的功能的具体实现写在父类中

"""
```

为什么要有抽象类

从设计角度去看，如果类是从现实对象抽象而来的，那么抽象类就是基于类抽象而来的。

从实现角度来看，抽象类与普通类的不同之处在于：抽象类中有抽象方法，该类不能被实例化，只能被继承，且子类必须实现抽象方法。这一点与接口有点类似，但其实是不同的



```python
#一切皆文件
import abc #利用abc模块实现抽象类

class All_file(metaclass=abc.ABCMeta):
    all_type='file'
    @abc.abstractmethod #定义抽象方法，无需实现功能
    def read(self):
        '子类必须定义读功能'
        pass

    @abc.abstractmethod #定义抽象方法，无需实现功能
    def write(self):
        '子类必须定义写功能'
        pass

# class Txt(All_file):
#     pass
#
# t1=Txt() #报错,子类没有定义抽象方法

class Txt(All_file): #子类继承抽象类，但是必须定义read和write方法
    def read(self):
        print('文本数据的读取方法')

    def write(self):
        print('文本数据的读取方法')

class Sata(All_file): #子类继承抽象类，但是必须定义read和write方法
    def read(self):
        print('硬盘数据的读取方法')

    def write(self):
        print('硬盘数据的读取方法')

class Process(All_file): #子类继承抽象类，但是必须定义read和write方法
    def read(self):
        print('进程数据的读取方法')

    def write(self):
        print('进程数据的读取方法')

wenbenwenjian=Txt()

yingpanwenjian=Sata()

jinchengwenjian=Process()

#这样大家都是被归一化了,也就是一切皆文件的思想
wenbenwenjian.read()
yingpanwenjian.write()
jinchengwenjian.read()

print(wenbenwenjian.all_type)
print(yingpanwenjian.all_type)
print(jinchengwenjian.all_type)
```

**四、扩展：**



```kotlin
不管是抽象类还是接口类 ： 面向对象的开发规范 所有的接口类和抽象类都不能实例化
java ：
java里的所有类的继承都是单继承,所以抽象类完美的解决了单继承需求中的规范问题
但对于多继承的需求，由于java本身语法的不支持，所以创建了接口Interface这个概念来解决多继承的规范问题
python:
python中没有接口类  ：
   python中自带多继承 所以我们直接用class来实现了接口类
python中支持抽象类  ： 一般情况下 单继承  不能实例化
   且可以实现python代码
```

**五、注意**



```python
"""
1.多继承问题
在继承抽象类的过程中，我们应该尽量避免多继承；
而在继承接口的时候，我们反而鼓励你来多继承接口

2.方法的实现
在抽象类中，我们可以对一些抽象方法做出基础实现；
而在接口类中，任何方法都只是一种规范，具体的功能需要子类实现
"""
```

# 知道普通方法，classmethod和staticmethod的区别。

Python面向对象编程中，类中定义的方法可以是 @classmethod 装饰的**类方法**，也可以是 @staticmethod 装饰的**静态方法**，用的最多的还是不带装饰器的**实例方法**，如果把这几个方法放一块，对初学者来说无疑是一头雾水，那我们该如何正确地使用它们呢？

先来看一个简单示例：



```python
class A(object):
    def m1(self, n):
        print("self:", self)

    @classmethod
    def m2(cls, n):
        print("cls:", cls)

    @staticmethod
    def m3(n):
        pass

a = A()
a.m1(1) # self: <__main__.A object at 0x000001E596E41A90>
A.m2(1) # cls: <class '__main__.A'>
A.m3(1)
```

我在类中一共定义了3个方法，m1 是实例方法，第一个参数必须是 self（约定俗成的）。m2 是类方法，第一个参数必须是cls（同样是约定俗成），m3 是静态方法，参数根据业务需求定，可有可无。当程序运行时，大概发生了这么几件事（结合下面的图来看）。

- 第一步：代码从第一行开始执行 class 命令，此时会创建一个类 A 对象（没错，类也是对象，一切皆对象嘛）同时初始化类里面的属性和方法，记住，此刻实例对象还没创建出来。
- 第二、三步：接着执行 a=A()，系统自动调用类的构造器，构造出实例对象 a
- 第四步：接着调用 a.m1(1) ，m1 是实例方法，内部会自动把实例对象传递给 self 参数进行绑定，也就是说， self 和 a 指向的都是同一个实例对象。
- 第五步：调用A.m2(1)时，python内部隐式地把类对象传递给 cls 参数，cls 和 A 都指向类对象。

严格意义上来说，左边的都是变量名，是对象的引用，右边才是真正的对像，为了描述方便，我直接把 a 称为对象，你应该明白我说对象其实是它所引用右边的那个真正的对象。

再来看看每个方法各有什么特性

## 实例方法



```css
print(A.m1)
# A.m1在py2中显示为<unbound method A.m1>
<function A.m1 at 0x000002BF7FF9A488>

print(a.m1)
<bound method A.m1 of <__main__.A object at 0x000002BF7FFA2BE0>>
```

A.m1是一个还没有绑定实例对象的方法，对于未绑定方法，调用 A.m1 时必须显示地传入一个实例对象进去，而 a.m1是已经绑定了实例的方法，python隐式地把对象传递给了self参数，所以不再手动传递参数，这是调用实例方法的过程。



```css
A.m1(a, 1)
# 等价  
a.m1(1)
```

如果未绑定的方法 A.m1 不传实例对象给 self 时，就会报参数缺失错误，在 py3 与 py2 中，两者报的错误不一致，python2 要求第一个参数self是实例对象，而python3中可以是任意对象。



```tsx
A.m1(1)
TypeError: m1() missing 1 required positional argument: 'n'
```

## 类方法



```bash
print(A.m2)
<bound method A.m2 of <class '__main__.A'>>

print(a.m2)
<bound method A.m2 of <class '__main__.A'>>
```

m2是类方法，不管是 A.m2 还是 a.m2，都是已经自动绑定了类对象A的方法，对于后者，因为python可以通过实例对象a找到它所属的类是A，找到A之后自动绑定到 cls。



```css
A.m2(1) 
 # 等价
 a.m2(1)
```

这使得我们可以在实例方法中通过使用 self.m2()这种方式来调用类方法和静态方法。



```ruby
def m1(self, n):
    print("self:", self)
    self.m2(n)
```

## 静态方法



```bash
print(A.m3)
<function A.m3 at 0x000002BF7FF9A840>

print(a.m3)
<function A.m3 at 0x000002BF7FF9A840>
```

m3是类里面的一个静态方法，跟普通函数没什么区别，与类和实例都没有所谓的绑定关系，它只不过是碰巧存在类中的一个函数而已。不论是通过类还是实例都可以引用该方法。



```css
A.m3(1) 
 # 等价
 a.m3(1)
```

以上就是几个方法的基本介绍。现在把几个基本的概念理清楚了，那么现在来说说几个方法之间的使用场景以及他们之间的优缺点。

### 应用场景

静态方法的使用场景：

如果在方法中不需要访问任何实例方法和属性，纯粹地通过传入参数并返回数据的功能性方法，那么它就适合用静态方法来定义，它节省了实例化对象的开销成本，往往这种方法放在类外面的模块层作为一个函数存在也是没问题的，而放在类中，仅为这个类服务。例如下面是微信公众号开发中验证微信签名的一个例子，它没有引用任何类或者实例相关的属性和方法。



```python
from hashlib import sha1
import tornado.web

class SignatureHandler(tornado.web.RequestHandler):
    def get(self):
        """
         根据签名判断请求是否来自微信
        """
        signature = self.get_query_argument("signature", None)
        echostr = self.get_query_argument("echostr", None)
        timestamp = self.get_query_argument("timestamp", None)
        nonce = self.get_query_argument("nonce", None)
        if self._check_sign(TOKEN, timestamp, nonce, signature):
            logger.info("微信签名校验成功")
            self.write(echostr)
        else:
            self.write("你不是微信发过来的请求")

    @staticmethod
    def _check_sign(token, timestamp, nonce, signature):
        sign = [token, timestamp, nonce]
        sign.sort()
        sign = "".join(sign)
        sign = sha1(sign).hexdigest()
        return sign == signature
```

类方法的使用场景有：

作为工厂方法创建实例对象，例如内置模块 datetime.date 类中就有大量使用类方法作为工厂方法，以此来创建date对象。



```ruby
class date:

    def __new__(cls, year, month=None, day=None):
        self = object.__new__(cls)
        self._year = year
        self._month = month
        self._day = day
        return self

    @classmethod
    def fromtimestamp(cls, t):
        y, m, d, hh, mm, ss, weekday, jday, dst = _time.localtime(t)
        return cls(y, m, d)

    @classmethod
    def today(cls):
        t = _time.time()
        return cls.fromtimestamp(t)
```

如果希望在方法裡面调用静态类，那么把方法定义成类方法是合适的，因为要是定义成静态方法，那么你就要显示地引用类A，这对继承来说可不是一件好事情。



```ruby
class A:

    @staticmethod
    def m1()
        pass

    @staticmethod
    def m2():
        A.m1() # bad

    @classmethod
    def m3(cls):
        cls.m1() # good
```

# 知道python中==与is的区别。

== 是判断值是否相等 is 是判断指针是否是同一个变量

# 知道装饰器中添加functools.wraps的含义与作用。

functools.wraps 旨在消除装饰器对原函数造成的影响，即对原函数的相关属性进行拷贝，已达到装饰器不修改原函数的目的。

# 知道**getattr**和**getattribute**的作用以及其顺序关系。

在阅读很多优秀的python框架代码时，getattr(), __getattr__(), __getattribute__()和__get__()这几个方法都是很常见的，它们都是在什么时候 被调用呢，用处又是什么，然后它们之前有哪些关联呢。下面来通过例子分析一下。getattr()和另外三个方法都是魔法函数不同的是，getattr()是python内置的一个函数，它可以用来获取对象的属性和方法。例子如下:



```python
class A():
    a = 5
    def __init__(self, x):
        self.x = x

    def hello(self):
        return 'hello func'

a = A(10)

print(getattr(a, 'x'))  #相当于a.x
print(getattr(a, 'y', 20))  #相当于a.y，因为a.y并不存在，所以返回第三个参数作为默认值
print(getattr(a, 'hello')())  # 相当于a.hello()

print(getattr(A, 'a'))  # 相当于A.a这段代码的输出结果是：10
20
hello func
5
```

可以看出，getattr()可以用来获取对像的属性和方法，需要注意的是，如果通过getattr()来尝试获取对象里并不存在的属性时没有添加第三个默认值，代码会 报错，如下所示:



```bash
print(getattr(a, 'y'))
```

运行会报异常提示找不到属于y:



```ruby
Traceback (most recent call last):
  File "app/test.py", line 32, in <module>
    print(getattr(a, 'y'))
AttributeError: 'A' object has no attribute 'y'
```

__getattr()**与__getattribute**()这两个是类对象的魔法函数，在访问对象属性的时候会被调用，但是两者之间也有一点区别, 我们通过代码来看一下:



```ruby
class A(object):
  def __init__(self, x):
    self.x = x

  def hello(self):
    return 'hello func'

  def __getattr__(self, item):
    print('in __getattr__')
    return 100

  def __getattribute__(self, item):
    print('in __getattribute__')
    return super(A, self).__getattribute__(item)

a = A(10)
print(a.x)
print(a.y)运行代码，得到下面输出:in __getattribute__
10
in __getattribute__
in __getattr__
100
```

可以看出，在获到对象属性时，__getattribute__()是一定会被调用的，无论属性存不存在，首先都会调用这个魔法方法。 如果调用像a.y这种不存在的对象时，调用__getattribute__()找不到y这个属性，就会再调用__getattr__()这个魔法方法，

可以通过在这个方法里实 来设置属性不存在时的默认值。使用上面的getattr()方法获取属性时，也是同样的调用关系，只不过只有在getattr()带第三个参数作为默认值时，才会调用 __getattr__()方法。

**__get__()**
 __get__()方法是描述符方法之一，和他经常配套使用的是__set__()方法，通过描述符，可以将访问对象属性转变为调用描述符方法。这在ORM中被经常使用， 可以通过描述符方法进行参数格式验证。



```python
import random

class Die(object):
    def __init__(self, sides=6):
        self.sides = sides

    def __get__(self, instance, owner):
        print('Die __get__()')
        return int(random.random() * self.sides) + 1

    def __set__(self, instance, value):
        print('Die __set__()')

class Game(object):
    d6 = Die()
    d10 = Die(sides=10)
    d20 = Die(sides=20)

game = Game()
print(game.d6)

game.d6 = 10
```

这段代码的输出结果是:



```php
Die __get__()
5
Die __set__()
```

这就是描述符的作用, 使用描述符可以让我们在获取或者给对象赋值时对数据值进行一些特殊的加工和处理。

python里经常使用的@property装饰器其实就是 通过描述符的方式实现的。 当然关于描述符，我们还需要知道，

如果一个类仅仅实现了__get__()方法，那么这个类被称为非数据描述符；如果一个类实现在__get__()并且还实现在 __set__()和__del__()中的一个，这个类就被称为数据描述符。

# 知道python中自省的使用方式，知道inspect库的常见用法。

我们用自省最重要的几个目的就是，让python回答我们：对象名称是什么？对象能做什么？对象是什么类型？对象的一些基础信息是什么？好了，废话不多说，看代码就知道我指的函数是什么函数。代码：



```bash
s_obj = "hello world"

# 检查对象类型
print(type(s_obj))

# 检查对象ID
print(id(s_obj))

# 检查对象是否包含某个属性
print(hasattr(s_obj, '__doc__'))
print(hasattr(dir, '__doc__'))

# 获取某个对象的属性值
print(getattr(s_obj, '__doc__'))
```

type和id函数之前都有用过就不讲了，hasattr是用来检测对象是否包含某个属性的，如果是就返回True否则返回False。getattr是用来获取属性值的。python的自省远远不止这些，比如前面章节讲到的成员运算符isinstance()也是一个python自省的函数。不仅如此，还可以检测某个对象是否属于某个类、或者某个类是否是别的类的字类等等。这些会在我后面讲述自定义类的时候讲到。

**inspect：**

1.对类，模块的操作，成员，类，模块类型的判断

2.获取源码

3.获取类或函数的参数信息

4.解析堆栈

# 知道python中弱引用的使用方式，知道python中gc的回收算法方式以及回收规则。

和许多其它的高级语言一样，Python使用了垃圾回收器来自动销毁那些不再使用的对象。每个对象都有一个引用计数，当这个引用计数为0时Python能够安全地销毁这个对象。

引用计数会记录给定对象的引用个数，并在引用个数为零时收集该对象。由于一次仅能有一个对象被回收，引用计数无法回收循环引用的对象。

一组相互引用的对象若没有被其它对象直接引用，并且不可访问，则会永久存活下来。一个应用程序如果持续地产生这种不可访问的对象群组，就会发生内存泄漏。

在对象群组内部使用弱引用（即不会在引用计数中被计数的引用）有时能避免出现引用环，因此弱引用可用于解决循环引用的问题。

在计算机程序设计中，弱引用，与强引用相对，是指不能确保其引用的对象不会被垃圾回收器回收的引用。一个对象若只被弱引用所引用，则可能在任何时刻被回收。弱引用的主要作用就是减少循环引用，减少内存中不必要的对象存在的数量。

使用weakref模块，你可以创建到对象的弱引用，Python在对象的引用计数为0或只存在对象的弱引用时将回收这个对象。

创建弱引用
 你可以通过调用weakref模块的ref(obj[,callback])来创建一个弱引用，obj是你想弱引用的对象，callback是一个可选的函数，当因没有引用导致Python要销毁这个对象时调用。回调函数callback要求单个参数（弱引用的对象）。

一旦你有了一个对象的弱引用，你就能通过调用弱引用来获取被弱引用的对象。



```ruby
>>>>　import　sys
>>>　import　weakref
>>>　class　Man:
　　def　__init__(self,name):
　　　　print　self.name = name
　　　　
>>>　o　=　Man('Jim')
>>>　sys.getrefcount(o)   
2
>>>　r　=　weakref.ref(o)　#　创建一个弱引用
>>>　sys.getrefcount(o)　#　引用计数并没有改变
2
>>>　r
<weakref　at　00D3B3F0;　to　'instance'　at　00D37A30>　#　弱引用所指向的对象信息
>>>　o2　=　r()　#　获取弱引用所指向的对象
>>>　o　is　o2
True
>>>　sys.getrefcount(o)
3
>>>　o　=　None
>>>　o2　=　None
>>>　r　#　当对象引用计数为零时，弱引用失效。
<weakref　at　00D3B3F0;　dead>de>
```

上面的代码中，我们使用sys包中的getrefcount()来查看某个对象的引用计数。需要注意的是，当使用某个引用作为参数，传递给getrefcount()时，参数实际上创建了一个临时的引用。因此，getrefcount()所得到的结果，会比期望的多1。

一旦没有了对这个对象的其它的引用，调用弱引用将返回None，因为Python已经销毁了这个对象。 注意：大部分的对象不能通过弱引用来访问。

weakref模块中的getweakrefcount(obj)和getweakrefs(obj)分别返回弱引用数和关于所给对象的引用列表。

弱引用对于创建对象(这些对象很费资源)的缓存是有用的。

# 知道global，local和nonlocal关键字在python中的含义和其使用场景。

默认变量都是local
 **global**
 global 把局部变量设置为全局变量



```python
name = '张三'
def fun():
  global name
  name = '李四'
def fun2():
  print(name)
```



```ruby
>>> fun2()
张三
>>> fun()
>>> fun2()
李四
>>> 
```

**nonlocal**
 nonlocal 把局部变量，“下放”到上层空间用



```python
name = '张二'
def fun():
 name = '张三'
 def fun2():
    def fun3():
      nonlocal name
      name = '李四'
    print(name)
    fun3()
    print(name)
  print(name)
  fun2()
  print(name)
fun()
print(name)
```



```shell
>>> fun()
张三
张三
李四
李四
>>> name
'张二'
```

# 知道for-else，try-else的含义和用途。

- for-else
   for 循环里没有遇到break，自然循环结束后执行else里的语句
- try-else
   try 里的语句正常执行，没有遇到except，正常执行完成以后执行else

# 知道.pyc文件的含义，清楚python代码大概的执行过程。

将.py形式的程序编译成中间式文件（byte-compiled）的.pyc文件，这么做的目的就是为了加快下次执行文件的速度。

运行python文件的时候，就会自动首先查看是否具有.pyc文件，如果有的话，而且.py文件的修改时间和.pyc的修改时间一样，就会读取.pyc文件，否则，Python就会读原来的.py文件。

**执行过程**

- 完成模块的加载和链接；
- 将源代码翻译为PyCodeObject对象（这货就是字节码），并将其写入内存当中（方便CPU读取，起到加速程序运行的作用）；
- 从上述内存空间中读取指令并执行；
- 程序结束后，根据命令行调用情况（即运行程序的方式）决定是否将PyCodeObject写回硬盘当中（也就是直接复制到.pyc或.pyo文件中）；
- 之后若再次执行该脚本，则先检查本地是否有上述字节码文件。有则执行，否则重复上述步骤。

# 知道python中常见的魔术方法和其使用方式。

魔法方法就是可以给你的类增加魔力的特殊方法，如果你的对象实现了这些方法中的某一个，那么这个方法就会在特殊的情况下被 Python 所调用，你可以定义自己想要的行为，而这一切都是自动发生的。

它们经常是两个下划线包围来命名的（比如 **init**/**new**等等），Python的魔法方法是非常强大的。如果你学习过Java，那你会发现Python中的魔法方法像是Java中的重载，Python中的魔法方法可以理解为：对类中的内置方法的重载，注意这里不是重写。

举个例子，Python中有个比较操作符==用来比较两个变量的大小，而这个操作符是通过内置函数**eq**来实现的，所以我们只需要通过改变这个内置函数代码，就可以改变重新定义这个操作符的行为。

我们定义一个类Word，继承自str类，现需要重新定义该类的操作符==，使这个操作符用来判断两个字符串长度是否相等，而不是通过字母顺序判断两个字符串是否相等。注意该变化只适用于Word类，而不适用于其它类。



```python
class Word(str):
    def __eq__(self, other):
        return len(self) == len(other)
a = Word('asd')
b = Word('ips')
print(a == b)
```

python中常用魔术方法有



![magic_methods](/images/magic_methods.png)



## 拓展阅读

[**学好Python必读的几篇文章**](https://feilong.me/2011/01/recommended-entries-for-you-to-master-python)

