
var isPromise = require('is-promise');

module.exports = function (callback) {
  if (typeof callback === 'function') {
    try {
      callback = callback();
    } catch (error) {
      return Promise.resolve(error);
    }
  }
  if (isPromise(callback)) {
    return new Promise((resolve) => {
      callback.then(() => {
        resolve(null);
      }, (error) => {
        resolve(error);
      });
    })
  }
  return Promise.resolve(null);
}
