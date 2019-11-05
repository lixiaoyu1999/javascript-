// 1.	利用JavaScript完成如下功能：判断如果a>60，则b=1；如果a>70，则b=2；如果a>80，则b=3；如果a>90，则b=4 ,在页面弹出对应b的值
// var a = prompt('');
// var b;
// if (a > 60 && a<= 70){    
//     b = 1
// }else if (a>70 && a<=80){
//     b = 2
// }else if (a>80 && a<= 90){
//     b = 3;
// }else if (a>90){
//     b = 4
// }
// alert(b);







// 2.	利用JavaScript完成如下功能：给出一个数判断是属于小数还是整数，如：var a= 3.14输出：3.14是小数 
// var a = 21;
// if (a % 1 == 0 ){
//     console.log(a +"是整数")
// }else{
//     console.log(a + "是小数")
// }





// 3.	利用JavaScript编写程序：通过用户输入的年龄判断是哪个年龄段的人（儿童：年龄＜14；青少年：14<=年龄＜24；青年：24<年龄＜40; 中年：40＜=年龄＜60; 老年：年龄>=60），并在页面上输出判断结果。
// var age = 18;
// if (age > 0){
// if (age <14){
//     console.log('儿童')
// }else if (age >= 14 && age <24){
//     console.log('青少年')
// }else if (age > 24 && age <40){
//     console.log('青年')
// }else if (age >=40 && age < 60){
//     console.log("中年")
// }else{
//     console.log('老年')
// }
// }else{
// console.log("输入错误")
// }








// 4.	利用JavaScript的console实现在控制台输出”我是传智学院的一名学生，我为自己代言”:
// console.log('我是传智学院的一名学生，我为自己代言')


// 5.利用JavaScript定义变量a，赋值为88，并且在控制台打印输出变量a的值  
// var a = 88;
// console.log(a);



// 6.	利用JavaScript定义一个变量，赋值，并且在控制台打印输出变量的类型
// var a = 88;
// console.log(a);
// console.log(typeof a);




// 7.	世界上表示气温有两种方法：摄氏度和华氏度。两者的关系是...
// 利用JavaScript编写程序，要求：当用户输入摄氏度，向用户提示出对应的华氏温度

// var she = 1;
// var hua = 9/5 * she + 32;
// console.log(hua);



// 8.	利用JavaScript完成如下功能：当用户输入一个三位数，用程序计算三位数字的和比如：用户输入156，就弹出12
// 用户输入116，就弹出8
// 用户输入189，就弹出18
// 注意：用户输入数字的有效性、合法性不用考虑。比如，如果用户输入34343、“我爱你”，这种情况我们不要去考虑，你就想像，用户会非常乖，一定会输入3位数的。这是因为我们没有学习if语句。

// var a = prompt("输入三位数");
// // 个位数
// var b = a % 10;
// // 百位数
// var c = (a - a %100) / 100
// // 十位数
// var d =( a %100 - a%10)/10
// // 弹出
// b = ""+b;
// d = ''+d;
// c= ''+c;
// alert(b+ c + d);





//9.	利用JavaScript完成如下功能：如果今天是星期六，那么1000天后是星期几
// 方法一
// var arr = 1000;
// var sum = arr % 7;
// switch(sum = arr %7){
//     case 1:
//    console.log("周日");
//    break;
//    case 2:
//    console.log("周一");
//    break;
//    case 3:
//    console.log("周二");
//    break;
//    case 4:
//    console.log("周三");
//    break;
//    case 5:
//    console.log("周四");
//    break;
//    case 6:
//    console.log("周五");
//    break;
// }
// 方法二
// Var a = 6;
// var b = 1000;
// Console.log((b%7+a)%7)




//10.	利用JavaScript完成如下功能：要求在1~1000数字之中，找出所有能被5整除，或者被6整除的数字，并在控制台输出这些数字
// var sum = 0;
//   for (var i = 0 ; i <= 1000;i++){
//       if (i % 5 == 0 || i % 6 == 0){
//         sum = i;
//         console.log(sum)
//       }
//   }


// 11.	用户输入一个数字，列出所有它能够整除的数字。比如用户输入48，那么控制台中将显示：比如，用户输入19，那么控制台显示
// 1
// 19
// 比如，用户输入21，那么控制台显示
// 1
// 3
// 7
// 21



// var result = 21;
// for (var i = 1; i <= result; i++) {
//     if (result % i == 0) {
//         console.log(i);

//     }
// }



// 12.	利用JavaScript求1-100的数之和，并在控制台输出
// var sum = 0;
// for (var i = 0; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);




