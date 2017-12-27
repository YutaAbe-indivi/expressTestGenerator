const mysql = require('../lib/mysqlConnection')
const log4js = require('log4js')

var express = require('express')
const router = express.Router()

log4js.configure(`config/log-config.json`)
const logger = log4js.getLogger('sql')

router.post('/person/', (req, res) => {
    const query = 'insert into person(name) values("' + req.body.name + '")'
    logger.info('parsonAdd query : ' + query)
    mysql.query(query, (err, rows) => {
        res.send(req.body.name + ' pushed.')
    })
})

module.exports = router