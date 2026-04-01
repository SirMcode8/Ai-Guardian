const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'User One' }]);
});

module.exports = router;