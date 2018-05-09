function searchUser(config, onSuccess, method) {

  var def = {
    keyword: '',
    page: 1,
    limit: 10
  };

  //合并用户配置
  config = Object.assign({}, def, config);

  method = method || 'get';

  var http = new XMLHttpRequest();
  http.open(method, config.url + config.keyword + '&page=' + config.page + '&per_page=' + config.limit);
  http.send();

  http.addEventListener('load', function() {
    var data = JSON.parse(this.responseText);
    onSuccess(data);
  });
}

module.exports = {
  searchUser: searchUser
};
