import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const images = [
  "/images/makeup1.PNG",
  "/images/makeup2.PNG",
  "/images/makeup3.jpg",
  "/images/makeup4.jpg",
  "/images/makeup5.jpg",
  "/images/makeup6.jpg",
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light">
            Makeup <span className="font-semibold">Portfolio</span>
          </h2>
          <p className="mt-3 text-gray-500">
            Bridal • Party • Editorial Looks
          </p>
        </motion.div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl overflow-hidden group"
            >
              {/* 4:3 Portrait */}
              <div className="aspect-[3/4]">
                <img
                  src={img}
                  alt="Makeup work"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE SLIDER */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={14}
            slidesPerView={1.15}
            centeredSlides
            className="pb-6"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl overflow-hidden"
                >
                  {/* 4:3 Portrait */}
                  <div className="aspect-[3/4] mt-2">
                    <img
                      src={img}
                      alt="Makeup work"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