// 13.	利用js求13的阶乘，并在控制台输出
// sum = 1;
// for (var i = 1; i <=13;i++){
//     sum *=i 
// }
// console.log(sum);



//14.	利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）

// for (var i = 0; i <= 5; i++) {
//     var row = "";
//     for (j = 5; j > i; j--) {
//         row = row + " ";
//     }
//     for (j = 0; j < i; j++) {
//         row = row + "☆ ";
//     }
//     console.log(row);
// }


// 15.	利用JavaScript完成如下九九乘法表
// for (var i = 1; i <= 9; i++) {
//     var row = "";
//     for (var j = 1; j <= i; j++) {
//         row = row + j + "x" + i + '=' + i * j + " ";
//     }
//     console.log(row);
// }



// 16.利用JavaScript，使用循环语句输出如下菱形图案（由“-”和“*”这两种符号组成）
// var i , j ,k;
// for (i = 0; i < 4; i++) {
//     //打印“-”
//     for (j = 0; j < 3 - i; j++) {
//         document.write("-");
//     }
//     //打印“*”
//     for (k = 0; k < 2 * i + 1; k++) {
//         document.write("*")
//     }
//     //换行
//     document.write("<br/>")
// }
// //后打印下面3行
// for (i = 0; i < 3; i++) {
//     //打印“-”
//     for (j = 0; j < i + 1; j++) {
//         document.write("-");
//     }
//     //打印“*”
//     for (k = 0; k < 5 - 2 * i; k++) {
//         document.write("*")
//     }
//     //换行
//     document.write("<br/>")
// }







// 17.	利用JavaScript打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位 数字立方和等于该数本身。例如：153是一个"水仙花数"，因为153=1的三次 方＋5的三次方＋3的三次方

// for (var m = 100; m < 1000; m++) {
//     // 个位
//     var a = m % 10;
//     // 百位
//     var b = (m - m % 100) / 100;
//     //十位
//     var c = (m % 100 - m % 10) / 10;
//     if (m == a * a * a + b * b * b + c * c * c) {
//         console.log(m);
//     }
// }





// 18.	利用JavaScript的for循环输出1-100之间所有的质数（只能被1和自身整除的数，不包括1）
// 例如：2 3 5 7 11 。。。等只有被1和自身整除的数字
// for (var i = 2; i <= 100; i++) {
//     for (j = 2; j < i; j++) {
//         if ((i % j == 0)) {
//             break;
//         }
//     }
//     if (j >= i) {
//         document.write(i + "&nbsp;&nbsp")
//     }
// }







// 19.	利用JavaScript求：1+2+3+…+100的和
// var num = 0;
// for (var i = 1; i <= 100; i++) {
//     num += i}
// console.log(num);






// 20.	提示用户输入年龄，若用户的年龄大于等于18岁，则给用户在网页中显示一张图片，否则以弹出框的方式提示用户年龄太小。

// var age = prompt('输入年龄');
// if (age >= 18) {
//     document.write('<img src="./1-1G116115I2.jpg">');
// }
// else {
//     document.write("输入年龄太小！")

// }




// 21.	给两个不同的数字分别赋值num1 和 num2，求出最大值。（三元表达式实现）
// var num1 = 23;
// var num2 = 39;
// (num1 < num2)?console.log('num2 最大'):console.log('num1 最大');






// 22.	给一个数字赋值给一个变量num1，求出是奇数 还是 偶数
// var num1 = 19;
// if (num1 % 2 == 0){
//     console.log(num1 +'是偶数')
// }else{
//     console.log(num1 +'是奇数')
// }


// 23.	接收班长口袋里的钱数？若大于等于2000，请大家吃西餐。若小于2000，大于等于1500，请大家吃快餐。若小于1500，大于等于1000，请大家喝饮料。若小于1000，大于等于500，请大家吃棒棒糖。否则提醒班长下次把钱带够

// var money = 2000;
// if (money >= 2000){
//     console.log("请大家吃西餐")
// } else if (money<2000 && money >=1500) {
//     console.log("请大家吃快餐")
// }else if (money<1500 && money >=1000) {
//     console.log("请大家喝饮料")
// }else if (money<1000 && money >=500) {
//     console.log("请大家吃棒棒糖")
// }else{
//     console.log("下次把钱带够")
// }





