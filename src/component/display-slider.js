import React, { useState, useEffect } from "react";
// #container contains all the images, while #frame contains all visible images. Slider will
// translate/shift #container within #frame

export default function DisplaySlider(props) {
  const { sectionName, children } = props;
  const [distance, setDistance] = useState(0);
  const [translationIndex, setTranslationIndex] = useState(0);
  const [maxTranslationIndex, setMaxTranslationIndex] = useState(0);
  const [distanceEachClick, setDistanceEachClick] = useState(0);
  useEffect(() => {
    const frameWidth = document.getElementById(
      `${sectionName}-frame`
    ).offsetWidth;
    const containerWidth = document.getElementById(
      `${sectionName}-container`
    ).offsetWidth;
    setDistanceEachClick(frameWidth * 0.9);
    setMaxTranslationIndex(containerWidth / (frameWidth * 0.9));
  }, [children]);

  const slideLeft = () => {
    if (translationIndex > 0) {
      if (translationIndex < 1) {
        setDistance(0);
        setTranslationIndex(0);
      } else {
        setDistance(distance + distanceEachClick);
        setTranslationIndex(translationIndex - 1);
      }
    }
  };
  const slideRight = () => {
    if (translationIndex < maxTranslationIndex) {
      if (maxTranslationIndex - translationIndex < 2) {
        setDistance((maxTranslationIndex - 1) * distanceEachClick * -1);
        setTranslationIndex(maxTranslationIndex - 1);
      } else {
        setDistance(distance - distanceEachClick);
        setTranslationIndex(translationIndex + 1);
      }
    }
  };
  return (
    <div>
      <div>
        <button type="button" className="left-button" onClick={slideLeft}>
          <i className="material-icons arrow">keyboard_arrow_left</i>
        </button>
        <button type="button" className="right-button" onClick={slideRight}>
          <i className="material-icons arrow">keyboard_arrow_right</i>
        </button>
      </div>
      <div id={`${sectionName}-frame`}>
        <div
          id={`${sectionName}-container`}
          style={{ transform: `translateX(${distance}px)` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
