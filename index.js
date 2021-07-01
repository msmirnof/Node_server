const {getTime} = require('./dateUtils');
const chalk = require('chalk');
const http = require('http');
const fs = require('fs');
const path = require('path');

const time = getTime()
console.log(time)
console.log(chalk.blue(time))

// console.log(chalk.blue('Название файла', path.basename(__filename)))
// console.log(chalk.green('Название дериктории', path.basename(__dirname)))
// console.log(chalk.red('Путь дериктории', path.dirname(__filename)))


// ======= own server

const hostname = '127.0.0.1',
      PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
  const ext = path.extname(filePath);
  let contentType = 'text/html';

  if (!ext) filePath += '.html'

  switch(ext) {
    case '.js':
      contentType = 'text/javascript'
      break
    case '.css':
      contentType = 'text/css'
      break
    default:
      contentType = 'text/html'
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end('Error')
        } else {
          res.writeHead(200, {
            'Content-type': 'text/html'
          })
          res.end(data)
        }
      })
    } else {
        res.writeHead(200, {
          'Content-type': contentType
        })
        res.end(content)
    }
  })

});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}`)
});
