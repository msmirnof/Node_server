const EventEmitter = require('events');

const emitter = new EventEmitter();

// // ==== запускает просмотр событий
// emitter.on('event', event => {
//   console.log(event)
// })

// // ==== запускает событие
// emitter.emit('event', {'a': 1})
// emitter.emit('event', {'b': 1})

class Dispatcher extends EventEmitter {
  subscribe(eventName, cb) {
    console.log('Subscribe ...')
    this.on(eventName, cb)
  }

  dispatch(eventName, data) {
    console.log('Dispatching ...')
    this.emit(eventName, data)
  }
}

const disp = new Dispatcher()

disp.subscribe('event', data => {
  console.log('ON: ', data)
})

disp.dispatch('event', {'name': "Mike", 'age': 21})