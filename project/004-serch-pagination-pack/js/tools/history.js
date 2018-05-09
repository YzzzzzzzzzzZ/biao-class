var helper = require('../util/helper'),
  store = require('../util/store');

var list = [], //核心数据，本质上都是在操作这个数据
  el, //根元素，历史记录渲染在那个元素里
  onClick, //回调（当点击一条历史记录时插件使用者执行的自定义代码）
  onDelete; //回调（当删除一条历史记录时插件使用者执行的自定义代码）

// 供外部使用的借口
var output = {
  add: add,
  remove: remove,
  clear: clear,
  init: init,
};

//初始化
function init(config) {
  el = document.querySelector(config.el);
  onClick = config.onClick;
  onDelete = config.onDelete;

  if (!config.el || !el)
    throw 'Invalid root element';

  getData();
  render();
}

//渲染DOM
function render() {
  //清空 el 元素
  el.innerHTML = '';

  if(list.length > 5) {
    list = list.slice(0, 5);
  }

  //迭代 list 数据组生成历史记录列表
  list.forEach(function(keyword) {
    //创建元素
    var elKeyword = document.createElement('div');
    //插入内容
    elKeyword.innerHTML =
      `
    <div class="text">${keyword}</div>
    <div class="tool">
      <span class="delete">删除</span>
    </div>
    `;

    //添加类名
    elKeyword.classList.add('history');

    //追加到根元素后
    el.appendChild(elKeyword);

    //为本条记录绑定点击事件
    elKeyword.addEventListener('click', function(e) {
      //如果存在插件使用者的自定义函数，触发它
      if (onClick)
        onClick(keyword, e);
      el.hidden = true;
    });

    //绑定删除事件
    elKeyword
      .querySelector('.delete')
      .addEventListener('click', function(e) {
        e.stopPropagation();
        //如果存在插件使用者的自定义函数，触发它
        if (onDelete)
          onDelete(keyword, e);
        remove(keyword);
      });
  });

  //添加清除历史记录按钮
  var clearBtn = document.createElement('div');
  clearBtn.innerHTML = '清空历史记录';
  clearBtn.classList.add('clear-history-list');
  el.appendChild(clearBtn);

  clearBtn.addEventListener('click', function (e) {
    clear();
  });

  if(list.length == 0){
    clearBtn.hidden = true;
  }
}

//存储数据
function storingData() {
  store.set('history_list', list);
}

//获取历史数据
function getData() {
  list = store.get('history_list') || [];
}

//添加一日奥历史记录
function add(keyword) {
  helper.findAndDelete(list, keyword);
  list.unshift(keyword);
  storingData();
  render();
}

//删除一条历史记录
function remove(keyword) {
  helper.findAndDelete(list, keyword);
  storingData();
  render();
}

//清空历史记录列表
function clear() {
  list = [];
  storingData();
  render();
}

module.exports = output;
