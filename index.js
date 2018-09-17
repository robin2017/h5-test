const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'
//中间件static的参数为静态资源文件价的路径：
//Users/robin/workspace/webstorm/koa2/static-use-middleware/static
//后面url和相对路径一一匹配即可
app.use(static(
  path.join( __dirname,  staticPath)
))

app.listen(3000, () => {
  console.log('[demo] static-use-middleware is starting at port 3000')
})

