import Vue from 'vue';
import api from '../lib/api'
import session from '../lib/session'

function init() {
  read()
}

init()

export const hub = {
  cart: []
};

export function all() {
  return hub;
}

export function read() {
  let user_id = (session.uinfo() && session.uinfo().id) || '';

  api('cart/read', {
    where: {
      user_id: user_id,
    },
    with: 'has_one:pet',
    limit: 50
  }).then(r => {
    Vue.set(hub, 'cart', r.data);
    // hub.cart = r.data;
  })
}

export function add(pet_info) {
  api('cart/create', {
    pet_info: pet_info,
    user_id: session.uinfo() && session.uinfo().id,
    count: 1
  }).then(() => {
    read();
  })

}

export function remove(id) {
  api('cart/delete', {
    id
  }).then(() => {
    read();
  })
}

export function update(row) {
  api('cart/update', row).then(() => {
    read();
  })
}

export function find_pet_by_pid(pet_id) {
  for (let id in hub.cart) {
    let it = hub.cart[id];
    if (it.pet_info.id == pet_id)
      return it;
  }
}

export function pet_exist(pet_id) {
  return !!find_pet_by_pid(pet_id)
}