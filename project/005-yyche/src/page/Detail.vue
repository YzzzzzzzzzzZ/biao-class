<template>
  <div>
    <Nav />
    <div class="container">
      <div class="search-area">
        <form class="col-lg-6 left">
          <input type="search">
          <button type="submit">搜</button>
        </form>
        <div class="car-number col-lg-6 right">
          车源号：HC-39762030
        </div>
      </div>
    </div>
    <div class="container">
      <div class="info-main row">
        <div class="col-lg-6">
          <div class="product-detail">
            <div class="cover">
              <img src="..\assets\detail\preview-01.webp">
            </div>
            <div class="thumbnail">
              <img src="..\assets\detail\slide-01.jpg">
              <img src="..\assets\detail\slide-01.jpg">
              <img src="..\assets\detail\slide-01.jpg">
              <img src="..\assets\detail\slide-01.jpg">
              <img src="..\assets\detail\slide-01.jpg">
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="product-text">
            <div class="title">
              雪佛兰 科鲁兹 2009款 1.6L SE AT
            </div>
            <div class="assort">
              <div>2009-6<span>上牌时间</span></div>
              <div>12.47万公里<span>表显里程</span></div>
              <div>西安<span>上牌地点</span></div>
              <div>1.6<span>排量</span></div>
              <div>自动<span>变速箱</span></div>
            </div>
            <div class="price">
              车主报价：<span>3.20万</span><i>新车指导价14.40万（含税）</i>
              <a href="#">询底价</a>
            </div>
            <div class="server-protect">
              <p>服务保障（瓜子已对车辆进行检测，并提供30天可退保障）<a href="#">查看详情></a></p>
              <p>
                <span>1年2万公里保障</span>
                <span>30天可退</span>
                <span>调车表赔付</span>
                <span>禁售盗抢查封车</span>
              </p>
              <p>
                服务费3500元（最低服务费）
              </p>
            </div>
            <div class="btnbox">
              <button class="btn btn-primary">预约看车</button>
              <button class="btn btn-primary">免费咨询</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container detail-gallery">
      <div class="about-vehicle-detail">
        <div class="title">
          车辆详情
        </div>
        <div class="package">
          <div class="about-vehicle-owner col-lg-6">
            <div class="owner-info">
              <img src="">
              <div>
                <div class="owner-name">卖家-马先生说车</div>
                <span>自由职业</span>
                <span>雁塔</span>
              </div>
            </div>
            <div class="owner-text">
              这辆车是我平时上下班代步用的车，2016年12月上的牌，到现在2.04万多公里正是车的好时候！这台车是我平时的代步车，平时出门或者过年回老家都会用它，使用强度不算很大。外观好看，特别是日间行车灯，油耗目前位置比较满意，开别克就有一种很稳的感觉，一点都不飘，好像是20万左右的车子一样。这台车一直是自己家用，没给外人用过，车况没毛病。我这车没买多长时间，算是准新车，光购置税就能省不少钱。我的车外观漆面良好，内饰也经常收拾，车况没毛病。
            </div>
          </div>
          <div class="about-vehicle-info col-lg-6">
            <div class="about-vehicle-title">
              车辆手续信息
            </div>
            <table class="col-lg-6">
              <tbody>
                <tr>
                  <td class="right">年检到期时间</td>
                  <td>2018-12</td>
                </tr>
                <tr>
                  <td class="right">商业险到期时间</td>
                  <td>2018-12</td>
                </tr>
                <tr>
                  <td class="right">有无购车发票</td>
                  <td>否</td>
                </tr>
                <tr>
                  <td class="right">是否4S店保养</td>
                  <td>否</td>
                </tr>
              </tbody>
            </table>
            <table class="col-lg-6">
              <tbody>
                <tr>
                  <td class="right">交强险到期时间</td>
                  <td>2018-12</td>
                </tr>
                <tr>
                  <td class="right">过户次数</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td class="right">车辆购置税完税证明</td>
                  <td>无</td>
                </tr>
                <tr>
                  <td class="right">有无改装</td>
                  <td>无</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="vhicle-p">
          <div class="vehicle-p-title">
            车辆外观
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Nav from '../components/Nav'

  export default {
    components: {
      Nav,
    }
  }
