import React from 'react'
import './banner.css'
const BannerTop = () => {
    const bannerImg = "https://www.jiomart.com/images/cms/aw_rbslider/slides/1714460052_Marathi.jpg?im=Resize=(2368,400)"
  return (
    <div className='container'>
        <div className="bannerTop">
            <div className="bannerTop-img">
                <img src={bannerImg} alt="" />

            </div>
        </div>
      
    </div>
  )
}

export default BannerTop
