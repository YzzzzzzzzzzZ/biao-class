// 事件处理相关

var el = require('./element'),
    search = require('./search'),
    send = require('./send'),
    history = require('./tools/history'),
    noMore;

function detectSubmit() {
  el.form.addEventListener('submit', function(e) {
    e.preventDefault();

    resetPage();

    resetUserList();

    send.userSend();
  });
}

// function detectNextPage() {
//   el.next.addEventListener('click', function() {
//     send.nextPage();
//   });
// }

function detectTop() {
  el.top.addEventListener('click', function () {
    window.scrollTo(0, 0);
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

//历史记录操作
function addHistory() {
  //初始化，配置 config
  history.init({
    el: '#history-list',
    onClick: function (keyword, e) {
      el.input.value = keyword;
      detectSubmit();
      send.userSend();
    }
  });

  el.input.addEventListener('focus', function() {
    el.history.hidden = false;
  });
  document.documentElement.addEventListener('click', function(e) {
    //取到当前点击元素
    var target = e.target;

    var in_search_input = target.closest('#search-input')
      , in_history_list = target.closest('#history-list')
    ;

    if (in_search_input || in_history_list)
      return;

    el.history.hidden = true;
  });

}

function addEvents() {
  // detectNextPage();
  detectSubmit();
  detectTop();
  addHistory();
}

module.exports = {
  addEvents: addEvents,
  // detectNextPage: detectNextPage,
  detectSubmit: detectSubmit,
  resetUserList: resetUserList,
  detectTop: detectTop,
  resetPage: resetPage
};
