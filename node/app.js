const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");
const path = require("path");
const test = require("./routes/test");
const app = express()

// 用来解析 post body x-www-form-urlencoded 格式数据
app.use(bodyParser.urlencoded({ extended: false }))
// 用来解析 post body json 格式数据
app.use(bodyParser.json())
// 处理跨域
app.use(cors())

// 路由
app.use("/auth", test);


// 启动服务器
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});