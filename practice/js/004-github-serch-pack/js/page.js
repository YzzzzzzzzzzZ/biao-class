var elStart : '#pagination-start',
    elEnd : '#pagination-end',
    pagination : '#pagination',
    html;


function page(config) {
  var def = {
    el : '#page',
    page : 1,
    limit : 10,
    totalPage : 0
  };

  config = Object.assign({}, def, config);

  var el = document.getElementById(config.el);

  html = `
      <div>
        <button id=${elStart}>首页</button>
      </div>
      <div id=${pagination}></div>
      <div>
        <button id=${elEnd}>末页</button>
      </div>
      `
  el.innerHTML = html;

  var totalPage = config.totalPage,
      pageArea = document.getElementById(pagination);

  for(var i = 1, i <= totalPage, i++){
    pageArea.append(
      `<div>${i}</div>`;
    );
  }
}
