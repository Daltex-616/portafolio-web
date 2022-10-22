import React from 'react'
import "./Cover.css"
import covervideo from "../../media/covervideo.mp4"

const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={covervideo} autoPlay loop muted> </video>
        <h1>Zamora Federico Nicolas</h1>
        <p>Developer | Designer | Programador</p>
    </div>
  )
}

export default Cover