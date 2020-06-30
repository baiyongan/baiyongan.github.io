var myChart = echarts.init(document.getElementById('testwaterball'));
 
        // 指定图表的配置项和数据



updateDate = '2020/5/16';
updateRecord = 1;


data1 = {name: "os", "present": 82, "goal": 96, position: ['12.5%', '20%'], radius: '20%'};
data2 = {name: "sys",     "present": 9,  "goal": 85, position: ['25%', '20%'], radius: '20%'};
data3 = {name: "re", "present": 56, "goal": 90, position: ['50%', '28%'],   radius: '20%'};
data4 = {name: "argparse",  "present": 81, "goal": 92, position: ['62.5%', '67%'], radius: '20%'};
data5 = {name: "json", value: 0.5, "present": "了解", "goal": '精通', position: ['75%', '67%'], radius: '20%'};

// data1 = {name: "Python", "present": 82, "goal": 96, position: ['16.6%', '28%'], radius: '33.3%'};
// data2 = {name: "Go",     "present": 9,  "goal": 85, position: ['49.8%', '28%'], radius: '33.3%'};
// data3 = {name: "Docker", "present": 56, "goal": 90, position: ['83%', '28%'],   radius: '33.3%'};
// data4 = {name: "Linux",  "present": 81, "goal": 92, position: ['16.6%', '67%'], radius: '33.3%'};
// data5 = {name: "git" ,   "present": 61, "goal": 88, position: ['49.8%', '67%'], radius: '33.3%'};
// data6 = {name: "SQL" ,   "present": 45, "goal": 75, position: ['83%', '67%'],   radius: '23.3%'};

// data1 = {name: "Python", "present": 82, "goal": 96, position: ['16.6%', '28%'], radius: '33.3%'};
// data2 = {name: "Go",     "present": 9,  "goal": 85, position: ['49.8%', '28%'], radius: '33.3%'};
// data3 = {name: "Docker", "present": 56, "goal": 90, position: ['83%', '28%'],   radius: '33.3%'};
// data4 = {name: "Linux",  "present": 81, "goal": 92, position: ['16.6%', '67%'], radius: '33.3%'};
// data5 = {name: "git" ,   "present": 61, "goal": 88, position: ['49.8%', '67%'], radius: '33.3%'};
// data6 = {name: "SQL" ,   "present": 45, "goal": 75, position: ['83%', '67%'],   radius: '23.3%'};


    // {
    //     type: 'liquidFill',
    //     name: '标准库',
    //     data: [{
    //         name: 're正则',
    //         value: 0.5
    //     }, 0.5, 0.4, 0.3],
    //     label: {
    //         formatter: '{a}\n{b}\nValue: {c}',
    //         fontSize: 28
    //     }
    // },



var option = {
    // title: {
    //     x: "center",
    //     top: '1%',
    //     text: '个人主要技术栈—能力剖析与规划',
    //     textStyle: {
    //         color: '#778899',
    //         fontSize: 32,
    //     },
    //     subtext: "——by 小白大侠于 " + updateDate + " 第" + updateRecord + "次评录",
    //     subtextStyle: {
    //         color: '#778899',
    //         fontSize: 20,
    //         align: 'right'
    //     },
    // },

    // legend: {
    //     show: true,
    //     orient: 'horizontal',
    //     bottom: '6%',
    //     textStyle: {
    //         color: '#778899',
    //         fontSize: 20,
    //         fontWeight: ''
    //     },
    //     right: 'auto',
    //     data: ['Python', 'Go', 'Docker', 'Linux', 'git', 'SQL'],
    // },

    // tooltip: {
    //     show: true,
    //     // formatter: "{a} <br/>{b} {c}",
    //     backgroundColor: '#F7F9FB',
    //     borderColor: '#92DAFF',
    //     borderWidth: '1px',
    //     textStyle: {
    //         color: 'black',
    //         fontSize: 20
    //     },
    //     formatter: function(param) {
    //         return '<em style="color:' + param.color + ';">' + param.name + ' : ' + param.value + '</em> 分'
    //     }
    // },

    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },

    //data1 
    series: [    
		    {
		        type: 'liquidFill',
		        center: data5.position,
		        radius: data5.radius,

		        name: '标准库',
		        data: [{
		            name: data5.name,
		            value: data5.value,
		            // present: data5.present,
		            // goal: data5.goal
		        }],
		        		        // }, 0.5, 0.4, 0.3],

		        label: {
		            formatter: '{a}\n{b}\n掌握程度: {c}',
		            fontSize: 14
		        }
		    },


       

        // //data6
        // {
        //     name: data6.name,
        //     type: 'gauge',
        //     center: data6.position,
        //     radius: data6.radius,
        //     data: [{
        //             value: data6.present,
        //             name: '实际水平',
        //         },
        //         {
        //             value: data6.goal,
        //             name: '预期目标',
        //         }
        //     ],
        //     detail: {
        //         show: true,
        //         formatter: function(param) {
        //             var level = '';
        //             if (param < 5) {
        //                 level = '了解应用场景'
        //             } else if (param < 20) {
        //                 level = '知道基础概念'
        //             } else if (param < 60) {
        //                 level = "掌握常用功能"
        //             } else if (param < 80) {
        //                 level = "进阶项目实战"
        //             } else if (param < 95) {
        //                 level = '高阶熟练应用'
        //             } else if (param <= 100) {
        //                 level = '精通底层原理'
        //             } else {
        //                 level = '暂无';
        //             }
        //             return data6.name + " \n\n目前: " + level;
        //         },
        //         offsetCenter: [0, 100],
        //         textStyle: {
        //             fontSize: 26,
        //         },
        //     },
        //     title: { //标题
        //         show: false
        //     },
        //     min: 0,
        //     max: 100,
        //     axisLine: {
        //         show: true,
        //         lineStyle: {
        //             width: 20,
        //             shadowBlur: 0,
        //             color: custom_color
        //         }
        //     },
        //     axisTick: {
        //         show: true,
        //         splitNumber: 1,
        //     },
        //     splitLine: {
        //         show: true,
        //         length: 20,
        //         lineStyle: {
        //             //color:'black'
        //         },
        //     },
        //     axisLabel: {
        //         textStyle: {
        //             fontSize: 18,
        //             fontWeight: ""
        //         }
        //     },
        //     pointer: {
        //         show: true,
        //         width: 6,
        //     },
        // },


    ]
};



myChart.setOption(option);
