const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'winklow',
  port: '3306',
  database: 'test'
})

// 连接MySql服务器
db.connect((err) => {
  if(err) return console.log('数据库连接失败');
  console.log('数据库连接成功');
})

module.exports = db