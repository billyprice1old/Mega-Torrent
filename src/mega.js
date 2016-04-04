var mega = require('mega')
var config = require('./config.json')

var fs = require('fs')

function Mega(options){
  this.storage = mega(options)
  this.progress = 0
}

Mega.prototype.upload = function(file){
  var self = this
  setTimeout(function(){
    var stream = fs.createReadStream(file).pipe(self.storage.upload(file))
    stream.on('data', (chunk) => {
      self.progress += chunk.length
    });
  }, 1)
}

module.exports = Mega
