var form = document.getElementById('search-form'),
    input = document.getElementById('search-input'),
    next = document.getElementById('next'),
    userList = document.getElementById('user-list'),
    top = document.getElementById('top'),
    placeholer = document.getElementById('placeholer'),
    amount = document.getElementById('amount'),
    noMore;


/* 渲染用户列表
 * @param Array data 用于渲染的数据
 * */
function renderUserList(data, total, totalPage){
  var html = userList.innerHTML;

  data.forEach(function (user) {
    html = html + `
    <div class="user">
      <a class="avatar" target="_blank" href="${user.html_url}">
        <img src="${user.avatar_url}">
      </a>
      <div class="info">
        <div class="username">${user.login}</div>
        <div><a target="_blank" href="${user.html_url}">${user.html_url}</a></div>
      </div>
    </div>
    `;
  });

  userList.innerHTML = html;
  amount.innerHTML = '共有' + total + '条结果';
  showNext();

  //如果每页的数量乘以页数大于总数就说明当前页就是最后一页
  noMore = (totalPage >= total);

  next.hidden = noMore;
  placeholer.hidden = !noMore;
}

function hideNext() {
  next.hidden = true;
}

function showNext() {
  next.hidden = false;
}

module.exports = {
  form : form,
  input : input,
  next : next,
  placeholer : placeholer,
  userList : userList,
  top : top,
  showNext : showNext,
  hideNext : hideNext,
  renderUserList : renderUserList
};
