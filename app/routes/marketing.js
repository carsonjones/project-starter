/*
  /routes/marketing
  used for marketing pages
*/

var fs = require('fs');
var path = require('path');

'use strict';

module.exports = function(router) {
  // Serve the home view
  router.route('/')
  .get(function(req, res, next) {
    res.render('home');
  });
};
