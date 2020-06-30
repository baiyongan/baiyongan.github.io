(function () {
    var a_idx = 0;
    window.onclick = function (event) {
        // var a = new Array("❤富强❤", "❤民主❤", "❤文明❤", "❤和谐❤", "❤自由❤", "❤平等❤", "❤公正❤", "❤法治❤", "❤爱国❤",
        //     "❤敬业❤", "❤诚信❤", "❤友善❤");
        var a = new Array( "", "人生天地之间 若白驹过隙 忽然而已", "高山仰止 景行行止", "心有敬畏 行有所止", "淡泊明志 宁静致远", "浮舟沧海 立马昆仑", "以梦为马 不负韶华",  
                           "千里之行 始于足下", "怕什么真理无穷 进一寸有一寸的欢喜", "敏而好学 不耻下问",  
                           "昨夜西风凋碧树 独上高楼 望尽天涯路", "路漫漫其修远兮 吾将上下而求索", "吹灭读书灯 一身都是月", 
                           "Do not go gentle into that good night", "且视他人之疑目如盏盏鬼火，大胆地去走你的夜路", 
                           "衣带渐宽终不悔 为伊消得人憔悴", "锲而不舍 金石可镂", "人有逆天之时 天无绝人之路", "有志者 事竟成", "山重水复疑无路 柳暗花明又一村",     
                           "宝剑锋从磨砺出 梅花香自苦寒来", "众里寻他千百度 蓦然回首 那人却在 灯火阑珊处", "博观而约取 厚积而薄发",
                           "时人不识凌云木 直待凌云始道高", "人生得意须尽欢 莫使金樽空对月", "且将新火试新茶 诗酒趁年华", "醉后不知天在水 满船清梦压星河", "作梦中梦 见身外身", 
                           "天生我材必有用 千金散尽还复来", "欲穷千里目 更上一层楼", "长风破浪会有时 直挂云帆济沧海", "九万里风鹏正举 风休住 蓬舟吹取三山去",
                           "窈窕淑女 君子好逑", "月上柳梢头 人约黄昏后", "青青子衿 悠悠我心", "人有悲欢离合 月有阴晴圆缺 此事古难全", "年年岁岁花相似 岁岁年年人不同", 
                           "昔我往矣 杨柳依依 今我来思 雨雪霏霏", "人生如逆旅 我亦是行人", "浮生如此 别多会少 不如莫遇", "劝君更进一杯酒 西出阳关无故人",
                           "平林漠漠烟如织 寒山一带伤心碧", "飘飘何所似 天地一沙鸥", "无边落木萧萧下 不尽长江滚滚来", "想当年 金戈铁马 气吞万里如虎", "音尘绝 西风残照 汉家陵阙",  
                           "夜深忽梦少年事 梦啼妆泪红阑干", "同是天涯沦落人 相逢何必曾相识", "欲买桂花同载酒 终不似 少年游", 
                           "人生到处知何似 应似飞鸿踏雪泥", "远是非 寻潇洒", "已识乾坤大 犹怜草木青", "采菊东篱下 悠然见南山",
                           "世事一场大梦 人生几度秋凉", "古今多少事 都付笑谈中", "念天地之悠悠 独怆然而涕下",      
                           "Carpe diem", "劝君莫惜金缕衣 劝君惜取少年时", "Get busy living or get busy dying", "Make your lives extraordinary",                           
                          // "思怡吾爱 小白❤Daisy"
                          );

        //青年立志
        //求学
        //爱情
        //事业
        //浮沉
        //平淡
        //感慨人生


        var heart = document.createElement("b"); //创建b元素
        heart.onselectstart = new Function('event.returnValue=false'); //防止拖动

        document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
        a_idx = (a_idx + 1) % a.length;
        heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式

        var f = 17, // 字体大小
            x = event.clientX - f / 2, // 横坐标
            y = event.clientY - f, // 纵坐标
            c = randomColor(), // 随机颜色
            a = 1, // 透明度
            s = 1.2; // 放大缩小

        var timer = setInterval(function () { //添加定时器
            if (a <= 0) {
                document.body.removeChild(heart);
                clearInterval(timer);
            } else {
                heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
                    c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
                    s + ");";

                y--;
                a -= 0.016;
                s += 0.002;
            }
        }, 20)

    }
    // 随机颜色
    function randomColor() {

        return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
        .random() * 255)) + ")";
    }
}());
