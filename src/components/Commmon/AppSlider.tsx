import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { MoveLeft, MoveRight } from "lucide-react";

export interface SliderItem {
  id: string | number;
  src: string;
  alt?: string;
}
interface AppSliderProps {
  items: SliderItem[];
  loop?: boolean;
  className?: string;
  imageClassName?: string;
  onSlideChanged?: (idx: number) => void;
}

const AppSlider = ({ items, loop = false, className = "", imageClassName = "", onSlideChanged }: AppSliderProps) => {
  const [current, setCurrent] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop,
      slideChanged(slider) {
        setCurrent(slider.track.details.rel);
        onSlideChanged?.(slider.track.details.rel);
      },
      renderMode: "precision",
    },
    []
  );

  const goPrev = () => instanceRef.current?.prev();
  const goNext = () => instanceRef.current?.next();

  const total = items.length;
  const displayIndex = `${String(current + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  return (
    <div className={`relative ${className}`}>
      <div ref={sliderRef} className="keen-slider max-h-[630px] overflow-hidden">
        {items.map((it) => (
          <div key={it.id} className="keen-slider__slide flex items-center justify-center bg-black/5">
            <img src={it.src} alt={it.alt || String(it.id)} className={`w-full h-auto object-cover ${imageClassName}`} />
          </div>
        ))}
      </div>

      {/* Arrows */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-transparent border border-[#FFFFFF] shadow flex items-center justify-center text-[#FFFFFF]"
            aria-label="Previous"
          >
            <MoveLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-transparent border border-[#FFFFFF] shadow flex items-center justify-center text-[#FFFFFF]"
            aria-label="Next"
          >
            <MoveRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Index display */}
      <div className="mt-3 text-center text-[12px] text-[#23211D] font-medium">{displayIndex}</div>
    </div>
  );
};

export default AppSlider;
