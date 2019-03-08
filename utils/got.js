const got = require('got');

module.exports = got.extend({
  header: {
    'content-type': 'text/plain',
    'x-app': 'surge2clash'
  }
});
