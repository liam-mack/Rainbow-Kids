import React from 'react'
import "./BannerImage.css"

const BannerImage = (props) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const style = {
    'left': 0,
    'min-width': '100%',
  }

  return (
    <div className= {props.banner} style={style}>
      {/* Pass Props in from Home Page, consider className prop to allow CSS styling to set background image instead of src prop */}
      {/* <img className="BannerImage" src={`${process.env.PUBLIC_URL}/images/HomeBanner.jpg`} alt={props.alt} style={style} />   */}
      <h1 className="BannerTitle">Rainbow Kidschool</h1>
      <p className="BannerDescription">Children learning through active investigation</p>  

      {/* Dynamic Page Header */}
      {/* <h1 className="BannerTitle">{props.title}</h1>
      <p className="BannerDescription">{props.subtitle}</p>   */}
    </div>
  )
}



export default BannerImage
