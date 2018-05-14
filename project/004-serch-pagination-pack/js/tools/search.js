/*
* config = {
*   ketword = '', //搜索关键词
*   page: page, //页码
*   limit: limit, //每页数量
*   userList: userList, //数据渲染的地方
*   renderUserList: true // 是否在每次搜索时重置userlist
* }, onSuccess: fn(), //搜索成功后执行的函数
*   method: method //方法
*
* */
var page, obj, url, load;

load = document.createElement('div');
load.classList.add('loading');
load.innerHTML = `
<div>
  <img src="img/load.png" class="load">
</div>
`;
document.body.appendChild(load);
load.hidden = true;

var def = {
  keyword: '',
  page: 1,
  limit: 5,
};
function searchUser(config, onSuccess, method) {

  obj = Object.assign({}, def, config);

  url = 'https://api.github.com/search/users?q=';

  load.hidden = false;

  send(obj, onSuccess);

}

function send(obj, onSuccess, method) {
  method = method || 'get';
  var http = new XMLHttpRequest();
  http.open(method, url + obj.keyword + '&page=' + obj.page + '&per_page=' + obj.limit);
  http.setRequestHeader('Authorization', 'Basic ' + btoa('YzzzzzzzzzzZ:28236ab9a5313fddca330f3791b1d002bace04e5'));
  http.send();

  http.addEventListener('load', function () {
    if(obj.resetUserList) {
      obj.userList.innerHTML = '';
    }
    var data = JSON.parse(this.responseText);
    load.hidden = true;
    onSuccess(data);
  });
}

function pageChanged(page, onPageChange) {
  load.hidden = false;
  obj.page = page;
  send(obj, onPageChange);
}

module.exports = {
  searchUser: searchUser,
  pageChanged: pageChanged
};
