// 1.	利用JavaScript完成如下功能：判断如果a>60，则b=1；如果a>70，则b=2；如果a>80，则b=3；如果a>90，则b=4 ,在页面弹出对应b的值
// var a  = 19;
// var b = 0;
// if(a>=60 &&a<70){
//    b= 1
// }else if (a>=70&&a<80){
//     b= 2
// }else if (a>=80&&a<90){
//     b= 3
// }else if (a>=90&&a<100){
//     b= 4
// }









// 2.	利用JavaScript完成如下功能：给出一个数判断是属于小数还是整数，如：var a= 3.14输出：3.14是小数 
// var num = 10.5;
// if (num % 1 ==0){
//     console.log (num+'是整数')
// }else {
//     console.log (num+'是小数')
// }

// 8.	利用JavaScript完成如下功能：当用户输入一个三位数，用程序计算三位数字的和比如：用户输入156，就弹出12
// 用户输入116，就弹出8
// 用户输入189，就弹出18
// 注意：用户输入数字的有效性、合法性不用考虑。比如，如果用户输入34343、“我爱你”，这种情况我们不要去考虑，你就想像，用户会非常乖，一定会输入3位数的。这是因为我们没有学习if语句。
// var a = 116;
// // 个位
// var b = parseInt(a%10);
// // 十位
// var c = ( a%100-a%10)/10;
// // 百位
// var d = parseInt(a/100);
// var e = b+c+d;
// console.log(e)
// 9.	利用JavaScript完成如下功能：如果今天是星期六，那么1000天后是星期几
// var a = 6;
// var b =1000;
// console.log((b%7+a)%7)











// // 10.	利用JavaScript完成如下功能：要求在1~1000数字之中，找出所有能被5整除，或者被6整除的数字，并在控制台输出这些数字
// for(var i = 1;i<=1000;i++){
//     if(i%5==0&&i%6==0){

//   console.log(i)
//     }

// }
// 11.	用户输入一个数字，列出所有它能够整除的数字。比如用户输入48，那么控制台中将显示：比如，用户输入19，那么控制台显示
// 1
// 19
// 比如，用户输入21，那么控制台显示
// 1
// 3
// 7
// 21
// var a = 24;
// for(var i=0;i<=a;i++){
//     if(a%i==0){
//         console.log(i)
//     }
// }
// 12.	利用JavaScript求1-100的数之和，并在控制台输出
// 13.	利用js求13的阶乘，并在控制台输出
// 14.	利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）
// for(var i = 0;i<=5;i++){
//     var row = '';
//     for(var j = 5;j>i;j--){
//         row +=" ";
//     }
//     for(j = 0;j<i;j++){
//         row +="*"+" "
//     }
//     console.log(row)
// }






// 15.	利用JavaScript完成如下九九乘法表

// for(var i =1;i<=9;i++){
//     var row = '';
//     for(var j=1;j<=i;j++){
//     row = row +j +'x'+i+"="+i*j+" "
//     }
//     console.log(row)
// }









// 16.	利用JavaScript，使用循环语句输出如下菱形图案（由“-”和“*”这两种符号组成）
// for(var i = 0;i<=5;i++){
//     var row = '';
//     for(var j = 5;j>i;j--){
//         row +=" ";
//     }
//     for(j = 0;j<i;j++){
//         row +="*"+" "
//     }
//     console.log(row)
// }
// for(var i = 0;i<=5;i++){
//     var row = '';
//     for(var j = 0;j<i;j++){
//         row +=" ";
//     }
//     for(j = 4;j>i;j--){
//         row +=" "+"*"
//     }
//     console.log(row)
// }










// 17.	利用JavaScript打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位 数字立方和等于该数本身。例如：153是一个"水仙花数"，因为153=1的三次 方＋5的三次方＋3的三次方
// for(var i=0;i<=1000;i++){
//         if(((a%100-a%10)/10)&&(parseInt(a%10)&&(parseInt(a/100))){

//         }
// }

// var b = parseInt(a%10); 
// // 十位
// var c = ( a%100-a%10)/10;
// // 百位
// var d = parseInt(a/100);





