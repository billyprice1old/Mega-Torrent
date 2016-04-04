# Installation
  `npm install mega-torrent`

  `var Mega_Torrent = require('mega-torrent')`  

# API
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
