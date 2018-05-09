var form = document.getElementById('search-form'),
  input = document.getElementById('search-input'),
  userList = document.getElementById('user-list'),
  top = document.getElementById('top'),
  placeholer = document.getElementById('placeholer'),
  amount = document.getElementById('amount'),
  history = document.getElementById('history-list'),
  pagination = document.getElementById('pagination-container'),
  totalPage;


/* 渲染用户列表
 * @param Array data 用于渲染的数据
 * */
function renderUserList(data, total, limit) {
  var html = userList.innerHTML;
  pagination.hidden = true;

  data.forEach(function(user) {
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

  pagination.hidden = false;

}

module.exports = {
  form: form,
  input: input,
  placeholer: placeholer,
  userList: userList,
  top: top,
  history: history,
  renderUserList: renderUserList,
};
