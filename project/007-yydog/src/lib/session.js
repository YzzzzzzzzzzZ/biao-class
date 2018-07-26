export default {
  uinfo() {
    let u = localStorage.getItem('uinfo');
    if (u)
      return JSON.parse(u);
  },

  login(row) {
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