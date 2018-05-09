var search = require('./search'),
  el = require('./element'),
  pagination = require('./tools/pagination'),
  history = require('./tools/history');

//获取关键词，定义config, url
var page,
    limit = 5,
    url = 'https://api.github.com/search/users?q=',
    totalPage;

function userSend(page) {
  keyword = el.input.value;
  page = page || 1;

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
    totalPage = Math.ceil(total / limit);
    el.renderUserList(items, total);
    pagination.init({
      el: '#pagination-container',
      currentPage: page,
      totalPage: totalPage,
      maxBtnLength: 5,
      start: true,
      end: true,
      next: true,
      pre: true,
      pageOnclick: function pageOnclick(currentPage, e) {
        el.userList.innerHTML = '';
        userSend(currentPage);
      }
    });
  });

  history.add(keyword);

  el.input.blur();
}

module.exports = {
  userSend: userSend,
  totalPage : totalPage
};
