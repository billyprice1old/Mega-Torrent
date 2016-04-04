var mega = require('mega')

var fs = require('fs')

function Mega(options){
  this.storage = mega(options)
  this.progress = 0
}

Mega.prototype.upload = function(file){
  var self = this
  setTimeout(function(){
    var stream = fs.createReadStream("./downloads/"+file).pipe(
      self.storage.upload(
        file.split('\/')[file.split('\/').length -1]
      )
    )
    stream.on('data', (chunk) => {
      self.progress += chunk.length
    });
  }, 1)
}

module.exports = Mega
