---
title: Chapter5 Linux 系统管理 《Python Linux 系统管理与自动化运维》
date: 2019-09-10 22:01:34
categories:
	- Python 
	- DevOps
tags:
	- 系统管理
---

## 5 Linux 系统管理

<!--more-->

------

### 5.1 文件读写

#### Python 内置的open函数

open 函数，接受文件名和打开模式作为参数，返回一个文件对象。     

**'r' 	默认读模式**	不存在，则抛出FileNotFoundError 异常

'w' 	写模式	非空，则内容被清空，不存在，则创建

'x'	创建新文件	已存在，则抛出FileExistsError 异常。

'a'	追加

**三步：打开—操作—关闭** 

```python
f = open('data.txt', 'w')
f.write('hello world')
f.close()

```

#### 避免文件句柄泄露

文件处理结束后，要及时关闭文件，文件举兵泄露可能时最常见的资源泄露问题。

方式1： finally 语句关闭句柄

```python
try:
    f = open('data.txt')
    print(f.read())
finally:
    f.close()
```

方法2：上下文管理器——简洁，Pythonic

```python
with open('data.txt') as f:
    print(f.read())
```



#### 常见的文件操作函数

三个读：

read：读取文件中的所有内容

readline： 一次读取一行

readlines：将文件内容存储到一个列表中，列表中每一行对应于文件中的一行

两个写：

write：写字符串到文件中，并返回写入的字符数

writelines：写一个字符串列表到文件中

也可以使用print( ) 函数，将输出结果输出到文件中，更灵活。

```python
from __future__ import print_function
with open('/tmp/data.txt', 'w') as f:
    print(1, 2, 'hello, world', sep=",", file=f)
```



#### Python 的文件时一个可迭代对象

Python中，for循环不仅可以便利字符串、列表、元组这样的可迭代序列，还可以使用迭代器协议便利可迭代对象。

```python
with open('data.txt') as inf:
    for line in inf:
        print(line.upper())
```

------

### 5.2 文件与文件路径管理

os模块包含与操作系统的系统环境、文件系统、用户数据库以及权限进行交互的函数，可以写出跨平台的程序。

本节专注于os模块中，与文件路径相关的一些函数。

#### 使用os.path 进行路径和文件管理

##### 1 拆分路径 

os.path.split()：返回二元组，包含文件的路径和文件名

os.path.dirname()：返回文件路径

os.path.basename()：返回文件名

os.path.splitext()：返回二元组，除去文件扩展名的部分和扩展名

##### 2 构建路径

 os.path.expanduser():	展开用户的GHOME目录

os.path.abspath():	得到文件或路径的绝对路径

os.path.join():	**根据不同操作平台，使用不同的路径分隔符拼接路径**， 如 os.path.join('~', 't', 'a.py')

**相应的，检验是否是绝对路径： os.path.isabs()**

**\__file__**  这个特殊变量表示当前代码所在的源文件，有时，需要导入当前源文件父目录下的软件包（如编写单元测试），因此，需要获取父目录

```python
from __future__ import print_function
import os

print("CWD:", os.getcwd())
path = os.path.abspath(__file__)
print("Full Path:", path)
print("Parent directory of current file:", os.path.abspath(os.path.join(os.path.dirname(path), os.path.pardir)))
```

##### **3 获取文件属性**

os.path.getatime	获取文件访问时间

os.path.getmtime	获取修改时间

os.path.getctime	获取创建时间

os.path.getsize	获取文件大小

##### **4 判断文件类型**(判断类，返回Boolean值)

os.path.exists	所指路径是否存在

os.path.ifsile	

os.path.isdir

os.path.islink

os.path.ismount

**充分利用os.path模块的函数，可以识现很多系统管理的功能**



#### 使用os模块管理文件和目录

os 模块封装了操作系统的API，工程师可以用同一的接口编写跨平台的应用程序。

os.unlink / os.remove	删除path所指向的文件

os.rmdir	删除文件夹，该文件夹必须为空，否则报错

os.mkdir	创建文件夹

os.rename	重命名文件或文件夹

os.chmod	修改权限

os.access	判断权限

