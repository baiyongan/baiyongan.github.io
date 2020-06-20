var myChart = echarts.init(document.getElementById('command1'));
 
myChart.showLoading();

var data = {
    "name": "命令概览",
    "children": [
        {
            "name": "线上查询及帮助命令 (2 个)",
            "children": [
                {"name": "man", },
                {"name": "help", },
           ]
        },
        {
            "name": "文件和目录操作命令 (18 个)",
            "children": [
                {"name": "ls"},
                {"name": "cd"},
                {"name": "cp"},
                {"name": "find"},
                {"name": "mkdir"},
                {"name": "mv"},
                {"name": "pwd"},
                {"name": "rename"},
                {"name": "rm"},
                {"name": "rmdir"},
                {"name": "touch"},
                {"name": "tree"},
                {"name": "basename"},
                {"name": "dirname"},
                {"name": "chattr"},
                {"name": "lsattr"},
                {"name": "file"},
                {"name": "md5sum"},
           ]
        },
        {
           "name": "查看文件及内容处理命令（21 个）",
           "children": [
            {"name": "cat",},
            {"name": "tac", },
            {"name": "more",},
            {"name": "less",},
            {"name": "head",},
            {"name": "tail",},
            {"name": "cut",},
            {"name": "split",},
            {"name": "paste",},
            {"name": "sort", },
            {"name": "uniq",},
            {"name": "wc",},
            {"name": "iconv",},
            {"name": "dos2unix",},
            {"name": "diff",},
            {"name": "vimdiff",},
            {"name": "rev",},
            {"name": "grep/egrep", },
            {"name": "join",},
            {"name": "tr",},
            {"name": "vi/vim",},
           ]
          },
          {
           "name": "文件压缩及解压缩命令（4 个）",
           "children": [
            {"name": "tar",},
            {"name": "unzip", },
            {"name": "gzip",},
            {"name": "zip",},
           ]
          },
        {
           "name": "信息显示命令（11 个）",
           "children": [
            {"name": "uname",},
            {"name": "hostname", },
            {"name": "dmesg",},
            {"name": "uptime",},
            {"name": "stat",},
            {"name": "du",},
            {"name": "df",},
            {"name": "top",},
            {"name": "free",},
            {"name": "date", },
            {"name": "cal",},
           ]
          },       
          {
           "name": "搜索文件命令（4 个）",
           "children": [
            {"name": "which",},
            {"name": "find", },
            {"name": "whereis",},
            {"name": "locate",},
           ]
          },
          {
           "name": "用户管理命令（10 个）",
           "children": [
            {"name": "useradd",},
            {"name": "usermod", },
            {"name": "userdel",},
            {"name": "groupadd",},
            {"name": "passwd",},
            {"name": "chage",},
            {"name": "id",},
            {"name": "su",},
            {"name": "visudo",},
            {"name": "sudo", },
           ]
          },
          {
           "name": "基础网络操作命令（11 个）",
           "children": [
            {"name": "telnet",},
            {"name": "ssh", },
            {"name": "scp",},
            {"name": "wget",},
            {"name": "ping",},
            {"name": "route",},
            {"name": "ifconfig",},
            {"name": "ifup",},
            {"name": "ifdown",},
            {"name": "netstat", },
            {"name": "ss",},
           ]
          },
          {
           "name": "深入网络操作命令（9 个）",
           "children": [
            {"name": "nmap",},
            {"name": "lsof", },
            {"name": "mail",},
            {"name": "mutt",},
            {"name": "nslookup",},
            {"name": "dig",},
            {"name": "host",},
            {"name": "traceroute",},
            {"name": "tcpdump",},
           ]
          },
          {
           "name": "有关磁盘与文件系统的命令（16 个）",
           "children": [
            {"name": "mount",},
            {"name": "umount", },
            {"name": "fsck",},
            {"name": "dd",},
            {"name": "dumpe2fs",},
            {"name": "dump",},
            {"name": "fdisk",},
            {"name": "parted",},
            {"name": "mkfs",},
            {"name": "partprobe", },
            {"name": "e2fsck",},
            {"name": "mkswap", },
            {"name": "swapon",},
            {"name": "swapoff",},
            {"name": "sync",},
            {"name": "resize2fs",},
           ]
          },
          {
           "name": "系统权限及用户授权相关命令（4 个）",
           "children": [
            {"name": "chmod", },
            {"name": "chown",},
            {"name": "chgrp",},
            {"name": "umask",},
           ]
          },
          {
           "name": "查看系统用户登陆信息的命令（7 个）",
           "children": [
            {"name": "whoami",},
            {"name": "who",},
            {"name": "w", },
            {"name": "last",},
            {"name": "lastlog", },
            {"name": "users",},
            {"name": "finger",},
           ]
          },
           {
           "name": "内置命令及其它（19 个）",
           "children": [
            {"name": "echo",},
            {"name": "printf", },
            {"name": "rpm",},
            {"name": "yum",},
            {"name": "watch",},
            {"name": "alias",},
            {"name": "unalias",},
            {"name": "date",},
            {"name": "clear",},
            {"name": "history", },
            {"name": "eject",},
            {"name": "time",},
            {"name": "nc",},
            {"name": "xargs",},
            {"name": "exec",},
            {"name": "export",},
            {"name": "unset",},
            {"name": "type",},
            {"name": "bc",},
           ]
          },
           {
           "name": "系统管理与性能监视命令 (9 个)",
           "children": [
            {"name": "chlconfig", },
            {"name": "vmstat",},
            {"name": "mpstat",},
            {"name": "iostat",},
            {"name": "sar",},
            {"name": "ipcs",},
            {"name": "ipcrm",},
            {"name": "strace",},
            {"name": "ltrace",},
           ]
          },
          {
           "name": "关机/重启/注销和查看系统信息的命令（6 个）",
           "children": [
            {"name": "shutdown",},
            {"name": "halt",},
            {"name": "poweroff",},
            {"name": "logout",},
            {"name": "exit",},
            {"name": "Ctrl+d",},
            {"name": "ltrace",},
           ]
          },
           {
           "name": "进程管理相关命令（15 个）",
           "children": [
            {"name": "bg",},
            {"name": "fg",},
            {"name": "jobs",},
            {"name": "kill",},
            {"name": "killall",},
            {"name": "pkill", },
            {"name": "crontab",},
            {"name": "ps",},
            {"name": "pstree",},
            {"name": "nice/renice",},
            {"name": "nohup",},
            {"name": "pgrep",},
            {"name": "runlevel",},
            {"name": "init",},
            {"name": "service",},
           ]
          },
    ]
};


myChart.hideLoading();

echarts.util.each(data.children, function (data, index) {
        index % 1 === 0 && (data.collapsed = true);
    });

myChart.setOption(option = {
    tooltip: {
        trigger: 'item',
    //    triggerOn: 'mousemove'
        //formatter: function (x) {
        //  return x.data.children.children.des;
         //     }，
        },
    legend: {
        top: '2%',
        left: '3%',
        orient: 'vertical',
        data: [{
            name: 'Total Command List',
            icon: 'rectangle'
        } ],
        borderColor: '#c23531'
    },

    series:[
        {
            type: 'tree',
            name: 'Total Command List',
            data: [data],
            top: '5%',
            left: '12%',
            bottom: '2%',
            right: '37%',
            symbolSize: 13,

            label: {
                normal: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 17,
                    fontWeight: 'bolder',
                    fontStyle: 'oblique'
                }
            },

            leaves: {
                label: {
                    normal: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                }
            },

            expandAndCollapse: true,

            animationDuration: 550,
            animationDurationUpdate: 750

        }

    ]
});
        

 // 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);