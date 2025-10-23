const express = require('express');
const { calculate } = require('../utils/calcUtils');
const router = express.Router();

router.post('/', (req, res) => {
  const { a, b, op } = req.body;
  try {
    const result = calculate(a, b, op);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
