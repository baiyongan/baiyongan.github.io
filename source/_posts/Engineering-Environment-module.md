---

title: Environment Modules 环境变量模块化管理工具的使用
date: 2019-02-23 14:13:54
categories: 
	- Engineering
tags: 
 - modules
 - HPC
 - 环境变量

---

### 1. Modules 功能简介

​         超级计算机的硬件设施和应用软件，分别是整个超算系统的最底层和最顶层，在它们之间，还存在着我们称之为软件栈（software stack）的系统软件：包括编译器、并行运行环境、作业调度系统、性能分析和调试工具等等。一般较为成熟的超算平台，都必备多种版本、不同种类的编译器、MPI 库，以及数学库等；并在此基础之上，进行各类应用软件的编译与环境配置。于普通使用者而言，因使用需求的变化，其所需的使用场景也不尽相同。若用户自行配置，则可能因为对命令行操作生疏等原因，导致环境变量配置出错，学习成本高，影响使用效率。

Environment module 工具，常用于高性能计算集群（即HPC ：High  Perfermance Computing ）的环境配置管理上。它可以将软件编译器，MPI库，数学库、应用软件（计算类软件、分析类软件等）等，以模块的方式，统一到一个框架下，使得用户可以动态切换环境变量，便捷高效。且由于很多资源调度软件，如LSF、PBS、MOAB等，可以通过脚本文件来提交作业。所以，module工具同样可以在shell scripts中使用。

<!--more-->

若要充分发挥Environment  module 工具的功用，只需要记住两点即可:

- 1. 编写modulefiles，将应用软件所需的环境变量等写入其中，配置成模块。

- 2. 使用module command(s)，动态调用已经配置好的模块。



###    2. Modules 安装及配置

#### 2.0 测试环境

CentOS 7.2系统，modules版本为4.2.1，源码安装方式，安装位置为/opt目录。

#### 2.1  源码编译

``` shell
上传module 压缩包至/opt目录
cd /opt
tar -xvf  modules-4.2.1.tar.gz
./configure --help #查看帮助页面
./configure --prefix=/opt/modules/modules421 #指定安装目录为/opt/modules/modules421
make install
make

设置软链接，实现登录启动modules工具
ln -s  /opt/modules/modules421/init/profile.sh /etc/profile.d/modules.sh
ln -s  /opt/modules/modules421/init/profile.csh /etc/profile.d/modules.csh
source /etc/profile #或重新登录命令行界面之后，则可以使用module 的一系列命令

修改modulerc文件，自定义$MODULEPATH变量
在/opt/modules/modules421/init文件夹下的modulerc文件，可以自定义多个modulefiles所在的文件夹

[root@node02 init]#  echo $MODULEPATH   #查看默认的module path
/opt/modules/modules421/modulefiles
cd $MODULEPATH
mkdir  {application,compiler,cuda,mathlib,mpi,python,tool}
更新modulerc文件。
vim /opt/modules/modules421/init/modulerc

#%Module1.0
# This file defines  the initial setup for the modulefiles search path
# and modulefiles you  want to load by default for all users. It should
# contains a lines of  module command like 'module use path' and
# 'module load mod'

module use --append  {/opt/modules/modules421/modulefiles/application}
module use --append  {/opt/modules/modules421/modulefiles/compiler}
module use --append  {/opt/modules/modules421/modulefiles/cuda}
module use --append  {/opt/modules/modules421/modulefiles/mathlib}
module use --append  {/opt/modules/modules421/modulefiles/mpi}
module use --append  {/opt/modules/modules421/modulefiles/python}
module use --append  {/opt/modules/modules421/modulefiles/tool}

重新登陆，查看自定义的MODULEPATH。
[root@node02 init]#  source /etc/profile
[root@node02 init]#  echo $MODULEPATH
/opt/modules/modules421/modulefiles/application:/opt/modules/modules421/modulefiles/compiler:/opt/modules/modules421/modulefiles/cuda:/opt/modules/modules421/modulefiles/mathlib:/opt/modules/modules421/modulefiles/mpi:/opt/modules/modules421/modulefiles/python:/opt/modules/modules421/modulefiles/tool


```

#### 2.2 编写配置modulefiles文件

##### modulefile文件创建

以gcc-4.8.5为例：

```shell
[root@node02  modulefiles]# pwd
/opt/modules/modules421/modulefiles
[root@node02  modulefiles]# mkdir -p compiler/{gcc,intel,pgi}
[root@node02  modulefiles]# tree compiler/
compiler/
├── gcc
├── intel
└── pgi
3 directories, 0 files

命名规则：一般"foldername/modulefile"  即 以"软件名/版本号"进行区分，gcc-4.8.5 编译器的modulefile文件，则命名为4.8.5。
```

##### modulefile编写规范

以一个典型的modulefile为例：

