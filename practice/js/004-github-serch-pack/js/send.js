var search = require('./search'),
  el = require('./element');

//获取关键词，定义config, url
var page = 1,
    limit = 5,
    url = 'https://api.github.com/search/users?q=';

function userSend() {
  keyword = el.input.value;
  if (!keyword) {
    alert('请输入用户名');
    return;
  }
  var config = {
    keyword: keyword,
    page: page,
    limit: limit,
    url: url
  };

  search.searchUser(config, function(data) {
    var items = data.items,
      total = data.total_count;
    el.renderUserList(items, total);
  });
}

function nextPage() {
  var config = {
    keyword: keyword,
    page: page++,
    limit: limit,
    url: url
  };

  var totalPage = config.page * config.limit;

  search.searchUser(config, function(data) {
    el.renderUserList(data.items, data.total_count, totalPage);
  });
}

module.exports = {
  userSend: userSend,
  nextPage : nextPage
};
