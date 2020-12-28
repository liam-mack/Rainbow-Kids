import React from 'react';
import { Button } from "../Button/Button";
import { Link } from 'react-router-dom';
import './MultiPictureComponent.css';

function MultiPictureComponent({
    bgColour, isStaff, multipleButtons, topLine, lightText, lightTextDescription, headline, description, description2, description3, buttonLabel, buttonColour, buttonLink, img, img2, img3, title, title2, title3, subtitle, subtitle2, subtitle3, alt, imgStart
}) {
    return (
        <>
            <div className={bgColour ? `primary__hero-section ${bgColour}` : 'primary__hero-section'}>
                <div className="container">
                    <div className="row primary__hero-row"
                        style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
                        <div className="col">
                            <div className="primary__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDescription ? 'primary__hero-subtitle' : 'primary__hero-subtitle dark'}>{description}</p>
                                {buttonLink && <Link to={buttonLink}>
                                    <Button buttonColour={buttonColour}>{buttonLabel}</Button>
                                </Link>}
                            </div>
                        </div>
                        <div className='col'>
                            <div className="primary__hero-img-wrapper">
                                <img src={img} alt={img} className= {isStaff? "primary__pic-staff" : "primary__pic-img" } />
                                <p className="pictureHeading">{title}</p>
                                <p className="pictureSubtitle">{subtitle}</p>
                                {multipleButtons && <Button buttonColour={buttonColour}>{buttonLabel}</Button>}
                            </div>
                            <div className="primary__hero-img-wrapper">
                                <img src={img2} alt={img2} className= {isStaff? "primary__pic-staff" : "primary__pic-img" }/>
                                <p className="pictureHeading">{title2}</p>
                                <p className="pictureSubtitle">{subtitle2}</p>
                                {multipleButtons && <Button buttonColour={buttonColour}>{buttonLabel}</Button>}
                            </div>
                            <div className="primary__hero-img-wrapper">
                                <img src={img3} alt={img3} className= {isStaff? "primary__pic-staff" : "primary__pic-img" } />
                                <p className="pictureHeading">{title3}</p>
                                <p className="pictureSubtitle">{subtitle3}</p>
                                {multipleButtons && <Button buttonColour={buttonColour}>{buttonLabel}</Button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MultiPictureComponent
