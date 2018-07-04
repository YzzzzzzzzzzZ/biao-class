import Vue from 'vue';

function parse_string_rule (str) {
  let rule = {};

  str.split('|')
    .forEach(r => {
      let arr = r.split(':');
      let key = arr[0];
      let val = arr[1];

      val = val === undefined ? true : val;

      rule[key] = val;
    });
}

const valid = {
  username () {

  },
  required(val) {
    if (typeof val === 'number')
      return true;

    return !!val;
  },
  min_length (val, min) {
    return val.length >= parseInt(min);
  },
  max_length (val, min) {
    return val.length <= parseInt(min);
  },
}

export default Vue.directive('validator', {
  bind : function (el, binding) {
    let rule = binding.value;

    if (typeof rule === 'string')
      rule = parse_string_rule(binding.value);

    el.addEventListener('keyup', () => {
      let val = el.value;

      for (let r in rule) {
        let arg = rule[r];
        let validator = valid[r];

        if (validator && !validator(val, arg)) {
          console.log(r + '不合法');
        } else {
          console.log(r + '合法');
        }
      }
    });
  }
});
