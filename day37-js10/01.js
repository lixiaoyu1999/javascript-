
// 模拟最大值
var Math = {
    max: function () {
        var maxValue = arguments[0];
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i] > maxValue) {
                maxValue = arguments[i]
            }
        }
        return maxValue
    }
}
console.log(Math.max(1,2,3,4,5,6,7))