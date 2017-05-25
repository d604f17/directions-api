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
            setTimeout(() => {
              request(callback);
            }, 1000);
          } else if (result.status === 'ZERO_RESULTS') {
            callback(result);
          } else {
            console.log(result.status);
            console.log('key may be exhaused, changing key');
            this.activeKey++;
            request(callback);
          }
        });
      };

      request(function(result) {
        resolve(result);
      });
    });
  }
};