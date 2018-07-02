<template>
  <div class="main">
    <Nav :push-down="true"/>
    <div>
      <div class="container row">
        <div class="col-lg-3">
          <AdminNav/>
        </div>
        <div class="col-lg-9">
          <div class="content card">
            <h2>车辆列表</h2>
            <div class="toor-bar">
              <div>
                <button @click="show_form=!show_form">创建二手车</button>
              </div>

              <form @submit="search($event)">
                <input type="search" v-model="keyword">
                <button type="submit" hidden></button>
              </form>
            </div>

            <form v-if="show_form" @submit="cou($event)">
              <div class="input-control">
                <label>标题</label>
                <input type="text" v-model="current.title">
              </div>
              <div class="input-control">
                <label>价格(万)</label>
                <input type="float" v-model="current.price">
              </div>
              <div class="input-control">
                <label>卖车原因</label>
                <input type="text" v-model="current.publish_reason">
              </div>
              <div class="input-control">
                <label>当前里程</label>
                <input type="number" v-model="current.consumed_distance">
              </div>
              <div class="input-control">
                <label>过户次数</label>
                <input type="number" v-model="current.exchange_times">
              </div>
              <div class="input-control">
                <label>第一次上牌时间</label>
                <input type="datetime-local" v-model="current.birthday">
              </div>
              <div class="input-control">
                <label>预期出售时间</label>
                <input type="datetime-local" v-model="current.deadline">
              </div>
              <div class="input-control">
                <label>车况</label>
                <input type="number" v-model="current.condition">
              </div>
              <div class="input-control">
                <label>描述</label>
                <textarea v-model="current.description"></textarea>
              </div>
              <div class="input-control">
                <label class="dib">促销
                  <input type="checkbox" v-model="current.on_sale">
                </label>
                <label class="dib">本地车牌
                  <input type="checkbox" v-model="current.local">
                </label>
              </div>
              <div class="input-control">
                <button class="btn-primary" type="submit">提交</button>
              </div>
            </form>
            <div class="table">
              <table>
                <thead>
                  <th>标题</th>
                  <th>价格(万)</th>
                  <th>里程</th>
                  <th>预期出售时间</th>
                  <th>车况</th>
                  <th>过户次数</th>
                  <th>特价</th>
                  <th>操作</th>
                </thead>
                <tbody>
                  <tr v-for="(row, index) in list">
                    <td>{{row.title}}</td>
                    <td>{{row.price}}</td>
                    <td>{{row.consumed_distance || '-'}}</td>
                    <td>{{row.deadline || '-'}}</td>
                    <td>{{row.condition ? row.condition + '成新' : '-'}}</td>
                    <td>{{row.exchange_times || '-'}}</td>
                    <td>{{row.on_sale || '-'}}</td>
                    <td>
                      <button @click="update(index)">编辑</button>
                      <button @click="remove(row.id)">删除</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pagination">
              <Pagination
                :totalPage="total"
                :currentPage="currentPage"
                maxBtn="3"
                :onPageChange="page"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="container">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis, sed! A culpa enim eveniet explicabo
          omnis quibusdam ullam vel. Animi aspernatur cupiditate incidunt nostrum quae, quidem totam. Labore, sequi!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../css/admin.css';

  import AdminNav from '../../components/AdminNav.vue';
  import Nav      from '../../components/Nav.vue';
  import Pagination from '../../components/Pagination.vue';
  import api      from '../../lib/api';

  export default {
    components : { AdminNav, Nav, Pagination},
    data () {
      return {
        edit_mode : false,
        current: {},
        list:[],
        show_form: false,
        keyword: '',
        total : 0,
        currentPage: 1,
      };
    },
    mounted () {
      this.read();
    },
    methods : {
      cou (e) {
        e.preventDefault();

        if(JSON.stringify(this.current) == '{}') {
          alert('某有东西  。0.0 ');
          return;
        }

        let method = this.current.id ? 'update' : 'create';

        api('vehicle/' + method, this.current)
          .then(() => {
            this.current = {};
            this.read();
          });
      },
      read (page) {
        if (page <= 1){
          page = 1;
        }else if (page >= this.total ) {
          page = this.total;
        }
        api('Vehicle/read', {limit:3, page: page}).then(r => {
          this.list = r.data;
          this.total = r.last_page;
          this.currentPage = r.current_page;
        })
      },
      remove (id) {
        if(confirm('确定删除？')){
          api('Vehicle/delete', {id})
          .then(() => {
            this.read();
          });
        }
      },
      update (i) {
        this.show_form = true;
        this.current = this.list[i];
      },
      search (e) {
        e.preventDefault();

        let param = {
            or: {
              title: this.keyword,
              description: this.keyword,
            }
          };

        api('Vehicle/search', param)
          .then(r => {
            this.list = r.data;
          });
      },
      page (page) {
        this.read(page);
      }
    }
  };
</script>

<style scoped>
  table {
    width: 100%;
  }

  .main {
    background: #f0f0f0;
  }

  h2 {
    margin: 0;
    font-size: 16px;
  }

  .table {
    overflow: auto;
  }

  th, td {
    padding: 5px 10px;
    text-align: left;
  }

  .pagination {
    text-align: center;
  }

</style>
