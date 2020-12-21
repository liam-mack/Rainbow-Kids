import React from 'react';
import { Button } from "../Button/Button";
import { Link } from 'react-router-dom';
import './MultiPictureComponent.css';

function MultiPictureComponent({
    lightBg, isStaff, multipleButtons, topLine, lightText, lightTextDescription, headline, description, description2, description3, buttonLabel, buttonLink, img, img2, img3, title, title2, title3, subtitle, subtitle2, subtitle3, alt, imgStart
}) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section yellowBg' : 'home__hero-section peachBg'}>
                <div className="container">
                    <div className="row home__hero-row"
                        style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDescription ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                                {buttonLink && <Link to={buttonLink}>
                                    <Button buttonColour="pink">{buttonLabel}</Button>
                                </Link>}
                            </div>
                        </div>
                        <div className='col'>
                            <div className="home__hero-img-wrapper">
                                <img src={img} alt={img} className= {isStaff? "home__multi-pic" : "home__multi-img" } />
                                <p className="pictureHeading">{title}</p>
                                <p className="pictureSubtitle">{subtitle}</p>
                                {multipleButtons && <Button buttonColour="pink">{buttonLabel}</Button>}
                            </div>
                            <div className="home__hero-img-wrapper">
                                <img src={img2} alt={img2} className= {isStaff? "home__multi-pic" : "home__multi-img" }/>
                                <p className="pictureHeading">{title2}</p>
                                <p className="pictureSubtitle">{subtitle2}</p>
                                {multipleButtons && <Button buttonColour="pink">{buttonLabel}</Button>}
                            </div>
                            <div className="home__hero-img-wrapper">
                                <img src={img3} alt={img3} className= {isStaff? "home__multi-pic" : "home__multi-img" } />
                                <p className="pictureHeading">{title3}</p>
                                <p className="pictureSubtitle">{subtitle3}</p>
                                {multipleButtons && <Button buttonColour="pink">{buttonLabel}</Button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MultiPictureComponent
