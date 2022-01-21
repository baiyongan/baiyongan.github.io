var myChart = echarts.init(document.getElementById('myskillcategoryscore'));
 
// 指定图表的配置项和数据

updateDate = '2020/5/16';
updateRecord = 1;

//类别
var category = ['numpy', 'pandas','matplotlib','scikit-learn','tensorflow', '', 
                'Flask','Django','FastAPI','bottle','',
                'mysql','mongodb','redis','memcached','elasticsearch','',
                'celery', 'RabbitMQ', 'kafka', '',
                // 'html', 'css', 'javascript', 'jquery', 'echarts', '',
                'javascript', 'jquery', 'echarts', 'd3', '',
                'docker','k8s', 'git', 'nginx', '',
                'ansible','linux', 'shell', '',
                'RESTful','设计模式','MVC','测试', '',];

//评分标准 
//  知道：  0~5 
//  基础：  5~15
//  进阶：  15~60
//  实战：  60~85
//  熟练：  85~95
//  精通：  95~100

//预期目标                
var lineData = [85, 95, 95, 75, 40, , // 数据分析
                65, 0, 0, 90, , // web框架
                70, 0, 80, 0, 40, , //数据库
                80, 0, 0, ,//消息队列
                60, 25, 80, 80, , //前端相关
                90, 20, 90, 60, , //部署实施
                80, 90, 95, , //运维管理
                90, 40, 50, 90, , //软件工程
                ];
// 目前水平                
var barData =  [60, 65, 85, 40, 5, , // 数据分析
                45, 0, 0, 85, , // web框架
                60, 0, 20, 0, 15, , //数据库
                50, 0, 0, , //消息队列
                25, 5, 70, 15, , //前端相关
                65, 5, 75, 15, , //部署实施
                70, 85, 90, , //运维管理
                30, 10, 20, 15, , //软件工程
                ];


var rateData = [];
for (var i = 0; i < category.length; i++) {
    var rate = barData[i] / lineData[i];
    rateData[i] = rate.toFixed(2);
}


// option
option = {
    title: {
        text: '具体分项技术栈评分',
        x: 'center',
        y: 4,
        textStyle: {
            color: '#FFFFFF',
            fontSize: 28,
            fontWeight: 'normal',
        },
        subtext: "——by 小白大侠于 " + updateDate + " 第" + updateRecord + "次评录",
        subtextStyle: {
            color: '#FFFFFF',
            fontSize: 20,
            align: 'right'
        },
    },
    backgroundColor: '#191E40',
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255,255,255,0.1)',

        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#7B7DDC'
            }
        }
    },
    toolbox: {
        right: 20,
        feature: {
            saveAsImage: {},
            restore: {},
            dataView: {},
            dataZoom: {},
        }
    },
    legend: {
        data: ['当前水平', '预期目标', '完成度'],
        textStyle: {
            color: '#B4B4B4',
            fontSize: 20
        },
        top: '10%',
    },
    grid: {
        x: '7%',
        width: '86%',
        y: '12%',
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#B4B4B4',
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            interval: 0, //坐标刻度之间的显示间隔，默认就可以了（默认是不重叠）
            rotate: 37, //调整数值改变倾斜的幅度（范围-90到90）
            grid: {
                left: '30%',
                bottom: '50%'
            },
            textStyle: {
                color: '#FFFFFF',
            },
            fontSize: 12, //字体大小
        }
    },
    yAxis: [{

            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#B4B4B4',
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#FFFFFF',
                },
                fontSize: 16, //字体大小
                formatter: '{value} ',
            }
        },
        {

            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#B4B4B4',
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#FFFFFF',
                },
                fontSize: 16, //字体大小
                formatter: '{value} ',
            }
        }
    ],

    series: [{
            name: '完成度',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#F02FC2'
                },
            },
            data: rateData
        },

        {
            name: '当前水平',
            type: 'bar',
            barWidth: 12,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#956FD4'
                            },
                            {
                                offset: 1,
                                color: '#3EACE5'
                            }
                        ]
                    )
                }
            },
            data: barData
        },

        {
            name: '预期目标',
            type: 'bar',
            barGap: '-100%',
            barWidth: 12,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: 'rgba(156,107,211,0.5)'
                            },
                            {
                                offset: 0.2,
                                color: 'rgba(156,107,211,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(156,107,211,0)'
                            }
                        ]
                    )
                }
            },
            z: -12,

            data: lineData
        },
    ]
};


myChart.setOption(option);
