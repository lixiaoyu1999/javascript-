// 1.prompt输入得到的是字符串类型的，parseInt可以把字符串转换为数字，取到的结果为整数，小数部分得不到。
// var a = prompt('请输入');
// console.log(parseInt(a))






// 2.求一组数中的最小值及其索引值
// var arr = [19, 10, 7, 6, 15];
// var minarr = arr[0];
// var count = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < minarr) {
//         minarr = arr[i];
//         count = i
//     }
// }
// console.log(minarr, count);



// 3.不借助临时变量，进行两个整数的交换
// var a = 1;
// var b = 19;
// b= a +b;
// a = b - a;
// b= b - a;
// console.log(a,b);




// 4.实现求两个任意正整数的最大公约数
// function fn(min, max) {
//     //用于存放min和max的所有公约数
//     var arr = [];
//     for (i = 1; i <= min; i++) {
//         if (min % i == 0 && max % i == 0) {
//             arr[arr.length] = i;
//         }
//     }
//     //取出数组最后一项,即为最大公约数 
//     console.log(arr[arr.length - 1]);
// }
// fn(12, 60);


// 5.实现求两个数组的交集
// var arr = [2, 4, 5, 9, 7, 3];
// var arrNum = [3, 5, 8, 2, 7];
// var num1 = [];
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arrNum.length; j++) {
//         if (arr[i] == arrNum[j]) {
//             num1[num1.length] = arrNum[j]
//         }
//     }
// }
// console.log(num1)



// 6.实现求两个数组的并集
// 方法1
// var arr = [2, 4, 7, 9, 1, 3];
// var arrNum = [3, 5, 8, 2, 7];
// var num1 = [];
// for (var i = 0; i < arr.length; i++) {
//     num1[num1.length] = arr[i]
// }
// for (var j = 0; j < arrNum.length; j++) {
//     num1[num1.length] = arrNum[j]
// }
// var set = new Set(num1);
// console.log(Array.from(set));


// 方法2
// var arr = [2, 4, 7, 9, 1, 3];
// var arrNum = [3, 5, 8, 2, 7];
// var arrnew = arr.concat(arrNum)
// var num1 = [];
// for (var i = 0; i < arrnew.length; i++) {
//     if (num1.indexOf(arrnew[i]) == -1) {
//         num1[num1.length] = arrnew[i]
//     }
// }
// console.log(num1)



// 7.找出下列正数组中的最大差值：[17, 3, 11, 4, 9]
// var arr = [17, 3, 11, 4, 9];
// var minarr = arr[0];
// var maxarr = arr[0];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < minarr) {
//         minarr = arr[i]
//     }
//     else if (arr[i] > maxarr) {
//         maxarr = arr[i]
//     }
// }
// console.log(maxarr - minarr)




