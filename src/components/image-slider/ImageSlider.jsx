import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import classNames from 'classnames';
import './imageSlider.css';

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const resp = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await resp.json();
      if (data) {
        setImages(data)
      }
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (url !== '') fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  };
  if (errorMsg !== null) {
    return <div>Error occurred ! {errorMsg}</div>;
  };

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
  };

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrevious}
      />
      {images && images.length
        ? images.map((imageItem, index) => (
          <img
            key={imageItem.id}
            alt={imageItem.download_url}
            src={imageItem.download_url}
            className={classNames('current-image', {
              'hide-current-image': currentSlide !== index,
            })}
          />
        )) : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
            <button
              key={index}
              className={classNames('current-indicator', {
                'inactive-indicator': currentSlide !== index,
              })}
              onClick={() => setCurrentSlide(index)}
            >
            </button>
          ))
          : null}
      </span>
    </div>
  )
}

export default ImageSlider