const router = require('express').Router();
const departmentRoutes = require('./department-routes.js');

router.use('/departments', departmentRoutes);

module.exports = router;