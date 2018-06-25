let app_data = {
  article: {
    list: [{
        id: 1,
        title: 'ABC',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa dicta dolorem doloribus eveniet fuga, illum iste labore modi neque nisi, nostrum odit placeat quasi quos reprehenderit tempore ullam vel?',
      },
      {
        id: 2,
        title: 'DEF',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa dicta dolorem doloribus eveniet fuga, illum iste labore modi neque nisi, nostrum odit placeat quasi quos reprehenderit tempore ullam vel?',
      },
    ],
  },
};

let o = {
  route: {
    home: {
      path: '#/home',
      templateUrl: './tpl/home.html',
      data: {
        name: 'aaa',
      },
      hook: {
        before: (route) => {
          send('/api/article/read', 'get', (res) => {
            route.data.articleList = res.data;
            route.render();
          });
        },
        after: () => {
          let list = appData.article.list;
          let elList = document.getElementById('artocle-list');

          list.forEach(row => {
            let elItem = document.createElement('div');
            elItem.innerHTML = `
              <a herf="#/article?id=${row.id}">${row.title}</a>
            `;
          });
        }
      },
    },
    about: {
      path: '#/about',
      templateUrl: './tpl/about.html',
      data: {
        name: 'aaa',
        age: 10,
      },
    },
    create: {
      path: '/create',
      templateUrl: './tpl/create.html',
      data: {},
      hook: {
        after: () => {
          // 选中提交表单
          let form = document.getElementById('creat-article');
          // 监听表单提交事件
          form.addEventListener('submit', (e) => {
            e.preventDefault();

            // 初始化数据
            let row = {};
            row.title = form.querySelector('[name=title]').value; //获取标题的值
            row.content = form.querySelector('name=content').value; // 获取内容的值

            // 插入数据（新增一条，类似于api.add()）
            appData.artile.list.push(row);

            // 重置表单
            form.reset();
          });
        },
      },
    },
    artocle : {
      path : '/article',
      templateUrl : './tpl.article.html',
      hook : {
        before : (current) => {
          send('/api/article/find', 'get', (res) => {
            current.data.article = res.data;
            current.render();
          });
        },
        after : (current) => {
          send('/api/article/find', 'get', (res) => {
            current.data.commentList = res.data;

            let elList = document.getElementById('comment-list');
            elList.innerHTML = '';

            res.data.forEach(row => {
              let el = document.createElement('div');
              el.innerHTML = '<hr>${row.contemt}';
              elList.appendChild(el);
            });

            console.log(elList);

          });
        },
        brforeRender : (current) => {
          current.data.param = current.$param;
        },
      },
      data : {},
    },
  },
  hook : {
    brfore : () => {};
    after : () => {};
  }
};

let route = new Route(o);
