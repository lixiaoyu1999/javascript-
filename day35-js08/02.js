// var nan = {
//     name: "李晓雨",
//     age: 19,
//     taxt: ['学习', '练习', '复习'],
//     say: function () {
//         console.log('不败')
//     }


// }
// // nan.name='王丁耀'
// console.log(nan.name)
// for(var key in nan){
//     console.log(nan[key])
// }


// for(var key in nan ){
//     console.log(nan[key]+'='+key)
// }
// var Star = function (name) {
//     this.name = name
// }
// var err = new Star ('liao');
// console.log(err)


var err = function(name){
    var obj =new Object();
    obj.name = name;
    return obj;
}
