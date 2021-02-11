import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "./PrimaryComponent.scss";

Modal.setAppElement("#root");

// Fix: clean up this mess of a component
function PrimaryComponent({
  singleImg,
  bgColour,
  topLine,
  lightText,
  lightTextDescription,
  headline,
  body,
  body2,
  body3,
  buttonLabel,
  buttonColour,
  buttonLink,
  img,
  alt,
  textStart,
  includesList,
  includesHeaders,
  header1,
  header2,
  listArray,
  logo,
  isStaff,
  title,
  subtitle,
  modalBody,
  modalFooter,
  modalLink,
  textWarning,
  blockText
}) {
  const [modalisOpen, setModalIsOpen] = useState(false);
  const [modalContent, setProgramModal] = useState({
    program: "",
    subtitle: "",
    image: "",
    programDescription: "",
    programFooter: "",
  });

  function modalClick(
    program,
    subtitle,
    programDescription,
    programFooter,
    image
  ) {
    setProgramModal({
      ...modalContent,
      program,
      subtitle,
      programDescription,
      programFooter,
      image,
    });
    setModalIsOpen(true);
  }
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
          <h1 className={lightText ? "top-line" : "top-line dark"}>
            {topLine}
          </h1>
          <div
            className="row primary__hero-row"
            style={{
              display: "flex",
              flexDirection: textStart === "start" ? "row-reverse" : "row",
            }}
          >
            {img && (
              <div className="col">
                {img.map(function (image, idx) {
                  return (
                    <div
                      className={
                        singleImg
                          ? "primary__hero-img-single"
                          : "primary__hero-img-multi"
                      }
                      key={idx}
                    >
                      <img
                        src={image}
                        alt={idx}
                        className={
                          isStaff ? "primary__pic-staff" : "primary__pic-img"
                        }
                      />
                      {title && (
                        <p
                          className={
                            lightText ? "pictureHeading" : "pictureHeading dark"
                          }
                        >
                          {title[idx]}
                        </p>
                      )}
                      {subtitle && (
                        <p
                          className={
                            lightText
                              ? "pictureSubtitle"
                              : "pictureSubtitle dark"
                          }
                        >
                          {subtitle[idx]}
                        </p>
                      )}

                      {modalBody && (
                        <Button
                          buttonColour={buttonColour}
                          onClick={() =>
                            modalClick(
                              title[idx],
                              subtitle[idx],
                              modalBody[idx],
                              modalFooter[idx],
                              image
                            )
                          }
                        >
                          {buttonLabel}
                        </Button>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
            {body && (
              <div className={blockText ? "column" : "col"}>
                <div className="primary__hero-text-wrapper">
                  {headline && (
                    <h1 className={lightText ? "heading" : "heading dark"}>
                      {headline}
                    </h1>
                  )}
                  {includesHeaders && (
                    <h1
                      className={lightText ? "subHeading" : "subHeading dark"}
                    >
                      {header1}
                    </h1>
                  )}
                  <p
                    className={
                      lightTextDescription
                        ? "primary__hero-body"
                        : "primary__hero-body dark"
                    }
                  >
                    {body}
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
                    <h1 className="subHeading dark">{header2}</h1>
                  )}
                  <p className="primary__hero-body dark">{body2}</p>
                  <p
                    className={
                      textWarning
                        ? "primary__hero-body bold"
                        : "primary__hero-body dark"
                    }
                  >
                    {body3}
                  </p>
                  {buttonLink && (
                    <Link to={buttonLink}>
                      <Button buttonColour={buttonColour}>{buttonLabel}</Button>
                    </Link>
                  )}
                </div>
              </div>
            )}
            {/* {img && (
              <div className="col">
                {img.map(function (image, idx) {
                  return (
                    <div
                      className={
                        singleImg
                          ? "primary__hero-img-single"
                          : "primary__hero-img-multi"
                      }
                      key={idx}
                    >
                      <img
                        src={image}
                        alt={idx}
                        className={
                          isStaff ? "primary__pic-staff" : "primary__pic-img"
                        }
                      />
                      {title && (
                        <p
                          className={
                            lightText ? "pictureHeading" : "pictureHeading dark"
                          }
                        >
                          {title[idx]}
                        </p>
                      )}
                      {subtitle && (
                        <p
                          className={
                            lightText
                              ? "pictureSubtitle"
                              : "pictureSubtitle dark"
                          }
                        >
                          {subtitle[idx]}
                        </p>
                      )}

                      {modalBody && (
                        <Button
                          buttonColour={buttonColour}
                          onClick={() =>
                            modalClick(
                              title[idx],
                              subtitle[idx],
                              modalBody[idx],
                              modalFooter[idx],
                              image
                            )
                          }
                        >
                          {buttonLabel}
                        </Button>
                      )}
                    </div>
                  );
                })}
              </div>
            )} */}
            {logo && (
              <div className="primary__hero-img-single">
                <img src={logo} alt={logo} className="primary__hero-img" />
              </div>
            )}

            {modalBody && (
              <Modal
                className={`${modalContent.title} programModal`}
                isOpen={modalisOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                  overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  },
                }}
              >
                <div
                  className="programModalClose"
                  onClick={() => setModalIsOpen(false)}
                >
                  ✖
                </div>
                <div className="modal-col">
                  <img
                    className="modal-program-img"
                    src={modalContent.image}
                    alt={modalContent.title}
                  />
                </div>
                <div className="modal-col-text">
                  <h1 className="modal-program-title">
                    {modalContent.program}
                  </h1>
                  <p className="modal-program-subtitle">
                    {modalContent.subtitle}
                  </p>
                  <p className="modal-program-description">
                    {modalContent.programDescription}
                  </p>
                  <br />
                  <p className="modal-program-description">
                    {modalContent.programFooter}
                  </p>
                  <Link to={modalLink}>
                    <Button buttonColour={buttonColour}>Contact</Button>
                  </Link>
                </div>
              </Modal>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PrimaryComponent;
