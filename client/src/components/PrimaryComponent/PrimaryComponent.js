import React from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./PrimaryComponent.css";

// Fix: clean up this mess of a component
function PrimaryComponent({
  bgColour,
  topLine,
  lightText,
  lightTextDescription,
  headline,
  description,
  description2,
  description3,
  buttonLabel,
  buttonColour,
  buttonLink,
  img,
  alt,
  imgStart,
  includesList,
  includesHeaders,
  header1,
  header2,
  listArray,
  logo
}) {
  return (
    <>
      <div
        className={
          bgColour
            ? `primary__hero-section ${bgColour}`
            : "primary__hero-section "
        }
      >
        <div className="container">
          <div
            className="row primary__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="primary__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                {includesHeaders && (
                  <h1 className={lightText ? "subHeading" : "subHeading dark"}>
                    {header1}
                  </h1>
                )}
                <p
                  className={
                    lightTextDescription
                      ? "primary__hero-subtitle"
                      : "primary__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                {includesList && (
                  <ul className="styledList">
                    {listArray.map(function (i, idx) {
                      return (
                        <li className={`rainbow li${idx}`} key={idx}>
                          <p>{i}</p>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {includesHeaders && (
                  <h1 className={lightText ? "subHeading" : "subHeading dark"}>
                    {header2}
                  </h1>
                )}
                <p
                  className={
                    lightTextDescription
                      ? "primary__hero-subtitle"
                      : "primary__hero-subtitle dark"
                  }
                >
                  {description2}
                </p>
                <p
                  className={
                    lightTextDescription
                      ? "primary__hero-subtitle"
                      : "primary__hero-subtitle dark"
                  }
                >
                  {description3}
                </p>
                {buttonLink && (
                  <Link to={buttonLink}>
                    <Button buttonColour={buttonColour}>{buttonLabel}</Button>
                  </Link>
                )}
              </div>
            </div>
            {img && (
              <div className="col">
                <div className="primary__hero-img-wrapper">
                  <img src={img} alt={img} className={logo ? "primary__hero-img" : "primary__pic-img"} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PrimaryComponent;
