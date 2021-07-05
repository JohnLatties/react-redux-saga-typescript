import mysql from "mysql2"
import config from '../../main/config'

export const connection = mysql.createPool({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database
})