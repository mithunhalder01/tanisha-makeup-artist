import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import heroS1 from "@/assets/images/heroS1.webp";
import heroS2 from "@/assets/images/heroS2.webp";
import heroS3 from "@/assets/images/heroS3.webp";
import heroS4 from "@/assets/images/heroS4.webp";

const images = [heroS1, heroS2, heroS3, heroS4];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      3500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="w-full bg-white">
      {/* HERO SLIDER */}
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div
          className="relative mx-auto w-full max-w-[520px]
                     aspect-[3/4] rounded-[2.5rem]
                     overflow-hidden bg-gray-100 shadow-xl"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Makeup work"
            />
          </AnimatePresence>

          {/* soft gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t
                          from-black/25 via-black/10 to-transparent" />

          {/* dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all
                  ${i === current
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/80"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