**权限表示：读、写、执行 对应 R_OK、W_OK、X_OK**

------

### 5.3 查找文件

#### **使用fnmatch 找到特定的文件**

大部分情况下，使用字符串的前缀匹配和后缀匹配查找特定类型的文件，就可以满足要求；如果更灵活的话，可以使用**fnmatch库**——专门用来进行文件名匹配，只有四个函数

fnmatch.fnmatch	判断文件名是否符合特定模式

fnmatch.fnmatchcase	判断文件名是否符合特定模式，**不区分大小写**

fnmatch.filter	**返回输入列表**中，符合特定模式的文件名列表   **第一个参数为文件名列表，第二个为文件名模式**

fnmatch.translate	将通配符模式转为正则表达式

其中，fnmatch支持的通配符有 

\*  匹配任意数量字符

？ 匹配单个字符

[seq] 	匹配seq中的字符

[!seq] 	匹配除了seq以外的任何字符

#### **使用glob找到特定的文件**

**相当于 os.listdir 加上 fnmatch**，使用glob之后，不需要再调用os.listdir获取文件列表。

glob.glob( )

Python的字符串匹配功能，有**字符串后缀匹配、fnmatch匹配、glob模式匹配，三种，其中需求简单，用第一个，需求更多，用后两个。**

#### **使用os.walk 遍历目录树**

如果要查找某个目录和其子目录中的所有文件，可用os.walk函数。

walk 返回一个三元组**（dirpath,  dirnames,  filenames）**

其中 ，**dirpath: 当前目录、dirnames：当前目录下的子目录列表、filenames：当前目录下的文件列表**

```python
#遍历目录的代码

# 找到目录下最大（最老）的十个文件
```



------

### 5.4 高级文件处理接口 shutil

os模块定位是对操作系统的接口进行封装，**主要作用是跨平台**；

shutil 模块包含复制、移动、重命名、和删除文件及目录的函数，**主要作用是文件和目录的管理**。

两者互补，并不冲突，对于文件操作，应该尽量用shutil。

#### **复制文件和文件夹**

shutil.copy('a.py' , 'b.py')

shutil.copytree('dir1' , 'dir2')

#### **文件和文件夹的移动和重命名**

**shutil.move(src, dst)**,几乎等同于Linux下的mv命令

#### **删除目录**

和os的区别：os.rmdir()  和os.removedirs() 要求被删除的目录为空，否则不能强制删除，而shutil.rmtree()不管目录是否为非空，直接删除。

**一般用os.unlink 删除单个文件，用shutil.rmtree 删除整个目录**

------

### 5.5 文件内容管理

管理服务器时，可能有如下问题：

1）两个目录中文件到底有什么差别？

2）系统中有多少重复文件？

3）如何找到并删除系统中的重复文件？

#### **目录和文件比较**

filecmp 模块

filecmp.cmp()	比较两个文件是否相同，同则True

filecmp.cmpfiles()  	**同时比较两个不同目录下的多个文件**，并返回一个三元组

**其中，三元组包括相同文件、不同文件、和无法比较的文件**

filecmp.dircmp() 	用来比较两个目录，可以通过读取其属性的方式，获得目录之间的差异

注意，**并不会递归到子目录**。

```python
d = filecmp.dircmp('dir1', 'dir2')
#获取dir1 和dir2的基本差别
d.report() 
#获取dir1的文件及文件夹列表
d.left_list
#获取只在dir1中的文件及文件夹
d.left_only

#右侧同理
d.right_list
d.right_only
```

#### **MD5校验和比较**

校验码时通过散列函数计算而成，理论上，一个MD5哈希值可对应无限个文件，一般用于文件完整性的检查，尤其时用于检测文件传输、磁盘错误或其他情况下文件的正确性。

```shell
[root@bya Python_exercise]# md5sum /etc/passwd
358b7d4722d0f902077068c118c06128  /etc/passwd
```

Python中，应用hashlib模块

```python
import hashlib
d = hashlib.md5()
with open('/etc/passwd') as f:
    for line in f:
        d.update(line)
        
d.hexdigest()
```



#### **综合案例**：寻找目录下的重复文件

