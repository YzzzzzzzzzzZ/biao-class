import api from './api';
export default {
  exist (unique, password) {
    return api('user/read', {
      where : {
        or : [
          [ 'username', '=', unique ],
          [ 'phone', '=', unique ],
          [ 'email', '=', unique ],
        ],
      },
    }).then(r => {
      let row;

      if ((row = r.data[ 0 ]) && row.password === password)
        return row;

      return false;
    });
  },

  uinfo() {
    let u = localStorage.getItem('uinfo');
    if (u)
      return JSON.parse(u);
  },

  login(row) {
    delete row.password;
    localStorage.setItem('uinfo', JSON.stringify(row));
  },

  logout(url) {
    localStorage.removeItem('uinfo');
    location.href = url || '/';
  },

  is_admin() {
    return this.uinfo() && this.uinfo().is_admin;
  },

  logged_in() {
    return !!this.his_id();
  },

  his_id() {
    let info = this.uinfo();
    return info && this.uinfo().id;
  }
};