const os = require('os');

// const osInfo = os.cpus()
// osInfo.forEach(data => {
//   console.log(data.model)
// })

// console.log(`Операционная система: ${os.platform()}`)
// console.log(`Архитектура проц: ${os.arch()}`)
// console.log('Инфа по проц: ', os.cpus())
console.log('Свободная память: ', os.freemem())
console.log('Общая память: ', os.totalmem())
console.log('Домашняя директория: ', os.homedir())
console.log('Общее время работы системы (сек): ', os.uptime())