
function Mega_Torrent(data){
  this.email = data.email
  this.password = data.password
}

Mega_Torrent.prototype.download = function(url){
  var c = new client()
  c.download(url, function(torrent){
    torrent.files.forEach(function(file){
      console.log(file.name)
      console.log('Upload '+file.name+' on Mega')
      var m = new mega({email: self.email, password: self.password})
      m.upload(config.torrent.downloads+file.name)
    })
  })
}

module.exports = Mega_Torrent
