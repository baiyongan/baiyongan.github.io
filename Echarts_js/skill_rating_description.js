var myChart = echarts.init(document.getElementById('myratiingrule'));
 
        // 指定图表的配置项和数据

updateDate = '2020/5/16';
updateRecord = 1;

custom_data = [
    ['了解', 5,  '#E43F3D'],
    ['基础', 15, '#E98E2C'],
    ['掌握', 40, '#7CBB55'],
    ['进阶', 20, '#40E0D0'],
    ['实战', 15, '#87CEFA'],
    ['精通', 5,  '#8470FF']
]

option = {
    title: {
        x: "center",
        top: '0%',
        text: '各技术等级的掌握程度描述',
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
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['了解', '基础', '掌握', '进阶', '实战', '精通'],
        orient: 'vertical',
        bottom: '8%',
        left: '10%',
        itemWidth: 20,
        itemHeight: 20,
        selectedMode: true,
        textStyle: {
            fontSize: 20,
            padding: 6,
        },
        icon: 'diamond',
        
        formatter: function (e) {
            switch (e + "") {
                case "了解":
                    return "一般了解：了解其功能特点, 应用场景, 功能优劣势";
                case "基础":
                    return "基础水平：知道基础语法、概念，能跑通 demo cases";
                case "掌握":
                    return "进阶学习：学习并掌握常用的功能组件，主流框架等，有一定的经验积累";
                case "进阶":
                    return "进阶实践：项目中熟练应用，轻松应对日常开发需求，探究底层原理";
                case "实战":
                    return "中高阶水平：拥抱变化，持续交付，开始追求代码质量、性能等";
                case "精通":
                    return "高级水平：掌控力、架构、经验输出等";
                default:
                    return e;
            }
        }
    },
    grid: {
        height:60,
    },
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: {
        show: false,
        type: 'category',
        data:['升级程度占比']
    },
    barWidth: 35,
    series: [
        {
            name: custom_data[0][0],
            type: 'bar',
            stack: 'a',
            data: [custom_data[0][1]],
            itemStyle: {
                color: custom_data[0][2],
            },
        },
        {
            name: custom_data[1][0],
            type: 'bar',
            stack: 'a',
            data: [custom_data[1][1]],
            itemStyle: {
                color: custom_data[1][2],
            },
        },
        {
            name: custom_data[2][0],
            type: 'bar',
            stack: 'a',
            data: [custom_data[2][1]],
            itemStyle: {
                color: custom_data[2][2],
            },
        },
        {
            name: custom_data[3][0],
            type: 'bar',
            stack: 'a',
            data: [custom_data[3][1]],
            itemStyle: {
                color: custom_data[3][2],
            },
        },
        {
            name: custom_data[4][0],
            type: 'bar',
            stack: 'a',
            data: [custom_data[4][1]],
            itemStyle: {
                color: custom_data[4][2],
            },
        },
        {
            name: custom_data[5][0],
            type: 'bar',
            stack: 'a',
            data: [custom_data[5][1]],
            itemStyle: {
                color: custom_data[5][2],
            },
        }
    ]
};

myChart.setOption(option);
