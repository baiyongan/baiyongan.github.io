---
title: Chapter 2 Python生态工具 《Python Linux系统管理与自动化运维》
date: 2020-04-26 19:46:05
categories:
	- Python 
	- DevOps
tags:
	- pip
	- pdb
	- pycodestyle
	- pyenv
	- virtualenv
---

## Python 生态工具

工欲善其事，必先利其器，掌握主流实用工具，优点很多，可以显著提升编程效率，形成统一代码风格，通过工具自学Python，任意切换 / 管理不同工作环境等。

<!--more-->

### 2.1 Python 内置小工具

#### 内置下载服务器

```shell
python -m SimpleHTTPServer
python -m http.server # python3 
```

执行上述命令，会在当前目录下启动一个文件下载服务器，默认打开8000端口。

#### 字符串转换为 json

工作中，系统会调用底层服务的 API。底层服务的 API 一般都是以 JSON 格式返回，为了便于问题追踪，会将 API 返回的 JSON 转换为字符串记录到日志文件中。当需要分析问题时，需要将日志文件中的 JSON 字符串拿出来进行解析。即需要将一个 JSON 字符串转换为 JSON 对象，以提高日志的可读性。

```shell
[baiyongan@bya ~]$ echo '{"address": {"province": "jiangsu", "city": "nanjing"}, "name": "baiyongan", "role": "superman"}' | python -m json.tool
{
    "address": {
        "city": "nanjing",
        "province": "jiangsu"
    },
    "role": "superman",
    "name": "baiyongan"
}

#  前面是json 字符串，后面接管道与python -m json.tool
```

#### 检查第三方库是否正确安装

如果使用脚本对大批量的服务器进行自动部署，可以使用python解释器的 -c 参数快速地执行import 语句。

最关键——可以在脚本中实现对远程服务器地验证操作。



### 2.2 pip 高级用法

#### pip常用命令

| 子命令     | 功能                                                         |
| ---------- | ------------------------------------------------------------ |
| install    | 安装 如：pip install flask==0.8 安装特定版本                 |
| download   | 下载                                                         |
| uninstall  | 卸载                                                         |
| freeze     | 按照requirements 格式输出安装包，**pip freeze > requirements.txt**                                          可以到其他服务器上执行 **pip install -r requirements.txt**  直接安装软件 |
| list       | 列出当前系统中的安装包                                       |
| show       | 查看安装包的信息：版本、依赖、许可证、作者、主页等           |
| check      | 检查安装包的依赖是否完整                                     |
| search     | 查找                                                         |
| wheel      | 打包软件到wheel格式                                          |
| hash       | 计算安装包的hash值                                           |
| completion | **pip completion --bash >> ~/.profile**    $ source ~/.profile 通过键入'pip i<tab>'，将会自动输入 'pip install' |
| help       | 获取pip 和子命令的帮助信息                                   |

#### 如何加速pip的安装

##### 方法一：更改镜像源

豆瓣：http://pypi.douban.com/simple/

清华：https://pypi.tuna.tsinghua.edu.cn/simple

阿里云：http://mirrors.aliyun.com/pypi/simple/



**临时使用**，如下：只有安装pillow时使用指定源

```shell
pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple pillow
```

**永久修改**，修改配置文件

