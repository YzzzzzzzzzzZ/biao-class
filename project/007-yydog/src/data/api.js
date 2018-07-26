window.api = api;

const APP_KEY  = 'f26660c9c1fb154be7f305a590f9bca031225832cf58146046fc183a101a686a';
const BASE_API = 'http://mock.biaoyansu.com/api/1/';

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
};
