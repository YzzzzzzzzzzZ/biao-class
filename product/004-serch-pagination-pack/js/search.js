var el = require('./element'),
  history = require('./tools/history'),
  pagination = require('./tools/pagination');

//获取关键词，定义config, url
var page,
  limit = 5,
  url = 'https://api.github.com/search/users?q=';

function search(page) {
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

  send(config, function(data) {
    var items = data.items,
      total = data.total_count;

    if (total > 1000) {
      total = 1000;
    }
    el.renderUserList(items, total);
    var totalPage = Math.ceil(total / limit);
    //页码
    pagination.init({
      el: '#pagination-container', //根元素
      currentPage: page, //当前页
      totalPage: totalPage, //总页数
      maxBtnLength: 5, //页面中存在的最大页码按钮数量
      start: true, // 是否需要 首页 按钮
      end: true, // 是否需要 尾页 按钮
      next: true, // 是否需要 下一页 按钮
      pre: true, // 是否需要 上一页 按钮
      pageOnclick: function pageOnclick(currentPage, e) {
        search(currentPage);
      } //当页面按钮点击时触发的函数
    });
  });

  history.add(keyword);

}

function send(config, onSuccess, method) {

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
    el.userList.innerHTML = '';
    var data = JSON.parse(this.responseText);
    onSuccess(data);
  });
}


module.exports = {
  search: search,
};
