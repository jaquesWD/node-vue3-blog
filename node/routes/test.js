const express = require('express');
const router = express.Router();
const db = require('../mysql')

// 查询
router.get('/user', (req, res) => {
  const sql = 'select * from student'
  db.query(sql, (err, result) => {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return;
    }
    res.send({
      status: 200,
      data: result
    })
  })
})

module.exports = router;