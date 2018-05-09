function findAndDelete(arr, element) {
  //取到 element 在 arr 中的位置
  var index = arr.indexOf(element);

  //如果 element 不存在直接返回
  if (index == -1)
    return false;

  //删除 element
  arr.splice(index, 1);
  return true;
}

module.exports = {
  findAndDelete: findAndDelete
};
