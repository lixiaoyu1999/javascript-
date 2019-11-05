// function f1 (){
//     console.log('SHBJHB')
// }
// f1()
// function f1(){
//     console.log('我的青春在传智')
// }
// f1();
// function f2(){
//     var x = 4;
//     var y = 9;
//     var he = x + y;
//     console.log(he)
// }
// f2();
// function f3(){
// var c=0
//     4>9?c=4:c=9
// console.log(c)
// }
// f3()

// function f5() {
//     var sum = 0
//     for (var i = 0; i <= 100; i++) {
//         if (i % 2 == 0) {
//             sum += i
//         }
//     }
//     console.log(sum)
// }
// f5();
// function f4() {
//     var arr = [4, 9, 10, 20, 3, 5, 1]
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log(sum)
// } 
// f4();


// function f1(a){
//     console.log(a)
// }
// f1('我的青春在传智');



// function f2(x,y){
//     var he = x + y;
//     console.log(he)
// }
// f2(4,5);



// function f3(a, b) {
//     var c = a > b ? a : b;
//     console.log(c)
// }
// f3(4, 5)


// function f5(x, y) {
//     var sum = 0
//     for (var i = x; i <= y; i++) {
//         if (i % 2 == 0) {
//             sum += i
//         }
//     }
//     console.log(sum)
// }
// f5(100, 200);




// function f4(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log(sum)
// }
// f4([4, 9, 10, 20, 3, 1]);




// function f2(x, y) {
//     var he = x + y;
//     console.log(he)
// }
// f2(4, 5);



// function f3(a, b) {
//     var c = a > b ? a : b;
//     console.log(c)
// }
// f3(4, 5)


// function f5(x, y) {
//     var sum = 0
//     for (var i = x; i <= y; i++) {
//         if (i % 2 == 0) {
//             sum += i
//         }
//     }
//     console.log(sum)
// }
// f5(100, 200);




// function f4(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log(sum)
// }
// f4([4, 9, 10, 20, 3, 1]);


// function num(x, y) {
//     var sum = x + y;
//     console.log(sum)
// }
// num(2, 5)

// function f2(x, y) {
//     var he = x + y;
//     console.log(he)
// }
// f2(4, 5);



// function f3(a, b) {
//     var c = a > b ? a : b;
//     return c 
// }
// var result = f3(13,8)
// console.log(result)


// function f5(x, y) {
//     var sum = 0
//     for (var i = x; i <= y; i++) {
//         if (i % 2 == 0) {
//             sum += i
//         }
//     }
//      return sum
// }
// var result = f5(100, 200);
// console.log(result)




// function f4(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// var result = f4([4, 9, 10, 20, 3, 1]);
// consolo.log(result)




// function fn() {
//     var sum = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum;
// }
// console.log(fn(1, 2, 3, 4, 5, 5));





// function f1(x,y){
//     var c = x+y;
//     return c;
// }
// console.log(f1(1,2))


// function maxValue(x,y){
//     var c = x>y?x:y;
//     return c
// }
// console.log(maxValue(2,3))


// function f1(x, y, z) {
//     var c = x > y ? x > z ? x : z : y > z ? y : z;
//     return c;
// }

// console.log(f1(4,2,3));





// function f1(x,y){
//     var c = x>y?x-y:y-x;
//     return c;

// }
// console.log(f1(5,6))



// function f1(arr) {
//     var minValue = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < minValue) {
//             minValue = arr[i]
//         }
//     }
//     return minValue;
// }

// console.log(f1([2, 4, 7, 9, 1, 3]));


// function f1(arr) {
//     var maxValue = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > maxValue) {
//             maxValue = arr[i]
//         }
//     }
//     return maxValue;
// }

// console.log(f1([2, 4, 7, 9, 1, 3]));



// function f1(arr){
//     var arrsum = 0;
//     for(var i= 0;i<arr.length;i++){
//         arrsum +=arr[i]
//     }
//     return arrsum;
// }
// console.log(f1([2, 4, 7, 9, 1, 3]));




// function f1(a){
//     for (var i = 2; i < a; i++) {
//         if (a % i != 0){
//             var c = '是素数'
//         }
//     }
//     return c;
// }
// console.log(f1(7))



// function f1(arr) {
//     for (var i = 0; i < arr.length / 2; i++) {
//         var temp = arr[i];
//         arr[i] = arr[arr.length - i - 1];
//         arr[arr.length - i - 1] = temp;
//     }
//     return arr;
// }
// console.log(f1([2, 4, 7, 9, 1, 3]));




// function f1(arr) {
//     for (var i = 0; i < arr.length / 2; i++) {
//         var temp = arr[i];
//         arr[i] = arr[arr.length - i - 1];
//         arr[arr.length - 1 - i] = temp
//     }
//     return arr;
// }
// console.log(f1([2, 4, 7, 9, 1, 3]))




// var arr = [5, 4, 3, 2, 1];
// function f1(arr){
//     for (var i = 0; i < arr.length-1; i++) {
//         for (var j = 0; j < arr.length-1-i; j++) {
//             if (arr[j] > arr[j+1]) {
//                 var temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(f1([5, 4, 3, 2, 1]))




// var arr = [5, 4, 3, 2, 1];
// function f1(arr){
//     for (var i=0;i<arr.length-1;i++){
//         for (var j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 var temp = arr[j];
//                 arr[j]= arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(f1([5, 4, 3, 2, 1]))




// function f1(a){
//     var sum = 1;
//     for(var i = 1;i<a;i++){
//         sum *=i
//     }
//    return sum;
// }
// console.log(f1(5))





// var f1 = function (a) {
//     var sum = 1;
//     for (var i = 1; i < a; i++) {
//         sum *= i
//     }
//     return sum;
// }
// console.log(f1(5))




// var fn6 = function () {
//   var num = function () {
//     console.log(1);
//   }

//   return num;
// }

// console.log(fn6())



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
