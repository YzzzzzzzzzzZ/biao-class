// 入口文件

var event = require('./event');

init();

//初始化
function init() {
  //绑定所有必要事件
  event.addEvents();
}