// 24.	分数转换,给一个分数，判定等级。大于等于90  A，大于等于80小于90  B，大于等于70小于80  C ，大于等于60小于70 D，小于60 E
// var num1 = 156/2;
// if (num1 >= 90 ){
//     console.log("A");
// }else if (num1 <90 && num1 >= 80 ) {
//     console.log("B");
// }else if (num1 <80 && num1 >= 70 ) {
//     console.log("C");
// }else if (num1 <70 && num1 >= 60 ) {
//     console.log("D");
// }else if (num1 <60 ) {
//     console.log("E");
// }







// 25.	给一个数字（0,1,2,3,4,5,6），返回星期数，0是星期日。
// var num1 = 0 ;
// switch (num1){
//     case 0 :
//     console.log("星期日");
//     break;
//     case 1 :
//     console.log("星期一");
//     break;
//     case 2 :
//     console.log("星期二");
//     break;
//     case 3 :
//     console.log("星期三");
//     break;
//     case 4 :
//     console.log("星期四");
//     break;
//     case 5 :
//     console.log("星期五");
//     break;
//     case 6 :
//     console.log("星期六");
//     break;
//     default:
//     console.log('对不起，无法识别');
//     break;
// }








// 26.	判断一个年份是闰年还是平年。闰年：能被4整除，但不能被100整除的年份 或者 能被400整除的年份
// var year = 100;
// if (year % 4 == 0 && year % 100 != 0  || year % 400 == 0){
//     console.log("闰年")
// }else {
//     console.log("平年")
// }





// 27.	交换两个变量的值
// var num1 = 12;
// var num2 = 29;
// var temp ;
// temp = num1;
// num1 = num2 ;
// num2 = temp;

// console.log(num1 ,num2);



// 28.	求1-100之间所有数的总和 与 平均值


// var num1 = 0;
// for (var i = 0 ;i <=100; i++){
//     num1 += i;
// } 
// // num1 = num1 /100;
// console.log(num1);



// 29.	求1-100之间所有偶数的和
// var num1 = 0;
// for (var i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         num += i
//     }
// }
// console.log(num1);



// 30.	求100以内 7的倍数的总和
// var num = 1;
// for (var i = 1; 7 * i <= 100; i++) {
//     num = i * 7
//     console.log(num);
// }



// 31.	打印矩形  document.write(“☆”)，要求每次只能输出一个☆
// for (var i = 0 ; i<6;i++){
//     var row = '';
//     for (var j = 0 ; j < 6 ; i++){
//         row = row + '☆'+' ';
//     }
//      document.write(row )
// }


// 32.	接收用户输入的用户名和密码，若用户名为 “admin” ,密码为 “123456” ,提示用户登录成功!  否则，让用户是指输入正确为止！

// // 步骤:
// var username = "";
// var password = "";
// // 1.使用do while 迫使用户输入用户名和密码
// do {
//   // 2.声明一个变量 用来存储 用户名  
//   username = prompt("请输入用户名");
//   // 3.声明一个变量  用来存储密码
//   password = prompt("请输入密码");
// } while (username != "admin" || password != "123456");

// // 4. 判断一下 用户名是不是 不是admin 如果不是 循环 或者  密码是不是 不是123456 如果不是 循环


// // 5.如果 用户名是admin 且 密码是 123456 
// if (username == "admin" && password == "123456") {
//   // 6. 打印 登陆成功
//     alert("登陆成功");
// }



// 33.	求整数1～100的累加值，但要求跳过所有个位为3的数【用continue实现】
// var num = 1;
// for (var i = 1; i <= 100; i++) {
//     if (num % 10 != 3) {
//         num += i
//     }
// }
// console.log(num);




// 34.	本金10000元存入银行，年利率是千分之三，每过1年，将本金和利息相加作为新的本金。计算5年后，获得的本金是多少？
// // 1.定义一个变量 代表 本金
// var money = 10000;
// // 2.定义一个变量 代表 利率
// var rate = 0.003;
// // 3.新的本节 = 本金 + 利息 (利息=本金*利率)
// for (var i = 0; i < 5; i++) {
//     // money += money * rate
//     money = money + money * rate;
// }

// console.log(money);





// 35.	定义成绩变量 a=60  b=38  使用三元运算符如果成绩大于等于60返回"及格",否则返回不"及格"
// var a = 60, b = 38;
// (a >= 60) ? console.log('及格') : console.log('不及格');
// (b >= 60) ? console.log('及格') : console.log('不及格');





// 36.	定义两个变量  a=50  b=80  ,计算并返回 a b 的最大的数
// var a = 50, b = 80;
// (a<b)?console.log(a):console.log(b);





// 37.	定义三个变量  a=50  b=80   c=100  ,计算并返回 a b c的最大的数
// var a = 50, b = 80, c = 100;
// if (a > b && a > c) {
//     console.log(a)
// } else if (b > a && b > c) {
//     console.log(b)
// } else if (c > a && c > b){
//     console.log(c)
// }





