/*
* config = {
*   ketword = '', //搜索关键词
*   page: page, //页码
*   limit: limit, //每页数量
*   userList: userList, //数据渲染的地方 （如果传值 在每次搜索时重置userlist）
* }, onSuccess: fn(), //成功后执行的函数
*   method: method //方法
*
* */
function searchUser(config, onSuccess, method) {
  var def = {
    keyword: '',
    page: 1,
    limit: 5,
  };

  config = Object.assign({}, def, config);

  var url = 'https://api.github.com/search/users?q=';
  userList = config.userList || false;
  method = method || 'get';

  var http = new XMLHttpRequest();
  http.open(method, url + config.keyword + '&page=' + config.page + '&per_page=' + config.limit);
  http.setRequestHeader('Authorization', 'Basic ' + btoa('YzzzzzzzzzzZ:28236ab9a5313fddca330f3791b1d002bace04e5'));
  http.send();

  http.addEventListener('load', function () {
    var judge = !userList;
    if(!judge) {
      config.userList.innerHTML = '';
    }
    var data = JSON.parse(this.responseText);
    onSuccess(data);
  });

}

module.exports = {
  searchUser: searchUser
};
