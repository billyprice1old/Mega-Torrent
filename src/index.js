var client = require('./client.js')
var mega = require('./mega.js')

function Mega_Torrent (data) {
  this.email = data.email
  this.password = data.password
  this.status = 0
}

Mega_Torrent.prototype.download = function (url) {
  var self = this
  setTimeout(function () {
    var c = new client()
    c.download(url, function (torrent) {
      torrent.files.forEach(function (file) {
        var m = new mega({email: self.email, password: self.password})
        m.upload(file.name, function () {
          self.status = 0
        })
        self.status = 2
      })
    })
    self.status = 1
  }, 1)
}

Mega_Torrent.prototype.getStatus = function(){
  return this.status
}
module.exports = Mega_Torrent
