---
title: Python 中的 global、nonlocal 辨析
cover: 'https://s2.loli.net/2022/02/03/7sXCgO2wYznbSMe.png'
categories:
  - Python
  - Fundation
tags:
  - global
  - nonlocal
abbrlink: 51216
date: 2020-04-28 14:49:37
---

## global 语句

- 语法：声明此变量为全局变量

- 用法： global [变量名]

- 注意：引用全局变量时，不需要global 声明，但是后面使用或者修改这个全局变量的时候，需要global声明。

- **应用场景**：变量定义在函数**外部**的时候，如果函数里面想改变这个**全局变量**的值，需要在当前的引用函数里面**重新定义**一个**变量**， 并**用关键字global修饰**。

  <!--more-->
  
  ```python
  a = 1  # 外部全局变量
  def change():
          global a # 与外部全局变量同名
          a += 1
          print("函数内部的a的值：{}".format(a))   # 2
                
                
  change()
  print("调用change函数后， 函数外部的a的值：{}".format(a))  # 2
  ```

## nonlocal 语句

- 语法：允许内嵌函数修改定义在语法上位于外层的函数的作用域中的一个或者多个名称

- 用法： nonlocal [变量名]

- 注意：**此语句仅适用于python3**，在python2中内嵌函数可以使用外层作用域中通过赋值的所有名称，但不能进行修改；python3则可以使用并且可以进行修改。

```python
def demo_fun():
    num = 0
    def demo_fun_1():
        nonlocal num
        num += 1
        return num
    return num
# 在这段demo里面，变量num既不是全局变量，也不是局部变量，而是外部内嵌函数的变量。
```

- 应用场景：nolocal 的使用场景比较单一，它是**使用在闭包中**的，使变量使用**外层**（非全局）的同名变量

  ```python
  def foo(func):
          a = 1
          print("外层函数a的值", a)
          def wrapper():
                  func()
                  nonlocal a
                  a += 1
                  print("经过改变后，外层函数a的值：", a)
          return wrapper
  
  @foo
  def change():
        print("nolocal的使用")
  
  change()
  ------------------------------------------------
  外层函数a的值 1
  nolocal的使用
  经过改变后，里外层函数a的值： 2
  ```



## global vs nonlocal

在Python中，global 和 nonlocal 的**作用**都是可以**实现代码块内变量使用外部的同名变量**，但其中是有很明显的区别的。

而在谈到nonlocal与global的区别之前，我们应该了解python中引用变量的顺序是什么样的。

**python变量引用顺序**：从当前作用域开始寻找变量，如果没找到就往上一层作用域寻找，依此上推一层。

具体步骤：当前作用域局部变量->外层作用域变量->再外层作用域变量->…->当前模块全局变量->pyhton内置变量

### 区别点

- **作用对象，作用域不同**

global的作用对象是全局变量， 作用域是全局的，就是会修改这个变量对应地址的值；

nonlocal的作用对象是外部内嵌函数的变量（也就是闭包这种情况）。即是说，只在闭包里面生效，作用域就是闭包里面的，外函数和内函数都影响，但是闭包外面不影响。

- **操作权限不同**

global可以改变全局变量，同时可以定义新的全局变量，

nonlocal只能改变外层函数变量，不能定义新的外层函数变量，并且nonlocal也不能改变全局变量。

- **声明不同**

global声名变量后，标志此变量为全局变量；

nonlocal声名变量后，标志此变量为外层函数的局部变量，如果上一级函数中不存在该局部变量，nonlocal位置会发生错误。

- **使用范围不同**

global关键字可以用在任何地方，包括最上层函数中和嵌套函数中，即使之前未定义该变量，global修饰后也可以直接使用；

nonlocal关键字只能用于嵌套函数中，并且外层函数中必须定义了相应的局部变量，否则会发生错误。

### 注意点

- 本地的变量声明为global，就不能再声明为nonlocal
- 使用nonlocal之前，需要初始化变量
- 不能在函数的外部函数里声明nonlocal

- **在 实际的编程中，应该尽量避开使用 global关键字，因为它引入了多余的变量到全局作用域了。**



## 拓展阅读

[**Python's globals**](https://punchagan.muse-amuse.in/blog/python-globals/)

[**Python manual —— Simple statements**](https://docs.python.org/3/reference/simple_stmts.html#the-nonlocal-statement)

[**Python Global和Nonlocal的用法**](https://blog.csdn.net/weixin_42514606/article/details/104004237)

[**全局变量: 浅析 python 中 global 作用和全局变量实现方式**](https://blog.csdn.net/JackLang/article/details/81294208?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2)


