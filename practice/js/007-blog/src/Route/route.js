import helper from '../Util/helper';

let instance;

class Route {
  /**
   * 用于保存当前页面名称，此名称与对应的页面id是相同的，
   * 一般是通过this.parse_hash()解析得到
   * '#/a' -> 'a' -> <div id="a">
   *           ^ this is current
   * @property {Object} current
   * @property {Object} previous
   *
   * 默认配置项
   * @property {Object} def （default config）
   *
   * 可配置项
   * @property {Object} config
   * @var config.routes 记录所有路由状态和设置
   * @var config.before 切换前执行的回调函数（使用者的自定义代码）
   * @var config.before 切换后执行的回调函数
   *
   * */

   //初始化
   constructor (config) {
     this.param = {};

     //加载设置
     tis.loadConfig(config);
   }

   //加载所有配置
   loadConfig (config) {
     //默认配置
     this.def = { hook : {} };
     //合并默认配置
     this.config = Object.assign({}, this.def, config);
     
   }

}
