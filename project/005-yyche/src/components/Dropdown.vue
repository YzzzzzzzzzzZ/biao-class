<template>
  <div>
    <div @mouseleave="show_menu=false" class="dropdown">
      <div @mouseenter="show_menu=true" class="selected">{{seleted[displayKey] || '请选择'}}</div>
      <div v-if="show_menu" class="menu">
        <div @click="yo(row)" v-for="row in list">{{row[displayKey]}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props : {
      list : {},
      onSelect : {},
      displayKey : {
        default : 'name',
      }
    },
    data () {
      return {
        seleted: {},
        show_menu: false,
      };
    },
    methods : {
      yo (row) {
        this.seleted = row;
        this.show_menu = false;
        if (this.onSelect)
          this.onSelect(row);
      }
    },
  }
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, .1);
}

.selected:hover,
.menu div:hover{
  background: rgba(0,0,200,.1)
}

.selected,
.menu > * {
  display: block;
  cursor: pointer;
  padding: 4px 8px;
  width: 80px;
}

.menu {
  background: #fff;
  z-index: 1;
  /* width: 100px; */
  position: absolute;
}
</style>
