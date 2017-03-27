import qs from 'qs';
import rp from 'request-promise';

export default class Directions {
  constructor(key) {
    this.key = key;
    this.url = 'https://maps.googleapis.com/maps/api/directions/json';
  }

  query(address) {
    const query = qs.stringify({
      key: this.key,
      address: address,
    });

    return rp({
      url: this.url + '?' + query,
      json: true,
    });
  }
};