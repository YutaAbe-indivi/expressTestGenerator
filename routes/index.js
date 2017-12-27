var express = require('express')
var person = require('./person')
var router = express.Router()

router.get('/person/:id([0-9]+)', person)
router.get('/person/all', person)
router.post('/person/', person)
router.put('/person/:id([0-9]+)', person)
router.delete('/person/:id([0-9]+)', person)

module.exports = router