// 38.	在网页中输入名字, 年龄， 地址，打印出:我是XXX,今年XX岁了，我来自XXX。
// var username = "";
// var age = "";
// var place = "";
// username = prompt('请输入名字');
// age = prompt('请输入年龄');
// place  = prompt('请输入地址');
// console.log("我是"+username+",今年"+age+'岁了，我来自'++place);




// 39.	获取当前时间，判断今年是否为闰年。两种方法判断 
// 1.判断今年是否为闰年；  能被400整除 或 被4整除但不能被100整除hy
// var year = prompt('请输入年份');
// if (year % 4 == 0 && year % 100 != 0  || year % 400 == 0){
//     console.log("闰年")
// }else {
//     console.log("平年")
// }
// 2.判断本年2月是否为28天。闰年：2月有29天  平年：2月有28天
// var month = prompt('请输入今年2月天数');
// if (month == 29){
//     console.log("闰年")
// }else if(month == 28){
//     console.log("平年")
// }



// 40.	根据输入的数字，判断如果是1-5打印工作日，如果是6，7打印休息日。
// var day = 1;
// if (day >= 1 && day <= 7) {
//    if (day >= 1&& day <=5){
//     console.log("工作日")
//    }else{
//     console.log("休息日")
//    }





// 41.	录入姓名和性别根据输入的姓名，性别，打印欢迎XX先生/女士。（性别用0和1区别。0表示女士，1表示男士）

// var username = "";
// var sex = "";
// username = prompt('请输入名字');
// sex= prompt('请输入性别');
// if (sex == 0){
//     console.log('欢迎'+username+'女士')
// }else if (sex == 1){
//     console.log('欢迎'+username+'男士')
// }







// 42.	输出该数字打头的一个成语，视为你今天的状态
// 1：一帆风顺
// 2：二话不说
// 3：三心二意
// 4：四面楚歌
// 5：五湖四海
// 6：六亲不认
// 7：七上八下
// var day = 1;
// switch (day) {
//     case 1:
//         console.log("一帆风顺");
//         break;
//     case 2:
//         console.log("二话不说");
//         break;
//     case 3:
//         console.log("三心二意");
//         break;
//     case 4:
//         console.log("四面楚歌");
//         break;
//     case 5:
//         console.log("五湖四海");
//         break;
//     case 6:
//         console.log("六亲不认");
//         break;
//     case 7:
//         console.log("七上八下");
//         break;
//     default:
//         console.log("对不起，您输入错误");
//         break;
// }






// 43.	键盘录入学生考试成绩，使用if语句判断成绩等级，并打印出来。
//   	90-100 优秀
//   	80-90 好
//   	70-80 良
//   	60-70 及格
//   	60以下 不及格

// var scroe = 83;
// if (scroe >= 0 && scroe <= 100) {
//     if (scroe >= 60) {
//         if (scroe < 70 && scroe >= 60) {
//             console.log('及格')
//         } else if (scroe < 80 && scroe >= 70){
//             console.log('良好')
//         }else if (scroe < 90 && scroe >= 80){
//             console.log('好')
//         }else if (scroe < 100 && scroe >= 90){
//             console.log('优秀')
//         }
//   } else {
//         console.log('不及格')
//     }
// } else {
//     console.log('分数有误')
// }





// 44.	录入一个整数,判断它能否被3,5,7整除,并输出以下信息
// (1)能同时被3,5,7整除
// (2)能被其中两个数整除(要指出那两个数)
//    	If()
//  	(3)只能被其中一个数整除(指出那一个)
// (4)不能被3,5,7任一个整除


// var num = 105;
// // (1)能同时被3,5,7整除
// if (num % 3 == 0 && num % 5 == 0 && num % 7 == 0) {
//     console.log(num + '能同时被3,5,7整除')
// }
// // (2)能被其中两个数整除(要指出那两个数)
// else if (num % 3 == 0 && num % 5 == 0 && num % 7 != 0) {
//     console.log(num + '能同时被3,5整除')
// }
// else if (num % 3 == 0 && num % 5 != 0 && num % 7 == 0) {
//     console.log(num + '能同时被3,7整除')
// }
// else if (num % 3 != 0 && num % 5 == 0 && num % 7 == 0) {
//     console.log(num + '能同时被5,7整除')
// }
// // (3)只能被其中一个数整除(指出那一个)
// else if (num % 3 == 0 || num % 5 == 0 || num % 7 == 0) {
//     if (num % 3 == 0 && num % 5 != 0 && num % 7 != 0) {
//         console.log(num + '能被3整除')
//     } else if (num % 3 != 0 && num % 5 == 0 && num % 7 != 0) {
//         console.log(num + '能被5整除')
//     } else if(num % 3 != 0 && num % 5 != 0 && num % 7 == 0){
//         console.log(num + '能被7整除')
//     }
// }
// // (4)不能被3,5,7任一个整除
// else {
//     console.log(num + '不能被3,5,7任一个整除')
// }






