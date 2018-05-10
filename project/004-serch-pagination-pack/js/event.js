// 事件处理相关

var el = require('./element'),
  search = require('./tools/search'),
  history = require('./tools/history'),
  pagination = require('./tools/pagination'),
  keyword = el.input.value,
  page,
  limit = 15,
  totalCount;

  function addEvents() {
    detectSubmit();
    detectTop();
    initHistory();
  }

function detectSubmit() {
  el.form.addEventListener('submit', function(e) {
    e.preventDefault();

    resetPage();

    resetUserList();

    initSearch();
  });
}

//重置页码为1
function resetPage() {
  page = 1;
}

//清空以渲染内容
function resetUserList() {
  el.userList.innerHTML = '';
}

//返回顶部
function detectTop() {
  el.top.addEventListener('click', function() {
    window.scrollTo(0, 0);
  });
}

//搜索
function initSearch() {
  el.top.click();
  search.searchUser({
    keyword: el.input.value,
    page: page,
    limit: limit,
    userList: el.userList,
    resetUserList: true // 是否在每次搜索时重置userlist
  }, function(data) {
    var items = data.items;
    totalCount = data.total_count;
    keyword = el.input.value;
    if (totalCount > 1000) {
      totalCount = 1000;
    }

    el.renderUserList(items, totalCount);
    initPage();
    history.add(keyword);
  });
}

//页码
function initPage() {
  pagination.init({
    el: '#pagination-container', //根元素
    currentPage: page, //当前页
    totalCount: totalCount, //内容总个数
    limit: limit, //每页显示个数
    maxBtnLength: 7, //页面中存在的最大页码按钮数量(单数)
    start: true, // 是否需要 首页 按钮
    end: true, // 是否需要 尾页 按钮
    next: true, // 是否需要 下一页 按钮
    prev: true, // 是否需要 上一页 按钮
    pageOnclick: function pageOnclick(currentPage, e) {
      page = currentPage;
      initSearch();
    } //当页面按钮点击时触发的函数
  });
}

//历史记录操作
function initHistory() {
  history.init({
    el: '#history-list',
    onClick: function(kwd, e) {
      el.input.value = kwd;
      resetPage();
      resetUserList();
      initSearch();
    }
  });

  el.input.addEventListener('focus', function() {
    el.history.hidden = false;
  });
  document.documentElement.addEventListener('click', function(e) {
    //取到当前点击元素
    var target = e.target;

    var in_search_input = target.closest('#search-input'),
      in_history_list = target.closest('#history-list');

    if (in_search_input || in_history_list)
      return;

    el.history.hidden = true;
  });
}

module.exports = {
  addEvents: addEvents,
  detectSubmit: detectSubmit,
  detectTop: detectTop,
  resetPage: resetPage
};