```python
####
```



------

### 5.6 管理压缩包

#### **使用tarfile库读取和创建	tar包**

tar包仅仅把多个文件进行打包便于传输，并不执行压缩操作。

**读取tar包**

与Python的文件管理操作类似，读取一个压缩包，需要打开，同时指定打开模式，并在操作完毕之后关闭文件。

```python
import tarfile
with tarfile.open('tarfile_add.tar') as t:
    for member_info in t.getmembers():
        print(member_info.name)
```

tarfile库中，最常用的函数有：

getnames	获取tar包中的文件列表

extract	提取单个文件

extractall	提取所有文件

**创建tar包**

```python
import tarfile
with tarfile.open('tarfile_add.tar', mode='w') as out:
    out.add('README.txt')
```

#### **使用tarfile库读取和创建	压缩包**

只需要在打开文件时，指定压缩算法即可

```python
#读取用gzip 压缩的tar包
with tarfile.open('tarfile_add.tar', mode='r:gz') as out:
#创建用bzip2算法压缩的tar包
with tarfile.open('tarfile_add.tar', mode='w:bz2') as out:
```

#### **备份指定文件到压缩包中**

```python
#待总结
```

#### 使用zipfile库创建和读取zip压缩包

一般，在windows下，使用zip压缩格式

**读取zip文件**

```python
import zipfile
example_zip = zipfile.ZipFile('example.zip')
example_zip.namelist()
```

常用方法：

namelist：	返回zip文件中包含所有文件和文件夹的字符串列表

extract：	从zip中提取单个文件

extractall：从zip中提取所有文件

**创建zip文件**

如要创建，必须以写模式打开zip文件，与tarfile不同，ZipFile的对象时通过write方法添加文件的。

```python
import zipfile
newZip = zipfile.ZipFile('new.zip', 'w')
newZip.write('spam.txt')
newZip.close()
```

**使用Python的命令行工具创建zip格式的压缩包**

大部分Linux操作系统没装unzip工具，所以解压zip格式压缩包会比较麻烦

**zipfile可以提供命令行接口**，一般包含以下几个选项

-l  现实zip包的文件列表

-c 创建zip压缩包

-e 提取zip压缩包

-t 验证文件时一个有效的zip压缩包

```shell
python -m zipfile -c test.zip photo.jpg note.txt
python -m zipfile -e test.zip for_test/
python -m zipfile -l test.zip
```



#### **使用shutil 创建和读取压缩包**

shutil是高层次的问价接口，shutil支持的格式可以通过**get_archive_formats**函数获取，有bztar，gztar，tar，zip格式。

```python
import shutil
shutil.get_archive_formats()
```

**shutil 创建压缩包**

shutil.make_archive() 有多个参数，但是只有**base_name**（压缩包名称，不包含扩展名） 和 **format**（压缩格式）者两个参数是必传的。其中，第三个餐宿是**root_dir**，用来指定创建压缩包的目录，默认是当前目录。

**python2 中，只有创建压缩包的函数，没有解压函数，python3 中，有解压函数，即 unpack_archive**

```python
shutil.unpack_archive(filename, extract_dir=None, format=None)
```

一般，shutil可以根据扩展名猜到压缩格式，不需要指定format函数

------

### 5.7 Python中执行外部命令

在Linux 操作中，总免不了在Python中执行shell命令，启动紫禁城，捕获命令的输出和退出状态码。目前就用subprocess模块，来创建和管理子进程。它提供了高层次的接口，用来替换os.system()，os.spawn\*()，os.popen\*()，popen2.\*() 和commands.\* 等模块与函数。

#### subprocess模块的便利函数

包括call，check_call，check_output函数

**call 函数格式：subprocess.call(args, \*, stdin=None, stdout=None, stderr=None, shell=False)**

```python
>>> import subprocess
>>> subprocess.call(['ls', '-l'])
total 4
-rw-r--r-- 1 root root   0 Sep 11 22:14 c.jpg
-rw-r--r-- 1 root root   0 Sep 11 22:14 d.jpg
-rw-r--r-- 1 root root 231 Sep 11 22:14 history.py
0
>>> subprocess.call("echo 123", shell=True)
123
0
>>> 
#如果设置了shell=True，则可以使用一个字符串命令，Python将先运行一个shell，再用shell来解释整个字符串
```

