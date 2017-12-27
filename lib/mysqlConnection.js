const mysql = require('mysql')
const config = require('config')

const dbConfig = config.db

const connection = mysql.createConnection(dbConfig)

module.exports = connection