// 45.	录入两个整数a和b,若a+b大于100,则输出a+b大于100的部分,否则输出两数之和.

// var a = 59;
// var b = 14;
// var result = a+b;
// if (result>100){
//     console.log(result-100)
// }else{
//     console.log(result)
// }








// 46.	入三角形的三边，根据输入的三角形的三边判断是否能组成三角形，如果可以进一步 判断三角形的类型
// 等边三角形(三边相等) 等腰三角形(两边相等)  直角三角形(a平方+b平方=c平方)  其他三角形（不满足上面的）
// var a = 3;
// var b = 4;
// var c = 5;
// if (a + b > c && a + c >b && c + b >a){
//   if (a == b == c){
//     console.log('等边三角形')
//   }else if (a == c &&a != b && b!=c || a != c &&a == b && b!=c || a != c &&a != b && b==c){
//     console.log('等腰三角形')
//   }else if (a*a+b*b==c*c ||c*c + b*b ==a*a||a*a + c*c==b*b){
//     console.log('直角三角形')
//   }else {
//       console.log('其他三角形')
//   }

// }else{
//     console.log('不是三角形')
// }





// 47.	录入一个三位数，按逆序打印出各位数字。例如原数字为321，应输出123。
// var temp = "";
// var a = 182;
// var b = a % 10;
// var c = (a % 100 - a % 10) / 10;
// var d = (a - a % 100) / 100;
// var temp = b;
// b = d;
// d = temp;
// b = b + "";
// c = c + "";
// d = d + "";
// console.log(Number(d + c + b));


// 48.49.	请编写程序，要求输入身高，体重后，输出体质指数
// 测量一个人的体质指数，体质指数（BMI）=体重（kg）÷身高^2（m），
// 成人的BMI数值：
// 过轻：低于18.5
// 正常：[18.5,23.9]
// 过重：[24,27]
// 肥胖：[28,32]
// 非常肥胖, 高于32
// var height = prompt('请输入身高');
// var weirth = prompt('请输入体重');
// if (18.5 < weirth / height *height) {
//     console.log('过轻')
// }
// else if (18.5 >= weirth / height *height && weirth / height *height<= 23.9) {
//     console.log('正常')
// }
// else if (24 >= weirth / height *height && weirth / height *height <= 27) {
//     console.log('过重')
// }
// else if (28 >= weirth / height *height && weirth / height *height <= 32) {
//     console.log('肥胖')
// }
// else {
//     console.log('非常肥胖')
// }






// 50.	录入月份，输出对应的季节
// (1)键盘录入一个整数(代表月份,范围1-12)
//  	(2)输出该月份对应的季节
//    		3,4,5春季
//    		6,7,8夏季
//    		9,10,11秋季
//    		12,1,2冬季
//      (3)演示格式如下:
//    		请输入一个月份:3
//    		控制台输出:3月份是春季"
// var month = prompt('请输入月份');
// if (month>=0&&month<=12){
//    if (month == 3||month==4||month==5){
//        console.log(month+'月是春季')
//    }else  if (month == 6||month==7||month==8){
//     console.log(month+'月是夏季')
// }else  if (month == 9||month==10||month==11){
//     console.log(month+'月是秋季')
// }else{
//     console.log(month+'月是冬季')
// }
// }else{
//     console.log(false);
// }


// 51.	打印1-100中前三个17的整数倍。
// var num = 0;
// for (var i = 1;i<=100;i++){
//     if (num<3){
//         if (i%17==0){
//             console.log(i);
//             num++;
//         }
//     }
// }






// 52.	小区楼号范围1-30，但是由于风水讲究，小区没有包含4、7、14、18、24的楼号，请为小区楼号报号。
// for (var i = 1; i <= 30; i++) {
//     if (i % 10 != 4 && i != 7 && i != 18) {
//         console.log(i)
//     }
// }






// 53.	求1~100以内(包含1和100)能同时被3，5整除的数的和，并将求出的和打印到控制台上.
// for (var i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i)
//     }
// }






