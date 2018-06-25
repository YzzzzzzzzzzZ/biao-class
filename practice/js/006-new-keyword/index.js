var max_id = 101;
var todo_list = [
  { // 0
    id: 100,
    name: '买菜',
    completed: false,
  },
  { // 1
    id: 101,
    name: '洗菜',
    remind_at: '2020-10-01 20:20:02',
    completed: false,
  },
];

/*增*/
function add(row) {
  row.id = ++max_id;
  todo_list.push(row);
}

/*删*/
function remove(id) {
  var index = find_index_by_id(id);
  if (index < 0)
    return;
  todo_list.splice(index, 1);
}

/*改*/
function change(id, new_row) {
}

/*查*/
function read(id) {

}


function find_index_by_id(id) {
  todo_list.findIndex(function (item) {
    return item.id == id;
  });
}
