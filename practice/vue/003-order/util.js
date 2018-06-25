window.util = {
  findIndexById (arr, id) {
    return arr.findIndex(row => {
      return row.id == id;
    });
  },

  deleteElementById (arr, id) {
    let i = this.findIndexById(arr, id);
    arr.splice(i, 1);
  },
};
