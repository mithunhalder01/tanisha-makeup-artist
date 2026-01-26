import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import heroS1 from "@/assets/images/heroS1.PNG";
import heroS2 from "@/assets/images/heroS2.jpg";
import heroS3 from "@/assets/images/heroS3.jpg";
import heroS4 from "@/assets/images/heroS4.PNG";

const images = [heroS1, heroS2, heroS3, heroS4];

const clients = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((p) => (p + 1) % images.length),
      3500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="w-full bg-white">
      {/* MAIN WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16
                      grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* IMAGE (TOP on mobile, RIGHT on desktop) */}
        <div
          className="relative order-1 md:order-2 w-full max-w-[420px]
                     aspect-[3/4] mx-auto rounded-3xl overflow-hidden
                     bg-gray-100"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* gradient */}
          <div className="absolute inset-0 bg-gradient-to-t
                          from-black/20 via-black/5 to-transparent" />

          {/* dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 w-2 rounded-full transition-all
                  ${i === current ? "bg-white scale-125" : "bg-white/50"}`}
              />
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1 space-y-6"
        >
          <p className="text-sky-500 text-sm font-semibold tracking-wide">
            Loved by 500+ Happy Clients
          </p>

          <h1 className="text-4xl md:text-5xl font-light leading-tight">
            Bridal & Party <br />
            <span className="font-semibold">Makeup Artist</span>
          </h1>

          <p className="text-gray-600 max-w-md">
            Enhancing natural beauty with soft, elegant and timeless makeup
            for your most special moments.
          </p>

          {/* rating */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1 text-yellow-400">
              ★ ★ ★ ★ ★
              <span className="ml-2 text-gray-600 text-sm">5.0 Rating</span>
            </div>

            <div className="flex -space-x-3">
              {clients.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  alt=""
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="https://wa.me/917827888273"
              className="px-7 py-3 bg-black text-white rounded-full
                         text-sm hover:bg-gray-800 transition text-center"
            >
              Book on WhatsApp
            </a>

            <a
              href="#portfolio"
              className="px-7 py-3 border border-gray-300 rounded-full
                         text-sm hover:bg-gray-100 transition text-center"
            >
              View Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
