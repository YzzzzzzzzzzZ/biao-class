import axios from 'axios';

export default api;

const APP_KEY  = '476c075b199753a33b1dbf5e475d545aa322b38e747de34f687a247431d219f3';
const BASE_API = 'http://mock.biaoyansu.com/api/';

function sign (app_key, timestamp) {
  return btoa(app_key + timestamp);
}

function api (url, params) {
  let timestamp = (new Date).getTime();
  let signature = sign(APP_KEY, timestamp);

  let opt = {
    headers : {
      'biao-mock-app-key'   : APP_KEY,
      'biao-mock-timestamp' : timestamp,
      'biao-mock-signature' : signature,
    },
  };

  url = BASE_API + url;
  return axios
    .post(url, params, opt)
    .then(r => {
      return r.data;
    });
}
