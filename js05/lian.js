// 数组
// 格式：var arr = [];
// var arr = [1,2,3,4,4];
// var arr = [];
// var arr = [1,2,3,4,4];
// console.log(arr.length);
// console.log(arr[0]);
// arr[3]=9;
// console.log(arr);
// 遍历
// var arr = [1,2,3,4,4];
// var str = '';
// for (var i = 0; i < arr.length;i++){
//     console.log(str);
// }
// 例题1：求数组中所有元素的和
// var arr = [2, 4, 6, 7, 10];
// var sum = 0;
// for (var i = 0; i < arr.length;i++){
//     sum += arr[i]
// }
// console.log(sum);



// 例题2：求数组中所有元素的平均值
// var arr = [40, 50, 120, 123, 100];
// var sum = 0;
// for (var i = 0; i <arr.length;i++){
//     sum += arr[i]
// }
// sum = sum / 5;
// console.log(sum)

// 案例3: 求数组中所有元素中的最大值
// var arrNum = [23, 45, 87, 92, 97];
// var maxarr = arrNum[0];
// for (var i = 0;i<arrNum.length;i++){
//     if (arrNum[i]>maxarr){
//         maxarr = arrNum[i]
//     }
// }
// console.log(maxarr);





// 案例4: 求数组中所有元素的最小值
// var arrNum = [23, 45, 87, 92, 97];
// var minarr = arrNum[0];
// for (var i = 0; i<arrNum.length;i++){
//     if (arrNum[i]<minarr){
//         minarr = arrNum[i]
//     }
// }
// console.log(minarr);

// 案例5: 倒序遍历数组
// var arrNum = [23, 45, 87, 92, 97];
// for (var i = arrNum.length;i>=0;i--){
//     console.log(arrNum[i]);
// }


// 案例6: 把数组中每个元素用 | 拼接到一起产生一个字符串并输出
// var names=["卡卡西","佐助","鸣人","大蛇丸","雏田","凤姐","黑崎一护"];
// var str = "";
// for (var i = 1;i<names.length;i++){
//     str = str + "|" + names[i]
// }
// console.log(names[0]+str);




// 案例7: 去掉数组中重复的元素0， 把其他的数据放在一个新的数组中
// var arr = [10, 0, 20, 0, 30, 0, 50];
// var newarr = [];
// for (var i = 0;i<arr.length;i++){
//     if (arr[i] !=0){
//         newarr[newarr.length]=arr[i]
//     }
// }
// console.log(newarr)


// 案例8: 反转数组---把数组中的数据的位置调换
// var arr = [10, 20, 30, 40];
// for (var i = 0;i<arr.length;i++){
//     var temp = arr[i];
//     arr[i]=arr[arr.length-1-i];
//     arr[arr.length-1-i]=temp;
// }
// console.log(arr);







// var i = 100, f = i, b = 7;
// for (; i <= 200; i++) {
//     var j = f - f % b;
//     if ((i / b) - (j / b) == 2) {
//         console.log(i);
//     }
// }