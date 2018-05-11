/*
* config = {
*   ketword = '', //搜索关键词
*   page: page, //页码
*   limit: limit, //每页数量
*   userList: userList, //数据渲染的地方
*   renderUserList: true // 是否在每次搜索时重置userlist
* }, onSuccess: fn(), //搜索成功后执行的函数
*   OnPageChangeSend: fn(), //页码改变时搜索成功后执行的函数
*   method: method //方法
*
* */
var page, obj, sendMethod, url;

var def = {
  keyword: '',
  page: 1,
  limit: 5,
};
function searchUser(config, onSuccess, method) {

  obj = Object.assign({}, def, config);

  url = 'https://api.github.com/search/users?q=';
  sendMethod = method || 'get';

  send(obj, onSuccess, sendMethod);
}

function send(obj, onSuccess, method) {
  var http = new XMLHttpRequest();
  http.open(method, url + obj.keyword + '&page=' + obj.page + '&per_page=' + obj.limit);
  http.setRequestHeader('Authorization', 'Basic ' + btoa('YzzzzzzzzzzZ:28236ab9a5313fddca330f3791b1d002bace04e5'));
  http.send();

  http.addEventListener('load', function () {
    if(obj.resetUserList) {
      obj.userList.innerHTML = '';
    }
    var data = JSON.parse(this.responseText);
    onSuccess(data);
  });
}

function OnPageChangeSend(obj, onPageChange, method) {
  method = method || sendMethod;
  var http = new XMLHttpRequest();
  http.open(method, url + obj.keyword + '&page=' + obj.page + '&per_page=' + obj.limit);
  http.setRequestHeader('Authorization', 'Basic ' + btoa('YzzzzzzzzzzZ:28236ab9a5313fddca330f3791b1d002bace04e5'));
  http.send();

  http.addEventListener('load', function () {
    if(obj.resetUserList) {
      obj.userList.innerHTML = '';
    }
    var data = JSON.parse(this.responseText);
    onPageChange(data);
  });
}

function pageChanged(page, onPageChange) {
  obj.page = page;
  OnPageChangeSend(obj, onPageChange);
}

module.exports = {
  searchUser: searchUser,
  pageChanged: pageChanged
};
