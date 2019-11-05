// var gdg = {
//     name:"郭德纲",
//     age:43,
//     sex :'男',
//     married:true,
//     hobby:['唱歌','跳舞'],
//     say:function(){
//         console.log('今天我给大家说段相声  太平歌词')
//     }
// }

// console.log(gdg)






// var wdy = {
//     name:'王丁耀',
//     age:18,
//     sex:'男',
//     married:false,
//     hobby:['女','抽烟','喝酒','上厕所','打游戏'],
//     study:function(){
//         console.log('我在仰望，月亮之上')
//     }
// }
// 获取对象的值
// wdy.study()
// console.log(wdy['sex'])



// 设置对象的值
// wdy.name = '吴峰';
// console.log(wdy)

// wdy['married'] = true;
// console.log(wdy)




// 删除对象的值
// delete wdy.name;
// console.log(wdy)





// 遍历对象的属性（键）
// for (var key in wdy) {
//     console.log(key)
// }
// for (var key in wdy) {
//     console.log(wdy[key])
// }
// for (var key in wdy) {
//     console.log(key + "=" + wdy[key])
// }



// 使用系统构造函数创建对象.
// var wdy = new Object ();
// wdy.name = '王丁耀';
// wdy.sex = '男';
// wdy.salay = 8000;
// wdy.house =false;
// wdy.say = function(){
//     console.log('666')
// }
// console.log(wdy)


// var creatObj = function (name, age, sex, hobby) {
//     var obj = new Object();
//     obj.name = name;
//     obj.age = age;
//     obj.sex = sex;
//     obj.hobby = hobby;


//     return obj;
// }

// var wangDingYang = creatObj('王丁耀', 18, '男', ['女', '抽烟', '喝酒', '上厕所', '打游戏']);
// var xia = creatObj('夏克斌', 18, '男', ['打游戏', '喝酒', '上厕所', '打游戏']);
// console.log(wangDingYang, xia)




// var TallStar = function (name, sex, age, hobby, say) {
//     this.name = name;
//     this.sex = sex;
//     this.age = age;
//     this.hobby = hobby;
//     this.say = say;



// }
// var guoDeGang = new TallStar("郭德纲", '男', 43, ['唱歌', '跳舞'], function () {
//     console.log('今天我给大家说段相声')
// })
// console.log(guoDeGang)




