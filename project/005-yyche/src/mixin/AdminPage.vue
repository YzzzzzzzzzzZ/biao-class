<script>

  import Pagination from '../components/Pagination.vue';
  import Dropdown from '../components/Dropdown'

  import api from '../lib/api';

  export default {
    components: {
      Pagination,
      Dropdown,
    },
    data() {
      return {
        edit_mode: false,
        current: {},
        list: [],
        show_form: false,
        keyword: '',
        total: 0,
        currentPage: 1,
        model: null,
        searchable : []
      };
    },
    mounted() {
      this.read();
    },
    methods: {
      cou(e) {
        e.preventDefault();

        if (JSON.stringify(this.current) == '{}') {
          alert('某有东西  。0.0 ');
          return;
        }

        let method = this.current.id ? 'update' : 'create';

        api(`${this.model}/${method}`, this.current)
          .then(() => {
            this.current = {};
            this.read();
          });
      },
      read(page) {
        if (page <= 1) {
          page = 1;
          return;
        } else if (page >= this.total) {
          page = this.total;
          return;
        }

        let param = {
          page: page,
        }

        if (this.model == 'model') {
          param.with = [
            { model: "brand", type: "has_one" },
            { model: "design", type: "has_one" }
          ];
        }
        api(`${this.model}/read`, param).then(r => {
          this.list = r.data;
          this.total = r.last_page;
          this.currentPage = r.current_page;
        })
      },
      remove(id) {
        if (confirm('确定删除？')) {
          api(`${this.model}/delete`, {
              id
            })
            .then(() => {
              this.read();
            });
        }
      },
      update(i) {
        this.show_form = true;
        this.current = this.list[i];
        if(this.after_update){
          this.after_update();
        }
      },
      search(e) {
        e.preventDefault();

        let param = {
          or: {}
        };

        this.searchable.forEach(porp => {
          param.or[porp] = this.keyword;
        });

        api(`${this.model}/search`, param)
          .then(r => {
            this.list = r.data;
          });
      },
      page(page) {
        this.read(page);
      }
    }
  };
</script>
