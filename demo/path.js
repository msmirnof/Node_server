// ======= for work with the path

const path = require('path');

console.log('Название файла', path.basename(__filename))
console.log('Название дериктории', path.basename(__dirname))
console.log('Путь дериктории', path.dirname(__filename))
console.log('Расширение файла', path.extname(__filename))
console.log('Обьект данных про файл', path.parse(__filename))
console.log('Получение пути к папке', path.join(__dirname, 'server', 'index.html'))