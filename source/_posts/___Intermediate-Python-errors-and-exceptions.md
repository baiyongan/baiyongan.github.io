---
title: python 中异常处理
date: 2020-06-02 13:09:52
categories:
	- Python
	- Intermediate
	- Experience
tags:
	- 错误
	- 异常
---



## 1 

<!--more-->

## 拓展阅读

[**python基础之各种异常及其解决方案**](https://blog.csdn.net/u011339641/article/details/49943153)

[**Python错误及异常总结汇总**](https://zhuanlan.zhihu.com/p/34073483)







- 错误和异常
- 内置异常体系
- 常见的异常与解决方案

- 异常的检验与处理
  - try-except
  - try-except-except-····
  - except（）
  - 异常参数
  - else子句
  - finally子句
  - try-except-else-finally
  - with
- 触发异常
  - raise
- 断言  
  - assert

- 自定义异常



异常的种类

经验案例

抛出异常

容易犯的开发错误



异常回溯



try:
a block of code to the probability of error.
except:
a block lets you handle the error.
else:
a block if no exception in the programme.
finally:
regardless of the result of the try- and except blocks, this code.







异常回溯

import traceback

try:

​	value = 8 / b

​	print(value)

except:

​	info=traceback.format_exc

print(info)



参考资料

https://zhuanlan.zhihu.com/p/34073483

[python捕获异常及方法总结]  (https://www.cnblogs.com/beile/p/10789333.html)

内置异常 https://docs.python.org/zh-cn/3/library/exceptions.html#bltin-exceptions

Python3 错误和异常  https://www.runoob.com/python3/python3-errors-execptions.html





调试

黑盒测试

白盒测试