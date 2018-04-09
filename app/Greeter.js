// 定义一个返回包含问候信息的html元素函数，并依据commonjs规范导出这个函数为一个模块
// module.exports = function () {
//     var greet = document.createElement('div');
//     greet.textContent = "Hi there and greetings";
//     greet.style.color = "red";
//     return greet;
// }

var config = require('./greetText.json');
module.exports = function () {
    var greet = document.createElement('div');
    greet.className = "transform-left"
    greet.textContent = config.greetText;
    return greet;
}