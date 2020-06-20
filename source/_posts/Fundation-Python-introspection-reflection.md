---
title: Python 自省与反射
date: 2020-04-29 11:11:08
categories:
	- Python
	- Fundation
tags:
	- 自省
	- 反射
---

## **自省**

In computing, **type introspection** is the ability of a program to examine the type or properties of an object at runtime. Some programming languages possess this capability.
在计算机科学中，内省是指计算机程序在运行时（Run time）检查对象（Object）类型（以及属性等）的一种能力，通常也可以称作运行时类型检查。

|       方法       |                 作用                 | 类型 |
| :--------------: | :----------------------------------: | :--: |
|      help()      |    查看函数或者模块用途的详细说明    | 自省 |
|    **dir()**     |         **返回对象所有属性**         | 自省 |
|    **type()**    |           **查看对象类型**           | 自省 |
| **isinstance()** | **判断一个对象是否是一个已知的类型** | 自省 |
|   issubclass()   |    判断一个类是不是另一个类的子类    | 自省 |
|       id()       |              返回地址值              | 自省 |
|    callable()    |          判断对象是否可调用          | 自省 |

<!--more-->

## 自省的常见使用方式

### help()

help() 函数用于查看函数或模块用途的**详细说明**。**主要在IDE环境下使用**，接受任何拥有函数或者方法的对象，打印出对象所有的函数和文档字符串。

```python
Welcome to Python 3.6's help utility!

If this is your first time using Python, you should definitely check out
the tutorial on the Internet at https://docs.python.org/3.6/tutorial/.

Enter the name of any module, keyword, or topic to get help on writing
Python programs and using Python modules.  To quit this help utility and
return to the interpreter, just type "quit".

To get a list of available modules, keywords, symbols, or topics, type
"modules", "keywords", "symbols", or "topics".  Each module also comes
with a one-line summary of what it does; to list the modules whose name
or summary contain a given string such as "spam", type "modules spam".

help> 
# 可以继续输入 keywords、modules 等了解

```

对于自定义的类、函数、或者模块等，也可以打印帮助信息。

```python
class Demo:
    """
    this is a Demo
    """
    classVar = 0

    def __init__(self):
        self.var1 = 1

    def output(self):
        print(self.var1)

if __name__ == '__main__':
    help(Demo)
    
```



### dir()

**dir()** 函数可能是 Python 自省机制中最著名的部分了。它返回传递给它的任何对象的属性名称经过排序的列表。如果不指定对象，则**dir()** 返回当前作用域中的名称。

> **dir() 函数适用于所有对象类型，包括字符串、整数、列表、元组、字典、函数、定制类、类实例和类方法。**
>

