import React, { useEffect, useRef, useState } from "react";
import "./productShowcase.css";

const ProductShowcase = () => {
  const ref = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);

  const toggleAnimation = (e) => {
    if (e[0].isIntersecting) {
      setShowAnimation(true);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);
    if (!showAnimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`product-showcase  ${showAnimation ? "scale-up-bottom" : ""}`}
    >
      {showAnimation &&<div className="showcase-wrapper">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png"
          className="showcase-ui showcase-mockup-1"
        />
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png"
          className="showcase-ui showcase-mockup-2"
        />
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png"
          className="showcase-ui showcase-mockup-3"
        />
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png"
          className="showcase-ui showcase-mockup-4"
        />
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png"
          className="showcase-ui showcase-mockup-5"
        />
      </div>}
    </div>
  );
};

export default ProductShowcase;
