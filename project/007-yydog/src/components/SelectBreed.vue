<template>
  <div class="hot-breed">
    <span :class="{active: !breed_id}" @click="breed_id= '';rid()">不限</span>
    <span 
      :class="{active: breed_id == item.id}" 
      @click="breed_id=item.id;rid(item)" :key="item.id" 
      v-for="item in hot_list">{{item.name}}</span>
      <span v-if="breedId != 0">
        当前： <span class="active">{{breed[0].name}}</span>
      </span>
    <span @click="show_more = !show_more" class="more right">
      更多
    </span>
    <div v-if="show_more">
      <div class="search-by-letter">
        <span :class="{active: by == 'A'}" @click="by = 'A'">A</span>
        <span :class="{active: by == 'B'}" @click="by = 'B'">B</span>
        <span :class="{active: by == 'C'}" @click="by = 'C'">C</span>
        <span :class="{active: by == 'D'}" @click="by = 'D'">D</span>
        <span :class="{active: by == 'F'}" @click="by = 'F'">F</span>
        <span :class="{active: by == 'G'}" @click="by = 'G'">G</span>
        <span :class="{active: by == 'H'}" @click="by = 'H'">H</span>
        <span :class="{active: by == 'J'}" @click="by = 'J'">J</span>
        <span :class="{active: by == 'K'}" @click="by = 'K'">K</span>
        <span :class="{active: by == 'L'}" @click="by = 'L'">L</span>
        <span :class="{active: by == 'M'}" @click="by = 'M'">M</span>
        <span :class="{active: by == 'N'}" @click="by = 'N'">N</span>
        <span :class="{active: by == 'P'}" @click="by = 'P'">P</span>
        <span :class="{active: by == 'Q'}" @click="by = 'Q'">Q</span>
        <span :class="{active: by == 'R'}" @click="by = 'R'">R</span>
        <span :class="{active: by == 'S'}" @click="by = 'S'">S</span>
        <span :class="{active: by == 'T'}" @click="by = 'T'">T</span>
        <span :class="{active: by == 'W'}" @click="by = 'W'">W</span>
        <span :class="{active: by == 'X'}" @click="by = 'X'">X</span>
        <span :class="{active: by == 'Y'}" @click="by = 'Y'">Y</span>
        <span :class="{active: by == 'Z'}" @click="by = 'Z'">Z</span>
      </div>
      <div class="breed">
        <span
          :class="{active: breed_id == item.id}"
          @click="breed_id=item.id;rid(item)" 
          :key="item.id" 
          v-for="item in breed_list" >{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../lib/api.js";
export default {
  mounted() {
    this.read_breed_hot();
    this.read_breed_by_letter();
    this.read_breed_by_id();
  },
  props: {
    breedId: {
      default: 0
    }
  },
  data() {
    return {
      show_more: false,
      breed_list: {},
      hot_list: {},
      by: "A",
      breed_id: this.breedId,
      breed: {}
    };
  },
  methods: {
    read_breed_by_letter() {
      api("breed/read", { 
        where: { letter: this.by },
        limit:50 
      }).then(r => {
        this.breed_list = r.data;
      });
    },
    read_breed_hot() {
      api("breed/read", { where: { hot: true } }).then(r => {
        this.hot_list = r.data;
      });
    },
    rid(row) {
      this.$emit("getBreed", row);
    },
    read_breed_by_id() {
      api("breed/read", { where: { id: this.breed_id } }).then(r => {
        this.breed = r.data;
      });
    }
  },
  watch: {
    by(nby) {
      this.read_breed_by_letter(nby);
    }
  }
};
</script>

<style scoped>
.hot-breed span {
  padding: 4px 8px;
  cursor: pointer;
  display: inline-block;
}

.more {
  float: right;
}

.more::after {
  content: "+";
  font-weight: bold;
}

.hot-breed span.active {
  background: #00c772;
  color: #fff;
}

.search-by-letter {
  padding: 10px 0;
}
</style>


