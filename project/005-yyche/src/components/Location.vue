<template>
    <div class="location">
        <div class="search">
            <input type="search" v-model="keyword" placeholder="输入所在地搜索">
        </div>
        <div class="step-list">
          <div class="step" v-if="location.state.length">
              <div v-for="row in location.state"
                  @click="select(row, 'state')"
                  :key="row.id"
                  >{{row.name}}
              </div>
          </div>
          <div class="step" v-if="location.city.length">
              <div v-for="row in location.city"
                  @click="select(row, 'city')"
                  :key="row.id"
                  >{{row.name}}</div>
          </div>
          <div class="step" v-if="location.region.length">
              <div v-for="row in location.region"
                  @click="select(row, 'region')"
                  :key="row.id"
                  >{{row.name}}</div>
          </div>
        </div>
    </div>
</template>


<script>
const china_id = 1;
import api from "../lib/api";
export default {
  props: {
    onSelect: {}
  },
  mounted() {
    this.read(china_id, "state");
  },
  data() {
    return {
      keyword: "",
      parent_id: null,
      location: {
        state: [],
        city: [],
        region: []
      },
      current: {
        state: null,
        city: null,
        region: null
      }
    };
  },
  methods: {
    select(row, type) {
      let child_type;
      this.current[type] = row.id;

      switch (type) {
        case "state":
          child_type = "city";
          break;
        case "city":
          child_type = "region";
          break;
      }

      this.read_child_and_select(row, child_type);
    },
    read_child_and_select(row, type) {
      this.read(row.id, type).then(r => {
        if (!r.length || parent.type == "city") {
          this.onSelect(row);
        }
      });
    },
    read(parent_id, type) {
      this.parent_id = parent_id;
      return api("location/read", {
        where: {
          and: { parent_id }
        }
      }).then(r => {
        let data = r.data;
        this.location[type] = data;
        return data;
      });
    },
    search() {
      api('location/search', {
        or:{
          name: this.keyword
        }
      }).then(r => {
        this.group(r.data);
      });
    },
    group (list) {
      list.forEach(row => {
        let sub = this.location[row.type];
        sub.push(row);
      });
    },
  },
  watch: {
    keyword() {
      this.search()
    }
  }
};
</script>

<style scoped>
.location {
  max-width: 200px;
}

.step-list {
  border: 1px solid rgba(0, 0, 0, 0.1);
  line-height: 0;
  border-top-width: 0;
}

.location .step {
  line-height: 1.7;
  display: inline-block;
  width: 33.333333333%;
  max-height: 100px;
  overflow: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}

.location .step:last-child {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.location .step:first-child {
  border-left: 0;
}

.location .item {
  cursor: pointer;
  padding: 5px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.location .item.active {
  background: #fd521d;
  color: #fff;
}
</style>
