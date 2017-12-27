const mysql = require('../lib/mysqlConnection')
const log4js = require('log4js')

var express = require('express')
const router = express.Router()

log4js.configure(`config/log-config.json`)
const logger = log4js.getLogger('sql')

router.put('/person/:id([0-9]+)', (req, res) => {
    const query = 'update person SET name ="' + req.body.name + '" where id =' + req.params.id
    logger.info('parsonUpdate query : ' + query)
    mysql.query(query, (err, rows) => {
        res.send('id:' + req.params.id + ' updated.' + req.body.name)
    })
})

module.exports = router