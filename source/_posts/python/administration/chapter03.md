---
title: Chapter 3 命令行工具《Python Linux 系统管理与自动化运维》
categories:
  - Python
  - DevOps
tags:
  - 命令行工具
abbrlink: 43681
date: 2019-09-08 11:34:23
---

### 3 打造命令行工具

在没有一个能满足需求的命令行工具时，编写一个命令行工具很重要，Python既可以当脚本语言，也可以用来编写大型服务，作为脚本语言的Python，提供了很多功能来编写命令行工具，用来替代Shell脚本，同时也有很多Python的开源项目，能够帮助我们快速构建命令行工具。

<!--more-->

#### 3.1 与命令行相关的Python语言

##### **使用 sys.argv 获取命令行参数**

sys.argv 列表，保存了所有的命令行参数，其中第一个元素时命令行程序的名称，如果有其他的命令行参数，则所有参数都以字符串的形式保存到 sys.argv 中。

```python
from __future__ import print_function
import os
import sys

def main():
    #为了避免直接运行程序，访问sys.argv[1] 出现索引越界的错误，添加一个空的字符串
    sys.argv.append("")
    filename = sys.argv[1]
    if not os.path.isfile(filename):
        raise SystemExit(filename + ' does not exists')
    elif not os.access(filename, os.R_OK):
        raise SystemExit(filename + ' is not accessible')
    else:
        print(filename + ' is accessible')
 
if __name__ == '__main__':
    main()
```

##### 使用sys.stdin 和fileinput读取标准输入

shell脚本有一个其他脚本语言都没有的优点——管道！Python语言中使用它，可以结合Shell管道和Python语言的优势。

sys库中，有三个文件描述符，分别是stdin、stdout和stderr，其中，sys.stdin是一个普通的文件对象，可以调用sys.stdin.read 函数读取标准输入中的所有内容，调用sys.stdin.readlines 函数将标准输入的内容读取到一个列表中。

```python
from __future__ import print_function
import sys

def get_content():
    return sys.stdin.readlines()
print(get_content())
```

Python 语言有比 awk 应用领域广泛、可读性好、功能强大、愈发清晰等诸多优点，完全可以在Linux下使用Python替代awk进行数据处理。

**fileinput库，可以进行多文件处理**，默认遍历sys.argv[1:]列表，并按行依次读取列表中的文件，如果列表为空，则默认读取标准输入中的内容。

fileinput 读取文件比sys.stdin更灵活，既可以从文件中读，也可以从标准输入中读取。

其中常用的方法有：

filename：	当前正在读取的文件名

fileno：	文件的描述符

filelineno：	正在读取的行是当前文件的第几行

isfirstline：	正在读取的行是否为当前文件的第一行

isstdin：	正在读取文件还是标准输入

```shell
[baiyongan@bya Python_exercise]$ cat read_from_fileinput.py 
from __future__ import print_function
import fileinput

for line in fileinput.input():
    meta = [fileinput.filename(), fileinput.fileno(), fileinput.filelineno(), fileinput.isfirstline(), fileinput.isstdin()]
print(*meta, end="")
print(line, end="")

```

##### 使用SystemExit 异常打印错误信息

Python脚本执行出错时，向错误输出中输出错误信息，并且以非零的返回码退出程序。这个需求可以通过抛出一个SystemExit异常来实现。

```python
import sys
sys.stderr.write('Error Message')
sys.exit(1)
```

##### 使用getpass 库读取密码

非常简单，只有getuser 和getoass函数，getpass不会将密码显示在命令行下。

```python
from __future__ import print_function
import getpass

user = getpass.getuser()
passwd = getpass.getpass('your passwd: ')
print(user,passwd)
```

------

#### 3.2 使用ConfigParse 解析配置文件

应用场景：管理git时，会读取~/.git/config、MySQL 数据库客户端默认使用/etc/mysql/my.cnf、pip配置文件位于~/.pip/pip.conf文件中。

配置文件的好处是，配置成功后，不需要每次使用时都指定相应的参数。ini格式的配置文件，与变成语言无关，可读性强，易于处理。典型格式是一到多个章节（section），每个章节下包含一到多个选项（option）。

------

#### 3.3 使用 argparse 解析命令行参数

------

#### 3.4 使用 logging 记录日志

------

#### 3.5 与命令行相关的开源项目