</script>

<style scoped>
  table {
    margin: 0;
  }

  tbody {
    display: inline-block;
    width:100%;
  }

  tr {
    display: inline-block;
    width: 100%;
    margin-bottom: 5px;
    border-bottom: 1px dashed #ddd;
  }

  td {
    display: inline-block;
    line-height: 2;
    padding-right: 4px;
    font-weight: bold;
    font-size: 1.1rem;
  }

  body {
    background: #fff;
  }

  td.right {
    text-align: right;
    width: 60%;
  }

  .search-area {
    padding: 10px 0;
  }

  .car-number {
    font-size: .8rem;
    color: #555;
    padding-right: 12px;
  }

  .info-main {
    margin-left: -10px;
    margin-right: -10px;
  }

  .info-main .col-lg-6 {
    padding: 10px;
  }

  .product-detail .cover {
    border-radius: 5px;
    overflow: hidden;
  }

  .product-detail .thumbnail {
    padding: 5px 0;
  }

  .product-detail .thumbnail img {
    display: inline-block;
    padding: 2px;
    width: 20%;
  }

  .product-text .title {
    font-size: 2rem;
  }

  .product-text .assort div {
    display: inline-block;
    font-size: 1.3rem;
    margin: 12px 0;
    padding: 0 10px;
    text-align: center;
    border-left: 1px solid #eee;
  }

  .product-text .assort div:first-child {
    border-left: 0;
  }

  .product-text .assort div span {
    display: block;
    font-size: .8rem;
    color: #aaa;
  }

  .price {
    font-size: 1.2rem;
    margin: 15px 0;
  }

  .price span {
    color: #fd521d;
    font-size: 2.2rem;
    padding: 0 2px;
    font-weight: bold;
  }

  .price i {
    color: #666;
    font-size: .8rem;
  }

  .price a {
    font-size: .8rem;
    border-radius: 12px;
    border: 1px solid #fd521d;
    padding: 2px 8px;
    color: #fd521d;
    text-decoration: none;
    margin-left: 20px;
  }

  .server-protect {
    padding: 10px;
    margin: 15px 0;
    background: #fafafa;
  }

  .server-protect p {
    font-size: 1rem;
    color: #333;
    line-height: 1.5;
    padding: 10px 0;
    margin: 0;
  }

  .server-protect p a {
    text-decoration: none;
  }

  .server-protect p span {
    display: inline-block;
    width: 25%;
    text-align: left;
  }

  .server-protect p span::before {
    content: '√ ';
    color: #fd521d;
  }

  .btnbox .btn {
    font-size: 1.2rem;
    border: 0;
    margin: 10px 0;
    margin-right: 20px;
    padding: 15px 50px;
    border-radius: 3px;
  }

  .detail-gallery {
    background: #fafafa;s
    border:1px solid #eee;
    padding: 20px
  }

  .about-vehicle-detail .title {
    font-size: 2.5rem;
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 1px dashed #eee;
  }

  .about-vehicle-detail .package {
    margin: 20px 0;
    padding-bottom: 20px;
    border-bottom: 1px dashed #eee;
  }

  .about-vehicle-detail .package > div {
    padding: 0 10px;
  }

  .about-vehicle-info .about-vehicle-title,
  .owner-info div .owner-name {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .owner-info div span {
    display: block;
    font-size: .8rem;
    color: #666;
  }

  .owner-text {
    margin-top: 10px;
    font-size: 1rem;
    padding-right: 20px;
  }

  .about-vehicle-info {
    padding: 0 20px;
    border-left: 1px dashed #eee;
  }

  .about-vehicle-info .about-vehicle-title {
    margin-bottom: 12px;
    text-align: center;
  }

  .about-vehicle-info table {
    line-height: 2;
    padding: 0 10px;;
  }
</style>
