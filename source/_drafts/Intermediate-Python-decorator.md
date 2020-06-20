---
title: Python中的装饰器
date: 2020-05-24 22:48:47
top:
categories:
	- Python 
	- Intermediate
tags:
	- decorator
---

## 1 装饰器的概念

装饰器本质上也是一种函数，它可以让其它函数在不经过修改的情况下增加一些功能。一般而言，我们可以使用装饰器提供的 @ 语法糖（Syntactic Sugar）来修饰其它函数或对象。如下所示我们用 @dec 装饰器修饰函数 func ()：

```python
@dec
def func():  
    pass
```





## 拓展阅读

[**Python 编程时光· 装饰器进阶用法详解**](http://python.iswbm.com/en/latest/c03/c03_01.html)

[**详解Python的装饰器**](https://www.cnblogs.com/cicaday/p/python-decorator.html#_caption_4)