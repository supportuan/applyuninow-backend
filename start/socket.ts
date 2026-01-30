import Ws from 'App/Services/Ws'
Ws.boot()

/**
 * Listen for incoming socket connections
 */
Ws.io.on('connection', (socket) => {
  socket.on('join', function (data) {
    socket.join(data.id) // We are using room of socket io
  })

  socket.on('leave', function (data) {
    socket.leave(data.id) // We are using room of socket io
  })
})
