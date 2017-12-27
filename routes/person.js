const mysql = require('../lib/mysqlConnection')
const log4js = require('log4js')

var express = require('express')
const router = express.Router()

log4js.configure(`config/log-config.json`)
const logger = log4js.getLogger('sql')

router.get('/person/:id([0-9]+)', (req, res) => {
    const query = 'select * from person where id = ' + req.params.id
    logger.info('parsonShow query : ' + query)
    mysql.query(query, (err, rows) => {
        res.send(rows)
    })
})

router.get('/person/all', (req, res) => {
    const query = 'select * from person'
    logger.info('parsonAll query : ' + query)
    mysql.query(query, (err, rows) => {
        res.send(rows)
    })
})

router.post('/person/', (req, res) => {
    const query = 'insert into person(name) values("' + req.body.name + '")'
    logger.info('parsonAdd query : ' + query)
    mysql.query(query, (err, rows) => {
        res.send(req.body.name + ' pushed.')
    })
})

router.put('/person/:id([0-9]+)', (req, res) => {
    const query = 'update person SET name ="' + req.body.name + '" where id =' + req.params.id
    logger.info('parsonUpdate query : ' + query)
    mysql.query(query, (err, rows) => {
        res.send('id:' + req.params.id + ' updated.' + req.body.name)
    })
})

router.delete('/person/:id([0-9]+)', (req, res) => {
    const query = 'delete from person where id =' + req.params.id
    logger.info('parsonDelete query : ' + query)
    mysql.query(query, (err, rows) => {
        res.send('id:' + req.params.id + ' deleted.')
    })
})

module.exports = router