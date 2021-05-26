import React, {Component} from "react";
import {AlbumpicData} from "./AlbumpicData";
import styles from "./Album.css";
import AudioPlayer from 'react-audio-element';
import {FaPlayCircle} from "react-icons/fa";

function AlbumPic(){
  return(
    <div class = "albums row justify-content-center mt-4 mb-5">
      <iframe src="https://open.spotify.com/embed/track/54IEHmL0L39iTA3qyNq0u9" className = "album1" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <iframe src="https://open.spotify.com/embed/track/54IEHmL0L39iTA3qyNq0u9" className = "album2" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>


    </div>
  )
}

export default AlbumPic;
