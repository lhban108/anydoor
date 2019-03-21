const fs = require('fs')
const promisify = require('util').promisify
const stat = promisify(fs.stat)
const readdir = promisify(fs.readdir)
const path = require('path')
const Handlebars = require('handlebars')
const config = require('../config/defaultConfig')

const tplPath = path.join(__dirname, '../template/dir.tpl') /* eslint-disable-line */
const source = fs.readFileSync(tplPath)
const template = Handlebars.compile(source.toString())
module.exports = async function(req, res, filePath) {
    try {
        const stats = await stat(filePath)
        if (stats.isFile()) {
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/palin')
            fs.createReadStream(filePath).pipe(res)
        } else if (stats.isDirectory()) {
            const files = await readdir(filePath)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html')
            const dir = path.relative(config.root, filePath)

            const data = {
                title: path.basename(tplPath),
                dir: dir ? `/${dir}` : '',
                files
            }
            res.end(template(data))
        }
    } catch (error) {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain')
        res.end(`err:${error},${filePath}is not directory or file`)
        return;
    }
}