**check_call 函数**:  与call类似，区别在于异常情况下的返回形式不同，call成功返回0，不成功，返回非0；check_call则是成功返回0，**不成功抛出subprocess.CalledProcessError异常。**

```python
>>> subprocess.call("exit 1", shell=True)
1
>>> subprocess.check_call("exit 1", shell=True)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib64/python2.7/subprocess.py", line 542, in check_call
    raise CalledProcessError(retcode, cmd)
subprocess.CalledProcessError: Command 'exit 1' returned non-zero exit status 1
>>> 

```

**check_output函数**：call和check_call是直接将命令的输出结果打印到命令行终端，但是如果要进一步操作获取结果，或者将输出打印到日志文件中，可用check_output函数。

```python
>>> output = subprocess.check_output(['df', '-h'])
>>> print(output)
Filesystem               Size  Used Avail Use% Mounted on
/dev/mapper/centos-root   47G  6.0G   42G  13% /
devtmpfs                 897M     0  897M   0% /dev
tmpfs                    912M     0  912M   0% /dev/shm
tmpfs                    912M   17M  895M   2% /run
tmpfs                    912M     0  912M   0% /sys/fs/cgroup
/dev/sda1               1014M  179M  836M  18% /boot
tmpfs                    183M  4.0K  183M   1% /run/user/42
tmpfs                    183M   32K  183M   1% /run/user/0

>>> lines = output.split('\n')
>>> lines
['Filesystem               Size  Used Avail Use% Mounted on', '/dev/mapper/centos-root   47G  6.0G   42G  13% /', 'devtmpfs                 897M     0  897M   0% /dev', 'tmpfs                    912M     0  912M   0% /dev/shm', 'tmpfs                    912M   17M  895M   2% /run', 'tmpfs                    912M     0  912M   0% /sys/fs/cgroup', '/dev/sda1               1014M  179M  836M  18% /boot', 'tmpfs                    183M  4.0K  183M   1% /run/user/42', 'tmpfs                    183M   32K  183M   1% /run/user/0', '']
>>> for line in lines[1:-1]:
...     if line:
...         print(line.split()[-2])
... 
13%
0%
0%
2%
0%
18%
1%
1%
>>> 

```

check_output函数通过返回值来返回命令的执行结果，但是不会返回退出状态码表示异常，因此，可以通过抛出一个subprocess.CalledProcessError异常来表示命令执行出错。

```python
try:
    output = subprocess.check_out(['cmd','arg1','arg2'])
except subprocess.CallProcessError as e:
    output = e.output
    code = e.returncode
#默认只捕获命令的标准输出，若想捕获错误输出，需重定向
output = subprocess.check_output(['cmd','arg1','arg2'], stderr=subprocess.STDOUT)
```



#### **subprocess 模块的Popen类**

subprocess提供的便利函数，都是对Popen类的封装，当便利函数无法满足业务的需求时，也可以直接使用Popen类。

Popen对象创建后，子进程便会运行，Popen类提供了若干方法来控制子进程的运行，包括：

wait	等待子进程结束

poll	检查子进程状态

kill 	给子进程发送SIGKILL信号中止子进程

send_signal	向子进程发送信号

terminate	给子进程发送SIGTERM 终止子进程

communicate	与子进程交互——包括输入数据，获取自命令的标准输出和错误输出

```python
#如下函数对Popen执行shell命令进行封装,成功，返回状态码和标准输出，失败，返回状态码和错误输出
def execute_cmd(cmd):
    p = subprocess.Popen(cmd,
    					shell=True,
                        stdin=subprocess.PIPE,
                        stdout=subprocess.PIPE,
                        stderr=subprocess.PIPE)
    stdout, stderr = p.communicate()
    if p.returncode != 0:
        return p.returncode, stderr
    return p.returncode, stdout
#可以从此使用subprocess在Python中执行复杂的linux命令
```



------

### 5.8 综合案例：使用Python部署MongoDB

------