import React from 'react'
import { LinkedIn, Instagram, Facebook, Twitter } from '@mui/icons-material'

import "../styles/Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="socialMedia">
            <LinkedIn onClick={() => window.open("https://www.linkedin.com/in/vu-quang-minh-b0b41b207/", "_blank")}/>
            <Instagram onClick={() => window.open("https://www.instagram.com/minhspamz/", "_blank")}/>
            <Facebook onClick={() => window.open("https://www.facebook.com/minh.vuquang.1238/", "_blank")}/>
            <Twitter onClick={() => window.open("https://twitter.com/RoxorLeo", "_blank")}/>
        </div>

        <p> &copy; 2022 Minh's website</p>
    </div>
  )
}

export default Footer