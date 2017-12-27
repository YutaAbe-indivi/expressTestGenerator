var express = require('express')
var router = express.Router()

router.get('/person/:id([0-9]+)', require('./personShow'))
router.get('/person/all', require('./personAllShow'))
router.post('/person/', require('./personAdd'))
router.put('/person/:id([0-9]+)', require('./personUpdate'))
router.delete('/person/:id([0-9]+)', require('./personDelete'))

module.exports = router
