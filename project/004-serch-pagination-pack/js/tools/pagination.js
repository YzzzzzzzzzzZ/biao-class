/*
 * config = {
 *   el: '#pagination-container', //根元素
 *   currentPage: page, //当前页
 *   totalCount: totalCount, //内容总个数
 *   limit: limit, //每页显示个数
 *   maxBtnLength: 5, //页面中存在的最大页码按钮数量
 *   start: true, // 是否需要 首页 按钮
 *   end: true, // 是否需要 尾页 按钮
 *   next: true, // 是否需要 下一页 按钮
 *   prev: true, // 是否需要 上一页 按钮
 *   pageOnclick: function pageOnclick(currentPage, e) {
 *     search(currentPage);
 *   } //当页面按钮点击时触发的函数
 * }
 * */

var el,
  currentPage,
  pageOnclick,
  totalCount,
  limit,
  maxBtnLength,
  totalPage,
  start,
  end,
  next,
  prev,
  elFieldset;

var output = {
  init: init
  // changePage: changePage
};

function init(config) {
  el = document.querySelector(config.el);
  currentPage = config.currentPage || 1;
  totalCount = config.totalCount;
  limit = config.limit;
  maxBtnLength = config.maxBtnLength;
  pageOnclick = config.pageOnclick;
  start = config.start;
  end = config.end;
  next = config.next;
  prev = config.prev;

  totalPage = Math.ceil(totalCount / limit);



  render();

}

function appendPage() {
  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > totalPage) {
    currentPage = totalPage;
  }
  //清空
  pageArea.innerHTML = '';

  //插入页码
  var start,
    end,
    middle = Math.ceil(maxBtnLength / 2),
    reachingLeft = currentPage <= middle,
    reachingRight = currentPage >= totalPage - middle;

  if (reachingLeft) {
    start = 1;
    end = maxBtnLength;
  } else if (reachingRight) {
    start = totalPage - maxBtnLength;
    end = totalPage;
  } else {
    start = currentPage - (middle - 1);
    end = currentPage + (middle - 1);
  }

  if (totalPage < maxBtnLength) {
    end = totalPage;
  }

  for (var i = start; i <= end; i++) {
    var btn = document.createElement('button');
    btn.innerText = i;
    btn.dataset.page = i;
    btn.classList.add('pager');

    btn.disabled = false;

    if (i == currentPage){
      btn.style.background = '#fefefe';
      btn.disabled = true;
    }
    pageArea.appendChild(btn);
  }
}

var leftArea,
  pageArea,
  rightArea;

//渲染
function render() {
  //清空页码
  el.innerHTML = '';
  elFieldset = document.createElement('fieldset');
  el.appendChild(elFieldset);
  //插入首页和上一页
  if (start || prev) {
    leftArea = document.createElement('fieldset');
    if (start) {
      var startBtn = document.createElement('button');
      startBtn.innerText = '首页';
      startBtn.dataset.page = 1;
      startBtn.classList.add('pager');
      leftArea.appendChild(startBtn);
    }
    if (prev) {
      var prevBtn = document.createElement('button');
      prevBtn.innerText = '上一页';
      prevBtn.dataset.page = currentPage - 1;
      prevBtn.classList.add('pager');
      leftArea.appendChild(prevBtn);
    }
    elFieldset.appendChild(leftArea);
  }

  pageArea = document.createElement('fieldset');
  elFieldset.appendChild(pageArea);
  appendPage();

  //插入尾页和下一页
  if (end || next) {
    rightArea = document.createElement('fieldset');
    if (next) {
      var nextBtn = document.createElement('button');
      nextBtn.innerText = '下一页';
      nextBtn.dataset.page = currentPage + 1;
      nextBtn.classList.add('pager');
      rightArea.appendChild(nextBtn);
    }
    if (end) {
      var endBtn = document.createElement('button');
      endBtn.innerText = '尾页';
      endBtn.dataset.page = totalPage;
      endBtn.classList.add('pager');
      rightArea.appendChild(endBtn);
    }
    elFieldset.appendChild(rightArea);
  }

  enable(leftArea);
  enable(rightArea);

  if (currentPage == 1) {
    disable(leftArea);
  }
  if (currentPage == totalPage) {
    disable(rightArea);
  }

  onClick();
}


function onClick() {
  var pageList = document.querySelectorAll('.pager');
  pageList.forEach(function(item) {
    // console.log(item);
    item.addEventListener('click', function(e) {
      if (currentPage == parseInt(e.currentTarget.dataset.page)) {
        return;
      }
      var changedPage = parseInt(e.currentTarget.dataset.page);
      changePage(changedPage, e);
    });
  });
}

function changePage(changedPage, e) {
  currentPage = changedPage;
  disable(elFieldset);
  //回调
  if (pageOnclick)
    pageOnclick(currentPage, e);
  appendPage();
}

function disable(area) {
  area.disabled = true;
}

function enable(area) {
  area.disabled = false;
}

module.exports = output;
