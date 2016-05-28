var app = require('./server/index.js')
var stdout = process.stdout
var port = process.env.PORT || 3000

app.listen(port, function(error) {
  if (error) {
    stdout.write('Error: ' + error + '\n\n')
  }

  stdout.write('Listening on port: ' + port + '\n\n')
})
