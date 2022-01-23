// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response

// Import user controller
var userController = require('./userController');
// User routes
router.route('/users')
    .get(userController.index)
    .post(userController.new);
router.route('/users/:phone')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);
router.route('/driver/:isAvailable')
    .get(userController.viewByDriver)
// Export API routes
module.exports = router;