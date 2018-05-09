var search = require('./search'),
  el = require('./element'),
  history = require('./tools/history');

//获取关键词，定义config, url
var page = 1,
    limit = 10,
    url = 'https://api.github.com/search/users?q=';

function userSend(kwd) {
  keyword = kwd || el.input.value;
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
    if(total > 1000){
      total = 1000;
    }
    el.renderUserList(items, total);
  });

  history.add(keyword);

  el.input.blur();
}

function nextPage() {
  var config = {
    keyword: keyword,
    page: ++page,
    limit: limit,
    url: url
  };

  var totalPage = config.page * config.limit;

  search.searchUser(config, function(data) {
    var items = data.items,
        total = data.total_count;
    if(total > 1000){
      total = 1000;
    }
    el.renderUserList(items, total, totalPage);
  });
}

module.exports = {
  userSend: userSend,
  nextPage : nextPage
};
