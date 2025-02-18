import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For a Better Dining Experience, Download <br /> BiTEMANi App </p>
        <p>now—your favorite meals, just a tap away!</p>
        <div className='app-download-platforms'>
            <img src={assets.play_store} alt='' />
            <img src={assets.app_store} alt='' />
        </div>
    </div>
  )
}

export default AppDownload