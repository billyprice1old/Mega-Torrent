var client = require('./client.js')
var mega = require('./mega.js')

function Mega_Torrent (data) {
  this.email = data.email
  this.password = data.password
  this.status = 0
  this.megas = []
  this.clients = []
}

Mega_Torrent.prototype.download = function (url) {
  var self = this
  setTimeout(function () {
    var c = new client()
    self.clients[url] = c
    c.download(url, function (torrent) {
      delete self.clients[url]
      torrent.files.forEach(function (file) {
        var m = new mega({email: self.email, password: self.password})
        self.megas[url] = m
        m.upload(file.name, function () {
          self.status = 0
          delete self.megas[url]
        })
        self.status = 2
      })
    })
    self.status = 1
  }, 1)
}

Mega_Torrent.prototype.getStatus = function () {
  return this.status
}

Mega_Torrent.prototype.getClients = function () {
  return this.clients
}

Mega_Torrent.prototype.getMegas = function () {
  return this.megas
}
module.exports = Mega_Torrent