// 18.	利用JavaScript的for循环输出1-100之间所有的质数（只能被1和自身整除的数，不包括1）
// 例如：2 3 5 7 11 。。。等只有被1和自身整除的数字
// 20.	提示用户输入年龄，若用户的年龄大于等于18岁，则给用户在网页中显示一张图片，否则不显示。
// 21.	提示用户输入年龄，若用户的年龄大于等于18岁，则给用户在网页中显示一张图片，否则以弹出框的方式提示用户年龄太小。
// 22.	给两个不同的数字分别赋值num1 和 num2，求出最大值。（三元表达式实现）
// 23.	给一个数字赋值给一个变量num1，求出是奇数 还是 偶数
// 24.	接收班长口袋里的钱数？若大于等于2000，请大家吃西餐。若小于2000，大于等于1500，请大家吃快餐。若小于1500，大于等于1000，请大家喝饮料。若小于1000，大于等于500，请大家吃棒棒糖。否则提醒班长下次把钱带够
// 25.	分数转换,给一个分数，判定等级。大于等于90  A，大于等于80小于90  B，大于等于70小于80  C ，大于等于60小于70 D，小于60 E
// 26.	给一个数字（0,1,2,3,4,5,6），返回星期数，0是星期日。
// 27.	判断一个年份是闰年还是平年。闰年：能被4整除，但不能被100整除的年份 或者 能被400整除的年份
// 28.	交换两个变量的值
// 29.	求1-100之间所有数的总和 与 平均值
// 30.	求1-100之间所有偶数的和
// 31.	求100以内 7的倍数的总和
// 32.	打印矩形  document.write(“☆”)，要求每次只能输出一个☆
//       ☆☆☆☆☆
//       ☆☆☆☆☆
//       ☆☆☆☆☆
//       ☆☆☆☆☆
// 33.	接收用户输入的用户名和密码，若用户名为 “admin” ,密码为 “123456” ,提示用户登录成功!  否则，让用户是指输入正确为止！
// 34.	求整数1～100的累加值，但要求跳过所有个位为3的数【用continue实现】
// 35.	本金10000元存入银行，年利率是千分之三，每过1年，将本金和利息相加作为新的本金。计算5年后，获得的本金是多少？
// 36.	定义成绩变量 a=60  b=38  使用三元运算符如果成绩大于等于60返回"及格",否则返回不"及格"
// 37.	定义两个变量  a=50  b=80  ,计算并返回 a b 的最大的数
// 38.	定义三个变量  a=50  b=80   c=100  ,计算并返回 a b c的最大的数
// 39.	在网页中输入名字, 年龄， 地址，打印出:我是XXX,今年XX岁了，我来自XXX。
// 40.	获取当前时间，判断今年是否为闰年。两种方法判断 
        //    1.判断今年是否为闰年；  能被400整除 或 被4整除但不能被100整除
        //    2.判断本年2月是否为28天。闰年：2月有29天  平年：2月有28天
// 41.	根据输入的数字，判断如果是1-5打印工作日，如果是6，7打印休息日。
// 42.	录入姓名和性别根据输入的姓名，性别，打印欢迎XX先生/女士。（性别用0和1区别。0表示女士，1表示男士）









// 43.	输出该数字打头的一个成语，视为你今天的状态
// 1：一帆风顺
// 2：二话不说
// 3：三心二意
// 4：四面楚歌
// 5：五湖四海
// 6：六亲不认
// 7：七上八下












// 44.	键盘录入学生考试成绩，使用if语句判断成绩等级，并打印出来。
//   	90-100 优秀
//   	80-90 好
//   	70-80 良
//   	60-70 及格
//   	60以下 不及格











// 45.	录入一个整数,判断它能否被3,5,7整除,并输出以下信息
// (1)能同时被3,5,7整除
// (2)能被其中两个数整除(要指出那两个数)
//    	If()
//  	(3)只能被其中一个数整除(指出那一个)
// (4)不能被3,5,7任一个整除











// 46.	录入两个整数a和b,若a+b大于100,则输出a+b大于100的部分,否则输出两数之和.











// 47.	入三角形的三边，根据输入的三角形的三边判断是否能组成三角形，如果可以进一步 判断三角形的类型










// 等边三角形(三边相等) 等腰三角形(两边相等)  直角三角形(a平方+b平方=c平方)  其他三角形（不满足上面的）









// 48.	录入一个三位数，按逆序打印出各位数字。例如原数字为321，应输出123。






// 49.	请编写程序，要求输入身高，体重后，输出体质指数



















// 50.	测量一个人的体质指数，体质指数（BMI）=体重（kg）÷身高^2（m），
// 成人的BMI数值：
// 过轻：低于18.5
// 正常：[18.5,23.9]
// 过重：[24,27]
// 肥胖：[28,32]
// 非常肥胖, 高于32













// 51.	录入月份，输出对应的季节
// (1)键盘录入一个整数(代表月份,范围1-12)
//  	(2)输出该月份对应的季节
//    		3,4,5春季
//    		6,7,8夏季
//    		9,10,11秋季
//    		12,1,2冬季
//      (3)演示格式如下:
//    		请输入一个月份:3
//    		控制台输出:3月份是春季"











// 52.	打印1-100中前三个17的整数倍。\











// 53.	小区楼号范围1-30，但是由于风水讲究，小区没有包含4、7、14、18、24的楼号，请为小区楼号报号。





// 54.	求1~100以内(包含1和100)能同时被3，5整除的数的和，并将求出的和打印到控制台上.






