var isaacs = require('isaacs');
var stdin = process.openStdin()

isaacs(function (izs) {
  process.stdout.write('> ')
  
  stdin.on('data', function (buf) {
    var line = buf.toString()
    var s = izs.speak(line).join(' ')
    console.log(s)
    process.stdout.write('> ')
  })
})
