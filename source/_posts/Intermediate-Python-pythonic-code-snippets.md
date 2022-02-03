---
title: 如何写出 Pythonic 的代码？
date: 2020-05-11 01:30:32
top: 
cover: https://s2.loli.net/2022/02/03/7sXCgO2wYznbSMe.png
categories:
	- Python
	- Intermediate
	- Experience
tags:
	- code snippets
	- pythonic
---

## 什么是Pythonic？

**Pythonic就是以Python的方式写出简洁、优美的代码。**

> **The Zen of Python**（Python之禅） 执行 **import this** 查看



## Pythonic vs Non-Pythonic common cases

**P 代表 Pythonic， NP代表 Non-Pythonic。**相比于NP，P的写法简练，明确，优雅，绝大部分时候执行效率高，代码越少也就越不容易出错。好的程序员在写代码时，应该追求代码的正确性，简洁性和可读性，这恰恰就是pythonic的精神所在。

<!--more-->

### 变量交换赋值

```python
#P
a,b = b,a

#NP
tmp = a
a = b
b = tmp
```

### Unpacking

```python
#P
l = ['David', 'Pythonista', '+1-514-555-1234']
first_name, last_name, phone_number = l
# Python 3 Only
first, *middle, last = another_list

#NP
l = ['David', 'Pythonista', '+1-514-555-1234']
first_name = l[0]
last_name = l[1]
phone_number = l[2] 
```

### 链式比较

```Python
#P 
a = 3
b = 1
1 <= b <= a < 10 #True

#NP
b >= 1 and b <= a and a < 10 #True
```

### 使用操作符in

```python
#P
if fruit in ["apple", "orange", "berry"]:
 # 使用 in 更加简洁

#NP
if fruit == "apple" or fruit == "orange" or fruit == "berry":
 # 多次判断 
```

### 真值测试

```python
#P
name = 'Tim'
langs = ['AS3', 'Lua', 'C']
info = {'name': 'Tim', 'sex': 'Male', 'age':23 }    
 
if name and langs and info:
    print('All True!')  #All True!

#NP
if name != '' and len(langs) > 0 and info != {}:
    print('All True!') #All True!
```

P的写法就是对于**任意对象**，直接判断其真假，无需写判断条件，这样既能保证正确性，又能减少代码量。

|       真        |              假              |
| :-------------: | :--------------------------: |
|      True       |            False             |
| 任意非空字符串  |        空字符串 `''`         |
|   任意非0数字   |           数字 `0`           |
|  任意非空容器   | 空的容器 `[]``()``{}``set()` |
| 其他任意非False |             None             |

### 字符串反转

```python
#P
def reverse_str(s):
    return s[::-1]

#NP
def reverse_str(s):
    t = ''
    for x in range(len(s)-1,-1,-1):
        t += s[x]
    return t

#如果用于检测回文，就是一句话input == input[::-1]
```

### 字符串列表的连接

```python
#P
strList = ["Python", "is", "good"]  
res =  ' '.join(strList) #Python is good # 没有额外的内存分配

#NP
res = ''
for s in strList:
    res += s + ' ' #每次赋值都丢弃以前的字符串对象, 生成一个新对象
#Python is good 
#最后还有个多余空格
```

`string.join()`常用于连接列表里的字符串，相对于NP，P的方式十分高效，且不会犯错。

### 列表求和，最大值，最小值，乘积

```python
#P
numList = [1,2,3,4,5]   
 
sum = sum(numList)  #sum = 15
maxNum = max(numList) #maxNum = 5
minNum = min(numList) #minNum = 1
from operator import mul
from functools import reduce #Python3 中 reduce被取消了，要从functools中导入
prod = reduce(mul, numList, 1) #prod = 120 默认值传1以防空列表报错

#NP
sum = 0
maxNum = -float('inf')
minNum = float('inf')
prod = 1
for num in numList:
    if num > maxNum:
        maxNum = num
    if num < minNum:
        minNum = num
    sum += num
    prod *= num
# sum = 15 maxNum = 5 minNum = 1 prod = 120
```

### 列表推导式

```python
#P
l = [x*x for x in range(10) if x % 3 == 0]
#l = [0, 9, 36, 81]

#NP
l = []
for x in range(10):
    if x % 3 == 0:
        l.append(x*x)
#l = [0, 9, 36, 81]
```

### 列表推导嵌套

```python
#P
gen = (item for sl in nested_list if list_condition(sl) 
	for item in sl if item_condition(item))
for item in gen:
 # do something...

#NP
for sub_list in nested_list:
	if list_condition(sub_list):
		for item in sub_list:
			if item_condition(item):
				# do something... 
```

### 循环嵌套

```python
#P
from itertools import product
for x, y, z in product(x_list, y_list, z_list):
	# do something for x, y, z
    
#NP
for x in x_list:
	for y in y_list:
		for z in z_list:
			# do something for x & y 
```

### 字典键值列表

```python
#P
for key in my_dict:
 # my_dict[key] ...

#NP
for key in my_dict.keys():
 # my_dict[key] ... 
```

只有当循环中需要更改key值的情况下，我们需要使用 my_dict.keys()

### 字典键值判断

```python
#P
if key in my_dict:
 # ...do something with d[key]

#NP
if my_dict.has_key(key):
 # ...do something with d[key] 
```

### 字典 get 和 setdefault 方法

