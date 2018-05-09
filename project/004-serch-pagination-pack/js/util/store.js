//向 localStorage 中存数据
function set(key, val) {
  //将数据JSON化
  var json = JSON.stringify(val);
  //向 localStorage 中存储
  localStorage.setItem(key, json);
}

//从 localStorage 中取数据
function get(val) {
  var json = localStorage.getItem(val);
  //转为建js能理解的数据
  return JSON.parse(json);
}


module.exports = {
  set: set,
  get: get
};
