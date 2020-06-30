var myChart = echarts.init(document.getElementById('test3d'));
 
        // 指定图表的配置项和数据

var skill_type = [
             'py-module-1',
             'py-module-2',
             'py-module-3',
             'ML',
             'Golang',
             'Linux-command',
             'SQL',
             'Web-Framwork',
             "编辑器",
             '数据结构',
             '算法',
             '设计模式',
             '效率工具'
             ];


var skill_list = [
                '', '', '', '', '',  // 5
                '', '', '', '', '',  // 10 
                // '', '', '', '', '',  // 15
                ];

var data = [
            [0,0,100, 're', "5⭐", "qiwang", 'fstjsm'],
            [0,1,21,  'os', "5⭐", "qiwang", 'gedahaer'],
            [0,2,41,  'jos', "5⭐", "qiwang", 'aerhwrtjhwry'],
            [0,3,98, 'os', "5⭐", "qiwang", '有人来有条件'],
            [0,4,5, 'ors', "5⭐", "qiwang", '爱人'],
            [0,5,16, 'ofs', "5⭐", "qiwang", '十分痛恨明天我'],
            [0,6,31, 'orres', "5⭐", "qiwang",  '为何物'],
            [0,7,53, 'os', "5⭐", "qiwang", '肉体和'],
            [0,8,38, 'ores', "5⭐", "qiwang",  '王 '],
            [0,9,91, 'os', "4⭐", "qiwang", '(⊙﹏⊙)'],

            [1,0,54, 're', "4⭐", "qiwang", '一些最真实的记录'],
            [1,1,22, 'os', "4⭐", "qiwang", 'gedahaer'],
            [1,2,52, 'jos', "4⭐", "qiwang", 'aerhwrtjhwry'],
            [1,3,10, 'os', "4⭐", "qiwang", '有人来有条件'],
            [1,4,5, 'ors', "4⭐", "qiwang", '爱人'],
            [1,5,16, 'ofs', "4⭐", "qiwang", '十分痛恨明天我'],
            [1,6,30, 'orres', "4⭐", "qiwang", '为何物'],
            [1,7,4, 'os', "4⭐", "qiwang", '肉体和'],
            [1,8,38, 'ores', "4⭐", "qiwang", '王 '],
            [1,9,90, 'os', "4⭐", "qiwang", '(⊙﹏⊙)'],

            [2,0,21, 're', "4⭐", "qiwang", '一些最真实的记录'],
            [2,1,20, 'os', "4⭐", "qiwang", 'gedahaer'],
            [2,2,40, 'jos', "4⭐", "qiwang", 'aerhwrtjhwry'],
            [2,3,36, 'os', "4⭐", "qiwang", '有人来有条件'],
            [2,4,5, 'ors', "4⭐", "qiwang", '爱人'],
            [2,5,16, 'ofs', "4⭐", "qiwang", '十分痛恨明天我'],
            [2,6,3, 'orres', "4⭐", "qiwang", '为何物'],
            [2,7,54, 'os', "4⭐", "qiwang", '肉体和'],
            [2,8,38, 'ores', "4⭐", "qiwang", '王 '],
            [2,9,21, 'os', "4⭐", "qiwang", '(⊙﹏⊙)'],
            ]

