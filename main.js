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

      const request = (callback) => {
        return rp({
          url: this.url + '?' + query,
          json: true,
        }).then(result => {
          if (result.status === 'OK') {
            callback(result);
          } else if (result.status === 'OVER_QUERY_LIMIT') {
            request(callback);
          } else if (result.status === 'ZERO_RESULTS') {
            callback(result);
          } else {
            console.log(result.status);
            // console.log('key exhaused, changing key');
            // this.activeKey++;
            callback(result);
          }
        });
      };

      request(function(result) {
        resolve(result);
      });
    });
  }
};