var client = require('./client.js')
var mega = require('./mega.js')

function Mega_Torrent(data){
  this.email = data.email
  this.password = data.password
}

Mega_Torrent.prototype.download = function(url){
  var self = this
  setTimeout(function(){
    var c = new client()
    c.download(url, function(torrent){
      torrent.files.forEach(function(file){
        var m = new mega({email: self.email, password: self.password})
        m.upload(file.name)
      })
    })
  }, 1)
}

module.exports = Mega_Torrent
