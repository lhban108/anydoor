const http = require('http')
const chalk = require('chalk') // 颜色
const path = require('path')
const conf = require('./config/defaultConfig')
const rout = require('./helper/route')

// 全局安装supervisor
// 不再通过node app.js启动，而是通过supervisor app.js启动
// 则每次文件修改后，supervisor会自动重启服务器，并监听src下的所有文件

const server = http.createServer((req, res) => {
    const filePath = path.join(conf.root, req.url)
    rout(req, res, filePath)
        /*
        fs.stat(filePath, (err, stats) => {
            if (err) {
                res.statusCode = 404
                res.setHeader('Content-Type', 'text/plain')
                res.end(`${filePath}is not directory or file`)
                return;
            }

            if (stats.isFile()) {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/palin')
                fs.createReadStream(filePath).pipe(res)
            } else if (stats.isDirectory()) {
                fs.readdir(filePath, (err, files) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/palin')
                    res.end(files.join(','))
                })
            }
        })*/

})

server.listen(conf.port, conf.hostname, () => {
    const addr = `http://${conf.hostname}:${conf.port}`
    console.info(`Server started at ${chalk.green(addr)}`) /* eslint-disable-line */
})