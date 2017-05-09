import qs from 'qs';
import rp from 'request-promise';

export default class Directions {
  constructor(key) {
    this.key = key;
    this.url = 'https://maps.googleapis.com/maps/api/directions/json';
  }

  query(parameters) {
    const query = qs.stringify({
      ...parameters,
      key: this.key
    });

    return rp({
      url: this.url + '?' + query,
      json: true,
    });
  }
};