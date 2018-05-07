// 事件处理相关

var el = require('./element'),
    search = require('./search'),
    send = require('./send'),
    keyword = el.input.value,
    noMore;

function detectSubmit() {
  el.form.addEventListener('submit', function(e) {
    // console.log(search);
    e.preventDefault();

    resetPage();

    resetUserList();

    send.userSend();
  });
}

function detectNextPage() {
  el.next.addEventListener('click', function() {
    send.nextPage();
  });
}

function detectTop() {
  el.top.addEventListener('click', function () {
    window.scrollTo(0, 0);
  });
}

function addEvents() {
  detectNextPage();
  detectSubmit();
  detectTop();
}

//重置页码为1
function resetPage() {
  page = 1;
}

//清空以渲染内容
function resetUserList() {
  el.userList.innerHTML = '';
}



module.exports = {
  addEvents: addEvents,
  detectNextPage: detectNextPage,
  detectSubmit: detectSubmit,
  resetUserList: resetUserList,
  detectTop: detectTop,
  resetPage: resetPage
};