// 55.	打印一个 5行4列的矩形








// 56.	要求：圆的面积小于50，请打印出所有符合面积要求的整数半径。（使用while循环）
// 展示效果：











// 57.	遍历1到100之间（包含1和100）的所有数字，统计能被5整除的偶数的个数，最后将个数打印在控制台











// 58.	打印1到100之内的整数，但数字中包含9的要跳过










// 59.	题意是这样的：5文钱可以买一只公鸡，3文钱可以买一只母鸡，1文钱可以买3只雏鸡。现在用100文钱买100只鸡，那么各有公鸡、母鸡、雏鸡多少只？











// 60.	一球从100米高度自由落下，每次落地后反跳回原高度的一半；再落下，编程实现获取它在 第10次落地时，共经过多少米？第10次反弹多高？











// 61.	N的阶乘是从1乘到N  比如 3的阶乘= 3*2*1  
// 1.计算并打印5的阶乘的结果










// 62.	录入一个5位数,判断 该五位数是否为回文数。（判断第一位和第五位是否一样，第二位和第四位是否一样）










// 63.	一小和尚挑水，要把水缸装满，而且每次只能挑5升水，水缸能容纳80升水。问：小和尚要挑几次才能把水缸挑满？






// 64.	定义数组 var arr = [11,22,33,44,55]
// 要求：使用for循环将arr数组的中的元素全部打印到控制台









// 65.	定义数组 var arr = [11,22,33,44,55]    
// 要求：求数组中所有的元素的和









// 66.	求数组的的最值（最大值和最小值）









// 67.	定义数组 var arr = [11,22,33,44,55]  要求：将arr数组中为偶数的元素打印到控制台








// 68.	定义数组 var arr =[11,22,33,44,55]  要求：使用for循环将arr数组的中的元素全部倒叙打印到控制台









// 69.	.分析以下需求并实现
//    1.定义一个用于存放班级分数的数组var score = {80,90,85,90,78,88,89,93,98,75};
//    2.求出班级不及格人数(分数低于60分的就是不及格) ?? 
//    3.求出班级的平均分
//    4.求出班级的总分数










// 70.	Var arr = {1,1,2,2,3,4,5,4,3,2,1}, 打印出数字 2现的次数。









// 71.	Var arr={2,1,5,4,8,9,7],使用弹框录入一个数字，找出该数字的索引值，如果不存在则返回-1









// 72.	在数组中 查询数据第二次55出现的位置,打印第二次出现的索引 （索引指从0开始）
// [11, 32，55, 47，55, 79，23]











// 73.	定义一个int类型的数组，存储以下几个考试分数：
// 88   96   97   74   90    58    77   90   99    
// 计算这几个考试分数去掉最低分后剩余元素的平均分，并在控制台打印输出；










// 74.	已有数组var nums = {5,10,15},要求创建一个新数组
// 1.新数组的长度和已知数组相同
// 2.新数组每个元素的值，是已知对应位置元素的2倍
// 3.在控制台中打印新数组的所有元素









// 75.	已知arr数组内容[1, 3, 5, 8, 10, 11, 16]，编码实现：数组中所有奇数加1，偶数-1,最后打印数组内容










// 76.	已知数组{"周兴迟","刘一飞","赵本善","孙妍姿","王妃","陈怡迅"}.
// 请查找出数组中是否有孙妍姿、汪菲。 
// 如果有，请给出索引；
// 如果没有给出-1。










// 77.	定义一个整数数组，包含元素{1,3,4,7,8}，获取数组中数组角标和对应的元素都为偶数的元素与个数，并在控制台打印输出。








// 78.	数组[10, 5, 34, 59, 98], 使用for循环找出里面的最大值? 使用while循环找出里面的最小值?














// 79.	将下面的数组元素前后互换
// [11, 32，55, 47，79，23]	
// 置换后的数组元素为：
// [23, 79, 47, 55, 32, 11]










// 80.	按照从小到大的顺序排列 ，最后打印排序后的数组。 [10, 5, 34, 59, 98]





// 81.	var oldArr[]={1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5}; 
// 要求将以上数组中的0项去掉，将不为0的值存入一个新的数组，生成新的数组为 
// var newArr[]={1,3,4,5,6,6,5,4,7,6,7,5};






// 82.	10个整数{9,10,6,6,1,9,3,5,6,4}，保存到数组中。
// 1.	去除数组中重复的内容，只保留唯一的元素。
// 2.以下列格式打印数组：
// [9,10,6,1,3,5,4]







// 83.	左奇右偶
// 10个整数的数组{26,67,49,38,52,66,7,71,56,87}。
// 1.	元素重新排列，所有的奇数保存到数组左边，所有的偶数保存到数组右边。
// 2.	以下列格式打印数组：
// [26,67,49,38,52,66,7,71,56,87]

