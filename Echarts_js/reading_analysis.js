var myChart = echarts.init(document.getElementById('myanalysis'));
 
        // 指定图表的配置项和数据

        var option = {
                title : {
                    show: true, // false
                    text: '阅读时间统计分析',
                    textStyle: {
                            fontStyle: 'normal', // 'italic', 'oblique',
                            fontWeight: 'bolder',  //'normal','bold','bolder','lighter',100|200|300|400 
                            fontFamily:'Microsoft YaHei', // default: 'sans-serif', 'serif', 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', 
                            fontSize: '35',
                            align: 'center', // 'center', 'right',
                            },
                    left: 'center', // 20|30, 49%, 'left','center','rgiht',
                    top: '90%', // 20|30, 49%, 'top','middle','bottom',
                },
                tooltip : {
                    trigger: 'item',
                    //formatter: "{a} <br/>{b} : {c} ({d}%)"
                    //use the data of list to display
                    formatter: function (x) {
                        return x.data.des;
                    }
                },
                legend: {
                    show: false,
                    orient: 'horizontal',
                    bottom: '5%',
                    left: 'left',
                    data: ["百读不厌", "国学根基", "灵感激发","明达人生", "视野拓展", "思维锻炼", "性格砥砺","思想启蒙", "文学涵养",  "娱乐消遣"]
                },
                series : [
                    {
                        name: '用时统计',
                        type: 'pie',
                        selectedMode:'single',
                        selectedOffset:50,
                        
                        //basic Pie
                        radius : '60%',
                        radius: ['35%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontStyle: 'normal',
                                    fontSize: '40',
                                    fontFamily:'Microsoft YaHei',
                                    fontWeight: 'lighter'  //'normal','bold','bolder','lighter',100|200|300|400
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false,
                            }
                        },

                        data: [
                          {
                            "name": "百读不厌",
                            "value": 158.62,
                            "des": "红楼梦 73:21:47 <br/>明朝那些事儿  65:43:17 </br>围城  15:32:17 </br>私人阅读史   3:44:39 </br> 红楼梦–衣食住行    0:15:00"
                          },
                          {
                            "name": "国学根基",
                            "value": 134.69,
                            "des": "三国演义    37:26:39 <br/> 史记  29:51:56 <br/> 论语  25:20:54 <br/> 大学  9:08:51 <br/> 中国哲学简史  6:30:14 <br/> 六祖坛经    5:50:43 <br/>  世说新语    5:33:18 <br/> 传习录 4:02:44 <br/>孟子  3:50:59 <br/> 道德经 2:00:18 <br/> 孙子兵法    1:41:10<br/> 庄子  1:12:27 <br/> 国学常识    1:11:48 <br/> 心经  0:49:27 <br/>   国史大纲    0:09:52"
                          },
                          {
                            "name": "灵感激发",
                            "value": 37.12,
                            "des": "越读者 19:37:13    <br/>暗时间 9:01:15 <br/>断舍离 6:08:56 <br/>逛书架 1:41:22 <br/>买书琐记    0:38:28 <br/>"
                          },
                          {
                            "name": "明达人生",
                            "value": 90.58,
                            "des": "苏东坡传    18:26:47    <br/>把时间当作朋友 13:12:18    <br/>往事并不如烟  12:45:36  <br/>儒林外史    11:47:19    <br/>哲学的慰藉   6:03:51 <br/>吾国与吾民   5:46:04 <br/>  心流  5:04:52 <br/>  局外人 4:44:47 <br/> 新生  3:32:03 <br/>人生不过如此  1:43:52 <br/>工作DNA   1:37:18 <br/>别闹了，费曼先生    1:22:22 <br/>我们仨 1:02:35 <br/>悉达多 0:49:37 <br/>博尔赫斯谈话录 0:41:20 <br/>曾国藩家书   0:35:04 <br/>亲密关系    0:27:59 <br/> 西西弗神话   0:45:48 <br/>  鼠疫  0:05:30 <br/>"
                          },
                          {
                            "name": "视野拓展",
                            "value": 71.48,
                            "des": "未来简史    23:48:01    <br/>人类简史    14:55:31    <br/>数学之美    6:33:38 <br/>乡土中国    4:52:10 <br/>人类群星闪耀时 4:42:24 <br/>稀缺  4:31:17 <br/>大学之路    3:33:38 <br/>历史深处的忧虑 1:43:57 <br/>从一到无穷大  1:41:36 <br/>技术的本质   1:29:05 <br/>中国大历史   1:26:12 <br/>集装箱改变世界 1:04:31 <br/>信息之美    0:45:59 <br/>中国文学史   0:14:24 <br/>万历十五年   0:06:21 <br/>"
                          },
                          {
                            "name": "思维锻炼",
                            "value": 10.69,
                            "des": "形式逻辑    10:26:25    <br/>策略思维    0:15:07 <br/>"
                          },
                          {
                            "name": "性格砥砺",
                            "value": 58.25,
                            "des": "约翰克里斯朵夫 16:46:35    <br/>奇特的一生   16:05:10    <br/>知行合一王阳明 10:34:58    <br/>富兰克林自传  6:14:18 <br/>人生的枷锁   3:58:24 <br/>司马迁之人格与风格   2:06:26 <br/>钱钟书传    0:55:55 <br/>报任安书    0:51:49 <br/>傅雷家书    0:36:45 <br/>一网打尽    0:04:55 <br/>"
                          },
                          {
                            "name": "思想启蒙",
                            "value": 66.32,
                            "des": "人生的智慧   21:52:27    <br/> 血酬定律    10:37:54    <br/>美丽新世界   9:39:44 <br/>理想国 7:05:07 <br/>丑陋的中国人  6:27:40 <br/>拆掉思维的墙  5:33:30 <br/> 娱乐至死    4:13:20 <br/>伤逝  0:49:38 <br/>"
                          },
                          {
                            "name": "文学涵养",
                            "value": 39.64,
                            "des": "白鹿原 30:25:01    <br/>活着  5:30:46 <br/>喻世明言    1:28:34 <br/>博尔赫斯短篇小说    1:21:18 <br/>城堡  0:41:00 <br/>雪国  0:11:36 <br/>"
                          },
                          {
                            "name": "娱乐消遣",
                            "value": 25.96,
                            "des": "格调  6:24:07 <br/>许三观卖血记  4:16:50 <br/>人间失格    3:27:03 <br/>在爱情与欲望之间    2:15:08 <br/>苦妓回忆录   2:13:35 <br/>蝇王  1:43:23 <br/>一句顶一万句  1:33:50 <br/>儒林外史连环画 1:24:55 <br/>王朔文集    1:14:58 <br/>人兽鬼 0:57:12 <br/>三国史话    0:11:19 <br/>小说稗类    0:08:14 <br/>怦然心动的人生整理魔法 0:06:54 <br/>"
                          }
                        ],

                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

myChart.setOption(option);
