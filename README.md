# Installation
  `npm install mega-torrent`

  `var Mega_Torrent = require('mega-torrent')`  

# API
  ## Main Module
  ### var mega_t = new Mega_Torrent([options])
  Create new torrent downloader.
  #### Supporter options:
  email - User login email (Require)  
  password - User password (Require)

  ### mega_t.download(Torrent)
  Start downloading a torrent.
  #### Torrent can be:
  • magnet uri (string)   
  • torrent file (buffer)   
  • info hash (hex string or buffer)    
  • parsed torrent (from parse-torrent)   
  • http/https url to a torrent file (string)   
  • filesystem path to a torrent file (string)    

  ### mega_t.getStatus()
  Return the current status of the Mega_Torrent instance.
  #### Code:
  • 0 - Doing nothing   
  • 1 - Downloading the Torrent   
  • 2 - Uploading the Torrent

  ### mega_t.getMegas()
  Return running uploading instances. (aka megas)

  ### mega_t.getClients()
  Return running downloading instances. (aka clients)


  ## Megas
  Instance of current uploading file to MEGA.

  ### megas.getStream()
  Return [Node stream](https://nodejs.org/api/stream.html#stream_class_stream_readable) instance.

  ### megas.getProgress()
  Return the current upload percentage. (between 0 and 1)

  ### megas.getFile()
  Return [Node fs stats](https://nodejs.org/api/fs.html#fs_class_fs_stats) instance.


  ##Clients
  Instance of downloading torrent client.

  ### clients.stop()
  Stop and destroy the current downloading torrent.

  ### clients.getTorrent()
  Return [WebTorrent torrent](https://webtorrent.io/docs#torrent) instance.
