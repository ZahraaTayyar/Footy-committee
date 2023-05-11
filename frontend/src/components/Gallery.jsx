import React, { useState } from "react";
import "../styles/Gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

function Gallery({ galleryImages }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal(index) {
    setSlideNumber(index);
    setOpenModal(true);
  }

  //close modal
  function handleCloseModal() {
    setOpenModal(false);
  }

  //previous image
  function prevSlide() {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  }

  //next image
  function nextSlide() {
    slideNumber + 1 === galleryImages.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
  }

  return (
    <div className="gallery">
      {openModal && (
        <div className="slider-wrap">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="btn-close"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="btn-prev"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="btn-next"
            onClick={nextSlide}
          />

          <div className="full-screen-image">
            <img src={galleryImages[slideNumber].img} alt="" />
          </div>
        </div>
      )}
      
      {/* <br />
      {slideNumber}/{galleryImages.length}
      <br /><br /> */}
      <div className="gallery-wrap">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Gallery;
