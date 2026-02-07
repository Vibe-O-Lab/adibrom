import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "שביל יער מואר בנרות" },
  { src: gallery2, alt: "מעגל נשים בטבע" },
  { src: gallery3, alt: "כלי קערות טיבטיות ונרות" },
  { src: gallery4, alt: "שביל יער באור בוקר זהוב" },
];

const GallerySection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Carousel container */}
        <div className="relative overflow-hidden rounded-lg border border-primary/20">
          {/* Main image */}
          <div className="relative aspect-[16/10] md:aspect-video w-full">
            <motion.img
              key={current}
              src={images[current].src}
              alt={images[current].alt}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm border border-primary/30 flex items-center justify-center text-primary/80 hover:text-primary hover:bg-background/80 transition-all"
            aria-label="תמונה קודמת"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm border border-primary/30 flex items-center justify-center text-primary/80 hover:text-primary hover:bg-background/80 transition-all"
            aria-label="תמונה הבאה"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-3 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-primary w-6"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`תמונה ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