```python
# 查看当前作用域中的属性名称
print(dir())
-------------------
['__annotations__', '__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__']


# 查看 __builtins__ 模块的属性
print(dir(__builtins__))
——————————————————————
['ArithmeticError', 'AssertionError', 'AttributeError', 'BaseException', 'BlockingIOError', 'BrokenPipeError', 'BufferError', 'BytesWarning', 'ChildProcessError', 'ConnectionAbortedError', 'ConnectionError', 'ConnectionRefusedError', 'ConnectionResetError', 'DeprecationWarning', 'EOFError', 'Ellipsis', 'EnvironmentError', 'Exception', 'False', 'FileExistsError', 'FileNotFoundError', 'FloatingPointError', 'FutureWarning', 'GeneratorExit', 'IOError', 'ImportError', 'ImportWarning', 'IndentationError', 'IndexError', 'InterruptedError', 'IsADirectoryError', 'KeyError', 'KeyboardInterrupt', 'LookupError', 'MemoryError', 'ModuleNotFoundError', 'NameError', 'None', 'NotADirectoryError', 'NotImplemented', 'NotImplementedError', 'OSError', 'OverflowError', 'PendingDeprecationWarning', 'PermissionError', 'ProcessLookupError', 'RecursionError', 'ReferenceError', 'ResourceWarning', 'RuntimeError', 'RuntimeWarning', 'StopAsyncIteration', 'StopIteration', 'SyntaxError', 'SyntaxWarning', 'SystemError', 'SystemExit', 'TabError', 'TimeoutError', 'True', 'TypeError', 'UnboundLocalError', 'UnicodeDecodeError', 'UnicodeEncodeError', 'UnicodeError', 'UnicodeTranslateError', 'UnicodeWarning', 'UserWarning', 'ValueError', 'Warning', 'WindowsError', 'ZeroDivisionError', '__build_class__', '__debug__', '__doc__', '__import__', '__loader__', '__name__', '__package__', '__spec__', 'abs', 'all', 'any', 'ascii', 'bin', 'bool', 'bytearray', 'bytes', 'callable', 'chr', 'classmethod', 'compile', 'complex', 'copyright', 'credits', 'delattr', 'dict', 'dir', 'divmod', 'enumerate', 'eval', 'exec', 'exit', 'filter', 'float', 'format', 'frozenset', 'getattr', 'globals', 'hasattr', 'hash', 'help', 'hex', 'id', 'input', 'int', 'isinstance', 'issubclass', 'iter', 'len', 'license', 'list', 'locals', 'map', 'max', 'memoryview', 'min', 'next', 'object', 'oct', 'open', 'ord', 'pow', 'print', 'property', 'quit', 'range', 'repr', 'reversed', 'round', 'set', 'setattr', 'slice', 'sorted', 'staticmethod', 'str', 'sum', 'super', 'tuple', 'type', 'vars', 'zip']

# 查看其他类型的属性
print(dir('just a string')) # string
print(dir(42))   # Integer 
print(dir([]))   # List 
print(dir(()))   # Tuple 
print(dir({}))   # Dictionary 
print(dir(dir))  # Function (functions are also objects)

```

#### 将 dir() 运用于定制类、类实例和属性，下例可以说明 Python 自省能力的动态本质

```python
class Person(object):
    """Person class."""
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def intro(self):
        """Return an introduction."""
        return "Hello, my name is %s and I'm %s." % (self.name, self.age)

bob = Person("Robert", 35)  # Create a Person instance
joe = Person("Joseph", 17)  # Create another Person instance

joe.sport = "football"   # Assign a new attribute to one instance


print(dir(Person))  # Attributes of the Person class
----------
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'intro']

print(dir(bob))
----------
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'age', 'intro', 'name']

print(dir(joe))  # Note that joe has an additional attribute 注意 joe 多了一个'sport' 属性
----------
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'age', 'intro', 'name', 'sport']

print(bob.intro())
----------
Hello, my name is Robert and I'm 35.

print(dir(bob.intro))
----------
['__call__', '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__func__', '__ge__', '__get__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__self__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__']
```

#### 注意 dir() vs help()

- dir() : 只是得到方法或者属性的名称
- help() : 不但可以得到对象的方法和属性名称, 同时也可以得到这些方法或者属性的使用方式的描述



### type()

type() 函数属于 Python 内置函数，**通常用来查看某个变量的具体类型**。其实，type() 函数还有一个更高级的用法，即创建一个自定义类型（也就是创建一个类）。

type() 函数的语法格式有 2 种，分别如下：

-  **type(obj) **

用来查看某个变量（类对象）的具体类型，obj 表示某个变量或者类对象。

- **type(name, bases, dict)**

用来创建类，其中 name 表示类的名称；bases 表示一个父类的元组；dict 表示一个字典，即类内定义的属性方法和值组成的键值对。

```python
# 示例

# 实例方法
def instancetest(self):
	print("this is a instance method")

# 类方法
@classmethod
def classtest(cls):
	print("this is a class method")

# 静态方法
@staticmethod
def statictest():
	print("this is a static method")

# 创建类
test_property = {"name": "tom", "instancetest": instancetest, "classtest": classtest, "statictest": statictest}
Test = type("Test", (), test_property)

# 创建对象
test = Test()
# 调用方法
print(test.name)
test.instancetest()
test.classtest()
test.statictest()

-----------------
tom
this is a instance method
this is a class method
this is a static method
```

#### 注意：type vs object

type为对象的顶点，所有对象都创建自type。

object为类继承的顶点，所有类都继承自object。

python中万物皆对象，一个python对象可能拥有两个属性，`__class__` 和 `__base__`，`__class__` 表示这个对象是谁创建的，`__base__` 表示一个类的父类是谁。

