import React from 'react'
import "./CarouselSlide.scss";

function CarouselSlide({ body, img }) {
    return (
        <div className={img ? "slideCol" : "slideCol textless"}>
            <div className="slideText">
                {body}
            </div>            
            {img && (
                <div className="slideImg">
                    <img src={img}></img>                
                </div>
            )}
        </div>

        
    )
}

export default CarouselSlide
