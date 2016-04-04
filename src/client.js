var WebTorrent = require('webtorrent')

function Client () {
  this.client = new WebTorrent()
  this.link = ''
  this.torrent = null
}

Client.prototype.download = function (torrentLink, callback) {
  var self = this
  setTimeout(function () {
    self.link = torrentLink
    self.client.add(torrentLink, {path: './downloads'}, function (torrent) {
      self.torrent = torrent
      torrent.on('done', function (torrent) {
        callback(torrent)
      })
    })
  }, 1)
}

Client.prototype.stop = function () {
  this.torrent.destroy()
}

Client.prototype.getTorrent = function () {
  return this.torrent
}

Client.prototype.getProgress = function(){
  return this.torrent.progress
}
module.exports = Client