```shell
#%Module 1.0
#
#Edited by BYA in  2018/3/6
#Modified by BYA one  day in the future
#
#
#conflict               
module-whatis   Intel Compiler version 2015.3.187  (icc,icpc,ifort)
#module load
prepend-path    PATH             /opt/intel/composer_xe_2015.3.187/bin/intel64
prepend-path    LIBRARY_PATH     /opt/intel/composer_xe_2015.3.187/compiler/lib/intel64
prepend-path    LD_LIBRARY_PATH  /opt/intel/composer_xe_2015.3.187/compiler/lib/intel64
prepend-path    MANPATH          /opt/intel/composer_xe_2015.3.187/man

setenv          CC              icc
setenv          CXX             icpc
setenv          FC              ifort
setenv          F77             ifort
setenv          F90             ifort
#### 
```

其中：

**#%Module 1.0**    抬头须存在；

**conflict**   一行，代表与本模块冲突的软件模块，若没有，可#注释；

**module-whatis**     指明模块的简单介绍，使用"module whatis 模块名"命令的时候可以查看；

**module load**，代表该模块之前需要预先加载的其他模块；

**prepend-path  环境变量名 具体路径**

一般的环境变量有PATH、LIBRARY_PATH、LD_LIBRARY_PATH、MANPATH等，prepend-path 会把指定路径，**追加**到对应的环境变量中 ；

**setenv**    **环境变量名 具体值**   

setenv 会设定环境变量的具体值。 



####   2.3 整体规划与实施

若要配置比较大规模的超算环境，需要将软件需求，协调规范到一个整体框架之下，如果不清楚如何配置，可以调研参考下各大超算平台的配置：如**中科大超算中心**，**中科院超算中心**等。

如下为针对某项目需求，所制定的设计初稿：

![plan_on_hpc](/images/plan_on_hpc.png)

最终的实现结果如下：

![hpc_module](/images/hpc_module.png)



### 3. Modules 使用方式

#### 3.1 modules 常用指令

显示manual ：module  或 module –h，man module 

查看可用模块：module  avail  

查看已加载模块：module  list   

加载模块：module load/add  MODULE_NAME  

卸载模块：module unload/rm  MODULE_NAME  

切换模块：module  switch/swap OLD_MODULE NEW_MODULE

卸载所有已加载的模块：module  purge

显示模块说明：module whatis  MODULE_NAME

显示该模块内容：module  display/show MODULE_NAME

####  3.2 modules 使用示例

```shell
示例使用：
[root@hpc-material02  ~]# module purge
[root@hpc-material02  ~]# module list
No Modulefiles  Currently Loaded.
[root@hpc-material02  ~]# module load openmpi/1.6.5/gcc/4.8.5
[root@hpc-material02  ~]# module list
Currently Loaded  Modulefiles:
1) openmpi/1.6.5/gcc/4.8.5  
[root@hpc-material02  ~]# module whatis openmpi/1.6.5/gcc/4.8.5
----------------------------------------  /opt/modules/ModuleFiles/mpi -----------------------------------------
openmpi/1.6.5/gcc/4.8.5:  Openmpi-1.6.5 compiled by gcc-4.8.5
[root@hpc-material02  ~]# module display openmpi/1.6.5/gcc/4.8.5
-------------------------------------------------------------------
/opt/modules/ModuleFiles/mpi/openmpi/1.6.5/gcc/4.8.5:
module-whatis       Openmpi-1.6.5  compiled by gcc-4.8.5
prepend-path        PATH        /opt/openmpi/openmpi-1.6.5_gcc-4.8.5/bin
prepend-path        LD_LIBRARY_PATH        /opt/openmpi/openmpi-1.6.5_gcc-4.8.5/lib
prepend-path        MANPATH        /opt/openmpi/openmpi-1.6.5_gcc-4.8.5/share/man
-------------------------------------------------------------------
[root@hpc-material02  ~]# echo $PATH | sed 's/:/\n/g'
/opt/openmpi/openmpi-1.6.5_gcc-4.8.5/bin
/usr/local/sbin
/usr/local/bin
/usr/sbin
/usr/bin
/root/bin
[root@hpc-material02  ~]# echo $LD_LIBRARY_PATH | sed 's/:/\n/g'
/opt/openmpi/openmpi-1.6.5_gcc-4.8.5/lib
[root@hpc-material02  ~]# module rm openmpi/1.6.5/gcc/4.8.5 
[root@hpc-material02  ~]# echo $PATH | sed 's/:/\n/g'
/usr/local/sbin
/usr/local/bin
/usr/sbin
/usr/bin
/root/bin
[root@hpc-material02  ~]# echo $LD_LIBRARY_PATH | sed 's/:/\n/g'
 
[root@hpc-material02  ~]# 
```



### 4. 使用建议

作业调度的时候，module可以写入提交脚本之中，需要先将**MODULEPATH**变量export 一下，然后使用module 相关的命令即可；

编译与配置的时候，可参考下INSTALL.txt文件。



###  5. 参考文献

[1] [Environment Modules (software) wikipedia](https://en.wikipedia.org/wiki/Environment_Modules_(software))

[2] [Environment Modules 简明教程](https://www.cnblogs.com/li12242/p/9994633.html)


