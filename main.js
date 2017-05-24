import qs from 'qs';
import rp from 'request-promise';

export default class Directions {
  constructor(keys) {
    this.keys = keys;
    this.activeKey = 0;
    this.url = 'https://maps.googleapis.com/maps/api/directions/json';
  }

  query(parameters) {
    return new Promise(resolve => {
      const query = qs.stringify({
        ...parameters,
        key: this.keys[this.activeKey],
      });

      rp({
        url: this.url + '?' + query,
        json: true,
      }).then(result => {
        if (result.status === 'OK') {
          resolve(result);
        } else if (result.status === 'OVER_QUERY_LIMIT') {
          this.activeKey++;
          this.query(parameters);
        } else {
          console.log(result.status);
          resolve(result);
        }
      });
    });
  }
};