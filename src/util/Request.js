/**
 * Created by 崔国辉 on 2019/7/19 16:41
 * Develop by 崔国辉 on 2019/7/19 16:41
 */
import Fetch from 'node-fetch';

const BASE_URL = 'http://musicapi.leanapp.cn';

const doGet = (url, data = {}) => {
  const params = new URLSearchParams({ ...data }).toString();
  return Fetch(`${url}?${params}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(res => Promise.resolve(res.json()))
    .catch(err => Promise.reject(err));
};

class Request {
  constructor (url) {
    this.url = url;
  }

  get = (path, data) => doGet(this.url + path, data)

  // post = (path, data) => this.getTokenInfo()
  //   .catch((e) => {
  //     RuntimeUtil.invalidToken();
  //     return Promise.reject(e);
  //   })
  //   .then(tokenInfo => doPost(this.url + path, tokenInfo, data));
}

const instance = new Request(BASE_URL);
export default instance;
