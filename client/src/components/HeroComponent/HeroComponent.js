import React from 'react';
import { Button } from "../Button/Button";
import { Link } from 'react-router-dom';
import './HeroComponent.css';


function HeroComponent({
    lightBg, topLine, lightText, lightTextDescription, headline, description, description2, description3, buttonLabel, buttonLink, img, alt, imgStart, includesList, includesHeaders, header1, header2, listArray
}) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className= "container">
                    <div className= "row home__hero-row"
                    style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{ topLine }</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{ headline }</h1>
                                {includesHeaders && <h1 className={lightText ? "subHeading" : "subHeading dark"}>{header1}</h1>}
                                <p className={lightTextDescription ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{ description }</p>
                                    { includesList && <ul className="styledList">
                                        {listArray.map(function(i, idx){
                                            return (<li className={lightText ? "home__hero-list" : "home__hero-list dark" } key={idx}>{i}</li>)
                                        })}

                                    </ul>}
                                {includesHeaders && <h1 className={lightText ? "subHeading" : "subHeading dark"}>{header2}</h1>}
                                <p className={lightTextDescription ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{ description2 }</p>
                                <p className={lightTextDescription ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{ description3 }</p>
                                <Link to={buttonLink}>
                                    {buttonLink && <Button buttonColour="pink">{buttonLabel}</Button>}
                                </Link>
                            </div>
                        </div>
                        {img && <div className='col'>
                            <div className="home__hero-img-wrapper">
                                <img src={img} alt={img} className="home__hero-img" />
                            </div> 
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroComponent
