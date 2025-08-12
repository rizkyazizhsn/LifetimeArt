import { useEffect, useState } from "react";
import "./Slider.css"

type SliderProps = {
  direction: "left" | "right";
  element: React.ReactNode[]
}
const Slider = ({
  direction,
  element
}: SliderProps) => {
  const [slides, setSlides] = useState<React.ReactNode[]>([])

  useEffect(() => {
    setSlides([...element, ...element])
  }, [element])
  return (
    <div className="slider">
      <div className={`slider-track ${direction === "right" ? "scrollRight" : "scrollLeft"}`}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {slide}
          </div>
        ))}
      </div>      
    </div>
  )
}

export default Slider