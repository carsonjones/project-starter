// dev env
var nconf = require('nconf');

nconf.set('url', 'cursorlabs.io');

nconf.set('database', {
  user: nconf.get(DB_USER_NAME),
  password: nconf.get(DB_USER_PASS),
  server: nconf.get(DB_SERVER_URL)
});
