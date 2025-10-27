const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ status: 'Fábrica de automóveis 2025' });
});

module.exports = router;