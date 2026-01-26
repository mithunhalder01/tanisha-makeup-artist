import { motion } from "framer-motion";
import { useState } from "react";

import reel1 from "../../assets/reels/reel1.mp4";
import reel2 from "../../assets/reels/reel2.mp4";
import reel3 from "../../assets/reels/reel3.mp4";
import reel4 from "../../assets/reels/reel4.mp4";
import reel5 from "../../assets/reels/reel5.mp4";
import reel6 from "../../assets/reels/reel6.mp4";

const reels = [
  {
    video: reel1,
    link: "https://www.instagram.com/p/C7WsVSiSVMr/",
  },
  {
    video: reel2,
    link: "https://www.instagram.com/p/DHGXrsAyPJc/",
  },
  {
    video: reel3,
    link: "https://www.instagram.com/p/C66IIMeypnk/",
  },
  {
    video: reel4,
    link: "https://www.instagram.com/p/DDuJExJSsRr/",
  },
  {
    video: reel5,
    link: "https://www.instagram.com/p/C6BulIcyFtV/",
  },
  {
    video: reel6,
    link: "https://www.instagram.com/p/DSKmryrj7Sd/",
  },
];

const ReelsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light">
            Instagram <span className="font-semibold">Reels</span>
          </h2>
          <p className="mt-4 text-gray-500">
            Bridal looks • Party glam • Real clients
          </p>
        </motion.div>

        {/* Reels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {reels.map((item, index) => (
            <ReelCard key={index} {...item} delay={index * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;

/* ---------------------------------- */
/* -------- Reel Card Component ------ */
/* ---------------------------------- */

const ReelCard = ({ video, link, delay }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="relative rounded-3xl overflow-hidden shadow-lg group bg-gray-100"
    >
      {/* Shimmer Loader */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200" />
      )}

      {/* Click → Instagram */}
      <a href={link} target="_blank" rel="noreferrer">
        <div className="aspect-[9/16] w-full overflow-hidden">
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setLoaded(true)}
            onMouseEnter={(e) => e.target.pause()}
            onMouseLeave={(e) => e.target.play()}
            className={`w-full h-full object-cover transition duration-700 group-hover:scale-105 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </a>
    </motion.div>
  );
};
