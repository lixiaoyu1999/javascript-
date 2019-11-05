// 求斐波那契数列
// 方法1
// var Fb = function (a) {
//     var arr = [1, 1];
//     for (var i = 3; i <= a; i++) {
//         arr[arr.length] = arr[arr.length - 1] + arr[arr.length - 2]
//     }
//     return arr;
// }
// console.log(Fb(12))
// // 方法2
// var fb = function (a) {
//     var num1 = 1;
//     var num2 = 1;
//     var sum = 0;
//     for (var i = 3; i <= a; i++) {
//         sum = num1 + num2;
//         num1 = num2;
//         num2 = sum;
//     }
//     return sum
// }
// console.log(fb(5))








// 阶乘和

// var jc = function (num) {
//     var result = 1;
//     for (var i = 1; i <= num; i++) {
//         result *= i
//     }
//     return result
// }
// var jcsum = function (num) {
//     var sum = 0;
//     for (var i = 1; i <= num; i++) {
//         sum += jc(i)
//     }
//     return sum
// }

// console.log(jcsum(5))








// 输入,年月日,获取这个日期是这一年的第多少天
// var getDays = function (year, month, day) {
//     var days = day;
//     if (month == 1) {
//         return days;
//     }
//     var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     for (var i = 0; i < month-1; i++) {
//         days += months[i]
//     }
//     if (month > 2 && (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) {
//         days++;
//     }
//     return days;
// }
// console.log(getDays(2018, 3, 27));








// var cc = "张三";
// // 1.定义一个函数 ,传入三个参数 year month day
// var getDays = function (year, month, day) {
//   // 2.把day的数存起来
//   var days = day;
//   // 3.判断是不是一月 如果是一月 直接返回days
//   if (month == 1) {
//     return days;
//   }
//   // 4.如果不是一月，把所有月份存起来 遍历 该月以前的每个月的天数 加起来
//   var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   for (var i = 0; i < month - 1; i++) {
//     days += months[i];
//   }
//   // 5.判断是不是大于2月 且 该年是闰年 如果两个条件同时满足  让计算的天数+1
//   if (month > 2 && (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) {
//     days++;
//   }
//   // 6.输出结果
//   return days;
// }







// // console.log(getDays(2018,1,27));
// // 31 + 28 + 27 = 
// console.log(getDays(2018, 3, 27));









// 求斐波那契数列
// var getArr = function (a){
//   var arr=[1,1];
//   for(var i=3;i<=a;i++){
//       arr[arr.length]=arr[arr.length-1]+arr[arr.length-2]
//   }
//   return arr;
// }
// console.log(getArr(12))
// 阶乘和
var result=1;
for(var i= 0;i<13;i++){
 result *=i
}
var sum =0;
for(var j=0;j<i-1;j++){
sum 
}
// 8.	利用JavaScript完成如下功能：当用户输入一个三位数，用程序计算三位数字的和比如：用户输入156，就弹出12
// 用户输入116，就弹出8
// 用户输入189，就弹出18
// 注意：用户输入数字的有效性、合法性不用考虑。比如，如果用户输入34343、“我爱你”，这种情况我们不要去考虑，你就想像，用户会非常乖，一定会输入3位数的。这是因为我们没有学习if语句。
// 14.	利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）
// 15.	利用JavaScript完成如下九九乘法表

// 16.	利用JavaScript，使用循环语句输出如下菱形图案（由“-”和“*”这两种符号组成）







// 输入,年月日,获取这个日期是这一年的第多少天
// var getDays = function (year, month, day) {
//     var days = day;
//     if (month == 1) {
//         return days;
//     }
//     var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     for (var i = 0; i < month-1; i++) {
//         days += months[i]
//     }
//     if (month > 2 && (year % 4 == 0 && year % 100 != 0 || year % 400==0)) {
//         days++;
//     }
//     return days
// }
// console.log(getDays(2008, 3, 1))








// 输入,年月日,获取这个日期是这一年的第多少天



// 冒泡函数

// var getarr=function (arr){
//     for(var i=0;i<arr.length-1;i++){
//         for(var j=0;j<arr.length-1-i;j++){
//          if(arr[j]>arr[j+1]){
//              var temp = arr[j];
//              arr[j]=arr[j+1];
//              arr[j+1]=temp;
//          }
//         }
//     }
//     return arr;

// }
// console.log(getarr([5,4,3,2,1]));