// 54.	打印一个 5行4列的矩形
// for (var i = 1;i<6;i++){
//     var row = '';
//     for (var j = 1;j<5;j++){
//         row = row +'*'+' '
//     }
//     console.log(row)
// }






// 55.	要求：圆的面积小于50，请打印出所有符合面积要求的整数半径。（使用while循环）
// var r = 1;
// var m ;
// while ( m = 3.14 * r * r< 50) {
//     m = 3.14 * r * r
//     console.log('圆的半径为：' + r + '圆的面积为：' +m)
//     r++;
// }




// 56.	遍历1到100之间（包含1和100）的所有数字，统计能被5整除的偶数的个数，最后将个数打印在控制台
// var count = 0;
// for (var i = 1;i<=100;i++){
//     if (i%2==0&&i%5==0){
//         count++;  
//     }
// }
// console.log(count)










// 57.	打印1到100之内的整数，但数字中包含9的要跳过
// for (var i = 1; i <= 100; i++) {
//     if (i % 10 != 9 && (i%100-i%10)/10!=9) {
//         console.log(i)
//     }
// }






// 58.	题意是这样的：5文钱可以买一只公鸡，3文钱可以买一只母鸡，1文钱可以买3只雏鸡。现在用100文钱买100只鸡，那么各有公鸡、母鸡、雏鸡多少只？
// var x = 0;
// var y = 0;
// var z = 0;
// for (x = 1; x <= 20; x++) {
//     for (y = 1; y <= 33; y++) {
//         z = 100-x-y;
//         if ((5 * x + 3 * y + z / 3) == 100) {
//             console.log(x, y, z);
//         }
//     }
// }




// 59.	一球从100米高度自由落下，每次落地后反跳回原高度的一半；再落下，编程实现获取它在 第10次落地时，共经过多少米？第10次反弹多高？
// var height = 100;
// for (var i = 1; i<=10;i++){
//     height = height/2
//     // height += height/2
// }
// console.log(height)





// 60.	N的阶乘是从1乘到N  比如 3的阶乘= 3*2*1  
// 1.计算并打印5的阶乘的结果
// var num = 5;
// for (var i = 1; i <5; i++) {
//     num = num * i

// }

// console.log(num)





// 61.	录入一个5位数,判断 该五位数是否为回文数。（判断第一位和第五位是否一样，第二位和第四位是否一样）
// var num = 12321;
// var a = parseInt(num / 10000)
// var b = parseInt(num % 1000 / 10)
// var c = parseInt(num % 100 / 10)
// var d = parseInt(num % 10)
// if (a == d && b == c) {
//     console.log(回文数)
// }



// 62.	一小和尚挑水，要把水缸装满，而且每次只能挑5升水，水缸能容纳80升水。问：小和尚要挑几次才能把水缸挑满？
// var water = 80;
// for (var i = 0;i>=0;i++){
//     if(water >=0){
//         water = water-5;   
//         console.log(i)
//     }
// }
// var count = 0;
// for (var i = 80;i>=0;i--){
//     i = i-5;
//     count;
// }


// 63.	定义数组 var arr = [11,22,33,44,55]
// 要求：使用for循环将arr数组的中的元素全部打印到控制台
// var arr = [11,22,33,44,55]
// for (var i =0; i<=arr.length-1;i++){
//     console.log(arr[i])
// }




// 64.	定义数组 var arr = [11,22,33,44,55]    
// 要求：求数组中所有的元素的和
// var str = 0;
// var arr = [11,22,33,44,55]
// for (var i =0; i<=arr.length-1;i++){
// str +=arr[i]
//     console.log(arr[i])
// }




// 65.	求数组的的最值（最大值和最小值）
// var arr = [11,22,33,44,55]  
// var maxarr = arr[0];
// for (var i=0;0<arr.length;i++){
//     if (arr[i]>maxarr){
//         maxarr=arr
//     }
// }
// console.log(maxarr)


// 66.	定义数组 var arr = [11,22,33,44,55]  要求：将arr数组中为偶数的元素打印到控制台

// var arr = [11,22,33,44,55]
// for (var i =0; i<=arr.length-1;i++){
// if (arr[i]%2==0){
//     console.log(arr[i])
// }

// }







// 67.	定义数组 var arr =[11,22,33,44,55]  要求：使用for循环将arr数组的中的元素全部倒叙打印到控制台
// var arr =[11,22,33,44,55] 
// for (var i =0;i<arr.length/2;i++){
//     var temp =arr[i]
//     arr[i] = arr[arr.length-1 - i];
//     arr[arr.length - 1 - i] =temp;
// }
// console.log(arr);







