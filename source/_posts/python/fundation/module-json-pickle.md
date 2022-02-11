---
title: Python 序列化模块——json
date: 2020-04-23 21:44:10
cover: https://s2.loli.net/2022/02/03/7sXCgO2wYznbSMe.png
categories:
	- Python
	- Fundation
	- module
tags:
	- json
---



### JSON概念

JSON(JavaScript Obeject Notation) 是一种轻量级的数据交换格式，易于人阅读与编写，同时易于机器解析和生成。JSON采用完全独立于语言的文本格式，但是也使用了类似于C语言家族的习惯（包括C, C++, C#, Java, JavaScript, Perl, Python等）。这些特性使JSON成为**理想的数据交换语言**。

前端与后端的交互，其实可以就是js 与 python 进行数据交互

![js-json-py](/images/js-json-py.png)

- json是一种通用的数据类型，任何语言都认识
- 接口返回的数据类型都是json
- 长得像字典，形式也是k-v { }
- 其实json是字符串
- 字符串不能用key、value来取值，要先转成字典才可以

<!--more-->

### JSON基本语法

- **JSON 名称/值对**。类似于Python中的字典，**注意必须用——双引号**， 如 {“name” : "Python"}
- **JSON 值的类型**。可以是数字 (整数或浮点数)，字符串 (在双引号中)，逻辑值 (True 或 False )，数组 (在中括号中)，对象 (在大括号中)，以及null。
  - 其中的value值有：
    - **number(int, float)**    
    - **"string"**
    - **true   /  false**
    - **[array]**
    - **(object)**
    - **null**

- **JSON 对象**。 JSON对象，在花括号 {} 中书写，对象可以包含多个名称/值对，以逗号进行分隔。
- **JSON数组。** json的数组在方括号中书写，可以包含多个JSON 对象。

```json
{
    "sites": [
        { "name": "jd",  "url": "www.jd.com"   },
        { "name": "taobao",   "url": "www.taobao.com" }
    ]
}
```



### Python操作JSON

Python 操作json模块，主要执行序列化和反序列化的操作。

- **序列化（encoding）**：把一个 Python对象编码转化为 JSON 字符串
- **反序列化（decoding）**：把 JSON 格式字符串解码转换成 Python 数据对象

#### json模块的主要函数

不管是dump还是load，**带s的都是和字符串相关的，不带s的都是和文件相关的。**

| 方法  | 功能                                        |
| ----- | ------------------------------------------- |
| dumps | 只完成了序列化为 str 的操作                 |
| dump  | 必须传文件描述符，将序列化的 str 写到文件中 |
| loads | 只完成了反序列化                            |
| load  | 接收文件描述符，完成了读文件  +  反序列化   |

##### json.dumps() 函数源码：

```python
def dumps(obj, *, skipkeys=False, ensure_ascii=True, check_circular=True,
        allow_nan=True, cls=None, indent=None, separators=None,
        default=None, sort_keys=False, **kw):
    # sort_keys：表示序列化JSON对象时是否对字典的key进行排序，字典默认是无序的。
    # indent：表示缩进，可以使数据格式可读性更强，格式化输出JSON字符串，如果ident是一个非负的整数，那么JSONarray元素和object成员将会被以相应的缩进级别进行打印输出。
    # separators：当使用ident参数时json模块序列化Python对象后得到的JSON字符串中的”,”号和”:”号分隔符后默认会附加一个空白字符，可以通过separators参数重新指定分隔符，去除无用的空白字符。指定的分隔符一般是一个元祖类型的数据，比如(',',':')。
```

##### json.load()函数源码：

```python
def load(fp, *, cls=None, object_hook=None, parse_float=None,
        parse_int=None, parse_constant=None, object_pairs_hook=None, **kw):
```



#### json字符串与Python原始类型之间的数据类型对应关系

**Python 原始类型向JSON 类型的转化对照表**

|        Python        |    JSON    |
| :------------------: | :--------: |
|       **dict**       | **object** |
|    **list tuple**    | **array**  |
|   **str unicode**    | **string** |
| **int  long  float** | **number** |
|       **True**       |  **true**  |
|      **False**       | **false**  |
|       **None**       |  **null**  |

**JSON 类型向 Python 原始类型的转化对照表**

|        JSON        |  Python   |
| :----------------: | :-------: |
|     **object**     | **dict**  |
|     **array**      | **list**  |
|     **string**     |  **str**  |
| **number（int）**  |  **int**  |
| **number（real）** | **float** |
|      **true**      | **True**  |
|     **false**      | **False** |
|      **null**      | **None**  |



#### 序列化操作实例

#### 反序列化操作实例

#### 自定义对象的序列化

#### json 和 pickle 模块

json模块和pickle模块都有dumps、dump、loads、load四种方法，而且用法一样。不同的是，json模块序列化出来的是通用格式，其他编程语言都认识，就是普通的字符串。而pickle模块序列化出来的只有python认识，其他语言不认识，表现为乱码。不过，pickle可以序列化函数，但是其他文件想用该函数，在该文件中需要有该函数的定义（定义和参数必须相同，内容可以不同）？















