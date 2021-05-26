import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebookF,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


export default function SocialBar(){
  return(
    <div className = "socialContainer text-center">
      <a href = "https://www.youtube.com/channel/UCSO0_aUhJ-nIfZtXJoWAQgg" className = "youTube px-3">
        <FontAwesomeIcon icon={faFacebookF} size = "2x"/>
      </a>
      <a href = "https://twitter.com/jordon_mp3" className = "twitter px-3">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href = "https://www.instagram.com/jordon.mp3/" className = "instagram px-3">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  )
}