// 68.	.分析以下需求并实现
//    1.定义一个用于存放班级分数的数组var score = {80,90,85,90,78,88,89,93,98,75};
//    2.求出班级不及格人数(分数低于60分的就是不及格) ?? 
//    3.求出班级的平均分
//    4.求出班级的总分数
// var scroe = [80, 90, 85, 90, 78, 88, 89, 93, 98, 75];
// var count = 0;
// for (var i = 0; i <= scroe.length-1; i++) {
// console.log(scroe[i])

// if (scroe[i] < 60) {
//     count++;
//     console.log(count+'个不及格')
// }

// count = count+scroe[i]

// }
// count=count/10
// console.log(count)


// 69.	Var arr = {1,1,2,2,3,4,5,4,3,2,1}, 打印出数字 2现的次数。
// var count  = 0;
// var arr = [1,1,2,2,3,4,5,4,3,2,1];
// for (var i =0; i<=arr.length-1;i++){
//         if(arr[i]==2){
//             count++;
//         }
//     }
// console.log(count)




// 70.	Var arr={2,1,5,4,8,9,7],使用弹框录入一个数字，找出该数字的索引值，如果不存在则返回-1
// var arr = [2, 1, 5, 4, 8, 9, 7]
// var asd = prompt('');
// if(arr[0]==asd){
//     alert('0')
// }else if (arr[1]==asd){
//     alert('1')
// }else if (arr[2]==asd){
//     alert('2')
// }else if (arr[3]==asd){
//     alert('3')
// }else if (arr[4]==asd){
//     alert('4')
// }else if (arr[5]==asd){
//     alert('5')
// }else if (arr[6]==asd){
//     alert('6')
// }else{
//     alert('-1')
// },89 







// 71.	在数组中 查询数据第二次55出现的位置,打印第二次出现的索引 （索引指从0开始）
// [11, 32，55, 47，55, 79，23]
// var arr = [11, 3,55, 47,55, 79,23];
// for (var i = 0;i<arr.length;i++){
//     if(arr[i]==55){
//         console.log(arr.length-i-1)
//         break;
//     }
// }





// var arr = [88 , 96 , 97,  74 , 90  , 58  , 77 , 90 , 99 ];
// var str = 0;
// for (var i = 0;i<arr.length;i++){
//     str +=arr[i]
// }
// str = str - arr[3];
// str = str / 8;
// console.log(str);

// 72.	定义一个int类型的数组，存储以下几个考试分数：
// 88   96   97   74   90    58    77   90   99    
// 计算这几个考试分数去掉最低分后剩余元素的平均分，并在控制台打印输出；
// 方法1
// var arr = [88, 96, 97, 74, 90, 58, 77, 90, 99];
// var minarr = arr[0];
// var newArr = [];
// var str = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < minarr) {
//         minarr = arr[i]
//     }
// }
// // console.log(minarr)
// for (j = 0; j < arr.length; j++) {
//     if (arr[j] != minarr) {
//         newArr[newArr.length] = arr[j];
//     }
// }
// // console.log(newArr)
// for (var m = 0; m < newArr.length; m++) {
//     str += newArr[m]
// }
// str = str /m;
// console.log(str)




// 方法2
// var num = [88, 96, 97, 74, 90, 58, 77, 90, 99];
// var min = 0;
// for (var i = 0; i < num.length; i++) {
//     if (num[min] > num[i]) {
//     min=i;      
//     }
// }
// num.splice(min,1);
// console.log(num);
// var sum =0;
// for(var i = 0;i<num.length;i++){
//     sum +=num[i];
// }
// var avg =sum /num.length;
// console.log('和是：'+sum+'平均值是：'+avg );



// 73.	已有数组var nums = {5,10,15},要求创建一个新数组
// 1.新数组的长度和已知数组相同
// 2.新数组每个元素的值，是已知对应位置元素的2倍
// 3.在控制台中打印新数组的所有元素
// var nums = [5,10,15];
// var arr = [];
// for (var i = 0;i<nums.length;i++ ){
//     if (nums[i] !=0){
//         arr[arr.length]=nums[i]*2
//     }
// }
// console.log(arr)





// 74.	已知arr数组内容[1, 3, 5, 8, 10, 11, 16]，编码实现：数组中所有奇数加1，偶数-1,最后打印数组内容
// var arr = [1, 3, 5, 8, 10, 11, 16];
// for (var i =0;i<arr.length;i++){
//     if (arr[i]%2==0){
//         arr[i]=arr[i]-1
//     }else{
//         arr[i]=arr[i]+1
//     }
// }
// console.log(arr)


