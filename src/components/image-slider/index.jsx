import { useState, useEffect, useCallback } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url = "https://picsum.photos/v2/list", limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  // Fetch images with stable reference using useCallback
  const fetchImages = useCallback(async (getUrl) => {
    try {
      setLoading(true);
      setErrorMsg(null);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      if (!response.ok) throw new Error(`Failed to fetch images: ${response.statusText}`);
      const data = await response.json();
      setImages(data);
      setCurrentSlide(0); // Reset to first slide on new data
    } catch (e) {
      setErrorMsg(e.message);
    } finally {
      setLoading(false);
    }
  }, [page, limit]);

  // Effect to fetch images when url or fetchImages changes
  useEffect(() => {
    if (url && url.trim() !== "") {
      fetchImages(url);
    }
  }, [url, fetchImages]);

  // Handlers to navigate slides
  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  if (loading) return <div>Loading images... Please wait.</div>;
  if (errorMsg) return <div>Error occurred: {errorMsg}</div>;

  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
      {images.length > 0 &&
        images.map((imageItem, index) => (
          <img
            key={imageItem.id}
            src={imageItem.download_url}
            alt={`By ${imageItem.author}`}
            className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
          />
        ))}
      <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />

      <span className="circle-indicators">
        {images.length > 0 &&
          images.map((_, index) => (
            <button
              key={index}
              className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
      </span>
    </div>
  );
}
