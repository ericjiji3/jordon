import React, {Component} from "react";

function AlbumPic(){
  return(
    <div class = "albums row justify-content-center mt-4 mb-5">
      <iframe src="https://open.spotify.com/embed/track/54IEHmL0L39iTA3qyNq0u9" title = "album1" className = "album1" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <iframe src="https://open.spotify.com/embed/track/54IEHmL0L39iTA3qyNq0u9" title = "album2" className = "album2" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>


    </div>
  )
}

export default AlbumPic;