- Linux下，修改 ~/.pip/**pip.conf** (没有就创建一个)， 修改 index-url至tuna，内容如下：
   [global]
   index-url = https://pypi.tuna.tsinghua.edu.cn/simple

- windows下，直接在user目录中创建一个pip目录，如：C:\Users\xx\pip，新建文件**pip.ini**，内容如下:
   [global]
   index-url = https://pypi.tuna.tsinghua.edu.cn/simple

- PyCharm 中更改镜像源

  File >> Settings >> Project >> Project Interpreter >> (右侧边缘 + 号) Available Packages >> Manage Repositories >> 右侧边缘加号 >> input a repository URL >> 清华、豆瓣等



##### 方法二：将软件下载到本地部署

如果服务器无法连接外网，且安装包较多较大，可以先将包下载到本地，然后从本地安装。

```shell
# 下载到本地
pip install --download='pwd' -r requirements.txt
# 本地安装
pip install --no-index -f file://'pwd' -r requirements.txt
```



### 2.3 Python编辑器

Linux 用 vim：代码补全插件 snipmate、语法检查插件 Syntastic、编程提示插件 jedi-vim

windows 用Pycharm



### 2.4 Python 编程辅助工具

Python 交互式编程：IPython Shell 和 jupyter (IPython Notebook)
IPython： 略

jupyter：略

### 2.5 Python 调试器

单步调试  标准库 的pdb 以及第三方库ipdb

ipdb 之于pdb，就相当于 IPython 之于Python



[标准库的pdb](https://docs.python.org/3.7/library/pdb.html)：部分调试命令

一种是直接在命令行参数指定使用pdb模块启动python 文件，适用于文件较短的程序

```shell
python -m pdb test_pdb.py
```

另一种，直接在代码中，调用set_trace方法设置断点，适用于程序文件较大的场景

```python
from __future__ import print_function
import pdb
import ipdb

def sum_nums(n):
    s = 0
    for i in range(n):
    pdb.set_trace()
    # ipdb.set_trace()
    s += i
    print(s)

if __name__ == '__main__':
    sum_nums(5)
```



### 2.6 Python 代码规范检查

> [PEP8 编码规范](https://www.python.org/dev/peps/pep-0008/) : 对齐规则、包导入顺序、空格与注释、命名习惯、异常处理等
>
> google Python 编码风格
>

- pycodestyle 检查代码规范


```shell
[root@bya Test_Project]# cat test.py 
import os,sys

def main():
    print([ITEM FOR ITEM IN OS.LISTDIR('.') if item.endswith('.py')]);
    print(  sys.version)

if __name__ == __main__:
    main()
[root@bya Test_Project]# pycodestyle --show-source test.py # 使用 --show-source 显示出错源码
test.py:1:10: E231 missing whitespace after ','
import os,sys
         ^
test.py:1:10: E401 multiple imports on one line
import os,sys
         ^
test.py:3:1: E302 expected 2 blank lines, found 1
def main():
^
test.py:4:70: E703 statement ends with a semicolon
    print([ITEM FOR ITEM IN OS.LISTDIR('.') if item.endswith('.py')]);
                                                                     ^
test.py:5:11: E201 whitespace after '('
    print(  sys.version)
          ^
test.py:7:1: E305 expected 2 blank lines after class or function definition, found 1
if __name__ == __main__:
^
[root@bya Test_Project]# 

```

- 使用autopep8 将代码格式化


```shell 
autopep8 --in-place test.py # 相当于sed 里面的-i 选项，直接将修改结果保存到源文件中
# autopep8 还有--aggressive 选项，使用该选项， 会执行更多实质性的更改，多次使用，效果更佳。
```

- pylint 代码审查工具




### 2.7 Python 工作环境管理

pyenv 用于管理不同的Python 版本：如工作时用Python 2.7.13， 学习时用Python 3.6.0

virtualenv 用于隔离不同项目的工作环境：如都在Python 2.7.13 中，项目A用flask 0.8，项目B用flask 0.9

**组合使用pyenv 和virtualenv，就能够构造Python 和第三方库的任意版本组合。**

virtualenv是一个独立工具，用户可以不用pyenv， 而单独用virtualenv，但如果用了pyenv，则需要安装pyenv-virtualenv插件。



- **安装 pyenv**

```shell
[root@bya Test_Project]# git clone https://github.com/yyuu/pyenv.git ~/.pyenv
Cloning into '/root/.pyenv'...
remote: Enumerating objects: 29, done.
remote: Counting objects: 100% (29/29), done.
remote: Compressing objects: 100% (23/23), done.
remote: Total 17972 (delta 9), reused 10 (delta 3), pack-reused 17943
Receiving objects: 100% (17972/17972), 3.55 MiB | 14.00 KiB/s, done.
Resolving deltas: 100% (12236/12236), done.
[root@bya Test_Project]# echo 'export PYENV_ROOT="$HOME"/.pyenv' >> ~/.bash_profile
[root@bya Test_Project]# echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bash_profile
[root@bya Test_Project]# echo 'eval "$(pyenv init -)"' >> ~/.bash_profile
[root@bya Test_Project]# source ~/.bash_profile 
[root@bya Test_Project]# pyenv --help
Usage: pyenv <command> [<args>]

Some useful pyenv commands are:
   commands    List all available pyenv commands
   exec        Run an executable with the selected Python version
   global      Set or show the global Python version(s)
   help        Display help for a command
   hooks       List hook scripts for a given pyenv command
   init        Configure the shell environment for pyenv
   install     Install a Python version using python-build
   local       Set or show the local application-specific Python version(s)
   prefix      Display prefix for a Python version
   rehash      Rehash pyenv shims (run this after installing executables)
   root        Display the root directory where versions and shims are kept
   shell       Set or show the shell-specific Python version
   shims       List existing pyenv shims
   uninstall   Uninstall a specific Python version
   version     Show the current Python version(s) and its origin
   --version   Display the version of pyenv
   version-file   Detect the file that sets the current pyenv version
   version-name   Show the current Python version
   version-origin   Explain how the current Python version is set
   versions    List all Python versions available to pyenv
   whence      List all Python versions that contain the given executable
   which       Display the full path to an executable

See `pyenv help <command>' for information on a specific command.
For full documentation, see: https://github.com/pyenv/pyenv#readme
[root@bya Test_Project]# 

```



- pyenv 的使用

```shell
pyenv install --list # 查看支持版本

pyenv install -v 3.6.0 # 安装某个Python 版本

pyenv versions # 查看当前系统中的Python版本

pyenv global 2.7.5 # 切换至 2.7.5 版本

pyenv uninstall 2.7.5 # 删除2.7.5 版本

```



- 安装pyenv-virtualenv插件

```shell
[root@bya Test_Project]# git clone https://github.com/yyuu/pyenv-virtualenv.git $(pyenv root)/plugins/pyenv-virtualenv
Cloning into '/root/.pyenv/plugins/pyenv-virtualenv'...
remote: Enumerating objects: 2064, done.
remote: Total 2064 (delta 0), reused 0 (delta 0), pack-reused 2064
Receiving objects: 100% (2064/2064), 580.31 KiB | 14.00 KiB/s, done.
Resolving deltas: 100% (1413/1413), done.
[root@bya Test_Project]# echo 'eval "$(pyenv virtualenv-init -)"' >>~/.bash_profile
[root@bya Test_Project]# source ~/.bash_profile 
[root@bya Test_Project]# pyenv help virtualenv
Usage: pyenv virtualenv [-f|--force] [VIRTUALENV_OPTIONS] [version] <virtualenv-name>
       pyenv virtualenv --version
       pyenv virtualenv --help

  -f/--force       Install even if the version appears to be installed already

[root@bya Test_Project]# 



```

- 使用pyenv-virtualenv插件

```shell
pyenv virtualenv 2.8.5 first_project  # 新建两个工作环境
pyenv virtualenv 2.8.5 second_project

pyenv virtualenvs # 查看工作环境

pyenv activate first_project # 进入一个工作环境
(first_project) $ pip install flask==0.8
(first_project) $ pyenv deactivate # 退出一个工作环境

pyenv virtualenv-delete first_project # 删除一个虚拟环境 

```



#### 总结

IPython这一块没有写，setuptools 工具也没写。

**重点是要知道工具的存在，并且知道哪些工具解决哪些问题。**