```python
print(object.__class__)
print(type.__base__)
---------------
<class 'type'>
<class 'object'>
```

- type类继承自object
- object的对象创建自type



### isinstance()

```python
# 相关源码
def isinstance(x, A_tuple): # real signature unknown; restored from __doc__
    """
    Return whether an object is an instance of a class or of a subclass thereof.
    
    A tuple, as in ``isinstance(x, (A, B, ...))``, may be given as the target to
    check against. This is equivalent to ``isinstance(x, A) or isinstance(x, B)
    or ...`` etc.
    """
    pass
```



### issubclass()

```python
# 相关源码
def issubclass(x, A_tuple): # real signature unknown; restored from __doc__
    """
    Return whether 'cls' is a derived from another class or is the same class.
    
    A tuple, as in ``issubclass(x, (A, B, ...))``, may be given as the target to
    check against. This is equivalent to ``issubclass(x, A) or issubclass(x, B)
    or ...`` etc.
    """
    pass
```

```python
# 示例
class A:
    pass

class B(A):  # B类 继承 A类
    pass

b = B() # b 是 B类的一个实例


# is是去判断这两个是不是一个对象, 即id是否相同
# ==是判断值是否相等  
print(type(b)) # 求一个未知数据类型的对象
# <class '__main__.B'>
print(B)
# <class '__main__.B'>
print(id(type(b)))
# 2290407692200
print(id(B))
# 2290407692200


print(isinstance(b, B)) 
#True 
print(isinstance(b, A)) # isinstance会根据继承链去判断
#True

print(type(b) is B)  # 得到的是B的地址
#True
print(type(b) is A)
#False 


print(isinstance(int, type))  # int 是type的子类
#True 
print(isinstance(A, type))  # 类A是type的子类
#True
print(isinstance(True, int))  # 布尔是int的子类
#True
print(isinstance(b, type))
#False


print(issubclass(B, A)) # 类B 是 类A的子类 ，注意必须都传入类名
#True
```

#### 注意：

#### is vs ==  

- is 是去判断这两个是不是一个对象, 即 id 是否相同

- == 是判断值是否相等
- **(ob1 is ob2) 等价于 (id(ob1) == id(ob2))**

```python
# 示例
a=[1,2,3]
b=[1,2,3]
c=a

print(id(a)) # 2866545727304
print(id(b)) # 2866545726984
print(id(c)) # 2866545727304

print(a is b) # False
print(c is a) # True
print((a==b)) # True
```

#### type() vs isinstance()

- **type() 用于求一个未知数据类型的对象**，**isinstance() 用于判断一个对象是否是已知类型**；

- type() 不认为子类是父类的一种类型，isinstance() 认为子类是父类的一种类型，即子类对象也属于父类类型

  

### id()

```python
# 相关源码
def id(*args, **kwargs): # real signature unknown
    """
    Return the identity of an object.
    
    This is guaranteed to be unique among simultaneously existing objects.
    (CPython uses the object's memory address.)
    """
    pass
```

- **id()** 函数返回对象的唯一标识符，标识符是一个整数。

- CPython 中 **id()** 函数用于获取对象的内存地址。



### callable()

```python
# 相关源码
def callable(i_e_, some_kind_of_function): # real signature unknown; restored from __doc__
    """
    Return whether the object is callable (i.e., some kind of function).
    
    Note that classes are callable, as are instances of classes with a
    __call__() method.
    """
    pass
```

- 该方法用来检测对象是否可被调用，可被调用——指的是对象能否使用()括号的方法调用。
- 可调用对象，在实际调用也可能调用失败；但是不可调用对象，调用肯定不成功。
- 类对象都是可被调用对象，类的实例对象是否可调用对象，取决于类是否定义了`__call__`方法。
- 也就是说，对于函数、方法、lambda 函式、 类以及实现了 `__call__ `方法的类实例, 它都返回 True。

