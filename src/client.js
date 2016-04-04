var WebTorrent = require('webtorrent')

function Client () {
  this.client = new WebTorrent()
  this.link = ''
  this.torrent = {}
}

Client.prototype.download = function (torrentLink, callback) {
  var self = this
  setTimeout(function () {
    self.link = torrentLink
    self.client.add(torrentLink, {path: config.torrent.downloads}, function (torrent) {
      console.log('Start torrent: ' + torrent.name)
      self.torrent = torrent
      torrent.on('done', function () {
        console.log('Finish torrent: ' + torrent.name)
        callback(torrent)
      })
    })
  }, 1)
}

Client.prototype.stop = function () {
  this.torrent.destroy()
}

Client.prototype.getInfo = function () {

}

module.exports = Client
