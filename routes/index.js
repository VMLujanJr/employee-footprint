const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', (req, res) => {
    res.status(404).end();
});

module.exports = router;