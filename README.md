# Installation
  `npm install mega-torrent`

  `var Mega_Torrent = require('mega-torrent')`  

# API
  ### var mega_t = new Mega_Torrent([options])
  Create new torrent downloader
  #### Supporter options:
  email - User login email  
  password - User password

  ### mega_t.download(torrent)
  Start downloading a torrent
  #### torrent can be:
  • magnet uri (string)   
  • torrent file (buffer)   
  • info hash (hex string or buffer)    
  • parsed torrent (from parse-torrent)   
  • http/https url to a torrent file (string)   
  • filesystem path to a torrent file (string)    
