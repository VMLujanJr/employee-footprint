const router = require('express').Router();
const db = require('../../config/connection.js');

router.get('/', (req, res) => {
    const sql = `SELECT * FROM departments`;
    
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'successful',
            data: rows
        });
    });
});

module.exports = router;