option = {



                //     legend: {
                //     show: true,
                //     orient: 'horizontal',
                //     top: '3%',
                //     textStyle: {
                //          fontSize: 13,
                //          fontWeight: 'bold'
                //    },
                //     right: 'auto',
                //     data: ['百读不厌','国学根基','灵感激发','明达人生','视野拓展','思维锻炼', '性格砥砺', '思想启蒙', '文学涵养', '娱乐消遣']
                // },

    visualMap: {
        type: 'piecewise',
        bottom: '5%',
        // orient: 'horizontal',

        pieces: [{
                gt: 95,
                lte: 100,
                // label: '精通底层原理',
                label: '精通',
                color: '#8470FF'
            }, // (95, 100]
            {
                gt: 80,
                lte: 95,
                // label: '高阶熟练应用',
                label: '高阶',
                color: '#87CEFA'
            }, // (80, 95]
            {
                gt: 60,
                lte: 80,
                // label: '进阶项目实战',
                label: '进阶',
                color: '#40E0D0'
            }, // (60, 80]
            {
                gt: 20,
                lte: 60,
                // label: '掌握常用功能',
                label: '掌握',
                color: '#7CBB55'
            }, // (20, 60]
            {
                gt: 5,
                lte: 20,
                // label: '知道基础概念',
                label: '知道',
                color: '#E98E2C'
            }, // (5, 20]
            {
                gt: 0,
                lt: 5,
                // label: '了解应用场景',
                label: '了解',
                color: '#E43F3D'
            } // (-Infinity, 5)
        ],
        textStyle: {
            fontSize: 20,
        },
    },

    xAxis3D: {
        name: '列表',
        type: 'category',
        data: skill_list,
    },

    yAxis3D: {
        name: '类别',
        type: 'category',
        data: skill_type
    },

    zAxis3D: {
        name: '评分',
        type: 'value',
    },

    grid3D: {
        boxWidth: 120,
        boxDepth: 100,
        viewControl: {
            // projection: 'orthographic'
        },
        light: {
            main: {
                intensity: 1.9
            },
            ambient: {
                intensity: 0.3
            }
        }
    },
    tooltip: {
        textStyle: {
            fontSize: 20,
        },
        formatter: function(param) {
            return  "名称: " + param.name[0] + "<br/>类别: " + skill_type[param.value[0]] 
                    + "<br/>重要性: " + param.name[1]
                    + "<br/>评分: " + param.value[2] + "<br/>描述: " 
                    + param.name[2] + "<br/>目前: " + param.name[3]
        },
    },

    //     dataset: {
    //     dimensions: [
    //         'skill_type',
    //         'skill_list',
    //         'score',
    //         'skill_name',
    //         "skill_info"
    //     ],
    //     source: data
    // },

    series: [{
        name: 'master_10000000000_skills',
        type: 'bar3D',
        
        data: data.map(function(item) {
            return {
                value: [item[0], item[1], item[2]],
                name:  [item[3], item[4], item[5], item[6]],
            }
        }),

        // encode: {
        //     x: 'skill_type',
        //     y: 'skill_list',
        //     z: 'score',
        //     tooltip: [0, 1, 2, 3, 4]
        // },

        shading: 'color',

        label: {
            show: false,
            textStyle: {
                fontSize: 14,
                borderWidth: 1
            }
        },

        itemStyle: {
            opacity: 0.7
        },

        emphasis: {
            label: {
                textStyle: {
                    fontSize: 28,
                    color: '#000000'
                }
            },
            itemStyle: {
                color: '#FFFF00'
            }
        }
    }]
}


// $.get(ROOT_PATH + 'data/asset/data/life-expectancy-table.json', function (data) {
//     option = {
//         grid3D: {},
//         tooltip: {},
//         xAxis3D: {
//             type: 'category'
//         },
//         yAxis3D: {
//             type: 'category'
//         },
//         zAxis3D: {},
//         visualMap: {
//             max: 1e8,
//             dimension: 'Population'
//         },
//         dataset: {
//             dimensions: [
//                 'Income',
//                 'Life Expectancy',
//                 'Population',
//                 'Country',
//                 {name: 'Year', type: 'ordinal'}
//             ],
//             source: data
//         },
//         series: [
//             {
//                 type: 'bar3D',
//                 // symbolSize: symbolSize,
//                 shading: 'lambert',
//                 encode: {
//                     x: 'Year',
//                     y: 'Country',
//                     z: 'Life Expectancy',
//                     tooltip: [0, 1, 2, 3, 4]
//                 }
//             }
//         ]
//     };

//     myChart.setOption(option);
// });


myChart.setOption(option);
