// app/routes/api.js

module.exports = function(router) {
  'use strict';
  // This will handle the url calls for /users/:user_id
  router.route('/')
  .get(function(req, res, next) {
    res.json({ message: 'Welcome to the Cursor Labs API'});
  })
  .put(function(req, res, next) {
    // Update
  })
  .patch(function(req, res,next) {
    // Patch
  })
  .delete(function(req, res, next) {
    // Delete
  });
};