// ======= file system

const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'tmp', 'test.txt')


// // ==== создаем папку 
// fs.mkdir(path.resolve(__dirname, 'tmp'),{ recursive: true }, (err) => {
//   if (err) throw err
// });

// // ==== создаем файл (перезаписываем если существует) 
// fs.writeFile(filePath, 'New data in new file', (err) => {
//   if (err) throw err
// })

// // ==== создаем файл (если существует, то добавляем данные в файл)
// fs.appendFile(filePath, '\nAppending data', (err) => {
//   if (err) throw err
// })

// ==== читаем файл
fs.readFile(filePath, 'utf-8', (error, content) => {
  if (error) throw error
  console.log(content)

  // // (если не указать метод кодировки то вернеи буферный код который мы преобразовуем)
  // const data = Buffer.from(content)
  // console.log(data.toString())
})


// ==== удаляем файл (не работает - возможно из-за vsCode или нужно установить доп пакеты)
// fs.unlink(path.join(__dirname, 'tmp'), (error) => {
//   if (error) throw error
//   console.log('successfully deleted /tmp/hello');
// })