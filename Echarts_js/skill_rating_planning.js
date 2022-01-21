var myChart = echarts.init(document.getElementById('myratingplanning'));
 
        // 指定图表的配置项和数据

updateDate = '2020/5/16';
updateRecord = 1;

custom_color = [
    [0.05, '#E43F3D'],
    [0.2, '#E98E2C'],
    [0.6, '#7CBB55'],
    [0.80, '#40E0D0'],
    [0.95, '#87CEFA'],
    [1, '#8470FF']
]

data1 = {name: "Python", "present": 82, "goal": 96, position: ['16.6%', '28%'], radius: '33.3%'};
data2 = {name: "Go",     "present": 9,  "goal": 85, position: ['49.8%', '28%'], radius: '33.3%'};
data3 = {name: "Docker", "present": 56, "goal": 90, position: ['83%', '28%'],   radius: '33.3%'};
data4 = {name: "Linux",  "present": 81, "goal": 92, position: ['16.6%', '67%'], radius: '33.3%'};
data5 = {name: "git" ,   "present": 61, "goal": 88, position: ['49.8%', '67%'], radius: '33.3%'};
data6 = {name: "SQL" ,   "present": 45, "goal": 75, position: ['83%', '67%'],   radius: '33.3%'};



option = {
    title: {
        x: "center",
        top: '1%',
        text: '个人主要技术栈—能力剖析与规划',
        textStyle: {
            color: '#778899',
            fontSize: 32,
        },
        subtext: "——by 小白大侠于 " + updateDate + " 第" + updateRecord + "次评录",
        subtextStyle: {
            color: '#778899',
            fontSize: 20,
            align: 'right'
        },
    },

    legend: {
        show: true,
        orient: 'horizontal',
        bottom: '6%',
        textStyle: {
            color: '#778899',
            fontSize: 20,
            fontWeight: ''
        },
        right: 'auto',
        data: ['Python', 'Go', 'Docker', 'Linux', 'git', 'SQL'],
    },

    tooltip: {
        show: true,
        // formatter: "{a} <br/>{b} {c}",
        backgroundColor: '#F7F9FB',
        borderColor: '#92DAFF',
        borderWidth: '1px',
        textStyle: {
            color: 'black',
            fontSize: 20
        },
        formatter: function(param) {
            return '<em style="color:' + param.color + ';">' + param.name + ' : ' + param.value + '</em> 分'
        }
    },

    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },

    //data1 
    series: [{
            name: data1.name,
            type: 'gauge',
            center: data1.position,
            radius: data1.radius,
            data: [{
                    value: data1.present,
                    name: '实际水平',
                },
                {
                    value: data1.goal,
                    name: '预期目标',
                }
            ],
            detail: {
                show: true,
                formatter: function(param) {
                    var level = '';
                    if (param < 5) {
                        level = '了解应用场景'
                    } else if (param < 20) {
                        level = '知道基础概念'
                    } else if (param < 60) {
                        level = "掌握常用功能"
                    } else if (param < 80) {
                        level = "进阶项目实战"
                    } else if (param < 95) {
                        level = '高阶熟练应用'
                    } else if (param <= 100) {
                        level = '精通底层原理'
                    } else {
                        level = '暂无';
                    }
                    return data1.name + " \n\n目前: " + level;
                },
                offsetCenter: [0, 100],
                textStyle: {
                    fontSize: 26,
                },
            },
            title: { //标题
                show: false
            },
            min: 0,
            max: 100,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 20,
                    shadowBlur: 0,
                    color: custom_color
                }
            },
            axisTick: {
                show: true,
                splitNumber: 1,
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {},
            },
            axisLabel: {
                textStyle: {
                    fontSize: 18,
                    fontWeight: ""
                }
            },
            pointer: {
                show: true,
                width: 6,
            },

        },


        //data2
        {
            name: data2.name,
            type: 'gauge',
            center: data2.position,
            radius: data2.radius,
            data: [{
                    value: data2.present,
                    name: '实际水平',
                },
                {
                    value: data2.goal,
                    name: '预期目标',
                }
            ],
            detail: {
                show: true,
                formatter: function(param) {
                    var level = '';
                    if (param < 5) {
                        level = '了解应用场景'
                    } else if (param < 20) {
                        level = '知道基础概念'
                    } else if (param < 60) {
                        level = "掌握常用功能"
                    } else if (param < 80) {
                        level = "进阶项目实战"
                    } else if (param < 95) {
                        level = '高阶熟练应用'
                    } else if (param <= 100) {
                        level = '精通底层原理'
                    } else {
                        level = '暂无';
                    }
                    return data2.name + " \n\n目前: " + level;
                },
                offsetCenter: [0, 100],
                textStyle: {
                    fontSize: 26,
                },
            },
            title: { //标题
                show: false
            },
            min: 0,
            max: 100,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 20,
                    shadowBlur: 0,
                    color: custom_color
                }
            },
            axisTick: {
                show: true,
                splitNumber: 1,
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    //color:'black'
                },
            },
            axisLabel: {
                textStyle: {
                    fontSize: 18,
                    fontWeight: ""
                }
            },
            pointer: {
                show: true,
                width: 6,
            },

        },


        //data3
        {
            name: data3.name,
            type: 'gauge',
            center: data3.position,
            radius: data3.radius,
            data: [{
                    value: data3.present,
                    name: '实际水平',
                },
                {
                    value: data3.goal,
                    name: '预期目标',
                }
            ],
            detail: {
                show: true,
                formatter: function(param) {
                    var level = '';
                    if (param < 5) {
                        level = '了解应用场景'
                    } else if (param < 20) {
                        level = '知道基础概念'
                    } else if (param < 60) {
                        level = "掌握常用功能"
                    } else if (param < 80) {
                        level = "进阶项目实战"
                    } else if (param < 95) {
                        level = '高阶熟练应用'
                    } else if (param <= 100) {
                        level = '精通底层原理'
                    } else {
                        level = '暂无';
                    }
                    return data3.name + " \n\n目前: " + level;
                },
                offsetCenter: [0, 100],
                textStyle: {
                    fontSize: 26,
                },
            },
            title: { //标题
                show: false
            },
            min: 0,
            max: 100,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 20,
                    shadowBlur: 0,
                    color: custom_color
                }
            },
            axisTick: {
                show: true,
                splitNumber: 1,
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {},
            },
            axisLabel: {
                textStyle: {
                    fontSize: 18,
                    fontWeight: ""
                }
            },
            pointer: {
                show: true,
                width: 6,
            },
        },


        //data4
        {
            name: data4.name,
            type: 'gauge',
            center: data4.position,
            radius: data4.radius,
            data: [{
                    value: data4.present,
                    name: '实际水平',
                },
                {
                    value: data4.goal,
                    name: '预期目标',
                }
            ],
            detail: {
                show: true,
                formatter: function(param) {
                    var level = '';
                    if (param < 5) {
                        level = '了解应用场景'
                    } else if (param < 20) {
                        level = '知道基础概念'
                    } else if (param < 60) {
                        level = "掌握常用功能"
                    } else if (param < 80) {
                        level = "进阶项目实战"
                    } else if (param < 95) {
                        level = '高阶熟练应用'
                    } else if (param <= 100) {
                        level = '精通底层原理'
                    } else {
                        level = '暂无';
                    }
                    return data4.name + " \n\n目前: " + level;
                },
                offsetCenter: [0, 100],
                textStyle: {
                    fontSize: 26,
                },
            },
            title: { //标题
                show: false
            },
            min: 0,
            max: 100,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 20,
                    shadowBlur: 0,
                    color: custom_color
                }
            },
            axisTick: {
                show: true,
                splitNumber: 1,
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {},
            },
            axisLabel: {
                textStyle: {
                    fontSize: 18,
                    fontWeight: ""
                }
            },
            pointer: {
                show: true,
                width: 6,
            },
        },


        //data5
        {
            name: data5.name,
            type: 'gauge',
            center: data5.position,
            radius: data5.radius,
            data: [{
                    value: data5.present,
                    name: '实际水平',
                },
                {
                    value: data5.goal,
                    name: '预期目标',
                }
            ],
            detail: {
                show: true,
                formatter: function(param) {
                    var level = '';
                    if (param < 5) {
                        level = '了解应用场景'
                    } else if (param < 20) {
                        level = '知道基础概念'
                    } else if (param < 60) {
                        level = "掌握常用功能"
                    } else if (param < 80) {
                        level = "进阶项目实战"
                    } else if (param < 95) {
                        level = '高阶熟练应用'
                    } else if (param <= 100) {
                        level = '精通底层原理'
                    } else {
                        level = '暂无';
                    }
                    return data5.name + " \n\n目前: " + level;
                },
                offsetCenter: [0, 100],
                textStyle: {
                    fontSize: 26,
                },
            },
            title: { //标题
                show: false
            },
            min: 0,
            max: 100,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 20,
                    shadowBlur: 0,
                    color: custom_color
                }
            },
            axisTick: {
                show: true,
                splitNumber: 1,
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {},
            },
            axisLabel: {
                textStyle: {
                    fontSize: 18,
                    fontWeight: ""
                }
            },
            pointer: {
                show: true,
                width: 6,
            },
        },


        //data6
        {
            name: data6.name,
            type: 'gauge',
            center: data6.position,
            radius: data6.radius,
            data: [{
                    value: data6.present,
                    name: '实际水平',
                },
                {
                    value: data6.goal,
                    name: '预期目标',
                }
            ],
            detail: {
                show: true,
                formatter: function(param) {
                    var level = '';
                    if (param < 5) {
                        level = '了解应用场景'
                    } else if (param < 20) {
                        level = '知道基础概念'
                    } else if (param < 60) {
                        level = "掌握常用功能"
                    } else if (param < 80) {
                        level = "进阶项目实战"
                    } else if (param < 95) {
                        level = '高阶熟练应用'
                    } else if (param <= 100) {
                        level = '精通底层原理'
                    } else {
                        level = '暂无';
                    }
                    return data6.name + " \n\n目前: " + level;
                },
                offsetCenter: [0, 100],
                textStyle: {
                    fontSize: 26,
                },
            },
            title: { //标题
                show: false
            },
            min: 0,
            max: 100,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 20,
                    shadowBlur: 0,
                    color: custom_color
                }
            },
            axisTick: {
                show: true,
                splitNumber: 1,
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    //color:'black'
                },
            },
            axisLabel: {
                textStyle: {
                    fontSize: 18,
                    fontWeight: ""
                }
            },
            pointer: {
                show: true,
                width: 6,
            },
        },
    ]
};




myChart.setOption(option);