// 75.	已知数组{"周兴迟","刘一飞","赵本善","孙妍姿","王妃","陈怡迅"}.
// 请查找出数组中是否有孙妍姿、汪菲。 
// 如果有，请给出索引；
// 如果没有给出-1。
// var result = null;
// var arr = ["周兴迟", "刘一飞", "赵本善", "孙妍姿", "王菲", "陈怡迅"];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == "孙妍姿" || arr[i] == '王菲') {
//         result = i;
//         console.log(result)
//     }
// }
// if (result == null){
// result = -1;
// console.log(result)
// }



// 76.	定义一个整数数组，包含元素{1,3,4,7,8}，获取数组中数组角标和对应的元素都为偶数的元素与个数，并在控制台打印输出。
// var arr = [1,3,4,7,8];
// var count = 0;
// for (var i=0;i<arr.length;i++){
//     if (arr[i]%2==0&&i%2==0){
//         count++;
//     }
// }
// console.log(count)



// 77.	数组[10, 5, 34, 59, 98], 使用for循环找出里面的最大值? 使用while循环找出里面的最小值?
// var arr = [10, 5, 34, 59, 98];
// var maxarr = arr[0];
// for (var i = 0 ;i<arr.length;i++){
//     if (arr[i]>maxarr){
//         maxarr = arr[i]
//     }
// }
// console.log(maxarr)


// var arr = [10, 5, 34, 59, 98];
// var minarr = arr[0];
// var i =0;
// while(i<arr.length){
//     if (arr[i]<minarr){
//         minarr = arr[i]
//     }
//     i++;
// }
// console.log(minarr);

// 78.	将下面的数组元素前后互换
// [11, 32，55, 47，79，23]	
// 置换后的数组元素为：
// [23, 79, 47, 55, 32, 11]
// var arr = [11, 32, 55, 47, 7, 23];
// for (var i = 0; i < arr.length / 2; i++){
//     var temp = arr[i];
//     arr[i]=arr[arr.length-i-1];
//     arr[arr.length-1-i]=temp;
// }

// console.log(arr);



// 79.	按照从小到大的顺序排列 ，最后打印排序后的数组。 [10, 5, 34, 59, 98]
// var arr = [10, 5, 34, 59, 98];
// for (var j = 0; j < arr.length - 1 - i; j++) {
//     if (arr[j] > arr[i + 1]) {
//         var temp = arr[i];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//     }
// }
// console.log(arr)





// 80.	var oldArr[]={1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5}; 
// 要求将以上数组中的0项去掉，将不为0的值存入一个新的数组，生成新的数组为 
// var newArr[]={1,3,4,5,6,6,5,4,7,6,7,5};
// var arr = [1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5];
// var newarr = [];
// for (var i = 0 ;i <arr.length;i++){
//     if (arr[i]!=0){
//         newarr[newarr.length]=arr[i]
//     }
// }
// console.log(newarr)





// 81.	10个整数[9,10,6,6,1,9,3,5,6,4]，保存到数组中。
// 1.	去除数组中重复的内容，只保留唯一的元素。
// 2.以下列格式打印数组：
// [9,10,6,1,3,5,4]
// 方法1
// var arr = [9, 9, 10, 6, 6, 1, 9, 3, 5, 6, 4];
// var newArr = [];
// var old = [];
// var j;
// for (var i = 0; i < arr.length; i++) {
//         j = arr[i];
//         if(!old[j]){
//             newArr.push(j);
//             old[j] = true;
//         }
// }
// console.log(newArr);

// 方法2
// set 集合 集合中不容许重复
// var old = [9, 9, 10, 6, 6, 1, 9, 3, 5, 6, 4];
// var set  = new  Set(old);
// console.log(Array.from(set))

// 方法3
// var old = [9, 9, 10, 6, 6, 1, 9, 3, 5, 6, 4];
// var news = [];
// for (var i = 0; i < old.length; i++) {
//     if (news.indexOf(old[i]) == -1) {
//         news[news.length] = old[i];
//     }
// }
// console.log(news)





// 82.	左奇右偶
// 10个整数的数组{26,67,49,38,52,66,7,71,56,87}。
// 1.	元素重新排列，所有的奇数保存到数组左边，所有的偶数保存到数组右边。
// 2.	以下列格式打印数组：
// [26,67,49,38,52,66,7,71,56,87]
// var arr = [26, 67, 49, 38, 52, 66, 7, 71, 56, 87];
// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//         newArr.unshift(arr[i])
//     } else {
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr)



