const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/beta/summary/R01', function (req, res) {
  res.render('14-1-1/beta/summary/R01')
})
router.get('/beta/summary/R02', function (req, res) {
  res.render('14-1-1/beta/summary/R02')
})
router.get('/beta/summary/R03', function (req, res) {
  res.render('14-1-1/beta/summary/R03')
})
router.get('/beta/summary/R04', function (req, res) {
  res.render('14-1-1/beta/summary/R04')
})

module.exports = router