```python
#P
navs = {}
for (portfolio, equity, position) in data:
	# 使用 get 方法
	navs[portfolio] = navs.get(portfolio, 0) + position * prices[equity]
	# 或者使用 setdefault 方法
	navs.setdefault(portfolio, 0)
	navs[portfolio] += position * prices[equity]

#NP
navs = {}
for (portfolio, equity, position) in data:
	if portfolio not in navs:
	navs[portfolio] = 0
	navs[portfolio] += position * prices[equity]

```

### 字典的默认值

```python
#P
dic = {'name':'Tim', 'age':23}  
 
dic['workage'] = dic.get('workage',0) + 1
#dic = {'age': 23, 'workage': 1, 'name': 'Tim'}

#NP
if 'workage' in dic:
    dic['workage'] += 1
else:
    dic['workage'] = 1
#dic = {'age': 23, 'workage': 1, 'name': 'Tim'}
```

dict的`get(key,default)`方法用于获取字典中key的值，若不存在该key，则将key赋默认值default。
P相比NP的写法少了`if...else...`

### `for...else...`语句

```python
#P
for x in range(1,5):
    if x == 5:
        print('find 5')
        break
else:
    print('can not find 5!')
#can not find 5!

#NP
find = False
for x in range(1,5):
    if x == 5:
        find = True
        print('find 5')
        break
if not find:
    print('can not find 5!')
#can not find 5!

```

`for...else...`的else部分用来处理没有从for循环中断的情况。有了它，我们不用设置状态变量来检查是否for循环有break出来，简单方便。

### 三元符的替代

```python
#P
a = 3   
 
b = 2 if a > 2 else 1
#b = 2

#NP
if a > 2:
    b = 2
else:
    b = 1
#b = 2
```

### `enumerate`，带有索引位置的集合遍历

```python
#P
array = [1, 2, 3, 4, 5]

for i, e in enumerate(array, 0):
    print(i, e)
# 0 1
# 1 2
# 2 3
# 3 4
# 4 5

#NP
for i in range(len(array)):
    print(i, array[i])
#0 1
#1 2
#2 3
#3 4
#4 5
```

使用enumerate可以一次性将索引和值取出，避免使用索引来取值，而且enumerate的第二个参数可以调整索引下标的起始位置，默认为0。

### 使用`zip`创建键值对

```python
#P
keys = ['Name', 'Sex', 'Age']
values = ['Tim', 'Male', 23]
 
dic = dict(zip(keys, values))
#{'Age': 23, 'Name': 'Tim', 'Sex': 'Male'}

#NP
dic = {}
for i,e in enumerate(keys):
    dic[e] = values[i]
#{'Age': 23, 'Name': 'Tim', 'Sex': 'Male'}
```

zip方法返回的是一个元组，用它来创建键值对，简单明了。

### 表达式单行显示

```python
#P
print('one')
print('two')

if x == 1:
	print('one')

cond1 = <complex comparison>
cond2 = <other complex comparison>
if cond1 and cond2:
    # do something

#NP
print('one'); print('two')

if x == 1: print('one')

if <complex comparison> and <other complex comparison>:
    # do something
```

### 使用 with 处理文件

```python
#P
with open("some_file.txt") as f:
	data = f.read()
	# 其他文件操作...

#NP
f = open("some_file.txt")
try:
	data = f.read()
	# 其他文件操作..
finally:
	f.close()
```

### 使用 with 忽视异常(仅限Python 3)

```python
#P
from contextlib import ignored # Python 3 only
with ignored(OSError):
	os.remove("somefile.txt")
    
#NP
try:
	os.remove("somefile.txt")
except OSError:
	pass
```

### 使用 with 处理加锁

```python
#P
import threading
lock = threading.Lock()
with lock:
     # 互斥操作...
        
#NP
import threading
lock = threading.Lock()
lock.acquire()
try:
	# 互斥操作...
finally:
	lock.release()
```

### 尽量使用生成器替代列表

### 中间结果尽量使用imap/ifilter代替map/filter

### 善用装饰器

······



## Pythonic 编程惯用法

### 利用assert 语句发现问题

### 数据交换时不推荐使用中间变量

### 充分利用lazy evaluation 的特性

### 不推荐使用type进行类型检查

因为有些时候type的结果并不一定可靠。如果有需求，建议使用isinstance函数来代替。

### 浮点数可能是不准确的



——**未完待续**，**先消化完拓展阅读的东西再总结**  2020/5/11





## 拓展阅读

[**Code Like a Pythonista: Idiomatic Python--译**](https://www.cnblogs.com/Simon-xm/p/4058932.html)

[**Code Like a Pythonista: Idiomatic Python(原文)**](https://www.iteye.com/blog/2057-1807516)

[**让你的Python代码更加 pythonic**](https://wuzhiwei.net/be_pythonic/)

[**《编码之前碎碎念(工程实践) - python-web-guide 0.1 文档》**](https://python-web-guide.readthedocs.io/zh/latest/codingstyle/codingstyle.html)

[分享书籍writing idiomatic python ebook](https://www.cnblogs.com/jcli/p/3624904.html)

[《Python 3 Patterns, Recipes and Idioms》](https://buildmedia.readthedocs.org/media/pdf/python-3-patterns-idioms-test/latest/python-3-patterns-idioms-test.pdf)

[《Effective Python》](https://link.zhihu.com/?target=https%3A//book.douban.com/subject/26312313/)

[《编写高质量代码：改善Python程序的91个建议》](https://link.zhihu.com/?target=https%3A//book.douban.com/subject/25910544/)

[**知乎—Python 有哪些优雅的代码实现让自己的代码更pythonic**](https://www.zhihu.com/question/37751951/answer/73425339)