```python
# 示例
class A:
    pass
a = A()

print(callable(A))  #类A是可调用对象
#True
print(callable(a))  #实例a不可调用
#False
a()  #调用实例a 会失败
# Traceback (most recent call last):
#   File "D:/BYA_Project/XTC_Develops/Python_json.py", line 97, in <module>
#     a()
# TypeError: 'A' object is not callable

    
class B:
    def __call__(self):
        print("instance are callable now.")
b = B()

print(callable(B))  #类B是可调用对象
#True
print(callable(b))   #实例b是可调用对象
#True
b()   #调用实例b成功
#instance are callable now.
```



## 反射

Introspection should not be confused with **reflection**, which goes a step further and is the ability for a program to manipulate the values, meta-data, properties and/or functions of an object at runtime.
也就是说自省和反射不是同一回事，自省是获取对象类型的能力，而反射是操纵对象的值，元数据，属性和/或函数的能力。

在计算机学中，反射（英语：reflection）是指计算机程序在运行时（runtime）可以访问、检测和修改它本身状态或行为的一种能力。用比喻来说，**反射就是程序在运行的时候能够“观察”并且修改自己的行为**。

在Python中反射非常简单，用起来几乎感觉不到与其他的代码有区别，使用反射获取到的函数和方法可以像平常一样加上括号直接调用，获取到类后可以直接构造实例；不过获取到的字段不能直接赋值，因为拿到的其实是另一个指向同一个地方的引用，赋值只能改变当前的这个引用而已。

|   方法    |                             作用                             | 类型 |
| :-------: | :----------------------------------------------------------: | :--: |
| hasattr() | 判断类方法或者类属性是否存在，返回一个布尔值，存在返回True，反之返回Flase | 反射 |
| getattr() | 获取属性值或实例方法，如果其不存在，会抛出一个`AttributeError`异常 | 反射 |
| setattr() | 设置实例属性的值，如果实例属性不存在时，会自动给当前实例添加该属性 | 反射 |
| delattr() | 删除实例的属性或者实例的方法，当其不存在时同样会抛出一个`AttributeError`异常 | 反射 |



## 反射的应用场景

```python
# 示例
class Cat(object):  # 类Cat 指向类对象
    def __init__(self, name="kitty"):
        self.name = name  # 类属性
    def sayHi(self):  # 类方法
        print(self.name, "say Hi~~")


if __name__ == '__main__':
    cat = Cat('KITTY')  # 类的实例对象
    print(cat.name)  # 访问对象属性
    cat.sayHi()	 # 访问对象方法

    if hasattr(cat, "name"):  # 判断
        setattr(cat, "name", "tiger")  # 设置
    print(getattr(cat, "name"))  # 获取

    delattr(cat, "name")  # 删除
    print(hasattr(cat, "name"))  # 判断
    
-------------------
KITTY
KITTY say Hi~~
tiger
False
```

反射主要根据字符串去寻找类的属性值，主要用于用户交互，触发类内函数运行，根据字符串动态的判断,调用,添加/修改,删除类或类的实例化对象中的方法或属性。

反射在 web 框架中用的很多，通过解析url，执行对应不同的功能。

反射还可以用于**动态导入模块** ，如下所示：

```python
# 示例
model = "requests"
function = "get"

obj = __import__(model)
request_get = getattr(obj, function)

response = request_get("http://example.com").text
print(response)

----------------------
<!doctype html>
<html>
<head>
    <title>Example Domain</title>

    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
    body {
        background-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        
    }
    div {
        width: 600px;
        margin: 5em auto;
        padding: 2em;
        background-color: #fdfdff;
        border-radius: 0.5em;
        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
    }
    a:link, a:visited {
        color: #38488f;
        text-decoration: none;
    }
    @media (max-width: 700px) {
        div {
            margin: 0 auto;
            width: auto;
        }
    }
    </style>    
</head>

<body>
<div>
    <h1>Example Domain</h1>
    <p>This domain is for use in illustrative examples in documents. You may use this
    domain in literature without prior coordination or asking for permission.</p>
    <p><a href="https://www.iana.org/domains/example">More information...</a></p>
</div>
</body>
</html>
```





## 拓展阅读

[**IBM Developer Python 自省指南**](https://www.ibm.com/developerworks/cn/linux/l-pyint/index.html)

[**CSDN Python自省（反射）指南**](https://www.cnblogs.com/huxi/archive/2011/01/02/1924317.html)