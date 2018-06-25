// import articleApi from './Api/article';
// import articleUi from './Ui/article';
import route from './Route/route';

let routeConfig = {
  routes : {
    home : {
      path : '/home',
      el : '#home',
    },
    about : {
      path : '/about',
      el : '#about',
    },
    article : {
      path : '/article/:author/:id',
      el : '#article',
    },
    article_list : {
      path : '/article-list',
      el   : '#article-list',
    },
    tag          : {
      path : '/tag',
      el   : '#tag',
    },
  },
  hook : {
    before : function () {
      return true;
    },
    after : function () {
      //通过接口拿到数据
      //...
    }
  }
};

route.init(routeConfig);
